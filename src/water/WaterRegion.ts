import { vec2 } from '@basementuniverse/vec';
import { drawImageInRectangle, Rectangle, SceneImage } from '../core';
import { RippleField, RippleOptions } from './RippleField';
import type { WaterSystem } from './WaterSystem';

/**
 * A grid of values that covers a region, the first index is the row
 *
 * Values are interpolated between the centers of the cells
 */
export type WaterGrid<T> = T[][];

export type WaterRegionOptions = Rectangle & {
  /**
   * Image whose alpha channel decides where the water is, the default is the
   * whole rectangle
   *
   * The edge of the mask is a hard edge unless the water gets shallower towards
   * it, so this can be used for shores that follow the shape of the terrain
   */
  mask?: SceneImage | null;

  /**
   * Should the mask be repeated across the region? Otherwise it will be
   * stretched to fit
   */
  repeat?: boolean;

  /**
   * How deep the water is, from 0 at the shore to 1 in the deepest parts
   *
   * This can be a single number or a grid
   */
  depth?: number | WaterGrid<number>;

  /**
   * Which way the water flows and how quickly, these vectors should be no
   * longer than 1
   *
   * This can be a single vector or a grid
   */
  flow?: vec2 | WaterGrid<vec2>;

  /**
   * Distance that water moves each second when a flow vector has a length of 1
   */
  flowSpeed?: number;

  /**
   * The colour of shallow water
   */
  colour?: string;

  /**
   * The colour of deep water
   */
  deepColour?: string;

  /**
   * How much the water hides what's underneath it at the deepest point, from 0
   * to 1
   */
  opacity?: number;

  /**
   * The depth at which water is fully visible, it fades out at depths below
   * this to blend with the shore. Use 0 for water that doesn't fade out
   */
  shoreBlend?: number;

  /**
   * How far waves can bend what's underneath the water, in world units
   */
  refraction?: number;

  /**
   * How strong reflections are, from 0 to 1
   */
  reflection?: number;

  /**
   * How far waves can bend reflections, in world units
   */
  reflectionDistortion?: number;

  /**
   * A tiling normal map for waves, the default is a generated one
   */
  normalMap?: SceneImage | null;

  /**
   * The size of the normal map in world units
   */
  waveSize?: number;

  /**
   * How quickly waves move, in world units per second
   */
  waveSpeed?: number;

  /**
   * How steep waves are, from 0 for flat water to 1
   */
  waveStrength?: number;

  /**
   * How steep ripples are compared to waves
   */
  rippleStrength?: number;

  /**
   * How far ripples travel each second, in world units
   */
  rippleSpeed?: number;

  /**
   * How much of their movement ripples keep each step, from 0 to 1
   */
  rippleDamping?: number;

  /**
   * The size of each cell in the ripple simulation, in world units
   */
  rippleCellSize?: number;

  /**
   * The number of raindrops each second, for every 10000 square world units
   */
  rain?: number;

  /**
   * How much each raindrop disturbs the water
   */
  rainStrength?: number;

  /**
   * How shiny the water is when lighting is used, from 0 to 1
   */
  specular?: number;

  /**
   * How much the slope of the water changes its brightness, this lets waves and
   * ripples be seen even if there aren't any lights
   */
  surfaceShading?: number;

  /**
   * Snap the water to a grid of this size in world units for a pixel art
   * style, or use 0 for smooth water
   */
  pixelSize?: number;
};

/**
 * What's at a point in the water
 */
export type WaterSample = {
  region: WaterRegion;
  depth: number;
};

/**
 * An area of water
 */
export class WaterRegion {
  private static readonly DEFAULT_OPTIONS = {
    repeat: false,
    flowSpeed: 16,
    colour: '#3f8fa8',
    deepColour: '#123f63',
    opacity: 0.7,
    shoreBlend: 0.15,
    refraction: 4,
    reflection: 0.6,
    reflectionDistortion: 3,
    waveSize: 128,
    waveSpeed: 6,
    waveStrength: 0.35,
    rippleStrength: 2,
    rippleSpeed: 60,
    rippleDamping: 0.97,
    rippleCellSize: 2,
    rain: 0,
    rainStrength: 0.5,
    specular: 0.5,
    surfaceShading: 0.2,
    pixelSize: 0,
  };

  private static readonly MAX_RIPPLE_CELLS = 256;
  private static readonly RAINDROP_RADIUS = 2.5;
  private static readonly RAIN_AREA = 10000;

  public position: vec2;
  public size: vec2;
  public mask: SceneImage | null;
  public normalMap: SceneImage | null;

  public repeat: boolean;
  public flowSpeed: number;
  public colour: string;
  public deepColour: string;
  public opacity: number;
  public shoreBlend: number;
  public refraction: number;
  public reflection: number;
  public reflectionDistortion: number;
  public waveSize: number;
  public waveSpeed: number;
  public waveStrength: number;
  public rippleStrength: number;
  public rippleSpeed: number;
  public rippleDamping: number;
  public rain: number;
  public rainStrength: number;
  public specular: number;
  public surfaceShading: number;
  public pixelSize: number;

  public readonly ripples: RippleField;

  /**
   * The current depth and flow, a single value is a grid with 1 cell
   */
  public depthGrid: WaterGrid<number> = [[1]];
  public flowGrid: WaterGrid<vec2> = [[vec2()]];

  /**
   * RGBA data for the depth and flow grids, the version numbers are changed
   * whenever the data changes
   */
  public depthPixels: { size: vec2; data: Uint8Array; version: number };
  public flowPixels: { size: vec2; data: Uint8Array; version: number };

  /**
   * This is changed whenever the mask needs to be uploaded again
   */
  public maskVersion: number = 0;

  private system: WaterSystem;
  private shape: Uint8Array | null = null;
  private rainTime: number = 0;
  private moveCallbacks: ((position: vec2) => void)[] = [];
  private removeCallbacks: (() => void)[] = [];

  public constructor(system: WaterSystem, options: WaterRegionOptions) {
    const { mask, normalMap, depth, flow, position, size, ...settings } =
      options;

    this.system = system;
    this.position = vec2.cpy(position);
    this.size = vec2.cpy(size);
    this.mask = mask ?? null;
    this.normalMap = normalMap ?? null;
    Object.assign(this, WaterRegion.DEFAULT_OPTIONS, settings);

    this.depthPixels = { size: vec2(1), data: new Uint8Array(4), version: 0 };
    this.flowPixels = { size: vec2(1), data: new Uint8Array(4), version: 0 };
    this.setDepth(depth ?? 1);
    this.setFlow(flow ?? vec2());

    const cellSize = Math.max(
      options.rippleCellSize ?? WaterRegion.DEFAULT_OPTIONS.rippleCellSize,
      Math.max(size.x, size.y) / WaterRegion.MAX_RIPPLE_CELLS
    );
    const cells = vec2(
      Math.max(Math.ceil(size.x / cellSize), 1),
      Math.max(Math.ceil(size.y / cellSize), 1)
    );

    this.ripples = new RippleField(
      cells,
      vec2(size.x / cells.x, size.y / cells.y)
    );
  }

  /**
   * Change how deep the water is
   */
  public setDepth(depth: number | WaterGrid<number>) {
    this.depthGrid = typeof depth === 'number' ? [[depth]] : depth;

    const rows = this.depthGrid.length;
    const columns = this.depthGrid[0].length;
    const data = new Uint8Array(rows * columns * 4);

    this.depthGrid.forEach((row, y) =>
      row.forEach((value, x) => {
        data[(x + y * columns) * 4] = Math.round(value * 255);
      })
    );

    this.depthPixels = {
      size: vec2(columns, rows),
      data,
      version: this.depthPixels.version + 1,
    };
  }

  /**
   * Change which way the water flows
   */
  public setFlow(flow: vec2 | WaterGrid<vec2>) {
    this.flowGrid = Array.isArray(flow) ? flow : [[flow]];

    const rows = this.flowGrid.length;
    const columns = this.flowGrid[0].length;
    const data = new Uint8Array(rows * columns * 4);

    // 128 is used for 0 so that still water stays perfectly still
    this.flowGrid.forEach((row, y) =>
      row.forEach((value, x) => {
        data[(x + y * columns) * 4] = Math.round(value.x * 127) + 128;
        data[(x + y * columns) * 4 + 1] = Math.round(value.y * 127) + 128;
      })
    );

    this.flowPixels = {
      size: vec2(columns, rows),
      data,
      version: this.flowPixels.version + 1,
    };
  }

  /**
   * Draw the mask at the resolution of the ripple grid, so that we can find out
   * where the water is without using the GPU
   *
   * This returns null if the mask hasn't loaded yet
   */
  private getShape(): Uint8Array | null {
    if (this.shape || !this.mask) {
      return this.shape;
    }

    if (
      this.mask.width === 0 ||
      (this.mask instanceof HTMLImageElement && !this.mask.complete)
    ) {
      return null;
    }

    const { x: columns, y: rows } = this.ripples.size;
    const canvas = document.createElement('canvas');
    canvas.width = columns;
    canvas.height = rows;

    const context = canvas.getContext('2d', { willReadFrequently: true })!;
    context.scale(columns / this.size.x, rows / this.size.y);
    context.translate(-this.position.x, -this.position.y);
    drawImageInRectangle(context, this.mask, this, this.repeat);

    const { data } = context.getImageData(0, 0, columns, rows);
    const shape = new Uint8Array(columns * rows);
    const blocked = new Uint8Array(columns * rows);
    for (let i = 0; i < shape.length; i++) {
      shape[i] = data[i * 4 + 3];
      blocked[i] = shape[i] < 128 ? 1 : 0;
    }

    this.shape = shape;
    this.ripples.setBlocked(blocked);

    return shape;
  }

  /**
   * Forget the mask's shape, this should be called if the mask is changed
   */
  public invalidateMask() {
    this.shape = null;
    this.maskVersion++;
  }

  /**
   * Find the depth at a world position, this is 0 if there's no water there
   */
  public depthAt(position: vec2): number {
    const local = vec2.sub(position, this.position);
    if (
      local.x < 0 ||
      local.y < 0 ||
      local.x >= this.size.x ||
      local.y >= this.size.y
    ) {
      return 0;
    }

    const shape = this.getShape();
    if (shape) {
      const { x: columns, y: rows } = this.ripples.size;
      const x = Math.floor((local.x / this.size.x) * columns);
      const y = Math.floor((local.y / this.size.y) * rows);

      if (shape[x + y * columns] < 128) {
        return 0;
      }
    }

    return this.interpolateDepth(local);
  }

  /**
   * Find a value from the depth grid, in the same way that a texture would
   */
  private interpolateDepth(local: vec2): number {
    const grid = this.depthGrid;
    const rows = grid.length;
    const columns = grid[0].length;

    const u = (local.x / this.size.x) * columns - 0.5;
    const v = (local.y / this.size.y) * rows - 0.5;
    const clampX = (x: number) => Math.min(Math.max(x, 0), columns - 1);
    const clampY = (y: number) => Math.min(Math.max(y, 0), rows - 1);

    const x0 = Math.floor(u);
    const y0 = Math.floor(v);
    const tx = u - x0;
    const ty = v - y0;

    const value = (x: number, y: number) => grid[clampY(y)][clampX(x)];
    const top = value(x0, y0) * (1 - tx) + value(x0 + 1, y0) * tx;
    const bottom = value(x0, y0 + 1) * (1 - tx) + value(x0 + 1, y0 + 1) * tx;

    return top * (1 - ty) + bottom * ty;
  }

  /**
   * Disturb the water at a world position, for example if something has fallen
   * into it
   */
  public disturb(position: vec2, options: RippleOptions = {}) {
    this.getShape();
    this.ripples.disturb(vec2.sub(position, this.position), options);
  }

  public update(dt: number) {
    this.updateRain(dt);
    this.ripples.update(dt, this.rippleSpeed, this.rippleDamping);
  }

  private updateRain(dt: number) {
    if (this.rain <= 0) {
      return;
    }

    const area = this.size.x * this.size.y;
    const interval = WaterRegion.RAIN_AREA / (this.rain * area);

    this.rainTime += dt;
    while (this.rainTime >= interval) {
      this.rainTime -= interval;
      this.disturb(
        vec2(
          this.position.x + Math.random() * this.size.x,
          this.position.y + Math.random() * this.size.y
        ),
        {
          radius: WaterRegion.RAINDROP_RADIUS,
          strength: -this.rainStrength,
        }
      );
    }
  }

  /**
   * Move this region to a new world position
   */
  public moveTo(position: vec2) {
    this.position = vec2.cpy(position);
    this.moveCallbacks.forEach(callback => callback(this.position));
  }

  /**
   * Add a function to be called when this region is moved
   */
  public onMove(callback: (position: vec2) => void) {
    this.moveCallbacks.push(callback);
  }

  /**
   * Add a function to be called when this region is removed
   */
  public onRemove(callback: () => void) {
    this.removeCallbacks.push(callback);
  }

  /**
   * Remove this region from the water system
   */
  public remove() {
    this.system.remove(this);
    this.removeCallbacks.forEach(callback => callback());
  }
}
