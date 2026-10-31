precision highp float;

attribute vec2 a_corner;

// Size of the screen in pixels
uniform vec2 u_screen;

// Area to draw, as (x, y, width, height) in screen pixels
uniform vec4 u_screenRectangle;

// The same area, as (x, y, width, height) in world units relative to the light
uniform vec4 u_worldRectangle;

// The same area, as (x, y, width, height) in texture coordinates of a mask
uniform vec4 u_maskRectangle;

varying vec2 v_sceneUV;
varying vec2 v_fromLight;
varying vec2 v_maskUV;

void main() {
  vec2 position = u_screenRectangle.xy + a_corner * u_screenRectangle.zw;

  v_sceneUV = position / u_screen;
  v_fromLight = u_worldRectangle.xy + a_corner * u_worldRectangle.zw;
  v_maskUV = u_maskRectangle.xy + a_corner * u_maskRectangle.zw;

  gl_Position = vec4(
    v_sceneUV.x * 2.0 - 1.0,
    1.0 - v_sceneUV.y * 2.0,
    0.0,
    1.0
  );
}
