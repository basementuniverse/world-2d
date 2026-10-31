import { exclude } from '@basementuniverse/utils';
import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { RegionCaster } from '../../lighting';
import { LightingScene } from '../scenes/LightingScene';
import { EditorActor } from './EditorActor';

export class RegionShadowCasterActor extends EditorActor {
  public readonly type = 'RegionShadowCaster';
  public readonly object: RegionCaster;

  protected readonly debugColour = '#c33';
  protected readonly debugHoverColour = '#f44';
  protected readonly minSize = vec2(16, 16);
  protected readonly maxSize = vec2(256, 256);
  protected labelOffset = vec2(10, 50);

  public includeRegionShadow: boolean = false;

  public constructor(
    scene: LightingScene,
    data: Partial<RegionShadowCasterActor> = {},
    object?: RegionCaster
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object =
      object ??
      scene.lightingSystem.addRegionCaster({
        position: this.position,
        size: this.size,
        includeRegionShadow: this.includeRegionShadow,
      });

    this.folder = this.createFolder();
    this.folder.add(this, 'includeRegionShadow');
  }

  protected sync() {
    this.object.set({
      position: this.position,
      size: this.size,
      includeRegionShadow: this.includeRegionShadow,
    });
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      includeRegionShadow: this.includeRegionShadow,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): RegionShadowCasterActor {
    return new RegionShadowCasterActor(scene, data);
  }

  /**
   * Create an actor for a caster that this actor's caster was merged into
   */
  public createMerged(object: RegionCaster): RegionShadowCasterActor {
    return new RegionShadowCasterActor(
      this.scene,
      {
        ...exclude(this.serialise(), 'id'),
        position: vec2.cpy(object.position),
        size: vec2.cpy(object.size),
      },
      object
    );
  }
}
