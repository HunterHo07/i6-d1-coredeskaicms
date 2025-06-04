'use client';

import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(({ 
  type = 'text',
  label,
  placeholder,
  error,
  helperText,
  className = '',
  disabled = false,
  required = false,
  icon: Icon,
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const baseClasses = `
    w-full px-4 py-3 rounded-lg
    bg-white/5 border border-white/10
    text-white placeholder-gray-400
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
    hover:border-white/20
    disabled:opacity-50 disabled:cursor-not-allowed
    glass
  `;

  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';
  const iconPadding = Icon ? 'pl-12' : '';
  const passwordPadding = type === 'password' ? 'pr-12' : '';

  const classes = `
    ${baseClasses}
    ${errorClasses}
    ${iconPadding}
    ${passwordPadding}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          className={classes}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        
        {/* Focus glow effect */}
        {isFocused && (
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 -z-10 blur-sm"></div>
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-400 flex items-center">
          <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
