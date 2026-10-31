import { vec } from '@basementuniverse/vec';
import { RegionCaster } from './Caster';
import type { LightingSystem } from './LightingSystem';
import { WallReceiver, WallReceiverOptions } from './Surface';
import { LightingImage, Rectangle } from './types';

export type WallOptions = Omit<
  WallReceiverOptions,
  'position' | 'size' | 'receiveLight'
> & {
  /**
   * The area of the ground that this wall stands on
   */
  footprint: Rectangle;

  /**
   * The height of the wall's front face
   */
  height: number;

  /**
   * Should shadows include the wall's footprint?
   */
  includeRegionShadow?: boolean;

  /**
   * Appearance of the top of the wall, it only receives ambient light
   */
  top?: {
    colour?: string;
    image?: LightingImage | null;
  };
};

/**
 * A solid wall in a 3/4 view
 *
 * This is made from a front face that receives light, a top that only receives
 * ambient light, and a footprint that casts shadows
 */
export class Wall {
  private static readonly DEFAULT_TOP_COLOUR = 'black';

  public readonly front: WallReceiver;
  public readonly top: WallReceiver;
  public readonly caster: RegionCaster;

  private height: number;

  public constructor(lighting: LightingSystem, options: WallOptions) {
    const { footprint, height, includeRegionShadow, top, ...front } = options;

    this.height = height;
    this.caster = lighting.addRegionCaster({
      ...footprint,
      mergeable: options.mergeable,
      includeRegionShadow,
    });
    this.front = lighting.addWallReceiver({
      ...front,
      ...this.frontRectangle(footprint),
    });
    this.top = lighting.addWallReceiver({
      zIndex: options.zIndex,
      mergeable: options.mergeable,
      colour: top?.colour ?? Wall.DEFAULT_TOP_COLOUR,
      image: top?.image,
      receiveLight: false,
      ...this.topRectangle(footprint),
    });
  }

  private frontRectangle(footprint: Rectangle): Rectangle {
    const bottom = footprint.position.y + footprint.size.y;

    return {
      position: vec(footprint.position.x, bottom - this.height),
      size: vec(footprint.size.x, this.height),
    };
  }

  private topRectangle(footprint: Rectangle): Rectangle {
    return {
      position: vec(footprint.position.x, footprint.position.y - this.height),
      size: footprint.size,
    };
  }

  /**
   * Move this wall so that its footprint is at a new world position
   */
  public moveTo(position: vec) {
    const footprint = { position, size: this.caster.size };

    this.caster.moveTo(position);
    this.front.moveTo(this.frontRectangle(footprint).position);
    this.top.moveTo(this.topRectangle(footprint).position);
  }

  /**
   * Remove this wall from the lighting system
   */
  public remove() {
    this.front.remove();
    this.top.remove();
    this.caster.remove();
  }
}
