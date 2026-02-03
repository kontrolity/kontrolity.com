import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook to track mouse position for parallax effects
 * @param {Object} options - Configuration options
 * @param {number} options.sensitivity - How much the parallax affects the output (0-1)
 * @param {boolean} options.smoothing - Whether to apply smoothing to mouse movement
 * @param {number} options.smoothingFactor - Smoothing factor (0-1, lower = smoother)
 * @param {React.RefObject} options.containerRef - Reference to container element
 * @returns {Object} Mouse position data
 */
export const useMouseParallax = (options = {}) => {
  const {
    sensitivity = 0.1,
    smoothing = true,
    smoothingFactor = 0.1,
    containerRef,
  } = options;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  const updatePosition = useCallback(() => {
    if (smoothing) {
      // Lerp towards target
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * smoothingFactor;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * smoothingFactor;

      setNormalizedPosition({
        x: currentPosition.current.x,
        y: currentPosition.current.y,
      });

      animationFrame.current = requestAnimationFrame(updatePosition);
    }
  }, [smoothing, smoothingFactor]);

  const handleMouseMove = useCallback((e) => {
    let x, y;

    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    } else {
      x = (e.clientX / window.innerWidth - 0.5) * 2;
      y = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    setPosition({ x: e.clientX, y: e.clientY });

    if (smoothing) {
      targetPosition.current = { x: x * sensitivity, y: y * sensitivity };
    } else {
      setNormalizedPosition({ x: x * sensitivity, y: y * sensitivity });
    }
  }, [containerRef, sensitivity, smoothing]);

  const handleMouseLeave = useCallback(() => {
    if (smoothing) {
      targetPosition.current = { x: 0, y: 0 };
    } else {
      setNormalizedPosition({ x: 0, y: 0 });
    }
  }, [smoothing]);

  useEffect(() => {
    const element = containerRef?.current || window;

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    if (smoothing) {
      animationFrame.current = requestAnimationFrame(updatePosition);
    }

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave, updatePosition, smoothing, containerRef]);

  return {
    // Raw mouse position in pixels
    position,
    // Normalized position (-sensitivity to +sensitivity range)
    normalizedPosition,
    // Shorthand for common use cases
    x: normalizedPosition.x,
    y: normalizedPosition.y,
    // For Three.js camera rotation (inverted Y)
    rotationX: -normalizedPosition.y,
    rotationY: normalizedPosition.x,
  };
};

export default useMouseParallax;
