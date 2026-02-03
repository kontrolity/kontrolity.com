import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook to track scroll progress within a specific element or viewport
 * @param {Object} options - Configuration options
 * @param {React.RefObject} options.ref - Reference to the element to track
 * @param {number} options.offset - Offset in pixels to start tracking
 * @param {boolean} options.clamp - Whether to clamp values between 0 and 1
 * @returns {Object} Scroll progress data
 */
export const useScrollProgress = (options = {}) => {
  const { ref, offset = 0, clamp = true } = options;
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  const calculateProgress = useCallback(() => {
    if (!ref?.current) {
      // Calculate viewport-based progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      let newProgress = (window.scrollY - offset) / documentHeight;

      if (clamp) {
        newProgress = Math.max(0, Math.min(1, newProgress));
      }

      setProgress(newProgress);
      setScrollY(window.scrollY);
      return;
    }

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if element is in view
    const elementInView = rect.top < windowHeight && rect.bottom > 0;
    setIsInView(elementInView);

    if (!elementInView) {
      setProgress(rect.top >= windowHeight ? 0 : 1);
      return;
    }

    // Calculate progress through the element
    const elementHeight = rect.height;
    const visibleStart = Math.max(0, -rect.top);
    const visibleEnd = Math.min(elementHeight, windowHeight - rect.top);
    const visibleHeight = visibleEnd - visibleStart;

    // Progress based on how much of the element has scrolled past
    let newProgress = (-rect.top + offset) / (elementHeight - windowHeight + offset);

    if (clamp) {
      newProgress = Math.max(0, Math.min(1, newProgress));
    }

    setProgress(newProgress);
    setScrollY(window.scrollY);
  }, [ref, offset, clamp]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        calculateProgress();
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [calculateProgress]);

  useEffect(() => {
    calculateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll, calculateProgress]);

  return {
    progress,
    isInView,
    scrollY,
    // Eased versions for smoother animations
    progressEased: easeInOutCubic(progress),
    progressEasedOut: easeOutCubic(progress),
  };
};

// Easing functions
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default useScrollProgress;
