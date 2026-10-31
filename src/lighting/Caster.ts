import { vec } from '@basementuniverse/vec';
import type { LightingSystem } from './LightingSystem';
import { SceneObject, SceneObjectOptions } from './SceneObject';
import { LightingImage } from './types';
import { boundingRectangle, silhouette } from './utilities';

export type RegionCasterOptions = SceneObjectOptions & {
  /**
   * Should shadows include the rectangular region of this caster?
   */
  includeRegionShadow?: boolean;
};

/**
 * A rectangle that casts polygonal shadows
 */
export class RegionCaster extends SceneObject<RegionCasterOptions> {
  public includeRegionShadow: boolean = false;

  public constructor(lighting: LightingSystem, options: RegionCasterOptions) {
    super(lighting, options);
    this.set(options);
  }

  /**
   * Check if this caster can be merged with another caster
   */
  public canMerge(other: RegionCaster): boolean {
    return (
      this.mergeable &&
      other.mergeable &&
      this.includeRegionShadow === other.includeRegionShadow
    );
  }

  /**
   * Create a new caster that covers this caster and another caster
   */
  public merge(other: RegionCaster): RegionCaster {
    return new RegionCaster(this.lighting, {
      ...(this as RegionCaster),
      ...boundingRectangle(this, other),
    });
  }
}

export type SpriteCasterOptions = SceneObjectOptions & {
  /**
   * The image used for this caster's shadow, it should be black with an alpha
   * channel
   */
  shadow?: LightingImage | null;

  /**
   * If `shadow` isn't set, we'll use the silhouette of this image instead
   */
  image?: LightingImage | null;

  /**
   * Where the shadow begins, as a fraction of the size of this caster, where
   * (0, 0) is the top-left corner and (1, 1) is the bottom-right corner
   */
  anchor?: vec;

  /**
   * Offset the shadow from the anchor, as a fraction of the shadow size
   */
  offset?: vec;

  /**
   * Shadow length when the light is at the center of this caster
   */
  minShadowLength?: number;

  /**
   * Shadow length when this caster is at the edge of the light's radius, or
   * null to use the light's radius
   */
  maxShadowLength?: number | null;
};

/**
 * A rectangle that casts a shadow by rotating and stretching an image
 */
export class SpriteCaster extends SceneObject<SpriteCasterOptions> {
  public shadow: LightingImage | null = null;
  public image: LightingImage | null = null;
  public anchor: vec = vec(0.5, 0.9);
  public offset: vec = vec(0.5, 0.9);
  public minShadowLength: number = 64;
  public maxShadowLength: number | null = 64;

  public constructor(lighting: LightingSystem, options: SpriteCasterOptions) {
    super(lighting, options);
    this.set(options);
  }

  /**
   * Get the image for this caster's shadow, if it has one
   */
  public getShadow(): LightingImage | null {
    return this.shadow ?? (this.image && silhouette(this.image));
  }
}

export type CircleCasterOptions = SceneObjectOptions & {
  /**
   * Where the shadow is centered, as a fraction of the size of this caster,
   * where (0, 0) is the top-left corner and (1, 1) is the bottom-right corner
   */
  anchor?: vec;

  /**
   * Distance from the anchor to the shadow when the light is at the center of
   * this caster
   */
  minShadowDistance?: number;

  /**
   * Distance from the anchor to the shadow when this caster is at the edge of
   * the light's radius, or null to use the light's radius
   */
  maxShadowDistance?: number | null;

  /**
   * Opacity of the shadow
   */
  alpha?: number;
};

/**
 * A rectangle that casts an elliptical shadow
 */
export class CircleCaster extends SceneObject<CircleCasterOptions> {
  public anchor: vec = vec(0.5, 0.9);
  public minShadowDistance: number = 5;
  public maxShadowDistance: number | null = 20;
  public alpha: number = 1;

  public constructor(lighting: LightingSystem, options: CircleCasterOptions) {
    super(lighting, options);
    this.set(options);
  }
}

export type ShadowCaster = RegionCaster | SpriteCaster | CircleCaster;
