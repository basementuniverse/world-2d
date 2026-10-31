uniform float u_highlightStrength;
uniform float u_shadowStrength;

// Bumps can't make a surface more than this many times brighter than if it was
// flat (these get very strong when the light is at a low angle)
const float MAX_BUMP = 2.0;

void main() {
  Surface surface = getSurface();

  // How much light this surface gets, compared to the light it would get if it
  // was flat. A flat surface is always 1, so it isn't changed by this pass
  float bump = dot(surface.normal, surface.toLight) / surface.toLight.z - 1.0;
  bump = clamp(bump, -1.0, MAX_BUMP - 1.0);

  float strength = bump > 0.0 ? u_highlightStrength : u_shadowStrength;

  gl_FragColor = vec4(surface.light * (1.0 + band(bump * strength)), 1.0);
}
