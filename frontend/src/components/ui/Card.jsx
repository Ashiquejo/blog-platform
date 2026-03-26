import React from 'react';
import { cn } from '../../lib/utils';
import './ui.css';

const Card = React.forwardRef(({ className, hoverable = false, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "card",
        hoverable && "card-hoverable",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
export { Card };
