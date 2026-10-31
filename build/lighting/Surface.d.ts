import { vec2 } from '@basementuniverse/vec';
import { SceneImage } from '../core';
import type { LightingSystem } from './LightingSystem';
import { SceneObject, SceneObjectOptions } from './SceneObject';
type DrawCallback = (context: CanvasRenderingContext2D) => void;
export type SurfaceOptions = SceneObjectOptions & {
    /**
     * Optional background colour
     */
    colour?: string;
    /**
     * The image for this surface
     */
    image?: SceneImage | null;
    /**
     * Optional normal map, used when the shader is enabled
     */
    normalMap?: SceneImage | null;
    /**
     * Optional specular map, used when the shader is enabled
     */
    specularMap?: SceneImage | null;
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
    image: SceneImage | null;
    normalMap: SceneImage | null;
    specularMap: SceneImage | null;
    zIndex: number;
    customDraw: NonNullable<SurfaceOptions['customDraw']>;
    protected overlays: DrawCallback[];
    private customMaskContext;
    /**
     * Should images be repeated across this surface, or stretched to fit?
     */
    abstract repeat: boolean;
    /**
     * Get the image whose alpha channel decides which parts of this surface
     * receive lighting
     *
     * Returns 'solid' if the whole surface receives lighting, or null if nothing
     * does (for example if the image hasn't loaded yet)
     */
    abstract getMask(): SceneImage | 'solid' | null;
    private fillBackground;
    protected drawImage(context: CanvasRenderingContext2D, image: SceneImage): void;
    /**
     * Add something to be drawn on top of this surface, it's drawn straight after
     * the surface so that anything in front of the surface will cover it
     *
     * Returns a function which removes the overlay. Overlays don't change the
     * shape of the surface, and surfaces with overlays can't be merged
     */
    addOverlay(draw: DrawCallback): () => void;
    draw(context: CanvasRenderingContext2D): void;
    /**
     * Draw this surface without its overlays
     */
    drawContent(context: CanvasRenderingContext2D): void;
    protected drawColourMap(context: CanvasRenderingContext2D, image: SceneImage | null, defaultColour: string): void;
    drawNormalMap(context: CanvasRenderingContext2D): void;
    drawSpecularMap(context: CanvasRenderingContext2D): void;
    /**
     * Render a custom mask, relative to the position of this surface
     */
    protected renderCustomMask(draw: DrawCallback): HTMLCanvasElement;
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
    getMask(): SceneImage | 'solid' | null;
}
export type WallReceiverOptions = SurfaceOptions & {
    /**
     * Image whose alpha channel decides which parts of this surface receive
     * lighting, the default is the alpha channel of `image`
     */
    mask?: SceneImage | null;
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
    surfaceNormal?: vec2;
    /**
     * How far towards the light to look for shadows on the ground, in world
     * units. This should be enough to get out of the surface's own shadow
     */
    shadowBias?: number;
    /**
     * Should sprite and circle shadows climb this surface? This should be false
     * for anything that casts one of these shadows, otherwise it will be in its
     * own shadow
     */
    projectShadows?: boolean;
};
/**
 * A rectangle or sprite that receives wall shadows
 */
export declare class WallReceiver extends Surface<WallReceiverOptions> {
    mask: SceneImage | null;
    repeat: boolean;
    receiveLight: boolean;
    surfaceNormal: vec2;
    shadowBias: number;
    projectShadows: boolean;
    constructor(lighting: LightingSystem, options: WallReceiverOptions);
    getMask(): SceneImage | 'solid' | null;
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
