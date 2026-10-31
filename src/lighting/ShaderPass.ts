import { vec2 } from '@basementuniverse/vec';
import {
  Colour,
  GlContext,
  GlProgram,
  GlRenderTarget,
  SceneCamera,
  SceneImage,
} from '../core';
import type { Light } from './Light';
import { GroundReceiver, Surface, WallReceiver } from './Surface';
import diffuseShader = require('./shaders/diffuse.frag.glsl');
import maskShader = require('./shaders/mask.frag.glsl');
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
  camera: SceneCamera;
  screen: vec2;
  lights: Light[];
  surfaces: ShaderSurface[];
  normalMap: SceneImage | null;
  specularMap: SceneImage | null;
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

enum TextureUnit {
  NormalMap,
  SpecularMap,
  SurfaceMap,
  LightMap,
  RegionShadowMap,
  ObjectShadowMap,
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
 * Renders the lighting for a scene
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

  private context: GlContext;

  private initialised = false;

  private maskProgram: GlProgram;
  private diffuseProgram: GlProgram;
  private specularProgram: GlProgram;

  private textures: Record<
    Exclude<TextureUnit, TextureUnit.SurfaceMap>,
    WebGLTexture
  >;
  private surfaceTarget: GlRenderTarget;
  private specularTarget: GlRenderTarget;

  public constructor(context: GlContext) {
    this.context = context;
    this.context.onInitialise(gl => this.initialise(gl));
  }

  /**
   * The output of the most recent pass
   */
  public get canvas(): HTMLCanvasElement {
    return this.context.canvas;
  }

  /**
   * Check if the shaders can be used
   */
  public get available(): boolean {
    return this.initialised && this.context.available;
  }

  private initialise(gl: WebGLRenderingContext) {
    this.initialised = false;

    try {
      const prepend = (source: string) => `${surfaceShader}\n${source}`;

      this.maskProgram = this.context.createProgram(maskShader);
      this.diffuseProgram = this.context.createProgram(prepend(diffuseShader));
      this.specularProgram = this.context.createProgram(
        prepend(specularShader)
      );
    } catch (e) {
      console.error('Lighting has been disabled', e);
      return;
    }

    this.textures = {
      [TextureUnit.NormalMap]: gl.createTexture()!,
      [TextureUnit.SpecularMap]: gl.createTexture()!,
      [TextureUnit.LightMap]: gl.createTexture()!,
      [TextureUnit.RegionShadowMap]: gl.createTexture()!,
      [TextureUnit.ObjectShadowMap]: gl.createTexture()!,
    };
    this.surfaceTarget = this.context.createRenderTarget();
    this.specularTarget = this.context.createRenderTarget();

    this.initialised = true;
  }

  /**
   * Upload an image to one of the shared textures
   */
  private upload(
    unit: Exclude<TextureUnit, TextureUnit.SurfaceMap>,
    image: SceneImage,
    filter: number
  ) {
    this.context.upload(unit, this.textures[unit], image, filter);
  }

  /**
   * Make sure the output and the render targets match the screen size
   */
  private resize(screen: vec2) {
    this.context.resize(screen);
    this.context.resizeTarget(this.surfaceTarget, screen);
    this.context.resizeTarget(this.specularTarget, screen);
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

    gl.uniform1i(uniforms.u_mask, GlContext.IMAGE_UNIT);

    for (const item of scene.surfaces) {
      const { surface } = item;
      const mask = surface.getMask();
      if (mask === null) {
        continue;
      }

      let maskRectangle = [0, 0, 1, 1];
      if (mask !== 'solid') {
        this.context.bindImage(mask, filter);

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
        vec2.add(surface.position, surface.size)
      );

      gl.uniform1f(uniforms.u_useMask, mask === 'solid' ? 0 : 1);
      gl.uniform4fv(uniforms.u_value, getValue(item));
      this.context.drawQuad(
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
    { program, uniforms }: GlProgram,
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
    program: GlProgram,
    light: Light,
    scene: ShaderScene
  ) {
    const { position, size } = light.bounds;
    const topLeft = scene.camera.worldToScreen(position);
    const bottomRight = scene.camera.worldToScreen(vec2.add(position, size));

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

    this.context.drawQuad(
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
    const { gl } = this.context;
    if (!gl) {
      return;
    }

    this.resize(scene.screen);
    this.context.invalidateCanvases();

    if (scene.normalMap) {
      this.upload(TextureUnit.NormalMap, scene.normalMap, gl.NEAREST);
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

    this.context.bindTexture(
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
      this.upload(TextureUnit.SpecularMap, scene.specularMap, gl.NEAREST);

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
      this.upload(TextureUnit.LightMap, light.lightCanvas, filter);
      this.upload(
        TextureUnit.RegionShadowMap,
        light.regionShadowCanvas,
        filter
      );
      this.upload(
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
  public showSpecular(screen: vec2) {
    if (this.context.gl) {
      this.context.drawTexture(this.specularTarget.texture, screen);
    }
  }

  /**
   * Replace the contents of the canvas with the surface map from the most
   * recent render
   */
  public showSurfaces(screen: vec2) {
    if (this.context.gl) {
      this.context.drawTexture(this.surfaceTarget.texture, screen);
    }
  }
}
