import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { GroundReceiver, GroundReceiverOptions } from '../../lighting';
import { FloorReflectionReceiver } from '../../reflections';
import { addColour, addImage, getImage } from '../gui';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';

export class GroundShadowReceiverActor extends EditorActor {
  public readonly type = 'GroundShadowReceiver';
  public readonly object: GroundReceiver;

  protected readonly debugColour = '#36c';
  protected readonly debugHoverColour = '#58e';
  protected readonly minSize = vec2(16, 16);
  protected readonly maxSize = vec2(1024, 1024);

  public size: vec2 = vec2(256, 256);
  public colour: string = '#ddd';
  public spriteName: string = 'ground1';
  public normalMapName: string = 'ground1-normal';
  public specularMapName: string = '';
  public reflective: boolean = false;
  public reflectionStrength: number = 0.45;

  private reflection: FloorReflectionReceiver | null = null;

  public constructor(
    scene: EditorScene,
    data: Partial<GroundShadowReceiverActor> = {}
  ) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object = scene.world.addGround(this.objectOptions());
    this.syncReflection();
  }

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    folder.add(this, 'zIndex');
    addColour(folder, this, 'colour');
    addImage(folder, this, 'spriteName');
    addImage(folder, this, 'normalMapName', '-normal');
    addImage(folder, this, 'specularMapName', '-specular');
    folder.add(this, 'reflective');
    folder.add(this, 'reflectionStrength', 0, 1, 0.01);
  }

  private objectOptions(): GroundReceiverOptions {
    return {
      position: this.position,
      size: this.size,
      zIndex: this.zIndex,
      colour: this.colour,
      image: getImage(this.spriteName),
      normalMap: getImage(this.normalMapName),
      specularMap: getImage(this.specularMapName),
    };
  }

  private syncReflection() {
    if (this.reflective && !this.reflection) {
      this.reflection = this.scene.world.addFloorReflection(this.object);
    }

    if (!this.reflective && this.reflection) {
      this.reflection.remove();
      this.reflection = null;
    }

    if (this.reflection) {
      this.reflection.position = this.position;
      this.reflection.size = this.size;
      this.reflection.strength =
        this.reflectionStrength * this.scene.reflectionStrength.floor;
    }
  }

  protected sync() {
    this.object.set(this.objectOptions());
    this.syncReflection();
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
      reflective: this.reflective,
      reflectionStrength: this.reflectionStrength,
    };
  }

  public static deserialise(
    scene: EditorScene,
    data: any
  ): GroundShadowReceiverActor {
    return new GroundShadowReceiverActor(scene, data);
  }

  public draw(context: CanvasRenderingContext2D) {
    this.object.draw(context);
  }
}
