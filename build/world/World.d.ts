import { GlContext, SceneCamera } from '../core';
import { Actor, ActorOptions, GroundReceiver, GroundReceiverOptions, Light, LightingSystem, LightOptions, SpriteActorOptions, Wall, WallOptions, WallReceiver } from '../lighting';
import type { FloorReflectionReceiver, FloorReflectionReceiverOptions, ReflectionSourceSettings, ReflectionSystem, WallReflectionReceiver, WallReflectionReceiverOptions } from '../reflections';
import type { WaterRegion, WaterRegionOptions, WaterSystem } from '../water';
export type WorldOptions = {
    /**
     * The lighting system for this world
     *
     * The lighting system holds the scene, so a world always has one. If this
     * isn't set then the scene will be drawn without any lighting
     */
    lighting?: LightingSystem;
    /**
     * The reflection system for this world, if this isn't set then the scene
     * won't have any reflections
     */
    reflections?: ReflectionSystem;
    /**
     * The water system for this world, if this isn't set then the scene won't
     * have any water
     */
    water?: WaterSystem;
    /**
     * The WebGL context to share between systems, the default is a new context
     */
    glContext?: GlContext;
};
type ReflectionSourceOption = {
    /**
     * Should this object appear in reflections? Use an object to configure how
     * it's reflected
     */
    reflectionSource?: boolean | ReflectionSourceSettings;
};
export type WorldActorWaterOptions = {
    /**
     * How much of this actor is underwater in the deepest water, in world units
     */
    maxDepth?: number;
    /**
     * How far this actor's feet are above the bottom edge of its image
     */
    footOffset?: number;
    /**
     * Does this actor make ripples when it moves through the water?
     */
    ripples?: boolean;
};
export type WorldActorOptions = (ActorOptions | SpriteActorOptions) & ReflectionSourceOption & {
    /**
     * Should the lower part of this actor go underwater when it stands in
     * water? Use an object to configure how it behaves
     */
    submersible?: boolean | WorldActorWaterOptions;
};
export type WorldGroundOptions = GroundReceiverOptions & {
    /**
     * Should this ground show reflections? Use an object to configure the
     * reflection, by default it will cover the whole area of the ground
     */
    reflectionReceiver?: boolean | Partial<FloorReflectionReceiverOptions>;
};
export type WorldWallOptions = WallOptions & ReflectionSourceOption & {
    /**
     * Should the front of this wall show reflections? Use an object to
     * configure the reflection, by default it will cover the whole front
     */
    reflectionReceiver?: boolean | Partial<WallReflectionReceiverOptions>;
};
/**
 * A scene that's rendered by several systems working together
 *
 * Systems don't know about each other, they each draw a part of the frame and
 * this class decides the order. The frame is rendered in these steps:
 *
 * 1. Draw the ground
 * 2. Draw the parts of actors that are underwater
 * 3. Draw reflections onto the floor
 * 4. Draw the water, which shows everything drawn so far underneath it
 * 5. Draw the walls and actors that stand on the ground, reflections in a wall
 *    are drawn along with that wall
 * 6. Apply lighting to the whole scene
 */
export declare class World {
    private static readonly WATER_Z_INDEX;
    private static readonly DEFAULT_WATER_OPTIONS;
    private static readonly RIPPLE_DISTANCE;
    private static readonly RIPPLE_RADIUS;
    private static readonly RIPPLE_STRENGTH;
    readonly lighting: LightingSystem;
    readonly reflections: ReflectionSystem | null;
    readonly water: WaterSystem | null;
    private submersibleActors;
    constructor(options?: WorldOptions);
    /**
     * Make a surface or a group of surfaces look like a single object to the
     * reflection system, the bottom of the group should be where it meets the
     * ground
     *
     * Overlays aren't included, they might be showing reflections themselves
     */
    private static reflectionObject;
    /**
     * Add an area of ground
     */
    addGround(options: WorldGroundOptions): GroundReceiver;
    /**
     * Add a solid wall
     */
    addWall(options: WorldWallOptions): Wall;
    /**
     * Add a moving object
     */
    addActor(options: WorldActorOptions): Actor;
    private addActorReflection;
    /**
     * Add an area of water, this will return null if this world doesn't have a
     * water system
     *
     * Water is lit in the same way as the ground, and has its own surface for
     * this so that waves can catch the light
     */
    addWater(options: WaterRegionOptions): WaterRegion | null;
    /**
     * Add a light
     */
    addLight(options: LightOptions): Light;
    /**
     * Make part of an area of ground reflective
     *
     * This can be called several times for different parts of the same ground
     */
    addFloorReflection(ground: GroundReceiver, options?: Partial<FloorReflectionReceiverOptions>): FloorReflectionReceiver | null;
    /**
     * Make part of a wall reflective
     *
     * The reflection is drawn straight after the wall, so it's covered by
     * anything in front of the wall. This can be called several times for
     * different parts of the same wall
     */
    addMirror(wall: WallReceiver, options?: Partial<WallReflectionReceiverOptions>): WallReflectionReceiver | null;
    /**
     * Move the world forward, this should be called every frame
     */
    update(dt: number): void;
    /**
     * Find where a submersible actor's feet are
     */
    private footPosition;
    /**
     * Actors make ripples as they move through the water
     */
    private updateRipples;
    /**
     * Find out how far each submersible actor is underwater, this needs to be
     * done before anything is drawn because it splits the actor into 2 parts
     */
    private updateWaterlines;
    /**
     * Render the scene onto a context
     */
    render(context: CanvasRenderingContext2D, camera: SceneCamera): void;
    /**
     * Draw the parts of actors that are underwater, the lowest things on the
     * screen are drawn last
     */
    private drawSubmergedActors;
    private drawWater;
    /**
     * Draw part of the scene with the camera's transforms applied
     */
    private drawLayer;
    private applyLighting;
}
export {};
