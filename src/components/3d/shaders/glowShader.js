import * as THREE from 'three';

// Glow shader for the neural core - creates a pulsing, breathing effect
export const glowVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float time;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;

    // Breathing effect - subtle vertex displacement
    float breathing = sin(time * 0.5) * 0.05 + 1.0;
    vec3 newPosition = position * breathing;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

export const glowFragmentShader = `
  uniform vec3 glowColor;
  uniform float intensity;
  uniform float time;

  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    // Fresnel-based glow effect
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = 1.0 - dot(vNormal, viewDirection);
    fresnel = pow(fresnel, 2.0);

    // Animated pulse
    float pulse = sin(time * 2.0) * 0.2 + 0.8;

    // Color variation based on position
    vec3 color = glowColor;
    color.r += sin(vPosition.x * 10.0 + time) * 0.1;
    color.g += cos(vPosition.y * 10.0 + time * 0.5) * 0.1;
    color.b += sin(vPosition.z * 10.0 + time * 0.7) * 0.1;

    float alpha = fresnel * intensity * pulse;

    gl_FragColor = vec4(color, alpha);
  }
`;

// Rim glow shader for outer glow effect
export const rimGlowVertexShader = `
  varying vec3 vNormal;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const rimGlowFragmentShader = `
  uniform vec3 glowColor;
  uniform float intensity;
  uniform float time;

  varying vec3 vNormal;

  void main() {
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
    float pulse = sin(time * 1.5) * 0.3 + 0.7;

    gl_FragColor = vec4(glowColor, fresnel * intensity * pulse);
  }
`;

// Create glow material
export const createGlowMaterial = (color = new THREE.Color(0x22d3ee), intensity = 1.0) => {
  return new THREE.ShaderMaterial({
    vertexShader: glowVertexShader,
    fragmentShader: glowFragmentShader,
    uniforms: {
      glowColor: { value: color },
      intensity: { value: intensity },
      time: { value: 0 },
    },
    transparent: true,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
};

export default {
  glowVertexShader,
  glowFragmentShader,
  rimGlowVertexShader,
  rimGlowFragmentShader,
  createGlowMaterial,
};
