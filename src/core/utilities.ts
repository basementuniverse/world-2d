import type { Sprite } from '@basementuniverse/sprite';
import { lerp } from '@basementuniverse/utils';
import { vec2 } from '@basementuniverse/vec';
import { Colour, Interval2d, Rectangle, SceneImage } from './types';

/**
 * Get the minimum of a set of vectors
 */
export function minVec(...vectors: vec2[]): vec2 {
  return vectors.reduce(
    (min, v) => vec2(Math.min(min.x, v.x), Math.min(min.y, v.y)),
    vec2(Infinity, Infinity)
  );
}

/**
 * Get the maximum of a set of vectors
 */
export function maxVec(...vectors: vec2[]): vec2 {
  return vectors.reduce(
    (max, v) => vec2(Math.max(max.x, v.x), Math.max(max.y, v.y)),
    vec2(-Infinity, -Infinity)
  );
}

/**
 * Get the smallest rectangle that contains 2 rectangles
 */
export function boundingRectangle(a: Rectangle, b: Rectangle): Rectangle {
  const position = minVec(a.position, b.position);
  const bottomRight = maxVec(
    vec2.add(a.position, a.size),
    vec2.add(b.position, b.size)
  );

  return { position, size: vec2.sub(bottomRight, position) };
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
 * Convert a 2d interval to a rectangle
 */
export function intervalToRectangle(interval: Interval2d): Rectangle {
  return {
    position: vec2(interval.left, interval.top),
    size: vec2(interval.right - interval.left, interval.bottom - interval.top),
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
 * Check if 2 AABBs intersect
 */
export function rectanglesIntersect(a: Rectangle, b: Rectangle): boolean {
  const tl1 = a.position;
  const br1 = vec2.add(a.position, a.size);
  const tl2 = b.position;
  const br2 = vec2.add(b.position, b.size);

  return tl1.x < br2.x && br1.x > tl2.x && tl1.y < br2.y && br1.y > tl2.y;
}

/**
 * Get an array of vertices for a rectangle in CW winding order
 */
export function rectangleVertices(rectangle: Rectangle): vec2[] {
  const tl = rectangle.position;
  const br = vec2.add(rectangle.position, rectangle.size);

  return [rectangle.position, vec2(br.x, tl.y), br, vec2(tl.x, br.y)];
}

/**
 * Get the area covered by a sprite's current frame, this matches where
 * `Sprite.draw()` puts the image (if the sprite isn't rotated)
 */
export function spriteBounds(sprite: Sprite): Rectangle {
  const { image } = sprite;
  const size = image ? vec2(image.width, image.height) : sprite.size;

  return {
    position: vec2.sub(sprite.position, vec2.mul(sprite.origin, sprite.scale)),
    size: vec2.mul(size, sprite.scale),
  };
}

/**
 * Draw an image into a rectangle, either repeating it or stretching it to fit
 */
export function drawImageInRectangle(
  context: CanvasRenderingContext2D,
  image: SceneImage,
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
