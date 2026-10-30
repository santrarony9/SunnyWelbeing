import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/data/business';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Compass, 
  ArrowRight,
  Ear,
  MapPin,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Us | Scientific Health Support with a Humane Touch',
  description: 'Sunny Welbeing Center (SWC) in Kolkata provides compassionate psychological counselling and physical health guidance, recognising that the body and mind are closely connected.',
};

export default function AboutPage() {
  const pillars = [
    {
      num: "01",
      title: "Listening Carefully",
      desc: "Every day, people face questions about their body, mind and health. They may experience doubt, fear and uncertainty, especially when they or their loved ones are unwell. Busy medical specialists may not always have enough time to answer every question, leaving patients and families feeling helpless."
    },
    {
      num: "02",
      title: "Offering Compassionate Guidance",
      desc: "Sunny Welbeing Center provides a calm, supportive space to discuss concerns about physical and mental wellbeing. Our approach focuses on listening carefully, offering compassionate guidance and helping people prepare informed questions for qualified healthcare professionals."
    },
    {
      num: "03",
      title: "Empowering Informed Healthcare",
      desc: "We do not replace doctors, independently diagnose diseases, or prescribe medicines. Instead, we assist individuals and families in organising their symptoms, understanding medical advice, and engaging with treating physicians as informed, confident participants."
    }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Mind Inside Split Hero: Dark Left Column + Right Image Column */}
      <section className="about-hero-section">
        <div className="about-hero-grid">
          
          {/* Left Column: Text & Verified Attributes */}
          <div className="about-hero-col-text">
            <div className="about-hero-badge">
              <span className="about-hero-badge-dot" />
              <span>Health Support Centre &bull; Kolkata</span>
            </div>

            <h1 className="about-hero-title">
              Where the body &amp; mind<br />
              find <em className="about-hero-title-accent">clarity.</em>
            </h1>

            <p className="about-hero-desc">
              Scientific health support with a humane touch. We offer a compassionate, respectful, and scientifically informed space in central Kolkata, helping people organise their concerns and understand their next steps.
            </p>

            <div className="about-hero-actions">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-primary"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Book an Appointment</span>
              </a>

              <Link href="/services" className="about-btn-ghost">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Verified Qualitative Commitments (No unverified years claims) */}
            <div className="about-trust-indicators">
              <div className="about-trust-item">
                <span className="about-trust-val">Attentive</span>
                <span className="about-trust-lbl">Listening</span>
              </div>
              <div className="about-trust-item">
                <span className="about-trust-val">Ethical</span>
                <span className="about-trust-lbl">Guidance</span>
              </div>
              <div className="about-trust-item">
                <span className="about-trust-val">100%</span>
                <span className="about-trust-lbl">Confidential</span>
              </div>
            </div>

          </div>

          {/* Right Column: Full-Bleed Centre Interior Image */}
          <div className="about-hero-col-image">
            <Image
              src="/images/about-space.jpg"
              alt="Sunny Welbeing Center consultation space Kolkata"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="about-hero-overlay-desktop" />
            <div className="about-hero-overlay-mobile" />
          </div>

        </div>
      </section>

      {/* Core Philosophy Section with Requested Text */}
      <section className="about-philosophy-section">
        <div className="swc-container">
          
          <ScrollReveal variant="fade-up" className="about-philosophy-header">
            <div className="about-philosophy-label-wrap">
              <span className="about-philosophy-label">✦ Scientific Support with a Humane Touch</span>
            </div>
            <h2 className="about-philosophy-title">
              A Calm, Supportive Space for<br />
              <em className="about-philosophy-title-accent">Body and Mind</em>
            </h2>
            <p className="about-philosophy-desc">
              Body and mind are closely connected. We provide compassionate guidance to help individuals and families navigate their health questions with dignity and peace of mind.
            </p>
          </ScrollReveal>

          {/* Information Cards Stack */}
          <StaggerContainer className="about-pillars-stack">
            {pillars.map((p, idx) => (
              <StaggerItem key={idx}>
                <div className="about-pillar-card group">
                  <div className="about-pillar-content">
                    <h3 className="about-pillar-title">
                      {p.title}
                    </h3>
                    <p className="about-pillar-desc">
                      {p.desc}
                    </p>
                  </div>
                  <div className="about-pillar-num-wrap" aria-hidden="true">
                    <span className="about-pillar-num">
                      {p.num}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

    </div>
  );
}
