// Shared Button component (web & mobile)
import React from 'react';

export function Button({ children, onClick, ...props }: { children: React.ReactNode; onClick?: () => void; [key: string]: any }) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={
        'inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-premium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ' +
        (props.className || '')
      }
    >
      {children}
    </button>
  );
}
