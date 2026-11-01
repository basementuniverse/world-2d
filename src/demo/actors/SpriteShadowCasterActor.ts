import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { SpriteCaster, SpriteCasterOptions } from '../../lighting';
import { addImage, getImage } from '../gui';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';

export class SpriteShadowCasterActor extends EditorActor {
  public readonly type = 'SpriteShadowCaster';
  public readonly object: SpriteCaster;

  protected readonly debugColour = '#c33';
  protected readonly debugHoverColour = '#f44';
  protected readonly minSize = vec2(16, 16);
  protected readonly maxSize = vec2(256, 256);

  public shadowName: string = 'character-shadow';
  public anchor: vec2 = vec2(0.5, 0.9);
  public offset: vec2 = vec2(0.5, 0.9);
  public minShadowLength: number = 64;
  public maxShadowLength: number | null = 64;

  public constructor(
    scene: EditorScene,
    data: Partial<SpriteShadowCasterActor> = {}
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object = scene.lightingSystem.addSpriteCaster(this.objectOptions());
  }

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    addImage(folder, this, 'shadowName');
    folder.add(this.anchor, 'x', 0, 1, 0.01).name('anchor x');
    folder.add(this.anchor, 'y', 0, 1, 0.01).name('anchor y');
    folder.add(this.offset, 'x', 0, 1, 0.01).name('offset x');
    folder.add(this.offset, 'y', 0, 1, 0.01).name('offset y');
    folder.add(this, 'minShadowLength');
    folder.add(this, 'maxShadowLength');
  }

  private objectOptions(): SpriteCasterOptions {
    return {
      position: this.position,
      size: this.size,
      shadow: getImage(this.shadowName),
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
    scene: EditorScene,
    data: any
  ): SpriteShadowCasterActor {
    return new SpriteShadowCasterActor(scene, data);
  }
}
