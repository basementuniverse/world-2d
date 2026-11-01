import { vec2 } from '@basementuniverse/vec';
import { SceneImage } from './types';
import copyShader = require('./shaders/copy.frag.glsl');
import quadShader = require('./shaders/quad.vert.glsl');

export type GlProgram = {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation>;
};

export type GlRenderTarget = {
  texture: WebGLTexture;
  framebuffer: WebGLFramebuffer;
  size: vec2;
};

/**
 * A WebGL context that can be shared by anything rendering part of a scene
 *
 * Textures can't be shared between contexts, so sharing a context means that
 * the output of one pass can be used by another without copying it through a
 * canvas.
 *
 * Everything in the context is lost when the context is lost, so anything using
 * this should create its programs and textures in an `onInitialise()` callback.
 * The methods here should only be used from that callback, or while `available`
 * is true
 */
export class GlContext {
  /**
   * The texture unit used for images that are only needed for a single draw
   *
   * WebGL guarantees 8 texture units, this is the last of them
   */
  public static readonly IMAGE_UNIT = 7;

  /**
   * The output of the most recent pass
   */
  public readonly canvas = document.createElement('canvas');

  public gl: WebGLRenderingContext | null = null;

  private copyProgram: GlProgram;

  private initialiseCallbacks: ((gl: WebGLRenderingContext) => void)[] = [];

  /**
   * Images only need to be uploaded once, but canvases might change
   */
  private imageTextures = new WeakMap<SceneImage, WebGLTexture>();
  private uploadedCanvases = new Set<SceneImage>();

  public constructor() {
    this.canvas.addEventListener('webglcontextlost', e => e.preventDefault());
    this.canvas.addEventListener('webglcontextrestored', () =>
      this.initialise()
    );

    this.initialise();
  }

  /**
   * Check if the context can be used
   */
  public get available(): boolean {
    return this.gl !== null && !this.gl.isContextLost();
  }

  /**
   * Register a function that sets up programs and textures
   *
   * This is called straight away if the context is ready, and again whenever
   * the context is restored
   */
  public onInitialise(callback: (gl: WebGLRenderingContext) => void) {
    this.initialiseCallbacks.push(callback);

    if (this.gl) {
      callback(this.gl);
    }
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
      console.warn('WebGL is not available');
      return;
    }

    this.gl = gl;

    try {
      this.copyProgram = this.createProgram(copyShader);
    } catch (e) {
      console.error('WebGL has been disabled', e);
      this.gl = null;
      return;
    }

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

    this.canvas.width = this.canvas.height = 0;

    this.initialiseCallbacks.forEach(callback => callback(gl));
  }

  private compileShader(type: number, source: string): WebGLShader {
    const gl = this.gl!;
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

  /**
   * Create a program from a fragment shader, this will use the quad vertex
   * shader so it can be drawn with `drawQuad()`
   */
  public createProgram(fragmentSource: string): GlProgram {
    const gl = this.gl!;
    const program = gl.createProgram()!;

    gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, quadShader));
    gl.attachShader(
      program,
      this.compileShader(gl.FRAGMENT_SHADER, fragmentSource)
    );
    gl.bindAttribLocation(program, 0, 'a_corner');
    gl.linkProgram(program);

    if (
      !gl.getProgramParameter(program, gl.LINK_STATUS) &&
      !gl.isContextLost()
    ) {
      throw new Error(gl.getProgramInfoLog(program) ?? 'Unable to link');
    }

    const uniforms: GlProgram['uniforms'] = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const { name } = gl.getActiveUniform(program, i)!;
      uniforms[name] = gl.getUniformLocation(program, name)!;
    }

    return { program, uniforms };
  }

  /**
   * Create a texture that can be rendered into, this will need to be given a
   * size using `resizeTarget()`
   */
  public createRenderTarget(): GlRenderTarget {
    const gl = this.gl!;

    return {
      texture: gl.createTexture()!,
      framebuffer: gl.createFramebuffer()!,
      size: vec2(),
    };
  }

  /**
   * Bind a texture and set its filtering
   *
   * Textures can only repeat if their size is a power of 2
   */
  public bindTexture(
    unit: number,
    texture: WebGLTexture,
    filter: number,
    repeat: boolean = false
  ) {
    const gl = this.gl!;
    const wrap = repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE;

    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
  }

  /**
   * Replace the contents of a texture with an image
   */
  public upload(
    unit: number,
    texture: WebGLTexture,
    image: SceneImage,
    filter: number,
    repeat: boolean = false
  ) {
    const gl = this.gl!;

    this.bindTexture(unit, texture, filter, repeat);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  }

  /**
   * Replace the contents of a texture with RGBA pixel data
   */
  public uploadData(
    unit: number,
    texture: WebGLTexture,
    size: vec2,
    data: Uint8Array,
    filter: number,
    repeat: boolean = false
  ) {
    const gl = this.gl!;

    this.bindTexture(unit, texture, filter, repeat);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      size.x,
      size.y,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      data
    );
  }

  /**
   * Bind an image to `IMAGE_UNIT`, uploading it if we haven't seen it before
   */
  public bindImage(image: SceneImage, filter: number) {
    const gl = this.gl!;

    let texture = this.imageTextures.get(image);
    const isNew = texture === undefined;
    if (!texture) {
      texture = gl.createTexture()!;
      this.imageTextures.set(image, texture);
    }

    this.bindTexture(GlContext.IMAGE_UNIT, texture, filter);

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
   * Canvases might have changed since they were last used, so `bindImage()`
   * should upload them again
   */
  public invalidateCanvases() {
    this.uploadedCanvases.clear();
  }

  /**
   * Set the size of a texture that we're rendering into
   */
  public resizeTarget(target: GlRenderTarget, size: vec2) {
    if (target.size.x === size.x && target.size.y === size.y) {
      return;
    }

    const gl = this.gl!;

    target.size = vec2.cpy(size);

    this.bindTexture(GlContext.IMAGE_UNIT, target.texture, gl.NEAREST);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      size.x,
      size.y,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, target.framebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      target.texture,
      0
    );
  }

  /**
   * Make sure the output matches the screen size
   */
  public resize(screen: vec2) {
    if (this.canvas.width === screen.x && this.canvas.height === screen.y) {
      return;
    }

    this.canvas.width = screen.x;
    this.canvas.height = screen.y;
    this.gl!.viewport(0, 0, screen.x, screen.y);
  }

  /**
   * Draw a quad covering part of the screen
   */
  public drawQuad(
    { uniforms }: GlProgram,
    screenRectangle: number[],
    worldRectangle: number[] = [0, 0, 0, 0],
    maskRectangle: number[] = [0, 0, 0, 0]
  ) {
    const gl = this.gl!;

    gl.uniform4fv(uniforms.u_screenRectangle, screenRectangle);
    gl.uniform4fv(uniforms.u_worldRectangle, worldRectangle);
    gl.uniform4fv(uniforms.u_maskRectangle, maskRectangle);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  /**
   * Draw a texture over the whole screen, replacing what's already there
   */
  public drawTexture(texture: WebGLTexture, screen: vec2) {
    const gl = this.gl!;
    const program = this.copyProgram;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.disable(gl.BLEND);
    gl.useProgram(program.program);
    gl.uniform2f(program.uniforms.u_screen, screen.x, screen.y);
    gl.uniform1f(program.uniforms.u_flipY, 1);

    this.bindTexture(GlContext.IMAGE_UNIT, texture, gl.NEAREST);
    gl.uniform1i(program.uniforms.u_image, GlContext.IMAGE_UNIT);

    this.drawQuad(program, [0, 0, screen.x, screen.y]);

    // A texture can't stay bound while we're rendering into it
    gl.bindTexture(gl.TEXTURE_2D, null);
  }
}
