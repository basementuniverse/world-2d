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
export class RippleField {
  /**
   * Ripples are stopped when they're smaller than this
   */
  private static readonly MIN_HEIGHT = 0.002;

  /**
   * How much of its height the water keeps each step, without this a splash
   * would raise the level of the water forever because the waves only move
   * water around
   */
  private static readonly HEIGHT_RETAINED = 0.995;

  /**
   * Higher speeds than this make the simulation unstable
   */
  private static readonly MAX_WAVE_NUMBER = 0.5;

  public static readonly TIME_STEP = 1 / 60;

  /**
   * The size of the grid, in cells
   */
  public readonly size: vec2;

  /**
   * RGBA data with the slope of the water in the red and green channels, and
   * the height of the water in the blue channel
   */
  public readonly pixels: Uint8Array;

  /**
   * Is the water moving?
   */
  public active: boolean = false;

  private cellSize: vec2;
  private height: Float32Array;
  private previous: Float32Array;

  /**
   * Cells with a value of 1 are land, which stops ripples
   */
  private blocked: Uint8Array | null = null;

  private time: number = 0;

  public constructor(size: vec2, cellSize: vec2) {
    const cells = size.x * size.y;

    this.size = vec2.cpy(size);
    this.cellSize = vec2.cpy(cellSize);
    this.height = new Float32Array(cells);
    this.previous = new Float32Array(cells);
    this.pixels = new Uint8Array(cells * 4);
    this.updatePixels();
  }

  /**
   * Set which cells are land
   */
  public setBlocked(blocked: Uint8Array) {
    this.blocked = blocked;
  }

  /**
   * Push the water at a position relative to the top-left of the grid, measured
   * in world units
   */
  public disturb(position: vec2, { radius = 6, strength = 1 }: RippleOptions) {
    const { size, cellSize } = this;
    const reach = vec2(radius * 2, radius * 2);
    const first = vec2.map(vec2.sub(position, reach), Math.floor);
    const last = vec2.map(vec2.add(position, reach), Math.ceil);

    const startX = Math.max(Math.floor(first.x / cellSize.x), 0);
    const endX = Math.min(Math.ceil(last.x / cellSize.x), size.x - 1);
    const startY = Math.max(Math.floor(first.y / cellSize.y), 0);
    const endY = Math.min(Math.ceil(last.y / cellSize.y), size.y - 1);

    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const dx = (x + 0.5) * cellSize.x - position.x;
        const dy = (y + 0.5) * cellSize.y - position.y;
        const amount =
          strength * Math.exp(-(dx * dx + dy * dy) / (radius * radius));

        this.height[x + y * size.x] += amount;
        this.previous[x + y * size.x] += amount;
      }
    }

    this.active = true;
  }

  /**
   * Move the simulation forward
   *
   * `speed` is how far ripples travel each second, in world units, and
   * `damping` is how much of their movement is kept each step
   */
  public update(dt: number, speed: number, damping: number) {
    if (!this.active) {
      return;
    }

    this.time += dt;

    // Don't try to catch up after a long pause
    const steps = Math.min(Math.floor(this.time / RippleField.TIME_STEP), 4);
    this.time %= RippleField.TIME_STEP;

    const cell = Math.min(this.cellSize.x, this.cellSize.y);
    const wave = Math.min(
      speed * RippleField.TIME_STEP / cell,
      RippleField.MAX_WAVE_NUMBER
    );

    for (let i = 0; i < steps; i++) {
      this.step(wave * wave, damping);
    }

    this.updatePixels();
  }

  private step(wave: number, damping: number) {
    const { height, previous, blocked } = this;
    const { x: columns, y: rows } = this.size;

    let largest = 0;

    for (let y = 0; y < rows; y++) {
      const up = y > 0 ? -columns : 0;
      const down = y < rows - 1 ? columns : 0;

      for (let x = 0; x < columns; x++) {
        const i = x + y * columns;

        if (blocked?.[i]) {
          previous[i] = 0;
          continue;
        }

        const left = x > 0 ? -1 : 0;
        const right = x < columns - 1 ? 1 : 0;
        const neighbours =
          height[i + left] +
          height[i + right] +
          height[i + up] +
          height[i + down];

        // The previous height is overwritten here because that's all we need
        // it for, so these 2 arrays swap roles after each step
        const next =
          (height[i] +
            (height[i] - previous[i]) * damping +
            (neighbours - height[i] * 4) * wave) *
          RippleField.HEIGHT_RETAINED;

        previous[i] = next;
        largest = Math.max(largest, Math.abs(next));
      }
    }

    this.height = previous;
    this.previous = height;

    if (largest < RippleField.MIN_HEIGHT) {
      this.height.fill(0);
      this.previous.fill(0);
      this.active = false;
    }
  }

  private updatePixels() {
    const { height, pixels } = this;
    const { x: columns, y: rows } = this.size;

    const encode = (value: number) =>
      Math.min(Math.max(Math.round(value * 127) + 128, 0), 255);

    for (let y = 0; y < rows; y++) {
      const up = y > 0 ? -columns : 0;
      const down = y < rows - 1 ? columns : 0;

      for (let x = 0; x < columns; x++) {
        const i = x + y * columns;
        const left = x > 0 ? -1 : 0;
        const right = x < columns - 1 ? 1 : 0;

        pixels[i * 4] = encode((height[i + right] - height[i + left]) / 2);
        pixels[i * 4 + 1] = encode((height[i + down] - height[i + up]) / 2);
        pixels[i * 4 + 2] = encode(height[i]);
        pixels[i * 4 + 3] = 255;
      }
    }
  }
}
