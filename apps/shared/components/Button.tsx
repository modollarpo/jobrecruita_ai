// Shared Button component (web & mobile)
import React from 'react';

export function Button({ children, onClick, ...props }: { children: React.ReactNode; onClick?: () => void; [key: string]: any }) {
  return (
    <button
      className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
