import { Rectangle, Side } from './types';
import { rectangleToInterval } from './utilities';

const MERGE_MAX_ITERATIONS = 100;
const MERGE_ORDER = ['duplicate', Side.Bottom, Side.Right, Side.Top, Side.Left];

type Mergeable<T> = Rectangle & {
  canMerge(other: T): boolean;
  merge(other: T): T;
};

type Merge<T> = [T, T, Side | 'duplicate'];

/**
 * Find pairs of items that are adjacent to each other and can be merged
 */
function findMerges<T extends Mergeable<T>>(items: T[]): Merge<T>[] {
  const result: Merge<T>[] = [];

  for (let i = 0; i < items.length; i++) {
    const a = rectangleToInterval(items[i]);

    for (let j = i + 1; j < items.length; j++) {
      const b = rectangleToInterval(items[j]);

      if (!items[i].canMerge(items[j])) {
        continue;
      }

      // A and B are the same
      if (
        a.top === b.top &&
        a.bottom === b.bottom &&
        a.left === b.left &&
        a.right === b.right
      ) {
        result.push([items[i], items[j], 'duplicate']);
        continue;
      }

      // B is connected to the bottom edge of A
      if (a.bottom === b.top && a.left === b.left && a.right === b.right) {
        result.push([items[i], items[j], Side.Bottom]);
      }

      // B is connected to the top edge of A
      if (a.top === b.bottom && a.left === b.left && a.right === b.right) {
        result.push([items[i], items[j], Side.Top]);
      }

      // B is connected to the right edge of A
      if (a.right === b.left && a.top === b.top && a.bottom === b.bottom) {
        result.push([items[i], items[j], Side.Right]);
      }

      // B is connected to the left edge of A
      if (a.left === b.right && a.top === b.top && a.bottom === b.bottom) {
        result.push([items[i], items[j], Side.Left]);
      }
    }
  }

  return result;
}

/**
 * Merge items that are adjacent to each other and perfectly connected on one
 * side, or are exact duplicates of each other
 *
 * `onMerge` is called each time 2 items are replaced with a single item. If
 * the items were duplicates, the merged item is the first item
 */
export function merge<T extends Mergeable<T>>(
  items: T[],
  onMerge?: (merged: T, a: T, b: T) => void
): T[] {
  // Sort items by y-position then x-position
  let result = [...items].sort((a, b) => {
    if (a.position.y === b.position.y) {
      return a.position.x - b.position.x;
    }

    return a.position.y - b.position.y;
  });

  let i = 0;
  let merges: Merge<T>[];
  while (
    (merges = findMerges(result)).length > 0 &&
    i++ < MERGE_MAX_ITERATIONS
  ) {
    // Merge items in a specific order (e.g. items that connect on the bottom
    // face first, or items that are exact duplicates first, etc.)
    merges.sort(
      (a, b) => MERGE_ORDER.indexOf(a[2]) - MERGE_ORDER.indexOf(b[2])
    );

    for (const [a, b, side] of merges) {
      // Make sure the items still exist (they might have been merged and
      // removed in a previous iteration)
      if (!result.includes(a) || !result.includes(b)) {
        continue;
      }

      if (side === 'duplicate') {
        result = result.filter(item => item !== b);
        onMerge?.(a, a, b);
        continue;
      }

      const merged = a.merge(b);
      result = result.filter(item => item !== a && item !== b);
      result.push(merged);
      onMerge?.(merged, a, b);
    }
  }

  return result;
}
