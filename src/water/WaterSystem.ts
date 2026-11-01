import { vec2 } from '@basementuniverse/vec';
import {
  Frame,
  GlContext,
  intervalToRectangle,
  maxVec,
  minVec,
  rectanglesIntersect,
  SceneImage,
} from '../core';
import { RippleOptions } from './RippleField';
import { WaterOutput, WaterPass } from './WaterPass';
import {
  WaterRegion,
  WaterRegionOptions,
  WaterSample,
} from './WaterRegion';

export type WaterSystemOptions = {
  /**
   * The resolution of the water, compared to the resolution of the screen
   *
   * This is the most effective way of making water faster. If `pixelSize` is
   * being used then neighbouring pixels are already the same, so this won't
   * lose any detail as long as there's still at least one pixel for each
   * `pixelSize`, for example 0.5 works well for a `pixelSize` of 1 and a camera
   * with a scale of 2
   */
  resolutionScale: number;

  /**
   * The resolution of the normal map that's given to the lighting system,
   * compared to the resolution of the screen. Lower values are faster
   */
  lightingMapScale: number;

  /**
   * The resolution of the reflections in the water, compared to the resolution
   * of the screen. Waves hide most of the difference and lower values are
   * faster
   */
  reflectionMapScale: number;
};

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
  private static readonly DEFAULT_OPTIONS: WaterSystemOptions = {
    resolutionScale: 1,
    lightingMapScale: 0.5,
    reflectionMapScale: 0.5,
  };

  private static createContext(): CanvasRenderingContext2D {
    return document.createElement('canvas').getContext('2d')!;
  }

  public options: WaterSystemOptions;

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

  private reflectionMapContext = WaterSystem.createContext();
  private sceneContext = WaterSystem.createContext();

  /**
   * What the specular map was drawn from, so that we only draw it again if
   * something has changed
   */
  private specularMapKey: string = '';

  /**
   * `glContext` lets the water system share a WebGL context with other systems,
   * otherwise it will create its own
   */
  public constructor(
    options?: Partial<WaterSystemOptions>,
    glContext?: GlContext
  ) {
    this.options = { ...WaterSystem.DEFAULT_OPTIONS, ...options };
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

    const { resolutionScale: scale, reflectionMapScale } = this.options;

    pass.render(
      {
        ...frame,
        reflectionMap:
          frame.reflectionMap &&
          this.scaledCopy(
            this.reflectionMapContext,
            frame.reflectionMap,
            frame,
            reflectionMapScale
          ),
      },
      regions,
      WaterOutput.Colour,
      this.time,
      scale,

      // Water with a low resolution doesn't need any more detail than this
      this.scaledCopy(this.sceneContext, frame.context.canvas, frame, scale)
    );

    this.copyWater(pass, frame, regions, scale);
  }

  /**
   * Copy the water onto the frame's context, the rest of the output of the pass
   * is empty so we only need to copy the area that the water covers
   */
  private copyWater(
    pass: WaterPass,
    { context, camera, screen }: Frame,
    regions: WaterRegion[],
    scale: number
  ) {
    const corners = regions.flatMap(({ position, size }) => [
      camera.worldToScreen(position),
      camera.worldToScreen(vec2.add(position, size)),
    ]);
    const left = Math.max(Math.floor(minVec(...corners).x), 0);
    const top = Math.max(Math.floor(minVec(...corners).y), 0);
    const right = Math.min(Math.ceil(maxVec(...corners).x), screen.x);
    const bottom = Math.min(Math.ceil(maxVec(...corners).y), screen.y);

    const outputWidth = Math.ceil(screen.x * scale);
    const outputHeight = Math.ceil(screen.y * scale);
    const scaleX = outputWidth / screen.x;
    const scaleY = outputHeight / screen.y;

    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.drawImage(
      pass.canvas,
      left * scaleX,
      screen.y - outputHeight + top * scaleY,
      (right - left) * scaleX,
      (bottom - top) * scaleY,
      left,
      top,
      right - left,
      bottom - top
    );
    context.restore();
  }

  /**
   * Make a smaller copy of a screen-sized image, uploading these is much faster
   */
  private scaledCopy(
    context: CanvasRenderingContext2D,
    image: SceneImage,
    frame: Frame,
    scale: number
  ): SceneImage {
    if (scale === 1) {
      return image;
    }

    const { canvas } = context;
    const width = Math.ceil(frame.screen.x * scale);
    const height = Math.ceil(frame.screen.y * scale);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    } else {
      context.clearRect(0, 0, width, height);
    }

    context.imageSmoothingEnabled = frame.context.imageSmoothingEnabled;
    context.drawImage(image, 0, 0, width, height);

    return canvas;
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

    const { lightingMapScale } = this.options;

    pass.render(
      frame,
      regions,
      WaterOutput.Normal,
      this.time,
      lightingMapScale
    );
    this.copyLightingMap(this.normalMapContext, pass, frame, lightingMapScale);

    // The specular map is the same every frame unless something has moved
    const key = JSON.stringify([
      frame.camera.bounds,
      frame.screen,
      regions.map(region => [
        region.position,
        region.size,
        region.specular,
        region.shoreBlend,
        region.depthPixels.version,
        region.maskVersion,
      ]),
    ]);

    if (key !== this.specularMapKey) {
      this.specularMapKey = key;

      pass.render(frame, regions, WaterOutput.Specular, this.time);
      this.copyLightingMap(this.specularMapContext, pass, frame, 1);
    }
  }

  /**
   * Copy the output of a pass that used part of the canvas
   */
  private copyLightingMap(
    context: CanvasRenderingContext2D,
    pass: WaterPass,
    { screen }: Frame,
    scale: number
  ) {
    const { canvas } = context;
    const width = Math.ceil(screen.x * scale);
    const height = Math.ceil(screen.y * scale);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    } else {
      context.clearRect(0, 0, width, height);
    }

    context.drawImage(
      pass.canvas,
      0,
      screen.y - height,
      width,
      height,
      0,
      0,
      width,
      height
    );
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
    const right = Math.min(Math.ceil(bottomRight.x), frame.screen.x);
    const bottom = Math.min(Math.ceil(bottomRight.y), frame.screen.y);
    const width = right - left;
    const height = bottom - top;

    if (width <= 0 || height <= 0) {
      return;
    }

    // Both of these can have a lower resolution than the screen
    const sourceScale = map.width / frame.screen.x;
    const targetScale = context.canvas.width / frame.screen.x;

    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.drawImage(
      map,
      left * sourceScale,
      top * sourceScale,
      width * sourceScale,
      height * sourceScale,
      left * targetScale,
      top * targetScale,
      width * targetScale,
      height * targetScale
    );
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
