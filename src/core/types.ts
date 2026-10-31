import type Camera from '@basementuniverse/camera';
import { vec2 } from '@basementuniverse/vec';

/**
 * An image that can be drawn onto a canvas
 */
export type SceneImage = HTMLImageElement | HTMLCanvasElement;

/**
 * The parts of a @basementuniverse/camera that are used when rendering a scene
 */
export type SceneCamera = Pick<
  Camera,
  'bounds' | 'worldToScreen' | 'setTransforms'
>;

/**
 * Everything that the systems in a world need for rendering a frame
 */
export type Frame = {
  context: CanvasRenderingContext2D;
  camera: SceneCamera;
  screen: vec2;
};

export type Colour = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type Interval1d = {
  start: number;
  end: number;
};

export type Interval2d = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};

export type Rectangle = {
  position: vec2;
  size: vec2;
};
