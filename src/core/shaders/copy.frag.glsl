precision highp float;

uniform sampler2D u_image;
uniform float u_flipY;

varying vec2 v_sceneUV;

void main() {
  gl_FragColor = texture2D(
    u_image,
    vec2(v_sceneUV.x, mix(v_sceneUV.y, 1.0 - v_sceneUV.y, u_flipY))
  );
}
