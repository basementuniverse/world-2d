import { Frame, GlContext, SceneImage } from '../core';
import type { WaterRegion } from './WaterRegion';
/**
 * What the shader should output, these values are also in the shader
 */
export declare enum WaterOutput {
    Colour = 0,
    Normal = 1,
    Specular = 2
}
/**
 * Renders water using a shared WebGL context
 */
export declare class WaterPass {
    private static readonly WAVE_MAP_SIZE;
    private static readonly WAVE_COUNT;
    private static readonly WAVE_MAX_FREQUENCY;
    private static readonly NOISE_WAVE_COUNT;
    private static readonly NOISE_MAX_FREQUENCY;
    private static readonly FLOW_CYCLE;
    private static waveMapData;
    /**
     * Make a tiling normal map with noise in the blue channel, the normal map is
     * made from sine waves that repeat a whole number of times across the texture
     * so that it tiles perfectly
     */
    private static getWaveMapData;
    private context;
    private initialised;
    private program;
    private sceneTexture;
    private reflectionTexture;
    private waveTexture;
    private regionTextures;
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
     * Forget about a region's textures
     */
    release(region: WaterRegion): void;
    private getTextures;
    /**
     * Textures can only tile if their size is a power of 2
     */
    private powerOfTwoImage;
    /**
     * Masks can be canvases, but they don't change very often so they're only
     * uploaded if we're told about a change
     */
    private bindMask;
    /**
     * Make sure a region's textures are up to date and bind them
     */
    private bindRegion;
    private setRegionUniforms;
    private drawRegion;
    /**
     * Render some water into the canvas
     *
     * With a `scale` below 1 the output is smaller than the canvas, and it's in
     * the bottom-left corner of the canvas
     *
     * `scene` is what's underneath the water, it can be a smaller copy of the
     * frame's context
     */
    render(frame: Frame, regions: WaterRegion[], output: WaterOutput, time: number, scale?: number, scene?: SceneImage): void;
}
