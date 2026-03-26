import React from 'react';
import { cn } from '../../lib/utils';
import './ui.css';

const Input = React.forwardRef(({ className, type = "text", error, ...props }, ref) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        className={cn("input", error && "input-error", className)}
        ref={ref}
        {...props}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export { Input };
