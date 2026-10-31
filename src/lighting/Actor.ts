import { vec } from '@basementuniverse/vec';
import {
  CircleCaster,
  CircleCasterOptions,
  SpriteCaster,
  SpriteCasterOptions,
} from './Caster';
import type { LightingSystem } from './LightingSystem';
import { WallReceiver, WallReceiverOptions } from './Surface';
import { Rectangle } from './types';

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

/**
 * A moving object that receives light and casts a shadow
 */
export class Actor {
  private static readonly DEFAULT_FOOTPRINT_SCALE = 1 / 3;
  private static readonly DEFAULT_SHADOW_LENGTH_SCALE = 1.33;

  public readonly surface: WallReceiver;
  public readonly caster: SpriteCaster | CircleCaster | null = null;

  private footprintHeight: number;

  public constructor(lighting: LightingSystem, options: ActorOptions) {
    const { shadow = 'sprite', ...surface } = options;
    const { type, footprintHeight, ...casterOptions } = (
      typeof shadow === 'string' ? { type: shadow } : shadow
    ) as Exclude<ActorShadow, string>;

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

  private footprint(position: vec, size: vec): Rectangle {
    return {
      position: vec(position.x, position.y + size.y - this.footprintHeight),
      size: vec(size.x, this.footprintHeight),
    };
  }

  /**
   * Move this actor to a new world position
   */
  public moveTo(position: vec) {
    this.surface.moveTo(position);
    this.caster?.moveTo(this.footprint(position, this.surface.size).position);
  }

  /**
   * Remove this actor from the lighting system
   */
  public remove() {
    this.surface.remove();
    this.caster?.remove();
  }
}
