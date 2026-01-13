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
      <span className="text-xl font-bold tracking-tight ml-1">
        <span className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>K</span>
        <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>ontrol</span>
        <span className={theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent' : 'text-slate-900'}>ity</span>
      </span>
    </div>
  );
}
