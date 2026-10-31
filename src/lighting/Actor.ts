import type { Sprite } from '@basementuniverse/sprite';
import { vec2 } from '@basementuniverse/vec';
import { Rectangle, spriteBounds } from '../core';
import {
  CircleCaster,
  CircleCasterOptions,
  SpriteCaster,
  SpriteCasterOptions,
} from './Caster';
import type { LightingSystem } from './LightingSystem';
import { WallReceiver, WallReceiverOptions } from './Surface';

type ActorShadowOptions = {
  /**
   * Height of the area at the bottom of the actor that casts a shadow,
   * defaults to a third of the actor's height
   */
  footprintHeight?: number;
};

export type ActorShadow =
  | 'none'
  | 'sprite'
  | 'circle'
  | (ActorShadowOptions & { type: 'none' })
  | (ActorShadowOptions & { type: 'sprite' } & Partial<
        Omit<SpriteCasterOptions, 'position' | 'size'>
      >)
  | (ActorShadowOptions & { type: 'circle' } & Partial<
        Omit<CircleCasterOptions, 'position' | 'size'>
      >);

export type ActorOptions = Omit<WallReceiverOptions, 'receiveLight'> & {
  /**
   * The shadow cast by this actor, the default is a stretched silhouette of
   * the actor's image
   */
  shadow?: ActorShadow;
};

export type SpriteActorOptions = Omit<
  ActorOptions,
  'position' | 'size' | 'image' | 'mask' | 'normalMap' | 'specularMap'
> & {
  /**
   * The sprite that this actor follows
   *
   * The actor's position, size, and images come from the sprite every time the
   * scene is rendered. Normal maps and specular maps come from the sprite's
   * `normal` and `specular` layers
   */
  sprite: Sprite;
};

/**
 * A moving object that receives light and casts a shadow
 */
export class Actor {
  private static readonly DEFAULT_FOOTPRINT_SCALE = 1 / 3;
  private static readonly DEFAULT_SHADOW_LENGTH_SCALE = 1.33;
  private static readonly NORMAL_LAYER = 'normal';
  private static readonly SPECULAR_LAYER = 'specular';

  public readonly surface: WallReceiver;
  public readonly caster: SpriteCaster | CircleCaster | null = null;
  public readonly sprite: Sprite | null;

  private lighting: LightingSystem;
  private footprintHeight: number;

  /**
   * Get the area covered by a sprite's current frame and the images for it
   */
  private static spriteFrame(sprite: Sprite) {
    const { image } = sprite;

    return {
      ...spriteBounds(sprite),
      image,
      normalMap: image && sprite.getImage(undefined, Actor.NORMAL_LAYER),
      specularMap: image && sprite.getImage(undefined, Actor.SPECULAR_LAYER),
    };
  }

  /**
   * Convert sprite actor options into the equivalent actor options
   */
  private static resolveOptions(
    options: ActorOptions | SpriteActorOptions
  ): ActorOptions {
    if (!('sprite' in options)) {
      return options;
    }

    const { sprite, ...actor } = options;

    return {
      ...actor,
      ...Actor.spriteFrame(sprite),
      customDraw: {
        image: context => sprite.draw(context),
        ...actor.customDraw,
      },
    };
  }

  public constructor(
    lighting: LightingSystem,
    actorOptions: ActorOptions | SpriteActorOptions
  ) {
    const options = Actor.resolveOptions(actorOptions);
    const { shadow = 'sprite', ...surface } = options;
    const { type, footprintHeight, ...casterOptions } = (
      typeof shadow === 'string' ? { type: shadow } : shadow
    ) as Exclude<ActorShadow, string>;

    this.lighting = lighting;
    this.sprite = 'sprite' in actorOptions ? actorOptions.sprite : null;
    this.footprintHeight =
      footprintHeight ?? options.size.y * Actor.DEFAULT_FOOTPRINT_SCALE;

    this.surface = lighting.addWallReceiver({
      mergeable: false,
      projectShadows: false,
      ...surface,
    });

    const footprint = this.footprint(options.position, options.size);
    if (type === 'sprite') {
      const shadowLength = options.size.y * Actor.DEFAULT_SHADOW_LENGTH_SCALE;

      this.caster = lighting.addSpriteCaster({
        image: options.image,
        minShadowLength: shadowLength,
        maxShadowLength: shadowLength,
        ...casterOptions,
        ...footprint,
      });
    }

    if (type === 'circle') {
      this.caster = lighting.addCircleCaster({
        ...casterOptions,
        ...footprint,
      });
    }

    // Look for shadows from far enough away to avoid our own shadow
    if (this.caster && options.shadowBias === undefined) {
      this.surface.shadowBias = this.casterBias(this.caster);
    }
  }

  /**
   * Get the distance that a caster's shadow reaches back towards the light
   */
  private casterBias(caster: SpriteCaster | CircleCaster): number {
    if (caster instanceof SpriteCaster) {
      const length = caster.maxShadowLength ?? caster.minShadowLength;

      return length * (1 - caster.offset.y) + 1;
    }

    return Math.max(caster.size.x, caster.size.y) / 2 + 1;
  }

  private footprint(position: vec2, size: vec2): Rectangle {
    return {
      position: vec2(position.x, position.y + size.y - this.footprintHeight),
      size: vec2(size.x, this.footprintHeight),
    };
  }

  /**
   * Copy the current position, size, and images from this actor's sprite, this
   * is called automatically when the scene is rendered
   */
  public sync() {
    if (!this.sprite) {
      return;
    }

    const frame = Actor.spriteFrame(this.sprite);

    this.surface.set(frame);
    this.caster?.set(this.footprint(frame.position, frame.size));

    if (this.caster instanceof SpriteCaster) {
      this.caster.image = frame.image;
    }
  }

  /**
   * Move this actor to a new world position
   *
   * If this actor has a sprite then this will set the sprite's position
   */
  public moveTo(position: vec2) {
    if (this.sprite) {
      this.sprite.position = vec2.cpy(position);
      this.sync();
      return;
    }

    this.surface.moveTo(position);
    this.caster?.moveTo(this.footprint(position, this.surface.size).position);
  }

  /**
   * Remove this actor from the lighting system
   */
  public remove() {
    this.surface.remove();
    this.caster?.remove();
    this.lighting.remove(this);
  }
}
