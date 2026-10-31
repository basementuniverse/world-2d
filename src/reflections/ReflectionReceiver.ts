import { vec2 } from '@basementuniverse/vec';
import { drawImageInRectangle, Rectangle, SceneImage } from '../core';
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
export abstract class ReflectionReceiver {
  public position: vec2;
  public size: vec2;
  public mask: SceneImage | null;
  public repeat: boolean;
  public strength: number;

  protected reflections: ReflectionSystem;

  private removeCallbacks: (() => void)[] = [];

  public constructor(
    reflections: ReflectionSystem,
    options: ReflectionReceiverOptions,
    defaultStrength: number
  ) {
    this.reflections = reflections;
    this.position = vec2.cpy(options.position);
    this.size = vec2.cpy(options.size);
    this.mask = options.mask ?? null;
    this.repeat = options.repeat ?? false;
    this.strength = options.strength ?? defaultStrength;
  }

  /**
   * Fill this area, so that the context only keeps reflective parts or so that
   * it shows which parts are reflective
   */
  public drawMask(context: CanvasRenderingContext2D) {
    if (this.mask) {
      drawImageInRectangle(context, this.mask, this, this.repeat);
    } else {
      context.fillRect(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y
      );
    }
  }

  /**
   * Add a function to be called when this receiver is removed
   */
  public onRemove(callback: () => void) {
    this.removeCallbacks.push(callback);
  }

  /**
   * Remove this receiver from the reflection system
   */
  public remove() {
    this.reflections.remove(this);
    this.removeCallbacks.forEach(callback => callback());
  }
}

export type FloorReflectionReceiverOptions = ReflectionReceiverOptions;

/**
 * A reflective part of the floor
 */
export class FloorReflectionReceiver extends ReflectionReceiver {
  private static readonly DEFAULT_STRENGTH = 0.5;

  public constructor(
    reflections: ReflectionSystem,
    options: FloorReflectionReceiverOptions
  ) {
    super(reflections, options, FloorReflectionReceiver.DEFAULT_STRENGTH);
  }
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
export class WallReflectionReceiver extends ReflectionReceiver {
  private static readonly DEFAULT_STRENGTH = 1;

  public foot: number;

  public constructor(
    reflections: ReflectionSystem,
    options: WallReflectionReceiverOptions
  ) {
    super(reflections, options, WallReflectionReceiver.DEFAULT_STRENGTH);
    this.foot = options.foot ?? this.position.y + this.size.y;
  }

  /**
   * Draw this receiver's reflections with the camera's transforms applied
   *
   * Reflections in walls can be covered by things that are drawn afterwards, so
   * this needs to be drawn straight after the wall
   */
  public draw(context: CanvasRenderingContext2D) {
    this.reflections.drawWallReceiver(this, context);
  }
}
