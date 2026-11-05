'use client';

import React, { useEffect, useState } from 'react';
import DitherVeil from './DitherVeil';
import brandLogo from '../../assets/brand-buzzers-logo.png';
import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';

/**
 * Generates an ultra-crisp PNG Data URL of the wordmark
 * with Brand Buzzers' signature high-voltage neon gradient.
 */
function createWordmarkDataUrl(text = 'BUZZERS') {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = 2400;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Obsidian background matching site #050505
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Bold monumental typography with auto-fit measurement
  let fontSize = 380;
  ctx.font = `900 ${fontSize}px "Plus Jakarta Sans", "Inter", -apple-system, sans-serif`;
  let textWidth = ctx.measureText(text).width;
  while (textWidth > canvas.width * 0.90 && fontSize > 120) {
    fontSize -= 10;
    ctx.font = `900 ${fontSize}px "Plus Jakarta Sans", "Inter", -apple-system, sans-serif`;
    textWidth = ctx.measureText(text).width;
  }

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // High-voltage electric neon lime & chrome gradient
  const grad = ctx.createLinearGradient(canvas.width * 0.08, 0, canvas.width * 0.92, 0);
  grad.addColorStop(0, '#CCFF00');
  grad.addColorStop(0.24, '#ffffff');
  grad.addColorStop(0.50, '#CCFF00');
  grad.addColorStop(0.76, '#ffffff');
  grad.addColorStop(1, '#a3e635');
  ctx.fillStyle = grad;

  ctx.fillText(text, canvas.width / 2, canvas.height * 0.52);
  return canvas.toDataURL('image/png');
}

export default function HalftoneWordmarkFooter({
  wordmark = 'BUZZERS',
  className = '',
}) {
  const [wordmarkSrc, setWordmarkSrc] = useState('');

  // Generate wordmark data URL on mount & when fonts load
  useEffect(() => {
    const updateSrc = () => {
      const src = createWordmarkDataUrl(wordmark);
      setWordmarkSrc(src);
    };

    updateSrc();

    if (document.fonts?.ready) {
      document.fonts.ready.then(updateSrc);
    }
  }, [wordmark]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className={`relative w-full h-[calc(100dvh-5rem)] min-h-[540px] max-h-[760px] flex flex-col justify-between overflow-hidden bg-[#050505] text-white border-t border-neutral-900 ${className}`.trim()}
    >
      {/* Soft Ambient Glows */}
      <div
        className="absolute top-1/4 -left-40 w-[450px] h-[350px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(204,255,0,0.035) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute bottom-10 -right-40 w-[450px] h-[350px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.035) 0%, rgba(204,255,0,0.015) 45%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* ======================================================== */}
      {/* UPPER FOOTER: 4 RICH COLUMNS (COMPACT & PRECISE)         */}
      {/* ======================================================== */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-1 shrink-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          
          {/* Col 1 & 2: Brand Identity & Status */}
          <div className="col-span-2 space-y-2.5 max-w-sm">
            <a href="#home" className="inline-block focus:outline-none">
              <img
                src={brandLogo}
                alt="Brand Buzzers"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-neutral-400 font-normal leading-relaxed line-clamp-2">
              High-velocity growth & viral media architecture. We turn cultural momentum into unfair brand advantage and measurable enterprise value.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              <span>Operating Globally · Remote-First Engine</span>
            </div>
          </div>

          {/* Col 3: Explore Navigation */}
          <div className="space-y-1.5 text-xs">
            <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300 font-semibold block mb-2">
              EXPLORE
            </span>
            <ul className="space-y-1 text-neutral-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#equation" className="hover:text-white transition-colors">The Equation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div className="space-y-1.5 text-xs">
            <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300 font-semibold block mb-2">
              CAPABILITIES
            </span>
            <ul className="space-y-1 text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Viral 9:16 Short-Form</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Content Creation & Films</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Influencer Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website & App Dev</a></li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div className="space-y-1.5 text-xs">
            <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300 font-semibold block mb-2">
              CONNECT
            </span>
            <ul className="space-y-1 text-neutral-400">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#CCFF00] transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#CCFF00] transition-colors"
                >
                  <span>YouTube Shorts</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#CCFF00] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#CCFF00] transition-colors"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* MONUMENTAL DITHER VEIL SECTION ('BUZZERS')               */}
      {/* Interactive cursor reveal, ripple bursts & dither trail  */}
      {/* ======================================================== */}
      <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-auto px-2 min-h-[170px] max-h-[380px]">
        {wordmarkSrc && (
          <DitherVeil
            src={wordmarkSrc}
            fit="contain"
            pattern="floyd"
            palette="rgb"
            pixelSize={2}
            levels={3}
            inkColor="#050505"
            paperColor="#d4d4d8"
            revealRadius={220}
            softness={0.6}
            linger={1.2}
            rimColor="#CCFF00"
            rim={0.08}
            contrast={1.3}
            clickBurst={true}
            className="w-full h-full cursor-crosshair"
          />
        )}

        {/* Screen-reader accessible label */}
        <span className="sr-only">{wordmark}</span>

        {/* Interactive Hint Pill */}
        <div className="pointer-events-none absolute top-1 right-4 sm:right-8 hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-neutral-400 tracking-wider uppercase z-20">
          <Sparkles className="w-3 h-3 text-[#CCFF00]" />
          <span>HOVER & CLICK TO REVEAL NEON VEIL</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM LEGAL BAR & BACK-TO-TOP                           */}
      {/* ======================================================== */}
      <div className="w-full border-t border-neutral-900/90 bg-[#050505] py-2.5 sm:py-3 px-6 sm:px-10 lg:px-14 relative z-20 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-neutral-500 font-normal">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span>© 2026 BrandBuzzers Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <a href="#home" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <a href="#home" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer group select-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

// 21st.dev preview demo export
export function Demo() {
  return (
    <div className="w-full">
      <HalftoneWordmarkFooter wordmark="BUZZERS" />
    </div>
  );
}
