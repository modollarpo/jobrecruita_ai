// Shared Modal component (web)
import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  'aria-label'?: string;
}

export function Modal({ open, onClose, children, 'aria-label': ariaLabel }: ModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      data-testid="modal-root"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 min-w-[300px]"
        role="dialog"
        aria-modal="true"
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      >
        <button className="absolute top-2 right-2" onClick={onClose}>×</button>
        {React.isValidElement(children) ? React.Children.only(children) : <div>{children}</div>}
      </div>
    </div>
  );
}
