import { vec2 } from '@basementuniverse/vec';
import { Rectangle, SceneImage } from '../core';
import { RippleField, RippleOptions } from './RippleField';
import type { WaterSystem } from './WaterSystem';
/**
 * A grid of values that covers a region, the first index is the row
 *
 * Values are interpolated between the centers of the cells
 */
export type WaterGrid<T> = T[][];
export type WaterRegionOptions = Rectangle & {
    /**
     * Image whose alpha channel decides where the water is, the default is the
     * whole rectangle
     *
     * The edge of the mask is a hard edge unless the water gets shallower towards
     * it, so this can be used for shores that follow the shape of the terrain
     */
    mask?: SceneImage | null;
    /**
     * Should the mask be repeated across the region? Otherwise it will be
     * stretched to fit
     */
    repeat?: boolean;
    /**
     * How deep the water is, from 0 at the shore to 1 in the deepest parts
     *
     * This can be a single number or a grid
     */
    depth?: number | WaterGrid<number>;
    /**
     * Which way the water flows and how quickly, these vectors should be no
     * longer than 1
     *
     * This can be a single vector or a grid
     */
    flow?: vec2 | WaterGrid<vec2>;
    /**
     * Distance that water moves each second when a flow vector has a length of 1
     */
    flowSpeed?: number;
    /**
     * The colour of shallow water
     */
    colour?: string;
    /**
     * The colour of deep water
     */
    deepColour?: string;
    /**
     * How much the water hides what's underneath it at the deepest point, from 0
     * to 1
     */
    opacity?: number;
    /**
     * The depth at which water is fully visible, it fades out at depths below
     * this to blend with the shore. Use 0 for water that doesn't fade out
     */
    shoreBlend?: number;
    /**
     * How far waves can bend what's underneath the water, in world units
     */
    refraction?: number;
    /**
     * How strong reflections are, from 0 to 1
     */
    reflection?: number;
    /**
     * How far waves can bend reflections, in world units
     */
    reflectionDistortion?: number;
    /**
     * A tiling normal map for waves, the default is a generated one
     */
    normalMap?: SceneImage | null;
    /**
     * The size of the normal map in world units
     */
    waveSize?: number;
    /**
     * How quickly waves move, in world units per second
     */
    waveSpeed?: number;
    /**
     * How steep waves are, from 0 for flat water to 1
     */
    waveStrength?: number;
    /**
     * How steep ripples are compared to waves
     */
    rippleStrength?: number;
    /**
     * How far ripples travel each second, in world units
     */
    rippleSpeed?: number;
    /**
     * How much of their movement ripples keep each step, from 0 to 1
     */
    rippleDamping?: number;
    /**
     * The size of each cell in the ripple simulation, in world units
     */
    rippleCellSize?: number;
    /**
     * The number of raindrops each second, for every 10000 square world units
     */
    rain?: number;
    /**
     * How much each raindrop disturbs the water
     */
    rainStrength?: number;
    /**
     * How shiny the water is when lighting is used, from 0 to 1
     */
    specular?: number;
    /**
     * How much the slope of the water changes its brightness, this lets waves and
     * ripples be seen even if there aren't any lights
     */
    surfaceShading?: number;
    /**
     * Snap the water to a grid of this size in world units for a pixel art
     * style, or use 0 for smooth water
     */
    pixelSize?: number;
};
/**
 * What's at a point in the water
 */
export type WaterSample = {
    region: WaterRegion;
    depth: number;
};
/**
 * An area of water
 */
export declare class WaterRegion {
    private static readonly DEFAULT_OPTIONS;
    private static readonly MAX_RIPPLE_CELLS;
    private static readonly RAINDROP_RADIUS;
    private static readonly RAIN_AREA;
    position: vec2;
    size: vec2;
    mask: SceneImage | null;
    normalMap: SceneImage | null;
    repeat: boolean;
    flowSpeed: number;
    colour: string;
    deepColour: string;
    opacity: number;
    shoreBlend: number;
    refraction: number;
    reflection: number;
    reflectionDistortion: number;
    waveSize: number;
    waveSpeed: number;
    waveStrength: number;
    rippleStrength: number;
    rippleSpeed: number;
    rippleDamping: number;
    rain: number;
    rainStrength: number;
    specular: number;
    surfaceShading: number;
    pixelSize: number;
    readonly ripples: RippleField;
    /**
     * The current depth and flow, a single value is a grid with 1 cell
     */
    depthGrid: WaterGrid<number>;
    flowGrid: WaterGrid<vec2>;
    /**
     * RGBA data for the depth and flow grids, the version numbers are changed
     * whenever the data changes
     */
    depthPixels: {
        size: vec2;
        data: Uint8Array;
        version: number;
    };
    flowPixels: {
        size: vec2;
        data: Uint8Array;
        version: number;
    };
    /**
     * This is changed whenever the mask needs to be uploaded again
     */
    maskVersion: number;
    private system;
    private shape;
    private rainTime;
    private moveCallbacks;
    private removeCallbacks;
    constructor(system: WaterSystem, options: WaterRegionOptions);
    /**
     * Change how deep the water is
     */
    setDepth(depth: number | WaterGrid<number>): void;
    /**
     * Change which way the water flows
     */
    setFlow(flow: vec2 | WaterGrid<vec2>): void;
    /**
     * Draw the mask at the resolution of the ripple grid, so that we can find out
     * where the water is without using the GPU
     *
     * This returns null if the mask hasn't loaded yet
     */
    private getShape;
    /**
     * Forget the mask's shape, this should be called if the mask is changed
     */
    invalidateMask(): void;
    /**
     * Find the depth at a world position, this is 0 if there's no water there
     */
    depthAt(position: vec2): number;
    /**
     * Find a value from the depth grid, in the same way that a texture would
     */
    private interpolateDepth;
    /**
     * Disturb the water at a world position, for example if something has fallen
     * into it
     */
    disturb(position: vec2, options?: RippleOptions): void;
    update(dt: number): void;
    private updateRain;
    /**
     * Move this region to a new world position
     */
    moveTo(position: vec2): void;
    /**
     * Add a function to be called when this region is moved
     */
    onMove(callback: (position: vec2) => void): void;
    /**
     * Add a function to be called when this region is removed
     */
    onRemove(callback: () => void): void;
    /**
     * Remove this region from the water system
     */
    remove(): void;
}
