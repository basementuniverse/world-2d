import {
  Frame,
  intervalToRectangle,
  Rectangle,
  rectanglesIntersect,
} from '../core';
import {
  FloorReflectionReceiver,
  FloorReflectionReceiverOptions,
  ReflectionReceiver,
  WallReflectionReceiver,
  WallReflectionReceiverOptions,
} from './ReflectionReceiver';
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
export class ReflectionSystem {
  private static createContext(): CanvasRenderingContext2D {
    return document.createElement('canvas').getContext('2d')!;
  }

  private sources: ReflectionSource[] = [];
  private floorReceivers: FloorReflectionReceiver[] = [];
  private wallReceivers: WallReflectionReceiver[] = [];

  /**
   * The screen-sized canvases that reflections are drawn into
   *
   * `floorSourcesCanvas` shows every source reflected in the floor, as if the
   * whole floor was reflective
   */
  private floorSourcesContext = ReflectionSystem.createContext();
  public floorSourcesCanvas = this.floorSourcesContext.canvas;

  private floorContext = ReflectionSystem.createContext();
  private wallContext = ReflectionSystem.createContext();

  private frame: Frame | null = null;
  private floorSourcesReady = false;

  /**
   * Add something that appears in reflections
   */
  public addSource(options: ReflectionSourceOptions): ReflectionSource {
    const source = new ReflectionSource(this, options);
    this.sources.push(source);

    return source;
  }

  /**
   * Add a reflective part of the floor
   */
  public addFloorReceiver(
    options: FloorReflectionReceiverOptions
  ): FloorReflectionReceiver {
    const receiver = new FloorReflectionReceiver(this, options);
    this.floorReceivers.push(receiver);

    return receiver;
  }

  /**
   * Add a reflective part of a wall
   */
  public addWallReceiver(
    options: WallReflectionReceiverOptions
  ): WallReflectionReceiver {
    const receiver = new WallReflectionReceiver(this, options);
    this.wallReceivers.push(receiver);

    return receiver;
  }

  /**
   * Remove a source or receiver from the reflection system
   */
  public remove(object: ReflectionSource | ReflectionReceiver) {
    this.sources = this.sources.filter(o => o !== object);
    this.floorReceivers = this.floorReceivers.filter(o => o !== object);
    this.wallReceivers = this.wallReceivers.filter(o => o !== object);
  }

  /**
   * Get ready to draw reflections for a frame
   */
  public prepare(frame: Frame) {
    this.frame = frame;
    this.floorSourcesReady = false;
  }

  /**
   * Make sure `floorSourcesCanvas` is up to date for this frame
   */
  public drawFloorSources(): HTMLCanvasElement {
    const { frame } = this;
    if (!frame || this.floorSourcesReady) {
      return this.floorSourcesCanvas;
    }

    const visible = this.visibleArea(frame);
    const sources = this.sortedSources(
      this.sources.filter(
        source =>
          source.floor && rectanglesIntersect(source.floorBounds, visible)
      )
    );

    this.resetContext(this.floorSourcesContext, frame);
    sources.forEach(source => source.drawInFloor(this.floorSourcesContext));
    this.floorSourcesReady = true;

    return this.floorSourcesCanvas;
  }

  /**
   * Make sure a screen-sized context matches the frame and clear it, ready for
   * drawing in world coordinates
   */
  private resetContext(context: CanvasRenderingContext2D, frame: Frame) {
    const { canvas } = context;
    if (canvas.width !== frame.screen.x || canvas.height !== frame.screen.y) {
      canvas.width = frame.screen.x;
      canvas.height = frame.screen.y;
    } else {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    context.imageSmoothingEnabled = frame.context.imageSmoothingEnabled;
    frame.camera.setTransforms(context);
  }

  private visibleArea({ camera }: Frame): Rectangle {
    return intervalToRectangle(camera.bounds);
  }

  /**
   * Get sources in the order that they should be drawn, sources with feet
   * further down the screen are drawn last
   */
  private sortedSources(sources: ReflectionSource[]): ReflectionSource[] {
    return sources
      .map(source => ({ source, foot: source.foot }))
      .sort((a, b) => a.foot - b.foot)
      .map(({ source }) => source);
  }

  /**
   * Draw reflections onto the floor, this should be called after drawing the
   * ground and before drawing anything that stands on it
   */
  public drawFloor() {
    const { frame } = this;
    if (!frame) {
      return;
    }

    const visible = this.visibleArea(frame);
    const receivers = this.floorReceivers.filter(receiver =>
      rectanglesIntersect(receiver, visible)
    );
    if (receivers.length === 0) {
      return;
    }

    this.drawFloorSources();

    // Start with the shape of the receivers and keep the sources inside it,
    // this way sources don't show through each other when strength is below 1
    const context = this.floorContext;
    this.resetContext(context, frame);
    receivers.forEach(receiver => {
      context.globalAlpha = receiver.strength;
      receiver.drawMask(context);
    });
    context.globalAlpha = 1;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.globalCompositeOperation = 'source-in';
    context.drawImage(this.floorSourcesCanvas, 0, 0);
    context.globalCompositeOperation = 'source-over';

    frame.context.save();
    frame.context.setTransform(1, 0, 0, 1, 0, 0);
    frame.context.drawImage(context.canvas, 0, 0);
    frame.context.restore();
  }

  /**
   * Draw the reflections in a wall receiver
   */
  public drawWallReceiver(
    receiver: WallReflectionReceiver,
    target: CanvasRenderingContext2D
  ) {
    const { frame } = this;
    if (!frame || !rectanglesIntersect(receiver, this.visibleArea(frame))) {
      return;
    }

    // Only things in front of the wall can be seen in it
    const sources = this.sortedSources(
      this.sources.filter(
        source =>
          source.wall &&
          source.foot > receiver.foot &&
          rectanglesIntersect(source.wallBounds(receiver.foot), receiver)
      )
    );
    if (sources.length === 0) {
      return;
    }

    const context = this.wallContext;
    this.resetContext(context, frame);

    // The closest thing to the wall is also the closest thing to us when we
    // look into the reflection, so sources are drawn in reverse order
    sources
      .reverse()
      .forEach(source => source.drawInWall(context, receiver.foot));

    context.globalCompositeOperation = 'destination-in';
    receiver.drawMask(context);
    context.globalCompositeOperation = 'source-over';

    target.save();
    target.setTransform(1, 0, 0, 1, 0, 0);
    target.globalAlpha = receiver.strength;
    target.drawImage(context.canvas, 0, 0);
    target.restore();
  }
}
