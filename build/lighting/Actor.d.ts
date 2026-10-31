import { vec } from '@basementuniverse/vec';
import { CircleCaster, CircleCasterOptions, SpriteCaster, SpriteCasterOptions } from './Caster';
import type { LightingSystem } from './LightingSystem';
import { WallReceiver, WallReceiverOptions } from './Surface';
type ActorShadowOptions = {
    /**
     * Height of the area at the bottom of the actor that casts a shadow,
     * defaults to a third of the actor's height
     */
    footprintHeight?: number;
};
export type ActorShadow = 'none' | 'sprite' | 'circle' | (ActorShadowOptions & {
    type: 'none';
}) | (ActorShadowOptions & {
    type: 'sprite';
} & Partial<Omit<SpriteCasterOptions, 'position' | 'size'>>) | (ActorShadowOptions & {
    type: 'circle';
} & Partial<Omit<CircleCasterOptions, 'position' | 'size'>>);
export type ActorOptions = Omit<WallReceiverOptions, 'receiveLight'> & {
    /**
     * The shadow cast by this actor, the default is a stretched silhouette of
     * the actor's image
     */
    shadow?: ActorShadow;
};
/**
 * A moving object that receives light and casts a shadow
 */
export declare class Actor {
    private static readonly DEFAULT_FOOTPRINT_SCALE;
    private static readonly DEFAULT_SHADOW_LENGTH_SCALE;
    readonly surface: WallReceiver;
    readonly caster: SpriteCaster | CircleCaster | null;
    private footprintHeight;
    constructor(lighting: LightingSystem, options: ActorOptions);
    /**
     * Get the distance that a caster's shadow reaches back towards the light
     */
    private casterBias;
    private footprint;
    /**
     * Move this actor to a new world position
     */
    moveTo(position: vec): void;
    /**
     * Remove this actor from the lighting system
     */
    remove(): void;
}
export {};
