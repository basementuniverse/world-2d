import { vec } from '@basementuniverse/vec';
import type { Light } from './Light';
import { Surface } from './Surface';
import { Colour, LightingCamera, LightingImage } from './types';
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
export declare class ShaderPass {
    private static readonly FOOT_SCALE;
    private static readonly FOOT_MAX;
    private static readonly MAX_SHADOW_BIAS;
    /**
     * The output of the most recent pass
     */
    readonly canvas: HTMLCanvasElement;
    private gl;
    private copyProgram;
    private maskProgram;
    private diffuseProgram;
    private specularProgram;
    private textures;
    private surfaceTarget;
    private specularTarget;
    /**
     * Images only need to be uploaded once, but canvases might change
     */
    private imageTextures;
    private uploadedCanvases;
    constructor();
    /**
     * Check if the shaders can be used
     */
    get available(): boolean;
    private initialise;
    private compileShader;
    private createProgram;
    /**
     * Bind a texture and set its filtering
     */
    private bindTexture;
    /**
     * Upload an image to one of the shared textures
     */
    private upload;
    /**
     * Bind a surface's mask, uploading it if we haven't seen it before
     */
    private bindImage;
    /**
     * Set the size of a texture that we're rendering into
     */
    private resizeTarget;
    /**
     * Make sure the output and the render targets match the screen size
     */
    private resize;
    /**
     * Draw a quad covering part of the screen
     */
    private drawQuad;
    /**
     * Draw a texture over the whole screen, replacing what's already there
     */
    private drawTexture;
    /**
     * Get what we need to write to the surface map for a surface
     */
    private surfaceValue;
    /**
     * Draw each visible surface, writing a value to all of the surface's pixels
     */
    private drawSurfaces;
    /**
     * Set the uniforms that are the same for every light in the scene
     */
    private setSceneUniforms;
    /**
     * Set the uniforms for a light and draw its bounding box
     */
    private drawLight;
    /**
     * Render the scene's light map into the canvas, and add up the scene's
     * specular highlights if it has a specular map
     */
    render(scene: ShaderScene): void;
    /**
     * Replace the contents of the canvas with the specular highlights from the
     * most recent render
     */
    showSpecular(screen: vec): void;
    /**
     * Replace the contents of the canvas with the surface map from the most
     * recent render
     */
    showSurfaces(screen: vec): void;
}
