import { floatEquals, lerp } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import {
  Colour,
  Interval1d,
  Interval2d,
  LightingImage,
  Line,
  PolygonVertices,
  Rectangle,
  Sector1d,
  Sector2d,
} from './types';

/**
 * Get the minimum of a set of vectors
 */
export function minVec(...vectors: vec[]): vec {
  return vectors.reduce(
    (min, v) => vec(Math.min(min.x, v.x), Math.min(min.y, v.y)),
    vec(Infinity, Infinity)
  );
}

/**
 * Get the maximum of a set of vectors
 */
export function maxVec(...vectors: vec[]): vec {
  return vectors.reduce(
    (max, v) => vec(Math.max(max.x, v.x), Math.max(max.y, v.y)),
    vec(-Infinity, -Infinity)
  );
}

/**
 * Get the smallest rectangle that contains 2 rectangles
 */
export function boundingRectangle(a: Rectangle, b: Rectangle): Rectangle {
  const position = minVec(a.position, b.position);
  const bottomRight = maxVec(
    vec.add(a.position, a.size),
    vec.add(b.position, b.size)
  );

  return { position, size: vec.sub(bottomRight, position) };
}

/**
 * Convert a colour object to a CSS string
 */
export function colourToString(colour: Colour): string {
  return `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`;
}

/**
 * Linear interpolate between 2 colours
 */
export function lerpColour(a: Colour, b: Colour, i: number) {
  return {
    r: lerp(a.r, b.r, i),
    g: lerp(a.g, b.g, i),
    b: lerp(a.b, b.b, i),
    a: lerp(a.a, b.a, i),
  };
}

/**
 * Calculate the x position of a line where it intercepts a given y
 *
 * Returns a tuple containing the intercept position and the normalised
 * progress along the line
 */
export function lineYIntercept(
  line: Line,
  y: number,
  allowBefore: boolean = true,
  allowAfter: boolean = true
): [number, number] | null {
  if (floatEquals(line.start.y, line.end.y)) {
    return null;
  }

  const t = (y - line.start.y) / (line.end.y - line.start.y);
  if (t < 0 && !allowBefore) {
    return null;
  }
  if (t > 1 && !allowAfter) {
    return null;
  }

  return [line.start.x + t * (line.end.x - line.start.x), t];
}

/**
 * Check if a line segment's normal is facing towards a point
 */
export function lineIsFacing(line: Line, position: vec) {
  const edge = vec.nor(vec.sub(line.end, line.start));
  const edgeNormal = vec(edge.y, -edge.x);
  const lightNormal = vec.nor(
    vec.sub(vec.mul(vec.add(line.start, line.end), 0.5), position)
  );

  return vec.dot(lightNormal, edgeNormal) <= 0;
}

/**
 * Convert a 2d interval to a rectangle
 */
export function intervalToRectangle(interval: Interval2d): Rectangle {
  return {
    position: vec(interval.left, interval.top),
    size: vec(interval.right - interval.left, interval.bottom - interval.top),
  };
}

/**
 * Convert a rectangle to a 2d interval
 */
export function rectangleToInterval(rectangle: Rectangle): Interval2d {
  return {
    left: rectangle.position.x,
    right: rectangle.position.x + rectangle.size.x,
    top: rectangle.position.y,
    bottom: rectangle.position.y + rectangle.size.y,
  };
}

/**
 * Find the overlap between 2 1d intervals
 *
 * If there is no overlap, return null
 */
export function overlap1d(a: Interval1d, b: Interval1d): Interval1d | null {
  if (a.end < b.start || a.start > b.end) {
    return null;
  }

  return {
    start: Math.max(a.start, b.start),
    end: Math.min(a.end, b.end),
  };
}

/**
 * Check if 2 AABBs intersect
 */
export function rectanglesIntersect(a: Rectangle, b: Rectangle): boolean {
  const tl1 = a.position;
  const br1 = vec.add(a.position, a.size);
  const tl2 = b.position;
  const br2 = vec.add(b.position, b.size);

  return tl1.x < br2.x && br1.x > tl2.x && tl1.y < br2.y && br1.y > tl2.y;
}

/**
 * Get an array of vertices for a rectangle in CW winding order
 */
export function rectangleVertices(rectangle: Rectangle): vec[] {
  const tl = rectangle.position;
  const br = vec.add(rectangle.position, rectangle.size);

  return [rectangle.position, vec(br.x, tl.y), br, vec(tl.x, br.y)];
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
      context.lineTo((vertices[i] as vec).x, (vertices[i] as vec).y);
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
export function sector2d(point: vec, interval: Interval2d): Sector2d {
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

/**
 * Draw an image into a rectangle, either repeating it or stretching it to fit
 */
export function drawImageInRectangle(
  context: CanvasRenderingContext2D,
  image: LightingImage,
  rectangle: Rectangle,
  repeat: boolean
) {
  const { position, size } = rectangle;

  if (!repeat) {
    context.drawImage(image, position.x, position.y, size.x, size.y);
    return;
  }

  const pattern = context.createPattern(image, 'repeat');
  if (pattern) {
    context.fillStyle = pattern;
    context.beginPath();
    context.rect(position.x, position.y, size.x, size.y);
    context.fill();
  }
}

const silhouettes = new WeakMap<LightingImage, HTMLCanvasElement>();

/**
 * Get a black copy of an image which keeps the image's alpha channel, or null
 * if the image hasn't loaded yet
 */
export function silhouette(image: LightingImage): HTMLCanvasElement | null {
  if (image.width === 0 || image.height === 0) {
    return null;
  }

  if (image instanceof HTMLImageElement && !image.complete) {
    return null;
  }

  let result = silhouettes.get(image);
  if (!result) {
    result = document.createElement('canvas');
    result.width = image.width;
    result.height = image.height;

    const context = result.getContext('2d')!;
    context.drawImage(image, 0, 0);
    context.globalCompositeOperation = 'source-in';
    context.fillStyle = 'black';
    context.fillRect(0, 0, result.width, result.height);

    silhouettes.set(image, result);
  }

  return result;
}
