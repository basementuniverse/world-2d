import { vec2 } from '@basementuniverse/vec';
import { Rectangle, SceneImage } from '../core';
import type { ReflectionSystem } from './ReflectionSystem';
export type ReflectionReceiverOptions = Rectangle & {
    /**
     * Image whose alpha channel decides which parts of this rectangle are
     * reflective, the default is the whole rectangle
     */
    mask?: SceneImage | null;
    /**
     * Should the mask be repeated across the rectangle? Otherwise it will be
     * stretched to fit
     */
    repeat?: boolean;
    /**
     * How strong the reflection is, from 0 to 1
     */
    strength?: number;
};
/**
 * An area that shows reflections
 */
export declare abstract class ReflectionReceiver {
    position: vec2;
    size: vec2;
    mask: SceneImage | null;
    repeat: boolean;
    strength: number;
    protected reflections: ReflectionSystem;
    private removeCallbacks;
    constructor(reflections: ReflectionSystem, options: ReflectionReceiverOptions, defaultStrength: number);
    /**
     * Fill this area, so that the context only keeps reflective parts or so that
     * it shows which parts are reflective
     */
    drawMask(context: CanvasRenderingContext2D): void;
    /**
     * Add a function to be called when this receiver is removed
     */
    onRemove(callback: () => void): void;
    /**
     * Remove this receiver from the reflection system
     */
    remove(): void;
}
export type FloorReflectionReceiverOptions = ReflectionReceiverOptions;
/**
 * A reflective part of the floor
 */
export declare class FloorReflectionReceiver extends ReflectionReceiver {
    private static readonly DEFAULT_STRENGTH;
    constructor(reflections: ReflectionSystem, options: FloorReflectionReceiverOptions);
}
export type WallReflectionReceiverOptions = ReflectionReceiverOptions & {
    /**
     * Where the wall meets the ground, the default is the bottom of the rectangle
     *
     * This should be set if the rectangle is only part of a wall, for example a
     * mirror that's hanging above the floor
     */
    foot?: number;
};
/**
 * A reflective part of a wall
 */
export declare class WallReflectionReceiver extends ReflectionReceiver {
    private static readonly DEFAULT_STRENGTH;
    foot: number;
    constructor(reflections: ReflectionSystem, options: WallReflectionReceiverOptions);
    /**
     * Draw this receiver's reflections with the camera's transforms applied
     *
     * Reflections in walls can be covered by things that are drawn afterwards, so
     * this needs to be drawn straight after the wall
     */
    draw(context: CanvasRenderingContext2D): void;
}
