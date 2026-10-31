import type { Sprite } from '@basementuniverse/sprite';
import { vec2 } from '@basementuniverse/vec';
import { Colour, Interval2d, Rectangle, SceneImage } from './types';
/**
 * Get the minimum of a set of vectors
 */
export declare function minVec(...vectors: vec2[]): vec2;
/**
 * Get the maximum of a set of vectors
 */
export declare function maxVec(...vectors: vec2[]): vec2;
/**
 * Get the smallest rectangle that contains 2 rectangles
 */
export declare function boundingRectangle(a: Rectangle, b: Rectangle): Rectangle;
/**
 * Convert a colour object to a CSS string
 */
export declare function colourToString(colour: Colour): string;
/**
 * Linear interpolate between 2 colours
 */
export declare function lerpColour(a: Colour, b: Colour, i: number): {
    r: number;
    g: number;
    b: number;
    a: number;
};
/**
 * Convert a 2d interval to a rectangle
 */
export declare function intervalToRectangle(interval: Interval2d): Rectangle;
/**
 * Convert a rectangle to a 2d interval
 */
export declare function rectangleToInterval(rectangle: Rectangle): Interval2d;
/**
 * Check if 2 AABBs intersect
 */
export declare function rectanglesIntersect(a: Rectangle, b: Rectangle): boolean;
/**
 * Get an array of vertices for a rectangle in CW winding order
 */
export declare function rectangleVertices(rectangle: Rectangle): vec2[];
/**
 * Get the area covered by a sprite's current frame, this matches where
 * `Sprite.draw()` puts the image (if the sprite isn't rotated)
 */
export declare function spriteBounds(sprite: Sprite): Rectangle;
/**
 * Draw an image into a rectangle, either repeating it or stretching it to fit
 */
export declare function drawImageInRectangle(context: CanvasRenderingContext2D, image: SceneImage, rectangle: Rectangle, repeat: boolean): void;
