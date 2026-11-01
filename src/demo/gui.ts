import ContentManager from '@basementuniverse/content-manager';
import { parseColor } from '@basementuniverse/parsecolor';
import content from '../../content/content.json';
import { colourToString } from '../core';

const MAP_SUFFIX = /-(normal|specular|mask)$/;

/**
 * Find an image by name, this is null if there isn't an image with that name
 */
export function getImage(name: string): HTMLImageElement | null {
  return ContentManager.get<HTMLImageElement>(name) ?? null;
}

/**
 * Add a dropdown for choosing an image from the content list
 *
 * Use a suffix like `-normal` to only show that type of map, otherwise this
 * shows all of the images that aren't maps
 */
export function addImage(
  folder: dat.GUI,
  object: any,
  property: string,
  suffix: string = ''
): dat.GUIController {
  const names = content
    .map(({ name }) => name)
    .filter(name => (suffix ? name.endsWith(suffix) : !MAP_SUFFIX.test(name)));

  return folder.add(object, property, {
    none: '',
    ...Object.fromEntries(names.map(name => [name, name])),
  });
}

function hexColour(colour: string): string {
  const { r, g, b } = parseColor(colour);

  return `#${[r, g, b]
    .map(component => Math.round(component).toString(16).padStart(2, '0'))
    .join('')}`;
}

/**
 * Add a colour picker for a property that contains any CSS colour
 *
 * dat.GUI can't read every CSS colour, so the picker uses a copy of the colour
 * in hex format. This also means that the alpha of the original colour is kept
 */
export function addColour(
  folder: dat.GUI,
  object: any,
  property: string
): dat.GUIController {
  const hex = {
    get value(): string {
      return hexColour(object[property]);
    },
    set value(colour: string) {
      const { a } = parseColor(object[property]);

      object[property] =
        a > 0 && a < 1 ? colourToString({ ...parseColor(colour), a }) : colour;
    },
  };

  return folder.addColor(hex, 'value').name(property);
}

/**
 * Remove everything from a folder so that it can be used for something else
 *
 * Controllers that have called `listen()` keep updating after they've been
 * removed, so anything in this folder should be updated with `updateDisplay()`
 */
export function clearFolder(folder: dat.GUI) {
  [...folder.__controllers].forEach(controller => folder.remove(controller));
  Object.values(folder.__folders).forEach(child => folder.removeFolder(child));
}
