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
export declare abstract class SceneObject<Options extends SceneObjectOptions> {
    protected lighting: LightingSystem;
    position: vec;
    size: vec;
    mergeable: boolean;
    constructor(lighting: LightingSystem, options: Options);
    /**
     * Move this object to a new world position
     */
    moveTo(position: vec): void;
    /**
     * Change the size of this object
     */
    resize(size: vec): void;
    /**
     * Change some of the options for this object
     */
    set(options: Partial<Options>): void;
    /**
     * Remove this object from the lighting system
     */
    remove(): void;
}
