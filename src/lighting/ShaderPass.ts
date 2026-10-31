import { vec } from '@basementuniverse/vec';
import type { Light } from './Light';
import { LightingCamera, LightingImage } from './types';
import copyShader = require('./shaders/copy.frag.glsl');
import diffuseShader = require('./shaders/diffuse.frag.glsl');
import quadShader = require('./shaders/quad.vert.glsl');
import specularShader = require('./shaders/specular.frag.glsl');
import surfaceShader = require('./shaders/surface.glsl');

/**
 * Everything that the shaders need for rendering a frame
 */
export type ShaderScene = {
  camera: LightingCamera;
  screen: vec;
  lights: Light[];
  ambientLightMap: LightingImage;
  normalMap: LightingImage;
  specularMap: LightingImage | null;
  groundMask: LightingImage;
  wall1Mask: LightingImage;
  wall2Mask: LightingImage;
  imageSmoothingEnabled: boolean;
  wallLightingYOffset: number;
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

/**
 * WebGL only guarantees 8 texture units, which is exactly what we're using
 */
enum TextureUnit {
  NormalMap,
  GroundMask,
  Wall1Mask,
  Wall2Mask,
  GroundLightMap,
  Wall1LightMap,
  Wall2LightMap,
  SpecularMap,
}

/**
 * Shades all of the lights in a scene using a single WebGL context
 *
 * Each light is shaded separately and then blended into a light map, so a
 * light's bumps only affect that light. Specular highlights are added up in a
 * separate buffer, because they need to be brighter than the scene
 */
export class ShaderPass {
  /**
   * The output of the most recent pass
   *
   * This doesn't use premultiplied alpha because blended lights can be brighter
   * than a partly transparent edge of the light map
   */
  public readonly canvas = document.createElement('canvas');

  private gl: WebGLRenderingContext | null = null;

  private copyProgram: Program;
  private diffuseProgram: Program;
  private specularProgram: Program;

  private textures: WebGLTexture[];
  private ambientTexture: WebGLTexture;
  private specularTexture: WebGLTexture;
  private specularFramebuffer: WebGLFramebuffer;

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
      console.warn('WebGL is not available, the shader has been disabled');
      return;
    }

    try {
      const prepend = (source: string) => `${surfaceShader}\n${source}`;

      this.copyProgram = this.createProgram(gl, copyShader);
      this.diffuseProgram = this.createProgram(gl, prepend(diffuseShader));
      this.specularProgram = this.createProgram(gl, prepend(specularShader));
    } catch (e) {
      console.error('The shader has been disabled', e);
      return;
    }

    this.textures = Object.values(TextureUnit)
      .filter(unit => typeof unit === 'number')
      .map(() => gl.createTexture()!);
    this.ambientTexture = gl.createTexture()!;
    this.specularTexture = gl.createTexture()!;
    this.specularFramebuffer = gl.createFramebuffer()!;

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
   * Upload an image to a texture
   */
  private upload(
    gl: WebGLRenderingContext,
    unit: number,
    texture: WebGLTexture,
    image: LightingImage,
    filter: number
  ) {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  }

  /**
   * Make sure the output and the specular buffer match the screen size
   */
  private resize(gl: WebGLRenderingContext, screen: vec) {
    if (this.canvas.width === screen.x && this.canvas.height === screen.y) {
      return;
    }

    this.canvas.width = screen.x;
    this.canvas.height = screen.y;
    gl.viewport(0, 0, screen.x, screen.y);

    gl.activeTexture(gl.TEXTURE0 + TextureUnit.SpecularMap);
    gl.bindTexture(gl.TEXTURE_2D, this.specularTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
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

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularFramebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      this.specularTexture,
      0
    );
  }

  /**
   * Draw a quad covering part of the screen
   */
  private drawQuad(
    gl: WebGLRenderingContext,
    { uniforms }: Program,
    screenRectangle: number[],
    worldRectangle: number[] = [0, 0, 0, 0]
  ) {
    gl.uniform4fv(uniforms.u_screenRectangle, screenRectangle);
    gl.uniform4fv(uniforms.u_worldRectangle, worldRectangle);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  /**
   * Draw a texture over the whole screen, replacing what's already there
   */
  private drawTexture(
    gl: WebGLRenderingContext,
    texture: WebGLTexture,
    screen: vec,
    flipY: boolean
  ) {
    const program = this.copyProgram;

    gl.disable(gl.BLEND);
    gl.useProgram(program.program);
    gl.uniform2f(program.uniforms.u_screen, screen.x, screen.y);
    gl.uniform1f(program.uniforms.u_flipY, flipY ? 1 : 0);

    gl.activeTexture(gl.TEXTURE0 + TextureUnit.SpecularMap);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(program.uniforms.u_image, TextureUnit.SpecularMap);

    this.drawQuad(gl, program, [0, 0, screen.x, screen.y]);
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
    gl.uniform1f(uniforms.u_wallLightingYOffset, scene.wallLightingYOffset);
    gl.uniform1f(uniforms.u_banding, scene.banding);
    gl.uniform1i(uniforms.u_sceneNormalMap, TextureUnit.NormalMap);
    gl.uniform1i(uniforms.u_groundMask, TextureUnit.GroundMask);
    gl.uniform1i(uniforms.u_wall1Mask, TextureUnit.Wall1Mask);
    gl.uniform1i(uniforms.u_wall2Mask, TextureUnit.Wall2Mask);
    gl.uniform1i(uniforms.u_groundLightMap, TextureUnit.GroundLightMap);
    gl.uniform1i(uniforms.u_wall1LightMap, TextureUnit.Wall1LightMap);
    gl.uniform1i(uniforms.u_wall2LightMap, TextureUnit.Wall2LightMap);
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
      light.groundLightCanvas.width
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

    const light = scene.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;
    const maps: [TextureUnit, LightingImage][] = [
      [TextureUnit.NormalMap, scene.normalMap],
      [TextureUnit.GroundMask, scene.groundMask],
      [TextureUnit.Wall1Mask, scene.wall1Mask],
      [TextureUnit.Wall2Mask, scene.wall2Mask],
    ];
    for (const [unit, image] of maps) {
      this.upload(gl, unit, this.textures[unit], image, gl.NEAREST);
    }

    // Start with the ambient light, which already has the alpha channel that
    // we want for the final light map
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    this.upload(
      gl,
      TextureUnit.SpecularMap,
      this.ambientTexture,
      scene.ambientLightMap,
      gl.NEAREST
    );
    this.drawTexture(gl, this.ambientTexture, scene.screen, false);

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
      this.upload(
        gl,
        TextureUnit.SpecularMap,
        this.textures[TextureUnit.SpecularMap],
        scene.specularMap,
        gl.NEAREST
      );

      const { uniforms } = this.specularProgram;
      this.setSceneUniforms(gl, this.specularProgram, scene);
      gl.uniform1i(uniforms.u_sceneSpecularMap, TextureUnit.SpecularMap);
      gl.uniform1f(uniforms.u_specularStrength, scene.specularStrength);
      gl.uniform1f(uniforms.u_shininess, scene.shininess);
      gl.uniform1f(uniforms.u_viewTilt, scene.viewTilt);

      gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularFramebuffer);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    gl.enable(gl.BLEND);
    for (const item of scene.lights) {
      this.upload(
        gl,
        TextureUnit.GroundLightMap,
        this.textures[TextureUnit.GroundLightMap],
        item.groundLightCanvas,
        light
      );
      this.upload(
        gl,
        TextureUnit.Wall1LightMap,
        this.textures[TextureUnit.Wall1LightMap],
        item.wallLight1Canvas,
        light
      );
      this.upload(
        gl,
        TextureUnit.Wall2LightMap,
        this.textures[TextureUnit.Wall2LightMap],
        item.wallLight2Canvas,
        light
      );

      // Blend the same way as the 'screen' composite operation, and leave the
      // alpha channel alone
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
      this.drawLight(gl, this.diffuseProgram, item, scene);

      if (scene.specularMap) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularFramebuffer);
        gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE);
        this.drawLight(gl, this.specularProgram, item, scene);
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
      this.drawTexture(this.gl, this.specularTexture, screen, true);
    }
  }
}
