'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';

const POPUP_STORAGE_KEY = 'swc_website_live_popup_dismissed';

export default function LaunchPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      // Check if visitor has already dismissed the popup
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const forcePreview = params?.get('preview_popup') === 'true';
      const isDismissed = localStorage.getItem(POPUP_STORAGE_KEY);

      if (!isDismissed || forcePreview) {
        // Smooth entrance delay after initial page render
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 650);
        return () => clearTimeout(timer);
      }
    } catch {
      // Graceful fallback if localStorage is unavailable
    }
  }, []);

  // Lock body scroll while modal is visible
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(POPUP_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="launch-popup-title"
        >
          {/* Backdrop overlay with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#142624] text-white rounded-3xl p-6 sm:p-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_35px_rgba(212,163,115,0.15)] border border-[#D4A373]/35 overflow-hidden z-10 my-auto max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Golden Glow Accent at top */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 bg-[#D4A373]/20 blur-3xl rounded-full pointer-events-none"
              aria-hidden="true"
            />

            {/* Close Button (×) */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A373] cursor-pointer"
              aria-label="Close welcome popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Brand Logo & Centre Badge */}
            <div className="relative mx-auto mb-4 flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#1A3333] border border-[#D4A373]/40 p-2.5 flex items-center justify-center shadow-lg shadow-black/30 mb-3">
                <Image
                  src="/swc-logo-transparent.png"
                  alt="Sunny Welbeing Center Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A373]/15 border border-[#D4A373]/30 text-[#E5C296] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-[#D4A373]" />
                <span>Sunny Welbeing Center &bull; Kolkata</span>
              </div>
            </div>

            {/* Main Heading */}
            <h2
              id="launch-popup-title"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4DF] via-[#E8C28A] to-[#D4A373] font-heading mb-2 leading-tight"
            >
              🎉 OUR WEBSITE IS NOW LIVE!
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-2 my-4" aria-hidden="true">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4A373]/50" />
              <span className="text-[#D4A373] text-xs">✦</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4A373]/50" />
            </div>

            {/* Welcome Message */}
            <div className="space-y-3 mb-6">
              <p className="text-white text-base sm:text-[17px] font-medium leading-relaxed">
                We are delighted to welcome you to the official website of Sunny Wellbeing Centre.
              </p>
              <p className="text-[#C2D1D1] text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto">
                Discover our healthcare services, explore our facilities, and connect with our team for better health and wellbeing.
              </p>
            </div>

            {/* Explore Website Button */}
            <div className="pt-1">
              <button
                onClick={handleClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4A373] via-[#E4BE8A] to-[#C99661] text-[#132422] font-heading font-bold text-sm tracking-wider uppercase shadow-[0_6px_25px_rgba(212,163,115,0.35)] hover:shadow-[0_8px_30px_rgba(212,163,115,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
              >
                <span>EXPLORE WEBSITE</span>
                <ArrowRight className="w-4 h-4 text-[#132422] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
