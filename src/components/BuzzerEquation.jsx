'use client';

import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const CheckIcon = ({ className = 'h-4 w-4 text-[#CCFF00] mt-1 shrink-0' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export const Step = ({ title }) => {
  return (
    <li className="flex gap-2.5 items-start">
      <CheckIcon />
      <p className="text-neutral-200 text-xs sm:text-[13px] leading-relaxed font-medium">
        {title}
      </p>
    </li>
  );
};

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-96 w-96 p-8">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Authentication steps
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Follow these steps to secure your account:
        <ul className="list-none mt-2 space-y-2">
          <Step title="Enter your email address" />
          <Step title="Create a strong password" />
          <Step title="Set up two-factor authentication" />
          <Step title="Verify your identity" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Ensuring your account is properly secured helps protect your personal
        information and data.
      </p>
    </CardSpotlight>
  );
}

const DEFAULT_EQUATION_ITEMS = [
  {
    number: '01',
    title: 'STRATEGY SPARK',
    description:
      'Every great buzz starts with a big idea and a smart plan. We dig deep into your brand, understand your audience, and turn insights into strategies that give every move a purpose.',
    steps: [
      'Audience & cultural pulse check',
      'High-conviction brand positioning',
      'Purpose-driven growth roadmap',
    ],
    footer: 'THE THINKING BEHIND THE BUZZ',
  },
  {
    number: '02',
    title: 'CREATIVE CHAOS',
    description:
      'We believe the best ideas happen when creativity gets a little wild. From bold visuals to unexpected campaigns, we mix imagination, playful thinking, and a little madness to make brands impossible to ignore.',
    steps: [
      'Unconventional narrative hooks',
      'Bold thumb-stopping visuals',
      'Wild viral campaign stunts',
    ],
    footer: 'WHERE THE FUN GETS LOUD',
  },
  {
    number: '03',
    title: 'THE BUZZ EFFECT',
    description:
      'Making noise is just the beginning. We turn attention into meaningful connections, engagement into action, and creative ideas into real brand growth. Because the best buzz doesn\'t just get heard — it gets results.',
    steps: [
      'Multi-channel viral amplification',
      'Cult-like brand engagement',
      'Compounding real-world growth',
    ],
    footer: 'THE BUZZ THAT KEEPS ON GROWING',
  },
];

/**
 * 3D Interactive Tilt Card with Spring Physics & Layered Parallax Depth
 */
export function Equation3DCard({ item }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, jitter-free spring physics
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  // 3D tilt angles mapped from cursor position relative to card center
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full [perspective:1000px] select-none"
    >
      <CardSpotlight
        color="rgba(204, 255, 0, 0.16)"
        radius={320}
        className="h-full p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[360px] sm:min-h-[390px] border border-white/10 bg-[#060606]/90 backdrop-blur-md rounded-2xl shadow-2xl relative hover:border-[#CCFF00]/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(204,255,0,0.22)] transition-colors duration-300"
        style={{
          transformStyle: 'preserve-3d',
          outline: '1px solid transparent',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Top Accent Hover Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />

        {/* Card Content Top with 3D Pop Layer */}
        <div className="relative z-20" style={{ transform: 'translateZ(24px)', transformStyle: 'preserve-3d' }}>
          {/* Outlined Stylized Italic Number with elevated 3D depth */}
          <div
            className="text-3xl sm:text-4xl italic font-sans font-black tracking-wider select-none transition-all duration-300"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
              color: 'transparent',
              transform: 'translateZ(24px)',
            }}
          >
            <span className="transition-all duration-300 group-hover/spotlight:[text-shadow:0_0_16px_rgba(204,255,0,0.45)] group-hover/spotlight:text-[#CCFF00]/30">
              {item.number}
            </span>
          </div>

          {/* Card Title */}
          <h3
            className="mt-4 sm:mt-5 text-base sm:text-lg font-black tracking-tight text-white uppercase group-hover/spotlight:text-white transition-colors duration-200"
            style={{ transform: 'translateZ(16px)' }}
          >
            {item.title}
          </h3>

          {/* Card Description */}
          <p
            className="mt-2.5 sm:mt-3 text-xs sm:text-[13px] text-neutral-400 font-normal leading-relaxed group-hover/spotlight:text-neutral-300 transition-colors duration-200"
            style={{ transform: 'translateZ(10px)' }}
          >
            {item.description}
          </p>

          {/* Optional Checklist / Steps */}
          {item.steps && item.steps.length > 0 && (
            <div
              className="text-neutral-200 mt-5 pt-4 border-t border-white/10"
              style={{ transform: 'translateZ(12px)' }}
            >
              <ul className="list-none space-y-2 mt-1">
                {item.steps.map((step, sIdx) => (
                  <Step key={sIdx} title={step} />
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Card Bottom: Categorical Footer Text */}
        <div
          className="mt-auto pt-6 sm:pt-8 relative z-20 border-t border-white/5"
          style={{ transform: 'translateZ(14px)' }}
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-neutral-500 group-hover/spotlight:text-[#CCFF00] transition-colors duration-200">
            {item.footer}
          </span>
        </div>
      </CardSpotlight>
    </motion.div>
  );
}

export default function BuzzerEquation({
  badge = 'HOW WE WIN',
  titleLine1 = 'THE BUZZERS',
  titleLine2 = 'EQUATION',
  subtitle = 'Anyone can promise noise. We engineered an agency where brand buzz is structural — three disciplines, one outcome, every time.',
  items = DEFAULT_EQUATION_ITEMS,
  className = '',
}) {
  return (
    <section
      id="equation"
      className={`relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-10 lg:px-14 xl:px-20 max-w-7xl mx-auto overflow-hidden ${className}`.trim()}
    >
      {/* Noise Texture (Dots Grid) Background with Ultra-Smooth Radial Feathering */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.22) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.25) 65%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.25) 65%, transparent 85%)',
        }}
      />

      {/* Seamless Edge Feathering Gradients (Zero Sharp Lines) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-[1]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-[1]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-[1]" />

      {/* Soft continuous ambient gradient lighting */}
      <div
        className="absolute top-1/3 -left-40 w-[550px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(204,255,0,0.03) 0%, rgba(255,255,255,0.015) 40%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />
      <div
        className="absolute -bottom-20 -right-40 w-[550px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(204,255,0,0.015) 45%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Decorative Giant Background Outlined Watermark */}
      <div
        className="absolute top-6 right-4 sm:right-16 md:right-24 text-[90px] sm:text-[180px] md:text-[260px] font-black italic select-none pointer-events-none leading-none z-0 opacity-80"
        style={{
          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.03)',
          color: 'transparent',
          fontFamily: 'sans-serif',
        }}
        aria-hidden="true"
      >
        02
      </div>

      {/* ======================================================== */}
      {/* SECTION HEADER                                           */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
        {/* Left: Badge + Heading */}
        <div>
          {/* Dash & Category Tag */}
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-3">
            <span className="w-6 sm:w-7 h-[2px] bg-[#CCFF00] inline-block" />
            <span>{badge}</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.02]">
            {titleLine1} <br />
            <span>{titleLine2}</span>
          </h2>
        </div>

        {/* Right: Structural Statement Description */}
        <div className="max-w-md lg:pb-1.5">
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3-CARD EQUATION GRID WITH 3D HOVER TILT & CARD SPOTLIGHT */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 [perspective:1200px]">
        {items.map((item, idx) => (
          <Equation3DCard key={item.number || idx} item={item} />
        ))}
      </div>
    </section>
  );
}
