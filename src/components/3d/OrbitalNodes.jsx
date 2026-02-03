'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Orbiting nodes in color-coded layers around the neural core
 */
const OrbitalNodes = ({
  position = [0, 0, 0],
  nodeCount = 30,
  layers = 3,
  baseRadius = 2,
  colors = ['#22d3ee', '#a855f7', '#10b981'], // Cyan, Purple, Emerald
  speed = 1,
  showConnections = true,
  isMobile = false,
}) => {
  const groupRef = useRef();
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);

  // Adjust count for mobile
  const actualNodeCount = isMobile ? Math.floor(nodeCount * 0.5) : nodeCount;
  const nodesPerLayer = Math.floor(actualNodeCount / layers);

  // Generate node positions for each layer
  const nodeData = useMemo(() => {
    const nodes = [];

    for (let layer = 0; layer < layers; layer++) {
      const radius = baseRadius + layer * 0.8;
      const color = new THREE.Color(colors[layer % colors.length]);
      const tilt = (layer * Math.PI) / 6; // Different tilt for each layer

      for (let i = 0; i < nodesPerLayer; i++) {
        const theta = (i / nodesPerLayer) * Math.PI * 2;
        const phi = Math.PI / 2 + (Math.random() - 0.5) * 0.5;

        nodes.push({
          layer,
          index: i,
          radius,
          theta,
          phi,
          tilt,
          color,
          size: 0.03 + Math.random() * 0.04,
          speed: 0.3 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    return nodes;
  }, [layers, nodesPerLayer, baseRadius, colors]);

  // Generate connections between nodes
  const connectionData = useMemo(() => {
    if (!showConnections) return [];

    const connections = [];
    const maxConnections = isMobile ? 10 : 20;

    // Connect nodes within same layer
    for (let i = 0; i < Math.min(nodeData.length, maxConnections); i++) {
      const node1 = nodeData[i];
      const node2 = nodeData[(i + 1) % nodeData.length];

      if (node1.layer === node2.layer && Math.random() > 0.5) {
        connections.push({
          from: i,
          to: (i + 1) % nodeData.length,
          color: node1.color,
        });
      }
    }

    // Connect nodes between layers
    for (let i = 0; i < layers - 1; i++) {
      const layerStart = i * nodesPerLayer;
      const nextLayerStart = (i + 1) * nodesPerLayer;

      for (let j = 0; j < 3; j++) {
        const fromIdx = layerStart + Math.floor(Math.random() * nodesPerLayer);
        const toIdx = nextLayerStart + Math.floor(Math.random() * nodesPerLayer);

        connections.push({
          from: fromIdx,
          to: toIdx,
          color: new THREE.Color(colors[i]),
        });
      }
    }

    return connections;
  }, [nodeData, showConnections, layers, nodesPerLayer, colors, isMobile]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed;

    // Update node positions
    nodesRef.current.forEach((nodeRef, idx) => {
      if (!nodeRef) return;

      const node = nodeData[idx];
      if (!node) return;

      // Orbital motion
      const theta = node.theta + time * node.speed * (node.layer % 2 === 0 ? 1 : -1);
      const phi = node.phi + Math.sin(time * 0.5 + node.phase) * 0.1;

      // Apply rotation for layer tilt
      const x = node.radius * Math.sin(phi) * Math.cos(theta);
      const y = node.radius * Math.cos(phi) + Math.sin(time + node.phase) * 0.1;
      const z = node.radius * Math.sin(phi) * Math.sin(theta);

      // Apply layer tilt
      const tiltedY = y * Math.cos(node.tilt) - z * Math.sin(node.tilt);
      const tiltedZ = y * Math.sin(node.tilt) + z * Math.cos(node.tilt);

      nodeRef.position.set(x, tiltedY, tiltedZ);

      // Pulsing effect
      const pulse = 1 + Math.sin(time * 3 + node.phase) * 0.2;
      nodeRef.scale.setScalar(pulse);
    });

    // Update group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Render nodes */}
      {nodeData.map((node, idx) => (
        <Sphere
          key={`node-${idx}`}
          ref={(el) => (nodesRef.current[idx] = el)}
          args={[node.size, 8, 8]}
        >
          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.9}
          />
        </Sphere>
      ))}

      {/* Render connections as lines */}
      {connectionData.map((conn, idx) => (
        <ConnectionLine
          key={`conn-${idx}`}
          nodeRefs={nodesRef}
          fromIdx={conn.from}
          toIdx={conn.to}
          color={conn.color}
        />
      ))}
    </group>
  );
};

// Connection line component
const ConnectionLine = ({ nodeRefs, fromIdx, toIdx, color }) => {
  const lineRef = useRef();

  useFrame(() => {
    if (!lineRef.current) return;

    const from = nodeRefs.current[fromIdx];
    const to = nodeRefs.current[toIdx];

    if (from && to) {
      lineRef.current.geometry.setFromPoints([
        from.position,
        to.position,
      ]);
    }
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        linewidth={1}
      />
    </line>
  );
};

export default OrbitalNodes;
