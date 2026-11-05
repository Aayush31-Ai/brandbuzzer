import React from 'react';

export const Card = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-2xl text-white ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';

export const CardHeader = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
});
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`font-semibold leading-none tracking-tight text-white ${className}`.trim()}
      {...props}
    >
      {children}
    </h3>
  );
});
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <p ref={ref} className={`text-sm text-neutral-400 ${className}`.trim()} {...props}>
      {children}
    </p>
  );
});
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`p-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
});
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`flex items-center p-0 pt-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
});
CardFooter.displayName = 'CardFooter';

export default Card;

