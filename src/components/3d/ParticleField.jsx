'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Global floating particle field for background ambiance
 */
const ParticleField = ({
  count = 300,
  spread = 20,
  depth = 10,
  colors = ['#22d3ee', '#a855f7', '#10b981', '#ffffff'],
  speed = 0.3,
  scrollOffset = 0,
  isMobile = false,
}) => {
  const pointsRef = useRef();
  const geometryRef = useRef();

  // Adjust count for mobile
  const actualCount = isMobile ? Math.floor(count * 0.3) : count;

  // Generate particle data
  const { positions, sizes, colorArray, velocities, phases } = useMemo(() => {
    const positions = new Float32Array(actualCount * 3);
    const sizes = new Float32Array(actualCount);
    const colorArray = new Float32Array(actualCount * 3);
    const velocities = new Float32Array(actualCount * 3);
    const phases = new Float32Array(actualCount);

    for (let i = 0; i < actualCount; i++) {
      // Random position in 3D space
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * depth - depth / 2;

      // Random size with depth-based adjustment
      const depthFactor = (positions[i * 3 + 2] + depth) / depth;
      sizes[i] = (1 + Math.random() * 2) * (0.5 + depthFactor * 0.5);

      // Random color from palette
      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;

      // Velocity for drift animation
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = Math.random() * 0.02 + 0.005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      // Random phase for varied animation
      phases[i] = Math.random() * Math.PI * 2;
    }

    return { positions, sizes, colorArray, velocities, phases };
  }, [actualCount, spread, depth, colors]);

  useFrame((state) => {
    if (!pointsRef.current || !geometryRef.current) return;

    const time = state.clock.getElapsedTime() * speed;
    const positionAttr = geometryRef.current.attributes.position;
    const sizeAttr = geometryRef.current.attributes.size;

    for (let i = 0; i < actualCount; i++) {
      // Floating animation
      const phase = phases[i];
      const baseX = positions[i * 3];
      const baseY = positions[i * 3 + 1];
      const baseZ = positions[i * 3 + 2];

      // Gentle floating motion
      positionAttr.array[i * 3] = baseX + Math.sin(time + phase) * 0.1;
      positionAttr.array[i * 3 + 1] = baseY + Math.cos(time * 0.5 + phase) * 0.15;
      positionAttr.array[i * 3 + 2] = baseZ + Math.sin(time * 0.3 + phase) * 0.05;

      // Apply scroll parallax
      positionAttr.array[i * 3 + 1] += scrollOffset * (0.5 + baseZ * 0.1);

      // Pulsing size
      const pulse = Math.sin(time * 2 + phase) * 0.3 + 1;
      sizeAttr.array[i] = sizes[i] * pulse;

      // Wrap particles that go too high
      if (positionAttr.array[i * 3 + 1] > spread / 2) {
        positionAttr.array[i * 3 + 1] = -spread / 2;
      }
    }

    positionAttr.needsUpdate = true;
    sizeAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={actualCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={actualCount}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={actualCount}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleField;
