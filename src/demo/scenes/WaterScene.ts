import Camera from '@basementuniverse/camera';
import ContentManager from '@basementuniverse/content-manager';
import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { Scene } from '@basementuniverse/scene-manager';
import { vec2 } from '@basementuniverse/vec';
import { LightingSystem } from '../../lighting';
import { ReflectionSystem } from '../../reflections';
import { WaterGrid, WaterRegion, WaterSystem } from '../../water';
import { World } from '../../world';
import Game from '../Game';
import { Hero } from '../Hero';

const TILE_SIZE = 32;

/**
 * The size of the map, and the part of it that's a lake, in tiles
 */
const MAP_SIZE = vec2(14, 10);
const LAKE = { x: 2, y: 2, width: 12, height: 6 };

/**
 * Depth and flow are stored at this many cells per tile
 */
const GRID_SCALE = 2;

/**
 * A lake with a current running through it
 *
 * The north, west, and south shores are a hard edge that follows the terrain,
 * and the east shore is a beach where the water fades out
 */
export class WaterScene extends Scene {
  private static readonly CAMERA_SCALE: number = 2;
  private static readonly HERO_MAX_DEPTH: number = 22;
  private static readonly SPLASH = { radius: 8, strength: 1.5 };

  public camera: Camera;
  public world: World;

  private hero: Hero;
  private lake: WaterRegion;

  public initialise() {
    this.camera = new Camera(vec2(), {
      minScale: 0.5,
      maxScale: 5,
      moveEaseAmount: 0.95,
      scaleEaseAmount: 0.95,
    });
    this.camera.positionImmediate = vec2(224, 160);
    this.camera.scaleImmediate = WaterScene.CAMERA_SCALE;

    this.world = new World({
      lighting: new LightingSystem({
        imageSmoothingEnabled: false,
        softShadowsEnabled: true,
        ambientLightColour: '#aaa',
        shaderBanding: 0,
        shaderShininess: 96,
        surfaceMapScale: 1 / WaterScene.CAMERA_SCALE,
      }),
      reflections: new ReflectionSystem(),
      water: new WaterSystem({ resolutionScale: 1 / WaterScene.CAMERA_SCALE }),
    });

    this.createTerrain();
    this.createObjects();
    this.lake = this.createLake();
    this.createControls();

    this.hero = new Hero(
      this.image('character-spritesheet'),
      vec2(40, 180)
    );
    this.world.addActor({
      sprite: this.hero.sprite,
      shadow: 'none',
      reflectionSource: Hero.REFLECTION,
      submersible: {
        maxDepth: WaterScene.HERO_MAX_DEPTH,
        footOffset: Hero.FOOT_OFFSET,
      },
    });
  }

  private image(name: string): HTMLImageElement {
    return ContentManager.get<HTMLImageElement>(name)!;
  }

  private addTile(x: number, y: number, name: string) {
    this.world.addGround({
      position: vec2(x * TILE_SIZE, y * TILE_SIZE),
      size: vec2(TILE_SIZE, TILE_SIZE),
      image: this.image(name),
      zIndex: 2,
    });
  }

  /**
   * Get the shore tile for a position in the lake, or null if it's open water
   */
  private shoreTile(x: number, y: number): string | null {
    const north = y === LAKE.y;
    const south = y === LAKE.y + LAKE.height - 1;
    const west = x === LAKE.x;

    if (north) {
      return west ? 'tl' : 't';
    }
    if (south) {
      return west ? 'bl' : 'b';
    }

    return west ? 'l' : null;
  }

  private createTerrain() {
    const size = vec2.mul(MAP_SIZE, TILE_SIZE);

    this.world.addGround({
      position: vec2(),
      size,
      image: this.image('shore'),
    });
    this.world.addGround({
      position: vec2(LAKE.x * TILE_SIZE, LAKE.y * TILE_SIZE),
      size: vec2(LAKE.width * TILE_SIZE, LAKE.height * TILE_SIZE),
      image: this.image('lakebed'),
      zIndex: 1,
    });

    for (let y = LAKE.y; y < LAKE.y + LAKE.height; y++) {
      for (let x = LAKE.x; x < LAKE.x + LAKE.width; x++) {
        const tile = this.shoreTile(x, y);
        if (tile) {
          this.addTile(x, y, `shore-${tile}`);
        }
      }
    }
  }

  /**
   * Build a mask for the lake from the mask for each shore tile
   */
  private createMask(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = LAKE.width * TILE_SIZE;
    canvas.height = LAKE.height * TILE_SIZE;

    const context = canvas.getContext('2d')!;

    for (let y = 0; y < LAKE.height; y++) {
      for (let x = 0; x < LAKE.width; x++) {
        const tile = this.shoreTile(x + LAKE.x, y + LAKE.y);
        const left = x * TILE_SIZE;
        const top = y * TILE_SIZE;

        if (tile) {
          context.drawImage(this.image(`shore-${tile}-mask`), left, top);
        } else {
          context.fillRect(left, top, TILE_SIZE, TILE_SIZE);
        }
      }
    }

    return canvas;
  }

  /**
   * Fill a grid with a cell for every part of the lake, `u` and `v` go from 0
   * to 1 across the lake
   */
  private createGrid<T>(cell: (u: number, v: number) => T): WaterGrid<T> {
    const columns = LAKE.width * GRID_SCALE;
    const rows = LAKE.height * GRID_SCALE;

    return Array.from({ length: rows }, (_, y) =>
      Array.from({ length: columns }, (_, x) =>
        cell((x + 0.5) / columns, (y + 0.5) / rows)
      )
    );
  }

  private createLake(): WaterRegion {
    const smooth = (x: number) => {
      const t = Math.min(Math.max(x, 0), 1);

      return t * t * (3 - 2 * t);
    };

    const lake = this.world.addWater({
      position: vec2(LAKE.x * TILE_SIZE, LAKE.y * TILE_SIZE),
      size: vec2(LAKE.width * TILE_SIZE, LAKE.height * TILE_SIZE),
      mask: this.createMask(),
      depth: this.createGrid((u, v) => {
        // Shallow by the hard shores so it's easy to wade in, and shelving up
        // to nothing on the beach
        const fromBank = Math.min(u * 4, v * 3, (1 - v) * 3);
        const deep = 0.3 + 0.7 * smooth(fromBank);
        const beach = smooth((1 - u) * 3.5 - 0.05);

        return deep * beach;
      }),
      flow: this.createGrid((u, v) => {
        // A current through the middle of the lake, slowing down at the banks
        const current = smooth(1 - Math.abs(v - 0.5) * 3.2);

        return vec2(current * 0.9, Math.sin(u * 7) * current * 0.25);
      }),
      flowSpeed: 18,
      pixelSize: 1,
    });

    return lake!;
  }

  private createObjects() {
    this.world.addActor({
      position: vec2(250, 160),
      size: vec2(16, 32),
      image: this.image('urn'),
      normalMap: this.image('urn-normal'),
      specularMap: this.image('urn-specular'),
      reflectionSource: true,
      submersible: { maxDepth: 14, ripples: false },
    });

    // A wall on the north shore, so that its reflection falls on the water
    this.world.addWall({
      footprint: { position: vec2(176, 52), size: vec2(128, 16) },
      height: 48,
      image: this.image('wall3'),
      normalMap: this.image('wall3-normal'),
      repeat: true,
      top: { image: this.image('wall-top') },
      reflectionSource: true,
    });

    this.world.addLight({
      position: vec2(190, 130),
      radius: 260,
      colour: '#fff4dc',
      height: 64,
    });
  }

  private createControls() {
    const { lake } = this;

    Game.gui.add(lake, 'rain', 0, 60, 1).name('Rain');
    Game.gui.add(lake, 'opacity', 0, 1, 0.01).name('Opacity');
    Game.gui.add(lake, 'refraction', 0, 12, 0.1).name('Refraction');
    Game.gui.add(lake, 'reflection', 0, 1, 0.01).name('Reflection');
    Game.gui.add(lake, 'waveStrength', 0, 1, 0.01).name('Waves');
    Game.gui.add(lake, 'flowSpeed', 0, 60, 1).name('Flow speed');
    Game.gui.add(lake, 'specular', 0, 1, 0.01).name('Specular');
    Game.gui.add(lake, 'surfaceShading', 0, 1, 0.01).name('Shading');
    Game.gui.add(lake, 'pixelSize', 0, 4, 1).name('Pixel size');
  }

  public update(dt: number) {
    Debug.value('Move', 'arrow keys or WASD');
    Debug.value('Splash', 'click on the water');

    if (InputManager.mousePressed()) {
      this.world.water?.disturb(
        this.camera.screenToWorld(InputManager.mousePosition),
        WaterScene.SPLASH
      );
    }

    this.hero.update(dt, vec2(16, 40), vec2.mul(MAP_SIZE, TILE_SIZE));
    this.world.update(dt);
    this.camera.update(Game.screen);
  }

  public draw(context: CanvasRenderingContext2D) {
    context.imageSmoothingEnabled = false;

    this.world.render(context, this.camera);

    context.save();
    this.camera.setTransforms(context);
    Debug.draw(context);
    context.restore();
  }
}
