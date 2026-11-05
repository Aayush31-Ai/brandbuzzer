'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Users,
  Sparkles,
  Target,
  Laptop,
  Film,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// The exact 6 services required
const SERVICES = [
  {
    num: '01',
    title: 'Social Media Marketing',
    category: 'Viral Architecture',
    desc: 'High-converting campaigns designed to trigger recommendation loops and massive brand recall.',
    icon: TrendingUp,
    align: 'left',
  },
  {
    num: '02',
    title: 'Social Media Management',
    category: 'Always-On Presence',
    desc: 'Daily publishing cadence, proactive moderation, and real-time cultural trendjacking.',
    icon: Users,
    align: 'right',
  },
  {
    num: '03',
    title: 'Content Creation',
    category: 'Cinema-Grade Visuals',
    desc: 'Scroll-stopping 9:16 short-form reels, bold motion graphics, and psychological hooks.',
    icon: Sparkles,
    align: 'left',
  },
  {
    num: '04',
    title: 'Performance Marketing',
    category: 'Data-Obsessed Growth',
    desc: 'Multi-variant ad funnels across Meta and Google engineered to multiply cash revenue.',
    icon: Target,
    align: 'right',
  },
  {
    num: '05',
    title: 'Website & App Development',
    category: 'Interactive 3D Tech',
    desc: 'Sub-second web experiences, modern React architecture, and frictionless conversion UX.',
    icon: Laptop,
    align: 'left',
  },
  {
    num: '06',
    title: 'Video Production & Editing',
    category: 'High-Retention Narrative',
    desc: 'Cinema camera direction, sound design, VFX, and viral retention pacing that converts.',
    icon: Film,
    align: 'right',
  },
];

// Node Y coordinates in the 360x600 SVG viewBox (compacted & shifted upward to eliminate 6th point collision)
const NODE_Y = [50, 130, 210, 290, 370, 440];

export default function MobileServicesScroller({ onSelectService }) {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const headerRef = useRef(null);
  const decorRef = useRef(null);
  const pathRef = useRef(null);
  const glowPathRef = useRef(null);

  const markerRefs = useRef([]);
  const cardRefs = useRef([]);
  const connectorRefs = useRef([]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // Use gsap.matchMedia for 100% reliable responsive mobile activation (< 768px)
    const mm = gsap.matchMedia();

    mm.add('(max-width: 767px)', () => {
      const pathEl = pathRef.current;
      const glowPathEl = glowPathRef.current;
      if (!pathEl || !triggerRef.current || !pinRef.current) return;

      let pathLength = 800;
      try {
        pathLength = pathEl.getTotalLength() || 800;
      } catch (e) {
        pathLength = 800;
      }

      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Initial state: Pure black section, elements hidden until user scrolls into the section
      gsap.set(headerRef.current, { opacity: 0, y: -16 });
      gsap.set(decorRef.current, { opacity: 0 });

      gsap.set([pathEl, glowPathEl], {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        opacity: 0,
      });

      markerRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, scale: 0.3 });
      });

      connectorRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0 });
      });

      cardRefs.current.forEach((el, idx) => {
        if (el) {
          const isLeft = SERVICES[idx].align === 'left';
          gsap.set(el, { opacity: 0, x: isLeft ? -24 : 24 });
        }
      });

      if (prefersReducedMotion) {
        // Fallback for reduced motion: reveal instantly on enter
        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(
              [
                headerRef.current,
                decorRef.current,
                pathEl,
                glowPathEl,
                ...markerRefs.current,
                ...cardRefs.current,
                ...connectorRefs.current,
              ],
              { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.6 }
            );
            gsap.to([pathEl, glowPathEl], { strokeDashoffset: 0, duration: 0.6 });
          },
        });
        return;
      }

      // Smooth coordinated GSAP scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=1200', // Crisp, responsive scroll distance
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 0.5, // Responsive scrub response
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial fade-in of section header & ambient edge decor
      tl.to(
        headerRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        0
      );
      tl.to(
        decorRef.current,
        { opacity: 0.5, duration: 0.4, ease: 'power2.out' },
        0
      );
      tl.to(
        [pathEl, glowPathEl],
        { opacity: 1, duration: 0.25, ease: 'none' },
        0.1
      );

      // Node length fractions along the S-curve
      const fractions = [0.08, 0.25, 0.42, 0.60, 0.78, 0.94];
      const stepDuration = 0.85;
      let currentTime = 0.35;

      SERVICES.forEach((service, i) => {
        const targetOffset = pathLength * (1 - fractions[i]);

        // Draw path segment to node i
        tl.to(
          [pathEl, glowPathEl],
          {
            strokeDashoffset: targetOffset,
            duration: stepDuration,
            ease: 'none',
          },
          currentTime
        );

        // Marker scales and reveals as path reaches it
        if (markerRefs.current[i]) {
          tl.to(
            markerRefs.current[i],
            {
              opacity: 1,
              scale: 1,
              duration: 0.35,
              ease: 'back.out(1.8)',
            },
            currentTime + stepDuration * 0.4
          );
        }

        // Connector line appears
        if (connectorRefs.current[i]) {
          tl.to(
            connectorRefs.current[i],
            {
              opacity: 0.65,
              duration: 0.25,
              ease: 'power1.out',
            },
            currentTime + stepDuration * 0.45
          );
        }

        // Alternating service card smoothly slides in
        if (cardRefs.current[i]) {
          tl.to(
            cardRefs.current[i],
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              ease: 'power2.out',
            },
            currentTime + stepDuration * 0.5
          );
        }

        currentTime += stepDuration;
      });

      // Brief release once all 6 cards are animated
      tl.to({}, { duration: 0.15 });
    });

    // Refresh ScrollTrigger to calculate accurate positions after render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      className="relative w-full bg-[#000000] text-white"
    >
      {/* Pinned viewport stage: stays fixed while scrolling through the 6 stages */}
      <div
        ref={pinRef}
        className="h-[100dvh] min-h-[580px] w-full overflow-hidden flex flex-col justify-between pt-[96px] pb-3 px-3 bg-[#000000]"
        style={{
          contain: 'paint',
        }}
      >
        {/* Minimal Abstract Decorative Elements on Left & Right Edges */}
        <div
          ref={decorRef}
          className="absolute inset-0 pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          {/* Left subtle curved line & glowing dots */}
          <div className="absolute top-1/4 left-2 w-px h-48 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute top-[32%] left-1.5 w-1.5 h-1.5 rounded-full bg-white/60 blur-[1px]" />
          <div className="absolute top-[52%] left-1.5 w-1 h-1 rounded-full bg-white/40" />

          {/* Right subtle abstract waves & dots */}
          <div className="absolute top-1/3 right-2 w-px h-56 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute top-[40%] right-1.5 w-1.5 h-1.5 rounded-full bg-white/60 blur-[1px]" />
          <div className="absolute top-[65%] right-1.5 w-1 h-1 rounded-full bg-white/40" />
        </div>

        {/* Section Header: positioned safely below the fixed navbar */}
        <div
          ref={headerRef}
          className="relative z-10 text-center pb-1 shrink-0"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-1">
            <span className="w-5 h-[1.5px] bg-[#CCFF00] inline-block" />
            <span>OUR SERVICES</span>
            <span className="w-5 h-[1.5px] bg-[#CCFF00] inline-block" />
          </div>
          <h2 className="text-sm sm:text-base font-black tracking-tight text-white uppercase leading-tight">
            SOLUTIONS BUILT TO MAKE BRANDS MOVE.
          </h2>
        </div>

        {/* The Central S-Curve Infographic Stage */}
        <div className="relative z-10 w-full max-w-[390px] mx-auto my-auto flex-1 flex items-center justify-center min-h-[380px] max-h-[440px]">
          <div className="relative w-full h-[420px] max-h-[430px]">
            {/* SVG Canvas with Flowing S-Curve */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 360 600"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Soft Ambient Shadow Path */}
              <path
                d="M 180 15 C 170 25, 175 35, 180 50 C 205 85, 205 95, 180 130 C 155 165, 155 175, 180 210 C 205 245, 205 255, 180 290 C 155 325, 155 335, 180 370 C 205 400, 205 410, 180 440 C 174 460, 178 470, 180 478"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Glowing Blur Trail */}
              <path
                ref={glowPathRef}
                d="M 180 15 C 170 25, 175 35, 180 50 C 205 85, 205 95, 180 130 C 155 165, 155 175, 180 210 C 205 245, 205 255, 180 290 C 155 325, 155 335, 180 370 C 205 400, 205 410, 180 440 C 174 460, 178 470, 180 478"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="opacity-75 blur-[2.5px]"
              />

              {/* Crisp Foreground White Drawing Line */}
              <path
                ref={pathRef}
                d="M 180 15 C 170 25, 175 35, 180 50 C 205 85, 205 95, 180 130 C 155 165, 155 175, 180 210 C 205 245, 205 255, 180 290 C 155 325, 155 335, 180 370 C 205 400, 205 410, 180 440 C 174 460, 178 470, 180 478"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Horizontal Connector lines from path nodes to cards */}
              {SERVICES.map((s, idx) => {
                const y = NODE_Y[idx];
                const isLeft = s.align === 'left';
                return (
                  <line
                    key={`conn-${idx}`}
                    ref={(el) => (connectorRefs.current[idx] = el)}
                    x1={isLeft ? 166 : 194}
                    y1={y}
                    x2={isLeft ? 150 : 210}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.45)"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                );
              })}
            </svg>

            {/* 6 Step Nodes and Alternating Service Cards */}
            {SERVICES.map((service, idx) => {
              const yPercent = (NODE_Y[idx] / 600) * 100;
              const isLeft = service.align === 'left';
              const Icon = service.icon;

              return (
                <div
                  key={service.num}
                  className="absolute w-full left-0 pointer-events-none"
                  style={{
                    top: `${yPercent}%`,
                    transform: 'translateY(-50%)',
                  }}
                >
                  {/* Central Numbered Circular Marker */}
                  <div
                    ref={(el) => (markerRefs.current[idx] = el)}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-20 w-7 h-7 rounded-full border border-white/70 bg-[#000000] flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-[0_0_12px_rgba(255,255,255,0.45)] select-none pointer-events-auto"
                  >
                    <span>{service.num}</span>
                  </div>

                  {/* Alternating Dark Glass Service Card */}
                  <div
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onClick={() => onSelectService?.(idx)}
                    className={`absolute z-10 w-[43%] max-w-[152px] cursor-pointer pointer-events-auto transition-transform duration-200 active:scale-95 ${
                      isLeft ? 'left-1.5 sm:left-3' : 'right-1.5 sm:right-3'
                    }`}
                  >
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#0a0a0c]/92 border border-white/15 backdrop-blur-md hover:border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                      {/* Card Header: Category & Outline Icon */}
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-neutral-400 truncate max-w-[85px]">
                          {service.category}
                        </span>
                        <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight leading-tight line-clamp-2">
                        {service.title}
                      </h3>

                      {/* Brief description */}
                      <p className="text-[8px] text-neutral-400 font-normal mt-0.5 leading-tight line-clamp-2">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Progress Hint Bar at bottom of stage */}
        <div className="relative z-10 text-center pb-1 shrink-0">
          <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
            SCROLL TO EXPLORE SERVICES
          </p>
        </div>
      </div>
    </div>
  );
}
