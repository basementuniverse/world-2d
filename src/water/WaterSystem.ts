import { vec2 } from '@basementuniverse/vec';
import {
  Frame,
  GlContext,
  intervalToRectangle,
  rectanglesIntersect,
} from '../core';
import { RippleOptions } from './RippleField';
import { WaterOutput, WaterPass } from './WaterPass';
import {
  WaterRegion,
  WaterRegionOptions,
  WaterSample,
} from './WaterRegion';

/**
 * Renders water
 *
 * Water shows what's underneath it, so this has to be called part-way through
 * drawing the scene. See `World` for how this fits together with everything
 * else
 *
 * 1. Call `update()` every frame
 * 2. Draw everything that's underneath the water
 * 3. Call `draw()`
 * 4. Draw everything that's on top of the water
 */
export class WaterSystem {
  private static createContext(): CanvasRenderingContext2D {
    return document.createElement('canvas').getContext('2d')!;
  }

  private regions: WaterRegion[] = [];
  private glContext: GlContext | null;
  private pass: WaterPass | null = null;
  private time: number = 0;
  private frame: Frame | null = null;

  /**
   * Screen-sized images of the water's surface, for the lighting system
   */
  private normalMapContext = WaterSystem.createContext();
  public normalMapCanvas = this.normalMapContext.canvas;

  private specularMapContext = WaterSystem.createContext();
  public specularMapCanvas = this.specularMapContext.canvas;

  /**
   * `glContext` lets the water system share a WebGL context with other systems,
   * otherwise it will create its own
   */
  public constructor(glContext?: GlContext) {
    this.glContext = glContext ?? null;
  }

  /**
   * Share a WebGL context with other systems, this needs to be called before
   * the first render and does nothing if a context has already been set
   */
  public useGlContext(glContext: GlContext) {
    this.glContext ??= glContext;
  }

  /**
   * Add an area of water
   */
  public addRegion(options: WaterRegionOptions): WaterRegion {
    const region = new WaterRegion(this, options);
    this.regions.push(region);

    return region;
  }

  /**
   * Remove an area of water
   */
  public remove(region: WaterRegion) {
    this.regions = this.regions.filter(r => r !== region);
    this.pass?.release(region);
  }

  /**
   * Find the water at a world position, this is null if there isn't any
   */
  public sample(position: vec2): WaterSample | null {
    for (const region of this.regions) {
      const depth = region.depthAt(position);
      if (depth > 0) {
        return { region, depth };
      }
    }

    return null;
  }

  /**
   * Disturb the water at a world position, for example if something has fallen
   * into it. This does nothing if there's no water there
   */
  public disturb(position: vec2, options?: RippleOptions) {
    this.sample(position)?.region.disturb(position, options);
  }

  /**
   * Move the water forward, this should be called every frame
   */
  public update(dt: number) {
    this.time += dt;
    this.regions.forEach(region => region.update(dt));
  }

  /**
   * Get the shader pass, if it can be used
   */
  private getPass(): WaterPass | null {
    this.pass ??= new WaterPass(this.glContext ?? new GlContext());

    return this.pass.available ? this.pass : null;
  }

  private visibleRegions({ camera }: Frame): WaterRegion[] {
    const visible = intervalToRectangle(camera.bounds);

    return this.regions.filter(region => rectanglesIntersect(region, visible));
  }

  /**
   * Draw the water onto the frame's context, using what's already there as the
   * scene underneath the water
   */
  public draw(frame: Frame) {
    this.frame = frame;

    const regions = this.visibleRegions(frame);
    const pass = regions.length > 0 ? this.getPass() : null;
    if (!pass) {
      return;
    }

    pass.render(frame, regions, WaterOutput.Colour, this.time);

    frame.context.save();
    frame.context.setTransform(1, 0, 0, 1, 0, 0);
    frame.context.drawImage(pass.canvas, 0, 0);
    frame.context.restore();
  }

  /**
   * Render the normal map and specular map of the water's surface
   */
  public drawLightingMaps(frame: Frame) {
    const regions = this.visibleRegions(frame);
    const pass = regions.length > 0 ? this.getPass() : null;
    if (!pass) {
      return;
    }

    for (const [context, output] of [
      [this.normalMapContext, WaterOutput.Normal],
      [this.specularMapContext, WaterOutput.Specular],
    ] as const) {
      pass.render(frame, regions, output, this.time);

      context.canvas.width = frame.screen.x;
      context.canvas.height = frame.screen.y;
      context.drawImage(pass.canvas, 0, 0);
    }
  }

  /**
   * Draw part of a screen-sized map onto a context that's using the camera's
   * transforms, this is for adding the water's surface to the scene's maps
   */
  private drawRegionMap(
    context: CanvasRenderingContext2D,
    region: WaterRegion,
    map: HTMLCanvasElement
  ) {
    const { frame } = this;
    if (!frame) {
      return;
    }

    const topLeft = frame.camera.worldToScreen(region.position);
    const bottomRight = frame.camera.worldToScreen(
      vec2.add(region.position, region.size)
    );
    const left = Math.max(Math.floor(topLeft.x), 0);
    const top = Math.max(Math.floor(topLeft.y), 0);
    const right = Math.min(Math.ceil(bottomRight.x), map.width);
    const bottom = Math.min(Math.ceil(bottomRight.y), map.height);
    const width = right - left;
    const height = bottom - top;

    if (width <= 0 || height <= 0) {
      return;
    }

    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.drawImage(map, left, top, width, height, left, top, width, height);
    context.restore();
  }

  public drawRegionNormalMap(
    context: CanvasRenderingContext2D,
    region: WaterRegion
  ) {
    this.drawRegionMap(context, region, this.normalMapCanvas);
  }

  public drawRegionSpecularMap(
    context: CanvasRenderingContext2D,
    region: WaterRegion
  ) {
    this.drawRegionMap(context, region, this.specularMapCanvas);
  }
}
