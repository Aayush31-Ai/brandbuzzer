import React, { useState, useMemo } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

/**
 * CardSpotlight - Interactive card container with mouse-following radial gradient spotlight.
 * Features Brand Buzzers' signature neon highlight (#CCFF00 / rgba(204, 255, 0, 0.15)) by default.
 */
export const CardSpotlight = ({
  children,
  radius = 350,
  color = 'rgba(204, 255, 0, 0.15)',
  className = '',
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Parse color to ensure clean translucent glow even if hex (#CCFF00) is passed
  const spotlightColor = useMemo(() => {
    if (!color) return 'rgba(204, 255, 0, 0.15)';
    if (color.startsWith('#')) {
      const cleanHex = color.replace('#', '');
      if (cleanHex.length === 6) {
        const r = parseInt(cleanHex.substring(0, 2), 16);
        const g = parseInt(cleanHex.substring(2, 4), 16);
        const b = parseInt(cleanHex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, 0.16)`;
      }
    }
    return color;
  }, [color]);

  return (
    <div
      className={`group/spotlight relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#060606] transition-all duration-300 hover:border-[#CCFF00]/40 ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Mouse Tracking Radial Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

export default CardSpotlight;

