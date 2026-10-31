import { vec } from '@basementuniverse/vec';
import type { Light } from './Light';
import { GroundReceiver, Surface, WallReceiver } from './Surface';
import { Colour, LightingCamera, LightingImage } from './types';
import copyShader = require('./shaders/copy.frag.glsl');
import diffuseShader = require('./shaders/diffuse.frag.glsl');
import maskShader = require('./shaders/mask.frag.glsl');
import quadShader = require('./shaders/quad.vert.glsl');
import specularShader = require('./shaders/specular.frag.glsl');
import surfaceShader = require('./shaders/surface.glsl');

/**
 * A surface that's visible in the scene, and its ambient light
 */
export type ShaderSurface = {
  surface: Surface<any>;
  ambientLight: Colour;
};

/**
 * Everything that the shaders need for rendering a frame
 */
export type ShaderScene = {
  camera: LightingCamera;
  screen: vec;
  lights: Light[];
  surfaces: ShaderSurface[];
  normalMap: LightingImage | null;
  specularMap: LightingImage | null;
  imageSmoothingEnabled: boolean;
  wallLightingYOffset: number;
  wallLightingCutoffDistance: number;
  wallShadowLengthFactor: number;
  highlightStrength: number;
  shadowStrength: number;
  specularStrength: number;
  shininess: number;
  viewTilt: number;
  banding: number;
};

type Program = {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation>;
};

type RenderTarget = {
  texture: WebGLTexture;
  framebuffer: WebGLFramebuffer;
};

enum TextureUnit {
  NormalMap,
  SpecularMap,
  SurfaceMap,
  LightMap,
  RegionShadowMap,
  ObjectShadowMap,
  Image,
}

/**
 * The alpha channel of the surface map says what's at each pixel, these values
 * are also in the shaders
 */
enum SurfaceType {
  None = 0,
  Ground = 0.25,
  ProjectedWall = 0.5,
  FlatWall = 0.75,
  Unlit = 1,
}

/**
 * Renders the lighting for a scene using a single WebGL context
 *
 * Surfaces are drawn into a surface map without any blending, so each pixel
 * belongs to exactly one surface and knows where that surface meets the ground.
 * This means overlapping surfaces don't need any special handling.
 *
 * Each light is then shaded separately and blended into a light map, so a
 * light's bumps only affect that light. Specular highlights are added up in a
 * separate buffer, because they need to be brighter than the scene
 */
export class ShaderPass {
  private static readonly FOOT_SCALE = 4;
  private static readonly FOOT_MAX = 65535;
  private static readonly MAX_SHADOW_BIAS = 255;

  /**
   * The output of the most recent pass
   */
  public readonly canvas = document.createElement('canvas');

  private gl: WebGLRenderingContext | null = null;

  private copyProgram: Program;
  private maskProgram: Program;
  private diffuseProgram: Program;
  private specularProgram: Program;

  private textures: Record<TextureUnit, WebGLTexture>;
  private surfaceTarget: RenderTarget;
  private specularTarget: RenderTarget;

  /**
   * Images only need to be uploaded once, but canvases might change
   */
  private imageTextures = new WeakMap<LightingImage, WebGLTexture>();
  private uploadedCanvases = new Set<LightingImage>();

  public constructor() {
    this.canvas.addEventListener('webglcontextlost', e => e.preventDefault());
    this.canvas.addEventListener('webglcontextrestored', () =>
      this.initialise()
    );

    this.initialise();
  }

  /**
   * Check if the shaders can be used
   */
  public get available(): boolean {
    return this.gl !== null && !this.gl.isContextLost();
  }

  private initialise() {
    this.gl = null;

    const gl = this.canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      depth: false,
      stencil: false,
    });
    if (!gl) {
      console.warn('WebGL is not available, lighting has been disabled');
      return;
    }

    try {
      const prepend = (source: string) => `${surfaceShader}\n${source}`;

      this.copyProgram = this.createProgram(gl, copyShader);
      this.maskProgram = this.createProgram(gl, maskShader);
      this.diffuseProgram = this.createProgram(gl, prepend(diffuseShader));
      this.specularProgram = this.createProgram(gl, prepend(specularShader));
    } catch (e) {
      console.error('Lighting has been disabled', e);
      return;
    }

    this.textures = {
      [TextureUnit.NormalMap]: gl.createTexture()!,
      [TextureUnit.SpecularMap]: gl.createTexture()!,
      [TextureUnit.SurfaceMap]: gl.createTexture()!,
      [TextureUnit.LightMap]: gl.createTexture()!,
      [TextureUnit.RegionShadowMap]: gl.createTexture()!,
      [TextureUnit.ObjectShadowMap]: gl.createTexture()!,
      [TextureUnit.Image]: gl.createTexture()!,
    };
    this.surfaceTarget = {
      texture: this.textures[TextureUnit.SurfaceMap],
      framebuffer: gl.createFramebuffer()!,
    };
    this.specularTarget = {
      texture: gl.createTexture()!,
      framebuffer: gl.createFramebuffer()!,
    };
    this.imageTextures = new WeakMap();

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);

    this.gl = gl;
    this.canvas.width = this.canvas.height = 0;
  }

  private compileShader(
    gl: WebGLRenderingContext,
    type: number,
    source: string
  ): WebGLShader {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (
      !gl.getShaderParameter(shader, gl.COMPILE_STATUS) &&
      !gl.isContextLost()
    ) {
      throw new Error(gl.getShaderInfoLog(shader) ?? 'Unable to compile');
    }

    return shader;
  }

  private createProgram(
    gl: WebGLRenderingContext,
    fragmentSource: string
  ): Program {
    const program = gl.createProgram()!;

    gl.attachShader(
      program,
      this.compileShader(gl, gl.VERTEX_SHADER, quadShader)
    );
    gl.attachShader(
      program,
      this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource)
    );
    gl.bindAttribLocation(program, 0, 'a_corner');
    gl.linkProgram(program);

    if (
      !gl.getProgramParameter(program, gl.LINK_STATUS) &&
      !gl.isContextLost()
    ) {
      throw new Error(gl.getProgramInfoLog(program) ?? 'Unable to link');
    }

    const uniforms: Program['uniforms'] = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const { name } = gl.getActiveUniform(program, i)!;
      uniforms[name] = gl.getUniformLocation(program, name)!;
    }

    return { program, uniforms };
  }

  /**
   * Bind a texture and set its filtering
   */
  private bindTexture(
    gl: WebGLRenderingContext,
    unit: number,
    texture: WebGLTexture,
    filter: number
  ) {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }

  /**
   * Upload an image to one of the shared textures
   */
  private upload(
    gl: WebGLRenderingContext,
    unit: TextureUnit,
    image: LightingImage,
    filter: number
  ) {
    this.bindTexture(gl, unit, this.textures[unit], filter);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  }

  /**
   * Bind a surface's mask, uploading it if we haven't seen it before
   */
  private bindImage(
    gl: WebGLRenderingContext,
    image: LightingImage,
    filter: number
  ) {
    let texture = this.imageTextures.get(image);
    const isNew = texture === undefined;
    if (!texture) {
      texture = gl.createTexture()!;
      this.imageTextures.set(image, texture);
    }

    this.bindTexture(gl, TextureUnit.Image, texture, filter);

    const isStale =
      image instanceof HTMLCanvasElement && !this.uploadedCanvases.has(image);
    if (isNew || isStale) {
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image
      );
      this.uploadedCanvases.add(image);
    }
  }

  /**
   * Set the size of a texture that we're rendering into
   */
  private resizeTarget(
    gl: WebGLRenderingContext,
    { texture, framebuffer }: RenderTarget,
    screen: vec
  ) {
    this.bindTexture(gl, TextureUnit.Image, texture, gl.NEAREST);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      screen.x,
      screen.y,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );
  }

  /**
   * Make sure the output and the render targets match the screen size
   */
  private resize(gl: WebGLRenderingContext, screen: vec) {
    if (this.canvas.width === screen.x && this.canvas.height === screen.y) {
      return;
    }

    this.canvas.width = screen.x;
    this.canvas.height = screen.y;
    gl.viewport(0, 0, screen.x, screen.y);

    this.resizeTarget(gl, this.surfaceTarget, screen);
    this.resizeTarget(gl, this.specularTarget, screen);
  }

  /**
   * Draw a quad covering part of the screen
   */
  private drawQuad(
    gl: WebGLRenderingContext,
    { uniforms }: Program,
    screenRectangle: number[],
    worldRectangle: number[] = [0, 0, 0, 0],
    maskRectangle: number[] = [0, 0, 0, 0]
  ) {
    gl.uniform4fv(uniforms.u_screenRectangle, screenRectangle);
    gl.uniform4fv(uniforms.u_worldRectangle, worldRectangle);
    gl.uniform4fv(uniforms.u_maskRectangle, maskRectangle);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  /**
   * Draw a texture over the whole screen, replacing what's already there
   */
  private drawTexture(
    gl: WebGLRenderingContext,
    texture: WebGLTexture,
    screen: vec
  ) {
    const program = this.copyProgram;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.disable(gl.BLEND);
    gl.useProgram(program.program);
    gl.uniform2f(program.uniforms.u_screen, screen.x, screen.y);
    gl.uniform1f(program.uniforms.u_flipY, 1);

    this.bindTexture(gl, TextureUnit.Image, texture, gl.NEAREST);
    gl.uniform1i(program.uniforms.u_image, TextureUnit.Image);

    this.drawQuad(gl, program, [0, 0, screen.x, screen.y]);

    // A texture can't stay bound while we're rendering into it
    gl.bindTexture(gl.TEXTURE_2D, null);
  }

  /**
   * Get what we need to write to the surface map for a surface
   */
  private surfaceValue(surface: Surface<any>, scene: ShaderScene): number[] {
    if (surface instanceof GroundReceiver) {
      return [0, 0, 0, SurfaceType.Ground];
    }

    const wall = surface as WallReceiver;

    let type = SurfaceType.Unlit;
    if (wall.receiveLight) {
      type = wall.projectShadows
        ? SurfaceType.ProjectedWall
        : SurfaceType.FlatWall;
    }

    // The foot position is stored relative to the top of the camera's view
    const foot = Math.round(
      (wall.position.y + wall.size.y - scene.camera.bounds.top) *
        ShaderPass.FOOT_SCALE
    );
    const clampedFoot = Math.min(Math.max(foot, 0), ShaderPass.FOOT_MAX);
    const bias = Math.min(wall.shadowBias, ShaderPass.MAX_SHADOW_BIAS);

    return [
      Math.floor(clampedFoot / 256) / 255,
      (clampedFoot % 256) / 255,
      Math.round(bias) / 255,
      type,
    ];
  }

  /**
   * Draw each visible surface, writing a value to all of the surface's pixels
   */
  private drawSurfaces(
    gl: WebGLRenderingContext,
    scene: ShaderScene,
    getValue: (item: ShaderSurface) => number[]
  ) {
    const { uniforms } = this.maskProgram;
    const filter = scene.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;

    gl.uniform1i(uniforms.u_mask, TextureUnit.Image);

    for (const item of scene.surfaces) {
      const { surface } = item;
      const mask = surface.getMask();
      if (mask === null) {
        continue;
      }

      let maskRectangle = [0, 0, 1, 1];
      if (mask !== 'solid') {
        this.bindImage(gl, mask, filter);

        // Repeated images are lined up with the world, the same as a pattern
        if (surface.repeat && !surface.customDraw.mask) {
          maskRectangle = [
            surface.position.x / mask.width,
            surface.position.y / mask.height,
            surface.size.x / mask.width,
            surface.size.y / mask.height,
          ];
        }
      }

      const topLeft = scene.camera.worldToScreen(surface.position);
      const bottomRight = scene.camera.worldToScreen(
        vec.add(surface.position, surface.size)
      );

      gl.uniform1f(uniforms.u_useMask, mask === 'solid' ? 0 : 1);
      gl.uniform4fv(uniforms.u_value, getValue(item));
      this.drawQuad(
        gl,
        this.maskProgram,
        [
          topLeft.x,
          topLeft.y,
          bottomRight.x - topLeft.x,
          bottomRight.y - topLeft.y,
        ],
        undefined,
        maskRectangle
      );
    }
  }

  /**
   * Set the uniforms that are the same for every light in the scene
   */
  private setSceneUniforms(
    gl: WebGLRenderingContext,
    { program, uniforms }: Program,
    scene: ShaderScene
  ) {
    gl.useProgram(program);
    gl.uniform2f(uniforms.u_screen, scene.screen.x, scene.screen.y);
    gl.uniform1f(uniforms.u_useNormalMap, scene.normalMap ? 1 : 0);
    gl.uniform1f(uniforms.u_wallLightingYOffset, scene.wallLightingYOffset);
    gl.uniform1f(
      uniforms.u_wallLightingCutoffDistance,
      scene.wallLightingCutoffDistance
    );
    gl.uniform1f(
      uniforms.u_wallShadowLengthFactor,
      scene.wallShadowLengthFactor
    );
    gl.uniform1f(uniforms.u_banding, scene.banding);
    gl.uniform1i(uniforms.u_sceneNormalMap, TextureUnit.NormalMap);
    gl.uniform1i(uniforms.u_surfaceMap, TextureUnit.SurfaceMap);
    gl.uniform1i(uniforms.u_lightMap, TextureUnit.LightMap);
    gl.uniform1i(uniforms.u_regionShadowMap, TextureUnit.RegionShadowMap);
    gl.uniform1i(uniforms.u_objectShadowMap, TextureUnit.ObjectShadowMap);
  }

  /**
   * Set the uniforms for a light and draw its bounding box
   */
  private drawLight(
    gl: WebGLRenderingContext,
    program: Program,
    light: Light,
    scene: ShaderScene
  ) {
    const { position, size } = light.bounds;
    const topLeft = scene.camera.worldToScreen(position);
    const bottomRight = scene.camera.worldToScreen(vec.add(position, size));

    gl.useProgram(program.program);
    gl.uniform1f(program.uniforms.u_lightRadius, light.radius);
    gl.uniform1f(program.uniforms.u_lightHeight, light.height);
    gl.uniform1f(
      program.uniforms.u_lightMapSize,
      light.regionShadowCanvas.width
    );
    gl.uniform1f(
      program.uniforms.u_footOrigin,
      scene.camera.bounds.top - light.position.y
    );

    this.drawQuad(
      gl,
      program,
      [
        topLeft.x,
        topLeft.y,
        bottomRight.x - topLeft.x,
        bottomRight.y - topLeft.y,
      ],
      [
        position.x - light.position.x,
        position.y - light.position.y,
        size.x,
        size.y,
      ]
    );
  }

  /**
   * Render the scene's light map into the canvas, and add up the scene's
   * specular highlights if it has a specular map
   */
  public render(scene: ShaderScene) {
    const { gl } = this;
    if (!gl) {
      return;
    }

    this.resize(gl, scene.screen);
    this.uploadedCanvases.clear();

    if (scene.normalMap) {
      this.upload(gl, TextureUnit.NormalMap, scene.normalMap, gl.NEAREST);
    }

    // Each pixel of the surface map belongs to one surface, so there's no
    // blending and surfaces cover whatever's underneath them
    gl.disable(gl.BLEND);
    gl.useProgram(this.maskProgram.program);
    gl.uniform2f(
      this.maskProgram.uniforms.u_screen,
      scene.screen.x,
      scene.screen.y
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.surfaceTarget.framebuffer);
    gl.clearColor(0, 0, 0, SurfaceType.None);
    gl.clear(gl.COLOR_BUFFER_BIT);
    this.drawSurfaces(gl, scene, ({ surface }) =>
      this.surfaceValue(surface, scene)
    );

    // Start the light map with the ambient light on each surface
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    this.drawSurfaces(gl, scene, ({ ambientLight: { r, g, b, a } }) => [
      r / 255,
      g / 255,
      b / 255,
      a,
    ]);

    this.bindTexture(
      gl,
      TextureUnit.SurfaceMap,
      this.surfaceTarget.texture,
      gl.NEAREST
    );

    this.setSceneUniforms(gl, this.diffuseProgram, scene);
    gl.uniform1f(
      this.diffuseProgram.uniforms.u_highlightStrength,
      scene.highlightStrength
    );
    gl.uniform1f(
      this.diffuseProgram.uniforms.u_shadowStrength,
      scene.shadowStrength
    );

    if (scene.specularMap) {
      this.upload(gl, TextureUnit.SpecularMap, scene.specularMap, gl.NEAREST);

      const { uniforms } = this.specularProgram;
      this.setSceneUniforms(gl, this.specularProgram, scene);
      gl.uniform1i(uniforms.u_sceneSpecularMap, TextureUnit.SpecularMap);
      gl.uniform1f(uniforms.u_specularStrength, scene.specularStrength);
      gl.uniform1f(uniforms.u_shininess, scene.shininess);
      gl.uniform1f(uniforms.u_viewTilt, scene.viewTilt);

      gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularTarget.framebuffer);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    const filter = scene.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;

    gl.enable(gl.BLEND);
    for (const light of scene.lights) {
      this.upload(gl, TextureUnit.LightMap, light.lightCanvas, filter);
      this.upload(
        gl,
        TextureUnit.RegionShadowMap,
        light.regionShadowCanvas,
        filter
      );
      this.upload(
        gl,
        TextureUnit.ObjectShadowMap,
        light.objectShadowCanvas,
        filter
      );

      // Blend the same way as the 'screen' composite operation, and leave the
      // alpha channel alone
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
      this.drawLight(gl, this.diffuseProgram, light, scene);

      if (scene.specularMap) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularTarget.framebuffer);
        gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE);
        this.drawLight(gl, this.specularProgram, light, scene);
      }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  /**
   * Replace the contents of the canvas with the specular highlights from the
   * most recent render
   */
  public showSpecular(screen: vec) {
    if (this.gl) {
      this.drawTexture(this.gl, this.specularTarget.texture, screen);
    }
  }

  /**
   * Replace the contents of the canvas with the surface map from the most
   * recent render
   */
  public showSurfaces(screen: vec) {
    if (this.gl) {
      this.drawTexture(this.gl, this.surfaceTarget.texture, screen);
    }
  }
}
