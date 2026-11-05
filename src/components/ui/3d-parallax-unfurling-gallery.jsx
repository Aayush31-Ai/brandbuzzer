'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Star, MousePointerClick } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export const DEFAULT_GALLERY_REVIEWS = [
  {
    id: 'ava',
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
    id: 'ana',
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
    id: 'mat',
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
    id: 'maya',
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
    id: 'noah',
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
    id: 'luc',
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
    id: 'haru',
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
    id: 'emma',
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
    id: 'carl',
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

export function ParallaxCard({ item, onSelect }) {
  if (!item) return null;

  return (
    <motion.div
      onClick={() => onSelect?.(item)}
      whileHover={{ y: -6, translateZ: 30 }}
      transition={{ duration: 0.2 }}
      className="group w-full bg-[#0d0d0d]/95 ring-1 ring-inset ring-white/15 hover:ring-[#CCFF00]/80 hover:bg-[#131313] hover:shadow-[0_0_30px_rgba(204,255,0,0.22)] shadow-2xl rounded-2xl p-3.5 sm:p-5 select-none cursor-pointer text-left transition-colors duration-200"
      style={{
        transformStyle: 'preserve-3d',
        outline: '1px solid transparent',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <Avatar className="size-8 sm:size-10 h-8 sm:h-10 w-8 sm:w-10 ring-1 ring-white/20 group-hover:ring-[#CCFF00]/60 shrink-0 transition-all">
          <AvatarImage src={item.img} alt={item.name} loading="lazy" />
          <AvatarFallback className="text-xs font-bold text-white">
            {item.name ? item.name[0] : 'U'}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col min-w-0">
          <figcaption className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
            <span className="truncate">{item.name}</span>
            {item.country && (
              <span className="text-[10px] text-neutral-400 font-normal shrink-0">
                {item.country}
              </span>
            )}
          </figcaption>
          <p className="text-[10px] sm:text-[11px] font-mono text-[#CCFF00] tracking-wide truncate">
            {item.username}
          </p>
        </div>
      </div>

      <blockquote className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-neutral-300 font-normal leading-relaxed line-clamp-3">
        "{item.body}"
      </blockquote>

      {item.metric && (
        <div className="mt-2.5 px-2 py-1 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[10px] font-mono text-[#CCFF00] font-semibold truncate">
          {item.metric}
        </div>
      )}

      {/* Footer */}
      <div className="mt-3 sm:mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-500 group-hover:text-[#CCFF00] transition-colors">
        <span className="font-mono font-medium tracking-wider">CLICK TO VIEW</span>
        <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.div>
  );
}

export default function ThreeDParallaxUnfurlingGallery({
  items = DEFAULT_GALLERY_REVIEWS,
  onSelectReview = () => {},
  badge = 'WHAT THEY SAY',
  titleLine1 = 'PROVEN IMPACT.',
  titleLine2 = 'UNSTOPPABLE BUZZ.',
  subtitle = 'Discover how founders, creators, and bold disruptors use our strategic engine to turn attention into unfair brand advantage. Scroll to unfurl client stories.',
  className = '',
}) {
  const containerRef = useRef(null);

  // Scroll Progress linked to the 250vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth physics spring interpolation (silky 60fps/120fps with zero jitter)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // 3D Matrix "Unfurling" Transforms:
  // Starts with a dynamic tilted isometric plane, smoothly unfurls toward user on scroll
  const rotateX = useTransform(smoothProgress, [0, 1], [22, 6]);
  const rotateY = useTransform(smoothProgress, [0, 1], [-10, -2]);
  const rotateZ = useTransform(smoothProgress, [0, 1], [15, 3]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.92, 0.98, 1.02]);

  // Multi-column Parallax Offsets:
  // Columns move at contrasting velocities creating deep spatial parallax
  const col1Y = useTransform(smoothProgress, [0, 1], [180, -360]);
  const col2Y = useTransform(smoothProgress, [0, 1], [-280, 260]);
  const col3Y = useTransform(smoothProgress, [0, 1], [220, -320]);
  const col4Y = useTransform(smoothProgress, [0, 1], [-220, 300]);

  const allReviews = items && items.length > 0 ? items : DEFAULT_GALLERY_REVIEWS;
  const getItem = (idx) => allReviews[idx % allReviews.length];

  // Distribute items into 4 distinct columns (5 items each for rich continuous coverage)
  const col1Items = [getItem(0), getItem(4), getItem(8), getItem(3), getItem(7)];
  const col2Items = [getItem(1), getItem(5), getItem(2), getItem(6), getItem(0)];
  const col3Items = [getItem(2), getItem(6), getItem(0), getItem(4), getItem(8)];
  const col4Items = [getItem(3), getItem(7), getItem(1), getItem(5), getItem(2)];

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[230vh] sm:h-[260vh] md:h-[280vh] bg-[#050505] ${className}`.trim()}
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center py-6 sm:py-10 md:py-12 px-4 sm:px-8">
        
        {/* Ambient Glows */}
        <div
          className="absolute top-1/4 -left-40 w-[550px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(204,255,0,0.035) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute -bottom-20 -right-40 w-[550px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, rgba(204,255,0,0.015) 45%, transparent 75%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Section Header */}
        <div className="relative z-30 max-w-6xl w-full mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 uppercase font-semibold mb-2.5 sm:mb-3">
              <span className="w-6 sm:w-7 h-[2px] bg-[#CCFF00] inline-block" />
              <span>{badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.02]">
              {titleLine1} <br />
              <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                {titleLine2}
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>
        </div>

        {/* 3D Perspective Stage Container */}
        <div className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-center [perspective:1200px] overflow-hidden my-2 sm:my-4">
          
          {/* Unfurling 3D Matrix Grid */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              rotateZ,
              scale,
              transformStyle: 'preserve-3d',
            }}
            className="flex flex-row justify-center items-center gap-3 sm:gap-5 md:gap-7 w-full select-none"
          >
            {/* Column 1 */}
            <motion.div
              style={{ y: col1Y }}
              className="flex flex-col gap-3.5 sm:gap-5 w-[165px] xs:w-[200px] sm:w-[240px] md:w-[265px] shrink-0"
            >
              {col1Items.map((item, i) => (
                <ParallaxCard
                  key={`col1-${item.username || item.id || i}-${i}`}
                  item={item}
                  onSelect={onSelectReview}
                />
              ))}
            </motion.div>

            {/* Column 2 */}
            <motion.div
              style={{ y: col2Y }}
              className="flex flex-col gap-3.5 sm:gap-5 w-[165px] xs:w-[200px] sm:w-[240px] md:w-[265px] shrink-0"
            >
              {col2Items.map((item, i) => (
                <ParallaxCard
                  key={`col2-${item.username || item.id || i}-${i}`}
                  item={item}
                  onSelect={onSelectReview}
                />
              ))}
            </motion.div>

            {/* Column 3 - visible on tablets and up */}
            <motion.div
              style={{ y: col3Y }}
              className="flex flex-col gap-3.5 sm:gap-5 w-[165px] xs:w-[200px] sm:w-[240px] md:w-[265px] shrink-0 hidden sm:flex"
            >
              {col3Items.map((item, i) => (
                <ParallaxCard
                  key={`col3-${item.username || item.id || i}-${i}`}
                  item={item}
                  onSelect={onSelectReview}
                />
              ))}
            </motion.div>

            {/* Column 4 - visible on desktop and up */}
            <motion.div
              style={{ y: col4Y }}
              className="flex flex-col gap-3.5 sm:gap-5 w-[165px] xs:w-[200px] sm:w-[240px] md:w-[265px] shrink-0 hidden lg:flex"
            >
              {col4Items.map((item, i) => (
                <ParallaxCard
                  key={`col4-${item.username || item.id || i}-${i}`}
                  item={item}
                  onSelect={onSelectReview}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Top & Bottom Seamless Dark Dissolve Fades (No hard cut boundaries) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent z-20" />
        </div>

        {/* Scroll To Unfurl Interactive Hint */}
        <div className="relative z-30 flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
          <MousePointerClick className="w-3.5 h-3.5 text-[#CCFF00] animate-bounce" />
          <span>SCROLL TO UNFURL REVIEWS · CLICK CARD TO VIEW</span>
        </div>
      </div>
    </div>
  );
}

export const Component = ThreeDParallaxUnfurlingGallery;

export function DemoOne(props) {
  return <ThreeDParallaxUnfurlingGallery {...props} />;
}
