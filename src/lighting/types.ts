import { vec } from '@basementuniverse/vec';

/**
 * An image that can be drawn onto a canvas
 */
export type LightingImage = HTMLImageElement | HTMLCanvasElement;

/**
 * The parts of a camera that are used by the lighting system, this is
 * compatible with @basementuniverse/camera
 */
export type LightingCamera = {
  bounds: Interval2d;
  worldToScreen(position: vec): vec;
  setTransforms(context: CanvasRenderingContext2D): void;
};

export type Colour = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type Line = {
  start: vec;
  end: vec;
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

export enum Sector1d {
  Before = 'before',
  Inside = 'inside',
  After = 'after',
}

export enum Sector2d {
  TopLeft = 'top-left',
  Top = 'top',
  TopRight = 'top-right',
  Left = 'left',
  Inside = 'inside',
  Right = 'right',
  BottomLeft = 'bottom-left',
  Bottom = 'bottom',
  BottomRight = 'bottom-right',
}

export type Rectangle = {
  position: vec;
  size: vec;
};

export type PolygonVertices = (
  | vec
  | ((context: CanvasRenderingContext2D) => void)
)[];

export enum Side {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export enum WallShadowLayer {
  One = 'one',
  Two = 'two',
}
