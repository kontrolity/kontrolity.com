import React from 'react';

/**
 * SectionDivider - Creates smooth visual transitions between sections
 * Using clean wave SVG design
 *
 * @param {string} fillColor - The fill color for the wave (color of the section it transitions TO)
 * @param {boolean} flip - Flip horizontally
 * @param {boolean} invert - Flip vertically (wave points up instead of down)
 * @param {string} className - Additional CSS classes
 * @param {number} height - Height of the divider in pixels (default: 120)
 */
export default function SectionDivider({
  fillColor = '#F2ECF5',
  flip = false,
  invert = false,
  className = '',
  height = 120
}) {
  // Build transform based on flip and invert options
  const getTransform = () => {
    const transforms = [];
    if (flip) transforms.push('rotateY(180deg)');
    if (invert) transforms.push('rotateX(180deg)');
    return transforms.length > 0 ? transforms.join(' ') : 'none';
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{
        marginTop: '-1px',
        marginBottom: '-1px',
      }}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(100% + 1.3px)',
          height: `${height}px`,
          transform: getTransform(),
        }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={fillColor}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}
