import React from 'react';
import TechText from './TechText';

export default function AboutUs({
  title = "About us",
  subtitleLine1 = "We don’t just build brands. We make them",
  subtitleLine2 = "impossible to ignore.",
  buttonText = "LEARN MORE",
  onLearnMore = () => { },
  transparentBg = false,
}) {
  return (
    <section
      id="about"
      className={`relative w-full pt-6 sm:pt-10 md:pt-12 pb-6 sm:pb-10 ${transparentBg ? 'bg-transparent' : 'bg-[#050505]'
        }`}
    >
      {/* ======================================================== */}
      {/* BALANCED AMBIENT GRADIENTS (NATURAL CONTINUOUS GLOW)     */}
      {/* ======================================================== */}

      {/* LEFT GLOW: Soft, elegant ambient diffusion without boundary clipping */}
      <div
        className="absolute top-1/2 -left-32 sm:-left-44 -translate-y-1/2 w-[520px] sm:w-[680px] h-[480px] sm:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.01) 62%, transparent 75%)',
          filter: 'blur(85px)',
        }}
      />

      {/* RIGHT GLOW: Soft, elegant ambient diffusion without boundary clipping */}
      <div
        className="absolute top-1/2 -right-32 sm:-right-44 -translate-y-1/2 w-[520px] sm:w-[680px] h-[480px] sm:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.01) 62%, transparent 75%)',
          filter: 'blur(85px)',
        }}
      />

      {/* ======================================================== */}
      {/* CONTENT CONTAINER                                        */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-10">

        {/* Left Side: About us heading powered by interactive TechText */}
        <div className="w-full md:w-1/2 lg:w-3/5 h-28 sm:h-36 md:h-44 relative flex items-center">
          <TechText
            text={title}
            fontWeight={900}
            fontSize={140}
            letterSpacing={-0.04}
            color="#ffffff"
            accentColor="#CCFF00"
            align="left"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            strokeWidth={1.5}
            specks={15}
            selection={true}
            labels={true}
            draggable={true}
            bounce={0.4}
            clickKick={true}
            sweep={true}
            speed={0.8}
            guides={false}
          />
        </div>

        {/* Right Side: Right-aligned text & LEARN MORE button */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-xl">
          <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-normal leading-relaxed">
            {subtitleLine1}{' '}
            <span className="block mt-0.5 sm:mt-1 text-white font-medium">
              {subtitleLine2}
            </span>
          </p>

          <div className="mt-4 sm:mt-6">
            <button
              type="button"
              onClick={onLearnMore}
              className="group relative inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#bdf539] to-[#a3eb1a] hover:from-[#c8fa4b] hover:to-[#b0f224] active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(189,245,57,0.35)] hover:shadow-[0_0_30px_rgba(189,245,57,0.6)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{buttonText}</span>
            </button>
          </div>
        </div>

      </div>
    </section >
  );
}
