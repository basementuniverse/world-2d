import { vec2 } from '@basementuniverse/vec';
import { Frame, GlContext } from '../core';
import { RippleOptions } from './RippleField';
import { WaterRegion, WaterRegionOptions, WaterSample } from './WaterRegion';
/**
 * Renders water
 *
 * Water shows what's underneath it, so this has to be called part-way through
 * drawing the scene. See `World` for how this fits together with everything
 * else
 *
 * 1. Call `update()` every frame
 * 2. Draw everything that's underneath the water
 * 3. Call `draw()`
 * 4. Draw everything that's on top of the water
 */
export declare class WaterSystem {
    private static createContext;
    private regions;
    private glContext;
    private pass;
    private time;
    private frame;
    /**
     * Screen-sized images of the water's surface, for the lighting system
     */
    private normalMapContext;
    normalMapCanvas: HTMLCanvasElement;
    private specularMapContext;
    specularMapCanvas: HTMLCanvasElement;
    /**
     * `glContext` lets the water system share a WebGL context with other systems,
     * otherwise it will create its own
     */
    constructor(glContext?: GlContext);
    /**
     * Share a WebGL context with other systems, this needs to be called before
     * the first render and does nothing if a context has already been set
     */
    useGlContext(glContext: GlContext): void;
    /**
     * Add an area of water
     */
    addRegion(options: WaterRegionOptions): WaterRegion;
    /**
     * Remove an area of water
     */
    remove(region: WaterRegion): void;
    /**
     * Find the water at a world position, this is null if there isn't any
     */
    sample(position: vec2): WaterSample | null;
    /**
     * Disturb the water at a world position, for example if something has fallen
     * into it. This does nothing if there's no water there
     */
    disturb(position: vec2, options?: RippleOptions): void;
    /**
     * Move the water forward, this should be called every frame
     */
    update(dt: number): void;
    /**
     * Get the shader pass, if it can be used
     */
    private getPass;
    private visibleRegions;
    /**
     * Draw the water onto the frame's context, using what's already there as the
     * scene underneath the water
     */
    draw(frame: Frame): void;
    /**
     * Render the normal map and specular map of the water's surface
     */
    drawLightingMaps(frame: Frame): void;
    /**
     * Draw part of a screen-sized map onto a context that's using the camera's
     * transforms, this is for adding the water's surface to the scene's maps
     */
    private drawRegionMap;
    drawRegionNormalMap(context: CanvasRenderingContext2D, region: WaterRegion): void;
    drawRegionSpecularMap(context: CanvasRenderingContext2D, region: WaterRegion): void;
}
