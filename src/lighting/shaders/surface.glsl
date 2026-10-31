precision highp float;

// -----------------------------------------------------------------------------
// SAMPLERS
// -----------------------------------------------------------------------------
uniform sampler2D u_sceneNormalMap;
uniform sampler2D u_surfaceMap;
uniform sampler2D u_lightMap;
uniform sampler2D u_regionShadowMap;
uniform sampler2D u_objectShadowMap;

// -----------------------------------------------------------------------------
// UNIFORMS
// -----------------------------------------------------------------------------
uniform float u_lightRadius;
uniform float u_lightHeight;
uniform float u_lightMapSize;
uniform float u_footOrigin;
uniform float u_useNormalMap;
uniform float u_wallLightingYOffset;
uniform float u_wallLightingCutoffDistance;
uniform float u_wallShadowLengthFactor;
uniform float u_banding;

// -----------------------------------------------------------------------------
// VARYINGS
// -----------------------------------------------------------------------------
varying vec2 v_sceneUV;
varying vec2 v_fromLight;

// -----------------------------------------------------------------------------
// GLOBAL CONSTANTS
// -----------------------------------------------------------------------------
// The alpha channel of the surface map says what's at each pixel
const float TYPE_NONE_LIMIT = 0.125;
const float TYPE_GROUND_LIMIT = 0.375;
const float TYPE_PROJECTED_WALL_LIMIT = 0.625;
const float TYPE_FLAT_WALL_LIMIT = 0.875;

// The foot position in the surface map is in quarters of a world unit
const float FOOT_SCALE = 4.0;

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

vec2 lightMapUV(vec2 fromLight) {
  return (fromLight + u_lightRadius) / u_lightMapSize;
}

float insideLightMap(vec2 uv) {
  vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));

  return inside.x * inside.y;
}

// Sample the light's colour and falloff, there's no light outside of the map
vec3 sampleLight(vec2 fromLight) {
  vec2 uv = lightMapUV(fromLight);

  return texture2D(u_lightMap, uv).rgb * insideLightMap(uv);
}

// Sample a shadow map, there are no shadows outside of the map
vec3 sampleShadow(sampler2D map, vec2 fromLight) {
  vec2 uv = lightMapUV(fromLight);

  return mix(vec3(1.0), texture2D(map, uv).rgb, insideLightMap(uv));
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

// Find how much light reaches a pixel on a wall by looking up the shadows on
// the ground at the wall's foot
vec3 wallLight(float footY, float bias, bool projected) {
  vec2 foot = vec2(v_fromLight.x, footY);
  float footDistance = length(foot);
  vec2 awayFromLight = vec2(0.0, 1.0);
  if (footDistance > 0.0) {
    awayFromLight = foot / footDistance;
  }

  // Region casters are as tall as the wall, so their shadows reach the top of
  // the wall once they reach the wall's foot
  vec3 regionShadow = sampleShadow(
    u_regionShadowMap,
    foot - awayFromLight * bias
  );

  // Other shadows have a length, so they climb the wall until they run out. The
  // higher up the wall we are, the further along the shadow we need to look
  float height = footY - v_fromLight.y;
  float climb = projected ? height / u_wallShadowLengthFactor : 0.0;
  vec3 objectShadow = sampleShadow(
    u_objectShadowMap,
    awayFromLight * clamp(footDistance - bias + climb, 0.0, u_lightRadius)
  );

  // Walls can't be lit from behind, this fades out to avoid a hard edge
  float facing = 1.0 - clamp(foot.y / u_wallLightingCutoffDistance, 0.0, 1.0);

  vec2 wallOffset = vec2(0.0, u_wallLightingYOffset);

  return sampleLight(v_fromLight - wallOffset) *
    regionShadow *
    objectShadow *
    facing;
}

// Find the surface at this fragment, whether it's on the ground or a wall
Surface getSurface() {
  vec4 data = texture2D(u_surfaceMap, vec2(v_sceneUV.x, 1.0 - v_sceneUV.y));

  // Unlit surfaces only receive ambient light
  if (data.a < TYPE_NONE_LIMIT || data.a > TYPE_FLAT_WALL_LIMIT) {
    discard;
  }

  bool isGround = data.a < TYPE_GROUND_LIMIT;
  float foot = floor(data.r * 255.0 + 0.5) * 256.0;
  foot += floor(data.g * 255.0 + 0.5);
  float footY = foot / FOOT_SCALE + u_footOrigin;

  vec3 light;
  vec3 toLight;
  float wallAmount;
  if (isGround) {
    light =
      sampleLight(v_fromLight) *
      sampleShadow(u_regionShadowMap, v_fromLight) *
      sampleShadow(u_objectShadowMap, v_fromLight);
    toLight = vec3(-v_fromLight, 0.0);
    wallAmount = 0.0;
  } else {
    light = wallLight(
      footY,
      floor(data.b * 255.0 + 0.5),
      data.a < TYPE_PROJECTED_WALL_LIMIT
    );
    toLight = vec3(vec2(0.0, u_wallLightingYOffset) - v_fromLight, 0.0);
    wallAmount = 1.0;
  }
  toLight.z = max(u_lightHeight, 1.0);

  vec3 normal = vec3(NORMAL_MAP_CENTER, NORMAL_MAP_CENTER, 1.0);
  if (u_useNormalMap > 0.5) {
    normal = texture2D(u_sceneNormalMap, v_sceneUV).rgb;
  }

  return Surface(
    light,
    normalize(vec3(
      normal.rg - NORMAL_MAP_CENTER,
      normal.b - 0.5 - WALL_NORMAL_Z_OFFSET * wallAmount
    )),
    toLight
  );
}
