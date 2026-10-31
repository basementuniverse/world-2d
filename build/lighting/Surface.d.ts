import { vec } from '@basementuniverse/vec';
import type { LightingSystem } from './LightingSystem';
import { SceneObject, SceneObjectOptions } from './SceneObject';
import { LightingImage, WallShadowLayer } from './types';
type DrawCallback = (context: CanvasRenderingContext2D) => void;
export type SurfaceOptions = SceneObjectOptions & {
    /**
     * Optional background colour
     */
    colour?: string;
    /**
     * The image for this surface
     */
    image?: LightingImage | null;
    /**
     * Optional normal map, used when the shader is enabled
     */
    normalMap?: LightingImage | null;
    /**
     * Optional specular map, used when the shader is enabled
     */
    specularMap?: LightingImage | null;
    /**
     * Surfaces are drawn in order of z-index and then by their bottom edge
     */
    zIndex?: number;
    /**
     * Replace any of the default drawing steps for this surface, for objects
     * that aren't a single image
     */
    customDraw?: {
        image?: DrawCallback;
        mask?: DrawCallback;
        normalMap?: DrawCallback;
        specularMap?: DrawCallback;
    };
};
/**
 * An object that receives light and shadows
 */
export declare abstract class Surface<Options extends SurfaceOptions> extends SceneObject<Options> {
    private static readonly NORMAL_MAP_DEFAULT_COLOUR;
    private static readonly SPECULAR_MAP_DEFAULT_COLOUR;
    colour: string;
    image: LightingImage | null;
    normalMap: LightingImage | null;
    specularMap: LightingImage | null;
    zIndex: number;
    customDraw: NonNullable<SurfaceOptions['customDraw']>;
    /**
     * Should images be repeated across this surface, or stretched to fit?
     */
    abstract repeat: boolean;
    /**
     * Draw the part of this surface that receives lighting
     */
    abstract drawMask(context: CanvasRenderingContext2D): void;
    private fillBackground;
    protected drawImage(context: CanvasRenderingContext2D, image: LightingImage): void;
    draw(context: CanvasRenderingContext2D): void;
    protected drawColourMap(context: CanvasRenderingContext2D, image: LightingImage | null, defaultColour: string): void;
    drawNormalMap(context: CanvasRenderingContext2D): void;
    drawSpecularMap(context: CanvasRenderingContext2D): void;
    protected fillMask(context: CanvasRenderingContext2D): void;
}
export type GroundReceiverOptions = SurfaceOptions;
/**
 * A rectangle of ground that receives ground shadows
 *
 * Images are repeated across the rectangle
 */
export declare class GroundReceiver extends Surface<GroundReceiverOptions> {
    repeat: boolean;
    constructor(lighting: LightingSystem, options: GroundReceiverOptions);
    drawMask(context: CanvasRenderingContext2D): void;
}
export type WallReceiverOptions = SurfaceOptions & {
    /**
     * Image used to mask this surface, it should be black with an alpha channel
     *
     * If this isn't set then we'll use the image's alpha channel
     */
    mask?: LightingImage | null;
    /**
     * Should the image be repeated across the surface? Otherwise it will be
     * stretched to fit
     */
    repeat?: boolean;
    /**
     * Set this to false if this surface should only receive ambient light (this
     * is useful for the tops of walls)
     */
    receiveLight?: boolean;
    /**
     * Direction that this surface is facing, for ambient lighting
     */
    surfaceNormal?: vec;
    /**
     * Use a different layer for surfaces that might overlap
     */
    layer?: WallShadowLayer;
};
/**
 * A rectangle or sprite that receives wall shadows
 */
export declare class WallReceiver extends Surface<WallReceiverOptions> {
    mask: LightingImage | null;
    repeat: boolean;
    receiveLight: boolean;
    surfaceNormal: vec;
    layer: WallShadowLayer;
    constructor(lighting: LightingSystem, options: WallReceiverOptions);
    drawMask(context: CanvasRenderingContext2D): void;
    /**
     * Check if this surface can be merged with another surface
     */
    canMerge(other: WallReceiver): boolean;
    /**
     * Create a new surface that covers this surface and another surface
     */
    merge(other: WallReceiver): WallReceiver;
}
export {};
