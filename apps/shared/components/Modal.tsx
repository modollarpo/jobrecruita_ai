// Shared Modal component (web)
import React from 'react';

export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 min-w-[300px]">
        <button className="absolute top-2 right-2" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
