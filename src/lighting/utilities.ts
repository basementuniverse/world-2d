import { vec2 } from '@basementuniverse/vec';
import { Interval1d, Interval2d, SceneImage } from '../core';
import { Line, PolygonVertices, Sector1d, Sector2d } from './types';

/**
 * Check if a line segment's normal is facing towards a point
 */
export function lineIsFacing(line: Line, position: vec2) {
  const edge = vec2.nor(vec2.sub(line.end, line.start));
  const edgeNormal = vec2(edge.y, -edge.x);
  const lightNormal = vec2.nor(
    vec2.sub(vec2.mul(vec2.add(line.start, line.end), 0.5), position)
  );

  return vec2.dot(lightNormal, edgeNormal) <= 0;
}

/**
 * Create a polygon path on a canvas context
 */
export function polygon(
  context: CanvasRenderingContext2D,
  ...vertices: PolygonVertices
) {
  if (vertices.length === 0) {
    return;
  }

  context.beginPath();
  if (typeof vertices[0] === 'function') {
    vertices[0](context);
  } else {
    context.moveTo(vertices[0].x, vertices[0].y);
  }
  for (let i = 1; i < vertices.length; i++) {
    if (typeof vertices[i] === 'function') {
      (vertices[i] as Function)(context);
    } else {
      context.lineTo((vertices[i] as vec2).x, (vertices[i] as vec2).y);
    }
  }
  context.closePath();
}

/**
 * Get the sector of a point relative to a 1d interval
 */
export function sector1d(n: number, interval: Interval1d): Sector1d {
  if (n <= interval.start) {
    return Sector1d.Before;
  }

  if (n >= interval.end) {
    return Sector1d.After;
  }

  return Sector1d.Inside;
}

/**
 * Get the sector of a point relative to a 2d interval
 */
export function sector2d(point: vec2, interval: Interval2d): Sector2d {
  const x = sector1d(point.x, { start: interval.left, end: interval.right });
  const y = sector1d(point.y, { start: interval.top, end: interval.bottom });

  return {
    [Sector1d.Before]: {
      [Sector1d.Before]: Sector2d.TopLeft,
      [Sector1d.Inside]: Sector2d.Left,
      [Sector1d.After]: Sector2d.BottomLeft,
    },
    [Sector1d.Inside]: {
      [Sector1d.Before]: Sector2d.Top,
      [Sector1d.Inside]: Sector2d.Inside,
      [Sector1d.After]: Sector2d.Bottom,
    },
    [Sector1d.After]: {
      [Sector1d.Before]: Sector2d.TopRight,
      [Sector1d.Inside]: Sector2d.Right,
      [Sector1d.After]: Sector2d.BottomRight,
    },
  }[x][y];
}

const tints = new WeakMap<SceneImage, Map<string, HTMLCanvasElement>>();

/**
 * Get a copy of an image in a single colour which keeps the image's alpha
 * channel, or null if the image hasn't loaded yet
 */
export function tintedImage(
  image: SceneImage,
  colour: string
): HTMLCanvasElement | null {
  if (image.width === 0 || image.height === 0) {
    return null;
  }

  if (image instanceof HTMLImageElement && !image.complete) {
    return null;
  }

  let imageTints = tints.get(image);
  if (!imageTints) {
    imageTints = new Map();
    tints.set(image, imageTints);
  }

  let result = imageTints.get(colour);
  if (!result) {
    result = document.createElement('canvas');
    result.width = image.width;
    result.height = image.height;

    const context = result.getContext('2d')!;
    context.drawImage(image, 0, 0);
    context.globalCompositeOperation = 'source-in';
    context.fillStyle = colour;
    context.fillRect(0, 0, result.width, result.height);

    imageTints.set(colour, result);
  }

  return result;
}

/**
 * Get a black copy of an image which keeps the image's alpha channel, or null
 * if the image hasn't loaded yet
 */
export function silhouette(image: SceneImage): HTMLCanvasElement | null {
  return tintedImage(image, 'black');
}
