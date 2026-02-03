// Particle shaders for data flow and floating particles

export const particleVertexShader = `
  attribute float size;
  attribute vec3 customColor;
  attribute float alpha;

  varying vec3 vColor;
  varying float vAlpha;

  uniform float time;
  uniform float scale;

  void main() {
    vColor = customColor;
    vAlpha = alpha;

    // Animated position based on time
    vec3 pos = position;
    pos.y += sin(time + position.x * 0.5) * 0.1;
    pos.x += cos(time * 0.5 + position.z * 0.3) * 0.05;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * scale * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const particleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Circular point with soft edges
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.2, dist) * vAlpha;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

// Data flow particle shader - for animated streams
export const dataFlowVertexShader = `
  attribute float progress;
  attribute vec3 customColor;
  attribute float size;

  varying vec3 vColor;
  varying float vProgress;

  uniform float time;
  uniform float speed;

  void main() {
    vColor = customColor;

    // Calculate animated progress along path
    float animatedProgress = mod(progress + time * speed, 1.0);
    vProgress = animatedProgress;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const dataFlowFragmentShader = `
  varying vec3 vColor;
  varying float vProgress;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    // Fade in and out based on progress
    float alpha = sin(vProgress * 3.14159) * smoothstep(0.5, 0.1, dist);

    gl_FragColor = vec4(vColor, alpha * 0.8);
  }
`;

// Converging streams shader
export const convergingVertexShader = `
  attribute float startTime;
  attribute vec3 startPosition;
  attribute vec3 endPosition;
  attribute vec3 customColor;

  varying vec3 vColor;
  varying float vAlpha;

  uniform float time;
  uniform float duration;
  uniform float size;

  void main() {
    vColor = customColor;

    // Calculate progress based on time and startTime
    float progress = mod((time - startTime) / duration, 1.0);
    vAlpha = sin(progress * 3.14159);

    // Interpolate position
    vec3 pos = mix(startPosition, endPosition, progress);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * (1.0 + progress) * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const convergingFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

export default {
  particleVertexShader,
  particleFragmentShader,
  dataFlowVertexShader,
  dataFlowFragmentShader,
  convergingVertexShader,
  convergingFragmentShader,
};
