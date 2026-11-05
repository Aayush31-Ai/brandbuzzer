import React, { useState } from 'react';

export const Avatar = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-neutral-900 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});
Avatar.displayName = 'Avatar';

export const AvatarImage = React.forwardRef(
  ({ className = '', src, alt = '', onError, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);

    if (hasError || !src) {
      return null;
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        onError={(e) => {
          setHasError(true);
          onError?.(e);
        }}
        className={`aspect-square h-full w-full object-cover ${className}`.trim()}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = React.forwardRef(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex h-full w-full items-center justify-center rounded-full bg-neutral-800 text-xs font-bold text-neutral-300 ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AvatarFallback.displayName = 'AvatarFallback';

export default Avatar;

