import React from 'react';

export default function Button({ children, size = 'default', variant = 'primary', className = '', ...props }) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantClasses = {
    primary:
      'bg-ink text-background hover:bg-accent shadow-sm shadow-ink/10',
    secondary:
      'bg-transparent text-ink border border-border hover:border-ink',
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size] || sizeClasses.default} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
