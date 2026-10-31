import { vec2 } from '@basementuniverse/vec';
import type { LightingSystem } from './LightingSystem';

export type SceneObjectOptions = {
  /**
   * World position of the top-left corner of this object
   */
  position: vec2;

  /**
   * Size of this object in world units
   */
  size: vec2;

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

  public position: vec2;
  public size: vec2;
  public mergeable: boolean = true;

  private removeCallbacks: (() => void)[] = [];

  public constructor(lighting: LightingSystem, options: Options) {
    this.lighting = lighting;
    this.position = vec2.cpy(options.position);
    this.size = vec2.cpy(options.size);
  }

  /**
   * Move this object to a new world position
   */
  public moveTo(position: vec2) {
    this.position = vec2.cpy(position);
  }

  /**
   * Change the size of this object
   */
  public resize(size: vec2) {
    this.size = vec2.cpy(size);
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

    this.position = vec2.cpy(this.position);
    this.size = vec2.cpy(this.size);
  }

  /**
   * Add a function to be called when this object is removed
   */
  public onRemove(callback: () => void) {
    this.removeCallbacks.push(callback);
  }

  /**
   * Remove this object from the lighting system
   */
  public remove() {
    this.lighting.remove(this);
    this.removeCallbacks.forEach(callback => callback());
  }
}
