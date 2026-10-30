'use client';

import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
}: ScrollRevealProps) {
  let variantClass = 'reveal-fade-up';
  if (variant === 'fade-left') variantClass = 'reveal-fade-left';
  else if (variant === 'fade-right') variantClass = 'reveal-fade-right';
  else if (variant === 'fade-down') variantClass = 'reveal-fade-down';
  else if (variant === 'scale') variantClass = 'reveal-scale';
  else if (variant === 'fade') variantClass = 'reveal-fade';

  const style = delay > 0 ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <div 
      className={`reveal-on-scroll ${variantClass} ${className}`.trim()} 
      style={style}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay,
  once,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <div className={`stagger-cards ${className}`.trim()}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = '',
  variant = 'fade-up'
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade' | 'scale';
}) {
  let variantClass = 'reveal-fade-up';
  if (variant === 'scale') variantClass = 'reveal-scale';
  else if (variant === 'fade') variantClass = 'reveal-fade';

  return (
    <div className={`reveal-on-scroll ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
