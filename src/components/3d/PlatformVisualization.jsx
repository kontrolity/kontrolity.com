'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 3D Platform architecture visualization with stacked transparent layers
 */
const PlatformVisualization = ({
  activeLayer = 1,
  colors = {
    layer1: '#10b981', // Emerald - Context Engine
    layer2: '#a855f7', // Purple - AI Intelligence
    layer3: '#22d3ee', // Cyan - Products
  },
  isMobile = false,
}) => {
  const groupRef = useRef();
  const beamRefs = useRef([]);
  const iconRefs = useRef([]);

  // Layer configuration
  const layers = useMemo(() => [
    { y: -1.2, color: colors.layer1, index: 2, label: 'Context Engine' },
    { y: 0, color: colors.layer2, index: 1, label: 'AI Intelligence' },
    { y: 1.2, color: colors.layer3, index: 0, label: 'Products' },
  ], [colors]);

  // Floating icons for each layer
  const icons = useMemo(() => {
    if (isMobile) return [];

    return [
      // Layer 3 icons (Products)
      { layer: 0, angle: 0, distance: 1.5, size: 0.15 },
      { layer: 0, angle: Math.PI * 0.5, distance: 1.5, size: 0.12 },
      { layer: 0, angle: Math.PI, distance: 1.5, size: 0.15 },
      { layer: 0, angle: Math.PI * 1.5, distance: 1.5, size: 0.12 },
      // Layer 2 icons (AI)
      { layer: 1, angle: Math.PI * 0.25, distance: 1.3, size: 0.18 },
      { layer: 1, angle: Math.PI * 0.75, distance: 1.3, size: 0.15 },
      { layer: 1, angle: Math.PI * 1.25, distance: 1.3, size: 0.18 },
      { layer: 1, angle: Math.PI * 1.75, distance: 1.3, size: 0.15 },
      // Layer 1 icons (Context)
      { layer: 2, angle: Math.PI * 0.125, distance: 1.4, size: 0.12 },
      { layer: 2, angle: Math.PI * 0.625, distance: 1.4, size: 0.15 },
      { layer: 2, angle: Math.PI * 1.125, distance: 1.4, size: 0.12 },
      { layer: 2, angle: Math.PI * 1.625, distance: 1.4, size: 0.15 },
    ];
  }, [isMobile]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate the entire group slowly
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }

    // Animate connection beams
    beamRefs.current.forEach((beam, idx) => {
      if (beam && beam.material) {
        // Pulse effect for data flow
        const pulse = Math.sin(time * 3 + idx) * 0.3 + 0.7;
        beam.material.opacity = pulse * 0.6;
      }
    });

    // Orbit floating icons
    iconRefs.current.forEach((icon, idx) => {
      if (!icon || !icons[idx]) return;

      const iconData = icons[idx];
      const layer = layers[iconData.layer];
      const orbitSpeed = 0.3 + iconData.layer * 0.1;
      const currentAngle = iconData.angle + time * orbitSpeed;

      icon.position.x = Math.cos(currentAngle) * iconData.distance;
      icon.position.z = Math.sin(currentAngle) * iconData.distance;
      icon.position.y = layer.y;

      // Floating animation
      icon.position.y += Math.sin(time * 2 + idx) * 0.05;

      // Scale based on active layer
      const isActive = iconData.layer === (2 - activeLayer);
      const targetScale = isActive ? 1.2 : 0.8;
      icon.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    });
  });

  return (
    <group ref={groupRef}>
      {/* Platform Layers (Transparent Cylinders) */}
      {layers.map((layer, idx) => (
        <group key={`layer-${idx}`}>
          <Float
            speed={2}
            rotationIntensity={0}
            floatIntensity={0.1}
            floatingRange={[-0.05, 0.05]}
          >
            <Cylinder
              args={[1.2, 1.2, 0.3, 32]}
              position={[0, layer.y, 0]}
            >
              <meshPhysicalMaterial
                color={layer.color}
                transparent
                opacity={layer.index === activeLayer ? 0.4 : 0.15}
                roughness={0.1}
                metalness={0.2}
                transmission={0.6}
                thickness={0.5}
                envMapIntensity={1}
                side={THREE.DoubleSide}
              />
            </Cylinder>
          </Float>

          {/* Layer ring glow */}
          <mesh position={[0, layer.y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.1, 1.25, 64]} />
            <meshBasicMaterial
              color={layer.color}
              transparent
              opacity={layer.index === activeLayer ? 0.8 : 0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}

      {/* Connection Beams between layers */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const x = Math.cos(angle) * 0.8;
        const z = Math.sin(angle) * 0.8;

        return (
          <mesh
            key={`beam-${i}`}
            ref={(el) => (beamRefs.current[i] = el)}
            position={[x, 0, z]}
          >
            <cylinderGeometry args={[0.02, 0.02, 2.4, 8]} />
            <meshBasicMaterial
              color="#22d3ee"
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}

      {/* Data pulse particles along beams */}
      <DataPulses beamCount={4} layerHeight={2.4} />

      {/* Floating Icons */}
      {icons.map((iconData, idx) => (
        <Sphere
          key={`icon-${idx}`}
          ref={(el) => (iconRefs.current[idx] = el)}
          args={[iconData.size, 16, 16]}
        >
          <meshBasicMaterial
            color={layers[iconData.layer].color}
            transparent
            opacity={0.9}
          />
        </Sphere>
      ))}

      {/* Central Core */}
      <Sphere args={[0.25, 32, 32]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#ffffff"
          emissive={layers[2 - activeLayer]?.color || '#22d3ee'}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Point lights for glow */}
      <pointLight
        color={layers[2 - activeLayer]?.color || '#22d3ee'}
        intensity={2}
        distance={5}
        position={[0, 0, 0]}
      />
    </group>
  );
};

// Data pulse particles component
const DataPulses = ({ beamCount = 4, layerHeight = 2.4 }) => {
  const pulsesRef = useRef([]);
  const pulseCount = beamCount * 3;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    pulsesRef.current.forEach((pulse, idx) => {
      if (!pulse) return;

      const beamIdx = idx % beamCount;
      const pulseIdx = Math.floor(idx / beamCount);
      const angle = (beamIdx / beamCount) * Math.PI * 2;

      // Calculate y position with animation
      const speed = 0.5 + pulseIdx * 0.2;
      const yOffset = ((time * speed + pulseIdx * 0.3) % 1) * layerHeight - layerHeight / 2;

      pulse.position.x = Math.cos(angle) * 0.8;
      pulse.position.z = Math.sin(angle) * 0.8;
      pulse.position.y = yOffset;

      // Fade based on position
      const fade = 1 - Math.abs(yOffset) / (layerHeight / 2);
      pulse.material.opacity = fade * 0.8;
    });
  });

  return (
    <>
      {Array.from({ length: pulseCount }).map((_, idx) => (
        <Sphere
          key={`pulse-${idx}`}
          ref={(el) => (pulsesRef.current[idx] = el)}
          args={[0.04, 8, 8]}
        >
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </>
  );
};

export default PlatformVisualization;
