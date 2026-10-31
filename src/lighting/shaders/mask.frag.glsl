precision highp float;

uniform sampler2D u_mask;
uniform float u_useMask;
uniform vec4 u_value;

varying vec2 v_maskUV;

const float MASK_THRESHOLD = 0.5;

void main() {
  if (u_useMask > 0.5) {
    // Repeating masks wrap around, and non-repeating masks stay inside 0 to 1
    if (texture2D(u_mask, fract(v_maskUV)).a < MASK_THRESHOLD) {
      discard;
    }
  }

  gl_FragColor = u_value;
}
