import { vec2 } from '@basementuniverse/vec';
import {
  boundingRectangle,
  Frame,
  GlContext,
  Rectangle,
  SceneCamera,
} from '../core';
import {
  Actor,
  ActorOptions,
  GroundReceiver,
  GroundReceiverOptions,
  Light,
  LightingSystem,
  LightOptions,
  SpriteActorOptions,
  Surface,
  Wall,
  WallOptions,
  WallReceiver,
} from '../lighting';
import type {
  FloorReflectionReceiver,
  FloorReflectionReceiverOptions,
  ReflectionObject,
  ReflectionSource,
  ReflectionSourceSettings,
  ReflectionSystem,
  WallReflectionReceiver,
  WallReflectionReceiverOptions,
} from '../reflections';
import type {
  WaterRegion,
  WaterRegionOptions,
  WaterSystem,
} from '../water';

export type WorldOptions = {
  /**
   * The lighting system for this world
   *
   * The lighting system holds the scene, so a world always has one. If this
   * isn't set then the scene will be drawn without any lighting
   */
  lighting?: LightingSystem;

  /**
   * The reflection system for this world, if this isn't set then the scene
   * won't have any reflections
   */
  reflections?: ReflectionSystem;

  /**
   * The water system for this world, if this isn't set then the scene won't
   * have any water
   */
  water?: WaterSystem;

  /**
   * The WebGL context to share between systems, the default is a new context
   */
  glContext?: GlContext;
};

type ReflectionSourceOption = {
  /**
   * Should this object appear in reflections? Use an object to configure how
   * it's reflected
   */
  reflectionSource?: boolean | ReflectionSourceSettings;
};

export type WorldActorWaterOptions = {
  /**
   * How much of this actor is underwater in the deepest water, in world units
   */
  maxDepth?: number;

  /**
   * How far this actor's feet are above the bottom edge of its image
   */
  footOffset?: number;

  /**
   * Does this actor make ripples when it moves through the water?
   */
  ripples?: boolean;
};

export type WorldActorOptions = (ActorOptions | SpriteActorOptions) &
  ReflectionSourceOption & {
    /**
     * Should the lower part of this actor go underwater when it stands in
     * water? Use an object to configure how it behaves
     */
    submersible?: boolean | WorldActorWaterOptions;
  };

export type WorldGroundOptions = GroundReceiverOptions & {
  /**
   * Should this ground show reflections? Use an object to configure the
   * reflection, by default it will cover the whole area of the ground
   */
  reflectionReceiver?: boolean | Partial<FloorReflectionReceiverOptions>;
};

export type WorldWallOptions = WallOptions &
  ReflectionSourceOption & {
    /**
     * Should the front of this wall show reflections? Use an object to
     * configure the reflection, by default it will cover the whole front
     */
    reflectionReceiver?: boolean | Partial<WallReflectionReceiverOptions>;
  };

type SubmersibleActor = Required<WorldActorWaterOptions> & {
  actor: Actor;
  source: ReflectionSource | null;
  lastRipple: vec2 | null;
};

/**
 * A scene that's rendered by several systems working together
 *
 * Systems don't know about each other, they each draw a part of the frame and
 * this class decides the order. The frame is rendered in these steps:
 *
 * 1. Draw the ground
 * 2. Draw the parts of actors that are underwater
 * 3. Draw reflections onto the floor
 * 4. Draw the water, which shows everything drawn so far underneath it
 * 5. Draw the walls and actors that stand on the ground, reflections in a wall
 *    are drawn along with that wall
 * 6. Apply lighting to the whole scene
 */
export class World {
  private static readonly WATER_Z_INDEX = 1000;
  private static readonly DEFAULT_WATER_OPTIONS = {
    maxDepth: 24,
    footOffset: 0,
    ripples: true,
  };
  private static readonly RIPPLE_DISTANCE = 12;
  private static readonly RIPPLE_RADIUS = 5;
  private static readonly RIPPLE_STRENGTH = 0.35;

  public readonly lighting: LightingSystem;
  public readonly reflections: ReflectionSystem | null;
  public readonly water: WaterSystem | null;

  private submersibleActors: SubmersibleActor[] = [];

  public constructor(options?: WorldOptions) {
    this.lighting =
      options?.lighting ?? new LightingSystem({ lightingEnabled: false });
    this.reflections = options?.reflections ?? null;
    this.water = options?.water ?? null;

    if (this.water) {
      const glContext = options?.glContext ?? new GlContext();

      this.lighting.useGlContext(glContext);
      this.water.useGlContext(glContext);
    }
  }

  /**
   * Make a surface or a group of surfaces look like a single object to the
   * reflection system, the bottom of the group should be where it meets the
   * ground
   *
   * Overlays aren't included, they might be showing reflections themselves
   */
  private static reflectionObject(
    ...surfaces: Surface<any>[]
  ): ReflectionObject {
    const bounds = () =>
      surfaces.reduce<Rectangle>(boundingRectangle, surfaces[0]);

    return {
      get position() {
        return bounds().position;
      },
      get size() {
        return bounds().size;
      },
      draw: context => surfaces.forEach(s => s.drawContent(context)),
    };
  }

  /**
   * Add an area of ground
   */
  public addGround(options: WorldGroundOptions): GroundReceiver {
    const { reflectionReceiver, ...ground } = options;
    const surface = this.lighting.addGround(ground);

    if (reflectionReceiver) {
      this.addFloorReflection(
        surface,
        reflectionReceiver === true ? {} : reflectionReceiver
      );
    }

    return surface;
  }

  /**
   * Add a solid wall
   */
  public addWall(options: WorldWallOptions): Wall {
    const { reflectionSource, reflectionReceiver, ...wallOptions } = options;
    const wall = this.lighting.addWall(wallOptions);

    if (reflectionSource) {
      // A mirror would show the back of a wall, which we don't have a picture
      // of, so by default walls only appear in the floor
      const source = this.reflections?.addSource({
        wall: false,
        ...(reflectionSource === true ? {} : reflectionSource),
        object: World.reflectionObject(wall.front, wall.top),
      });

      if (source) {
        wall.front.onRemove(() => source.remove());
      }
    }

    if (reflectionReceiver) {
      this.addMirror(
        wall.front,
        reflectionReceiver === true ? {} : reflectionReceiver
      );
    }

    return wall;
  }

  /**
   * Add a moving object
   */
  public addActor(options: WorldActorOptions): Actor {
    const { reflectionSource, submersible, ...actorOptions } = options;
    const actor = this.lighting.addActor(
      actorOptions as ActorOptions | SpriteActorOptions
    );

    const source = reflectionSource
      ? this.addActorReflection(
          actor,
          reflectionSource === true ? {} : reflectionSource
        )
      : undefined;

    if (source) {
      actor.surface.onRemove(() => source.remove());
    }

    if (submersible) {
      const item: SubmersibleActor = {
        ...World.DEFAULT_WATER_OPTIONS,
        ...(submersible === true ? {} : submersible),
        actor,
        source: source ?? null,
        lastRipple: null,
      };

      this.submersibleActors.push(item);
      actor.surface.onRemove(() => {
        this.submersibleActors = this.submersibleActors.filter(
          other => other !== item
        );
      });
    }

    return actor;
  }

  private addActorReflection(
    actor: Actor,
    settings: ReflectionSourceSettings
  ): ReflectionSource | undefined {
    return this.reflections?.addSource({
      ...settings,
      ...(actor.sprite
        ? { sprite: actor.sprite }
        : { object: World.reflectionObject(actor.surface) }),
    });
  }

  /**
   * Add an area of water, this will return null if this world doesn't have a
   * water system
   *
   * Water is lit in the same way as the ground, and has its own surface for
   * this so that waves can catch the light
   */
  public addWater(options: WaterRegionOptions): WaterRegion | null {
    const { water } = this;
    if (!water) {
      return null;
    }

    const region = water.addRegion(options);
    const surface = this.lighting.addGround({
      position: options.position,
      size: options.size,
      zIndex: World.WATER_Z_INDEX,
      customDraw: {
        image: () => {},
        normalMap: context => water.drawRegionNormalMap(context, region),
        specularMap: context => water.drawRegionSpecularMap(context, region),
      },
    });

    region.onRemove(() => surface.remove());

    return region;
  }

  /**
   * Add a light
   */
  public addLight(options: LightOptions): Light {
    return this.lighting.addLight(options);
  }

  /**
   * Make part of an area of ground reflective
   *
   * This can be called several times for different parts of the same ground
   */
  public addFloorReflection(
    ground: GroundReceiver,
    options?: Partial<FloorReflectionReceiverOptions>
  ): FloorReflectionReceiver | null {
    const receiver =
      this.reflections?.addFloorReceiver({
        position: ground.position,
        size: ground.size,
        ...options,
      }) ?? null;

    if (receiver) {
      ground.onRemove(() => receiver.remove());
    }

    return receiver;
  }

  /**
   * Make part of a wall reflective
   *
   * The reflection is drawn straight after the wall, so it's covered by
   * anything in front of the wall. This can be called several times for
   * different parts of the same wall
   */
  public addMirror(
    wall: WallReceiver,
    options?: Partial<WallReflectionReceiverOptions>
  ): WallReflectionReceiver | null {
    const receiver =
      this.reflections?.addWallReceiver({
        position: wall.position,
        size: wall.size,
        foot: wall.position.y + wall.size.y,
        ...options,
      }) ?? null;

    if (receiver) {
      receiver.onRemove(wall.addOverlay(context => receiver.draw(context)));
      wall.onRemove(() => receiver.remove());
    }

    return receiver;
  }

  /**
   * Move the world forward, this should be called every frame
   */
  public update(dt: number) {
    this.water?.update(dt);
    this.updateRipples();
  }

  /**
   * Find where a submersible actor's feet are
   */
  private footPosition({ actor, footOffset }: SubmersibleActor): vec2 {
    actor.sync();

    const { position, size } = actor.surface;

    return vec2(
      position.x + size.x / 2,
      position.y + size.y - footOffset
    );
  }

  /**
   * Actors make ripples as they move through the water
   */
  private updateRipples() {
    const { water } = this;
    if (!water) {
      return;
    }

    for (const item of this.submersibleActors) {
      if (!item.ripples) {
        continue;
      }

      const foot = this.footPosition(item);
      const moved =
        item.lastRipple === null ||
        vec2.len(vec2.sub(foot, item.lastRipple)) >= World.RIPPLE_DISTANCE;

      if (moved) {
        item.lastRipple = foot;
        water.disturb(foot, {
          radius: World.RIPPLE_RADIUS,
          strength: World.RIPPLE_STRENGTH,
        });
      }
    }
  }

  /**
   * Find out how far each submersible actor is underwater, this needs to be
   * done before anything is drawn because it splits the actor into 2 parts
   */
  private updateWaterlines() {
    const { water } = this;
    if (!water) {
      return;
    }

    for (const item of this.submersibleActors) {
      const foot = this.footPosition(item);
      const depth = water.sample(foot)?.depth ?? 0;
      const waterline = depth > 0 ? foot.y - depth * item.maxDepth : null;

      item.actor.surface.clipBottom = waterline;
      if (item.source) {
        item.source.waterline = waterline;
      }
    }
  }

  /**
   * Render the scene onto a context
   */
  public render(context: CanvasRenderingContext2D, camera: SceneCamera) {
    const frame: Frame = {
      context,
      camera,
      screen: vec2(context.canvas.width, context.canvas.height),
    };

    this.updateWaterlines();
    this.reflections?.prepare(frame);

    this.drawLayer(frame, () => {
      this.lighting.drawGround(context);
      this.drawSubmergedActors(context);
    });
    this.reflections?.drawFloor();
    this.drawWater(frame);
    this.drawLayer(frame, () => this.lighting.drawWalls(context));
    this.applyLighting(frame);
  }

  /**
   * Draw the parts of actors that are underwater, the lowest things on the
   * screen are drawn last
   */
  private drawSubmergedActors(context: CanvasRenderingContext2D) {
    const bottom = ({ actor: { surface } }: SubmersibleActor) =>
      surface.position.y + surface.size.y;

    [...this.submersibleActors]
      .sort((a, b) => bottom(a) - bottom(b))
      .forEach(({ actor }) => actor.surface.drawHidden(context));
  }

  private drawWater(frame: Frame) {
    if (!this.water) {
      return;
    }

    frame.reflectionMap = this.reflections?.drawFloorSources() ?? null;
    this.water.draw(frame);
  }

  /**
   * Draw part of the scene with the camera's transforms applied
   */
  private drawLayer({ context, camera }: Frame, draw: () => void) {
    context.save();
    camera.setTransforms(context);
    draw();
    context.restore();
  }

  private applyLighting(frame: Frame) {
    const { context, camera, screen } = frame;

    if (this.lighting.options.lightingEnabled) {
      this.water?.drawLightingMaps(frame);
    }

    this.lighting.prepare(camera, screen);
    this.lighting.draw(context);
  }
}
