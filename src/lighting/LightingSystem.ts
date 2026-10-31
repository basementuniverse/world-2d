import { parseColor } from '@basementuniverse/parsecolor';
import { floatEquals } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { Actor, ActorOptions } from './Actor';
import {
  CircleCaster,
  CircleCasterOptions,
  RegionCaster,
  RegionCasterOptions,
  SpriteCaster,
  SpriteCasterOptions,
} from './Caster';
import { Light, LightOptions } from './Light';
import { merge } from './merge';
import { SceneObject } from './SceneObject';
import { ShaderPass, ShaderSurface } from './ShaderPass';
import {
  GroundReceiver,
  GroundReceiverOptions,
  Surface,
  WallReceiver,
  WallReceiverOptions,
} from './Surface';
import { Colour, LightingCamera } from './types';
import {
  intervalToRectangle,
  lerpColour,
  rectanglesIntersect,
} from './utilities';
import { Wall, WallOptions } from './Wall';

export type LightingSystemOptions = {
  /**
   * Should image smoothing be enabled?
   *
   * Set this to false for pixel art style
   */
  imageSmoothingEnabled: boolean;

  /**
   * Should soft shadows be enabled?
   *
   * This will only apply if softShadowsAmount is > 0
   */
  softShadowsEnabled: boolean;

  /**
   * Amount of soft shadows to apply
   *
   * Set this to 0 to disable soft shadows
   */
  softShadowsAmount: number;

  /**
   * Should normal maps and specular maps be used?
   */
  surfaceMapsEnabled: boolean;

  /**
   * Strength of highlights from normal maps
   */
  shaderHighlightStrength: number;

  /**
   * Strength of shading from normal maps
   */
  shaderShadowStrength: number;

  /**
   * Strength of specular highlights
   */
  shaderSpecularStrength: number;

  /**
   * Size of specular highlights, larger numbers make smaller highlights
   */
  shaderShininess: number;

  /**
   * How far the camera is tilted away from looking straight down, this moves
   * specular highlights towards the bottom of the screen
   */
  shaderViewTilt: number;

  /**
   * Quantize shading into bands of this size, set this to 0 for smooth shading
   */
  shaderBanding: number;

  /**
   * Colour of ambient (global) light
   */
  ambientLightColour: string;

  /**
   * Colour of ambient (global) light when facing away from the light
   */
  ambientLightShadowColour: string;

  /**
   * Colour of ambient (global) light when facing towards the light
   */
  ambientLightHighlightColour: string;

  /**
   * Direction of ambient light in radians
   */
  ambientLightDirection: number;

  /**
   * Vertical offset for wall lighting
   */
  wallLightingYOffset: number;

  /**
   * Distance above bottom edge of wall shadow receivers before light is
   * totally cut off
   */
  wallLightingCutoffDistance: number;

  /**
   * How far sprite and circle shadows climb walls, as a fraction of the length
   * of the shadow that reaches the wall
   */
  wallShadowLengthFactor: number;
};

export class LightingSystem {
  private static readonly DEFAULT_OPTIONS: LightingSystemOptions = {
    imageSmoothingEnabled: true,
    softShadowsEnabled: false,
    softShadowsAmount: 2,
    surfaceMapsEnabled: true,
    shaderHighlightStrength: 0.5,
    shaderShadowStrength: 0.5,
    shaderSpecularStrength: 1,
    shaderShininess: 16,
    shaderViewTilt: 0.5,
    shaderBanding: 0.1,
    ambientLightColour: 'black',
    ambientLightShadowColour: 'black',
    ambientLightHighlightColour: 'black',
    ambientLightDirection: 0,
    wallLightingYOffset: -30,
    wallLightingCutoffDistance: 20,
    wallShadowLengthFactor: 0.75,
  };

  private static createContext(): CanvasRenderingContext2D {
    return document.createElement('canvas').getContext('2d')!;
  }

  private static compareSurfaces(a: Surface<any>, b: Surface<any>): number {
    return (
      a.zIndex - b.zIndex || a.position.y + a.size.y - (b.position.y + b.size.y)
    );
  }

  public options: LightingSystemOptions;

  public lights: Light[] = [];

  /**
   * The size of the most recently rendered screen
   */
  public screen: vec = vec();

  private groundReceivers: GroundReceiver[] = [];
  private wallReceivers: WallReceiver[] = [];
  private regionCasters: RegionCaster[] = [];
  private spriteCasters: SpriteCaster[] = [];
  private circleCasters: CircleCaster[] = [];

  private lightMapContext = LightingSystem.createContext();
  public lightMapCanvas = this.lightMapContext.canvas;

  private specularLightMapContext = LightingSystem.createContext();
  public specularLightMapCanvas = this.specularLightMapContext.canvas;

  private sceneNormalMapContext = LightingSystem.createContext();
  public sceneNormalMapCanvas = this.sceneNormalMapContext.canvas;

  private sceneSpecularMapContext = LightingSystem.createContext();
  public sceneSpecularMapCanvas = this.sceneSpecularMapContext.canvas;

  private shaderPass: ShaderPass | null = null;
  private specularVisible = false;

  public constructor(options?: Partial<LightingSystemOptions>) {
    this.options = Object.assign(
      {},
      LightingSystem.DEFAULT_OPTIONS,
      options ?? {}
    );
  }

  /**
   * Add an area of ground that receives light and shadows
   */
  public addGround(options: GroundReceiverOptions): GroundReceiver {
    const ground = new GroundReceiver(this, options);
    this.groundReceivers.push(ground);

    return ground;
  }

  /**
   * Add a solid wall, made from a lit front face, an unlit top, and a footprint
   * that casts shadows
   */
  public addWall(options: WallOptions): Wall {
    return new Wall(this, options);
  }

  /**
   * Add a moving object that receives light and casts a shadow
   */
  public addActor(options: ActorOptions): Actor {
    return new Actor(this, options);
  }

  /**
   * Add a light
   */
  public addLight(options: LightOptions): Light {
    const light = new Light(this, options);
    this.lights.push(light);

    return light;
  }

  /**
   * Add a rectangle or sprite that receives wall shadows
   *
   * This is what `addWall()` and `addActor()` use to create their surfaces
   */
  public addWallReceiver(options: WallReceiverOptions): WallReceiver {
    const wall = new WallReceiver(this, options);
    this.wallReceivers.push(wall);

    return wall;
  }

  /**
   * Add a rectangle that casts polygonal shadows
   */
  public addRegionCaster(options: RegionCasterOptions): RegionCaster {
    const caster = new RegionCaster(this, options);
    this.regionCasters.push(caster);

    return caster;
  }

  /**
   * Add a rectangle that casts a rotated and stretched image as a shadow
   */
  public addSpriteCaster(options: SpriteCasterOptions): SpriteCaster {
    const caster = new SpriteCaster(this, options);
    this.spriteCasters.push(caster);

    return caster;
  }

  /**
   * Add a rectangle that casts an elliptical shadow
   */
  public addCircleCaster(options: CircleCasterOptions): CircleCaster {
    const caster = new CircleCaster(this, options);
    this.circleCasters.push(caster);

    return caster;
  }

  /**
   * Remove an object or light from the lighting system
   */
  public remove(object: SceneObject<any> | Light) {
    if (object instanceof Light) {
      this.lights = this.lights.filter(light => light !== object);
      return;
    }

    this.groundReceivers = this.groundReceivers.filter(o => o !== object);
    this.wallReceivers = this.wallReceivers.filter(o => o !== object);
    this.regionCasters = this.regionCasters.filter(o => o !== object);
    this.spriteCasters = this.spriteCasters.filter(o => o !== object);
    this.circleCasters = this.circleCasters.filter(o => o !== object);
  }

  /**
   * Merge wall receivers and region casters that are adjacent to each other
   * and perfectly connected on one side, so that there are fewer to process
   *
   * Merged objects are removed from the lighting system and can't be moved
   * afterwards, so this is intended for level geometry. Set `mergeable` to
   * false on an object to exclude it
   *
   * `onMerge` is called each time 2 objects are replaced with a single object.
   * If the objects were duplicates, the merged object is the first object
   */
  public optimise(
    onMerge?: (
      merged: WallReceiver | RegionCaster,
      a: WallReceiver | RegionCaster,
      b: WallReceiver | RegionCaster
    ) => void
  ) {
    this.wallReceivers = merge<WallReceiver>(this.wallReceivers, onMerge);
    this.regionCasters = merge<RegionCaster>(this.regionCasters, onMerge);
  }

  /**
   * Get the shader pass, if it can be used
   */
  private getShaderPass(): ShaderPass | null {
    this.shaderPass ??= new ShaderPass();

    return this.shaderPass.available ? this.shaderPass : null;
  }

  /**
   * Make sure a screen-sized canvas matches the screen size and clear it
   */
  private resetContext(context: CanvasRenderingContext2D) {
    const { canvas } = context;
    if (canvas.width !== this.screen.x || canvas.height !== this.screen.y) {
      canvas.width = this.screen.x;
      canvas.height = this.screen.y;
    } else {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    context.imageSmoothingEnabled = this.options.imageSmoothingEnabled;
  }

  /**
   * Render a lit scene onto a context
   *
   * If `drawScene` is provided then it will be called to draw the scene with
   * the camera's transforms applied, otherwise we'll draw all of the surfaces
   * that have been added to the lighting system
   */
  public render(
    context: CanvasRenderingContext2D,
    camera: LightingCamera,
    drawScene?: (context: CanvasRenderingContext2D) => void
  ) {
    context.save();
    camera.setTransforms(context);
    if (drawScene) {
      drawScene(context);
    } else {
      this.drawSurfaces(context);
    }
    context.restore();

    this.prepare(camera, vec(context.canvas.width, context.canvas.height));
    this.draw(context);
  }

  /**
   * Draw all of the surfaces that have been added to the lighting system
   */
  public drawSurfaces(context: CanvasRenderingContext2D) {
    this.sortSurfaces();
    this.groundReceivers.forEach(ground => ground.draw(context));
    this.wallReceivers.forEach(wall => wall.draw(context));
  }

  private sortSurfaces() {
    this.groundReceivers.sort(LightingSystem.compareSurfaces);
    this.wallReceivers.sort(LightingSystem.compareSurfaces);
  }

  /**
   * Prepare the lightmaps for rendering
   *
   * If WebGL isn't available then lightmaps are left as they are, so the scene
   * keeps its last lighting when the context is lost and then restored
   */
  public prepare(camera: LightingCamera, screen: vec) {
    this.screen = screen;
    this.sortSurfaces();

    const shaderPass = this.getShaderPass();
    if (!shaderPass) {
      return;
    }

    const cameraRectangle = intervalToRectangle(camera.bounds);
    const surfaces = [...this.groundReceivers, ...this.wallReceivers].filter(
      surface => rectanglesIntersect(surface, cameraRectangle)
    );

    const { surfaceMapsEnabled } = this.options;
    const hasNormalMaps =
      surfaceMapsEnabled &&
      surfaces.some(
        surface => surface.normalMap || surface.customDraw.normalMap
      );
    const hasSpecularMaps =
      surfaceMapsEnabled &&
      surfaces.some(
        surface => surface.specularMap || surface.customDraw.specularMap
      );

    if (hasNormalMaps) {
      this.drawSceneNormalMap(camera, surfaces);
    }
    if (hasSpecularMaps) {
      this.drawSceneSpecularMap(camera, surfaces);
    }

    // Lights outside the camera bounds can't affect the visible scene
    const visibleLights = this.lights.filter(light =>
      rectanglesIntersect(light.bounds, cameraRectangle)
    );

    visibleLights.forEach(light =>
      light.prepare(this.regionCasters, this.spriteCasters, this.circleCasters)
    );

    shaderPass.render({
      camera,
      screen,
      lights: visibleLights,
      surfaces: this.calculateAmbientLights(surfaces),
      normalMap: hasNormalMaps ? this.sceneNormalMapCanvas : null,
      specularMap: hasSpecularMaps ? this.sceneSpecularMapCanvas : null,
      imageSmoothingEnabled: this.options.imageSmoothingEnabled,
      wallLightingYOffset: this.options.wallLightingYOffset,
      wallLightingCutoffDistance: this.options.wallLightingCutoffDistance,
      wallShadowLengthFactor: this.options.wallShadowLengthFactor,
      highlightStrength: this.options.shaderHighlightStrength,
      shadowStrength: this.options.shaderShadowStrength,
      specularStrength: this.options.shaderSpecularStrength,
      shininess: this.options.shaderShininess,
      viewTilt: this.options.shaderViewTilt,
      banding: this.options.shaderBanding,
    });

    this.resetContext(this.lightMapContext);
    this.lightMapContext.drawImage(shaderPass.canvas, 0, 0);

    this.specularVisible = hasSpecularMaps;
    if (hasSpecularMaps) {
      shaderPass.showSpecular(screen);

      // Highlights can only appear on the surfaces in the light map
      this.resetContext(this.specularLightMapContext);
      this.specularLightMapContext.save();
      this.specularLightMapContext.drawImage(shaderPass.canvas, 0, 0);
      this.specularLightMapContext.globalCompositeOperation = 'destination-in';
      this.specularLightMapContext.drawImage(this.lightMapCanvas, 0, 0);
      this.specularLightMapContext.restore();
    }
  }

  /**
   * Get a canvas showing which surface is at each pixel, for debugging
   *
   * This should be drawn straight away, because the canvas is reused
   */
  public getSurfaceMapCanvas(): HTMLCanvasElement {
    this.shaderPass?.showSurfaces(this.screen);

    return this.shaderPass?.canvas ?? this.lightMapCanvas;
  }

  /**
   * Find the ambient light on each surface
   */
  private calculateAmbientLights(surfaces: Surface<any>[]): ShaderSurface[] {
    const direction = vec.rot(vec(1, 0), this.options.ambientLightDirection);
    const ambientLight = parseColor(this.options.ambientLightColour);
    const shadow = parseColor(this.options.ambientLightShadowColour);
    const highlight = parseColor(this.options.ambientLightHighlightColour);

    return surfaces.map(surface => ({
      surface,
      ambientLight:
        surface instanceof WallReceiver
          ? this.calculateAmbientLight(
              surface.surfaceNormal,
              direction,
              ambientLight,
              shadow,
              highlight
            )
          : ambientLight,
    }));
  }

  /**
   * Calculate the actual colour of ambient light based on the surface normal
   */
  private calculateAmbientLight(
    surfaceNormal: vec,
    ambientLightDirection: vec,
    ambientLight: Colour,
    ambientLightShadow: Colour,
    ambientLightHighlight: Colour
  ): Colour {
    if (vec.eq(surfaceNormal, vec())) {
      return ambientLight;
    }

    const dot = vec.dot(vec.nor(surfaceNormal), ambientLightDirection);
    if (floatEquals(dot, 0)) {
      return ambientLight;
    }

    if (dot < 0) {
      return lerpColour(ambientLight, ambientLightHighlight, -dot);
    }

    return lerpColour(ambientLight, ambientLightShadow, dot);
  }

  /**
   * Set up soft shadow settings on the specified canvas context
   */
  public setupSoftShadows(context: CanvasRenderingContext2D) {
    if (
      this.options.softShadowsEnabled &&
      this.options.softShadowsAmount !== undefined &&
      this.options.softShadowsAmount > 0
    ) {
      context.shadowColor = 'black';
      context.shadowBlur = this.options.softShadowsAmount;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
    }
  }

  /**
   * Overlay the lightmap onto the context
   */
  public draw(context: CanvasRenderingContext2D) {
    context.save();

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.globalCompositeOperation = 'multiply';
    context.drawImage(this.lightMapCanvas, 0, 0);

    // Specular highlights are added afterwards so that they can be brighter
    // than the scene underneath them
    if (this.specularVisible) {
      context.globalCompositeOperation = 'lighter';
      context.drawImage(this.specularLightMapCanvas, 0, 0);
    }

    context.restore();
  }

  /**
   * Draw normal maps for surfaces in the scene
   */
  private drawSceneNormalMap(camera: LightingCamera, surfaces: Surface<any>[]) {
    this.resetContext(this.sceneNormalMapContext);
    this.sceneNormalMapContext.save();
    camera.setTransforms(this.sceneNormalMapContext);

    surfaces.forEach(surface => {
      surface.drawNormalMap(this.sceneNormalMapContext);
    });

    this.sceneNormalMapContext.restore();
  }

  /**
   * Draw specular maps for surfaces in the scene
   */
  private drawSceneSpecularMap(
    camera: LightingCamera,
    surfaces: Surface<any>[]
  ) {
    this.resetContext(this.sceneSpecularMapContext);
    this.sceneSpecularMapContext.save();
    camera.setTransforms(this.sceneSpecularMapContext);

    surfaces.forEach(surface => {
      surface.drawSpecularMap(this.sceneSpecularMapContext);
    });

    this.sceneSpecularMapContext.restore();
  }
}
