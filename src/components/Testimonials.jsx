import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

// Unique reviews data
export const testimonials = [
  {
    name: 'Ava Green',
    username: '@ava',
    role: 'Founder & Creative Director, Cascade Studio',
    body: 'Brand Buzzers made our brand presence 10x louder and converted casual views into real buyers!',
    fullReview:
      'Before partnering with Brand Buzzers, we were struggling to break through the algorithmic noise. Their team engineered high-retention 9:16 reels and structured our storytelling to hit psychological triggers. Within 30 days, our organic engagement shot up by 420% and we converted casual viewers into high-LTV brand evangelists.',
    img: 'https://cdn.21st.dev/assets/mirror/55/55cf6231499bcdc496f15ff1d28d4170ac9b99e9279495caa44fca70886d8b2e.jpg',
    country: '🇦🇺 Australia',
    metric: '+420% Organic Reach Surge',
    rating: 5,
  },
  {
    name: 'Ana Miller',
    username: '@ana',
    role: 'Head of Growth, NeoTech Media',
    body: 'The viral content systems they engineered completely blew up our social reach!',
    fullReview:
      'We have worked with top-tier agencies before, but Brand Buzzers operates at another level. Their deep understanding of social algorithms and trendjacking allowed us to ride cultural momentum within hours, not days. They generated over 2.4 million views on our debut campaign without spending a dime on ads.',
    img: 'https://cdn.21st.dev/assets/mirror/f0/f07b84f12ef125cbb837a7bd64da401992f5f62bd55fee10d01cd3dcc8abae80.jpg',
    country: '🇩🇪 Germany',
    metric: '2.4M+ Organic Campaign Views',
    rating: 5,
  },
  {
    name: 'Mateo Rossi',
    username: '@mat',
    role: 'Brand Lead, Veloce Streetwear',
    body: 'Their creative chaos strategy is pure genius. Brands literally become impossible to ignore.',
    fullReview:
      'Our drop sold out in 4 minutes flat. The teaser strategy, kinetic visuals, and daring motion direction built an obsessive cult following before our apparel even launched. If you want boring corporate marketing, look elsewhere. If you want culture-shifting hype, hire Brand Buzzers.',
    img: 'https://cdn.21st.dev/assets/mirror/7c/7c0d2aa99715b15c218385f5679347782843c02f939d8eee6f9cb1cad6ba6ed0.jpg',
    country: '🇮🇹 Italy',
    metric: 'Sold Out Drop in 4 Minutes',
    rating: 5,
  },
  {
    name: 'Maya Patel',
    username: '@maya',
    role: 'CMO, Aurelia Luxury Skincare',
    body: 'Onboarding was smooth and our campaign went viral in less than 2 weeks.',
    fullReview:
      'The speed of execution was unbelievable. Within two weeks of kickoff, our first batch of high-production content hit the Explore feed and FYP loops. Customer acquisition costs plummeted by 48% and our inbound creator collaborations went through the roof.',
    img: 'https://cdn.21st.dev/assets/mirror/f8/f8f2ddc445b6b2318430260bdebb665c9415865827230565aa42f57c9c794baf.jpg',
    country: '🇮🇳 India',
    metric: '-48% Customer Acquisition Cost',
    rating: 5,
  },
  {
    name: 'Noah Smith',
    username: '@noah',
    role: 'Co-Founder, Kinetic Labs',
    body: 'Best marketing partner we have ever hired. True high-velocity execution.',
    fullReview:
      'They operate like an internal Navy SEAL team for your brand. Direct communication, zero fluff, and insane visual quality. The ROI has been consistent month over month, scaling our paid media to a 4.6x return.',
    img: 'https://cdn.21st.dev/assets/mirror/ae/ae1d49872fdd6f8d9aa933f6ca8bce8cb1ba7e87dfb9d2926661184cb7bfe26d.jpg',
    country: '🇺🇸 USA',
    metric: '4.6x Return On Ad Spend',
    rating: 5,
  },
  {
    name: 'Lucas Stone',
    username: '@luc',
    role: 'VP Digital, Horizon D2C',
    body: 'Sub-second digital experiences and thumb-stopping visual direction.',
    fullReview:
      'Brand Buzzers revamped our entire brand identity, web experience, and short-form video pipelines. The results speak for themselves: bounce rates dropped by half, conversion rates jumped 38%, and our brand finally looks like an industry leader.',
    img: 'https://cdn.21st.dev/assets/mirror/9a/9aac54d62e727561f6958213b8a3649230a3bba61ba5ddf63c69d3c6e4aecb0a.jpg',
    country: '🇫🇷 France',
    metric: '+38% Web Conversion Velocity',
    rating: 5,
  },
  {
    name: 'Haruto Sato',
    username: '@haru',
    role: 'Director, Shibuya Sound Co.',
    body: 'Impressive performance across all channels. Our engagement tripled.',
    fullReview:
      'Their understanding of global creator culture and youth aesthetics is unmatched. Every single asset they produced sparked lively comment debates, shares, and reposts. They don’t just buy attention; they earn genuine devotion.',
    img: 'https://cdn.21st.dev/assets/mirror/e5/e55f3cdab57eb4084f7006cfe9f7f047e638e1b257a53498aaed14b83087152a.jpg',
    country: '🇯🇵 Japan',
    metric: '3.1x Higher Community Engagement',
    rating: 5,
  },
  {
    name: 'Emma Lee',
    username: '@emma',
    role: 'Founder, Lumina Beverage Co.',
    body: 'Their team is obsessed with quality. Every piece of content hits hard.',
    fullReview:
      'Working with Brand Buzzers felt effortless. They took our beverage brand from local shelf obscurity to national retail expansion fueled entirely by organic buzz on TikTok and Instagram.',
    img: 'https://cdn.21st.dev/assets/mirror/03/03410c155320ba33ecb8d798807c6c9610f33b2b2acdd4ed961a68185806df79.jpg',
    country: '🇨🇦 Canada',
    metric: 'National Retail Expansion Fueled',
    rating: 5,
  },
  {
    name: 'Carlos Ray',
    username: '@carl',
    role: 'Managing Partner, Alpha Pulse',
    body: 'They don’t make generic noise. They create real cultural momentum.',
    fullReview:
      'If you want a partner that treats your brand with the same intensity, obsession, and hunger that you do, this is them. Brand Buzzers turned our brand equation into an unstoppable growth loop.',
    img: 'https://cdn.21st.dev/assets/mirror/b5/b58616f0d669595c9a42d60a0b9803364c9859f1c3db93a5e3dc408b603e03e8.jpg',
    country: '🇪🇸 Spain',
    metric: '180% Year-over-Year Revenue Growth',
    rating: 5,
  },
];

export function TestimonialCard({
  img,
  name,
  username,
  body,
  country,
  onSelect,
}) {
  return (
    <Card
      onClick={onSelect}
      className="w-full bg-[#0d0d0d] ring-1 ring-inset ring-white/15 hover:ring-[#CCFF00]/90 hover:bg-[#131313] hover:shadow-[0_0_25px_rgba(204,255,0,0.22)] transition-colors duration-200 shadow-2xl cursor-pointer select-none text-left rounded-2xl"
      style={{
        transform: 'translateZ(0)',
        outline: '1px solid transparent',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <CardContent className="p-3.5 sm:p-4 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2.5">
            <Avatar className="size-9 h-9 w-9 ring-1 ring-white/20 shrink-0">
              <AvatarImage src={img} alt={name} loading="lazy" />
              <AvatarFallback>{name ? name[0] : 'U'}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0">
              <figcaption className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                <span className="truncate">{name}</span>
                <span className="text-[10px] text-neutral-400 font-normal shrink-0">{country}</span>
              </figcaption>
              <p className="text-[11px] font-mono text-[#CCFF00] tracking-wide truncate">{username}</p>
            </div>
          </div>

          <blockquote className="mt-2.5 text-xs sm:text-[13px] text-neutral-300 font-normal leading-relaxed line-clamp-3">
            "{body}"
          </blockquote>
        </div>

        {/* Subtle click to view footer */}
        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-500 hover:text-[#CCFF00] transition-colors">
          <span className="font-mono font-medium tracking-wider">CLICK TO VIEW</span>
          <ArrowUpRight className="w-3 h-3 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
}

export function DemoOne({ onSelectReview = () => { } }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[540px] sm:h-[600px] md:h-[640px] overflow-hidden my-4 sm:my-6 [perspective:1000px]">
      {/* 3D Tilted Perspective Wall - Centered with balanced horizontal placement */}
      <div
        className="flex flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6 h-[140%] -mt-[10%] select-none pl-4 sm:pl-8 md:pl-12"
        style={{
          transform:
            'rotateX(18deg) rotateY(-6deg) rotateZ(13deg) scale(0.95)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Column 1 (upwards) */}
        <div className="h-full w-[230px] sm:w-[260px] md:w-[280px] shrink-0">
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s] h-full">
            {testimonials.map((review, i) => (
              <TestimonialCard
                key={`col1-${review.username}-${i}`}
                {...review}
                onSelect={() => onSelectReview(review)}
              />
            ))}
          </Marquee>
        </div>

        {/* Column 2 (downwards) */}
        <div className="h-full w-[230px] sm:w-[260px] md:w-[280px] shrink-0">
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:44s] h-full">
            {testimonials.map((review, i) => (
              <TestimonialCard
                key={`col2-${review.username}-${i}`}
                {...review}
                onSelect={() => onSelectReview(review)}
              />
            ))}
          </Marquee>
        </div>

        {/* Column 3 (upwards) - visible on tablets and up */}
        <div className="h-full w-[230px] sm:w-[260px] md:w-[280px] shrink-0 hidden sm:block">
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:38s] h-full">
            {testimonials.map((review, i) => (
              <TestimonialCard
                key={`col3-${review.username}-${i}`}
                {...review}
                onSelect={() => onSelectReview(review)}
              />
            ))}
          </Marquee>
        </div>

        {/* Column 4 (downwards) - visible on desktop and up */}
        <div className="h-full w-[230px] sm:w-[260px] md:w-[280px] shrink-0 hidden md:block">
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:46s] h-full">
            {testimonials.map((review, i) => (
              <TestimonialCard
                key={`col4-${review.username}-${i}`}
                {...review}
                onSelect={() => onSelectReview(review)}
              />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Gentle Top & Bottom Fades only - NO side black masks so left side stays bright and crystal clear */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[#050505] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#050505] to-transparent z-20" />
    </div>
  );
}

export default function Testimonials({
  badge = 'WHAT THEY SAY',
  titleLine1 = 'PROVEN IMPACT.',
  titleLine2 = 'UNSTOPPABLE BUZZ.',
  subtitle = 'Discover how founders, creators, and bold disruptors use our strategic engine to turn attention into unfair brand advantage. Click any review to read their full story.',
  className = '',
}) {
  const [selectedReview, setSelectedReview] = useState(null);

  const activeIndex = selectedReview
    ? testimonials.findIndex((t) => t.username === selectedReview.username)
    : -1;

  const handlePrevReview = (e) => {
    e?.stopPropagation();
    if (activeIndex === -1) return;
    const prevIdx = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setSelectedReview(testimonials[prevIdx]);
  };

  const handleNextReview = (e) => {
    e?.stopPropagation();
    if (activeIndex === -1) return;
    const nextIdx = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setSelectedReview(testimonials[nextIdx]);
  };

  // Keyboard controls & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedReview) return;
      if (e.key === 'Escape') setSelectedReview(null);
      if (e.key === 'ArrowLeft') handlePrevReview();
      if (e.key === 'ArrowRight') handleNextReview();
    };

    if (selectedReview) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedReview, activeIndex]);

  return (
    <section
      id="testimonials"
      className={`relative w-full py-10 sm:py-14 md:py-16 px-6 sm:px-10 lg:px-14 xl:px-20 max-w-7xl mx-auto overflow-hidden ${className}`}
    >
      {/* Soft Ambient Glows */}
      <div
        className="absolute top-1/3 -left-36 w-[500px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(204,255,0,0.035) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="absolute -bottom-20 -right-36 w-[500px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, rgba(204,255,0,0.015) 45%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* ======================================================== */}
      {/* SECTION HEADER                                           */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-8">
        <div>
          {/* Dash & Category Tag */}
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-3.5">
            <span className="w-6 sm:w-7 h-[2px] bg-[#CCFF00] inline-block" />
            <span>{badge}</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.02]">
            {titleLine1} <br />
            <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              {titleLine2}
            </span>
          </h2>
        </div>

        {/* Right: Subtitle */}
        <div className="max-w-md lg:pb-1.5">
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* OPEN STREAM SHOWCASE (NO CUT-OFF BOX BOUNDARY)           */}
      {/* ======================================================== */}
      <div className="relative z-10">
        <DemoOne onSelectReview={(review) => setSelectedReview(review)} />
      </div>

      {/* ======================================================== */}
      {/* REVIEW DETAILS EXPANDED MODAL (CLICK TO VIEW INFO)       */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_25px_80px_rgba(0,0,0,0.95)] max-h-[90vh] flex flex-col overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* Header: Verified Client Badge + Close Button */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/25 text-[10px] font-mono font-bold text-[#CCFF00] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>VERIFIED CLIENT REVIEW</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedReview(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-black border border-white/15 hover:border-[#CCFF00] text-neutral-300 hover:text-[#CCFF00] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="size-14 h-14 w-14 ring-2 ring-[#CCFF00]/40 shrink-0">
                  <AvatarImage src={selectedReview.img} alt={selectedReview.name} />
                  <AvatarFallback className="text-base font-black text-white">
                    {selectedReview.name ? selectedReview.name[0] : 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                    <span className="truncate">{selectedReview.name}</span>
                    <span className="text-sm font-normal text-neutral-400 shrink-0">
                      {selectedReview.country}
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-[#CCFF00] font-semibold">
                    {selectedReview.username}
                  </p>
                  {selectedReview.role && (
                    <p className="text-xs text-neutral-400 mt-0.5 truncate">{selectedReview.role}</p>
                  )}
                </div>
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-[#CCFF00]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#CCFF00]" />
                ))}
                <span className="text-xs font-mono font-bold text-neutral-300 ml-2">
                  5.0 / 5.0
                </span>
              </div>

              {/* Full Review Text (Clean, unboxed quote typography) */}
              <div className="py-2.5 mb-4 relative">
                <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed italic">
                  "{selectedReview.fullReview || selectedReview.body}"
                </p>
              </div>

              {/* Delivered Outcome Box */}
              {selectedReview.metric && (
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#CCFF00]/10 via-[#CCFF00]/5 to-transparent border border-[#CCFF00]/25 flex items-center gap-2.5 mb-5">
                  <Sparkles className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCFF00] font-bold">
                      VERIFIED OUTCOME:
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {selectedReview.metric}
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Footer Controls */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevReview}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Prev</span>
                  </button>

                  <span className="text-xs font-mono text-neutral-400 px-2">
                    {activeIndex + 1} / {testimonials.length}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextReview}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedReview(null)}
                  className="px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#d8ff1a] transition-all cursor-pointer shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
