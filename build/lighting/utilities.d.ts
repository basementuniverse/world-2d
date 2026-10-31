import { vec2 } from '@basementuniverse/vec';
import { Interval1d, Interval2d, SceneImage } from '../core';
import { Line, PolygonVertices, Sector1d, Sector2d } from './types';
/**
 * Check if a line segment's normal is facing towards a point
 */
export declare function lineIsFacing(line: Line, position: vec2): boolean;
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
export declare function sector2d(point: vec2, interval: Interval2d): Sector2d;
/**
 * Get a black copy of an image which keeps the image's alpha channel, or null
 * if the image hasn't loaded yet
 */
export declare function silhouette(image: SceneImage): HTMLCanvasElement | null;
