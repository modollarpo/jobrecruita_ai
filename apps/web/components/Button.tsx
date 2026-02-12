// Shared Button component (web)
import React from 'react';

export function Button({ children, onClick, ...props }: { children: React.ReactNode; onClick?: () => void; [key: string]: any }) {
  return (
    import React from 'react';

    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      children: React.ReactNode;
      variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
      size?: 'sm' | 'md' | 'lg';
      loading?: boolean;
      icon?: React.ReactNode;
      ariaLabel?: string;
    }

    const base =
      'inline-flex items-center justify-center font-semibold rounded focus:outline-none transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-offset-2 focus-visible:ring-4 focus-visible:ring-blue-400';

    const variants = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
      secondary:
        'bg-white text-blue-700 border border-blue-300 hover:bg-blue-50 focus-visible:ring-blue-400',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      ghost:
        'bg-transparent text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-400',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
      (
        {
          children,
          variant = 'primary',
          size = 'md',
          loading = false,
          icon,
          className = '',
          ariaLabel,
          ...props
        },
        ref
      ) => (
        <button
          ref={ref}
          className={[
            base,
            variants[variant],
            sizes[size],
            className,
            loading ? 'opacity-70 pointer-events-none' : '',
            'focus-visible:outline-none focus-visible:ring-4',
          ].join(' ')}
          aria-label={ariaLabel}
          aria-busy={loading}
          tabIndex={0}
          role="button"
          {...props}
        >
          {icon && <span className="mr-2" aria-hidden="true">{icon}</span>}
          {loading ? (
            <span className="animate-spin mr-2 w-4 h-4 border-2 border-t-transparent border-white rounded-full" aria-hidden="true" />
          ) : null}
          {children}
        </button>
      )
    );

    Button.displayName = 'Button';
