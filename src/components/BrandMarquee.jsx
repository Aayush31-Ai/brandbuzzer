import React from 'react';

const BRAND_LOGOS = [
  {
    name: 'Nike',
    svg: (
      <svg className="h-7 sm:h-9 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M21.707 5.293c-2.486 1.745-6.236 4.67-10.374 8.272-3.238 2.819-5.748 5.265-7.447 7.272-1.042 1.23-1.636 1.705-2.091 1.705-.285 0-.583-.178-.795-.487-.318-.464-.325-1.127-.02-1.874.887-2.176 3.013-5.261 6.147-8.919 4.307-5.027 9.873-9.589 13.78-10.739.387-.114.717-.114.993 0 .276.114.394.39.007.77z" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    svg: (
      <svg className="h-7 sm:h-9 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: 'SONY',
    svg: (
      <svg className="h-5 sm:h-6 w-auto fill-current" viewBox="0 0 120 24">
        <text x="0" y="19" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="4">
          SONY
        </text>
      </svg>
    ),
  },
  {
    name: 'Puma',
    svg: (
      <svg className="h-7 sm:h-9 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M19.98 12.02c.04-.15.07-.3.08-.46.04-.51-.15-1-.53-1.36-.62-.6-1.55-.7-2.33-.26l-1.35.76-1.74-2.09c-.43-.52-1.06-.83-1.74-.86-.67-.03-1.33.22-1.81.7l-1.71 1.71-3.26-1.09c-.66-.22-1.38-.1-1.94.33-.56.43-.88 1.09-.85 1.79.03.7.41 1.33 1.03 1.7l2.84 1.71-.85 2.55c-.21.63-.1 1.33.3 1.86.4.53 1.02.85 1.68.85h.17l3.4-.68 2.38 2.38c.45.45 1.06.7 1.69.7.63 0 1.24-.25 1.69-.7l2.83-2.83c.78-.78.96-1.97.43-2.94l-1.98-3.52z" />
      </svg>
    ),
  },
  {
    name: 'Apple',
    svg: (
      <svg className="h-7 sm:h-9 w-auto fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.67-1.09 1.76-.95 2.82 1.04.08 2.07-.5 2.71-1.28" />
      </svg>
    ),
  },
  {
    name: 'Red Bull',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 24">
        <text x="0" y="19" fontFamily="sans-serif" fontSize="18" fontStyle="italic" fontWeight="900" letterSpacing="2">
          RED BULL
        </text>
      </svg>
    ),
  },
  {
    name: 'Netflix',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 130 24">
        <text x="0" y="19" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="3">
          NETFLIX
        </text>
      </svg>
    ),
  },
  {
    name: 'Beats',
    svg: (
      <svg className="h-7 sm:h-9 w-auto fill-current" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="7.5" y="4" width="2.5" height="11" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Gymshark',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 150 24">
        <text x="0" y="19" fontFamily="sans-serif" fontSize="19" fontWeight="900" letterSpacing="3">
          GYMSHARK
        </text>
      </svg>
    ),
  },
  {
    name: 'Monster',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 24">
        <text x="0" y="19" fontFamily="sans-serif" fontSize="19" fontWeight="900" letterSpacing="4">
          MONSTER
        </text>
      </svg>
    ),
  },
];

export default function BrandMarquee({
  title = 'POWERING INDUSTRY LEADERS & CULTURAL DISRUPTORS',
  speed = '32s',
  className = '',
}) {
  // Duplicate array 3 times for completely seamless infinite wrap-around
  const allLogos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className={`w-full mt-4 sm:mt-6 pt-2 sm:pt-3 relative overflow-hidden ${className}`}>
      {/* Top Subtle Divider */}
      <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4 sm:mb-5" />

      {/* Marquee Header Tag */}
      {title && (
        <div className="text-center mb-3 sm:mb-4">
          <p className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.28em] text-neutral-400 uppercase">
            {title}
          </p>
        </div>
      )}

      {/* Marquee Track Container with Edge Gradient Fades */}
      <div
        className="relative w-full overflow-hidden py-1.5"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="flex items-center gap-8 sm:gap-16 md:gap-20 w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer"
          style={{
            animationDuration: speed,
          }}
        >
          {allLogos.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center justify-center shrink-0 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 select-none opacity-50 hover:opacity-100"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
