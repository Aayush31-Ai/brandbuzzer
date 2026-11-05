import React from 'react';

/**
 * Component / BgGredient
 * 
 * Silky, ultra-seamless gray gradient background.
 * Engineered with 100% feathered edge masks and heavy volumetric blur.
 * Completely eliminates sharp cuts, border lines, and grid boxes
 * to ensure fluid transition between website sections.
 */
export function Component({
  className = '',
  color = 'gray',
  children,
  ...props
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`.trim()}
      style={{
        // Feathered vertical mask ensures 100% seamless blending at both top and bottom
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
      aria-hidden="true"
      {...props}
    >
      {/* 1. Upper Ambient Soft Gray Dome (Gently lights the Work section header) */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[950px] sm:w-[1300px] h-[500px] sm:h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255, 255, 255, 0.18) 0%, rgba(180, 185, 195, 0.09) 35%, rgba(100, 105, 115, 0.03) 60%, transparent 75%)',
          filter: 'blur(65px)',
        }}
      />

      {/* 2. Center Ambient Halo (Directly illuminates the tilted project cards) */}
      <div
        className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[550px] sm:h-[700px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(230, 235, 245, 0.15) 0%, rgba(140, 145, 155, 0.06) 40%, transparent 70%)',
          filter: 'blur(75px)',
        }}
      />

      {/* 3. Left Flanking Soft Silver Cloud */}
      <div
        className="absolute top-[30%] -left-32 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(220, 225, 235, 0.13) 0%, rgba(130, 135, 145, 0.04) 40%, transparent 70%)',
          filter: 'blur(85px)',
        }}
      />

      {/* 4. Right Flanking Soft Silver Cloud */}
      <div
        className="absolute top-[36%] -right-32 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(220, 225, 235, 0.13) 0%, rgba(130, 135, 145, 0.04) 40%, transparent 70%)',
          filter: 'blur(85px)',
        }}
      />

      {/* 5. Lower Ambient Floor Glow around Stats & Brand Marquee */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1150px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(210, 215, 225, 0.11) 0%, rgba(120, 125, 135, 0.03) 45%, transparent 70%)',
          filter: 'blur(65px)',
        }}
      />

      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  );
}

export const BgGredient = Component;
export const BgGradient = Component;
export default Component;
