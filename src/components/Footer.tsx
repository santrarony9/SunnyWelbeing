'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_INFO, SERVICES } from '@/data/business';
import { 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Navigation,
  ShieldAlert,
  ArrowUp
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { FacebookIcon } from '@/components/FacebookIcon';
import { YouTubeIcon } from '@/components/YouTubeIcon';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
        <ScrollReveal variant="fade-up" className="footer-container relative z-10">
          
          <div className="footer-grid">
            
            {/* Column 1: Brand Info */}
            <div className="flex flex-col">
              <Link href="/" className="footer-brand-header group">
                <div className="footer-logo-wrap">
                  <Image
                    src="/swc-logo-transparent.png"
                    alt="Sunny Welbeing Center Kolkata"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="footer-centre-name">
                    Sunny Welbeing Center
                  </span>
                  <span className="footer-tagline">
                    Body & Mind Health Support &bull; Kolkata
                  </span>
                </div>
              </Link>

              <p className="footer-centre-desc">
                Care for the Body. Support for the Mind. Guidance for Your Wellbeing. Helping individuals and families in Kolkata navigate health concerns, emotional strain, and appropriate professional care.
              </p>

              <div className="footer-actions">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-btn-wa group"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0 text-[#D4A373] transition-transform duration-200 group-hover:scale-105" />
                  <span>WhatsApp Care Desk</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="footer-btn-call"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* Follow Us / Social Section */}
              <div className="footer-follow-us">
                <span className="footer-follow-label">Follow Us:</span>
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-btn-fb group"
                  aria-label="Official Facebook Page of Sunny Welbeing Center"
                  title="Follow Sunny Welbeing Center on Facebook"
                >
                  <FacebookIcon variant="monochrome" className="w-4 h-4 flex-shrink-0 text-[#D4A373] transition-transform duration-200 group-hover:scale-105" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/@SunnyWellbeingCentre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-btn-fb group"
                  aria-label="Official YouTube Channel of Sunny Welbeing Center"
                  title="Watch Sunny Welbeing Center on YouTube"
                >
                  <YouTubeIcon className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-105" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="footer-col-title">
                Quick Links
              </h4>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="footer-link-item">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="footer-link-item">
                  <Link href="/approach">Our Approach</Link>
                </li>
                <li className="footer-link-item">
                  <Link href="/services">Services Overview</Link>
                </li>
                <li className="footer-link-item">
                  <Link href="/team">Team & Advisory</Link>
                </li>
                <li className="footer-link-item">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="footer-link-item">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Health & Counselling Areas */}
            <div>
              <h4 className="footer-col-title">
                Support Areas
              </h4>
              <ul className="footer-links-list">
                {SERVICES.map((s) => (
                  <li key={s.slug} className="footer-link-item">
                    <Link href={`/services/${s.slug}`} className="group">
                      <span>{s.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A373] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Centre Location & Hours */}
            <div>
              <h4 className="footer-col-title">
                Centre Location
              </h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span>
                    74B Acharya Jagadish Bose Road,<br />
                    Kolkata, West Bengal 700016,<br />
                    India
                  </span>
                </div>

                <div className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="footer-contact-item">
                  <WhatsAppIcon className="footer-contact-icon" />
                  <a 
                    href={BUSINESS_INFO.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +91 98746 13267
                  </a>
                </div>

                <div className="footer-contact-item">
                  <FacebookIcon variant="monochrome" className="footer-contact-icon" />
                  <a 
                    href={BUSINESS_INFO.facebookUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label="Official Facebook page of Sunny Welbeing Center"
                  >
                    Facebook: Sunny Welbeing Center
                  </a>
                </div>

                <div className="footer-contact-item">
                  <YouTubeIcon className="footer-contact-icon flex-shrink-0" />
                  <a
                    href="https://www.youtube.com/@SunnyWellbeingCentre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label="Official YouTube channel of Sunny Welbeing Center"
                  >
                    YouTube: @SunnyWellbeingCentre
                  </a>
                </div>

                <div>
                  <a
                    href={BUSINESS_INFO.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-maps-link"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Emergency Notice Ribbon */}
          <div className="footer-emergency-notice">
            <ShieldAlert className="footer-emergency-icon" />
            <p className="footer-emergency-text">
              <strong>Emergency Medical Notice:</strong> Health guidance and counselling do not replace emergency medical or psychiatric treatment. In case of acute medical emergencies or crisis, please call 112 / 102 immediately or reach Tele-MANAS (24/7 National Mental Health Helpline) at 14416.
            </p>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom-bar">
            <p className="footer-bottom-left">
              &copy; {currentYear} Sunny Welbeing Center (SWC). All rights reserved. Kolkata, India.
            </p>
            <div className="footer-bottom-right">
              <span>Body & Mind Health Support</span>
              <span>&bull;</span>
              <span>74B Acharya Jagadish Bose Road</span>
            </div>
          </div>

        </ScrollReveal>

        {/* Scroll-to-Top Button (only shown when scrolled down) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </footer>
  );
}
