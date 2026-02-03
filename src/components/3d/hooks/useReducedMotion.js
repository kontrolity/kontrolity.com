import { useState, useEffect } from 'react';

/**
 * Hook to detect user's reduced motion preference
 * Respects prefers-reduced-motion media query
 * @returns {Object} Motion preference data and utilities
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    // Use addEventListener with fallback for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    // Check for low power mode indicators
    // Battery API (if available)
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        const checkBattery = () => {
          // Consider low power if battery is below 20% and not charging
          setIsLowPowerMode(battery.level < 0.2 && !battery.charging);
        };

        checkBattery();
        battery.addEventListener('levelchange', checkBattery);
        battery.addEventListener('chargingchange', checkBattery);
      }).catch(() => {
        // Battery API not supported or blocked
      });
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // Determine if we should reduce animations
  const shouldReduceMotion = prefersReducedMotion || isLowPowerMode;

  return {
    // Core preference
    prefersReducedMotion,
    // Low power mode detection
    isLowPowerMode,
    // Combined recommendation
    shouldReduceMotion,
    // Utility: Get animation duration multiplier
    getDurationMultiplier: (baseDuration) => {
      if (shouldReduceMotion) return 0;
      return baseDuration;
    },
    // Utility: Get conditional animation props for framer-motion
    getMotionProps: (animatedProps, staticProps = {}) => {
      return shouldReduceMotion ? staticProps : animatedProps;
    },
    // Utility: Get particle count based on motion preference
    getParticleCount: (desktopCount, mobileCount = 50) => {
      if (shouldReduceMotion) return 0;
      // Also consider device performance
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      return isMobile ? mobileCount : desktopCount;
    },
    // Utility: Check if device can handle heavy 3D
    canHandle3D: () => {
      if (typeof window === 'undefined') return false;

      // Check WebGL support
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return false;
      } catch {
        return false;
      }

      // Check for reduced motion preference
      if (shouldReduceMotion) return false;

      // Check for low-end device indicators
      const deviceMemory = navigator.deviceMemory;
      if (deviceMemory && deviceMemory < 4) return false;

      const hardwareConcurrency = navigator.hardwareConcurrency;
      if (hardwareConcurrency && hardwareConcurrency < 4) return false;

      return true;
    },
  };
};

export default useReducedMotion;
