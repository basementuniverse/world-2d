import type { Sprite } from '@basementuniverse/sprite';
import { vec2 } from '@basementuniverse/vec';
import { Rectangle, SceneImage, spriteBounds } from '../core';
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

export type ReflectionSourceOptions = ReflectionSourceSettings &
  ({ sprite: Sprite } | { object: ReflectionObject });

/**
 * Something that appears in floors and walls that are reflective
 */
export class ReflectionSource {
  private static readonly DEFAULT_FLOOR_LAYER = 'floor-reflection';
  private static readonly DEFAULT_WALL_DIRECTIONS: Record<string, string> = {
    north: 'south',
    south: 'north',
    up: 'down',
    down: 'up',
  };

  public readonly sprite: Sprite | null;
  public readonly object: ReflectionObject | null;

  public footOffset: number;
  public floorOffset: number;
  public floorFade: number;
  public floorLayer: string;
  public floorImage: SceneImage | null;
  public floor: boolean;
  public wall: boolean;
  public wallDirections: Record<string, string>;
  public wallImage: SceneImage | null;

  /**
   * World y-position where this source meets the surface of some water, or null
   * if it isn't in water
   *
   * Only the part above this line is reflected, and it's reflected around this
   * line instead of around the source's feet
   */
  public waterline: number | null = null;

  private reflections: ReflectionSystem;

  public constructor(
    reflections: ReflectionSystem,
    options: ReflectionSourceOptions
  ) {
    this.reflections = reflections;
    this.sprite = 'sprite' in options ? options.sprite : null;
    this.object = 'object' in options ? options.object : null;
    this.footOffset = options.footOffset ?? 0;
    this.floorOffset = options.floorOffset ?? 0;
    this.floorFade = options.floorFade ?? 0;
    this.floorLayer =
      options.floorLayer ?? ReflectionSource.DEFAULT_FLOOR_LAYER;
    this.floorImage = options.floorImage ?? null;
    this.floor = options.floor ?? true;
    this.wall = options.wall ?? true;
    this.wallDirections =
      options.wallDirections ?? ReflectionSource.DEFAULT_WALL_DIRECTIONS;
    this.wallImage = options.wallImage ?? null;
  }

  /**
   * The area covered by this source in the scene
   */
  public get bounds(): Rectangle {
    return this.sprite ? spriteBounds(this.sprite) : this.object!;
  }

  /**
   * Where this source meets the ground
   */
  public get foot(): number {
    const { position, size } = this.bounds;

    return position.y + size.y - this.footOffset;
  }

  /**
   * The line that this source is reflected around in a floor
   */
  private get floorAxis(): number {
    return this.waterline ?? this.foot;
  }

  /**
   * The world y-position where this source's reflection in a floor starts, this
   * is the same as the line it's reflected around unless it has an offset
   */
  public get floorStart(): number {
    return this.waterline === null
      ? this.floorAxis - this.floorOffset
      : this.floorAxis;
  }

  /**
   * How far this source's reflection has been moved along the screen
   */
  private get floorShift(): number {
    return this.floorStart - this.floorAxis;
  }

  /**
   * The area covered by this source when it's reflected in a floor
   */
  public get floorBounds(): Rectangle {
    const { position, size } = this.bounds;

    return {
      position: vec2(
        position.x,
        this.floorAxis * 2 + this.floorShift - (position.y + size.y)
      ),
      size,
    };
  }

  /**
   * The area covered by this source when it's reflected in a wall
   */
  public wallBounds(wallFoot: number): Rectangle {
    const { position, size } = this.bounds;

    return {
      position: vec2(position.x, position.y + (wallFoot - this.foot) * 2),
      size,
    };
  }

  /**
   * Draw this source's reflection in a floor
   *
   * Going below the floor doesn't change where something's feet are, so the
   * reflection is flipped upside-down around its feet
   */
  public drawInFloor(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(0, this.floorAxis * 2 + this.floorShift);
    context.scale(1, -1);

    if (this.waterline !== null) {
      const { position, size } = this.bounds;

      context.beginPath();
      context.rect(
        position.x,
        position.y,
        size.x,
        this.waterline - position.y
      );
      context.clip();
    }

    this.drawFloorImage(context);
    context.restore();
  }

  /**
   * Draw this source's reflection in a wall
   *
   * The reflection is as far behind the wall as this source is in front of it,
   * so it's the same way up but further up the screen, and we can see the side
   * of this source that faces the wall
   */
  public drawInWall(context: CanvasRenderingContext2D, wallFoot: number) {
    context.save();
    context.translate(0, (wallFoot - this.foot) * 2);

    if (this.sprite) {
      this.drawSpriteInWall(context, this.sprite);
    } else if (this.wallImage) {
      const { position, size } = this.bounds;

      context.drawImage(
        this.wallImage,
        position.x,
        position.y,
        size.x,
        size.y
      );
    } else {
      this.draw(context);
    }

    context.restore();
  }

  private drawFloorImage(context: CanvasRenderingContext2D) {
    const { sprite, floorImage } = this;

    if (sprite) {
      const image =
        sprite.image && sprite.getImage(undefined, this.floorLayer);

      if (image) {
        this.drawSpriteImage(context, sprite, image);
        return;
      }
    } else if (floorImage) {
      const { position, size } = this.bounds;

      context.drawImage(floorImage, position.x, position.y, size.x, size.y);
      return;
    }

    this.draw(context);
  }

  private drawSpriteInWall(context: CanvasRenderingContext2D, sprite: Sprite) {
    const direction =
      this.wallDirections[sprite.direction] ?? sprite.direction;

    // The sprite can only draw itself facing its current direction
    if (direction === sprite.direction) {
      sprite.draw(context);
      return;
    }

    const image = sprite.getImage(direction);
    if (image) {
      this.drawSpriteImage(context, sprite, image);
    }
  }

  /**
   * Draw a sprite with a different image, in the same way as `Sprite.draw()`
   */
  private drawSpriteImage(
    context: CanvasRenderingContext2D,
    sprite: Sprite,
    image: SceneImage
  ) {
    context.translate(sprite.position.x, sprite.position.y);
    context.scale(sprite.scale, sprite.scale);
    context.rotate(sprite.rotation);
    context.drawImage(
      image,
      -sprite.origin.x,
      -sprite.origin.y,
      image.width,
      image.height
    );
  }

  private draw(context: CanvasRenderingContext2D) {
    if (this.sprite) {
      this.sprite.draw(context);
      return;
    }

    const { position, size, image, draw } = this.object!;

    if (draw) {
      draw(context);
    } else if (image) {
      context.drawImage(image, position.x, position.y, size.x, size.y);
    }
  }

  /**
   * Remove this source from the reflection system
   */
  public remove() {
    this.reflections.remove(this);
  }
}
