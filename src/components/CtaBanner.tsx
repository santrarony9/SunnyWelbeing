import React from 'react';
import { BUSINESS_INFO } from '@/data/business';
import { Phone, HeartPulse } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function CtaBanner() {
  return (
    <section className="cta-banner-section" aria-label="Care for the Body, Support for the Mind">
      {/* Decorative radial gradients with gentle ambient pulse */}
      <div className="cta-banner-radial-1 animate-ambient-glow" />
      <div className="cta-banner-radial-2 animate-ambient-glow" />

      <ScrollReveal variant="fade-up" className="cta-banner-container">
        
        {/* 1. Top Label */}
        <div className="cta-banner-label">
          <HeartPulse className="cta-banner-label-icon animate-pulse" />
          <span>Health Support for Body and Mind</span>
        </div>

        {/* 2. Main Heading & 3. Subheading */}
        <div className="cta-banner-headings">
          <h2 className="cta-banner-title">
            Care for the Body.
          </h2>
          <span className="cta-banner-subtitle">
            Support for the Mind.
          </span>
        </div>

        {/* 4. Description */}
        <p className="cta-banner-desc">
          We welcome you to reach out directly on WhatsApp to discuss your physical health questions, emotional concerns, and arrange a consultation in Kolkata.
        </p>

        {/* 5. Contact Action Row */}
        <div className="cta-banner-actions">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-banner-btn-wa group"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <span>Book an Appointment via WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="cta-banner-btn-phone group"
          >
            <Phone className="cta-banner-phone-icon group-hover:scale-110 transition-transform duration-300" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </ScrollReveal>
    </section>
  );
}
