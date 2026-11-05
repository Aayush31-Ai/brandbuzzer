import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ConnectedStream({ position, scrollYProgress }) {
  const isMirror = position === -1;

  const paths = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      // Point 0: Top of Hero
      const rawX0 = -(380 - i * 8);
      const y0 = -(189 + i * 9);
      const rawCx1 = -(312 - i * 8);
      const cy1 = 216 - i * 9;
      
      // Point 1: Mid Hero
      const rawX1 = 152 - i * 8;
      const y1 = 343 - i * 9;
      const rawCx2 = 616 - i * 8;
      const cy2 = 470 - i * 9;

      // Point 2: Entering About Us
      const rawX2 = 684 - i * 8;
      const y2 = 820 + i * 12;
      const rawCx3 = 780 - i * 6;
      const cy3 = 1120 + i * 16;

      // Point 3: Crossing seamlessly through About Us into Work
      const rawX3 = 920 + i * 10;
      const y3 = 1480 + i * 20;
      const rawCx4 = 960 - i * 8;
      const cy4 = 1880 + i * 22;

      // Point 4: Sweeping gracefully behind Work section cards
      const rawX4 = 720 - i * 14;
      const y4 = 2260 + i * 24;
      const rawCx5 = 480 - i * 16;
      const cy5 = 2540 + i * 26;

      // Point 5: Soft tail ending smoothly
      const rawX5 = 320 - i * 18;
      const y5 = 2820 + i * 28;

      const x = (val) => (isMirror ? Math.round(1000 - val) : Math.round(val));

      const d = `M${x(rawX0)} ${y0} C${x(rawCx1)} ${cy1} ${x(rawX1)} ${y1} C${x(
        rawCx2
      )} ${cy2} ${x(rawX2)} ${y2} C${x(rawCx3)} ${cy3} ${x(rawX3)} ${y3} C${x(
        rawCx4
      )} ${cy4} ${x(rawX4)} ${y4} C${x(rawCx5)} ${cy5} ${x(rawX5)} ${y5}`;

      return {
        id: i,
        d,
        width: 0.6 + i * 0.035,
        baseOpacity: 0.12 + i * 0.02,
        duration: 22 + (i % 6) * 3,
      };
    });
  }, [isMirror]);

  const lineSpread = useTransform(scrollYProgress, [0, 0.4, 0.75, 1], [1, 1.12, 1.25, 1.35]);
  const lineTravelY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const glowOpacity = useTransform(scrollYProgress, [0.08, 0.35, 0.68, 0.95], [0, 0.75, 0.65, 0.15]);

  const gradientId = isMirror ? 'flow-grad-mirror' : 'flow-grad-main';
  const glowId = isMirror ? 'glow-grad-mirror' : 'glow-grad-main';

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        scaleX: lineSpread,
        y: lineTravelY,
        transformOrigin: isMirror ? 'right center' : 'left center',
        contain: 'layout paint',
      }}
    >
      <svg
        className="w-full h-full pointer-events-none"
        viewBox="0 0 1000 2800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1={isMirror ? '100%' : '0%'}
            y1="0%"
            x2={isMirror ? '0%' : '100%'}
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="22%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="38%" stopColor="#E6FF4D" stopOpacity="0.75" />
            <stop offset="54%" stopColor="#D8FF00" stopOpacity="0.7" />
            <stop offset="72%" stopColor="#CCFF00" stopOpacity="0.5" />
            <stop offset="88%" stopColor="#D8FF00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
          </linearGradient>

          <filter id={`neon-glow-${position}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id={glowId}
            x1={isMirror ? '100%' : '0%'}
            y1="0%"
            x2={isMirror ? '0%' : '100%'}
            y2="100%"
          >
            <stop offset="0%" stopColor="#D8FF00" stopOpacity="0" />
            <stop offset="26%" stopColor="#D8FF00" stopOpacity="0.2" />
            <stop offset="48%" stopColor="#D8FF00" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#D8FF00" stopOpacity="0.5" />
            <stop offset="88%" stopColor="#D8FF00" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D8FF00" stopOpacity="0" />
          </linearGradient>
        </defs>

        {paths.map((path) => (
          <motion.path
            key={`base-${path.id}`}
            d={path.d}
            stroke={`url(#${gradientId})`}
            strokeWidth={path.width}
            strokeOpacity={path.baseOpacity}
            initial={{ pathLength: 0.45, pathOffset: 0 }}
            animate={{
              pathLength: [0.45, 0.75, 0.45],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {paths.map((path) => (
          <motion.path
            key={`glow-${path.id}`}
            d={path.d}
            stroke={`url(#${glowId})`}
            strokeWidth={path.width * 2.2}
            filter={`url(#neon-glow-${position})`}
            style={{
              opacity: glowOpacity,
            }}
            initial={{ pathLength: 0.45, pathOffset: 0 }}
            animate={{
              pathLength: [0.45, 0.75, 0.45],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export default function ConnectedScrollPaths({ wrapperRef }) {
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        contain: 'layout paint',
      }}
    >
      <ConnectedStream position={1} scrollYProgress={scrollYProgress} />
      <ConnectedStream position={-1} scrollYProgress={scrollYProgress} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-transparent pointer-events-none" />
    </div>
  );
}

