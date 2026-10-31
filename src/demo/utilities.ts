import { clamp } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { Rectangle } from '../lighting';
import { Interval1d, Interval2d, Line } from '../lighting/types';
import { overlap1d, rectangleToInterval } from '../lighting/utilities';

/**
 * Clamp a vector between min and max
 */
export function clampVec(v: vec, min: vec, max: vec): vec {
  return vec(clamp(v.x, min.x, max.x), clamp(v.y, min.y, max.y));
}

/**
 * Quantize a vector to a grid
 */
export function quantizeVec(v: vec, quant: number): vec {
  return vec.map(v, n => Math.round(n / quant) * quant);
}

/**
 * Check if a point is inside a 2d interval
 */
export function pointInInterval(point: vec, interval: Interval2d): boolean {
  return (
    point.x >= interval.left &&
    point.x <= interval.right &&
    point.y >= interval.top &&
    point.y <= interval.bottom
  );
}

/**
 * Check if a point is inside an AABB rectangle
 */
export function pointInRectangle(point: vec, rectangle: Rectangle): boolean {
  return pointInInterval(point, rectangleToInterval(rectangle));
}

/**
 * Check if a line intersects a 2d interval and return the earliest point of
 * intersection
 *
 * If the line segment does not intersect the interval, return null
 *
 * If the line begins inside the interval, return null
 */
export function lineInInterval(line: Line, interval: Interval2d): vec | null {
  if (vec.eq(line.start, line.end)) {
    return null;
  }

  if (
    line.start.x >= interval.left &&
    line.start.x <= interval.right &&
    line.start.y >= interval.top &&
    line.start.y <= interval.bottom
  ) {
    return null;
  }

  const lineDeltaX = line.end.x - line.start.x;
  let txMin = (interval.left - line.start.x) / lineDeltaX;
  let txMax = (interval.right - line.start.x) / lineDeltaX;

  if (txMin > txMax) {
    [txMin, txMax] = [txMax, txMin];
  }

  const lineDeltaY = line.end.y - line.start.y;
  let tyMin = (interval.top - line.start.y) / lineDeltaY;
  let tyMax = (interval.bottom - line.start.y) / lineDeltaY;

  if (tyMin > tyMax) {
    [tyMin, tyMax] = [tyMax, tyMin];
  }

  // Check if intervals overlap
  if (txMin > tyMax || tyMin > txMax) {
    return null;
  }

  // Find the earliest intersection point
  const tMin = Math.max(txMin, tyMin);
  const tMax = Math.min(txMax, tyMax);

  if (tMin > 1 || tMax < 0) {
    return null;
  }

  const t = tMin < 0 ? tMax : tMin;
  if (t < 0 || t > 1) {
    return null;
  }

  return {
    x: line.start.x + t * lineDeltaX,
    y: line.start.y + t * lineDeltaY,
  };
}

/**
 * Check if a line intersects an AABB rectangle and return the earliest point
 * of intersection
 *
 * If the line segment does not intersect the rectangle, return null
 *
 * If the line begins inside the rectangle, return null
 */
export function lineInRectangle(line: Line, rectangle: Rectangle): vec | null {
  return lineInInterval(line, rectangleToInterval(rectangle));
}

/**
 * Get the length of an interval
 */
export function intervalLength(interval: Interval1d): number {
  return interval.end - interval.start;
}

/**
 * Find the overlap between 2 2d intervals
 *
 * If there is no overlap, return null
 */
export function overlap2d(a: Interval2d, b: Interval2d): Interval2d | null {
  const xOverlap = overlap1d(
    { start: a.left, end: a.right },
    { start: b.left, end: b.right }
  );
  const yOverlap = overlap1d(
    { start: a.top, end: a.bottom },
    { start: b.top, end: b.bottom }
  );

  if (xOverlap && yOverlap) {
    return {
      left: xOverlap.start,
      right: xOverlap.end,
      top: yOverlap.start,
      bottom: yOverlap.end,
    };
  }

  return null;
}

/**
 * Given 2 actors with position, size, and z-index, sort them by z-index then
 * by the y position of their bottom edge
 */
export function sortActors(
  a: { position: vec; size: vec; zIndex: number },
  b: { position: vec; size: vec; zIndex: number }
): number {
  return (
    a.zIndex - b.zIndex || a.position.y + a.size.y - (b.position.y + b.size.y)
  );
}
