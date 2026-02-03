'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Infinite perspective grid background with animated glow
 */
const FloatingGrid = ({
  position = [0, -2, 0],
  size = 50,
  divisions = 30,
  color = '#22d3ee',
  fadeDistance = 25,
  rotation = [-Math.PI / 2.5, 0, 0],
}) => {
  const gridRef = useRef();
  const planeRef = useRef();

  // Create gradient texture for fade effect
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Create radial gradient for center fade
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Custom shader material for animated grid
  const gridMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        gridColor: { value: new THREE.Color(color) },
        fadeDistance: { value: fadeDistance },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec2 vUv;

        void main() {
          vPosition = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 gridColor;
        uniform float fadeDistance;

        varying vec3 vPosition;
        varying vec2 vUv;

        void main() {
          // Grid pattern
          float gridSpacing = 2.0;
          vec2 coord = vPosition.xz / gridSpacing;
          vec2 grid = abs(fract(coord - 0.5) - 0.5);
          float line = min(grid.x, grid.y);
          float gridLine = 1.0 - smoothstep(0.0, 0.05, line);

          // Distance fade from center
          float dist = length(vPosition.xz);
          float fade = 1.0 - smoothstep(0.0, fadeDistance, dist);

          // Animated pulse
          float pulse = sin(dist * 0.5 - time * 2.0) * 0.3 + 0.7;

          // Color with glow
          vec3 col = gridColor * pulse;

          float alpha = gridLine * fade * 0.4;

          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }, [color, fadeDistance]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (gridMaterial.uniforms) {
      gridMaterial.uniforms.time.value = time;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Main grid plane with shader */}
      <mesh ref={planeRef} material={gridMaterial}>
        <planeGeometry args={[size, size, divisions, divisions]} />
      </mesh>

      {/* Additional glow plane underneath */}
      <Plane
        args={[size * 0.8, size * 0.8]}
        position={[0, -0.1, 0]}
      >
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
          map={gradientTexture}
          blending={THREE.AdditiveBlending}
        />
      </Plane>
    </group>
  );
};

export default FloatingGrid;
