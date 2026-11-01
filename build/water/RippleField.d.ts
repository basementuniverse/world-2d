import { vec2 } from '@basementuniverse/vec';
export type RippleOptions = {
    /**
     * The distance covered by the disturbance, in world units
     */
    radius?: number;
    /**
     * How hard the water is pushed, this can be negative
     */
    strength?: number;
};
/**
 * A grid of water heights that spreads disturbances out as ripples
 *
 * This uses the wave equation, each cell is pulled towards the average of its
 * neighbours and keeps moving afterwards. There's a fixed time step so that
 * ripples behave the same way at any frame rate, and nothing is calculated
 * while the water is still
 */
export declare class RippleField {
    /**
     * Ripples are stopped when they're smaller than this
     */
    private static readonly MIN_HEIGHT;
    /**
     * How much of its height the water keeps each step, without this a splash
     * would raise the level of the water forever because the waves only move
     * water around
     */
    private static readonly HEIGHT_RETAINED;
    /**
     * Higher speeds than this make the simulation unstable
     */
    private static readonly MAX_WAVE_NUMBER;
    static readonly TIME_STEP: number;
    /**
     * The size of the grid, in cells
     */
    readonly size: vec2;
    /**
     * RGBA data with the slope of the water in the red and green channels, and
     * the height of the water in the blue channel
     */
    readonly pixels: Uint8Array;
    /**
     * Is the water moving?
     */
    active: boolean;
    private cellSize;
    private height;
    private previous;
    /**
     * Cells with a value of 1 are land, which stops ripples
     */
    private blocked;
    private time;
    constructor(size: vec2, cellSize: vec2);
    /**
     * Set which cells are land
     */
    setBlocked(blocked: Uint8Array): void;
    /**
     * Push the water at a position relative to the top-left of the grid, measured
     * in world units
     */
    disturb(position: vec2, { radius, strength }: RippleOptions): void;
    /**
     * Move the simulation forward
     *
     * `speed` is how far ripples travel each second, in world units, and
     * `damping` is how much of their movement is kept each step
     */
    update(dt: number, speed: number, damping: number): void;
    private step;
    private updatePixels;
}
