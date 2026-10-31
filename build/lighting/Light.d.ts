import { vec } from '@basementuniverse/vec';
import { ShaderCanvas } from 'shader-canvas';
import { CircleCaster, RegionCaster, SpriteCaster } from './Caster';
import type { LightingSystem } from './LightingSystem';
import { GroundReceiver, WallReceiver } from './Surface';
import { Colour, LightingCamera, Rectangle } from './types';
export type LightOptions = {
    /**
     * World position of this light
     */
    position: vec;
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
     * Should this light cast shadows?
     */
    castShadows?: boolean;
};
export declare class Light {
    private static readonly DEFAULT_RADIUS;
    private static readonly DEFAULT_COLOUR;
    private static readonly DEFAULT_CORE_RADIUS;
    private static readonly DEFAULT_INTENSITY;
    private static readonly SHADOW_BUFFER;
    private lightingSystem;
    position: vec;
    private _radius;
    private _colour;
    colourObject: Colour;
    private _coreRadius;
    private _intensity;
    castShadows: boolean;
    lightCanvas: HTMLCanvasElement;
    private lightContext;
    groundLightCanvas: HTMLCanvasElement;
    private groundLightContext;
    wallLight1Canvas: HTMLCanvasElement;
    private wallLight1Context;
    wallLight2Canvas: HTMLCanvasElement;
    private wallLight2Context;
    shaderCanvas: ShaderCanvas | null;
    private shaderFailed;
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
    moveTo(position: vec): void;
    /**
     * Change some of the options for this light
     */
    set(options: Partial<LightOptions>): void;
    /**
     * Remove this light from the lighting system
     */
    remove(): void;
    /**
     * Release this light's resources, this is called when the light is removed
     * from the lighting system
     */
    destroy(): void;
    /**
     * Release this light's WebGL context, browsers only allow a limited number
     * of active contexts
     */
    private releaseShader;
    prepare(camera: LightingCamera, groundShadowReceivers: GroundReceiver[], wallShadowReceivers: WallReceiver[], regionShadowCasters: RegionCaster[], spriteShadowCasters: SpriteCaster[], circleShadowCasters: CircleCaster[]): void;
    /**
     * Make sure a light canvas matches this light's size
     *
     * There's no need to clear the canvas because the base lightmap is opaque,
     * so drawing it replaces the previous frame
     */
    private resetLightContext;
    private prepareLightMap;
    private prepareFullWallShadows;
    private prepareGroundRegionShadows;
    private prepareGroundSpriteShadows;
    private prepareGroundCircleShadows;
    private prepareWallRegionShadows;
    private prepareWallSpriteShadows;
    private prepareWallCircleShadows;
    private prepareRegionShadow;
    private prepareShader;
}
