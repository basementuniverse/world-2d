import { vec2 } from '@basementuniverse/vec';
import { boundingRectangle, Frame, Rectangle, SceneCamera } from '../core';
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
};

type ReflectionSourceOption = {
  /**
   * Should this object appear in reflections? Use an object to configure how
   * it's reflected
   */
  reflectionSource?: boolean | ReflectionSourceSettings;
};

export type WorldActorOptions = (ActorOptions | SpriteActorOptions) &
  ReflectionSourceOption;

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

/**
 * A scene that's rendered by several systems working together
 *
 * Systems don't know about each other, they each draw a part of the frame and
 * this class decides the order. The frame is rendered in these steps:
 *
 * 1. Draw the ground
 * 2. Draw reflections onto the floor
 * 3. Draw the walls and actors that stand on the ground, reflections in a wall
 *    are drawn along with that wall
 * 4. Apply lighting to the whole scene
 */
export class World {
  public readonly lighting: LightingSystem;
  public readonly reflections: ReflectionSystem | null;

  public constructor(options?: WorldOptions) {
    this.lighting =
      options?.lighting ?? new LightingSystem({ lightingEnabled: false });
    this.reflections = options?.reflections ?? null;
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
    const { reflectionSource, ...actorOptions } = options;
    const actor = this.lighting.addActor(
      actorOptions as ActorOptions | SpriteActorOptions
    );

    if (reflectionSource) {
      const source = this.addActorReflection(
        actor,
        reflectionSource === true ? {} : reflectionSource
      );

      if (source) {
        actor.surface.onRemove(() => source.remove());
      }
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
   * Render the scene onto a context
   */
  public render(context: CanvasRenderingContext2D, camera: SceneCamera) {
    const frame: Frame = {
      context,
      camera,
      screen: vec2(context.canvas.width, context.canvas.height),
    };

    this.reflections?.prepare(frame);

    this.drawLayer(frame, () => this.lighting.drawGround(context));
    this.reflections?.drawFloor();
    this.drawLayer(frame, () => this.lighting.drawWalls(context));
    this.applyLighting(frame);
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

  private applyLighting({ context, camera, screen }: Frame) {
    this.lighting.prepare(camera, screen);
    this.lighting.draw(context);
  }
}
