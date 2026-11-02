import { clamp, lerp, smoothstep } from '@basementuniverse/utils';
import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { WaterGrid, WaterRegion, WaterRegionOptions } from '../../water';
import { addColour, addImage, getImage } from '../gui';
import { EditorScene } from '../scenes/EditorScene';
import { lerpVec, resampleGrid } from '../utilities';
import { EditorActor } from './EditorActor';

type WaterSetting = {
  property: keyof WaterRegionOptions;
  min: number;
  max: number;
  step: number;
};

/**
 * A cell that's underneath a brush, the weight is highest in the middle of the
 * brush and goes down to 0 at the edge
 */
type BrushCell = {
  x: number;
  y: number;
  weight: number;
};

/**
 * The options for a region that can be changed while the scene is running, in
 * the GUI folders that they appear in
 */
const SETTINGS: Record<string, WaterSetting[]> = {
  Surface: [
    { property: 'opacity', min: 0, max: 1, step: 0.01 },
    { property: 'shoreBlend', min: 0, max: 1, step: 0.01 },
    { property: 'refraction', min: 0, max: 12, step: 0.1 },
    { property: 'reflection', min: 0, max: 1, step: 0.01 },
    { property: 'reflectionDistortion', min: 0, max: 12, step: 0.1 },
    { property: 'specular', min: 0, max: 1, step: 0.01 },
    { property: 'surfaceShading', min: 0, max: 1, step: 0.01 },
    { property: 'pixelSize', min: 0, max: 4, step: 1 },
  ],
  Waves: [
    { property: 'waveSize', min: 16, max: 512, step: 1 },
    { property: 'waveSpeed', min: 0, max: 32, step: 0.5 },
    { property: 'waveStrength', min: 0, max: 1, step: 0.01 },
  ],
  'Ripples and rain': [
    { property: 'rippleStrength', min: 0, max: 8, step: 0.1 },
    { property: 'rippleSpeed', min: 0, max: 200, step: 1 },
    { property: 'rippleDamping', min: 0.8, max: 1, step: 0.001 },
    { property: 'rain', min: 0, max: 60, step: 1 },
    { property: 'rainStrength', min: 0, max: 2, step: 0.01 },
  ],
};

const COLOUR_SETTINGS = ['colour', 'deepColour'];

const SETTING_NAMES: string[] = [
  ...COLOUR_SETTINGS,
  'flowSpeed',
  ...Object.values(SETTINGS)
    .flat()
    .map(({ property }) => property),
];

/**
 * An area of water, depth and flow are the same everywhere except for the
 * shore, where the depth goes down to nothing at the edges of the region
 *
 * Depth and flow can also be painted. This replaces the values above with a
 * grid, and they're used again if the painted grid is cleared
 */
export class WaterActor extends EditorActor {
  /**
   * Painted values are saved with this many decimal places
   */
  private static readonly SAVED_PRECISION = 3;

  public readonly type = 'Water';
  public object: WaterRegion;

  protected readonly debugColour = '#3bd';
  protected readonly debugHoverColour = '#6df';
  protected readonly minSize = vec2(16, 16);
  protected readonly maxSize = vec2(1024, 1024);

  public size: vec2 = vec2(256, 192);
  public depth: number = 1;
  public shoreWidth: number = 32;
  public flow: vec2 = vec2();

  /**
   * The painted depth and flow, these keep the size that they were painted at
   * so that resizing the water doesn't lose any detail
   */
  public depthMap: WaterGrid<number> | null = null;
  public flowMap: WaterGrid<vec2> | null = null;

  public maskName: string = '';
  public maskRepeat: boolean = false;
  public settings: Record<string, any> = {};

  public constructor(scene: EditorScene, data: Partial<WaterActor> = {}) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.sync();
  }

  /**
   * The number of columns and rows in this water's grids
   */
  private get gridSize(): vec2 {
    return this.scene.world.water!.gridSize(this.size);
  }

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    const button = (name: string, click: () => void) =>
      folder.add({ click }, 'click').name(name);

    if (this.depthMap) {
      button('Clear painted depth', () => this.clearDepth());
    } else {
      folder.add(this, 'depth', 0, 1, 0.01);
      folder.add(this, 'shoreWidth', 0, 128, 1);
    }

    if (this.flowMap) {
      button('Clear painted flow', () => this.clearFlow());
    } else {
      folder.add(this.flow, 'x', -1, 1, 0.01).name('flow x');
      folder.add(this.flow, 'y', -1, 1, 0.01).name('flow y');
    }

    folder.add(this.settings, 'flowSpeed', 0, 60, 1);
    COLOUR_SETTINGS.forEach(property =>
      addColour(folder, this.settings, property)
    );
    addImage(folder, this, 'maskName', '-mask');
    folder.add(this, 'maskRepeat');

    for (const [name, settings] of Object.entries(SETTINGS)) {
      const section = folder.addFolder(name);

      settings.forEach(({ property, min, max, step }) =>
        section.add(this.settings, property, min, max, step)
      );
      section.open();
    }
  }

  private clearDepth() {
    if (window.confirm('Remove the painted depth from this water?')) {
      this.depthMap = null;
      this.scene.refreshSelected();
    }
  }

  private clearFlow() {
    if (window.confirm('Remove the painted flow from this water?')) {
      this.flowMap = null;
      this.scene.refreshSelected();
    }
  }

  /**
   * Get the depth of the water, if it hasn't been painted then this shelves up
   * to nothing at the shore
   */
  private depthGrid(): WaterGrid<number> {
    const { size, depth, shoreWidth, depthMap, gridSize } = this;
    if (depthMap) {
      return resampleGrid(depthMap, gridSize, lerp);
    }

    return Array.from({ length: gridSize.y }, (_, row) =>
      Array.from({ length: gridSize.x }, (_, column) => {
        const x = ((column + 0.5) / gridSize.x) * size.x;
        const y = ((row + 0.5) / gridSize.y) * size.y;
        const shore = Math.min(x, size.x - x, y, size.y - y);

        return shoreWidth > 0
          ? smoothstep(0, depth, clamp(shore / shoreWidth, 0, 1))
          : depth;
      })
    );
  }

  /**
   * Get the flow of the water
   */
  private flowGrid(): WaterGrid<vec2> {
    const { flow, flowMap, gridSize } = this;
    if (flowMap) {
      return resampleGrid(flowMap, gridSize, lerpVec);
    }

    return Array.from({ length: gridSize.y }, () =>
      Array.from({ length: gridSize.x }, () => vec2.cpy(flow))
    );
  }

  /**
   * Find the cells that a round brush reaches
   */
  private brushCells(brush: vec2, radius: number): BrushCell[] {
    const { x: columns, y: rows } = this.gridSize;
    const cell = vec2(this.size.x / columns, this.size.y / rows);
    const center = vec2.sub(brush, this.position);

    const firstX = Math.floor((center.x - radius) / cell.x);
    const lastX = Math.ceil((center.x + radius) / cell.x);
    const firstY = Math.floor((center.y - radius) / cell.y);
    const lastY = Math.ceil((center.y + radius) / cell.y);

    const cells: BrushCell[] = [];

    for (let y = Math.max(firstY, 0); y < Math.min(lastY, rows); y++) {
      for (let x = Math.max(firstX, 0); x < Math.min(lastX, columns); x++) {
        const distance = vec2.len(
          vec2.sub(vec2((x + 0.5) * cell.x, (y + 0.5) * cell.y), center)
        );

        if (distance < radius) {
          cells.push({ x, y, weight: smoothstep(1, 0, distance / radius) });
        }
      }
    }

    return cells;
  }

  /**
   * Add to the depth underneath a brush, or subtract from it if the amount is
   * negative. The first time this water is painted the map starts with the
   * depth that the water already has
   */
  public paintDepth(brushes: vec2[], radius: number, amount: number) {
    const cells = brushes.flatMap(brush => this.brushCells(brush, radius));
    if (cells.length === 0) {
      return;
    }

    const firstPaint = this.depthMap === null;
    const map = (this.depthMap = this.depthGrid());

    cells.forEach(({ x, y, weight }) => {
      map[y][x] = clamp(map[y][x] + amount * weight, 0, 1);
    });

    this.object.setDepth(map);
    if (firstPaint) {
      this.scene.refreshSelected();
    }
  }

  /**
   * Blend the flow underneath a brush towards a flow vector, `strength` is how
   * much of the existing flow gets replaced in the middle of the brush. The
   * first time this water is painted the map starts with the flow that the
   * water already has
   */
  public paintFlow(
    brushes: vec2[],
    radius: number,
    flow: vec2,
    strength: number
  ) {
    const cells = brushes.flatMap(brush => this.brushCells(brush, radius));
    if (cells.length === 0) {
      return;
    }

    const firstPaint = this.flowMap === null;
    const map = (this.flowMap = this.flowGrid());

    cells.forEach(({ x, y, weight }) => {
      map[y][x] = lerpVec(map[y][x], flow, weight * strength);
    });

    this.object.setFlow(map);
    if (firstPaint) {
      this.scene.refreshSelected();
    }
  }

  private build() {
    this.object?.remove();
    this.object = this.scene.world.addWater({
      ...this.settings,
      position: this.position,
      size: this.size,
      mask: getImage(this.maskName),
      repeat: this.maskRepeat,
      depth: this.depthGrid(),
      flow: this.flowGrid(),
    })!;

    // Anything that hasn't been set is using the region's default value
    SETTING_NAMES.forEach(name => {
      this.settings[name] = (this.object as any)[name];
    });
  }

  protected sync() {
    const { size, depth, shoreWidth, flow, gridSize } = this;
    const depthPainted = this.depthMap !== null;
    const flowPainted = this.flowMap !== null;

    // The ripple simulation can't change size
    this.whenChanged(
      'region',
      { size, maskName: this.maskName, maskRepeat: this.maskRepeat },
      () => this.build()
    );
    this.whenChanged(
      'depth',
      { size, gridSize, depth, shoreWidth, depthPainted },
      () => this.object.setDepth(this.depthGrid())
    );
    this.whenChanged('flow', { gridSize, flow, flowPainted }, () =>
      this.object.setFlow(this.flowGrid())
    );

    this.object.moveTo(this.position);
    Object.assign(this.object, this.settings, {
      reflection:
        this.settings.reflection * this.scene.reflectionStrength.water,
    });
  }

  public serialise(): any {
    const round = (value: number) =>
      +value.toFixed(WaterActor.SAVED_PRECISION);

    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      depth: this.depth,
      shoreWidth: this.shoreWidth,
      flow: this.flow,
      depthMap: this.depthMap?.map(row => row.map(round)),
      flowMap: this.flowMap?.map(row =>
        row.map(value => vec2.map(value, round))
      ),
      maskName: this.maskName,
      maskRepeat: this.maskRepeat,
      settings: this.settings,
    };
  }

  public static deserialise(scene: EditorScene, data: any): WaterActor {
    return new WaterActor(scene, data);
  }
}
