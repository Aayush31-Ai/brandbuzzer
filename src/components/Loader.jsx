import React, { useState, useEffect, useRef } from 'react';
import bLogo from '../assets/b-logo-cropped.png';

  const PHASES = [
    { threshold: 0, text: 'SYSTEM INITIALIZING // CORE ENGINES' },
    { threshold: 28, text: 'CALIBRATING CULTURAL MOMENTUM' },
    { threshold: 62, text: 'SYNCHRONIZING VIRAL ARCHITECTURE' },
    { threshold: 88, text: 'ENGAGING UNFAIR BRAND ADVANTAGE' },
    { threshold: 100, text: 'IMPOSSIBLE TO IGNORE // READY' },
  ];

  export default function Loader({ onComplete }) {
    const [count, setCount] = useState(0);
    const [phaseText, setPhaseText] = useState(PHASES[0].text);
    const [isLeaving, setIsLeaving] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const animFrameRef = useRef(null);
    const isLeavingRef = useRef(false);

    useEffect(() => {
      // Prevent body scroll while loader is visible
      document.body.style.overflow = 'hidden';

      const startTime = performance.now();
      const duration = 2400; // 2.4s snappy, cinematic runtime

      const tick = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth custom ease-in-out curve
        const eased =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const currentCount = Math.min(Math.floor(eased * 100), 100);
        setCount(currentCount);

        // Update current operational phase text
        for (let i = PHASES.length - 1; i >= 0; i--) {
          if (currentCount >= PHASES[i].threshold) {
            setPhaseText(PHASES[i].text);
            break;
          }
        }

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(tick);
        } else {
          setCount(100);
          setPhaseText('IMPOSSIBLE TO IGNORE // READY');
          // Brief tactile pause at 100% before smooth upward curtain wipe
          setTimeout(() => {
            if (!isLeavingRef.current) {
              isLeavingRef.current = true;
              setIsLeaving(true);
              document.body.style.overflow = '';
            }
          }, 220);
        }
      };

      animFrameRef.current = requestAnimationFrame(tick);

      return () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        document.body.style.overflow = '';
      };
  }, []);

  const handleTransitionEnd = (e) => {
      if (e.target === e.currentTarget && e.propertyName === 'transform') {
        setIsVisible(false);
        onComplete?.();
      }
    };

    if (!isVisible) return null;

    return (
      <div
        onTransitionEnd={handleTransitionEnd}
      className={`fixed inset-0 z-[9999] bg - [#050505] text - white select - none overflow - hidden
    transform - gpu will - change - transform
    transition - transform duration - 1000
    ease - [cubic - bezier(0.76, 0, 0.24, 1)]
        ${ isLeaving ? '-translate-y-full' : 'translate-y-0' } `}
    >
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
    linear - gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear - gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial Center Spotlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

      {/* Framing Viewfinder Corner Brackets */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-white/40 pointer-events-none" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-white/40 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-white/40 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-white/40 pointer-events-none" />

      {/* Main Inner Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col justify-between">
        
        {/* Top Status Header */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="text-white font-semibold">Brand Buzzers™</span>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-neutral-400 hidden sm:inline">System Transmission</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hidden md:inline">[ LAT: 28.6139° N ]</span>
            <span className="text-white border border-white/20 px-2 py-0.5 rounded text-[10px] tracking-[0.2em]">
              STATUS // ACTIVE
            </span>
          </div>
        </div>

        {/* Center Kinetic Aperture & Monogram */}
        <div className="flex flex-col items-center justify-center my-auto py-8">
          
          {/* Concentric Rotating Precision Rings */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
            
            {/* Outer Slow Dashed Ring */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-white/25 pointer-events-none"
              style={{
                animation: 'spin 18s linear infinite',
              }}
            />

            {/* Mid Segmented Counter-Rotating Ring */}
            <div
              className="absolute inset-4 rounded-full border border-white/10 pointer-events-none"
              style={{
                borderTopColor: 'rgba(255, 255, 255, 0.85)',
                borderRightColor: 'rgba(255, 255, 255, 0.4)',
                animation: 'spin 7s linear infinite reverse',
              }}
            />

            {/* Inner Cardinal Crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-px bg-white/10" />
              <div className="h-full w-px bg-white/10 absolute" />
            </div>

            {/* Center Pulsing Glow Backdrop */}
            <div className="absolute w-28 h-28 rounded-full bg-white/10 blur-2xl animate-pulse pointer-events-none" />

            {/* The Brand Emblem */}
            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
              <img
                src={bLogo}
                alt="Brand Buzzers Emblem"
                className="w-full h-full object-contain filter invert contrast-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              />
            </div>
          </div>

          {/* Typography: Brand Buzzers */}
          <div className="mt-6 sm:mt-8 text-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-black tracking-[0.35em] uppercase text-white">
              Brand Buzzers
            </h1>
            
            {/* Dynamic Status Pill */}
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-300">
                {phaseText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Equalizer & Massive Digital Counter */}
        <div className="flex flex-col sm:flex-row items-end justify-between gap-6 pt-4 border-t border-white/10">
          
          {/* Left: Dynamic 12-Bar Equalizer */}
          <div className="w-full sm:w-auto flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-1 h-6">
                {[60, 100, 45, 80, 30, 90, 70, 40, 95, 60, 85, 50].map((heightPercent, index) => (
                  <span
                    key={index}
                    className="w-1 bg-white rounded-full transition-all duration-150"
                    style={{
                      height: `${ Math.max(15, (heightPercent * (count / 100))) }% `,
                      opacity: 0.35 + (index % 3) * 0.25,
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                SIGNAL HARMONICS // 48.0 KHZ
              </span>
            </div>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:block">
              VIRAL MEDIA ARCHITECTURE & HIGH VELOCITY SCALING
            </p>
          </div>

          {/* Right: Massive Editorial Counter */}
          <div className="flex items-baseline gap-2">
            <span className="text-6xl sm:text-8xl md:text-9xl font-black font-mono tracking-tighter text-white tabular-nums leading-none">
              {String(count).padStart(2, '0')}
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-light font-mono text-neutral-400">
              %
            </span>
          </div>
        </div>
      </div>

      {/* Progress Track Line along Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
        <div
          className="h-full bg-white transition-all duration-75 ease-out shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{ width: `${ count }% ` }}
        />
      </div>

      {/* CSS Keyframes for slow rotation */}
      <style>{`
    @keyframes spin {
          from {
        transform: rotate(0deg);
      }
          to {
        transform: rotate(360deg);
      }
    }
    `}</style>
    </div>
  );
}
