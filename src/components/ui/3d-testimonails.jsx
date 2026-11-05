import React from 'react';

export function Marquee({
  className = '',
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 3,
  ...props
}) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-1.5 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${vertical ? 'flex-col' : 'flex-row'
        } ${className}`.trim()}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 justify-start [gap:var(--gap)] ${vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row'
            } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''} ${reverse ? '[animation-direction:reverse]' : ''
            }`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
