import Camera from '@basementuniverse/camera';
import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { Scene } from '@basementuniverse/scene-manager';
import { exclude } from '@basementuniverse/utils';
import { vec2 } from '@basementuniverse/vec';
import { LightingSystem, WallReceiver } from '../../lighting';
import { World } from '../../world';
import { CircleShadowCasterActor } from '../actors/CircleShadowCasterActor';
import { GroundShadowReceiverActor } from '../actors/GroundShadowReceiverActor';
import { LightActor } from '../actors/LightActor';
import { RegionShadowCasterActor } from '../actors/RegionShadowCasterActor';
import { SpriteShadowCasterActor } from '../actors/SpriteShadowCasterActor';
import { WallShadowReceiverActor } from '../actors/WallShadowReceiverActor';
import Game from '../Game';
import { sortActors } from '../utilities';

enum LightingSceneRenderMode {
  NoLighting = 'nolighting',
  Normal = 'normal',
  SurfaceMap = 'surfacemap',
  SelectedLightMap = 'selected-light',
  SelectedRegionShadowMap = 'selected-region-shadows',
  SelectedObjectShadowMap = 'selected-object-shadows',
  LightMap = 'lightmap',
  SpecularLightMap = 'specularlightmap',
  SceneNormalMap = 'scenenormalmap',
  SceneSpecularMap = 'scenespecularmap',
}

export class LightingScene extends Scene {
  private static readonly CAMERA_SPEED: number = 100;
  private static readonly CAMERA_INITIAL_POSITION: vec2 = vec2(1000, 600);
  private static readonly EXPORT_FILE_NAME: string = 'scene.json';

  public camera: Camera;
  public lightingSystem: LightingSystem;
  public world: World;

  private groundShadowReceivers: GroundShadowReceiverActor[] = [];
  private wallShadowReceivers: WallShadowReceiverActor[] = [];
  private regionShadowCasters: RegionShadowCasterActor[] = [];
  private spriteShadowCasters: SpriteShadowCasterActor[] = [];
  private circleShadowCasters: CircleShadowCasterActor[] = [];
  private lights: LightActor[] = [];

  private selected:
    | GroundShadowReceiverActor
    | WallShadowReceiverActor
    | RegionShadowCasterActor
    | SpriteShadowCasterActor
    | CircleShadowCasterActor
    | LightActor
    | null = null;

  public mode: LightingSceneRenderMode = LightingSceneRenderMode.Normal;
  public showHelp: boolean = false;

  public initialise() {
    // Camera
    this.camera = new Camera(vec2(), {
      minScale: 0.5,
      maxScale: 5,
      moveEaseAmount: 0.95,
      scaleEaseAmount: 0.95,
    });
    this.camera.positionImmediate = LightingScene.CAMERA_INITIAL_POSITION;

    // Lighting
    this.lightingSystem = new LightingSystem({
      imageSmoothingEnabled: false,
      softShadowsEnabled: true,
      softShadowsAmount: 2.5,
    });
    this.world = new World({ lighting: this.lightingSystem });

    // GUI controls
    Game.gui
      .add(this, 'mode', Object.values(LightingSceneRenderMode))
      .name('Render mode');
    Game.gui.add(this, 'showHelp').name('Show help');
    Game.gui
      .add({ click: () => this.store() }, 'click')
      .name('Save to local storage');
    Game.gui
      .add({ click: () => this.retrieve() }, 'click')
      .name('Load from local storage');
    Game.gui
      .add({ click: () => this.export() }, 'click')
      .name('Export scene to a file');
    Game.gui
      .add({ click: () => this.import() }, 'click')
      .name('Import scene from a file');
    Game.gui
      .add({ click: () => this.optimise() }, 'click')
      .name('Optimise geometry');
    Game.gui
      .add(this.lightingSystem.options, 'imageSmoothingEnabled')
      .name('Image smoothing enabled')
      .onChange(value => {
        this.lightingSystem.options.imageSmoothingEnabled = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'softShadowsEnabled')
      .name('Soft shadows enabled')
      .onChange(value => {
        this.lightingSystem.options.softShadowsEnabled = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'softShadowsAmount')
      .name('Soft shadows amount')
      .onChange(value => {
        this.lightingSystem.options.softShadowsAmount = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'surfaceMapsEnabled')
      .name('Surface maps enabled')
      .onChange(value => {
        this.lightingSystem.options.surfaceMapsEnabled = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'shaderHighlightStrength', 0, 1, 0.001)
      .name('Shader highlights')
      .onChange(value => {
        this.lightingSystem.options.shaderHighlightStrength = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'shaderShadowStrength', 0, 1, 0.001)
      .name('Shader shadows')
      .onChange(value => {
        this.lightingSystem.options.shaderShadowStrength = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'shaderSpecularStrength', 0, 2, 0.001)
      .name('Shader specular')
      .onChange(value => {
        this.lightingSystem.options.shaderSpecularStrength = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'shaderShininess', 1, 128, 1)
      .name('Shader shininess')
      .onChange(value => {
        this.lightingSystem.options.shaderShininess = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'shaderViewTilt', 0, 2, 0.01)
      .name('Shader view tilt')
      .onChange(value => {
        this.lightingSystem.options.shaderViewTilt = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'shaderBanding', 0, 0.5, 0.01)
      .name('Shader banding')
      .onChange(value => {
        this.lightingSystem.options.shaderBanding = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'ambientLightColour')
      .name('Ambient light')
      .onChange(value => {
        this.lightingSystem.options.ambientLightColour = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'ambientLightShadowColour')
      .name('Ambient light shadow')
      .onChange(value => {
        this.lightingSystem.options.ambientLightShadowColour = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'ambientLightHighlightColour')
      .name('Ambient light highlight')
      .onChange(value => {
        this.lightingSystem.options.ambientLightHighlightColour = value;
      })
      .listen();
    Game.gui
      .add(
        this.lightingSystem.options,
        'ambientLightDirection',
        -Math.PI,
        Math.PI,
        0.01
      )
      .name('Ambient light direction')
      .onFinishChange(value => {
        this.lightingSystem.options.ambientLightDirection = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'wallLightingYOffset')
      .name('Wall light Y offset')
      .onChange(value => {
        this.lightingSystem.options.wallLightingYOffset = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'wallLightingCutoffDistance')
      .name('Wall light cutoff distance')
      .onChange(value => {
        this.lightingSystem.options.wallLightingCutoffDistance = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'wallShadowLengthFactor', 0.1, 2)
      .name('Wall shadow length factor')
      .onChange(value => {
        this.lightingSystem.options.wallShadowLengthFactor = value;
      })
      .listen();
  }

  private optimise() {
    this.lightingSystem.optimise((merged, a, b) => {
      if (merged instanceof WallReceiver) {
        this.wallShadowReceivers = this.replaceMerged(
          this.wallShadowReceivers,
          merged,
          a,
          b
        );
      } else {
        this.regionShadowCasters = this.replaceMerged(
          this.regionShadowCasters,
          merged,
          a,
          b
        );
      }
    });

    // The selected actor might have been merged and destroyed
    if (this.selected?.folder === null) {
      this.selected = null;
    }
  }

  /**
   * Replace the actors for 2 objects that have been merged
   */
  private replaceMerged<
    T extends WallShadowReceiverActor | RegionShadowCasterActor
  >(
    actors: T[],
    merged: T['object'],
    a: unknown,
    b: unknown
  ): T[] {
    const first = actors.find(actor => actor.object === a)!;
    const second = actors.find(actor => actor.object === b)!;

    let result = actors.filter(actor => actor !== second);
    second.destroy();

    // If the objects were duplicates then the first object is kept
    if (merged !== a) {
      result = result.filter(actor => actor !== first);
      result.push(first.createMerged(merged as any) as T);
      first.destroy();
    }

    return result;
  }

  private store() {
    localStorage.setItem('lighting_demo_test_state', this.save());
  }

  private retrieve() {
    const data = localStorage.getItem('lighting_demo_test_state');
    if (!data) {
      return;
    }

    this.load(data);
  }

  /**
   * Download the scene as a JSON file
   */
  private export() {
    const url = URL.createObjectURL(
      new Blob([this.save()], { type: 'application/json' })
    );
    const link = document.createElement('a');

    link.href = url;
    link.download = LightingScene.EXPORT_FILE_NAME;
    link.click();

    URL.revokeObjectURL(url);
  }

  /**
   * Ask for a JSON file and load a scene from it
   */
  private import() {
    const input = document.createElement('input');

    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        this.load(await file.text());
      }
    };
    input.click();
  }

  private save(): string {
    return JSON.stringify({
      camera: {
        position: this.camera.position,
        scale: this.camera.scale,
      },
      options: this.lightingSystem.options,
      groundShadowReceivers: this.groundShadowReceivers.map(g => g.serialise()),
      wallShadowReceivers: this.wallShadowReceivers.map(w => w.serialise()),
      regionShadowCasters: this.regionShadowCasters.map(r => r.serialise()),
      spriteShadowCasters: this.spriteShadowCasters.map(s => s.serialise()),
      circleShadowCasters: this.circleShadowCasters.map(c => c.serialise()),
      lights: this.lights.map(l => l.serialise()),
    });
  }

  private load(data: string) {
    let state;
    try {
      state = JSON.parse(data);
    } catch (e) {
      console.error('State data is invalid');
      return;
    }

    if (state.camera !== undefined) {
      this.camera.positionImmediate = state.camera.position;
      this.camera.scaleImmediate = state.camera.scale;
    }

    this.lightingSystem.options.imageSmoothingEnabled =
      state.options.imageSmoothingEnabled;
    this.lightingSystem.options.softShadowsEnabled =
      state.options.softShadowsEnabled;
    this.lightingSystem.options.softShadowsAmount =
      state.options.softShadowsAmount;
    this.lightingSystem.options.surfaceMapsEnabled =
      state.options.surfaceMapsEnabled ?? state.options.shaderEnabled;
    this.lightingSystem.options.ambientLightColour =
      state.options.ambientLightColour;
    this.lightingSystem.options.ambientLightShadowColour =
      state.options.ambientLightShadowColour;
    this.lightingSystem.options.ambientLightHighlightColour =
      state.options.ambientLightHighlightColour;
    this.lightingSystem.options.ambientLightDirection =
      state.options.ambientLightDirection;
    this.lightingSystem.options.wallLightingYOffset =
      state.options.wallLightingYOffset;
    this.lightingSystem.options.wallLightingCutoffDistance =
      state.options.wallLightingCutoffDistance;
    this.lightingSystem.options.wallShadowLengthFactor =
      state.options.wallShadowLengthFactor ??
      state.options.spriteWallShadowLengthFactor;

    this.groundShadowReceivers.forEach(g => g.destroy());
    this.groundShadowReceivers = state.groundShadowReceivers.map((g: any) =>
      GroundShadowReceiverActor.deserialise(this, g)
    );

    this.wallShadowReceivers.forEach(w => w.destroy());
    this.wallShadowReceivers = state.wallShadowReceivers.map((w: any) =>
      WallShadowReceiverActor.deserialise(this, w)
    );

    this.regionShadowCasters.forEach(r => r.destroy());
    this.regionShadowCasters = state.regionShadowCasters.map((r: any) =>
      RegionShadowCasterActor.deserialise(this, r)
    );

    this.spriteShadowCasters.forEach(s => s.destroy());
    this.spriteShadowCasters = state.spriteShadowCasters.map((s: any) =>
      SpriteShadowCasterActor.deserialise(this, s)
    );

    this.circleShadowCasters.forEach(c => c.destroy());
    this.circleShadowCasters = state.circleShadowCasters.map((c: any) =>
      CircleShadowCasterActor.deserialise(this, c)
    );

    this.lights.forEach(light => light.destroy());
    this.lights = state.lights.map((light: any) =>
      LightActor.deserialise(this, light)
    );
  }

  public update(dt: number) {
    const cameraBounds = this.camera.bounds;
    const mouseWorldPosition = this.camera.screenToWorld(
      InputManager.mousePosition
    );

    Debug.value(
      'Mouse world position',
      vec2.str(vec2.map(mouseWorldPosition, v => +v.toFixed(2)))
    );
    Debug.value(
      'Camera',
      `pos ${vec2.str(
        vec2.map(this.camera.position, v => +v.toFixed(2))
      )} scale ${this.camera.scale.toFixed(2)}`
    );
    Debug.value(
      'Camera bounds',
      `top=${Math.floor(cameraBounds.top)} left=${Math.floor(
        cameraBounds.left
      )} bottom=${Math.floor(cameraBounds.bottom)} right=${Math.floor(
        cameraBounds.right
      )}`
    );
    Debug.value('Selected', this.selected ? this.selected.id : 'none');

    if (this.showHelp) {
      Debug.value('Press SHIFT-L to create a new Light', '');
      Debug.value('Press SHIFT-G to create a new GroundShadowReceiver', '');
      Debug.value('Press SHIFT-W to create a new WallShadowReceiver', '');
      Debug.value('Press SHIFT-R to create a new RegionShadowCaster', '');
      Debug.value('Press SHIFT-S to create a new SpriteShadowCaster', '');
      Debug.value('Press SHIFT-C to create a new CircleShadowCaster', '');
      Debug.value('Press SHIFT-D to duplicate selected', '');
      Debug.value('Use arrow keys to move camera', '');
      Debug.value('SHIFT-mouse wheel to zoom camera', '');
      Debug.value('CTRL-drag to resize', '');
      Debug.value('Hold SHIFT to snap to grid', '');
    }

    // Handle camera move
    const cameraMoveVector = vec2();
    if (InputManager.keyDown('ArrowUp')) {
      cameraMoveVector.y--;
    }
    if (InputManager.keyDown('ArrowDown')) {
      cameraMoveVector.y++;
    }
    if (InputManager.keyDown('ArrowLeft')) {
      cameraMoveVector.x--;
    }
    if (InputManager.keyDown('ArrowRight')) {
      cameraMoveVector.x++;
    }

    this.camera.position = vec2.add(
      this.camera.position,
      vec2.mul(cameraMoveVector, LightingScene.CAMERA_SPEED * dt)
    );

    // Handle camera zoom
    if (InputManager.keyDown('ShiftLeft')) {
      if (InputManager.mouseWheelUp()) {
        this.camera.scale += 0.1;
      }
      if (InputManager.mouseWheelDown()) {
        this.camera.scale -= 0.1;
      }
    }
    this.camera.update(Game.screen);

    this.groundShadowReceivers.forEach(ground => ground.update(dt));
    this.wallShadowReceivers.forEach(wall => wall.update(dt));

    this.regionShadowCasters.forEach(region => region.update(dt));
    this.spriteShadowCasters.forEach(sprite => sprite.update(dt));
    this.circleShadowCasters.forEach(circle => circle.update(dt));

    this.lights.forEach(light => light.update(dt));

    // Sort visible actors
    this.groundShadowReceivers = this.groundShadowReceivers.sort(sortActors);
    this.wallShadowReceivers = this.wallShadowReceivers.sort(sortActors);

    // Handle item select
    if (InputManager.mousePressed()) {
      let selectedGroundShadowReceiver =
        this.groundShadowReceivers.find(g => g.hovered) || null;
      let selectedWallShadowReceiver =
        this.wallShadowReceivers.find(w => w.hovered) || null;
      let selectedRegionShadowCaster =
        this.regionShadowCasters.find(r => r.hovered) || null;
      let selectedSpriteShadowCaster =
        this.spriteShadowCasters.find(s => s.hovered) || null;
      let selectedCircleShadowCaster =
        this.circleShadowCasters.find(c => c.hovered) || null;
      let selectedLight = this.lights.find(light => light.hovered) || null;

      this.selected =
        selectedLight ||
        selectedWallShadowReceiver ||
        selectedRegionShadowCaster ||
        selectedSpriteShadowCaster ||
        selectedCircleShadowCaster ||
        selectedGroundShadowReceiver ||
        null;

      this.groundShadowReceivers.forEach(g => {
        g.selected = false;
      });
      this.wallShadowReceivers.forEach(w => {
        w.selected = false;
      });
      this.regionShadowCasters.forEach(r => {
        r.selected = false;
      });
      this.spriteShadowCasters.forEach(s => {
        s.selected = false;
      });
      this.circleShadowCasters.forEach(c => {
        c.selected = false;
      });
      this.lights.forEach(light => {
        light.selected = false;
      });

      Object.values(Game.gui.__folders).forEach(folder => {
        folder.domElement.classList.remove('selected');
      });

      if (this.selected) {
        this.selected.selected = true;

        Game.gui.__folders[
          `${this.selected.type} ${this.selected.id}`
        ].domElement.classList.add('selected');
      }
    }

    // Handle item create
    if (InputManager.keyDown('ShiftLeft')) {
      // Create GroundShadowReceiver
      if (InputManager.keyPressed('KeyG')) {
        this.groundShadowReceivers.push(
          new GroundShadowReceiverActor(this, {
            position: vec2.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyW')) {
        this.wallShadowReceivers.push(
          new WallShadowReceiverActor(this, {
            position: vec2.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyR')) {
        this.regionShadowCasters.push(
          new RegionShadowCasterActor(this, {
            position: vec2.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyS')) {
        this.spriteShadowCasters.push(
          new SpriteShadowCasterActor(this, {
            position: vec2.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyC')) {
        this.circleShadowCasters.push(
          new CircleShadowCasterActor(this, {
            position: vec2.cpy(mouseWorldPosition),
          })
        );
      }

      // Create Light
      if (InputManager.keyPressed('KeyL')) {
        this.lights.push(
          new LightActor(this, {
            position: vec2.cpy(mouseWorldPosition),
          })
        );
      }
    }

    // Handle item duplicate
    if (
      InputManager.keyDown('ShiftLeft') &&
      InputManager.keyPressed('KeyD') &&
      this.selected
    ) {
      switch (this.selected.type) {
        case 'GroundShadowReceiver':
          this.groundShadowReceivers.push(
            GroundShadowReceiverActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position', 'size'),
              position: vec2.cpy(mouseWorldPosition),
              size: vec2.cpy(this.selected.size),
            })
          );
          break;

        case 'WallShadowReceiver':
          this.wallShadowReceivers.push(
            WallShadowReceiverActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position', 'size'),
              position: vec2.cpy(mouseWorldPosition),
              size: vec2.cpy(this.selected.size),
            })
          );
          break;

        case 'RegionShadowCaster':
          this.regionShadowCasters.push(
            RegionShadowCasterActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position', 'size'),
              position: vec2.cpy(mouseWorldPosition),
              size: vec2.cpy(this.selected.size),
            })
          );
          break;

        case 'SpriteShadowCaster':
          this.spriteShadowCasters.push(
            SpriteShadowCasterActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position', 'size'),
              position: vec2.cpy(mouseWorldPosition),
              size: vec2.cpy(this.selected.size),
            })
          );
          break;

        case 'CircleShadowCaster':
          this.circleShadowCasters.push(
            CircleShadowCasterActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position', 'size'),
              position: vec2.cpy(mouseWorldPosition),
              size: vec2.cpy(this.selected.size),
            })
          );
          break;

        case 'Light':
          this.lights.push(
            LightActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec2.cpy(mouseWorldPosition),
            })
          );
          break;
      }
    }

    // Handle item delete
    if (InputManager.keyPressed('Delete') && this.selected) {
      switch (this.selected.type) {
        case 'GroundShadowReceiver':
          this.groundShadowReceivers = this.groundShadowReceivers.filter(
            g => g.id !== this.selected!.id
          );
          break;

        case 'WallShadowReceiver':
          this.wallShadowReceivers = this.wallShadowReceivers.filter(
            w => w.id !== this.selected!.id
          );
          break;

        case 'RegionShadowCaster':
          this.regionShadowCasters = this.regionShadowCasters.filter(
            r => r.id !== this.selected!.id
          );
          break;

        case 'SpriteShadowCaster':
          this.spriteShadowCasters = this.spriteShadowCasters.filter(
            s => s.id !== this.selected!.id
          );
          break;

        case 'CircleShadowCaster':
          this.circleShadowCasters = this.circleShadowCasters.filter(
            c => c.id !== this.selected!.id
          );
          break;

        case 'Light':
          this.lights = this.lights.filter(
            light => light.id !== this.selected!.id
          );
          break;
      }
      this.selected.destroy();
      this.selected = null;
    }
  }

  /**
   * Prepare the lighting system and draw one of its canvases onto the context
   */
  private drawPrepared(
    context: CanvasRenderingContext2D,
    getCanvas: () => HTMLCanvasElement
  ) {
    this.lightingSystem.prepare(this.camera, Game.screen);
    context.drawImage(getCanvas(), 0, 0);
  }

  /**
   * Prepare the lighting system and draw a canvas belonging to the selected
   * light
   */
  private drawSelectedLight(
    context: CanvasRenderingContext2D,
    getCanvas: (light: LightActor) => HTMLCanvasElement
  ) {
    if (!this.selected || this.selected.type !== 'Light') {
      return;
    }

    this.lightingSystem.prepare(this.camera, Game.screen);

    context.save();
    this.camera.setTransforms(context);
    context.drawImage(
      getCanvas(this.selected),
      this.selected.position.x - this.selected.radius,
      this.selected.position.y - this.selected.radius
    );
    context.restore();
  }

  public draw(context: CanvasRenderingContext2D) {
    const lighting = this.lightingSystem;

    context.imageSmoothingEnabled = false;

    switch (this.mode) {
      case LightingSceneRenderMode.NoLighting:
        context.save();
        this.camera.setTransforms(context);
        lighting.drawSurfaces(context);
        context.restore();
        break;

      case LightingSceneRenderMode.Normal:
        this.world.render(context, this.camera);
        break;

      case LightingSceneRenderMode.SurfaceMap:
        this.drawPrepared(context, () => lighting.getSurfaceMapCanvas());
        break;

      case LightingSceneRenderMode.SelectedLightMap:
        this.drawSelectedLight(context, light => light.object.lightCanvas);
        break;

      case LightingSceneRenderMode.SelectedRegionShadowMap:
        this.drawSelectedLight(
          context,
          light => light.object.regionShadowCanvas
        );
        break;

      case LightingSceneRenderMode.SelectedObjectShadowMap:
        this.drawSelectedLight(
          context,
          light => light.object.objectShadowCanvas
        );
        break;

      case LightingSceneRenderMode.LightMap:
        this.drawPrepared(context, () => lighting.lightMapCanvas);
        break;

      case LightingSceneRenderMode.SpecularLightMap:
        this.drawPrepared(context, () => lighting.specularLightMapCanvas);
        break;

      case LightingSceneRenderMode.SceneNormalMap:
        this.drawPrepared(context, () => lighting.sceneNormalMapCanvas);
        break;

      case LightingSceneRenderMode.SceneSpecularMap:
        this.drawPrepared(context, () => lighting.sceneSpecularMapCanvas);
        break;
    }

    context.save();
    this.camera.setTransforms(context);
    Debug.draw(context);
    context.restore();
  }
}
