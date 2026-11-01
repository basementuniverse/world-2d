import { clamp, smoothstep } from '@basementuniverse/utils';
import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { WaterGrid, WaterRegion, WaterRegionOptions } from '../../water';
import { addColour, addImage, getImage } from '../gui';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';

type WaterSetting = {
  property: keyof WaterRegionOptions;
  min: number;
  max: number;
  step: number;
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
 */
export class WaterActor extends EditorActor {
  private static readonly DEPTH_CELL_SIZE = 8;
  private static readonly MAX_DEPTH_CELLS = 128;

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

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    folder.add(this, 'depth', 0, 1, 0.01);
    folder.add(this, 'shoreWidth', 0, 128, 1);
    folder.add(this.flow, 'x', -1, 1, 0.01).name('flow x');
    folder.add(this.flow, 'y', -1, 1, 0.01).name('flow y');
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

  /**
   * Get the depth of the water, shelving up to nothing at the shore
   */
  private depthGrid(): number | WaterGrid<number> {
    const { size, depth, shoreWidth } = this;
    if (shoreWidth <= 0) {
      return depth;
    }

    const cells = (length: number) =>
      clamp(
        Math.ceil(length / WaterActor.DEPTH_CELL_SIZE),
        1,
        WaterActor.MAX_DEPTH_CELLS
      );
    const columns = cells(size.x);
    const rows = cells(size.y);

    return Array.from({ length: rows }, (_, row) =>
      Array.from({ length: columns }, (_, column) => {
        const x = ((column + 0.5) / columns) * size.x;
        const y = ((row + 0.5) / rows) * size.y;
        const shore = Math.min(x, size.x - x, y, size.y - y);

        return smoothstep(0, depth, clamp(shore / shoreWidth, 0, 1));
      })
    );
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
      flow: this.flow,
    })!;

    // Anything that hasn't been set is using the region's default value
    SETTING_NAMES.forEach(name => {
      this.settings[name] = (this.object as any)[name];
    });
  }

  protected sync() {
    const { size, depth, shoreWidth, flow } = this;

    // The ripple simulation can't change size
    this.whenChanged(
      'region',
      { size, maskName: this.maskName, maskRepeat: this.maskRepeat },
      () => this.build()
    );
    this.whenChanged('depth', { size, depth, shoreWidth }, () =>
      this.object.setDepth(this.depthGrid())
    );
    this.whenChanged('flow', flow, () => this.object.setFlow(flow));

    this.object.moveTo(this.position);
    Object.assign(this.object, this.settings, {
      reflection:
        this.settings.reflection * this.scene.reflectionStrength.water,
    });
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      depth: this.depth,
      shoreWidth: this.shoreWidth,
      flow: this.flow,
      maskName: this.maskName,
      maskRepeat: this.maskRepeat,
      settings: this.settings,
    };
  }

  public static deserialise(scene: EditorScene, data: any): WaterActor {
    return new WaterActor(scene, data);
  }
}
