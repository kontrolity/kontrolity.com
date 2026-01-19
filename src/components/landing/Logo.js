import React from 'react';

export default function Logo({ className = "", size = "md", theme = "dark" }) {
  const sizes = {
    sm: "h-12",
    md: "h-16",
    lg: "h-24"
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/kontrolity-clarity.png"
        alt="Kontrolity Logo"
        className={currentSize}
      />
    </div>
  );
}
