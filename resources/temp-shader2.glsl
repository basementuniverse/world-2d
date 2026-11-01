precision mediump float;

uniform vec4 u_lightColour;
uniform vec2 u_resolution;
uniform vec2 u_lightScreenPositionTopLeft;
uniform vec2 u_lightScreenPositionBottomRight;
uniform float u_wallLightingYOffset;

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
uniform float u_t4;
uniform float u_t5;
uniform float u_t6;
uniform float u_t7;
uniform float u_t8;
uniform float u_t9;
uniform float u_t10;

float LIGHT_HEIGHT = -0.3;
float WALL_NORMAL_Z_OFFSET = 0.2;

float HIGHLIGHT_THRESHOLD = 0.849;
float HIGHLIGHT_OFFSET = 0.25;
float HIGHLIGHT_ALPHA = 1.0;

float SHADOW_THRESHOLD = 0.121;
float SHADOW_ALPHA = 1.0;

float SHADING_FALLOFF = 1.95;
float SHADING_OFFSET = 1.41;

float SHADE_BANDING = 0.2;

float remap(float i, float a1, float a2, float b1, float b2) {
  return b1 + (i - a1) * (b2 - b1) / (a2 - a1);
}

float avg(vec3 a) {
  return (a.r + a.g + a.b) / 3.0;
}

float band(float a, float p) {
  float ip = 1.0 / p;
  return floor(a * ip) / ip;
}

bool floatEquals(float a, float b, float epsilon) {
  return abs(a - b) < epsilon;
}

bool isTransparent(vec4 color) {
  return floatEquals(color.a, 0.0, 0.01);
}

bool isBlack(vec4 color) {
  return (
    floatEquals(color.r, 0.0, 0.01) &&
    floatEquals(color.g, 0.0, 0.01) &&
    floatEquals(color.b, 0.0, 0.01)
  );
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

  vec4 sceneNormal = texture2D(u_sceneNormalMap, screenUV);

  vec2 lightDirection = normalize(uv - vec2(0.5));
  vec3 lightNormal = normalize(vec3(
    lightDirection.x,
    -lightDirection.y,
    u_t1
  ));

  // Ground
  vec4 groundMask = texture2D(u_groundMask, screenUV);
  if (!isTransparent(groundMask)) {
    vec4 groundLight = texture2D(u_groundLightMap, uv);

    if (isBlack(groundLight)) {
      gl_FragColor = vec4(0.0);
      return;
    }

    float light = -dot(
      normalize(sceneNormal.rgb - vec3(0.5)),
      lightNormal
    );

    if (light >= u_t2) {
      vec4 highlight = vec4(
        vec3(clamp(u_lightColour.rgb + u_t3, 0.0, 1.0)),
        u_lightColour.a
      );
      float amount = (
        pow(avg(groundLight.rgb) * u_t7, u_t6) *
        u_t8 *
        remap(light, 0.0, 1.0, 0.0, 1.0)
      );

      gl_FragColor = mix(
        groundLight,
        highlight,
        clamp(band(amount, u_t10), 0.0, 1.0)
      );
      return;
    }

    if (light <= u_t4) {
      vec4 shadow = vec4(0.0, 0.0, 0.0, 1.0);
      float amount = (
        pow(avg(groundLight.rgb) * u_t7, u_t6) *
        u_t9 *
        remap(light, 1.0, -1.0, 0.0, 1.0)
      );

      gl_FragColor = mix(
        groundLight,
        shadow,
        clamp(band(amount, u_t10), 0.0, 1.0)
      );
      return;
    }

    gl_FragColor = groundLight;
    return;
  }

  // Wall layer 1
  vec2 wallLightingYOffset = vec2(0.0, u_wallLightingYOffset / u_resolution.y);
  vec4 wall1Mask = texture2D(u_wall1Mask, screenUV);
  if (!isTransparent(wall1Mask)) {
    vec4 wallLight = texture2D(u_wall1LightMap, uv + wallLightingYOffset);

    if (isBlack(wallLight)) {
      gl_FragColor = vec4(0.0);
      return;
    }

    float light = -dot(
      normalize(sceneNormal.rgb - vec3(0.5, 0.5, 0.5 + u_t5)),
      lightNormal
    );

    if (light >= u_t2) {
      vec4 highlight = vec4(
        vec3(clamp(u_lightColour.rgb + u_t3, 0.0, 1.0)),
        u_lightColour.a
      );
      float amount = (
        pow(avg(wallLight.rgb) * u_t7, u_t6) *
        u_t8 *
        remap(light, 0.0, 1.0, 0.0, 1.0)
      );

      gl_FragColor = mix(
        wallLight,
        highlight,
        clamp(band(amount, u_t10), 0.0, 1.0)
      );
      return;
    }

    if (light <= u_t4) {
      vec4 shadow = vec4(0.0, 0.0, 0.0, 1.0);
      float amount = (
        pow(avg(wallLight.rgb) * u_t7, u_t6) *
        u_t9 *
        remap(light, 1.0, -1.0, 0.0, 1.0)
      );

      gl_FragColor = mix(
        wallLight,
        shadow,
        clamp(band(amount, u_t10), 0.0, 1.0)
      );
      return;
    }

    gl_FragColor = wallLight;
    return;
  }

  // Wall layer 2
  vec4 wall2Mask = texture2D(u_wall2Mask, screenUV);
  if (!isTransparent(wall2Mask)) {
    vec4 wallLight = texture2D(u_wall2LightMap, uv + wallLightingYOffset);

    if (isBlack(wallLight)) {
      gl_FragColor = vec4(0.0);
      return;
    }

    float light = -dot(
      normalize(sceneNormal.rgb - vec3(0.5, 0.5, 0.5 + u_t5)),
      lightNormal
    );

    if (light >= u_t2) {
      vec4 highlight = vec4(
        vec3(clamp(u_lightColour.rgb + u_t3, 0.0, 1.0)),
        u_lightColour.a
      );
      float amount = (
        pow(avg(wallLight.rgb) * u_t7, u_t6) *
        u_t8 *
        remap(light, 0.0, 1.0, 0.0, 1.0)
      );

      gl_FragColor = mix(
        wallLight,
        highlight,
        clamp(band(amount, u_t10), 0.0, 1.0)
      );
      return;
    }

    if (light <= u_t4) {
      vec4 shadow = vec4(0.0, 0.0, 0.0, 1.0);
      float amount = (
        pow(avg(wallLight.rgb) * u_t7, u_t6) *
        u_t9 *
        remap(light, 1.0, -1.0, 0.0, 1.0)
      );

      gl_FragColor = mix(
        wallLight,
        shadow,
        clamp(band(amount, u_t10), 0.0, 1.0)
      );
      return;
    }

    gl_FragColor = wallLight;
    return;
  }
}
