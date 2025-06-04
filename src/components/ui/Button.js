'use client';

import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    disabled:opacity-50 disabled:cursor-not-allowed
    transform-gpu backface-hidden
    relative overflow-hidden
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-400 to-purple-600
      text-white border-0
      hover:from-cyan-300 hover:to-purple-500
      hover:shadow-lg hover:shadow-cyan-500/25
      focus:ring-cyan-500
      btn-hover-lift glow-hover
    `,
    secondary: `
      bg-transparent border-2 border-cyan-400
      text-cyan-400 hover:text-white
      hover:bg-cyan-400 hover:border-cyan-300
      hover:shadow-lg hover:shadow-cyan-400/25
      focus:ring-cyan-400
      btn-hover-lift
    `,
    ghost: `
      bg-transparent border-0
      text-gray-300 hover:text-white
      hover:bg-white/10
      focus:ring-gray-400
      btn-hover-lift
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600
      text-white border-0
      hover:from-red-400 hover:to-red-500
      hover:shadow-lg hover:shadow-red-500/25
      focus:ring-red-500
      btn-hover-lift
    `,
    success: `
      bg-gradient-to-r from-green-500 to-green-600
      text-white border-0
      hover:from-green-400 hover:to-green-500
      hover:shadow-lg hover:shadow-green-500/25
      focus:ring-green-500
      btn-hover-lift
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-4 text-xl'
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="spinner w-5 h-5 border-2"></div>
        </div>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {/* Ripple effect overlay */}
      <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
