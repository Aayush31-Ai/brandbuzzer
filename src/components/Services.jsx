import React, { useState, useEffect } from 'react';
import OrbitImages from './OrbitImages';
import MobileServicesScroller from './MobileServicesScroller';
import { ShaderBackground } from '@/components/ui/kk';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import bLogo from '../assets/b-logo-cropped.png';

export const SERVICES_DATA = [
  {
    id: 'social-media-marketing',
    index: '01',
    title: 'Social Media Marketing',
    tagline: 'Engineered for Virality. Built for Brand Recall.',
    description:
      'Turn social algorithms into brand momentum. High-converting campaigns across Instagram, YouTube Shorts, LinkedIn, and Meta that drive massive brand recall.',
    longDescription:
      'We don’t do generic corporate posting. We build high-octane content systems engineered for Instagram, YouTube Shorts, and Meta algorithm loops. Every campaign is designed to stop scrollers in their tracks, ignite viral community conversations, and transform casual viewers into lifelong brand advocates.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80&auto=format&fit=crop',
    tags: ['Viral Campaigns', 'Influencer Strategy', 'Audience Growth'],
    deliverables: [
      { title: 'Algorithm Hacking', desc: 'Content structured specifically to trigger platform recommendation loops.' },
      { title: 'Cultural Trendjacking', desc: 'Riding breaking viral moments and trending audios within hours.' },
      { title: 'Influencer Synergy', desc: 'Vetted creator partnerships with authentic audience alignment.' },
      { title: 'Full-Funnel Analytics', desc: 'Real-time tracking of follower acquisition and retention rates.' },
    ],
    metric: 'Average 4.2x Organic Reach Surge within 90 Days',
  },
  {
    id: 'social-media-management',
    index: '02',
    title: 'Social Media Management',
    tagline: 'Always-On Digital Presence. Zero Dead Days.',
    description:
      'Consistent, hyper-engaged digital presence. From daily publishing to community cultivation and real-time trendjacking, we keep your brand at the cultural center.',
    longDescription:
      'Your social feed is your brand’s public heartbeat. We manage daily content calendars, cross-platform distribution, community engagement, and proactive comment interactions. We ensure your brand voice remains razor-sharp, reactive, and culturally dominant 365 days a year.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop',
    tags: ['Community Engagement', 'Content Calendar', 'Trendjacking'],
    deliverables: [
      { title: 'Strategic Calendars', desc: 'Consistent, predictable publishing cadence tailored to peak platform hours.' },
      { title: 'Active Moderation', desc: 'Rapid responses to comments, mentions, and DMs to build fierce community loyalty.' },
      { title: 'Cross-Platform Voice', desc: 'Customized messaging adapted for Instagram, LinkedIn, and X.' },
      { title: 'Crisis Monitoring', desc: '24/7 proactive feed surveillance to protect brand reputation.' },
    ],
    metric: '98% Response Rate & 2.8x Higher Community Interaction',
  },
  {
    id: 'content-creation',
    index: '03',
    title: 'Content Creation',
    tagline: 'Cinema-Grade Visuals Built for 9:16 Attention Spans.',
    description:
      'Cinema-grade visuals built for 9:16 attention spans. High-retention short-form video, motion graphics, and bold photography that stop the scroll.',
    longDescription:
      'The first 0.5 seconds determine whether viewers swipe away or stay hooked. Our studio combines psychology-driven scriptwriting, cinema camera cinematography, dynamic motion graphics, and punchy audio design to produce content with unmatched view-through rates.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80&auto=format&fit=crop',
    tags: ['Viral Short-Form', 'Motion Graphics', 'Brand Films'],
    deliverables: [
      { title: 'Psychological Hooks', desc: 'First-frame narrative hooks engineered to prevent scroll-off.' },
      { title: '4K Studio Production', desc: 'Cinema lenses, studio lighting, and broadcast audio recording.' },
      { title: 'Dynamic Motion FX', desc: 'High-energy typography, visual effects, and kinetic pacing.' },
      { title: 'Multi-Format Slices', desc: 'Asset batches formatted for Reels, Shorts, TikTok, and web.' },
    ],
    metric: 'Over 68% Average View-Through Retention Rate',
  },
  {
    id: 'performance-marketing',
    index: '04',
    title: 'Performance Marketing',
    tagline: 'Data-Obsessed Advertising That Multiplies Your Bottom Line.',
    description:
      'Data-obsessed ad strategies with measurable ROI. Laser-targeted Meta, Google, and TikTok ad funnels optimized relentlessly to convert viewers into revenue.',
    longDescription:
      'We treat advertising as an exact science. By deploying multi-variant creative testing, intent-based search funnels, and programmatic retargeting across Meta and Google, we continuously scale revenue while driving down cost-per-acquisition (CPA).',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
    tags: ['Paid Media (Meta/Google)', 'Funnel Optimization', 'ROAS Scaling'],
    deliverables: [
      { title: 'Intent-Based Audiences', desc: 'Precision lookalike and custom in-market buyer segments.' },
      { title: 'Creative Testing Matrix', desc: 'A/B testing dozens of ad hooks, angles, and CTA variations weekly.' },
      { title: 'Funnel Optimization', desc: 'Eliminating checkout friction to maximize conversion velocity.' },
      { title: 'Real-Time Attribution', desc: 'Granular tracking of ad spend directly to verified cash revenue.' },
    ],
    metric: 'Consistent 3.5x - 7.2x Return on Ad Spend (ROAS)',
  },
  {
    id: 'website-app-development',
    index: '05',
    title: 'Website & App Development',
    tagline: 'Lightning-Fast Digital Experiences Built for Conversion.',
    description:
      'Cutting-edge, lightning-fast web applications built on modern frameworks. Immersive 3D interactions, intuitive UX, and clean architecture that converts.',
    longDescription:
      'Your digital product is where brand buzz turns into transaction. We design and build high-performance web applications using React, Next.js, and fluid 3D animations. Sub-second load speeds, mobile perfection, and conversion-engineered flows come standard.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format&fit=crop',
    tags: ['Next.js & React', 'Interactive 3D UI', 'Conversion UX'],
    deliverables: [
      { title: 'Bespoke UI/UX Design', desc: 'Dark, modern aesthetic tailored to high-end brand expectations.' },
      { title: 'Next.js & React Stack', desc: 'Lightning sub-second page loads with 99+ Google Lighthouse scores.' },
      { title: 'Interactive 3D & FX', desc: 'Fluid animations, smooth micro-interactions, and WebGL touches.' },
      { title: 'Conversion Funnels', desc: 'Zero-friction booking, lead capture, and payment gateways.' },
    ],
    metric: 'Sub-Second Speeds & 44%+ Increase in Inbound Inquiries',
  },
  {
    id: 'video-production-editing',
    index: '06',
    title: 'Video Production & Editing',
    tagline: 'Cinema-Grade Direction. High-Retention Viral Pacing.',
    description:
      'Cinema camera direction, dynamic sound design, visual effects, and high-velocity post-production that transform brand stories into cultural movements.',
    longDescription:
      'We bring studio-grade production value to brand storytelling. From storyboard concepting and on-set camera direction to intricate VFX, sound design, color grading, and viral retention pacing, we craft visual masterpieces that capture and hold attention.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80&auto=format&fit=crop',
    tags: ['Cinema Production', 'VFX & Motion', 'High-Retention Editing'],
    deliverables: [
      { title: 'Cinema Direction', desc: 'On-set cinematography, lighting design, and creative directing.' },
      { title: 'Kinetic VFX & Motion', desc: 'Custom 2D/3D motion graphics, 3D text tracking, and visual polish.' },
      { title: 'Bespoke Sound Design', desc: 'Spatial audio scoring, Foley effects, and broadcast mixing.' },
      { title: 'Platform Pacing', desc: 'Edits optimized for YouTube, Instagram Reels, and digital campaigns.' },
    ],
    metric: '94% Client Retention & Over 15M Combined Video Views',
  },
];

export default function Services({ onSelectService = () => { } }) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeService = SERVICES_DATA[activeServiceIndex] || SERVICES_DATA[0];

  const orbitImages = SERVICES_DATA.map((s) => ({
    src: s.image,
    alt: s.title,
    title: s.title,
    index: s.index,
  }));

  const handleOrbitItemClick = (index) => {
    setActiveServiceIndex(index);
    setIsModalOpen(true);
  };

  const handlePrevService = (e) => {
    e?.stopPropagation();
    setActiveServiceIndex((prev) => (prev === 0 ? SERVICES_DATA.length - 1 : prev - 1));
  };

  const handleNextService = (e) => {
    e?.stopPropagation();
    setActiveServiceIndex((prev) => (prev === SERVICES_DATA.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowLeft') handlePrevService();
      if (e.key === 'ArrowRight') handleNextService();
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#000000] scroll-mt-20"
    >
      {/* ======================================================== */}
      {/* DESKTOP & TABLET VIEW (UNCHANGED >= 768px)               */}
      {/* ======================================================== */}
      <div className="hidden md:block relative w-full py-10 sm:py-14 md:py-16">
        {/* Full-bleed GPU Shader Background with Seamless Alpha Fading */}
        <div
          className="absolute inset-0 pointer-events-none z-0 w-full h-full overflow-hidden opacity-90"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          }}
        >
          <ShaderBackground
            className="w-full h-full"
            bgColor="#050505"
            accentColor="#d4d4d8"
            secondaryColor="#27272a"
            intensity={0.42}
            speed={0.20}
            interactive={true}
          />
        </div>

        {/* Seamless Top & Bottom Blending Gradients to #050505 (Zero Direct Cut) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-transparent z-[1]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent z-[1]" />

        {/* SECTION HEADER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            {/* Dash & Category Tag */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-3">
              <span className="w-6 sm:w-8 h-[2px] bg-[#CCFF00] inline-block" />
              <span>OUR SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
              SOLUTIONS BUILT TO <br />
              <span className="italic font-black text-white">
                MAKE BRANDS MOVE.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              From scroll-stopping visual production to high-growth performance marketing, our full-stack capabilities engineer viral momentum and real measurable impact.
            </p>
          </div>
        </div>

        {/* ORBIT IMAGES 3D DISPLAY WITH VISIBLE DASHED TRACKLINES */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 overflow-visible">
            <OrbitImages
              images={orbitImages}
              onItemClick={handleOrbitItemClick}
              shape="ellipse"
              baseWidth={1400}
              radiusX={460}
              radiusY={130}
              rotation={-6}
              duration={36}
              itemSize={140}
              itemRadius={16}
              depth={0.65}
              showPath={true}
              pathColor="rgba(255, 255, 255, 0.35)"
              pathWidth={1.5}
              pathDash={6}
              hoverScale={1.14}
              hoverSpeed={0.2}
              draggable={true}
              clickToFront={true}
              centerContent={
                <div className="relative flex items-center justify-center pointer-events-auto">
                  {/* 3D Floating & Rotating Container */}
                  <div
                    className="relative transition-transform duration-500 ease-out flex items-center justify-center"
                    style={{
                      perspective: '1200px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <motion.div
                      animate={{
                        rotateY: [-10, 10, -10],
                        rotateX: [6, -6, 6],
                        y: [-8, 8, -8],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      className="relative flex items-center justify-center cursor-pointer group"
                      whileHover={{ scale: 1.08 }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      {/* 3D Back Cast Deep Shadow */}
                      <img
                        src={bLogo}
                        alt=""
                        className="w-20 sm:w-26 md:w-32 h-auto object-contain absolute pointer-events-none select-none opacity-30 blur-[4px]"
                        style={{
                          transform: 'translateZ(-20px) translateY(14px) scale(0.95)',
                          filter: 'brightness(0) drop-shadow(0 25px 35px rgba(0,0,0,0.95))',
                        }}
                        aria-hidden="true"
                      />

                      {/* 3D Ambient White Rim Extrusion Layer */}
                      <img
                        src={bLogo}
                        alt=""
                        className="w-20 sm:w-26 md:w-32 h-auto object-contain absolute pointer-events-none select-none opacity-40"
                        style={{
                          transform: 'translateZ(-8px) translate(2.5px, 3px)',
                          filter:
                            'drop-shadow(0 0 12px rgba(255,255,255,0.25)) drop-shadow(0 0 24px rgba(255,255,255,0.1))',
                        }}
                        aria-hidden="true"
                      />

                      {/* 3D Front Main Specular Layer (Clean White 3D Bevel) */}
                      <img
                        src={bLogo}
                        alt="Brand Buzzers 3D B"
                        className="w-20 sm:w-26 md:w-32 h-auto object-contain relative select-none"
                        style={{
                          transform: 'translateZ(12px)',
                          filter:
                            'drop-shadow(1px 2px 0px rgba(255,255,255,0.95)) drop-shadow(2px 4px 1px rgba(180,180,180,0.4)) drop-shadow(0 12px 28px rgba(0,0,0,0.9))',
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              }
            />
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE SCROLL-TRIGGERED VIEW (< 768px)                   */}
        {/* ======================================================== */}
        <div className="block md:hidden w-full">
          <MobileServicesScroller
            onSelectService={(idx) => {
              setActiveServiceIndex(idx);
              setIsModalOpen(true);
            }}
          />
        </div>

        {/* ======================================================== */}
        {/* SERVICE DETAILS EXPANDED MODAL (CLICK TO VIEW INFO)      */}
        {/* ======================================================== */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl bg-[#0d0d0d] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] max-h-[88vh] flex flex-col [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {/* Modal Hero Banner (Compact) */}
                <div className="relative h-36 sm:h-44 w-full shrink-0 overflow-hidden bg-neutral-900">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/55 to-black/35" />

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-black border border-white/20 hover:border-[#CCFF00] text-white hover:text-[#CCFF00] flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Top Left Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 backdrop-blur-md bg-black/60 border border-white/15 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
                    <span className="text-[10px] font-mono font-bold text-white tracking-widest">
                      SERVICE {activeService.index} / {String(SERVICES_DATA.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Floating Service Title in Image */}
                  <div className="absolute bottom-3.5 left-4 sm:left-5 right-4 sm:right-5 z-10">
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                      {activeService.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-medium text-[#CCFF00] mt-0.5 tracking-wide">
                      {activeService.tagline}
                    </p>
                  </div>
                </div>

                {/* Modal Scrollable Body (No visible scrollbar) */}
                <div className="p-4 sm:p-5 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden space-y-4">

                  {/* Detailed Overview */}
                  <div>
                    <h4 className="text-[10px] font-mono tracking-[0.22em] text-neutral-400 uppercase font-semibold mb-1.5">
                      OVERVIEW & APPROACH
                    </h4>
                    <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
                      {activeService.longDescription}
                    </p>
                  </div>

                  {/* Core Deliverables (Compact 2x2 Grid) */}
                  <div>
                    <h4 className="text-[10px] font-mono tracking-[0.22em] text-neutral-400 uppercase font-semibold mb-2">
                      WHAT WE DELIVER
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.deliverables?.map((deliv, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                            <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-tight">
                              {deliv.title}
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-normal pl-5">
                            {deliv.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metric Highlight */}
                  {activeService.metric && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-[#CCFF00]/10 via-[#CCFF00]/5 to-transparent border border-[#CCFF00]/25 flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#CCFF00] shrink-0" />
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#CCFF00] font-bold">
                          EXPECTED IMPACT:
                        </span>
                        <span className="text-xs font-bold text-white tracking-tight">
                          {activeService.metric}
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Modal Footer Controls (Compact) */}
                <div className="p-3.5 sm:p-4 bg-black/70 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                  {/* Carousel Navigation Between Services */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevService}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev</span>
                    </button>

                    <span className="text-[11px] font-mono text-neutral-400 px-1.5">
                      {activeService.index} / {String(SERVICES_DATA.length).padStart(2, '0')}
                    </span>

                    <button
                      type="button"
                      onClick={handleNextService}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Primary Booking CTA */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      onSelectService(activeService);
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full font-black text-xs uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#d8ff1a] active:scale-95 transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:shadow-[0_0_25px_rgba(204,255,0,0.5)] cursor-pointer"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

    </section>
  );
}
