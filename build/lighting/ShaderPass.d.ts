import { vec } from '@basementuniverse/vec';
import type { Light } from './Light';
import { LightingCamera, LightingImage } from './types';
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
/**
 * Shades all of the lights in a scene using a single WebGL context
 *
 * Each light is shaded separately and then blended into a light map, so a
 * light's bumps only affect that light. Specular highlights are added up in a
 * separate buffer, because they need to be brighter than the scene
 */
export declare class ShaderPass {
    /**
     * The output of the most recent pass
     *
     * This doesn't use premultiplied alpha because blended lights can be brighter
     * than a partly transparent edge of the light map
     */
    readonly canvas: HTMLCanvasElement;
    private gl;
    private copyProgram;
    private diffuseProgram;
    private specularProgram;
    private textures;
    private ambientTexture;
    private specularTexture;
    private specularFramebuffer;
    constructor();
    /**
     * Check if the shaders can be used
     */
    get available(): boolean;
    private initialise;
    private compileShader;
    private createProgram;
    /**
     * Upload an image to a texture
     */
    private upload;
    /**
     * Make sure the output and the specular buffer match the screen size
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
}
