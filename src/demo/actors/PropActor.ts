import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { Actor, ActorShadow } from '../../lighting';
import { getImage } from '../gui';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';

/**
 * An object that stands on the ground, it can appear in reflections and stand
 * in water
 *
 * The normal map, specular map, and mask are found using the name of the image
 */
export class PropActor extends EditorActor {
  private static readonly IMAGES = [
    'anvil',
    'character',
    'sign',
    'urn',
    'well',
  ];
  private static readonly SHADOWS = ['sprite', 'circle', 'none'];

  public readonly type = 'Prop';
  public object: Actor;

  protected readonly debugColour = '#b5f';
  protected readonly debugHoverColour = '#d8f';
  protected readonly minSize = vec2(4, 4);
  protected readonly maxSize = vec2(256, 256);

  public spriteName: string = 'anvil';
  public shadow: ActorShadow = 'sprite';
  public reflection = {
    enabled: true,
    floor: true,
    wall: true,
    footOffset: 0,
    floorOffset: 0,
    floorFade: 0,
  };
  public submersible = {
    enabled: true,
    maxDepth: 14,
    footOffset: 0,
    ripples: false,
  };

  public constructor(scene: EditorScene, data: Partial<PropActor> = {}) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    if (data.size === undefined) {
      this.useImageSize();
    }

    this.sync();
  }

  private useImageSize() {
    const image = getImage(this.spriteName);

    if (image) {
      this.size.x = image.width;
      this.size.y = image.height;
    }
  }

  public createControls(folder: dat.GUI) {
    super.createControls(folder);

    folder.add(this, 'zIndex');
    folder
      .add(this, 'spriteName', PropActor.IMAGES)
      .onChange(() => this.useImageSize());
    folder.add(this, 'shadow', PropActor.SHADOWS);

    const reflection = folder.addFolder('Reflection');
    reflection.add(this.reflection, 'enabled');
    reflection.add(this.reflection, 'floor').name('in floors');
    reflection.add(this.reflection, 'wall').name('in walls');
    reflection.add(this.reflection, 'footOffset', -32, 32, 1);
    reflection.add(this.reflection, 'floorOffset', -32, 32, 1);
    reflection.add(this.reflection, 'floorFade', 0, 32, 1);
    reflection.open();

    const water = folder.addFolder('Water');
    water.add(this.submersible, 'enabled').name('submersible');
    water.add(this.submersible, 'maxDepth', 0, 64, 1);
    water.add(this.submersible, 'footOffset', 0, 32, 1);
    water.add(this.submersible, 'ripples');
    water.open();
  }

  /**
   * The options that are used to create the actor, except for its position
   */
  private structure() {
    return {
      size: this.size,
      zIndex: this.zIndex,
      spriteName: this.spriteName,
      shadow: this.shadow,
      reflection: this.reflection,
      submersible: this.submersible,
    };
  }

  private build() {
    const { spriteName, reflection, submersible } = this;

    this.object?.remove();
    this.object = this.scene.world.addActor({
      position: this.position,
      size: this.size,
      zIndex: this.zIndex,
      image: getImage(spriteName),
      mask: getImage(`${spriteName}-mask`),
      normalMap: getImage(`${spriteName}-normal`),
      specularMap: getImage(`${spriteName}-specular`),
      shadow: this.shadow,
      reflectionSource: reflection.enabled && {
        footOffset: reflection.footOffset,
        floorOffset: reflection.floorOffset,
        floorFade: reflection.floorFade,
        floor: reflection.floor,
        wall: reflection.wall,
      },
      submersible: submersible.enabled && {
        maxDepth: submersible.maxDepth,
        footOffset: submersible.footOffset,
        ripples: submersible.ripples,
      },
    });
  }

  protected sync() {
    this.whenChanged('structure', this.structure(), () => this.build());
    this.object.moveTo(this.position);
  }

  public serialise(): any {
    return {
      ...this.structure(),
      type: this.type,
      id: this.id,
      position: this.position,
    };
  }

  public static deserialise(scene: EditorScene, data: any): PropActor {
    return new PropActor(scene, data);
  }
}
