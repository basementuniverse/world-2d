import InputManager from '@basementuniverse/input-manager';
import { vec2 } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { Rectangle, spriteBounds } from '../../core';
import { Actor } from '../../lighting';
import { getImage } from '../gui';
import { Hero } from '../Hero';
import { EditorScene } from '../scenes/EditorScene';
import { EditorActor } from './EditorActor';

/**
 * A character that can be moved around with the keyboard, for seeing how the
 * scene reacts to something moving through it
 *
 * `position` is the position of the character's sprite
 */
export class CharacterActor extends EditorActor {
  public readonly type = 'Character';
  public object: Actor;

  protected readonly debugColour = '#b5f';
  protected readonly debugHoverColour = '#d8f';
  protected readonly minSize = vec2();
  protected readonly maxSize = vec2();

  public reflectionSource: boolean = true;
  public submersible: boolean = true;
  public maxDepth: number = 22;

  private hero: Hero;

  public constructor(scene: EditorScene, data: Partial<CharacterActor> = {}) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.hero = new Hero(getImage('character-spritesheet')!, this.position);
    this.sync();
  }

  public get bounds(): Rectangle {
    return spriteBounds(this.hero.sprite);
  }

  public createControls(folder: dat.GUI) {
    folder.add(this.position, 'x').step(1);
    folder.add(this.position, 'y').step(1);
    folder.add(this, 'reflectionSource');
    folder.add(this, 'submersible');
    folder.add(this, 'maxDepth', 0, 64, 1);
  }

  private structure() {
    return {
      reflectionSource: this.reflectionSource,
      submersible: this.submersible,
      maxDepth: this.maxDepth,
    };
  }

  private build() {
    this.object?.remove();
    this.object = this.scene.world.addActor({
      sprite: this.hero.sprite,
      shadow: 'none',
      reflectionSource: this.reflectionSource && Hero.REFLECTION,
      submersible: this.submersible && {
        maxDepth: this.maxDepth,
        footOffset: Hero.FOOT_OFFSET,
      },
    });
  }

  protected sync() {
    this.hero.sprite.position = vec2.cpy(this.position);
    this.whenChanged('structure', this.structure(), () => this.build());
  }

  public update(dt: number) {
    // Holding shift makes the movement keys create things instead
    this.hero.update(dt, !InputManager.keyDown('ShiftLeft'));

    this.position.x = this.hero.sprite.position.x;
    this.position.y = this.hero.sprite.position.y;

    super.update(dt);
  }

  public serialise(): any {
    return {
      ...this.structure(),
      type: this.type,
      id: this.id,
      position: this.position,
    };
  }

  public static deserialise(scene: EditorScene, data: any): CharacterActor {
    return new CharacterActor(scene, data);
  }
}
