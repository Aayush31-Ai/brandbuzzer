'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import InteractiveBlob from './InteractiveBlob';

export default function CTA({
  onBookCall = () => {},
  badge = 'READY TO GET LOUD?',
  titleLine1 = 'START WITH ONE',
  titleLine2 = 'VIRAL CAMPAIGN.',
  description = 'Pick one core product or upcoming milestone. Brand Buzzers engineers high-retention storytelling, thumb-stopping motion direction, and algorithmic distribution. We turn passive scrollers into obsessed brand evangelists — guaranteed.',
  buttonText = 'BOOK A DISCOVERY CALL',
  className = '',
}) {
  return (
    <section
      id="cta"
      className={`relative w-full min-h-[580px] max-h-[880px] py-16 sm:py-20 md:py-24 flex items-center justify-center px-6 sm:px-10 lg:px-14 xl:px-20 max-w-7xl mx-auto overflow-hidden bg-[#050505] text-white ${className}`.trim()}
    >
      {/* Ambient Radial Lighting Glows */}
      <div
        className="absolute top-1/4 -left-36 w-[500px] h-[450px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(204,255,0,0.035) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute bottom-10 -right-36 w-[500px] h-[450px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, rgba(204,255,0,0.015) 45%, transparent 75%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT: 3D INTERACTIVE LUXURY CORE SHOWCASE                */}
          {/* ======================================================== */}
          <div className="w-full flex items-center justify-center lg:order-1 select-none">
            <InteractiveBlob className="w-full" />
          </div>

          {/* ======================================================== */}
          {/* RIGHT: CONTENT + STRICTLY ONE HIGH-CONVERTING BUTTON     */}
          {/* ======================================================== */}
          <div className="space-y-4 sm:space-y-5 max-w-lg lg:order-2">
            
            {/* Category Dash Tag */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold">
              <span className="w-6 sm:w-7 h-[2px] bg-[#CCFF00] inline-block" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black leading-[1.08] tracking-tight text-white uppercase">
              {titleLine1} <br />
              <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                {titleLine2}
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="text-xs sm:text-sm md:text-[14px] text-neutral-400 leading-relaxed font-normal">
              {description}
            </p>

            {/* Guarantee / Micro Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-[11px] sm:text-xs text-neutral-400 pt-0.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>48h Sprint Kickoff</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Zero Long-Term Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Direct Founder Access</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 sm:pt-3">
              <button
                type="button"
                onClick={onBookCall}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-xs tracking-wider uppercase text-black bg-[#CCFF00] hover:bg-[#d8ff1a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>

                {/* Sweeping Shimmer Reflection Light */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export { CTA as CTAWithVerticalMarqueeLeft };
