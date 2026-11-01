precision highp float;

// -----------------------------------------------------------------------------
// SAMPLERS
// -----------------------------------------------------------------------------
uniform sampler2D u_scene;
uniform sampler2D u_reflectionMap;
uniform sampler2D u_mask;
uniform sampler2D u_depthMap;
uniform sampler2D u_flowMap;
uniform sampler2D u_waveMap;
uniform sampler2D u_noiseMap;
uniform sampler2D u_rippleMap;

// -----------------------------------------------------------------------------
// UNIFORMS
// -----------------------------------------------------------------------------
uniform vec2 u_screen;
uniform float u_time;
uniform float u_output;

// The region in the world, and where it is on the screen
uniform vec2 u_regionPosition;
uniform vec2 u_regionSize;
uniform vec2 u_regionScreenPosition;
uniform float u_cameraScale;

uniform float u_useMask;
uniform float u_useMaskRepeat;
uniform vec2 u_maskSize;
uniform float u_useReflection;
uniform float u_useRipples;

uniform vec3 u_colour;
uniform vec3 u_deepColour;
uniform float u_opacity;
uniform float u_shoreBlend;
uniform float u_refraction;
uniform float u_reflection;
uniform float u_reflectionDistortion;
uniform float u_waveSize;
uniform float u_waveSpeed;
uniform float u_waveStrength;
uniform float u_rippleStrength;
uniform float u_flowDistance;
uniform float u_flowCycle;
uniform float u_specular;
uniform float u_surfaceShading;
uniform float u_pixelSize;

// -----------------------------------------------------------------------------
// VARYINGS
// -----------------------------------------------------------------------------
varying vec2 v_maskUV;

// -----------------------------------------------------------------------------
// GLOBAL CONSTANTS
// -----------------------------------------------------------------------------
const float OUTPUT_NORMAL = 1.0;
const float OUTPUT_SPECULAR = 2.0;

// The red and green channels of a flat normal map (#7f7fff)
const float NORMAL_MAP_CENTER = 127.0 / 255.0;

// The second layer of waves is larger, and they move in a different direction
const float SECOND_LAYER_SCALE = 0.57;
const vec2 FIRST_LAYER_DIRECTION = vec2(0.8, 0.6);
const vec2 SECOND_LAYER_DIRECTION = vec2(-0.5, 0.86);

// The direction that the water's own shading comes from
const vec2 SHADING_DIRECTION = vec2(-0.6, -0.8);

// How many normal map tiles each patch of noise covers
const float NOISE_SCALE = 0.2;

// -----------------------------------------------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------------------------------------------
// Grid values are stored with 128 as 0, so that 0 can be stored exactly
vec2 decodeVector(vec2 encoded) {
  return (encoded * 255.0 - 128.0) / 127.0;
}

vec2 regionUV(vec2 world) {
  return (world - u_regionPosition) / u_regionSize;
}

vec2 sceneUV(vec2 world) {
  return (
    u_regionScreenPosition + (world - u_regionPosition) * u_cameraScale
  ) / u_screen;
}

float sampleMask(vec2 world) {
  if (u_useMask < 0.5) {
    return 1.0;
  }

  vec2 uv = regionUV(world);
  if (u_useMaskRepeat > 0.5) {
    uv = fract(world / u_maskSize);
  }

  return texture2D(u_mask, uv).a;
}

// Is this inside the water? This looks one pixel in each direction, otherwise
// smoothing could blend in a pixel of the land next to the water
float insideWater(vec2 world) {
  vec2 margin = vec2(1.0 / u_cameraScale);
  vec2 inside =
    step(vec2(0.0), regionUV(world - margin)) *
    step(regionUV(world + margin), vec2(1.0));

  return
    inside.x *
    inside.y *
    step(0.5, sampleMask(world - margin)) *
    step(0.5, sampleMask(world + margin));
}

// -----------------------------------------------------------------------------
// WAVES
// -----------------------------------------------------------------------------
vec2 waveSlope(vec2 uv) {
  return texture2D(u_waveMap, uv).rg * 2.0 - 1.0;
}

// 2 layers of waves on top of each other
vec2 layeredWaves(vec2 world) {
  vec2 first = world + FIRST_LAYER_DIRECTION * u_time * u_waveSpeed;
  vec2 second = world + SECOND_LAYER_DIRECTION * u_time * u_waveSpeed;

  return (
    waveSlope(first / u_waveSize) +
    waveSlope(second / u_waveSize * SECOND_LAYER_SCALE)
  ) * 0.5;
}

// Move waves along a flow vector
//
// We can only stretch the waves so far before they stop looking like waves, so
// they're moved along the flow for one cycle and then they start again. There
// are 2 sets of waves half a cycle apart, and each set fades out before it
// jumps back to the start. The noise stops all of the water from fading at the
// same time, which would look like the water was pulsing.
vec2 flowingWaves(vec2 world, vec2 flow) {
  float noise = texture2D(
    u_noiseMap,
    world / u_waveSize * NOISE_SCALE
  ).b;
  float phase0 = fract(u_time / u_flowCycle + noise * 0.5);
  float phase1 = fract(phase0 + 0.5);

  vec2 waves0 = layeredWaves(world - flow * u_flowDistance * phase0);
  vec2 waves1 = layeredWaves(world - flow * u_flowDistance * phase1);

  return mix(waves0, waves1, abs(0.5 - phase0) / 0.5);
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
void main() {
  vec2 world = u_regionPosition + v_maskUV * u_regionSize;
  if (u_pixelSize > 0.0) {
    world = (floor(world / u_pixelSize) + 0.5) * u_pixelSize;
  }

  vec2 uv = regionUV(world);
  float depth = texture2D(u_depthMap, uv).r;

  // The edge of the mask is a hard edge, and the water can also fade out as it
  // gets shallower
  float shore = 1.0;
  if (u_shoreBlend > 0.0) {
    shore = smoothstep(0.0, u_shoreBlend, depth);
  }
  float alpha = sampleMask(world) * shore;
  if (alpha <= 0.0) {
    discard;
  }

  vec2 flow = decodeVector(texture2D(u_flowMap, uv).rg);
  vec2 slope = flowingWaves(world, flow) * u_waveStrength;
  if (u_useRipples > 0.5) {
    slope += decodeVector(texture2D(u_rippleMap, uv).rg) * u_rippleStrength;
  }

  if (u_output == OUTPUT_NORMAL) {
    vec3 normal = normalize(vec3(-slope, 1.0));

    gl_FragColor = vec4(
      normal.xy * 0.5 + NORMAL_MAP_CENTER,
      normal.z * 0.5 + 0.5,
      alpha
    );
    return;
  }

  if (u_output == OUTPUT_SPECULAR) {
    gl_FragColor = vec4(vec3(u_specular), alpha);
    return;
  }

  // Deeper water bends things more, and we can't see anything outside of the
  // water because it's in front of the water
  vec2 refracted = world + slope * u_refraction * depth;
  if (insideWater(refracted) < 0.5) {
    refracted = world;
  }

  vec3 colour = mix(u_colour, u_deepColour, depth);
  vec3 scene = texture2D(u_scene, sceneUV(refracted)).rgb;
  vec3 result = mix(scene, colour, u_opacity * depth);

  // Slopes facing one way are brighter than slopes facing the other way, so
  // that waves can be seen without any lights
  result += dot(slope, SHADING_DIRECTION) * u_surfaceShading;

  if (u_useReflection > 0.5) {
    vec4 reflected = texture2D(
      u_reflectionMap,
      sceneUV(world + slope * u_reflectionDistortion)
    );

    result = mix(result, reflected.rgb, reflected.a * u_reflection);
  }

  gl_FragColor = vec4(result, alpha);
}
