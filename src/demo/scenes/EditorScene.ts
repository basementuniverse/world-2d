import Camera from '@basementuniverse/camera';
import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { Scene } from '@basementuniverse/scene-manager';
import { vec2 } from '@basementuniverse/vec';
import { LightingSystem } from '../../lighting';
import { ReflectionSystem } from '../../reflections';
import { WaterSystem } from '../../water';
import { World } from '../../world';
import { CharacterActor } from '../actors/CharacterActor';
import { CircleShadowCasterActor } from '../actors/CircleShadowCasterActor';
import { EditorActor } from '../actors/EditorActor';
import { GroundShadowReceiverActor } from '../actors/GroundShadowReceiverActor';
import { LightActor } from '../actors/LightActor';
import { PropActor } from '../actors/PropActor';
import { RegionShadowCasterActor } from '../actors/RegionShadowCasterActor';
import { SpriteShadowCasterActor } from '../actors/SpriteShadowCasterActor';
import { WallActor } from '../actors/WallActor';
import { WallShadowReceiverActor } from '../actors/WallShadowReceiverActor';
import { WaterActor } from '../actors/WaterActor';
import * as constants from '../constants';
import Game from '../Game';
import { addColour, clearFolder } from '../gui';
import { quantizeVec, sortActors } from '../utilities';
import { WaterPainter } from '../WaterPainter';

enum EditorRenderMode {
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

type ElementType = {
  type: string;
  name: string;

  /**
   * Hold shift and press this key to create an element at the mouse position
   */
  key?: string;

  deserialise(scene: EditorScene, data: any): EditorActor;
};

/**
 * The things that can be added to a scene
 *
 * When elements overlap, the one that's earliest in this list gets selected
 */
const ELEMENT_TYPES: ElementType[] = [
  {
    type: 'Light',
    name: 'Light',
    key: 'KeyL',
    deserialise: LightActor.deserialise,
  },
  {
    type: 'Character',
    name: 'Character',
    deserialise: CharacterActor.deserialise,
  },
  {
    type: 'Prop',
    name: 'Prop',
    key: 'KeyP',
    deserialise: PropActor.deserialise,
  },
  {
    type: 'Wall',
    name: 'Wall',
    key: 'KeyW',
    deserialise: WallActor.deserialise,
  },
  {
    type: 'WallShadowReceiver',
    name: 'Wall surface',
    key: 'KeyF',
    deserialise: WallShadowReceiverActor.deserialise,
  },
  {
    type: 'RegionShadowCaster',
    name: 'Region shadow caster',
    key: 'KeyR',
    deserialise: RegionShadowCasterActor.deserialise,
  },
  {
    type: 'SpriteShadowCaster',
    name: 'Sprite shadow caster',
    key: 'KeyS',
    deserialise: SpriteShadowCasterActor.deserialise,
  },
  {
    type: 'CircleShadowCaster',
    name: 'Circle shadow caster',
    key: 'KeyC',
    deserialise: CircleShadowCasterActor.deserialise,
  },
  {
    type: 'Water',
    name: 'Water',
    key: 'KeyA',
    deserialise: WaterActor.deserialise,
  },
  {
    type: 'GroundShadowReceiver',
    name: 'Ground',
    key: 'KeyG',
    deserialise: GroundShadowReceiverActor.deserialise,
  },
];

/**
 * Where elements are found in scenes that were saved by older versions
 */
const LEGACY_ELEMENT_LISTS = [
  'groundShadowReceivers',
  'wallShadowReceivers',
  'regionShadowCasters',
  'spriteShadowCasters',
  'circleShadowCasters',
  'lights',
];

const SAMPLE_SCENES = {
  'Sample: reflections': 'samples/reflections.json',
  'Sample: water': 'samples/water.json',
  'Sample: town': 'samples/sample-scene-1.json',
};

function elementType(type: string): ElementType {
  return ELEMENT_TYPES.find(element => element.type === type)!;
}

/**
 * Elements that are in front of other elements come first
 */
function compareElements(a: EditorActor, b: EditorActor): number {
  const order = ({ type }: EditorActor) =>
    ELEMENT_TYPES.indexOf(elementType(type));

  return order(a) - order(b) || sortActors(b, a);
}

/**
 * A scene that can be built and changed from inside the demo
 */
export class EditorScene extends Scene {
  private static readonly CAMERA_SPEED: number = 100;
  private static readonly CAMERA_INITIAL_POSITION: vec2 = vec2(1000, 600);
  private static readonly EXPORT_FILE_NAME: string = 'scene.json';
  private static readonly SPLASH = { radius: 8, strength: 1.5 };

  /**
   * The mouse can move this far during a click, in screen pixels
   */
  private static readonly CLICK_DISTANCE: number = 4;

  public camera: Camera;
  public lightingSystem: LightingSystem;
  public world: World;

  /**
   * These are multiplied by the strength of every reflection in the scene
   */
  public reflectionStrength = { floor: 1, wall: 1, water: 1 };

  public painter: WaterPainter;

  private actors: EditorActor[] = [];
  private selected: EditorActor | null = null;
  private selectedFolder: dat.GUI;
  private defaultSettings: any;

  /**
   * Where the mouse was pressed, if that was on the selected element
   */
  private selectedClick: vec2 | null = null;

  public mode: EditorRenderMode = EditorRenderMode.Normal;
  public showHelp: boolean = false;

  public initialise() {
    // Camera
    this.camera = new Camera(vec2(), {
      minScale: 0.5,
      maxScale: 5,
      moveEaseAmount: 0.95,
      scaleEaseAmount: 0.95,
    });
    this.camera.positionImmediate = EditorScene.CAMERA_INITIAL_POSITION;

    // World
    this.lightingSystem = new LightingSystem({
      imageSmoothingEnabled: false,
      softShadowsEnabled: true,
      softShadowsAmount: 2.5,
      ambientLightColour: '#888',
    });
    this.world = new World({
      lighting: this.lightingSystem,
      reflections: new ReflectionSystem(),
      water: new WaterSystem(),
    });
    this.painter = new WaterPainter(this.world.water!);
    this.defaultSettings = JSON.parse(JSON.stringify(this.settings()));

    // GUI controls
    Game.gui
      .add(this, 'mode', Object.values(EditorRenderMode))
      .name('Render mode');
    Game.gui.add(this, 'showHelp').name('Show help');

    this.createSceneControls();
    this.createElementControls();
    this.painter.createControls(Game.gui.addFolder('Paint water'));
    this.selectedFolder = Game.gui.addFolder('Selected');
    this.createLightingControls();
    this.createReflectionControls();
    this.createWaterControls();

    this.select(null);
  }

  private createSceneControls() {
    const folder = Game.gui.addFolder('Scene');
    const button = (name: string, click: () => void) =>
      folder.add({ click }, 'click').name(name);

    button('Save to local storage', () => this.store());
    button('Load from local storage', () => this.retrieve());
    button('Export scene to a file', () => this.export());
    button('Import scene from a file', () => this.import());
    button('Optimise geometry', () => this.optimise());
    button('Clear scene', () => this.clear());

    for (const [name, path] of Object.entries(SAMPLE_SCENES)) {
      button(name, () => this.loadSample(path));
    }
  }

  /**
   * Add a button for creating each type of element
   */
  private createElementControls() {
    const folder = Game.gui.addFolder('Add');

    for (const element of ELEMENT_TYPES) {
      const click = () =>
        this.create(
          element,
          quantizeVec(this.camera.position, constants.GRID_SIZE)
        );

      folder.add({ click }, 'click').name(element.name);
    }

    folder.open();
  }

  private createLightingControls() {
    const folder = Game.gui.addFolder('Lighting');
    const { options } = this.lightingSystem;

    folder
      .add(options, 'imageSmoothingEnabled')
      .name('Image smoothing enabled');
    folder.add(options, 'softShadowsEnabled').name('Soft shadows enabled');
    folder
      .add(options, 'softShadowsAmount', 0, 10, 0.1)
      .name('Soft shadows amount');
    folder.add(options, 'surfaceMapsEnabled').name('Surface maps enabled');
    folder
      .add(options, 'surfaceMapScale', 0.25, 1, 0.05)
      .name('Surface map scale');
    folder
      .add(options, 'shaderHighlightStrength', 0, 1, 0.001)
      .name('Shader highlights');
    folder
      .add(options, 'shaderShadowStrength', 0, 1, 0.001)
      .name('Shader shadows');
    folder
      .add(options, 'shaderSpecularStrength', 0, 2, 0.001)
      .name('Shader specular');
    folder.add(options, 'shaderShininess', 1, 128, 1).name('Shader shininess');
    folder.add(options, 'shaderViewTilt', 0, 2, 0.01).name('Shader view tilt');
    folder.add(options, 'shaderBanding', 0, 0.5, 0.01).name('Shader banding');
    addColour(folder, options, 'ambientLightColour').name('Ambient light');
    addColour(folder, options, 'ambientLightShadowColour').name(
      'Ambient light shadow'
    );
    addColour(folder, options, 'ambientLightHighlightColour').name(
      'Ambient light highlight'
    );
    folder
      .add(options, 'ambientLightDirection', -Math.PI, Math.PI, 0.01)
      .name('Ambient light direction');
    folder.add(options, 'wallLightingYOffset').name('Wall light Y offset');
    folder
      .add(options, 'wallLightingCutoffDistance')
      .name('Wall light cutoff distance');
    folder
      .add(options, 'wallShadowLengthFactor', 0.1, 2)
      .name('Wall shadow length factor');
  }

  private createReflectionControls() {
    const folder = Game.gui.addFolder('Reflections');
    const strength = this.reflectionStrength;

    folder.add(strength, 'floor', 0, 1, 0.01).name('Floor strength');
    folder.add(strength, 'wall', 0, 1, 0.01).name('Mirror strength');
    folder.add(strength, 'water', 0, 1, 0.01).name('Water strength');
    folder
      .add(this.world.water!.options, 'reflectionMapScale', 0.25, 1, 0.05)
      .name('Water reflection scale');
  }

  private createWaterControls() {
    const folder = Game.gui.addFolder('Water');
    const { options } = this.world.water!;

    folder
      .add(options, 'resolutionScale', 0.25, 1, 0.05)
      .name('Resolution scale');
    folder
      .add(options, 'lightingMapScale', 0.25, 1, 0.05)
      .name('Lighting map scale');
    folder.add(options, 'gridCellSize', 4, 64, 1).name('Grid cell size');
  }

  private create(element: ElementType, position: vec2) {
    const actor = element.deserialise(this, { position });

    this.actors.push(actor);
    this.select(actor);
  }

  /**
   * Make a copy of the selected element at a new position
   */
  private duplicate(position: vec2) {
    if (!this.selected) {
      return;
    }

    const { id, ...data } = JSON.parse(
      JSON.stringify(this.selected.serialise())
    );
    const actor = elementType(data.type).deserialise(this, {
      ...data,
      position,
    });

    this.actors.push(actor);
    this.select(actor);
  }

  private remove(actor: EditorActor) {
    if (actor === this.selected) {
      this.select(null);
    }

    this.actors = this.actors.filter(other => other !== actor);
    actor.destroy();
  }

  /**
   * Show the controls for an element, or nothing if the element is null
   */
  private select(actor: EditorActor | null) {
    if (this.selected) {
      this.selected.selected = false;
    }

    const folder = this.selectedFolder;

    this.selected = actor;
    clearFolder(folder);
    folder.name = actor?.label ?? 'Selected (nothing)';

    if (!actor) {
      return;
    }

    const position = () => vec2.add(actor.position, constants.GRID_SIZE);

    actor.selected = true;
    actor.createControls(folder);
    folder
      .add({ click: () => this.duplicate(position()) }, 'click')
      .name('Duplicate');
    folder.add({ click: () => this.remove(actor) }, 'click').name('Delete');
    folder.open();
  }

  /**
   * Show the controls for the selected element again, this is for elements with
   * controls that depend on what has happened to them
   */
  public refreshSelected() {
    this.select(this.selected);
  }

  private optimise() {
    this.lightingSystem.optimise((merged, a, b) => {
      const find = (object: unknown) =>
        this.actors.find(actor => actor.object === object) as
          | WallShadowReceiverActor
          | RegionShadowCasterActor;
      const first = find(a);

      this.remove(find(b));

      // If the objects were duplicates then the first object is kept
      if (merged !== a) {
        this.remove(first);
        this.actors.push(first.createMerged(merged as any));
      }
    });
  }

  private clear() {
    if (window.confirm('Remove everything from this scene?')) {
      this.select(null);
      this.actors.forEach(actor => actor.destroy());
      this.actors = [];
    }
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
    link.download = EditorScene.EXPORT_FILE_NAME;
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

  private async loadSample(path: string) {
    const response = await fetch(path);

    this.load(await response.text());
  }

  /**
   * The settings that are saved with a scene
   */
  private settings() {
    return {
      options: this.lightingSystem.options,
      reflectionStrength: this.reflectionStrength,
      waterOptions: this.world.water!.options,
    };
  }

  private save(): string {
    return JSON.stringify({
      camera: {
        position: this.camera.position,
        scale: this.camera.scale,
      },
      ...this.settings(),
      actors: this.actors.map(actor => actor.serialise()),
    });
  }

  private load(data: string) {
    let state: any;
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

    // Anything that isn't in the scene goes back to its default value, so that
    // settings don't carry over from the previous scene
    const defaults = this.defaultSettings;

    this.loadLightingOptions(state.options ?? {});
    Object.assign(
      this.reflectionStrength,
      defaults.reflectionStrength,
      state.reflectionStrength
    );
    Object.assign(
      this.world.water!.options,
      defaults.waterOptions,
      state.waterOptions
    );

    this.select(null);
    this.actors.forEach(actor => actor.destroy());
    this.actors = [
      ...(state.actors ?? []),
      ...LEGACY_ELEMENT_LISTS.flatMap(list => state[list] ?? []),
    ].map(data => elementType(data.type).deserialise(this, data));

    Game.gui.updateDisplay();
  }

  private loadLightingOptions(saved: any) {
    const options: any = this.lightingSystem.options;

    // Some of the options have different names in older scenes
    const legacy: any = {
      surfaceMapsEnabled: saved.shaderEnabled,
      wallShadowLengthFactor: saved.spriteWallShadowLengthFactor,
    };

    for (const key of Object.keys(options)) {
      options[key] =
        saved[key] ?? legacy[key] ?? this.defaultSettings.options[key];
    }
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
    Debug.value('Selected', this.selected ? this.selected.label : 'none');

    if (this.showHelp) {
      for (const { name, key } of ELEMENT_TYPES) {
        if (key) {
          Debug.value(`Press SHIFT-${key.slice(3)} to create: ${name}`, '');
        }
      }
      Debug.value('Press SHIFT-D to duplicate selected', '');
      Debug.value('Press DELETE to delete selected', '');
      Debug.value('Click again to select what is underneath', '');
      Debug.value('Use arrow keys to move camera', '');
      Debug.value('SHIFT-mouse wheel to zoom camera', '');
      Debug.value('CTRL-drag to resize', '');
      Debug.value('Hold SHIFT to snap to grid', '');
      Debug.value('Use WASD to move characters', '');
      Debug.value('Right click on water to make a splash', '');
      Debug.value('Drag on water to paint if a paint mode is on', '');
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
      vec2.mul(cameraMoveVector, EditorScene.CAMERA_SPEED * dt)
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

    this.actors.forEach(actor => actor.update(dt));
    this.world.update(dt);

    if (this.painter.active) {
      this.painter.update(this.camera, this.waterActors());
    } else {
      this.handleSelect();
    }

    if (InputManager.keyDown('ShiftLeft')) {
      // Handle item create
      for (const element of ELEMENT_TYPES) {
        if (element.key && InputManager.keyPressed(element.key)) {
          this.create(element, vec2.cpy(mouseWorldPosition));
        }
      }

      // Handle item duplicate
      if (InputManager.keyPressed('KeyD')) {
        this.duplicate(vec2.cpy(mouseWorldPosition));
      }
    }

    // Handle item delete
    if (
      this.selected &&
      (InputManager.keyPressed('Delete') ||
        InputManager.keyPressed('Backspace'))
    ) {
      this.remove(this.selected);
    }

    // Handle splash
    if (InputManager.mousePressed(InputManager.MouseButton.Right)) {
      this.world.water!.disturb(mouseWorldPosition, EditorScene.SPLASH);
    }

    this.selectedFolder.updateDisplay();
  }

  private waterActors(): WaterActor[] {
    return this.actors.filter(
      (actor): actor is WaterActor => actor instanceof WaterActor
    );
  }

  /**
   * Get the elements underneath the mouse, the closest one comes first
   */
  private hoveredActors(): EditorActor[] {
    return this.actors.filter(actor => actor.hovered).sort(compareElements);
  }

  /**
   * Clicking on an element selects it, and clicking on it again selects
   * whatever is underneath it so that elements can't get hidden by each other
   */
  private handleSelect() {
    const { Left } = InputManager.MouseButton;
    const mousePosition = InputManager.mousePosition;

    if (InputManager.mousePressed(Left)) {
      const hovered = this.hoveredActors();

      if (this.selected && hovered.includes(this.selected)) {
        this.selectedClick = vec2.cpy(mousePosition);
      } else {
        this.select(hovered[0] ?? null);
      }
    }

    if (InputManager.mouseReleased(Left) && this.selectedClick) {
      const distance = vec2.len(vec2.sub(mousePosition, this.selectedClick));

      if (distance < EditorScene.CLICK_DISTANCE) {
        const hovered = this.hoveredActors();
        const next = hovered.indexOf(this.selected!) + 1;

        this.select(hovered[next % hovered.length] ?? this.selected);
      }

      this.selectedClick = null;
    }
  }

  /**
   * Render the scene and then show one of the canvases that were used for it
   */
  private drawPrepared(
    context: CanvasRenderingContext2D,
    getCanvas: () => HTMLCanvasElement
  ) {
    const { x, y } = Game.screen;

    this.world.render(context, this.camera);
    context.clearRect(0, 0, x, y);
    context.drawImage(getCanvas(), 0, 0, x, y);
  }

  /**
   * Prepare the lighting system and draw a canvas belonging to the selected
   * light
   */
  private drawSelectedLight(
    context: CanvasRenderingContext2D,
    getCanvas: (light: LightActor) => HTMLCanvasElement
  ) {
    if (!(this.selected instanceof LightActor)) {
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
    lighting.options.lightingEnabled =
      this.mode !== EditorRenderMode.NoLighting;

    switch (this.mode) {
      case EditorRenderMode.NoLighting:
      case EditorRenderMode.Normal:
        this.world.render(context, this.camera);
        break;

      case EditorRenderMode.SurfaceMap:
        this.drawPrepared(context, () => lighting.getSurfaceMapCanvas());
        break;

      case EditorRenderMode.SelectedLightMap:
        this.drawSelectedLight(context, light => light.object.lightCanvas);
        break;

      case EditorRenderMode.SelectedRegionShadowMap:
        this.drawSelectedLight(
          context,
          light => light.object.regionShadowCanvas
        );
        break;

      case EditorRenderMode.SelectedObjectShadowMap:
        this.drawSelectedLight(
          context,
          light => light.object.objectShadowCanvas
        );
        break;

      case EditorRenderMode.LightMap:
        this.drawPrepared(context, () => lighting.lightMapCanvas);
        break;

      case EditorRenderMode.SpecularLightMap:
        this.drawPrepared(context, () => lighting.specularLightMapCanvas);
        break;

      case EditorRenderMode.SceneNormalMap:
        this.drawPrepared(context, () => lighting.sceneNormalMapCanvas);
        break;

      case EditorRenderMode.SceneSpecularMap:
        this.drawPrepared(context, () => lighting.sceneSpecularMapCanvas);
        break;
    }

    context.save();
    this.camera.setTransforms(context);
    this.painter.draw(context, this.camera, this.waterActors());
    Debug.draw(context);
    context.restore();
  }
}
