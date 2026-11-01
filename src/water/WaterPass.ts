import { parseColor } from '@basementuniverse/parsecolor';
import { vec2 } from '@basementuniverse/vec';
import { Frame, GlContext, GlProgram, SceneImage } from '../core';
import type { WaterRegion } from './WaterRegion';
import waterShader = require('./shaders/water.frag.glsl');

enum TextureUnit {
  Scene,
  ReflectionMap,
  Mask,
  DepthMap,
  FlowMap,
  WaveMap,
  NoiseMap,
  RippleMap,
}

/**
 * What the shader should output, these values are also in the shader
 */
export enum WaterOutput {
  Colour = 0,
  Normal = 1,
  Specular = 2,
}

type RegionTextures = {
  depth: WebGLTexture;
  depthVersion: number;
  flow: WebGLTexture;
  flowVersion: number;
  ripples: WebGLTexture;
  ripplesUploaded: boolean;
  waves: WebGLTexture | null;
};

/**
 * Renders water using a shared WebGL context
 */
export class WaterPass {
  private static readonly WAVE_MAP_SIZE = 256;
  private static readonly WAVE_COUNT = 32;
  private static readonly WAVE_MAX_FREQUENCY = 14;
  private static readonly NOISE_WAVE_COUNT = 8;
  private static readonly NOISE_MAX_FREQUENCY = 3;
  private static readonly FLOW_CYCLE = 2;

  private static waveMapData: Uint8Array | null = null;

  /**
   * Make a tiling normal map with noise in the blue channel, the normal map is
   * made from sine waves that repeat a whole number of times across the texture
   * so that it tiles perfectly
   */
  private static getWaveMapData(): Uint8Array {
    if (WaterPass.waveMapData) {
      return WaterPass.waveMapData;
    }

    const size = WaterPass.WAVE_MAP_SIZE;
    const data = new Uint8Array(size * size * 4);
    const angle = (Math.PI * 2) / size;

    // The textures should be the same every time, so this uses a small random
    // number generator instead of Math.random()
    let seed = 12345;
    const random = () => {
      seed = (seed * 16807) % 2147483647;

      return seed / 2147483647;
    };

    const createWaves = (count: number, maxFrequency: number) =>
      Array.from({ length: count }, () => {
        const frequency = () =>
          Math.round((random() * 2 - 1) * maxFrequency) || 1;
        const x = frequency();
        const y = frequency();

        return {
          x,
          y,
          phase: random() * Math.PI * 2,
          amplitude: 1 / Math.hypot(x, y),
        };
      });

    const waves = createWaves(
      WaterPass.WAVE_COUNT,
      WaterPass.WAVE_MAX_FREQUENCY
    );
    const noise = createWaves(
      WaterPass.NOISE_WAVE_COUNT,
      WaterPass.NOISE_MAX_FREQUENCY
    );

    const slopes = new Float32Array(size * size * 2);
    const heights = new Float32Array(size * size);
    let largestSlope = 0;
    let largestHeight = 0;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = x + y * size;

        for (const wave of waves) {
          const value = Math.cos(
            (wave.x * x + wave.y * y) * angle + wave.phase
          );

          slopes[i * 2] += wave.amplitude * wave.x * value;
          slopes[i * 2 + 1] += wave.amplitude * wave.y * value;
        }

        for (const wave of noise) {
          heights[i] +=
            wave.amplitude *
            Math.sin((wave.x * x + wave.y * y) * angle + wave.phase);
        }

        largestSlope = Math.max(
          largestSlope,
          Math.abs(slopes[i * 2]),
          Math.abs(slopes[i * 2 + 1])
        );
        largestHeight = Math.max(largestHeight, Math.abs(heights[i]));
      }
    }

    for (let i = 0; i < size * size; i++) {
      data[i * 4] = (slopes[i * 2] / largestSlope) * 127.5 + 127.5;
      data[i * 4 + 1] = (slopes[i * 2 + 1] / largestSlope) * 127.5 + 127.5;
      data[i * 4 + 2] = (heights[i] / largestHeight) * 127.5 + 127.5;
      data[i * 4 + 3] = 255;
    }

    WaterPass.waveMapData = data;

    return data;
  }

  private context: GlContext;
  private initialised = false;

  private program: GlProgram;
  private sceneTexture: WebGLTexture;
  private reflectionTexture: WebGLTexture;
  private waveTexture: WebGLTexture;
  private regionTextures = new Map<WaterRegion, RegionTextures>();

  public constructor(context: GlContext) {
    this.context = context;
    this.context.onInitialise(gl => this.initialise(gl));
  }

  /**
   * The output of the most recent pass
   */
  public get canvas(): HTMLCanvasElement {
    return this.context.canvas;
  }

  /**
   * Check if the shaders can be used
   */
  public get available(): boolean {
    return this.initialised && this.context.available;
  }

  private initialise(gl: WebGLRenderingContext) {
    this.initialised = false;

    try {
      this.program = this.context.createProgram(waterShader);
    } catch (e) {
      console.error('Water has been disabled', e);
      return;
    }

    this.sceneTexture = gl.createTexture()!;
    this.reflectionTexture = gl.createTexture()!;
    this.waveTexture = gl.createTexture()!;
    this.regionTextures = new Map();

    this.context.uploadData(
      TextureUnit.WaveMap,
      this.waveTexture,
      vec2(WaterPass.WAVE_MAP_SIZE),
      WaterPass.getWaveMapData(),
      gl.LINEAR,
      true
    );

    this.initialised = true;
  }

  /**
   * Forget about a region's textures
   */
  public release(region: WaterRegion) {
    const textures = this.regionTextures.get(region);
    if (!textures) {
      return;
    }

    const { gl } = this.context;
    gl?.deleteTexture(textures.depth);
    gl?.deleteTexture(textures.flow);
    gl?.deleteTexture(textures.ripples);
    if (textures.waves) {
      gl?.deleteTexture(textures.waves);
    }

    this.regionTextures.delete(region);
  }

  private getTextures(
    gl: WebGLRenderingContext,
    region: WaterRegion
  ): RegionTextures {
    let textures = this.regionTextures.get(region);
    if (!textures) {
      textures = {
        depth: gl.createTexture()!,
        depthVersion: -1,
        flow: gl.createTexture()!,
        flowVersion: -1,
        ripples: gl.createTexture()!,
        ripplesUploaded: false,
        waves: region.normalMap ? gl.createTexture()! : null,
      };
      this.regionTextures.set(region, textures);

      if (region.normalMap && textures.waves) {
        this.context.upload(
          TextureUnit.WaveMap,
          textures.waves,
          this.powerOfTwoImage(region.normalMap),
          gl.LINEAR,
          true
        );
      }
    }

    return textures;
  }

  /**
   * Textures can only tile if their size is a power of 2
   */
  private powerOfTwoImage(image: SceneImage): SceneImage {
    const isPowerOfTwo = (n: number) => (n & (n - 1)) === 0;
    if (isPowerOfTwo(image.width) && isPowerOfTwo(image.height)) {
      return image;
    }

    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = WaterPass.WAVE_MAP_SIZE;
    canvas
      .getContext('2d')!
      .drawImage(image, 0, 0, canvas.width, canvas.height);

    return canvas;
  }

  /**
   * Make sure a region's textures are up to date and bind them
   */
  private bindRegion(gl: WebGLRenderingContext, region: WaterRegion) {
    const textures = this.getTextures(gl, region);
    const { depthPixels, flowPixels, ripples } = region;

    if (textures.depthVersion === depthPixels.version) {
      this.context.bindTexture(TextureUnit.DepthMap, textures.depth, gl.LINEAR);
    } else {
      this.context.uploadData(
        TextureUnit.DepthMap,
        textures.depth,
        depthPixels.size,
        depthPixels.data,
        gl.LINEAR
      );
      textures.depthVersion = depthPixels.version;
    }

    if (textures.flowVersion === flowPixels.version) {
      this.context.bindTexture(TextureUnit.FlowMap, textures.flow, gl.LINEAR);
    } else {
      this.context.uploadData(
        TextureUnit.FlowMap,
        textures.flow,
        flowPixels.size,
        flowPixels.data,
        gl.LINEAR
      );
      textures.flowVersion = flowPixels.version;
    }

    this.context.bindTexture(
      TextureUnit.WaveMap,
      textures.waves ?? this.waveTexture,
      gl.LINEAR,
      true
    );

    // Ripples only need uploading while they're moving
    if (ripples.active) {
      this.context.uploadData(
        TextureUnit.RippleMap,
        textures.ripples,
        ripples.size,
        ripples.pixels,
        gl.LINEAR
      );
      textures.ripplesUploaded = true;
    } else if (textures.ripplesUploaded) {
      this.context.bindTexture(
        TextureUnit.RippleMap,
        textures.ripples,
        gl.LINEAR
      );
    }
  }

  private setRegionUniforms(
    gl: WebGLRenderingContext,
    region: WaterRegion,
    frame: Frame
  ) {
    const { uniforms } = this.program;
    const colour = parseColor(region.colour);
    const deepColour = parseColor(region.deepColour);
    const { mask } = region;
    const filter = frame.context.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;

    gl.uniform2f(
      uniforms.u_regionPosition,
      region.position.x,
      region.position.y
    );
    gl.uniform2f(uniforms.u_regionSize, region.size.x, region.size.y);
    gl.uniform1f(uniforms.u_useMask, mask ? 1 : 0);
    gl.uniform1f(uniforms.u_useMaskRepeat, region.repeat ? 1 : 0);
    if (mask) {
      this.context.bindImage(mask, filter, TextureUnit.Mask);
      gl.uniform2f(uniforms.u_maskSize, mask.width, mask.height);
    }

    gl.uniform1f(uniforms.u_useRipples, region.ripples.active ? 1 : 0);
    gl.uniform3f(
      uniforms.u_colour,
      colour.r / 255,
      colour.g / 255,
      colour.b / 255
    );
    gl.uniform3f(
      uniforms.u_deepColour,
      deepColour.r / 255,
      deepColour.g / 255,
      deepColour.b / 255
    );
    gl.uniform1f(uniforms.u_opacity, region.opacity);
    gl.uniform1f(uniforms.u_shoreBlend, region.shoreBlend);
    gl.uniform1f(uniforms.u_refraction, region.refraction);
    gl.uniform1f(uniforms.u_reflection, region.reflection);
    gl.uniform1f(uniforms.u_reflectionDistortion, region.reflectionDistortion);
    gl.uniform1f(uniforms.u_waveSize, region.waveSize);
    gl.uniform1f(uniforms.u_waveSpeed, region.waveSpeed);
    gl.uniform1f(uniforms.u_waveStrength, region.waveStrength);
    gl.uniform1f(uniforms.u_rippleStrength, region.rippleStrength);
    gl.uniform1f(uniforms.u_flowCycle, WaterPass.FLOW_CYCLE);
    gl.uniform1f(
      uniforms.u_flowDistance,
      region.flowSpeed * WaterPass.FLOW_CYCLE
    );
    gl.uniform1f(uniforms.u_specular, region.specular);
    gl.uniform1f(uniforms.u_surfaceShading, region.surfaceShading);
    gl.uniform1f(uniforms.u_pixelSize, region.pixelSize);
  }

  private drawRegion(
    gl: WebGLRenderingContext,
    region: WaterRegion,
    frame: Frame
  ) {
    const topLeft = frame.camera.worldToScreen(region.position);
    const bottomRight = frame.camera.worldToScreen(
      vec2.add(region.position, region.size)
    );
    const size = vec2.sub(bottomRight, topLeft);
    const { uniforms } = this.program;

    this.bindRegion(gl, region);
    this.setRegionUniforms(gl, region, frame);
    gl.uniform2f(uniforms.u_regionScreenPosition, topLeft.x, topLeft.y);
    gl.uniform1f(uniforms.u_cameraScale, size.x / region.size.x);

    this.context.drawQuad(
      this.program,
      [topLeft.x, topLeft.y, size.x, size.y],
      undefined,
      [0, 0, 1, 1]
    );
  }

  /**
   * Render some water into the canvas
   */
  public render(
    frame: Frame,
    regions: WaterRegion[],
    output: WaterOutput,
    time: number
  ) {
    const { gl } = this.context;
    if (!gl) {
      return;
    }

    const { uniforms, program } = this.program;
    const filter = frame.context.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;

    this.context.resize(frame.screen);
    this.context.invalidateCanvases();

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.disable(gl.BLEND);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // The scene and its reflections only matter for the water's colour
    if (output === WaterOutput.Colour) {
      this.context.upload(
        TextureUnit.Scene,
        this.sceneTexture,
        frame.context.canvas,
        filter
      );

      if (frame.reflectionMap) {
        this.context.upload(
          TextureUnit.ReflectionMap,
          this.reflectionTexture,
          frame.reflectionMap,
          filter
        );
      }
    }

    // The noise is always in the default map, even if a region has its own
    this.context.bindTexture(
      TextureUnit.NoiseMap,
      this.waveTexture,
      gl.LINEAR,
      true
    );

    gl.useProgram(program);
    gl.uniform2f(uniforms.u_screen, frame.screen.x, frame.screen.y);
    gl.uniform1f(uniforms.u_time, time);
    gl.uniform1f(uniforms.u_output, output);
    gl.uniform1f(uniforms.u_useReflection, frame.reflectionMap ? 1 : 0);
    gl.uniform1i(uniforms.u_scene, TextureUnit.Scene);
    gl.uniform1i(uniforms.u_reflectionMap, TextureUnit.ReflectionMap);
    gl.uniform1i(uniforms.u_mask, TextureUnit.Mask);
    gl.uniform1i(uniforms.u_depthMap, TextureUnit.DepthMap);
    gl.uniform1i(uniforms.u_flowMap, TextureUnit.FlowMap);
    gl.uniform1i(uniforms.u_waveMap, TextureUnit.WaveMap);
    gl.uniform1i(uniforms.u_noiseMap, TextureUnit.NoiseMap);
    gl.uniform1i(uniforms.u_rippleMap, TextureUnit.RippleMap);

    regions.forEach(region => this.drawRegion(gl, region, frame));
  }
}
