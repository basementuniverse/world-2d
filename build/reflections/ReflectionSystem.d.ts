import { Frame } from '../core';
import { FloorReflectionReceiver, FloorReflectionReceiverOptions, ReflectionReceiver, WallReflectionReceiver, WallReflectionReceiverOptions } from './ReflectionReceiver';
import { ReflectionSource, ReflectionSourceOptions } from './ReflectionSource';
/**
 * Renders floor and wall reflections
 *
 * Reflections are drawn in the middle of the scene, so this has to be called in
 * several steps. See `World` for how this fits together with everything else
 *
 * 1. Call `prepare()` at the start of each frame
 * 2. Draw the ground
 * 3. Call `drawFloor()`
 * 4. Draw walls and actors, calling `draw()` on each wall receiver as soon as
 *    its wall has been drawn
 */
export declare class ReflectionSystem {
    private static createContext;
    private sources;
    private floorReceivers;
    private wallReceivers;
    /**
     * The screen-sized canvases that reflections are drawn into
     *
     * `floorSourcesCanvas` shows every source reflected in the floor, as if the
     * whole floor was reflective
     */
    private floorSourcesContext;
    floorSourcesCanvas: HTMLCanvasElement;
    private floorContext;
    private wallContext;
    private frame;
    /**
     * Add something that appears in reflections
     */
    addSource(options: ReflectionSourceOptions): ReflectionSource;
    /**
     * Add a reflective part of the floor
     */
    addFloorReceiver(options: FloorReflectionReceiverOptions): FloorReflectionReceiver;
    /**
     * Add a reflective part of a wall
     */
    addWallReceiver(options: WallReflectionReceiverOptions): WallReflectionReceiver;
    /**
     * Remove a source or receiver from the reflection system
     */
    remove(object: ReflectionSource | ReflectionReceiver): void;
    /**
     * Get ready to draw reflections for a frame
     */
    prepare(frame: Frame): void;
    /**
     * Make sure a screen-sized context matches the frame and clear it, ready for
     * drawing in world coordinates
     */
    private resetContext;
    private visibleArea;
    /**
     * Get sources in the order that they should be drawn, sources with feet
     * further down the screen are drawn last
     */
    private sortedSources;
    /**
     * Draw reflections onto the floor, this should be called after drawing the
     * ground and before drawing anything that stands on it
     */
    drawFloor(): void;
    /**
     * Draw the reflections in a wall receiver
     */
    drawWallReceiver(receiver: WallReflectionReceiver, target: CanvasRenderingContext2D): void;
}
