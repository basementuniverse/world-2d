import { vec2 } from '@basementuniverse/vec';
import { Colour, Rectangle } from '../core';
import { CircleCaster, RegionCaster, SpriteCaster } from './Caster';
import type { LightingSystem } from './LightingSystem';
export type LightOptions = {
    /**
     * World position of this light
     */
    position: vec2;
    /**
     * Radius of this light in world units
     */
    radius?: number;
    /**
     * Colour of this light
     */
    colour?: string;
    /**
     * The size of the fully-lit area at the center of this light, as a fraction
     * of the radius
     */
    coreRadius?: number;
    /**
     * Brightness of this light
     */
    intensity?: number;
    /**
     * Height of this light above the ground, this is used for shading normal maps
     * and specular maps
     */
    height?: number;
    /**
     * Should this light cast shadows?
     */
    castShadows?: boolean;
};
export declare class Light {
    private static readonly DEFAULT_RADIUS;
    private static readonly DEFAULT_COLOUR;
    private static readonly DEFAULT_CORE_RADIUS;
    private static readonly MAX_CORE_RADIUS;
    private static readonly DEFAULT_INTENSITY;
    private static readonly DEFAULT_HEIGHT;
    private static readonly SHADOW_BUFFER;
    private lightingSystem;
    position: vec2;
    private _radius;
    private _colour;
    colourObject: Colour;
    private _coreRadius;
    private _intensity;
    height: number;
    castShadows: boolean;
    lightCanvas: HTMLCanvasElement;
    private lightContext;
    /**
     * White where light reaches the ground, and black in the shadows of region
     * casters
     */
    regionShadowCanvas: HTMLCanvasElement;
    private regionShadowContext;
    /**
     * White where light reaches the ground, and black in the shadows of sprite
     * and circle casters
     */
    objectShadowCanvas: HTMLCanvasElement;
    private objectShadowContext;
    private dirty;
    constructor(lightingSystem: LightingSystem, options: LightOptions);
    /**
     * Bounding box for this light, including the offset wall lightmaps
     */
    get bounds(): Rectangle;
    get radius(): number;
    set radius(value: number);
    get colour(): string;
    set colour(value: string);
    get coreRadius(): number;
    set coreRadius(value: number);
    get intensity(): number;
    set intensity(value: number);
    /**
     * Move this light to a new world position
     */
    moveTo(position: vec2): void;
    /**
     * Change some of the options for this light
     */
    set(options: Partial<LightOptions>): void;
    /**
     * Remove this light from the lighting system
     */
    remove(): void;
    prepare(regionCasters: RegionCaster[], spriteCasters: SpriteCaster[], circleCasters: CircleCaster[]): void;
    /**
     * Make sure a shadow canvas matches this light's size, and fill it with white
     * so that nothing is in shadow
     */
    private resetShadowContext;
    private prepareLightMap;
    private prepareRegionShadows;
    private prepareSpriteShadows;
    private prepareCircleShadows;
    private prepareRegionShadow;
}
