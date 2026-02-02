// Shared Button component (web)
import React from 'react';

export function Button({ children, onClick, ...props }: { children: React.ReactNode; onClick?: () => void; [key: string]: any }) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={
        'px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-400 ' +
        (props.className || '')
      }
    >
      {children}
    </button>
  );
}
