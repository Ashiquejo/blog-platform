import React from 'react';
import { cn } from '../../lib/utils';
import './ui.css';

const Textarea = React.forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="input-wrapper">
      <textarea
        className={cn("textarea", error && "textarea-error", className)}
        ref={ref}
        {...props}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
export { Textarea };
