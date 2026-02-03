// Grid shader for infinite perspective grid background

export const gridVertexShader = `
  varying vec3 vPosition;
  varying float vDepth;

  void main() {
    vPosition = position;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const gridFragmentShader = `
  uniform vec3 gridColor;
  uniform float gridSpacing;
  uniform float lineWidth;
  uniform float fadeDistance;
  uniform float time;

  varying vec3 vPosition;
  varying float vDepth;

  void main() {
    // Calculate grid lines
    vec2 coord = vPosition.xz / gridSpacing;
    vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
    float line = min(grid.x, grid.y);

    // Distance-based fade
    float fade = 1.0 - smoothstep(0.0, fadeDistance, vDepth);

    // Animated glow effect on grid lines
    float glow = sin(vPosition.x * 0.5 + time) * 0.5 + 0.5;
    glow *= sin(vPosition.z * 0.5 + time * 0.7) * 0.5 + 0.5;

    float alpha = (1.0 - min(line, 1.0)) * fade * lineWidth;
    alpha += glow * 0.05 * fade;

    // Add subtle color variation
    vec3 color = gridColor;
    color += vec3(glow * 0.1, glow * 0.05, 0.0);

    gl_FragColor = vec4(color, alpha * 0.6);
  }
`;

// Hexagonal grid shader
export const hexGridVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const hexGridFragmentShader = `
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform float scale;

  varying vec2 vUv;
  varying vec3 vPosition;

  // Hexagon distance function
  float hexDist(vec2 p) {
    p = abs(p);
    float c = dot(p, normalize(vec2(1.0, 1.73)));
    return max(c, p.x);
  }

  vec4 hexCoords(vec2 uv) {
    vec2 r = vec2(1.0, 1.73);
    vec2 h = r * 0.5;
    vec2 a = mod(uv, r) - h;
    vec2 b = mod(uv - h, r) - h;

    vec2 gv = length(a) < length(b) ? a : b;
    float x = atan(gv.x, gv.y);
    float y = 0.5 - hexDist(gv);
    vec2 id = uv - gv;

    return vec4(x, y, id.x, id.y);
  }

  void main() {
    vec2 uv = vPosition.xz * scale;
    vec4 hc = hexCoords(uv);

    float c = smoothstep(0.05, 0.06, hc.y);
    float pulse = sin(hc.z * 0.5 + hc.w * 0.5 + time) * 0.5 + 0.5;

    vec3 col = mix(color1, color2, pulse);

    // Distance fade
    float dist = length(vPosition.xz);
    float fade = 1.0 - smoothstep(10.0, 50.0, dist);

    gl_FragColor = vec4(col, (1.0 - c) * 0.3 * fade);
  }
`;

export default {
  gridVertexShader,
  gridFragmentShader,
  hexGridVertexShader,
  hexGridFragmentShader,
};
