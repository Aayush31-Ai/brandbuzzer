'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

// Smooth cubic ease-out curve
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

export default function CountUp({
  to = 100,
  from = 0,
  direction = 'up',
  duration = 2.4,
  delay = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0,
  trigger = 'view',
  replayOnHover = true,
  className = '',
  style,
  mode = 'count',
  easing = 'easeOut',
  onStart,
  onEnd,
}) {
  const containerRef = useRef(null);
  const startVal = direction === 'down' ? to : from;
  const endVal = direction === 'down' ? from : to;
  
  const [currentNumber, setCurrentNumber] = useState(startVal);
  const [isCounting, setIsCounting] = useState(false);
  const animRef = useRef(null);

  const formatNumber = useCallback(
    (val) => {
      let formatted;
      if (decimals > 0) {
        formatted = Number(val).toFixed(decimals);
      } else {
        formatted = Math.round(Number(val)).toString();
      }
      if (separator) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        formatted = parts.join('.');
      }
      return `${prefix}${formatted}${suffix}`;
    },
    [decimals, separator, prefix, suffix]
  );

  const runCounter = useCallback(() => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }

    setIsCounting(true);
    if (typeof onStart === 'function') onStart();

    const startTime = performance.now() + Math.max(0, delay) * 1000;
    const durMs = Math.max(0.1, duration) * 1000;

    const tick = (now) => {
      if (now < startTime) {
        animRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durMs, 1);
      const ease = easeOutQuart(progress);

      const value = startVal + (endVal - startVal) * ease;
      setCurrentNumber(value);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setCurrentNumber(endVal);
        setIsCounting(false);
        if (typeof onEnd === 'function') onEnd();
      }
    };

    animRef.current = requestAnimationFrame(tick);
  }, [startVal, endVal, duration, delay, onStart, onEnd]);

  // Viewport trigger using robust IntersectionObserver
  useEffect(() => {
    if (trigger === 'load') {
      runCounter();
      return;
    }

    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [trigger, runCounter]);

  const handlePointerEnter = () => {
    if (replayOnHover && !isCounting) {
      runCounter();
    }
  };

  return (
    <span
      ref={containerRef}
      className={`inline-block tabular-nums select-none ${className}`}
      style={style}
      onPointerEnter={handlePointerEnter}
    >
      {formatNumber(currentNumber)}
    </span>
  );
}
