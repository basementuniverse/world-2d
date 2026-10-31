import { vec } from '@basementuniverse/vec';
import { Colour, Interval1d, Interval2d, LightingImage, Line, PolygonVertices, Rectangle, Sector1d, Sector2d } from './types';
/**
 * Get the minimum of a set of vectors
 */
export declare function minVec(...vectors: vec[]): vec;
/**
 * Get the maximum of a set of vectors
 */
export declare function maxVec(...vectors: vec[]): vec;
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
 * Calculate the x position of a line where it intercepts a given y
 *
 * Returns a tuple containing the intercept position and the normalised
 * progress along the line
 */
export declare function lineYIntercept(line: Line, y: number, allowBefore?: boolean, allowAfter?: boolean): [number, number] | null;
/**
 * Check if a line segment's normal is facing towards a point
 */
export declare function lineIsFacing(line: Line, position: vec): boolean;
/**
 * Convert a 2d interval to a rectangle
 */
export declare function intervalToRectangle(interval: Interval2d): Rectangle;
/**
 * Convert a rectangle to a 2d interval
 */
export declare function rectangleToInterval(rectangle: Rectangle): Interval2d;
/**
 * Find the overlap between 2 1d intervals
 *
 * If there is no overlap, return null
 */
export declare function overlap1d(a: Interval1d, b: Interval1d): Interval1d | null;
/**
 * Check if 2 AABBs intersect
 */
export declare function rectanglesIntersect(a: Rectangle, b: Rectangle): boolean;
/**
 * Get an array of vertices for a rectangle in CW winding order
 */
export declare function rectangleVertices(rectangle: Rectangle): vec[];
/**
 * Create a polygon path on a canvas context
 */
export declare function polygon(context: CanvasRenderingContext2D, ...vertices: PolygonVertices): void;
/**
 * Get the sector of a point relative to a 1d interval
 */
export declare function sector1d(n: number, interval: Interval1d): Sector1d;
/**
 * Get the sector of a point relative to a 2d interval
 */
export declare function sector2d(point: vec, interval: Interval2d): Sector2d;
/**
 * Draw an image into a rectangle, either repeating it or stretching it to fit
 */
export declare function drawImageInRectangle(context: CanvasRenderingContext2D, image: LightingImage, rectangle: Rectangle, repeat: boolean): void;
/**
 * Get a black copy of an image which keeps the image's alpha channel, or null
 * if the image hasn't loaded yet
 */
export declare function silhouette(image: LightingImage): HTMLCanvasElement | null;
