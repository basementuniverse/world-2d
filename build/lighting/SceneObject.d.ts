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
export declare abstract class SceneObject<Options extends SceneObjectOptions> {
    protected lighting: LightingSystem;
    position: vec2;
    size: vec2;
    mergeable: boolean;
    private removeCallbacks;
    constructor(lighting: LightingSystem, options: Options);
    /**
     * Move this object to a new world position
     */
    moveTo(position: vec2): void;
    /**
     * Change the size of this object
     */
    resize(size: vec2): void;
    /**
     * Change some of the options for this object
     */
    set(options: Partial<Options>): void;
    /**
     * Add a function to be called when this object is removed
     */
    onRemove(callback: () => void): void;
    /**
     * Remove this object from the lighting system
     */
    remove(): void;
}
