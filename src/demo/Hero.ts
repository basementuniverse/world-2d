import InputManager from '@basementuniverse/input-manager';
import { Sprite, SpriteAnimationOptions } from '@basementuniverse/sprite';
import { textureAtlas } from '@basementuniverse/texture-atlas';
import { vec2 } from '@basementuniverse/vec';

const DIRECTIONS: Record<string, { row: number; movement: vec2 }> = {
  east: { row: 0, movement: vec2(1, 0) },
  south: { row: 2, movement: vec2(0, 1) },
  west: { row: 4, movement: vec2(-1, 0) },
  north: { row: 6, movement: vec2(0, -1) },
};

const INPUT_KEYS: Record<string, string[]> = {
  east: ['ArrowRight', 'KeyD'],
  south: ['ArrowDown', 'KeyS'],
  west: ['ArrowLeft', 'KeyA'],
  north: ['ArrowUp', 'KeyW'],
};

/**
 * A character that can be moved around with the keyboard
 */
export class Hero {
  public static readonly FOOT_OFFSET: number = 6;

  private static readonly SPEED: number = 90;
  private static readonly ORIGIN: vec2 = vec2(25, 44);
  private static readonly FRAME_RATE: number = 8;

  public readonly sprite: Sprite;

  public constructor(spriteSheet: HTMLImageElement, position: vec2) {
    const regions: Record<string, object> = {};
    for (const [direction, { row }] of Object.entries(DIRECTIONS)) {
      regions[`idle-${direction}`] = { x: 0, y: row };
      regions[`walk-${direction}`] = { x: 1, y: row, repeat: 4 };
    }

    const frames = textureAtlas(spriteSheet, {
      relative: true,
      width: 9,
      height: 8,
      regions: regions as any,
    });

    const animation = (
      images: HTMLCanvasElement[],
      name: string
    ): SpriteAnimationOptions => ({
      name,
      frameCount: images.length,
      frameRate: Hero.FRAME_RATE,
      images,
    });

    const animations: Record<
      string,
      Record<string, SpriteAnimationOptions>
    > = { idle: {}, walk: {} };
    for (const direction of Object.keys(DIRECTIONS)) {
      animations.idle[direction] = animation(
        [frames[`idle-${direction}`]],
        'idle'
      );
      animations.walk[direction] = animation(
        [1, 2, 3, 4].map(n => frames[`walk-${direction}-${n}`]),
        'walk'
      );
    }

    this.sprite = new Sprite({
      position,
      origin: Hero.ORIGIN,
      directions: Object.keys(DIRECTIONS),
      defaultDirection: 'north',
      animations,
      defaultAnimation: 'idle',
    });
    this.sprite.update(0);
  }

  /**
   * Move the character, keeping it inside an area
   */
  public update(dt: number, min: vec2, max: vec2) {
    const pressed = Object.keys(DIRECTIONS).filter(direction =>
      INPUT_KEYS[direction].some(key => InputManager.keyDown(key))
    );

    if (pressed.length > 0) {
      const movement = pressed
        .map(direction => DIRECTIONS[direction].movement)
        .reduce(vec2.add, vec2());
      const position = vec2.add(
        this.sprite.position,
        vec2.mul(vec2.nor(movement), Hero.SPEED * dt)
      );

      this.sprite.position = vec2(
        Math.min(Math.max(position.x, min.x), max.x),
        Math.min(Math.max(position.y, min.y), max.y)
      );
      this.sprite.direction = pressed[pressed.length - 1];
      this.sprite.animation = 'walk';
    } else {
      this.sprite.animation = 'idle';
    }

    this.sprite.update(dt);
  }
}
