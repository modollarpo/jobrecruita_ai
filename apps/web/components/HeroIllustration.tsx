import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className + ' flex justify-center items-center'}>
    <svg width="480" height="180" viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="40" width="480" height="100" rx="32" fill="url(#heroGradient)" />
      <circle cx="120" cy="90" r="40" fill="#38bdf8" opacity="0.7" />
      <circle cx="360" cy="90" r="40" fill="#14b8a6" opacity="0.7" />
      <path d="M180 90 Q240 30 300 90" stroke="#fff" strokeWidth="4" fill="none" />
      <defs>
        <linearGradient id="heroGradient" x1="0" y1="40" x2="480" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0f2fe" />
          <stop offset="1" stopColor="#f0fdfa" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);
