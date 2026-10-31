import type { Sprite } from '@basementuniverse/sprite';
import { Rectangle, SceneImage } from '../core';
import type { ReflectionSystem } from './ReflectionSystem';
/**
 * Something that isn't a sprite but can still be reflected
 *
 * This object is read every frame, so it can be moved by changing its position
 */
export type ReflectionObject = Rectangle & {
    /**
     * The image for this object, this is stretched to fit the rectangle
     */
    image?: SceneImage | null;
    /**
     * Draw this object in world coordinates, this is used instead of `image`
     */
    draw?: (context: CanvasRenderingContext2D) => void;
};
export type ReflectionSourceSettings = {
    /**
     * How far the object's feet are above the bottom edge of its rectangle, this
     * is useful if an image has some empty space underneath the object
     */
    footOffset?: number;
    /**
     * Should this source appear in floors?
     */
    floor?: boolean;
    /**
     * Should this source appear in walls?
     */
    wall?: boolean;
    /**
     * Which way a sprite appears to be facing in a wall, for each direction that
     * it could be facing. Directions that aren't in this list will stay the same
     *
     * Walls face the camera, so this should swap directions which point towards
     * and away from the camera. The default swaps north and south, and up and
     * down
     */
    wallDirections?: Record<string, string>;
    /**
     * The image for an object when it's seen in a wall, this should show the
     * opposite side of the object. If this isn't set then the object looks the
     * same as it does in the scene
     */
    wallImage?: SceneImage | null;
};
export type ReflectionSourceOptions = ReflectionSourceSettings & ({
    sprite: Sprite;
} | {
    object: ReflectionObject;
});
/**
 * Something that appears in floors and walls that are reflective
 */
export declare class ReflectionSource {
    private static readonly DEFAULT_WALL_DIRECTIONS;
    readonly sprite: Sprite | null;
    readonly object: ReflectionObject | null;
    footOffset: number;
    floor: boolean;
    wall: boolean;
    wallDirections: Record<string, string>;
    wallImage: SceneImage | null;
    private reflections;
    constructor(reflections: ReflectionSystem, options: ReflectionSourceOptions);
    /**
     * The area covered by this source in the scene
     */
    get bounds(): Rectangle;
    /**
     * Where this source meets the ground
     */
    get foot(): number;
    /**
     * The area covered by this source when it's reflected in a floor
     */
    get floorBounds(): Rectangle;
    /**
     * The area covered by this source when it's reflected in a wall
     */
    wallBounds(wallFoot: number): Rectangle;
    /**
     * Draw this source's reflection in a floor
     *
     * Going below the floor doesn't change where something's feet are, so the
     * reflection is flipped upside-down around its feet
     */
    drawInFloor(context: CanvasRenderingContext2D): void;
    /**
     * Draw this source's reflection in a wall
     *
     * The reflection is as far behind the wall as this source is in front of it,
     * so it's the same way up but further up the screen, and we can see the side
     * of this source that faces the wall
     */
    drawInWall(context: CanvasRenderingContext2D, wallFoot: number): void;
    private drawSpriteInWall;
    private draw;
    /**
     * Remove this source from the reflection system
     */
    remove(): void;
}
