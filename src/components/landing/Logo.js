import React from 'react';

export default function Logo({ className = "", size = "md", theme = "dark" }) {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/kontrolitynew.png"
        alt="Kontrolity Logo"
        className={currentSize}
      />
      <span className={`text-xl font-bold tracking-tight ml-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
        Kontrolity
      </span>
    </div>
  );
}
