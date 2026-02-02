import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <span className={className + ' font-extrabold text-2xl text-blue-700 flex items-center gap-2'}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="url(#gradient)" />
      <path d="M10 16L16 22L22 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
    JobRecruita
  </span>
);
