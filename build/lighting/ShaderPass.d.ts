import { vec2 } from '@basementuniverse/vec';
import { Colour, GlContext, SceneCamera, SceneImage } from '../core';
import type { Light } from './Light';
import { Surface } from './Surface';
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
    allLights: Light[];
    surfaces: ShaderSurface[];
    normalMap: SceneImage | null;
    specularMap: SceneImage | null;
    surfaceMapFilter: 'nearest' | 'linear';
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
export declare class ShaderPass {
    private static readonly FOOT_SCALE;
    private static readonly FOOT_MAX;
    private static readonly MAX_SHADOW_BIAS;
    private context;
    private initialised;
    private maskProgram;
    private diffuseProgram;
    private specularProgram;
    private textures;
    private surfaceTarget;
    private specularTarget;
    /**
     * The gradient for each light only needs uploading when it changes
     */
    private lightTextures;
    constructor(context: GlContext);
    /**
     * The output of the most recent pass
     */
    get canvas(): HTMLCanvasElement;
    /**
     * Check if the shaders can be used
     */
    get available(): boolean;
    private initialise;
    /**
     * Upload an image to one of the shared textures
     */
    private upload;
    /**
     * Bind a light's gradient, uploading it if it has changed
     */
    private bindLight;
    /**
     * Forget about textures for lights that have been removed
     */
    private releaseLights;
    /**
     * Make sure the output and the render targets match the screen size
     */
    private resize;
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
    showSpecular(screen: vec2): void;
    /**
     * Replace the contents of the canvas with the surface map from the most
     * recent render
     */
    showSurfaces(screen: vec2): void;
}
