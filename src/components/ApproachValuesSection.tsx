import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import ScrollReveal from '@/components/motion/ScrollReveal';
import Counter from '@/components/motion/Counter';

export default function ApproachValuesSection() {
  return (
    <section className="mi-wrapper" aria-labelledby="signature-heading">
      <div className="mi-section">
        
        {/* LEFT COLUMN: Stacked 3-Line Heading + Verified Qualitative Values */}
        <ScrollReveal variant="fade-right" className="mi-text-col">
          <p className="mi-eyebrow">Sunny Welbeing Center</p>

          <h2 className="mi-heading" id="signature-heading">
            Care.<br />
            <span className="mi-accent">Clarity.</span>
            Guidance.
          </h2>

          <p className="mi-tagline">
            Scientific health support with a humane touch. We offer a compassionate, respectful, and scientifically informed approach to physical and mental wellbeing, helping people organise their concerns and understand their next steps.
          </p>

          {/* Qualitative Pillars (No unverified years claims) */}
          <div className="mi-stats">
            <div className="mi-stat">
              <span className="mi-stat-num">Patient</span>
              <span className="mi-stat-label">Attentive Listening</span>
            </div>
            <hr className="mi-stat-divider" />
            <div className="mi-stat">
              <span className="mi-stat-num">Informed</span>
              <span className="mi-stat-label">Care Navigation</span>
            </div>
            <hr className="mi-stat-divider" />
            <div className="mi-stat">
              <Counter to={100} suffix="%" className="mi-stat-num" />
              <span className="mi-stat-label">Confidential & Ethical</span>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT COLUMN: Dark Rounded Card matching Mind Inside .mi-card */}
        <ScrollReveal variant="fade-left" delay={0.15} className="w-full">
          <article className="mi-card">
            <p className="mi-card-label">Our Approach</p>

            <p className="mi-card-text">
              Every day, people face questions about their body, mind and health. They may experience doubt, fear and uncertainty, especially when they or their loved ones are unwell. Busy medical specialists may not always have enough time to answer every question, leaving patients and families feeling helpless.
            </p>

            <hr className="mi-rule" />

            <p className="mi-card-text">
              Sunny Welbeing Center provides a calm, supportive space to discuss concerns about physical and mental wellbeing. Our approach focuses on <strong>listening carefully</strong>, offering compassionate guidance and helping people prepare informed questions for <strong>qualified healthcare professionals</strong>.
            </p>

            {/* CTA Button */}
            <div className="mi-cta-group">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mi-btn-primary group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mi-badges">
              <span className="mi-badge">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A373]" />
                Confidential & Safe
              </span>
              <span className="mi-badge">
                <HeartHandshake className="w-3.5 h-3.5 text-[#D4A373]" />
                Patient-First Care
              </span>
              <span className="mi-badge">
                <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
                74B AJC Bose Rd, Kolkata
              </span>
            </div>

          </article>
        </ScrollReveal>

      </div>
    </section>
  );
}
