import ContentManager from '@basementuniverse/content-manager';
import { exclude } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { WallReceiver, WallReceiverOptions } from '../../lighting';
import { LightingScene } from '../scenes/LightingScene';
import { EditorActor } from './EditorActor';

const LEGACY_ACTOR_SHADOW_BIAS = 12;

export class WallShadowReceiverActor extends EditorActor {
  public readonly type = 'WallShadowReceiver';
  public readonly object: WallReceiver;

  protected readonly debugColour = '#f83';
  protected readonly debugHoverColour = '#fb4';
  protected readonly minSize = vec(16, 16);
  protected readonly maxSize = vec(256, 256);
  protected labelOffset = vec(10, 30);

  public zIndex: number = 0;
  public colour: string = '#ddd';
  public receiveLight: boolean = true;
  public surfaceNormal: vec = vec();
  public spriteName: string = 'wall1';
  public maskName: string = 'wall1-mask';
  public normalMapName: string = 'wall1-normal';
  public specularMapName: string = '';
  public spriteRepeat: boolean = false;
  public shadowBias: number = 1;
  public projectShadows: boolean = true;

  public constructor(
    scene: LightingScene,
    data: Partial<WallShadowReceiverActor> = {},
    object?: WallReceiver
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object =
      object ?? scene.lightingSystem.addWallReceiver(this.objectOptions());

    this.folder = this.createFolder();
    this.folder.add(this, 'zIndex');
    this.folder.add(this, 'colour');
    this.folder.add(this, 'receiveLight');
    this.folder
      .add(this.surfaceNormal, 'x', -1, 1, 0.01)
      .name('surfaceNormal x')
      .listen();
    this.folder
      .add(this.surfaceNormal, 'y', -1, 1, 0.01)
      .name('surfaceNormal y')
      .listen();
    this.folder.add(this, 'spriteName');
    this.folder.add(this, 'maskName');
    this.folder.add(this, 'normalMapName');
    this.folder.add(this, 'specularMapName');
    this.folder.add(this, 'spriteRepeat');
    this.folder.add(this, 'shadowBias', 0, 32, 1);
    this.folder.add(this, 'projectShadows');
  }

  private objectOptions(): WallReceiverOptions {
    return {
      position: this.position,
      size: this.size,
      zIndex: this.zIndex,
      colour: this.colour,
      receiveLight: this.receiveLight,
      surfaceNormal: this.surfaceNormal,
      image: ContentManager.get<HTMLImageElement>(this.spriteName) ?? null,
      mask: ContentManager.get<HTMLImageElement>(this.maskName) ?? null,
      normalMap:
        ContentManager.get<HTMLImageElement>(this.normalMapName) ?? null,
      specularMap:
        ContentManager.get<HTMLImageElement>(this.specularMapName) ?? null,
      repeat: this.spriteRepeat,
      shadowBias: this.shadowBias,
      projectShadows: this.projectShadows,
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
      receiveLight: this.receiveLight,
      surfaceNormal: this.surfaceNormal,
      spriteName: this.spriteName,
      maskName: this.maskName,
      normalMapName: this.normalMapName,
      specularMapName: this.specularMapName,
      spriteRepeat: this.spriteRepeat,
      shadowBias: this.shadowBias,
      projectShadows: this.projectShadows,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): WallShadowReceiverActor {
    // Older scenes put anything that casts a shadow in a second wall layer
    if (data.layer === 'two') {
      return new WallShadowReceiverActor(scene, {
        ...exclude(data, 'layer'),
        shadowBias: LEGACY_ACTOR_SHADOW_BIAS,
        projectShadows: false,
      });
    }

    return new WallShadowReceiverActor(scene, exclude(data, 'layer'));
  }

  /**
   * Create an actor for a surface that this actor's surface was merged into
   */
  public createMerged(object: WallReceiver): WallShadowReceiverActor {
    return new WallShadowReceiverActor(
      this.scene,
      {
        ...exclude(this.serialise(), 'id'),
        position: vec.cpy(object.position),
        size: vec.cpy(object.size),
      },
      object
    );
  }

  public draw(context: CanvasRenderingContext2D) {
    this.object.draw(context);
  }
}
