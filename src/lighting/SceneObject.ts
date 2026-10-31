import { vec } from '@basementuniverse/vec';
import type { LightingSystem } from './LightingSystem';

export type SceneObjectOptions = {
  /**
   * World position of the top-left corner of this object
   */
  position: vec;

  /**
   * Size of this object in world units
   */
  size: vec;

  /**
   * Can this object be merged with its neighbours by
   * `LightingSystem.optimise()`?
   */
  mergeable?: boolean;
};

/**
 * Something that has been registered with a `LightingSystem`
 *
 * These are returned from the `LightingSystem.add...()` methods and are used
 * to change or remove the object later on
 */
export abstract class SceneObject<Options extends SceneObjectOptions> {
  protected lighting: LightingSystem;

  public position: vec;
  public size: vec;
  public mergeable: boolean = true;

  public constructor(lighting: LightingSystem, options: Options) {
    this.lighting = lighting;
    this.position = vec.cpy(options.position);
    this.size = vec.cpy(options.size);
  }

  /**
   * Move this object to a new world position
   */
  public moveTo(position: vec) {
    this.position = vec.cpy(position);
  }

  /**
   * Change the size of this object
   */
  public resize(size: vec) {
    this.size = vec.cpy(size);
  }

  /**
   * Change some of the options for this object
   */
  public set(options: Partial<Options>) {
    for (const [key, value] of Object.entries(options)) {
      if (value !== undefined) {
        (this as any)[key] = value;
      }
    }

    this.position = vec.cpy(this.position);
    this.size = vec.cpy(this.size);
  }

  /**
   * Remove this object from the lighting system
   */
  public remove() {
    this.lighting.remove(this);
  }
}
