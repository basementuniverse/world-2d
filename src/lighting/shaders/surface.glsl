precision highp float;

// -----------------------------------------------------------------------------
// SAMPLERS
// -----------------------------------------------------------------------------
uniform sampler2D u_sceneNormalMap;
uniform sampler2D u_groundMask;
uniform sampler2D u_wall1Mask;
uniform sampler2D u_wall2Mask;
uniform sampler2D u_groundLightMap;
uniform sampler2D u_wall1LightMap;
uniform sampler2D u_wall2LightMap;

// -----------------------------------------------------------------------------
// UNIFORMS
// -----------------------------------------------------------------------------
uniform float u_lightRadius;
uniform float u_lightHeight;
uniform float u_lightMapSize;
uniform float u_wallLightingYOffset;
uniform float u_banding;

// -----------------------------------------------------------------------------
// VARYINGS
// -----------------------------------------------------------------------------
varying vec2 v_sceneUV;
varying vec2 v_fromLight;

// -----------------------------------------------------------------------------
// GLOBAL CONSTANTS
// -----------------------------------------------------------------------------
const float MIN_COVERAGE = 0.004;

// The red and green channels of a flat normal map (#7f7fff)
const float NORMAL_MAP_CENTER = 127.0 / 255.0;

// Walls face the camera less directly than the ground, so bumps look stronger
const float WALL_NORMAL_Z_OFFSET = 0.2;

// -----------------------------------------------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------------------------------------------
float band(float amount) {
  if (u_banding <= 0.0) {
    return amount;
  }

  return floor(amount / u_banding + 0.5) * u_banding;
}

// Sample a light map, nothing outside of the map receives this light
vec3 sampleLightMap(sampler2D map, vec2 uv) {
  vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));

  return texture2D(map, uv).rgb * inside.x * inside.y;
}

// -----------------------------------------------------------------------------
// SURFACE
// -----------------------------------------------------------------------------
struct Surface {
  // Light from this light that reaches this surface, including shadows
  vec3 light;

  // Unit normal, where x is right, y is down the screen, and z is towards the
  // camera
  vec3 normal;

  // From this surface to the light, not normalized
  vec3 toLight;
};

// Find the surface at this fragment, whether it's on the ground or a wall
Surface getSurface() {
  float ground = texture2D(u_groundMask, v_sceneUV).a;
  float wall1 = texture2D(u_wall1Mask, v_sceneUV).a;
  float wall2 = texture2D(u_wall2Mask, v_sceneUV).a;

  float coverage = ground + wall1 + wall2;
  if (coverage < MIN_COVERAGE) {
    discard;
  }

  // These overlap at the anti-aliased edges of surfaces
  float groundAmount = ground / coverage;
  float wall1Amount = wall1 / coverage;
  float wall2Amount = wall2 / coverage;
  float wallAmount = wall1Amount + wall2Amount;

  // Wall light maps are offset from the light's position
  vec2 wallOffset = vec2(0.0, u_wallLightingYOffset);
  vec2 groundUV = (v_fromLight + u_lightRadius) / u_lightMapSize;
  vec2 wallUV = (v_fromLight + u_lightRadius - wallOffset) / u_lightMapSize;

  vec3 light =
    sampleLightMap(u_groundLightMap, groundUV) * groundAmount +
    sampleLightMap(u_wall1LightMap, wallUV) * wall1Amount +
    sampleLightMap(u_wall2LightMap, wallUV) * wall2Amount;

  vec3 normal = texture2D(u_sceneNormalMap, v_sceneUV).rgb;

  return Surface(
    light,
    normalize(vec3(
      normal.rg - NORMAL_MAP_CENTER,
      normal.b - 0.5 - WALL_NORMAL_Z_OFFSET * wallAmount
    )),
    vec3(wallOffset * wallAmount - v_fromLight, max(u_lightHeight, 1.0))
  );
}
