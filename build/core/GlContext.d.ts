import { vec2 } from '@basementuniverse/vec';
import { SceneImage } from './types';
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
export declare class GlContext {
    /**
     * The texture unit used for images that are only needed for a single draw
     *
     * WebGL guarantees 8 texture units, this is the last of them
     */
    static readonly IMAGE_UNIT = 7;
    /**
     * The output of the most recent pass
     */
    readonly canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext | null;
    private copyProgram;
    private initialiseCallbacks;
    /**
     * Images only need to be uploaded once, but canvases might change
     */
    private imageTextures;
    private uploadedCanvases;
    constructor();
    /**
     * Check if the context can be used
     */
    get available(): boolean;
    /**
     * Register a function that sets up programs and textures
     *
     * This is called straight away if the context is ready, and again whenever
     * the context is restored
     */
    onInitialise(callback: (gl: WebGLRenderingContext) => void): void;
    private initialise;
    private compileShader;
    /**
     * Create a program from a fragment shader, this will use the quad vertex
     * shader so it can be drawn with `drawQuad()`
     */
    createProgram(fragmentSource: string): GlProgram;
    /**
     * Create a texture that can be rendered into, this will need to be given a
     * size using `resizeTarget()`
     */
    createRenderTarget(): GlRenderTarget;
    /**
     * Bind a texture and set its filtering
     *
     * Textures can only repeat if their size is a power of 2
     */
    bindTexture(unit: number, texture: WebGLTexture, filter: number, repeat?: boolean): void;
    /**
     * Replace the contents of a texture with an image
     */
    upload(unit: number, texture: WebGLTexture, image: SceneImage, filter: number, repeat?: boolean): void;
    /**
     * Replace the contents of a texture with RGBA pixel data
     */
    uploadData(unit: number, texture: WebGLTexture, size: vec2, data: Uint8Array, filter: number, repeat?: boolean): void;
    /**
     * Bind an image, uploading it if we haven't seen it before
     */
    bindImage(image: SceneImage, filter: number, unit?: number): void;
    /**
     * Canvases might have changed since they were last used, so `bindImage()`
     * should upload them again
     */
    invalidateCanvases(): void;
    /**
     * Set the size of a texture that we're rendering into
     */
    resizeTarget(target: GlRenderTarget, size: vec2): void;
    /**
     * Make sure the output matches the screen size
     */
    resize(screen: vec2): void;
    /**
     * Draw a quad covering part of the screen
     */
    drawQuad({ uniforms }: GlProgram, screenRectangle: number[], worldRectangle?: number[], maskRectangle?: number[]): void;
    /**
     * Draw a texture over the whole screen, replacing what's already there
     */
    drawTexture(texture: WebGLTexture, screen: vec2): void;
}
