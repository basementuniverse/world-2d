import { SceneCamera } from '../core';
import { Actor, ActorOptions, GroundReceiver, GroundReceiverOptions, Light, LightingSystem, LightOptions, SpriteActorOptions, Wall, WallOptions, WallReceiver } from '../lighting';
import type { FloorReflectionReceiver, FloorReflectionReceiverOptions, ReflectionSourceSettings, ReflectionSystem, WallReflectionReceiver, WallReflectionReceiverOptions } from '../reflections';
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
};
type ReflectionSourceOption = {
    /**
     * Should this object appear in reflections? Use an object to configure how
     * it's reflected
     */
    reflectionSource?: boolean | ReflectionSourceSettings;
};
export type WorldActorOptions = (ActorOptions | SpriteActorOptions) & ReflectionSourceOption;
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
 * 2. Draw reflections onto the floor
 * 3. Draw the walls and actors that stand on the ground, reflections in a wall
 *    are drawn along with that wall
 * 4. Apply lighting to the whole scene
 */
export declare class World {
    readonly lighting: LightingSystem;
    readonly reflections: ReflectionSystem | null;
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
     * Render the scene onto a context
     */
    render(context: CanvasRenderingContext2D, camera: SceneCamera): void;
    /**
     * Draw part of the scene with the camera's transforms applied
     */
    private drawLayer;
    private applyLighting;
}
export {};
