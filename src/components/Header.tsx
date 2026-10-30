'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '@/data/business';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  // On homepage before scroll, text is white over dark hero; when scrolled or on subpages, dark text
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`site-header ${!isTransparent ? 'scrolled' : ''}`}
        role="banner"
      >
        <div className="header-container">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="header-brand-link group">
            <div className="header-logo-wrap">
              <Image
                src="/swc-logo-transparent.png"
                alt="Sunny Welbeing Center Official Logo"
                fill
                sizes="(max-width: 768px) 59px, (max-width: 1024px) 70px, 86px"
                className="header-logo-img object-contain"
                priority
              />
            </div>
            <div className="header-brand-text">
              <span
                className={`header-brand-title ${
                  isTransparent ? 'text-white' : 'text-[#1A3333]'
                }`}
              >
                Sunny Welbeing Center
              </span>
              <span
                className={`header-brand-tagline ${
                  isTransparent ? 'text-[#D4A373]' : 'text-[#D97746]'
                }`}
              >
                Health Support for Body &amp; Mind
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="site-nav hidden lg:flex">
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About Us
            </Link>

            <Link
              href="/services"
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            >
              Our Services
            </Link>

            <Link
              href="/#who-we-support"
              className={`nav-link ${pathname === '/#who-we-support' ? 'active' : ''}`}
            >
              Who We Support
            </Link>

            <Link
              href="/#why-choose"
              className={`nav-link ${pathname === '/#why-choose' ? 'active' : ''}`}
            >
              Why Choose SWC
            </Link>

            <Link
              href="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              isTransparent ? 'text-white hover:bg-white/10' : 'text-[#1A3333] hover:bg-gray-100'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Spacer on non-homepage so content flows naturally below fixed header */}
      {!isHome && <div className="h-[84px] max-md:h-[74px]" />}

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/swc-logo-transparent.png"
                        alt="SWC"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-[#1A3333]">
                        Sunny Welbeing Center
                      </p>
                      <p className="text-[10px] text-[#D97746] uppercase tracking-wider">
                        Body &amp; Mind Health Support
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-gray-500 hover:text-black rounded-md transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex flex-col py-6 space-y-4">
                  <Link
                    href="/"
                    className={`text-base font-heading font-medium transition-colors ${
                      isActive('/') ? 'text-[#D97746] font-semibold' : 'text-[#1A3333] hover:text-[#D97746]'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`text-base font-heading font-medium transition-colors ${
                      isActive('/about') ? 'text-[#D97746] font-semibold' : 'text-[#1A3333] hover:text-[#D97746]'
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/approach"
                    className={`text-base font-heading font-medium transition-colors ${
                      isActive('/approach') ? 'text-[#D97746] font-semibold' : 'text-[#1A3333] hover:text-[#D97746]'
                    }`}
                  >
                    Our Approach
                  </Link>
                  <Link
                    href="/services"
                    className={`text-base font-heading font-medium transition-colors ${
                      isActive('/services') ? 'text-[#D97746] font-semibold' : 'text-[#1A3333] hover:text-[#D97746]'
                    }`}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/#who-we-support"
                    className="text-base font-heading font-medium text-[#1A3333] hover:text-[#D97746] transition-colors"
                  >
                    Who We Support
                  </Link>
                  <Link
                    href="/#why-choose"
                    className="text-base font-heading font-medium text-[#1A3333] hover:text-[#D97746] transition-colors"
                  >
                    Why Choose SWC
                  </Link>
                  <Link
                    href="/team"
                    className={`text-base font-heading font-medium transition-colors ${
                      isActive('/team') ? 'text-[#D97746] font-semibold' : 'text-[#1A3333] hover:text-[#D97746]'
                    }`}
                  >
                    Team & Advisory
                  </Link>
                  <Link
                    href="/faq"
                    className={`text-base font-heading font-medium transition-colors ${
                      isActive('/faq') ? 'text-[#D97746] font-semibold' : 'text-[#1A3333] hover:text-[#D97746]'
                    }`}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-base font-heading font-medium transition-colors ${
                      isActive('/contact') ? 'text-[#D97746] font-semibold' : 'text-[#1A3333] hover:text-[#D97746]'
                    }`}
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>

              {/* Drawer Bottom WhatsApp */}
              <div className="pt-6 border-t border-gray-100">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#162622] text-white border border-[#D97746]/40 py-3 rounded-full font-heading text-sm font-semibold shadow-md hover:bg-[#1D332D] hover:border-[#D97746] hover:shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#D4A373]" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
