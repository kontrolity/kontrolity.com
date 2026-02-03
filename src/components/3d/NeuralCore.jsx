'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Central AI brain visualization - glowing icosahedron with breathing effect
 */
const NeuralCore = ({
  position = [0, 0, 0],
  scale = 1,
  color = '#22d3ee',
  secondaryColor = '#a855f7',
  intensity = 1,
  speed = 1,
}) => {
  const coreRef = useRef();
  const glowRef = useRef();
  const outerGlowRef = useRef();

  // Convert hex colors to THREE.Color
  const primaryColor = useMemo(() => new THREE.Color(color), [color]);
  const secondary = useMemo(() => new THREE.Color(secondaryColor), [secondaryColor]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed;

    if (coreRef.current) {
      // Breathing rotation
      coreRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      coreRef.current.rotation.y = time * 0.1;
      coreRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;
    }

    if (glowRef.current) {
      // Pulsing glow
      const pulse = Math.sin(time * 2) * 0.2 + 1;
      glowRef.current.scale.setScalar(pulse * scale * 1.1);
    }

    if (outerGlowRef.current) {
      // Outer glow animation
      const outerPulse = Math.sin(time * 1.5) * 0.15 + 1;
      outerGlowRef.current.scale.setScalar(outerPulse * scale * 1.3);
      outerGlowRef.current.material.opacity = 0.2 + Math.sin(time * 2) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Outer glow sphere */}
      <Sphere ref={outerGlowRef} args={[1, 32, 32]} scale={scale * 1.3}>
        <meshBasicMaterial
          color={primaryColor}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Middle glow layer */}
      <Sphere ref={glowRef} args={[1, 32, 32]} scale={scale * 1.1}>
        <meshBasicMaterial
          color={primaryColor}
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Main icosahedron core */}
      <Icosahedron ref={coreRef} args={[1, 1]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={intensity * 0.5}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.9}
        />
      </Icosahedron>

      {/* Inner wireframe */}
      <Icosahedron args={[1, 1]} scale={scale * 0.95}>
        <meshBasicMaterial
          color={secondary}
          wireframe
          transparent
          opacity={0.5}
        />
      </Icosahedron>

      {/* Point light for glow effect */}
      <pointLight
        color={primaryColor}
        intensity={intensity * 2}
        distance={10}
        decay={2}
      />
    </group>
  );
};

export default NeuralCore;
