import { Rectangle } from './types';
type Mergeable<T> = Rectangle & {
    canMerge(other: T): boolean;
    merge(other: T): T;
};
/**
 * Merge items that are adjacent to each other and perfectly connected on one
 * side, or are exact duplicates of each other
 *
 * `onMerge` is called each time 2 items are replaced with a single item. If
 * the items were duplicates, the merged item is the first item
 */
export declare function merge<T extends Mergeable<T>>(items: T[], onMerge?: (merged: T, a: T, b: T) => void): T[];
export {};
