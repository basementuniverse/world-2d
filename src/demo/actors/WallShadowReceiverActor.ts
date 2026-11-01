import { exclude } from '@basementuniverse/utils';
import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { WallReceiver, WallReceiverOptions } from '../../lighting';
import { addColour, addImage, getImage } from '../gui';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';
import { Mirror } from './Mirror';

const LEGACY_ACTOR_SHADOW_BIAS = 12;

export class WallShadowReceiverActor extends EditorActor {
  public readonly type = 'WallShadowReceiver';
  public readonly object: WallReceiver;

  protected readonly debugColour = '#f83';
  protected readonly debugHoverColour = '#fb4';
  protected readonly minSize = vec2(16, 16);
  protected readonly maxSize = vec2(256, 256);
  protected labelOffset = vec2(10, 30);

  public colour: string = '#ddd';
  public receiveLight: boolean = true;
  public surfaceNormal: vec2 = vec2();
  public spriteName: string = 'wall1';
  public maskName: string = 'wall1-mask';
  public normalMapName: string = 'wall1-normal';
  public specularMapName: string = '';
  public spriteRepeat: boolean = false;
  public shadowBias: number = 1;
  public projectShadows: boolean = true;
  public mirror: Mirror;

  public constructor(
    scene: EditorScene,
    data: Partial<WallShadowReceiverActor> = {},
    object?: WallReceiver
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });
    this.mirror = new Mirror(data.mirror);

    this.object =
      object ?? scene.lightingSystem.addWallReceiver(this.objectOptions());
  }

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    folder.add(this, 'zIndex');
    addColour(folder, this, 'colour');
    folder.add(this, 'receiveLight');
    folder.add(this.surfaceNormal, 'x', -1, 1, 0.01).name('surfaceNormal x');
    folder.add(this.surfaceNormal, 'y', -1, 1, 0.01).name('surfaceNormal y');
    addImage(folder, this, 'spriteName');
    addImage(folder, this, 'maskName', '-mask');
    addImage(folder, this, 'normalMapName', '-normal');
    addImage(folder, this, 'specularMapName', '-specular');
    folder.add(this, 'spriteRepeat');
    folder.add(this, 'shadowBias', 0, 32, 1);
    folder.add(this, 'projectShadows');

    const mirror = folder.addFolder('Mirror');
    this.mirror.createControls(mirror);
    mirror.open();
  }

  private objectOptions(): WallReceiverOptions {
    return {
      position: this.position,
      size: this.size,
      zIndex: this.zIndex,
      colour: this.colour,
      receiveLight: this.receiveLight,
      surfaceNormal: this.surfaceNormal,
      image: getImage(this.spriteName),
      mask: getImage(this.maskName),
      normalMap: getImage(this.normalMapName),
      specularMap: getImage(this.specularMapName),
      repeat: this.spriteRepeat,
      shadowBias: this.shadowBias,
      projectShadows: this.projectShadows,
    };
  }

  protected sync() {
    this.object.set(this.objectOptions());
    this.mirror.sync(this.scene, this.object);
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
      mirror: this.mirror.serialise(),
    };
  }

  public static deserialise(
    scene: EditorScene,
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
        position: vec2.cpy(object.position),
        size: vec2.cpy(object.size),
      },
      object
    );
  }

  public draw(context: CanvasRenderingContext2D) {
    this.object.draw(context);
  }
}
