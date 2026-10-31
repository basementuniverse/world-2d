uniform sampler2D u_sceneSpecularMap;
uniform float u_specularStrength;
uniform float u_shininess;
uniform float u_viewTilt;

void main() {
  Surface surface = getSurface();

  // The camera is orthographic so it's in the same direction for all surfaces
  vec3 toCamera = normalize(vec3(0.0, u_viewTilt, 1.0));
  vec3 halfway = normalize(normalize(surface.toLight) + toCamera);

  float highlight = pow(max(dot(surface.normal, halfway), 0.0), u_shininess);
  float specular = texture2D(u_sceneSpecularMap, v_sceneUV).r;

  gl_FragColor = vec4(
    surface.light * band(highlight * specular * u_specularStrength),
    1.0
  );
}
