import { vec } from '@basementuniverse/vec';
import type { LightingSystem } from './LightingSystem';
import { SceneObject, SceneObjectOptions } from './SceneObject';
import { LightingImage } from './types';
export type RegionCasterOptions = SceneObjectOptions & {
    /**
     * Should shadows include the rectangular region of this caster?
     */
    includeRegionShadow?: boolean;
};
/**
 * A rectangle that casts polygonal shadows
 */
export declare class RegionCaster extends SceneObject<RegionCasterOptions> {
    includeRegionShadow: boolean;
    constructor(lighting: LightingSystem, options: RegionCasterOptions);
    /**
     * Check if this caster can be merged with another caster
     */
    canMerge(other: RegionCaster): boolean;
    /**
     * Create a new caster that covers this caster and another caster
     */
    merge(other: RegionCaster): RegionCaster;
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
export declare class SpriteCaster extends SceneObject<SpriteCasterOptions> {
    shadow: LightingImage | null;
    image: LightingImage | null;
    anchor: vec;
    offset: vec;
    minShadowLength: number;
    maxShadowLength: number | null;
    constructor(lighting: LightingSystem, options: SpriteCasterOptions);
    /**
     * Get the image for this caster's shadow, if it has one
     */
    getShadow(): LightingImage | null;
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
export declare class CircleCaster extends SceneObject<CircleCasterOptions> {
    anchor: vec;
    minShadowDistance: number;
    maxShadowDistance: number | null;
    alpha: number;
    constructor(lighting: LightingSystem, options: CircleCasterOptions);
}
export type ShadowCaster = RegionCaster | SpriteCaster | CircleCaster;
