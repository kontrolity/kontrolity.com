'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Particle streams that converge towards a central point (for CTA section)
 */
const ConvergingStreams = ({
  streamCount = 6,
  particlesPerStream = 50,
  targetPosition = [0, 0, 0],
  radius = 8,
  colors = ['#22d3ee', '#a855f7', '#10b981'],
  speed = 1,
  isActive = true,
  isMobile = false,
}) => {
  const pointsRef = useRef();
  const geometryRef = useRef();

  // Adjust counts for mobile
  const actualStreamCount = isMobile ? Math.floor(streamCount * 0.5) : streamCount;
  const actualParticlesPerStream = isMobile ? Math.floor(particlesPerStream * 0.4) : particlesPerStream;
  const totalParticles = actualStreamCount * actualParticlesPerStream;

  // Generate stream data
  const { positions, sizes, colorArray, streamData } = useMemo(() => {
    const positions = new Float32Array(totalParticles * 3);
    const sizes = new Float32Array(totalParticles);
    const colorArray = new Float32Array(totalParticles * 3);
    const streamData = [];

    for (let s = 0; s < actualStreamCount; s++) {
      // Each stream comes from a different edge of the screen
      const angle = (s / actualStreamCount) * Math.PI * 2;
      const startX = Math.cos(angle) * radius;
      const startY = Math.sin(angle) * radius * 0.5; // Flatten vertically
      const startZ = (Math.random() - 0.5) * 2;

      const color = new THREE.Color(colors[s % colors.length]);

      for (let p = 0; p < actualParticlesPerStream; p++) {
        const idx = s * actualParticlesPerStream + p;

        // Initialize at start position with some variance
        positions[idx * 3] = startX + (Math.random() - 0.5) * 0.5;
        positions[idx * 3 + 1] = startY + (Math.random() - 0.5) * 0.5;
        positions[idx * 3 + 2] = startZ + (Math.random() - 0.5) * 0.5;

        sizes[idx] = 1.5 + Math.random() * 2;

        colorArray[idx * 3] = color.r;
        colorArray[idx * 3 + 1] = color.g;
        colorArray[idx * 3 + 2] = color.b;

        streamData.push({
          streamIndex: s,
          particleIndex: p,
          startX: startX + (Math.random() - 0.5) * 1,
          startY: startY + (Math.random() - 0.5) * 0.8,
          startZ: startZ + (Math.random() - 0.5) * 0.5,
          delay: p / actualParticlesPerStream,
          speed: 0.8 + Math.random() * 0.4,
        });
      }
    }

    return { positions, sizes, colorArray, streamData };
  }, [totalParticles, actualStreamCount, actualParticlesPerStream, radius, colors]);

  useFrame((state) => {
    if (!pointsRef.current || !geometryRef.current || !isActive) return;

    const time = state.clock.getElapsedTime() * speed;
    const positionAttr = geometryRef.current.attributes.position;
    const sizeAttr = geometryRef.current.attributes.size;

    for (let i = 0; i < totalParticles; i++) {
      const data = streamData[i];
      if (!data) continue;

      // Calculate progress along the path (0 to 1, looping)
      const progress = ((time * data.speed + data.delay) % 1);

      // Ease function for acceleration towards center
      const easedProgress = easeInQuad(progress);

      // Interpolate from start to target
      const x = THREE.MathUtils.lerp(data.startX, targetPosition[0], easedProgress);
      const y = THREE.MathUtils.lerp(data.startY, targetPosition[1], easedProgress);
      const z = THREE.MathUtils.lerp(data.startZ, targetPosition[2], easedProgress);

      // Add some spiral motion
      const spiralAngle = progress * Math.PI * 4;
      const spiralRadius = (1 - progress) * 0.3;
      const spiralX = Math.cos(spiralAngle) * spiralRadius;
      const spiralY = Math.sin(spiralAngle) * spiralRadius;

      positionAttr.array[i * 3] = x + spiralX;
      positionAttr.array[i * 3 + 1] = y + spiralY;
      positionAttr.array[i * 3 + 2] = z;

      // Size increases as particles approach center, then shrinks
      const sizeFactor = Math.sin(progress * Math.PI) * 1.5 + 0.5;
      sizeAttr.array[i] = sizes[i] * sizeFactor;
    }

    positionAttr.needsUpdate = true;
    sizeAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={totalParticles}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={totalParticles}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={totalParticles}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Easing function for acceleration effect
function easeInQuad(t) {
  return t * t;
}

export default ConvergingStreams;
