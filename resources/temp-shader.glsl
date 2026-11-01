precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_lightScreenPositionTopLeft;
uniform vec2 u_lightScreenPositionBottomRight;
uniform float u_wallLightingYOffset;

uniform sampler2D u_lightMap;
uniform sampler2D u_sceneNormalMap;
uniform sampler2D u_groundLightMap;
uniform sampler2D u_wall1LightMap;
uniform sampler2D u_wall2LightMap;
uniform sampler2D u_groundMask;
uniform sampler2D u_wall1Mask;
uniform sampler2D u_wall2Mask;

uniform float u_t1;
uniform float u_t2;
uniform float u_t3;
// uniform float u_t4;
uniform float u_t5;
uniform float u_t6;
uniform float u_t7;
uniform float u_t8;
uniform float u_t9;
uniform float u_t10;
uniform float u_t11;

float LIGHT_CONTRAST = 5.0;
float AMOUNT = 0.7;

float HIGHLIGHT_THRESHOLD = 0.937;
float HIGHLIGHT_AMOUNT = 1.8;

float SHADOW_THRESHOLD_1 = 0.878;
float SHADOW_AMOUNT_1 = 0.75;

float SHADOW_THRESHOLD_2 = 0.678;
float SHADOW_AMOUNT_2 = 0.5;

float remap(float i, float a1, float a2, float b1, float b2) {
  return b1 + (i - a1) * (b2 - b1) / (a2 - a1);
}

float avg(vec3 x) {
  return (x.r + x.g + x.b) / 3.0;
}

float inverseEasing(float x, float k) {
  return x < 0.5
    ? 0.5 - pow(1.0 - 2.0 * x, k) / 2.0
    : 0.5 + pow(2.0 * x - 1.0, k) / 2.0;
}

bool floatEquals(float a, float b, float epsilon) {
  return abs(a - b) < epsilon;
}

bool isBlack(vec4 color) {
  return (
    floatEquals(color.r, 0.0, 0.01) &&
    floatEquals(color.g, 0.0, 0.01) &&
    floatEquals(color.b, 0.0, 0.01)
  );
}

bool isTransparent(vec4 color) {
  return floatEquals(color.a, 0.0, 0.01);
}

vec4 shade(float light) {
  // if (light >= HIGHLIGHT_THRESHOLD) {
  //   return vec4(vec3(HIGHLIGHT_AMOUNT), 1.0);
  // }

  // if (light <= SHADOW_THRESHOLD_1) {
  //   return vec4(vec3(SHADOW_AMOUNT_1), 1.0);
  // }

  // if (light <= SHADOW_THRESHOLD_2) {
  //   return vec4(vec3(SHADOW_AMOUNT_2), 1.0);
  // }

  if (light >= u_t5) {
    return vec4(vec3(u_t6), 1.0);
  }

  if (light <= u_t7) {
    return vec4(vec3(u_t8), 1.0);
  }

  if (light <= u_t9) {
    return vec4(vec3(u_t10), 1.0);
  }

  return vec4(0.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 screenUV = vec2(
    remap(
      uv.x,
      0.0,
      1.0,
      u_lightScreenPositionTopLeft.x,
      u_lightScreenPositionBottomRight.x
    ),
    1.0 - remap(
      uv.y,
      0.0,
      1.0,
      u_lightScreenPositionBottomRight.y,
      u_lightScreenPositionTopLeft.y
    )
  );

  vec4 baseLight = texture2D(u_lightMap, uv);
  vec4 sceneNormal = texture2D(u_sceneNormalMap, screenUV);

  vec2 lightDirection = normalize(uv - vec2(0.5, 0.5));
  vec3 lightNormal = mix(
    vec3(-lightDirection.x, lightDirection.y, u_t1),
    vec3(u_t2),
    u_t3
  );

  float light = dot(
    normalize(sceneNormal.xyz),
    normalize(lightNormal)
  );
  // float light = inverseEasing(0.5 + 0.5 * delta, u_t4);

  // Ground
  vec4 groundMask = texture2D(u_groundMask, screenUV);
  vec4 groundLight = texture2D(u_groundLightMap, uv);
  vec4 groundResult = clamp(groundLight * shade(light), -1.0, 1.0);

  if (isTransparent(groundMask)) {
    groundResult = vec4(0.0, 0.0, 0.0, 0.0);
  }

  if (isBlack(groundLight)) {
    groundResult = vec4(0.0, 0.0, 0.0, 0.0);
  }

  // Wall layer 1
  vec2 wallLightingYOffset = vec2(0.0, u_wallLightingYOffset / u_resolution.y);
  vec4 wall1Mask = texture2D(u_wall1Mask, screenUV);
  vec4 wall1Light = texture2D(u_wall1LightMap, uv + wallLightingYOffset);
  vec4 wall1Result = clamp(wall1Light * shade(light), -1.0, 1.0);

  if (isTransparent(wall1Mask)) {
    wall1Result = vec4(0.0, 0.0, 0.0, 0.0);
  }

  if (isBlack(wall1Light)) {
    wall1Result = vec4(0.0, 0.0, 0.0, 0.0);
  }

  // Wall layer 2
  vec4 wall2Mask = texture2D(u_wall2Mask, screenUV);
  vec4 wall2Light = texture2D(u_wall2LightMap, uv + wallLightingYOffset);
  vec4 wall2Result = clamp(wall2Light * shade(light), -1.0, 1.0);

  if (isTransparent(wall2Mask)) {
    wall2Result = vec4(0.0, 0.0, 0.0, 0.0);
  }

  if (isBlack(wall2Light)) {
    wall2Result = vec4(0.0, 0.0, 0.0, 0.0);
  }

  gl_FragColor = vec4(
    vec3(groundResult + wall1Result + wall2Result),
    min(groundResult.a, min(wall1Result.a, wall2Result.a)) * avg(baseLight.rgb) * u_t11
  );
}
