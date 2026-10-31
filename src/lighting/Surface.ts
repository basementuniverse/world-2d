import { vec } from '@basementuniverse/vec';
import type { LightingSystem } from './LightingSystem';
import { SceneObject, SceneObjectOptions } from './SceneObject';
import { LightingImage, WallShadowLayer } from './types';
import {
  boundingRectangle,
  drawImageInRectangle,
  silhouette,
} from './utilities';

type DrawCallback = (context: CanvasRenderingContext2D) => void;

export type SurfaceOptions = SceneObjectOptions & {
  /**
   * Optional background colour
   */
  colour?: string;

  /**
   * The image for this surface
   */
  image?: LightingImage | null;

  /**
   * Optional normal map, used when the shader is enabled
   */
  normalMap?: LightingImage | null;

  /**
   * Optional specular map, used when the shader is enabled
   */
  specularMap?: LightingImage | null;

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
  public image: LightingImage | null = null;
  public normalMap: LightingImage | null = null;
  public specularMap: LightingImage | null = null;
  public zIndex: number = 0;
  public customDraw: NonNullable<SurfaceOptions['customDraw']> = {};

  /**
   * Should images be repeated across this surface, or stretched to fit?
   */
  public abstract repeat: boolean;

  /**
   * Draw the part of this surface that receives lighting
   */
  public abstract drawMask(context: CanvasRenderingContext2D): void;

  private fillBackground(context: CanvasRenderingContext2D, colour: string) {
    context.fillStyle = colour;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }

  protected drawImage(context: CanvasRenderingContext2D, image: LightingImage) {
    drawImageInRectangle(context, image, this, this.repeat);
  }

  public draw(context: CanvasRenderingContext2D) {
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
    image: LightingImage | null,
    defaultColour: string
  ) {
    context.save();

    if (image) {
      this.drawImage(context, image);
    } else {
      this.fillBackground(context, defaultColour);
    }

    context.restore();
  }

  public drawNormalMap(context: CanvasRenderingContext2D) {
    if (this.customDraw.normalMap) {
      this.customDraw.normalMap(context);
      return;
    }

    this.drawColourMap(
      context,
      this.normalMap,
      Surface.NORMAL_MAP_DEFAULT_COLOUR
    );
  }

  public drawSpecularMap(context: CanvasRenderingContext2D) {
    if (this.customDraw.specularMap) {
      this.customDraw.specularMap(context);
      return;
    }

    this.drawColourMap(
      context,
      this.specularMap,
      Surface.SPECULAR_MAP_DEFAULT_COLOUR
    );
  }

  protected fillMask(context: CanvasRenderingContext2D) {
    this.fillBackground(context, 'black');
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

  public drawMask(context: CanvasRenderingContext2D) {
    if (this.customDraw.mask) {
      this.customDraw.mask(context);
      return;
    }

    context.save();
    this.fillMask(context);
    context.restore();
  }
}

export type WallReceiverOptions = SurfaceOptions & {
  /**
   * Image used to mask this surface, it should be black with an alpha channel
   *
   * If this isn't set then we'll use the image's alpha channel
   */
  mask?: LightingImage | null;

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
  surfaceNormal?: vec;

  /**
   * Use a different layer for surfaces that might overlap
   */
  layer?: WallShadowLayer;
};

/**
 * A rectangle or sprite that receives wall shadows
 */
export class WallReceiver extends Surface<WallReceiverOptions> {
  public mask: LightingImage | null = null;
  public repeat = false;
  public receiveLight: boolean = true;
  public surfaceNormal: vec = vec();
  public layer: WallShadowLayer = WallShadowLayer.One;

  public constructor(lighting: LightingSystem, options: WallReceiverOptions) {
    super(lighting, options);
    this.set(options);
  }

  public drawMask(context: CanvasRenderingContext2D) {
    if (this.customDraw.mask) {
      this.customDraw.mask(context);
      return;
    }

    context.save();

    if (this.colour) {
      this.fillMask(context);
    }

    // A background colour already covers the whole surface
    const mask =
      this.mask ?? (!this.colour && this.image && silhouette(this.image));
    if (mask) {
      this.drawImage(context, mask);
    }

    context.restore();
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
      vec.eq(this.surfaceNormal, other.surfaceNormal) &&
      this.layer === other.layer
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
