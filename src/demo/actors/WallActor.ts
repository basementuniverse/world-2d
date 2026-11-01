import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { Rectangle } from '../../core';
import { Wall } from '../../lighting';
import { addImage, getImage } from '../gui';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';
import { Mirror } from './Mirror';

/**
 * A solid wall, `position` and `size` are for the wall's footprint
 */
export class WallActor extends EditorActor {
  public readonly type = 'Wall';
  public object: Wall;

  protected readonly debugColour = '#f83';
  protected readonly debugHoverColour = '#fb4';
  protected readonly minSize = vec2(16, 8);
  protected readonly maxSize = vec2(1024, 256);
  protected readonly sizeNames: [string, string] = ['width', 'depth'];

  public size: vec2 = vec2(128, 16);
  public height: number = 48;
  public spriteName: string = 'wall3';
  public normalMapName: string = 'wall3-normal';
  public specularMapName: string = '';
  public topSpriteName: string = 'wall-top';
  public spriteRepeat: boolean = true;
  public includeRegionShadow: boolean = false;
  public reflectionSource: boolean = true;
  public mirror: Mirror;

  public constructor(scene: EditorScene, data: Partial<WallActor> = {}) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });
    this.mirror = new Mirror(data.mirror);

    this.sync();
  }

  public get bounds(): Rectangle {
    const { position, size, height } = this;

    return {
      position: vec2(position.x, position.y - height),
      size: vec2(size.x, size.y + height),
    };
  }

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    folder.add(this, 'height', 8, 256, 1);
    folder.add(this, 'zIndex');
    addImage(folder, this, 'spriteName');
    addImage(folder, this, 'normalMapName', '-normal');
    addImage(folder, this, 'specularMapName', '-specular');
    addImage(folder, this, 'topSpriteName');
    folder.add(this, 'spriteRepeat');
    folder.add(this, 'includeRegionShadow');
    folder.add(this, 'reflectionSource');

    const mirror = folder.addFolder('Mirror');
    this.mirror.createControls(mirror);
    mirror.open();
  }

  /**
   * The options that are used to create the wall, except for its position
   */
  private structure() {
    return {
      size: this.size,
      height: this.height,
      zIndex: this.zIndex,
      spriteName: this.spriteName,
      normalMapName: this.normalMapName,
      specularMapName: this.specularMapName,
      topSpriteName: this.topSpriteName,
      spriteRepeat: this.spriteRepeat,
      includeRegionShadow: this.includeRegionShadow,
      reflectionSource: this.reflectionSource,
    };
  }

  private build() {
    this.object?.remove();
    this.object = this.scene.world.addWall({
      footprint: { position: this.position, size: this.size },
      height: this.height,
      zIndex: this.zIndex,
      image: getImage(this.spriteName),
      normalMap: getImage(this.normalMapName),
      specularMap: getImage(this.specularMapName),
      repeat: this.spriteRepeat,
      mergeable: false,
      includeRegionShadow: this.includeRegionShadow,
      top: { image: getImage(this.topSpriteName) },
      reflectionSource: this.reflectionSource,
    });
  }

  protected sync() {
    this.whenChanged('structure', this.structure(), () => this.build());
    this.object.moveTo(this.position);
    this.mirror.sync(this.scene, this.object.front);
  }

  public serialise(): any {
    return {
      ...this.structure(),
      type: this.type,
      id: this.id,
      position: this.position,
      mirror: this.mirror.serialise(),
    };
  }

  public static deserialise(scene: EditorScene, data: any): WallActor {
    return new WallActor(scene, data);
  }
}
