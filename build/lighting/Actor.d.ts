import type { Sprite } from '@basementuniverse/sprite';
import { vec2 } from '@basementuniverse/vec';
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
export type SpriteActorOptions = Omit<ActorOptions, 'position' | 'size' | 'image' | 'mask' | 'normalMap' | 'specularMap'> & {
    /**
     * The sprite that this actor follows
     *
     * The actor's position, size, and images come from the sprite every time the
     * scene is rendered. Normal maps and specular maps come from the sprite's
     * `normal` and `specular` layers
     */
    sprite: Sprite;
};
/**
 * A moving object that receives light and casts a shadow
 */
export declare class Actor {
    private static readonly DEFAULT_FOOTPRINT_SCALE;
    private static readonly DEFAULT_SHADOW_LENGTH_SCALE;
    private static readonly NORMAL_LAYER;
    private static readonly SPECULAR_LAYER;
    readonly surface: WallReceiver;
    readonly caster: SpriteCaster | CircleCaster | null;
    readonly sprite: Sprite | null;
    private lighting;
    private footprintHeight;
    /**
     * Get the area covered by a sprite's current frame and the images for it
     */
    private static spriteFrame;
    /**
     * Convert sprite actor options into the equivalent actor options
     */
    private static resolveOptions;
    constructor(lighting: LightingSystem, actorOptions: ActorOptions | SpriteActorOptions);
    /**
     * Get the distance that a caster's shadow reaches back towards the light
     */
    private casterBias;
    private footprint;
    /**
     * Copy the current position, size, and images from this actor's sprite, this
     * is called automatically when the scene is rendered
     */
    sync(): void;
    /**
     * Move this actor to a new world position
     *
     * If this actor has a sprite then this will set the sprite's position
     */
    moveTo(position: vec2): void;
    /**
     * Remove this actor from the lighting system
     */
    remove(): void;
}
export {};
