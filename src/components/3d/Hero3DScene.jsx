'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

import NeuralCore from './NeuralCore';
import OrbitalNodes from './OrbitalNodes';
import DataFlow from './DataFlow';
import FloatingGrid from './FloatingGrid';

/**
 * Main hero visualization combining all 3D elements
 */
const Hero3DScene = ({
  scrollProgress = 0,
  mouseX = 0,
  mouseY = 0,
  enablePostProcessing = true,
  isMobile = false,
}) => {
  const groupRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Camera parallax based on mouse position
  useFrame((state) => {
    if (!groupRef.current) return;

    // Mouse parallax
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseX * 0.3,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseY * 0.2,
      0.05
    );

    // Scroll-linked animation
    const scrollScale = 1 - scrollProgress * 0.3;
    const scrollY = scrollProgress * -2;

    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      scrollScale,
      0.1
    ));
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      scrollY,
      0.1
    );
  });

  // Adjust settings for mobile
  const nodeCount = isMobile ? 15 : 40;
  const particleCount = isMobile ? 50 : 150;

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />

      {/* Main scene group with parallax */}
      <group ref={groupRef}>
        {/* Central Neural Core (AI Brain) */}
        <NeuralCore
          position={[0, 0, 0]}
          scale={0.8}
          color="#22d3ee"
          secondaryColor="#a855f7"
          intensity={1.5}
          speed={0.8}
        />

        {/* Orbiting Nodes */}
        <OrbitalNodes
          position={[0, 0, 0]}
          nodeCount={nodeCount}
          layers={3}
          baseRadius={1.8}
          colors={['#22d3ee', '#a855f7', '#10b981']}
          speed={0.5}
          showConnections={!isMobile}
          isMobile={isMobile}
        />

        {/* Data Flow Particles */}
        <DataFlow
          position={[0, 0, 0]}
          particleCount={particleCount}
          pathCount={isMobile ? 4 : 8}
          radius={2.5}
          colors={['#22d3ee', '#a855f7', '#10b981']}
          speed={0.8}
          isMobile={isMobile}
        />
      </group>

      {/* Floating Grid Background */}
      <FloatingGrid
        position={[0, -2, -2]}
        size={60}
        divisions={40}
        color="#22d3ee"
        fadeDistance={30}
        rotation={[-Math.PI / 2.2, 0, 0]}
      />

      {/* Post-processing effects */}
      {enablePostProcessing && mounted && !isMobile && (
        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={300}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={new THREE.Vector2(0.001, 0.001)}
          />
          <Vignette
            offset={0.3}
            darkness={0.6}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      )}
    </>
  );
};

export default Hero3DScene;
