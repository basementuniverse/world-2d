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
     * How far to move this source's reflection up the screen, this can be used
     * to close the gap between an image's feet and its reflection
     *
     * This isn't used for reflections in water, which start at the waterline
     */
    floorOffset?: number;
    /**
     * The distance over which this source's reflection fades in, measured from
     * the feet. This can be used to hide any overlap with the source
     */
    floorFade?: number;
    /**
     * The name of the layer in a sprite's animations that has images for floor
     * reflections, the default is `floor-reflection`
     *
     * Images in a 3/4 view can look strange when they're flipped upside-down, so
     * this can be used for images that are drawn for this purpose. These are
     * flipped in the same way as the sprite. If an animation doesn't have an
     * image in this layer then the sprite is used instead
     */
    floorLayer?: string;
    /**
     * The image to use in floors for an object that isn't a sprite, this is
     * flipped in the same way as the object
     */
    floorImage?: SceneImage | null;
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
    private static readonly DEFAULT_FLOOR_LAYER;
    private static readonly DEFAULT_WALL_DIRECTIONS;
    readonly sprite: Sprite | null;
    readonly object: ReflectionObject | null;
    footOffset: number;
    floorOffset: number;
    floorFade: number;
    floorLayer: string;
    floorImage: SceneImage | null;
    floor: boolean;
    wall: boolean;
    wallDirections: Record<string, string>;
    wallImage: SceneImage | null;
    /**
     * World y-position where this source meets the surface of some water, or null
     * if it isn't in water
     *
     * Only the part above this line is reflected, and it's reflected around this
     * line instead of around the source's feet
     */
    waterline: number | null;
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
     * The line that this source is reflected around in a floor
     */
    private get floorAxis();
    /**
     * The world y-position where this source's reflection in a floor starts, this
     * is the same as the line it's reflected around unless it has an offset
     */
    get floorStart(): number;
    /**
     * How far this source's reflection has been moved along the screen
     */
    private get floorShift();
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
    private drawFloorImage;
    private drawSpriteInWall;
    /**
     * Draw a sprite with a different image, in the same way as `Sprite.draw()`
     */
    private drawSpriteImage;
    private draw;
    /**
     * Remove this source from the reflection system
     */
    remove(): void;
}
