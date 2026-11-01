import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { CircleCaster, CircleCasterOptions } from '../../lighting';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';

export class CircleShadowCasterActor extends EditorActor {
  public readonly type = 'CircleShadowCaster';
  public readonly object: CircleCaster;

  protected readonly debugColour = '#c33';
  protected readonly debugHoverColour = '#f44';
  protected readonly minSize = vec2(16, 16);
  protected readonly maxSize = vec2(256, 256);

  public anchor: vec2 = vec2(0.5, 0.9);
  public minShadowDistance: number = 5;
  public maxShadowDistance: number | null = 20;
  public alpha: number = 1;

  public constructor(
    scene: EditorScene,
    data: Partial<CircleShadowCasterActor> = {}
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object = scene.lightingSystem.addCircleCaster(this.objectOptions());
  }

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    folder.add(this.anchor, 'x').name('anchor x');
    folder.add(this.anchor, 'y').name('anchor y');
    folder.add(this, 'minShadowDistance');
    folder.add(this, 'maxShadowDistance');
    folder.add(this, 'alpha', 0, 1, 0.01);
  }

  private objectOptions(): CircleCasterOptions {
    return {
      position: this.position,
      size: this.size,
      anchor: this.anchor,
      minShadowDistance: this.minShadowDistance,
      maxShadowDistance: this.maxShadowDistance,
      alpha: this.alpha,
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
      anchor: this.anchor,
      minShadowDistance: this.minShadowDistance,
      maxShadowDistance: this.maxShadowDistance,
      alpha: this.alpha,
    };
  }

  public static deserialise(
    scene: EditorScene,
    data: any
  ): CircleShadowCasterActor {
    return new CircleShadowCasterActor(scene, data);
  }
}
