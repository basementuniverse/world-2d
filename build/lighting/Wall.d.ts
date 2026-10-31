import { vec } from '@basementuniverse/vec';
import { RegionCaster } from './Caster';
import type { LightingSystem } from './LightingSystem';
import { WallReceiver, WallReceiverOptions } from './Surface';
import { LightingImage, Rectangle } from './types';
export type WallOptions = Omit<WallReceiverOptions, 'position' | 'size' | 'receiveLight'> & {
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
export declare class Wall {
    private static readonly DEFAULT_TOP_COLOUR;
    readonly front: WallReceiver;
    readonly top: WallReceiver;
    readonly caster: RegionCaster;
    private height;
    constructor(lighting: LightingSystem, options: WallOptions);
    private frontRectangle;
    private topRectangle;
    /**
     * Move this wall so that its footprint is at a new world position
     */
    moveTo(position: vec): void;
    /**
     * Remove this wall from the lighting system
     */
    remove(): void;
}
