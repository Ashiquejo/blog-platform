import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';
import './ui.css';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', isLoading, children, ...props }, ref) => {
  const baseStyles = 'btn';
  
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };

  const sizes = {
    default: 'btn-default',
    sm: 'btn-sm',
    lg: 'btn-lg',
    icon: 'btn-icon',
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 size={16} className="btn-spinner" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export { Button };
