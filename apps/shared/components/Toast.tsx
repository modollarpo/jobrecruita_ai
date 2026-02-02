// Shared Toast notification
import React from 'react';

export function Toast({ message, type = 'info' }: { message: string; type?: 'info' | 'success' | 'error' }) {
  const color = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  return (
    <div className={`fixed bottom-4 right-4 px-4 py-2 rounded text-white shadow-lg ${color}`}>
      {message}
    </div>
  );
}
