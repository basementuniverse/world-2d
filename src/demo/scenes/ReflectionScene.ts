import Camera from '@basementuniverse/camera';
import ContentManager from '@basementuniverse/content-manager';
import Debug from '@basementuniverse/debug';
import { Scene } from '@basementuniverse/scene-manager';
import { vec2 } from '@basementuniverse/vec';
import { LightingSystem } from '../../lighting';
import { ReflectionSystem } from '../../reflections';
import { World } from '../../world';
import Game from '../Game';
import { Hero } from '../Hero';

/**
 * A room with a reflective floor and mirrors on the back wall
 */
export class ReflectionScene extends Scene {
  private static readonly HERO_AREA = {
    min: vec2(16, 58),
    max: vec2(304, 270),
  };
  private static readonly WALL_FOOT: number = 48;
  private static readonly WALL_HEIGHT: number = 64;

  public camera: Camera;
  public world: World;

  private hero: Hero;

  public initialise() {
    this.camera = new Camera(vec2(), {
      minScale: 0.5,
      maxScale: 5,
      moveEaseAmount: 0.95,
      scaleEaseAmount: 0.95,
    });
    this.camera.positionImmediate = vec2(160, 112);
    this.camera.scaleImmediate = 2.5;

    this.world = new World({
      lighting: new LightingSystem({
        imageSmoothingEnabled: false,
        softShadowsEnabled: true,
        ambientLightColour: '#999',
      }),
      reflections: new ReflectionSystem(),
    });

    this.hero = new Hero(this.image('character-spritesheet'), vec2(160, 130));
    this.world.addActor({
      sprite: this.hero.sprite,
      shadow: 'none',
      reflectionSource: { footOffset: Hero.FOOT_OFFSET },
    });

    this.createRoom();
    this.createObjects();
  }

  private image(name: string): HTMLImageElement {
    return ContentManager.get<HTMLImageElement>(name)!;
  }

  private createRoom() {
    const { WALL_FOOT, WALL_HEIGHT } = ReflectionScene;

    const floor = this.world.addGround({
      position: vec2(0, WALL_FOOT),
      size: vec2(320, 172),
      image: this.image('ground4'),
      normalMap: this.image('ground4-normal'),
    });
    const floorReflection = this.world.addFloorReflection(floor, {
      strength: 0.45,
    });
    this.world.addGround({
      position: vec2(0, 220),
      size: vec2(320, 80),
      image: this.image('ground1'),
    });

    const wall = (x: number, width: number, image: HTMLCanvasElement | null) =>
      this.world.addWall({
        footprint: {
          position: vec2(x, WALL_FOOT - 16),
          size: vec2(width, 16),
        },
        height: WALL_HEIGHT,
        image: image ?? this.image('wall3'),
        normalMap: image ? null : this.image('wall3-normal'),
        repeat: !image,
        mergeable: false,
        top: { image: this.image('wall-top') },
      });

    wall(0, 96, null);
    const mirrorWall = wall(96, 112, this.mirrorImage(112, WALL_HEIGHT));
    const rightWall = wall(208, 112, null);

    // A full height mirror
    const mirror = this.world.addMirror(mirrorWall.front, {
      position: vec2(100, WALL_FOOT - WALL_HEIGHT + 4),
      size: vec2(104, WALL_HEIGHT - 8),
    });

    // A round mirror that's hanging on the wall above the floor, the overlay is
    // the glass and it was added first so that it's drawn underneath
    const roundMirror = {
      position: vec2(244, WALL_FOOT - WALL_HEIGHT + 8),
      size: vec2(40, 40),
    };
    rightWall.front.addOverlay(context => {
      const { x, y } = roundMirror.position;

      context.fillStyle = '#39505c';
      context.beginPath();
      context.arc(x + 20, y + 20, 20, 0, Math.PI * 2);
      context.fill();
    });
    this.world.addMirror(rightWall.front, {
      ...roundMirror,
      mask: this.circleImage(40),
    });

    Game.gui.add(floorReflection!, 'strength', 0, 1, 0.01).name('Floor');
    Game.gui.add(mirror!, 'strength', 0, 1, 0.01).name('Mirror');
  }

  private createObjects() {
    this.world.addActor({
      position: vec2(56, 120),
      size: vec2(32, 32),
      image: this.image('anvil'),
      normalMap: this.image('anvil-normal'),
      specularMap: this.image('anvil-specular'),
      reflectionSource: true,
    });
    this.world.addActor({
      position: vec2(250, 110),
      size: vec2(16, 32),
      image: this.image('urn'),
      normalMap: this.image('urn-normal'),
      specularMap: this.image('urn-specular'),
      reflectionSource: true,
    });
    this.world.addLight({
      position: vec2(160, 90),
      radius: 220,
      colour: '#ffe8c0',
      height: 48,
    });
  }

  /**
   * A mirror in a frame, what's reflected will be drawn on top of the glass
   */
  private mirrorImage(width: number, height: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d')!;
    context.fillStyle = '#5a4030';
    context.fillRect(0, 0, width, height);
    context.fillStyle = '#39505c';
    context.fillRect(4, 4, width - 8, height - 8);

    return canvas;
  }

  private circleImage(size: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;

    const context = canvas.getContext('2d')!;
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.fill();

    return canvas;
  }

  public update(dt: number) {
    const { min, max } = ReflectionScene.HERO_AREA;

    Debug.value('Move', 'arrow keys or WASD');
    Debug.value('Direction', this.hero.sprite.direction);

    this.hero.update(dt, min, max);
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
