'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Animated data flow particles along spline paths between nodes
 */
const DataFlow = ({
  position = [0, 0, 0],
  particleCount = 100,
  pathCount = 8,
  radius = 2.5,
  colors = ['#22d3ee', '#a855f7', '#10b981'],
  speed = 1,
  isMobile = false,
}) => {
  const pointsRef = useRef();
  const geometryRef = useRef();

  // Adjust counts for mobile
  const actualParticleCount = isMobile ? Math.floor(particleCount * 0.3) : particleCount;
  const actualPathCount = isMobile ? Math.floor(pathCount * 0.5) : pathCount;

  // Generate paths and particles
  const { positions, sizes, alphas, pathIndices, colorArray } = useMemo(() => {
    const positions = new Float32Array(actualParticleCount * 3);
    const sizes = new Float32Array(actualParticleCount);
    const alphas = new Float32Array(actualParticleCount);
    const pathIndices = new Float32Array(actualParticleCount);
    const colorArray = new Float32Array(actualParticleCount * 3);

    const particlesPerPath = Math.floor(actualParticleCount / actualPathCount);

    for (let i = 0; i < actualParticleCount; i++) {
      const pathIndex = Math.floor(i / particlesPerPath) % actualPathCount;
      pathIndices[i] = pathIndex;

      // Random position along path (will be animated)
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;

      sizes[i] = 2 + Math.random() * 3;
      alphas[i] = Math.random();

      // Color based on path
      const color = new THREE.Color(colors[pathIndex % colors.length]);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }

    return { positions, sizes, alphas, pathIndices, colorArray };
  }, [actualParticleCount, actualPathCount, colors]);

  // Generate path curves
  const paths = useMemo(() => {
    const curves = [];

    for (let i = 0; i < actualPathCount; i++) {
      const angle = (i / actualPathCount) * Math.PI * 2;

      // Create curved path from center to outer ring
      const startPoint = new THREE.Vector3(0, 0, 0);
      const endAngle = angle + (Math.random() - 0.5) * 0.5;
      const endPoint = new THREE.Vector3(
        Math.cos(endAngle) * radius,
        (Math.random() - 0.5) * 0.5,
        Math.sin(endAngle) * radius
      );

      // Control points for curved path
      const midRadius = radius * 0.5;
      const controlPoint1 = new THREE.Vector3(
        Math.cos(angle) * midRadius * 0.3,
        Math.random() * 0.3,
        Math.sin(angle) * midRadius * 0.3
      );
      const controlPoint2 = new THREE.Vector3(
        Math.cos(angle) * midRadius,
        Math.random() * 0.2 - 0.1,
        Math.sin(angle) * midRadius
      );

      curves.push(
        new THREE.CubicBezierCurve3(startPoint, controlPoint1, controlPoint2, endPoint)
      );
    }

    return curves;
  }, [actualPathCount, radius]);

  useFrame((state) => {
    if (!pointsRef.current || !geometryRef.current) return;

    const time = state.clock.getElapsedTime() * speed;
    const positionAttr = geometryRef.current.attributes.position;
    const alphaAttr = geometryRef.current.attributes.alpha;

    const particlesPerPath = Math.floor(actualParticleCount / actualPathCount);

    for (let i = 0; i < actualParticleCount; i++) {
      const pathIndex = Math.floor(pathIndices[i]);
      const particleIndexInPath = i % particlesPerPath;
      const path = paths[pathIndex];

      if (!path) continue;

      // Calculate progress along path
      const baseProgress = particleIndexInPath / particlesPerPath;
      const animatedProgress = (baseProgress + time * 0.2) % 1;

      // Get position on curve
      const point = path.getPoint(animatedProgress);

      positionAttr.array[i * 3] = point.x;
      positionAttr.array[i * 3 + 1] = point.y;
      positionAttr.array[i * 3 + 2] = point.z;

      // Fade in/out at ends
      const fadeFactor = Math.sin(animatedProgress * Math.PI);
      alphaAttr.array[i] = fadeFactor * 0.8;
    }

    positionAttr.needsUpdate = true;
    alphaAttr.needsUpdate = true;
  });

  return (
    <group position={position}>
      <points ref={pointsRef}>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={actualParticleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={actualParticleCount}
            array={sizes}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-alpha"
            count={actualParticleCount}
            array={alphas}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-color"
            count={actualParticleCount}
            array={colorArray}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={3}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export default DataFlow;
