import ContentManager from '@basementuniverse/content-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { GroundReceiver, GroundReceiverOptions } from '../../lighting';
import { LightingScene } from '../scenes/LightingScene';
import { EditorActor } from './EditorActor';

export class GroundShadowReceiverActor extends EditorActor {
  public readonly type = 'GroundShadowReceiver';
  public readonly object: GroundReceiver;

  protected readonly debugColour = '#36c';
  protected readonly debugHoverColour = '#58e';
  protected readonly minSize = vec(16, 16);
  protected readonly maxSize = vec(1024, 1024);

  public size: vec = vec(256, 256);
  public zIndex: number = 0;
  public colour: string = '#ddd';
  public spriteName: string = 'ground1';
  public normalMapName: string = 'ground1-normal';
  public specularMapName: string = '';

  public constructor(
    scene: LightingScene,
    data: Partial<GroundShadowReceiverActor> = {}
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object = scene.lightingSystem.addGround(this.objectOptions());

    this.folder = this.createFolder();
    this.folder.add(this, 'zIndex');
    this.folder.add(this, 'colour');
    this.folder.add(this, 'spriteName');
    this.folder.add(this, 'normalMapName');
    this.folder.add(this, 'specularMapName');
  }

  private objectOptions(): GroundReceiverOptions {
    return {
      position: this.position,
      size: this.size,
      zIndex: this.zIndex,
      colour: this.colour,
      image: ContentManager.get<HTMLImageElement>(this.spriteName) ?? null,
      normalMap:
        ContentManager.get<HTMLImageElement>(this.normalMapName) ?? null,
      specularMap:
        ContentManager.get<HTMLImageElement>(this.specularMapName) ?? null,
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
      zIndex: this.zIndex,
      colour: this.colour,
      spriteName: this.spriteName,
      normalMapName: this.normalMapName,
      specularMapName: this.specularMapName,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): GroundShadowReceiverActor {
    return new GroundShadowReceiverActor(scene, data);
  }

  public draw(context: CanvasRenderingContext2D) {
    this.object.draw(context);
  }
}
