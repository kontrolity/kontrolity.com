'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useReducedMotion } from './hooks/useReducedMotion';

/**
 * Base canvas wrapper with performance optimizations and fallback
 * @param {Object} props
 * @param {React.ReactNode} props.children - 3D scene children
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.enablePostProcessing - Enable post-processing effects
 * @param {Object} props.cameraProps - Camera configuration
 * @param {React.ReactNode} props.fallback - Fallback content when WebGL not available
 */
const BaseCanvas = ({
  children,
  className = '',
  enablePostProcessing = true,
  cameraProps = { position: [0, 0, 5], fov: 75 },
  fallback = null,
  style = {},
  ...props
}) => {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const { shouldReduceMotion, canHandle3D } = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsWebGLAvailable(!!gl);
    } catch {
      setIsWebGLAvailable(false);
    }
  }, []);

  // Server-side rendering fallback
  if (!isMounted) {
    return (
      <div className={`base-canvas-container ${className}`} style={style}>
        {fallback}
      </div>
    );
  }

  // WebGL not available fallback
  if (!isWebGLAvailable) {
    return (
      <div className={`base-canvas-container base-canvas-fallback ${className}`} style={style}>
        {fallback || <WebGLFallback />}
      </div>
    );
  }

  // Reduced motion fallback
  if (shouldReduceMotion && fallback) {
    return (
      <div className={`base-canvas-container ${className}`} style={style}>
        {fallback}
      </div>
    );
  }

  return (
    <div className={`base-canvas-container ${className}`} style={style}>
      <Canvas
        camera={cameraProps}
        dpr={[1, 2]} // Device pixel ratio clamped for performance
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        {...props}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Simple fallback component when WebGL is not available
const WebGLFallback = () => (
  <div className="flex items-center justify-center w-full h-full">
    <div className="text-center text-slate-500">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <p className="text-sm">3D visualization requires WebGL</p>
    </div>
  </div>
);

export default BaseCanvas;
