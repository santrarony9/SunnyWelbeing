'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function Counter({
  from = 0,
  to,
  duration = 1.4,
  suffix = '',
  prefix = '',
  className = ''
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(to);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          let startTime: number | null = null;
          let animationFrameId: number;

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            
            // easeOutCubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(from + (to - from) * easedProgress);

            setCount(currentVal);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animateCount);
            }
          };

          animationFrameId = requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
