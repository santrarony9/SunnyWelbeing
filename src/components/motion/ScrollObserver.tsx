'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const observeUnrevealed = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If already within initial viewport, reveal smoothly
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    observeUnrevealed();

    // Check again after page layout stabilizes
    const timer = setTimeout(observeUnrevealed, 80);

    // Watch for dynamic DOM additions on route change
    const mutationObserver = new MutationObserver(() => {
      observeUnrevealed();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
