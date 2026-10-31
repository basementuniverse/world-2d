import { parseColor } from '@basementuniverse/parsecolor';
import { at, smoothstep, unlerp } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { CircleCaster, RegionCaster, SpriteCaster } from './Caster';
import type { LightingSystem } from './LightingSystem';
import {
  Colour,
  Line,
  PolygonVertices,
  Rectangle,
  Sector2d,
} from './types';
import {
  colourToString,
  lineIsFacing,
  polygon,
  rectanglesIntersect,
  rectangleToInterval,
  rectangleVertices,
  sector2d,
} from './utilities';

const HALF_PI = Math.PI / 2;

export type LightOptions = {
  /**
   * World position of this light
   */
  position: vec;

  /**
   * Radius of this light in world units
   */
  radius?: number;

  /**
   * Colour of this light
   */
  colour?: string;

  /**
   * The size of the fully-lit area at the center of this light, as a fraction
   * of the radius
   */
  coreRadius?: number;

  /**
   * Brightness of this light
   */
  intensity?: number;

  /**
   * Height of this light above the ground, this is used for shading normal maps
   * and specular maps
   */
  height?: number;

  /**
   * Should this light cast shadows?
   */
  castShadows?: boolean;
};

export class Light {
  private static readonly DEFAULT_RADIUS = 100;
  private static readonly DEFAULT_COLOUR = 'white';
  private static readonly DEFAULT_CORE_RADIUS = 0.2;
  private static readonly MAX_CORE_RADIUS = 0.99;
  private static readonly DEFAULT_INTENSITY = 1;
  private static readonly DEFAULT_HEIGHT = 48;
  private static readonly SHADOW_BUFFER = 20;

  private lightingSystem: LightingSystem;

  public position: vec;
  private _radius: number;
  private _colour: string;
  public colourObject: Colour;
  private _coreRadius: number;
  private _intensity: number;
  public height: number;
  public castShadows: boolean;

  public lightCanvas: HTMLCanvasElement;
  private lightContext: CanvasRenderingContext2D;

  /**
   * White where light reaches the ground, and black in the shadows of region
   * casters
   */
  public regionShadowCanvas: HTMLCanvasElement;
  private regionShadowContext: CanvasRenderingContext2D;

  /**
   * White where light reaches the ground, and black in the shadows of sprite
   * and circle casters
   */
  public objectShadowCanvas: HTMLCanvasElement;
  private objectShadowContext: CanvasRenderingContext2D;

  private dirty = true;

  public constructor(lightingSystem: LightingSystem, options: LightOptions) {
    this.lightingSystem = lightingSystem;

    this.position = vec.cpy(options.position);
    this._radius = options.radius ?? Light.DEFAULT_RADIUS;
    this._colour = options.colour ?? Light.DEFAULT_COLOUR;
    this._coreRadius = options.coreRadius ?? Light.DEFAULT_CORE_RADIUS;
    this._intensity = options.intensity ?? Light.DEFAULT_INTENSITY;
    this.height = options.height ?? Light.DEFAULT_HEIGHT;
    this.castShadows = options.castShadows ?? true;
    this.colourObject = parseColor(this._colour);

    this.lightCanvas = document.createElement('canvas');
    this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;
    this.lightContext = this.lightCanvas.getContext('2d')!;

    this.regionShadowCanvas = document.createElement('canvas');
    this.regionShadowContext = this.regionShadowCanvas.getContext('2d')!;

    this.objectShadowCanvas = document.createElement('canvas');
    this.objectShadowContext = this.objectShadowCanvas.getContext('2d')!;
  }

  /**
   * Bounding box for this light, including the offset wall lightmaps
   */
  public get bounds(): Rectangle {
    const wallLightingYOffset = this.lightingSystem.options.wallLightingYOffset;

    return {
      position: vec(
        this.position.x - this._radius,
        this.position.y - this._radius + Math.min(wallLightingYOffset, 0)
      ),
      size: vec(
        this._radius * 2,
        this._radius * 2 + Math.abs(wallLightingYOffset)
      ),
    };
  }

  public get radius() {
    return this._radius;
  }

  public set radius(value: number) {
    if (value !== this._radius) {
      this._radius = value;
      this.dirty = true;
    }
  }

  public get colour() {
    return this._colour;
  }

  public set colour(value: string) {
    if (value !== this._colour) {
      this._colour = value;
      this.colourObject = parseColor(value);
      this.dirty = true;
    }
  }

  public get coreRadius() {
    return this._coreRadius;
  }

  public set coreRadius(value: number) {
    if (value !== this._coreRadius) {
      this._coreRadius = value;
      this.dirty = true;
    }
  }

  public get intensity() {
    return this._intensity;
  }

  public set intensity(value: number) {
    if (value !== this._intensity) {
      this._intensity = value;
      this.dirty = true;
    }
  }

  /**
   * Move this light to a new world position
   */
  public moveTo(position: vec) {
    this.position = vec.cpy(position);
  }

  /**
   * Change some of the options for this light
   */
  public set(options: Partial<LightOptions>) {
    const {
      position,
      radius,
      colour,
      coreRadius,
      intensity,
      height,
      castShadows,
    } = options;

    this.position = vec.cpy(position ?? this.position);
    this.radius = radius ?? this.radius;
    this.colour = colour ?? this.colour;
    this.coreRadius = coreRadius ?? this.coreRadius;
    this.intensity = intensity ?? this.intensity;
    this.height = height ?? this.height;
    this.castShadows = castShadows ?? this.castShadows;
  }

  /**
   * Remove this light from the lighting system
   */
  public remove() {
    this.lightingSystem.remove(this);
  }

  public prepare(
    regionCasters: RegionCaster[],
    spriteCasters: SpriteCaster[],
    circleCasters: CircleCaster[]
  ) {
    // If the light settings have changed, we need to redraw the base lightmap
    if (this.dirty) {
      this.prepareLightMap();
    }

    this.resetShadowContext(this.regionShadowContext);
    this.resetShadowContext(this.objectShadowContext);

    if (this.castShadows) {
      const lightRectangle = this.bounds;

      this.prepareRegionShadows(lightRectangle, regionCasters);
      this.prepareSpriteShadows(lightRectangle, spriteCasters);
      this.prepareCircleShadows(lightRectangle, circleCasters);
    }
  }

  /**
   * Make sure a shadow canvas matches this light's size, and fill it with white
   * so that nothing is in shadow
   */
  private resetShadowContext(context: CanvasRenderingContext2D) {
    const size = Math.floor(this._radius * 2);
    if (context.canvas.width !== size) {
      context.canvas.width = context.canvas.height = size;
    }

    context.imageSmoothingEnabled =
      this.lightingSystem.options.imageSmoothingEnabled;
    context.fillStyle = 'white';
    context.fillRect(0, 0, size, size);
  }

  private prepareLightMap() {
    this.dirty = false;
    this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;

    this.lightContext.save();
    this.lightContext.fillStyle = 'black';
    this.lightContext.fillRect(
      0,
      0,
      this.lightCanvas.width,
      this.lightCanvas.height
    );

    const gradient = this.lightContext.createRadialGradient(
      this._radius,
      this._radius,
      this._radius * Math.min(this._coreRadius, Light.MAX_CORE_RADIUS),
      this._radius,
      this._radius,
      this._radius
    );
    gradient.addColorStop(
      0,
      colourToString({
        ...this.colourObject,
        r: this.colourObject.r * this._intensity,
        g: this.colourObject.g * this._intensity,
        b: this.colourObject.b * this._intensity,
      })
    );
    gradient.addColorStop(1, 'black');

    this.lightContext.fillStyle = gradient;
    this.lightContext.beginPath();
    this.lightContext.arc(
      this._radius,
      this._radius,
      this._radius,
      0,
      Math.PI * 2
    );
    this.lightContext.fill();

    this.lightContext.restore();
  }


  private prepareRegionShadows(
    lightRectangle: Rectangle,
    regionCasters: RegionCaster[]
  ) {
    const context = this.regionShadowContext;

    context.save();
    context.fillStyle = 'black';
    this.lightingSystem.setupSoftShadows(context);
    context.translate(
      -this.position.x + this._radius,
      -this.position.y + this._radius
    );

    for (const caster of regionCasters) {
      // Check if this caster is in range of the light
      if (rectanglesIntersect(lightRectangle, caster)) {
        polygon(
          context,
          ...this.prepareRegionShadow(caster, caster.includeRegionShadow)
        );
        context.fill();
      }
    }

    context.restore();
  }

  private prepareSpriteShadows(
    lightRectangle: Rectangle,
    spriteCasters: SpriteCaster[]
  ) {
    const context = this.objectShadowContext;

    context.save();
    this.lightingSystem.setupSoftShadows(context);
    context.translate(this._radius, this._radius);

    for (const caster of spriteCasters) {
      // Check if this caster is in range of the light
      if (rectanglesIntersect(lightRectangle, caster)) {
        const shadowSprite = caster.getShadow();

        // If the shadow sprite is missing for this caster then it doesn't
        // cast a shadow
        if (!shadowSprite) {
          continue;
        }

        const shadowOrigin = vec.add(
          caster.position,
          vec(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y)
        );
        const shadowLength = smoothstep(
          caster.minShadowLength,
          caster.maxShadowLength ?? this.radius,
          unlerp(0, this.radius, vec.len(vec.sub(shadowOrigin, this.position)))
        );
        const shadowEdge = vec.mul(
          vec.nor(vec.sub(shadowOrigin, this.position)),
          shadowLength
        );
        const shadowEdgeLength = vec.len(shadowEdge);
        const shadowAngle = vec.rad(shadowEdge) + HALF_PI;

        context.save();
        context.translate(
          shadowOrigin.x - this.position.x,
          shadowOrigin.y - this.position.y
        );
        context.rotate(shadowAngle);
        context.drawImage(
          shadowSprite,
          -caster.size.x * caster.offset.x,
          -shadowEdgeLength * caster.offset.y,
          caster.size.x,
          shadowEdgeLength
        );
        context.restore();
      }
    }

    context.restore();
  }

  private prepareCircleShadows(
    lightRectangle: Rectangle,
    circleCasters: CircleCaster[]
  ) {
    const context = this.objectShadowContext;

    context.save();
    context.fillStyle = 'black';
    this.lightingSystem.setupSoftShadows(context);
    context.translate(this._radius, this._radius);

    for (const caster of circleCasters) {
      // Check if this caster is in range of the light
      if (rectanglesIntersect(lightRectangle, caster)) {
        const shadowOrigin = vec.add(
          caster.position,
          vec(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y)
        );
        const shadowDistance = smoothstep(
          caster.minShadowDistance,
          caster.maxShadowDistance ?? this.radius,
          unlerp(0, this.radius, vec.len(vec.sub(shadowOrigin, this.position)))
        );
        const shadowPosition = vec.mul(
          vec.nor(vec.sub(shadowOrigin, this.position)),
          shadowDistance
        );
        const shadowSize = vec.mul(caster.size, 0.5);

        context.save();
        context.globalAlpha = caster.alpha;
        context.translate(
          shadowOrigin.x - this.position.x,
          shadowOrigin.y - this.position.y
        );
        context.beginPath();
        context.ellipse(
          shadowPosition.x,
          shadowPosition.y,
          shadowSize.x,
          shadowSize.y,
          0,
          0,
          Math.PI * 2
        );
        context.fill();
        context.restore();
      }
    }

    context.restore();
  }

  private prepareRegionShadow(
    shadowCasterRectangle: Rectangle,
    includeCasterRegion: boolean = false
  ): PolygonVertices {
    const lightPosition = vec.cpy(this.position);
    const lightRadius = this._radius;
    const shadowCasterInterval = rectangleToInterval(shadowCasterRectangle);
    const shadowCasterVertices = rectangleVertices(shadowCasterRectangle);
    const shadowEdges: Line[] = [];

    for (let i = 0; i < shadowCasterVertices.length; i++) {
      const previous = at(shadowCasterVertices, i - 1);
      const current = shadowCasterVertices[i];

      if (!lineIsFacing({ start: previous, end: current }, this.position)) {
        const vertex1 = vec.sub(previous, lightPosition);
        const vertex2 = vec.sub(current, lightPosition);
        shadowEdges.push(
          {
            start: previous,
            end: vec.add(
              previous,
              vec.mul(
                vec.nor(vertex1),
                Math.max(
                  Light.SHADOW_BUFFER,
                  lightRadius + Light.SHADOW_BUFFER - vec.len(vertex1)
                )
              )
            ),
          },
          {
            start: current,
            end: vec.add(
              current,
              vec.mul(
                vec.nor(vertex2),
                Math.max(
                  Light.SHADOW_BUFFER,
                  lightRadius + Light.SHADOW_BUFFER - vec.len(vertex2)
                )
              )
            ),
          }
        );
      }
    }

    const shadowPolygon: PolygonVertices = [];
    switch (sector2d(this.position, shadowCasterInterval)) {
      case Sector2d.TopLeft:
        if (shadowEdges.length !== 4) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowCasterRectangle.position,
            shadowEdges[0].start,
            shadowEdges[0].end,
            vec(shadowEdges[0].end.x, shadowEdges[3].end.y),
            shadowEdges[3].end,
            shadowEdges[3].start
          );
        } else {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            vec(shadowEdges[0].end.x, shadowEdges[3].end.y),
            shadowEdges[3].end,
            shadowEdges[3].start,
            shadowEdges[2].start
          );
        }
        break;

      case Sector2d.Top:
        if (shadowEdges.length !== 6) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowEdges[1].start,
            shadowEdges[2].start,
            shadowEdges[2].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[2].end, shadowEdges[2].start)),
                vec.rad(vec.sub(shadowEdges[1].end, shadowEdges[1].start)),
                false
              );
            }
          );
        } else {
          shadowPolygon.push(
            shadowEdges[2].start,
            shadowEdges[2].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[2].end, shadowEdges[2].start)),
                vec.rad(vec.sub(shadowEdges[1].end, shadowEdges[1].start)),
                false
              );
            },
            shadowEdges[1].start,
            shadowEdges[5].start,
            shadowEdges[4].start
          );
        }
        break;

      case Sector2d.TopRight:
        if (shadowEdges.length !== 4) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowEdges[1].start,
            vec(
              shadowCasterRectangle.position.x + shadowCasterRectangle.size.x,
              shadowCasterRectangle.position.y
            ),
            shadowEdges[2].start,
            shadowEdges[2].end,
            vec(shadowEdges[1].end.x, shadowEdges[2].end.y),
            shadowEdges[1].end
          );
        } else {
          shadowPolygon.push(
            shadowEdges[2].start,
            shadowEdges[2].end,
            vec(shadowEdges[1].end.x, shadowEdges[2].end.y),
            shadowEdges[1].end,
            shadowEdges[1].start,
            shadowEdges[3].start
          );
        }
        break;

      case Sector2d.Left:
        if (shadowEdges.length !== 6) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[0].end, shadowEdges[0].start)),
                vec.rad(vec.sub(shadowEdges[5].end, shadowEdges[5].start)),
                false
              );
            },
            shadowEdges[5].start
          );
        } else {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[0].end, shadowEdges[0].start)),
                vec.rad(vec.sub(shadowEdges[5].end, shadowEdges[5].start)),
                false
              );
            },
            shadowEdges[5].start,
            shadowEdges[4].start,
            shadowEdges[2].start
          );
        }
        break;

      case Sector2d.Inside:
        break;

      case Sector2d.Right:
        if (shadowEdges.length !== 6) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowEdges[3].start,
            shadowEdges[4].start,
            shadowEdges[4].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[4].end, shadowEdges[4].start)),
                vec.rad(vec.sub(shadowEdges[3].end, shadowEdges[3].start)),
                false
              );
            }
          );
        } else {
          shadowPolygon.push(
            shadowEdges[4].start,
            shadowEdges[4].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[4].end, shadowEdges[4].start)),
                vec.rad(vec.sub(shadowEdges[3].end, shadowEdges[3].start)),
                false
              );
            },
            shadowEdges[3].start,
            shadowEdges[2].start,
            shadowEdges[5].start
          );
        }
        break;

      case Sector2d.BottomLeft:
        if (shadowEdges.length !== 4) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            vec(shadowEdges[3].end.x, shadowEdges[0].end.y),
            shadowEdges[3].end,
            shadowEdges[3].start,
            vec(
              shadowCasterRectangle.position.x,
              shadowCasterRectangle.position.y + shadowCasterRectangle.size.y
            )
          );
        } else {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            vec(shadowEdges[3].end.x, shadowEdges[0].end.y),
            shadowEdges[3].end,
            shadowEdges[3].start,
            shadowEdges[2].start
          );
        }
        break;

      case Sector2d.Bottom:
        if (shadowEdges.length !== 6) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[0].end, shadowEdges[0].start)),
                vec.rad(vec.sub(shadowEdges[5].end, shadowEdges[5].start)),
                false
              );
            },
            shadowEdges[5].start
          );
        } else {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            (context: CanvasRenderingContext2D) => {
              context.arc(
                lightPosition.x,
                lightPosition.y,
                lightRadius + Light.SHADOW_BUFFER,
                vec.rad(vec.sub(shadowEdges[0].end, shadowEdges[0].start)),
                vec.rad(vec.sub(shadowEdges[5].end, shadowEdges[5].start)),
                false
              );
            },
            shadowEdges[5].start,
            shadowEdges[4].start,
            shadowEdges[2].start
          );
        }
        break;

      case Sector2d.BottomRight:
        if (shadowEdges.length !== 4) {
          break;
        }

        if (includeCasterRegion) {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            vec(shadowEdges[0].end.x, shadowEdges[3].end.y),
            shadowEdges[3].end,
            shadowEdges[3].start,
            vec.add(shadowCasterRectangle.position, shadowCasterRectangle.size)
          );
        } else {
          shadowPolygon.push(
            shadowEdges[0].start,
            shadowEdges[0].end,
            vec(shadowEdges[0].end.x, shadowEdges[3].end.y),
            shadowEdges[3].end,
            shadowEdges[3].start,
            shadowEdges[2].start
          );
        }
        break;
    }

    return shadowPolygon;
  }
}
