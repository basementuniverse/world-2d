import { vec2 } from '@basementuniverse/vec';
import { boundingRectangle, drawImageInRectangle, SceneImage } from '../core';
import type { LightingSystem } from './LightingSystem';
import { SceneObject, SceneObjectOptions } from './SceneObject';
import { tintedImage } from './utilities';

type DrawCallback = (context: CanvasRenderingContext2D) => void;

export type SurfaceOptions = SceneObjectOptions & {
  /**
   * Optional background colour
   */
  colour?: string;

  /**
   * The image for this surface
   */
  image?: SceneImage | null;

  /**
   * Optional normal map, used when the shader is enabled
   */
  normalMap?: SceneImage | null;

  /**
   * Optional specular map, used when the shader is enabled
   */
  specularMap?: SceneImage | null;

  /**
   * Surfaces are drawn in order of z-index and then by their bottom edge
   */
  zIndex?: number;

  /**
   * Replace any of the default drawing steps for this surface, for objects
   * that aren't a single image
   */
  customDraw?: {
    image?: DrawCallback;
    mask?: DrawCallback;
    normalMap?: DrawCallback;
    specularMap?: DrawCallback;
  };
};

/**
 * An object that receives light and shadows
 */
export abstract class Surface<
  Options extends SurfaceOptions
> extends SceneObject<Options> {
  private static readonly NORMAL_MAP_DEFAULT_COLOUR = '#7f7fff';
  private static readonly SPECULAR_MAP_DEFAULT_COLOUR = 'black';

  public colour: string = '';
  public image: SceneImage | null = null;
  public normalMap: SceneImage | null = null;
  public specularMap: SceneImage | null = null;
  public zIndex: number = 0;
  public customDraw: NonNullable<SurfaceOptions['customDraw']> = {};

  /**
   * World y-position where this surface stops, or null to show all of it
   *
   * The rest of the surface is hidden and doesn't receive any lighting, this is
   * useful for something that's standing in water
   */
  public clipBottom: number | null = null;

  protected overlays: DrawCallback[] = [];

  private customMaskContext: CanvasRenderingContext2D | null = null;

  /**
   * Should images be repeated across this surface, or stretched to fit?
   */
  public abstract repeat: boolean;

  /**
   * Get the image whose alpha channel decides which parts of this surface
   * receive lighting
   *
   * Returns 'solid' if the whole surface receives lighting, or null if nothing
   * does (for example if the image hasn't loaded yet)
   */
  public abstract getMask(): SceneImage | 'solid' | null;

  private fillBackground(context: CanvasRenderingContext2D, colour: string) {
    context.fillStyle = colour;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }

  protected drawImage(context: CanvasRenderingContext2D, image: SceneImage) {
    drawImageInRectangle(context, image, this, this.repeat);
  }

  /**
   * Add something to be drawn on top of this surface, it's drawn straight after
   * the surface so that anything in front of the surface will cover it
   *
   * Returns a function which removes the overlay. Overlays don't change the
   * shape of the surface, and surfaces with overlays can't be merged
   */
  public addOverlay(draw: DrawCallback): () => void {
    this.overlays.push(draw);

    return () => {
      this.overlays = this.overlays.filter(overlay => overlay !== draw);
    };
  }

  public draw(context: CanvasRenderingContext2D) {
    this.drawContent(context);
    this.overlays.forEach(overlay => overlay(context));
  }

  /**
   * The height of the part of this surface above `clipBottom`
   */
  public get visibleHeight(): number {
    if (this.clipBottom === null) {
      return this.size.y;
    }

    const height = this.clipBottom - this.position.y;

    return Math.min(Math.max(height, 0), this.size.y);
  }

  /**
   * Call a drawing function, keeping it inside the visible part of this surface
   */
  private drawVisible(context: CanvasRenderingContext2D, draw: () => void) {
    if (this.clipBottom === null) {
      draw();
      return;
    }

    context.save();
    context.beginPath();
    context.rect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.visibleHeight
    );
    context.clip();
    draw();
    context.restore();
  }

  /**
   * Draw this surface without its overlays
   */
  public drawContent(context: CanvasRenderingContext2D) {
    this.drawVisible(context, () => this.drawWholeSurface(context));
  }

  /**
   * Draw the part of this surface that's hidden by `clipBottom`
   */
  public drawHidden(context: CanvasRenderingContext2D) {
    if (this.clipBottom === null) {
      return;
    }

    const { x, y } = this.position;
    const height = this.visibleHeight;

    context.save();
    context.beginPath();
    context.rect(x, y + height, this.size.x, this.size.y - height);
    context.clip();
    this.drawWholeSurface(context);
    context.restore();
  }

  private drawWholeSurface(context: CanvasRenderingContext2D) {
    if (this.customDraw.image) {
      this.customDraw.image(context);
      return;
    }

    context.save();

    if (this.colour) {
      this.fillBackground(context, this.colour);
    }

    if (this.image) {
      this.drawImage(context, this.image);
    }

    context.restore();
  }

  protected drawColourMap(
    context: CanvasRenderingContext2D,
    image: SceneImage | null,
    defaultColour: string
  ) {
    context.save();

    if (image) {
      this.drawImage(context, image);
    } else {
      this.fillShape(context, defaultColour);
    }

    context.restore();
  }

  /**
   * Fill the shape of this surface with a colour, so that a sprite doesn't
   * cover the normal map or specular map of whatever's behind it
   */
  private fillShape(context: CanvasRenderingContext2D, colour: string) {
    const mask = this.customDraw.mask ? 'solid' : this.getMask();

    if (mask === 'solid') {
      this.fillBackground(context, colour);
      return;
    }

    const shape = mask && tintedImage(mask, colour);
    if (shape) {
      this.drawImage(context, shape);
    }
  }

  public drawNormalMap(context: CanvasRenderingContext2D) {
    this.drawVisible(context, () => {
      if (this.customDraw.normalMap) {
        this.customDraw.normalMap(context);
        return;
      }

      this.drawColourMap(
        context,
        this.normalMap,
        Surface.NORMAL_MAP_DEFAULT_COLOUR
      );
    });
  }

  public drawSpecularMap(context: CanvasRenderingContext2D) {
    this.drawVisible(context, () => {
      if (this.customDraw.specularMap) {
        this.customDraw.specularMap(context);
        return;
      }

      this.drawColourMap(
        context,
        this.specularMap,
        Surface.SPECULAR_MAP_DEFAULT_COLOUR
      );
    });
  }

  /**
   * Render a custom mask, relative to the position of this surface
   */
  protected renderCustomMask(draw: DrawCallback): HTMLCanvasElement {
    this.customMaskContext ??= document
      .createElement('canvas')
      .getContext('2d')!;

    const context = this.customMaskContext;
    context.canvas.width = Math.ceil(this.size.x);
    context.canvas.height = Math.ceil(this.size.y);
    context.translate(-this.position.x, -this.position.y);
    draw(context);

    return context.canvas;
  }
}

export type GroundReceiverOptions = SurfaceOptions;

/**
 * A rectangle of ground that receives ground shadows
 *
 * Images are repeated across the rectangle
 */
export class GroundReceiver extends Surface<GroundReceiverOptions> {
  public repeat = true;

  public constructor(lighting: LightingSystem, options: GroundReceiverOptions) {
    super(lighting, options);
    this.set(options);
  }

  public getMask(): SceneImage | 'solid' | null {
    if (this.customDraw.mask) {
      return this.renderCustomMask(this.customDraw.mask);
    }

    return 'solid';
  }
}

export type WallReceiverOptions = SurfaceOptions & {
  /**
   * Image whose alpha channel decides which parts of this surface receive
   * lighting, the default is the alpha channel of `image`
   */
  mask?: SceneImage | null;

  /**
   * Should the image be repeated across the surface? Otherwise it will be
   * stretched to fit
   */
  repeat?: boolean;

  /**
   * Set this to false if this surface should only receive ambient light (this
   * is useful for the tops of walls)
   */
  receiveLight?: boolean;

  /**
   * Direction that this surface is facing, for ambient lighting
   */
  surfaceNormal?: vec2;

  /**
   * How far towards the light to look for shadows on the ground, in world
   * units. This should be enough to get out of the surface's own shadow
   */
  shadowBias?: number;

  /**
   * Should sprite and circle shadows climb this surface? This should be false
   * for anything that casts one of these shadows, otherwise it will be in its
   * own shadow
   */
  projectShadows?: boolean;
};

/**
 * A rectangle or sprite that receives wall shadows
 */
export class WallReceiver extends Surface<WallReceiverOptions> {
  public mask: SceneImage | null = null;
  public repeat = false;
  public receiveLight: boolean = true;
  public surfaceNormal: vec2 = vec2();
  public shadowBias: number = 1;
  public projectShadows: boolean = true;

  public constructor(lighting: LightingSystem, options: WallReceiverOptions) {
    super(lighting, options);
    this.set(options);
  }

  public getMask(): SceneImage | 'solid' | null {
    if (this.customDraw.mask) {
      return this.renderCustomMask(this.customDraw.mask);
    }

    // A background colour covers the whole surface
    if (this.colour) {
      return 'solid';
    }

    const mask = this.mask ?? this.image;

    return mask && mask.width > 0 && mask.height > 0 ? mask : null;
  }

  /**
   * Check if this surface can be merged with another surface
   */
  public canMerge(other: WallReceiver): boolean {
    const hasImages =
      this.image || this.mask || this.normalMap || this.specularMap;

    return (
      this.mergeable &&
      other.mergeable &&
      this.overlays.length === 0 &&
      other.overlays.length === 0 &&
      // Non-repeating images would stretch across the merged surface
      (this.repeat || !hasImages) &&
      this.zIndex === other.zIndex &&
      this.colour === other.colour &&
      this.image === other.image &&
      this.mask === other.mask &&
      this.normalMap === other.normalMap &&
      this.specularMap === other.specularMap &&
      this.repeat === other.repeat &&
      this.receiveLight === other.receiveLight &&
      vec2.eq(this.surfaceNormal, other.surfaceNormal) &&
      this.shadowBias === other.shadowBias &&
      this.projectShadows === other.projectShadows
    );
  }

  /**
   * Create a new surface that covers this surface and another surface
   */
  public merge(other: WallReceiver): WallReceiver {
    return new WallReceiver(this.lighting, {
      ...(this as WallReceiver),
      ...boundingRectangle(this, other),
    });
  }
}
