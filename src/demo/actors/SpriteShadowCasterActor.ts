import ContentManager from '@basementuniverse/content-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { SpriteCaster, SpriteCasterOptions } from '../../lighting';
import { LightingScene } from '../scenes/LightingScene';
import { EditorActor } from './EditorActor';

export class SpriteShadowCasterActor extends EditorActor {
  public readonly type = 'SpriteShadowCaster';
  public readonly object: SpriteCaster;

  protected readonly debugColour = '#c33';
  protected readonly debugHoverColour = '#f44';
  protected readonly minSize = vec(16, 16);
  protected readonly maxSize = vec(256, 256);

  public shadowName: string = 'character-shadow';
  public anchor: vec = vec(0.5, 0.9);
  public offset: vec = vec(0.5, 0.9);
  public minShadowLength: number = 64;
  public maxShadowLength: number | null = 64;

  public constructor(
    scene: LightingScene,
    data: Partial<SpriteShadowCasterActor> = {}
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object = scene.lightingSystem.addSpriteCaster(this.objectOptions());

    this.folder = this.createFolder();
    this.folder.add(this, 'shadowName');
    this.folder.add(this.anchor, 'x', 0, 1, 0.01).name('anchor x');
    this.folder.add(this.anchor, 'y', 0, 1, 0.01).name('anchor y');
    this.folder.add(this.offset, 'x', 0, 1, 0.01).name('offset x');
    this.folder.add(this.offset, 'y', 0, 1, 0.01).name('offset y');
    this.folder.add(this, 'minShadowLength');
    this.folder.add(this, 'maxShadowLength');
  }

  private objectOptions(): SpriteCasterOptions {
    return {
      position: this.position,
      size: this.size,
      shadow: ContentManager.get<HTMLImageElement>(this.shadowName) ?? null,
      anchor: this.anchor,
      offset: this.offset,
      minShadowLength: this.minShadowLength,
      maxShadowLength: this.maxShadowLength,
    };
  }

  protected sync() {
    this.object.set(this.objectOptions());
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      shadowName: this.shadowName,
      anchor: this.anchor,
      offset: this.offset,
      minShadowLength: this.minShadowLength,
      maxShadowLength: this.maxShadowLength,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): SpriteShadowCasterActor {
    return new SpriteShadowCasterActor(scene, data);
  }
}
