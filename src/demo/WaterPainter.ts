import Camera from '@basementuniverse/camera';
import InputManager from '@basementuniverse/input-manager';
import { vec2 } from '@basementuniverse/vec';
import { colourToString, lerpColour } from '../core';
import { WaterGrid, WaterRegion, WaterSystem } from '../water';
import type { WaterActor } from './actors/WaterActor';
import { lerpVec } from './utilities';

enum PaintMode {
  Off = 'off',
  Depth = 'depth',
  Flow = 'flow',
}

enum DepthTool {
  Raise = 'raise',
  Lower = 'lower',
}

type Stroke = {
  /**
   * Where the mouse was the last time we painted, in screen pixels
   */
  mouse: vec2;

  /**
   * When we last painted, in seconds
   */
  time: number;

  /**
   * The flow vector we're painting, this is null until the mouse has moved
   */
  flow: vec2 | null;
};

/**
 * Paints depth and flow onto the water, and shows what has been painted
 *
 * While a paint mode is on, dragging paints onto all of the water that's
 * underneath the brush instead of moving the selected element
 */
export class WaterPainter {
  /**
   * The brush is stamped at least this often along a stroke, as a fraction of
   * its radius, so that moving the mouse quickly doesn't leave gaps
   */
  private static readonly STAMP_SPACING = 0.5;

  /**
   * How much of the latest mouse movement goes into the flow vector each time
   * the mouse moves, this hides any jitter in the movement of the mouse
   */
  private static readonly FLOW_SMOOTHING = 0.4;

  /**
   * The length of an arrow with a flow of 1, as a fraction of the size of a cell
   */
  private static readonly ARROW_LENGTH = 0.9;

  /**
   * Arrowheads are this long compared to the rest of the arrow, and this far
   * away from it in radians
   */
  private static readonly ARROWHEAD_LENGTH = 0.4;
  private static readonly ARROWHEAD_ANGLE = 0.5;

  private static readonly FLOW_BACKGROUND = 'rgba(0, 0, 0, 0.3)';
  private static readonly OUTLINE_COLOUR = 'rgba(0, 0, 0, 0.8)';
  private static readonly LINE_COLOUR = '#fff';

  /**
   * The colour of each depth, from the shore to the deepest water
   */
  private static readonly DEPTH_COLOURS: string[] = (() => {
    const shore = { r: 247, g: 220, b: 111, a: 0.75 };
    const middle = { r: 46, g: 170, b: 130, a: 0.75 };
    const deep = { r: 24, g: 44, b: 130, a: 0.75 };

    return Array.from({ length: 256 }, (_, i) =>
      colourToString(
        i < 128
          ? lerpColour(shore, middle, i / 127)
          : lerpColour(middle, deep, (i - 128) / 127)
      )
    );
  })();

  public mode: PaintMode = PaintMode.Off;
  public depthTool: DepthTool = DepthTool.Raise;

  /**
   * The size of the brush in world units
   */
  public brushRadius: number = 32;

  /**
   * How much the depth changes each second, and how much of the existing flow
   * gets replaced each time the brush is stamped
   */
  public brushStrength: number = 0.5;

  /**
   * How quickly the mouse has to move to paint a flow of 1, in screen pixels
   * per second
   */
  public flowMouseSpeed: number = 1000;

  private water: WaterSystem;
  private brush: vec2 = vec2();
  private stroke: Stroke | null = null;

  public constructor(water: WaterSystem) {
    this.water = water;
  }

  public get active(): boolean {
    return this.mode !== PaintMode.Off;
  }

  public createControls(folder: dat.GUI) {
    folder
      .add(this, 'mode', {
        Off: PaintMode.Off,
        Depth: PaintMode.Depth,
        Flow: PaintMode.Flow,
      })
      .name('Paint mode');
    folder
      .add(this, 'depthTool', {
        'Raise (deeper)': DepthTool.Raise,
        'Lower (shallower)': DepthTool.Lower,
      })
      .name('Depth tool');
    folder.add(this, 'brushRadius', 4, 128, 1).name('Brush radius');
    folder.add(this, 'brushStrength', 0.05, 1, 0.01).name('Brush strength');
    folder
      .add(this, 'flowMouseSpeed', 100, 4000, 10)
      .name('Mouse speed for full flow');
    folder.open();
  }

  /**
   * The size of the brush, a brush that's smaller than a cell might not reach
   * the center of any cells
   */
  private get radius(): number {
    return Math.max(this.brushRadius, this.water.options.gridCellSize);
  }

  /**
   * Get the positions to stamp the brush between 2 points
   */
  private stamps(from: vec2, to: vec2, radius: number): vec2[] {
    const distance = vec2.len(vec2.sub(to, from));
    const count = Math.max(
      Math.ceil(distance / (radius * WaterPainter.STAMP_SPACING)),
      1
    );

    return Array.from({ length: count }, (_, i) =>
      lerpVec(from, to, (i + 1) / count)
    );
  }

  private paintDepth(
    actors: WaterActor[],
    stamps: vec2[],
    radius: number,
    elapsed: number
  ) {
    const direction = this.depthTool === DepthTool.Raise ? 1 : -1;
    const amount = (direction * this.brushStrength * elapsed) / stamps.length;

    actors.forEach(actor => actor.paintDepth(stamps, radius, amount));
  }

  private paintFlow(
    actors: WaterActor[],
    stamps: vec2[],
    radius: number,
    moved: vec2,
    elapsed: number,
    stroke: Stroke
  ) {
    const speed = vec2.len(moved) / elapsed / this.flowMouseSpeed;
    const flow = vec2.mul(vec2.nor(moved), Math.min(speed, 1));

    stroke.flow = stroke.flow
      ? lerpVec(stroke.flow, flow, WaterPainter.FLOW_SMOOTHING)
      : flow;

    actors.forEach(actor =>
      actor.paintFlow(stamps, radius, stroke.flow!, this.brushStrength)
    );
  }

  public update(camera: Camera, actors: WaterActor[]) {
    const mouse = vec2.cpy(InputManager.mousePosition);

    this.brush = camera.screenToWorld(mouse);

    if (!InputManager.mouseDown(InputManager.MouseButton.Left)) {
      this.stroke = null;
      return;
    }

    // Frames don't always line up with mouse movement and the time that's given
    // to scenes is limited, so strokes need to measure the real time
    const time = performance.now() / 1000;
    const stroke = (this.stroke ??= { mouse, time, flow: null });
    const moved = vec2.sub(mouse, stroke.mouse);
    const elapsed = time - stroke.time;

    // Flow is painted by moving the mouse, and depth is painted by holding it
    if (this.mode === PaintMode.Flow && vec2.len(moved) === 0) {
      return;
    }

    const { radius } = this;
    const stamps = this.stamps(
      camera.screenToWorld(stroke.mouse),
      this.brush,
      radius
    );

    if (this.mode === PaintMode.Depth) {
      this.paintDepth(actors, stamps, radius, elapsed);
    } else {
      this.paintFlow(actors, stamps, radius, moved, elapsed, stroke);
    }

    stroke.mouse = mouse;
    stroke.time = time;
  }

  /**
   * Call a function for each cell of a grid that can be seen by the camera
   */
  private forEachVisibleCell<T>(
    { position, size }: WaterRegion,
    grid: WaterGrid<T>,
    { bounds }: Camera,
    callback: (value: T, cellPosition: vec2, cellSize: vec2) => void
  ) {
    const rows = grid.length;
    const columns = grid[0].length;
    const cellSize = vec2(size.x / columns, size.y / rows);

    const firstX = Math.floor((bounds.left - position.x) / cellSize.x);
    const lastX = Math.ceil((bounds.right - position.x) / cellSize.x);
    const firstY = Math.floor((bounds.top - position.y) / cellSize.y);
    const lastY = Math.ceil((bounds.bottom - position.y) / cellSize.y);

    for (let y = Math.max(firstY, 0); y < Math.min(lastY, rows); y++) {
      for (let x = Math.max(firstX, 0); x < Math.min(lastX, columns); x++) {
        callback(
          grid[y][x],
          vec2(position.x + x * cellSize.x, position.y + y * cellSize.y),
          cellSize
        );
      }
    }
  }

  /**
   * Show the depth as a grid of coloured cells
   */
  private drawDepth(
    context: CanvasRenderingContext2D,
    camera: Camera,
    region: WaterRegion
  ) {
    const gap = 0.5 / camera.scale;

    this.forEachVisibleCell(
      region,
      region.depthGrid,
      camera,
      (depth, { x, y }, size) => {
        context.fillStyle =
          WaterPainter.DEPTH_COLOURS[Math.round(depth * 255)];
        context.fillRect(x + gap, y + gap, size.x - gap * 2, size.y - gap * 2);
      }
    );
  }

  /**
   * Add an arrow to the current path, or a dot if the arrow has no length
   */
  private addArrow(
    context: CanvasRenderingContext2D,
    center: vec2,
    arrow: vec2,
    dotSize: number
  ) {
    const length = vec2.len(arrow);

    if (length < dotSize) {
      context.moveTo(center.x - dotSize / 2, center.y);
      context.lineTo(center.x + dotSize / 2, center.y);
      return;
    }

    const tail = vec2.sub(center, vec2.div(arrow, 2));
    const tip = vec2.add(center, vec2.div(arrow, 2));
    const head = vec2.mul(arrow, -WaterPainter.ARROWHEAD_LENGTH);
    const left = vec2.add(tip, vec2.rot(head, WaterPainter.ARROWHEAD_ANGLE));
    const right = vec2.add(tip, vec2.rot(head, -WaterPainter.ARROWHEAD_ANGLE));

    context.moveTo(tail.x, tail.y);
    context.lineTo(tip.x, tip.y);
    context.moveTo(left.x, left.y);
    context.lineTo(tip.x, tip.y);
    context.lineTo(right.x, right.y);
  }

  /**
   * Show the flow as a vector field with an arrow for each cell
   */
  private drawFlow(
    context: CanvasRenderingContext2D,
    camera: Camera,
    region: WaterRegion
  ) {
    const { position, size } = region;

    context.fillStyle = WaterPainter.FLOW_BACKGROUND;
    context.fillRect(position.x, position.y, size.x, size.y);

    context.beginPath();
    this.forEachVisibleCell(
      region,
      region.flowGrid,
      camera,
      (flow, cellPosition, cellSize) =>
        this.addArrow(
          context,
          vec2.add(cellPosition, vec2.div(cellSize, 2)),
          vec2.mul(
            flow,
            Math.min(cellSize.x, cellSize.y) * WaterPainter.ARROW_LENGTH
          ),
          1 / camera.scale
        )
    );
    this.strokeOutlined(context, camera);
  }

  /**
   * Draw the current path so that it can be seen on top of anything
   */
  private strokeOutlined(context: CanvasRenderingContext2D, camera: Camera) {
    context.lineCap = 'round';
    context.strokeStyle = WaterPainter.OUTLINE_COLOUR;
    context.lineWidth = 3 / camera.scale;
    context.stroke();
    context.strokeStyle = WaterPainter.LINE_COLOUR;
    context.lineWidth = 1 / camera.scale;
    context.stroke();
  }

  /**
   * Draw the depth or flow of the water and the brush, the context should be
   * using the camera's transforms
   */
  public draw(
    context: CanvasRenderingContext2D,
    camera: Camera,
    actors: WaterActor[]
  ) {
    if (!this.active) {
      return;
    }

    context.save();

    actors.forEach(({ object }) =>
      this.mode === PaintMode.Depth
        ? this.drawDepth(context, camera, object)
        : this.drawFlow(context, camera, object)
    );

    context.beginPath();
    context.arc(this.brush.x, this.brush.y, this.radius, 0, Math.PI * 2);
    this.strokeOutlined(context, camera);

    context.restore();
  }
}
