import React from 'react';

export const OwlMascot: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <circle cx="100" cy="100" r="90" className="fill-slate-200 dark:fill-slate-800 transition-colors duration-300" />
      <path d="M40,190 Q100,210 160,190" className="fill-slate-300 dark:fill-slate-700 transition-colors duration-300" />
      
      {/* Ears/Tufts */}
      <path d="M40,50 L20,10 L70,40 Z" className="fill-slate-300 dark:fill-slate-700 transition-colors duration-300" />
      <path d="M160,50 L180,10 L130,40 Z" className="fill-slate-300 dark:fill-slate-700 transition-colors duration-300" />

      {/* Face Plate */}
      <path 
        d="M50,80 Q100,120 150,80 Q150,50 120,50 Q100,70 80,50 Q50,50 50,80" 
        className="fill-white dark:fill-slate-900 transition-colors duration-300"
      />

      {/* Eyes - Large Outer */}
      <circle cx="70" cy="80" r="25" className="fill-owl-900 dark:fill-owl-500 transition-colors duration-300" />
      <circle cx="130" cy="80" r="25" className="fill-owl-900 dark:fill-owl-500 transition-colors duration-300" />
      
      {/* Eyes - Pupils (Animated blink logic is handled via masking usually, but we'll do simple shapes) */}
      <circle cx="70" cy="80" r="10" className="fill-white animate-pulse" />
      <circle cx="130" cy="80" r="10" className="fill-white animate-pulse" />

      {/* Beak */}
      <path d="M90,100 L110,100 L100,120 Z" className="fill-orange-400" />
      
      {/* Wings */}
      <path d="M10,100 Q5,150 40,160" className="stroke-slate-300 dark:stroke-slate-600 stroke-4 fill-none" />
      <path d="M190,100 Q195,150 160,160" className="stroke-slate-300 dark:stroke-slate-600 stroke-4 fill-none" />
    </svg>
  );
};