import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/data/business';
import { 
  Ear, 
  HelpCircle, 
  Compass, 
  HeartHandshake, 
  ShieldAlert, 
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Approach | Listen, Clarify, Guide, Support',
  description: 'Learn about the 4-stage health guidance and counselling approach at Sunny Welbeing Center Kolkata: Listen, Clarify, Guide, and Support.',
};

export default function ApproachPage() {
  const stages = [
    {
      num: "01",
      name: "Listen",
      subtitle: "Understand Concerns & Questions",
      icon: Ear,
      desc: "We begin by giving you uninterrupted time to articulate what you or your family member are experiencing. We listen to the full context: physical sensations, daily challenges, emotional strains, and the specific questions on your mind."
    },
    {
      num: "02",
      name: "Clarify",
      subtitle: "Organise & Explain Information",
      desc: "Health concerns can feel fragmented and jargon-heavy. We help organise your questions chronologically, explain general health principles in clear language, and examine how lifestyle, emotional stress, and physical symptoms may intersect."
    },
    {
      num: "03",
      name: "Guide",
      subtitle: "Identify Appropriate Care",
      desc: "We evaluate what direction aligns best with your needs: whether psychological counselling, a consultation with a specific medical specialist (such as a neurologist, paediatrician, or physician), or developmental assessment is most appropriate."
    },
    {
      num: "04",
      name: "Support",
      subtitle: "Prepare Questions & Next Steps",
      desc: "We help you formulate concrete, high-priority questions for your doctor, organise medical records, and provide ongoing psychological support as you navigate your healthcare decisions."
    }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Header Banner */}
      <div className="approach-hero-banner">
        <div className="approach-hero-overlay" />
        <div className="approach-hero-container">
          <div className="approach-hero-badge">
            <span className="approach-hero-badge-dot" />
            <span>Our Guiding Process</span>
          </div>
          <h1 className="approach-hero-title">
            A Four-Stage Framework for
            <span className="approach-hero-subtitle">Clarity and Support</span>
          </h1>
          <p className="approach-hero-desc">
            How Sunny Welbeing Center helps individuals and families navigate physical-health questions, emotional strain, and appropriate healthcare pathways in Kolkata.
          </p>
        </div>
      </div>

      {/* 2. Main Approach Narrative */}
      <section className="approach-main-section">
        <div className="swc-container">
          
          <div className="approach-grid">
            <ScrollReveal variant="fade-right" className="approach-narrative-col">
              <span className="approach-eyebrow">✦ Caring, Structured Guidance</span>
              <h2 className="approach-title">
                Navigating Health Concerns
                <span className="approach-subtitle">Step by Thoughtful Step</span>
              </h2>
              <div className="approach-paragraphs">
                <p>
                  When facing physical discomfort, behavioural difficulties in a child, or subtle changes in an aging relative, it is common to feel confused by medical terminology or uncertain about which specialist to visit first.
                </p>
                <p>
                  At Sunny Welbeing Center, we do not operate as a clinical hospital or offer rushed diagnostic pronouncements. Instead, we serve as an objective, compassionate sanctuary where you can pause, clarify your thoughts, and determine the most sensible next steps for care.
                </p>
                <p>
                  Our sequence—<strong>Listen, Clarify, Guide, and Support</strong>—is not a clinical diagnostic protocol, but an educational and supportive framework designed to empower you with clarity.
                </p>
              </div>

              <div className="approach-cta-group">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="approach-btn-wa"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link href="/services" className="approach-btn-services">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={0.15}>
              <div className="approach-image-wrap">
                <Image
                  src="/images/approach-listening.jpg"
                  alt="Sunny Welbeing Center consultation room in Kolkata"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 3. 4 Stages Detailed Cards */}
          <div className="approach-stages-section">
            <ScrollReveal variant="fade-up" className="approach-stages-header">
              <span className="approach-eyebrow">✦ The Four Stages</span>
              <h3 className="approach-stages-title">
                How Your Consultation Unfolds
              </h3>
            </ScrollReveal>

            <StaggerContainer className="approach-stages-grid">
              {stages.map((stg) => {
                return (
                  <StaggerItem key={stg.num}>
                    <div className="approach-stage-card">
                      <div className="approach-stage-card-top">
                        <div className="approach-stage-num">
                          {stg.num}
                        </div>
                        <div className="approach-stage-info">
                          <span className="approach-stage-tag">
                            Stage {stg.num}
                          </span>
                          <h4 className="approach-stage-title">
                            {stg.name}
                            <span className="approach-stage-subtitle">{stg.subtitle}</span>
                          </h4>
                        </div>
                      </div>
                      <p className="approach-stage-desc">
                        {stg.desc}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* 4. Mandatory Clear Health Guidance Disclaimer */}
          <ScrollReveal variant="fade-up" className="approach-disclaimer-box">
            <div className="max-w-3xl">
              <div className="approach-disclaimer-badge">
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                <span>
                  Important Scope &amp; Medical Disclaimer
                </span>
              </div>

              <h3 className="approach-disclaimer-title">
                Our Boundaries of Care
              </h3>

              <div className="approach-disclaimer-text">
                <p>
                  Sunny Welbeing Center provides psychological counselling and health guidance to promote awareness, emotional balance, and informed healthcare navigation.
                </p>
                <p>
                  <strong>Health guidance does not replace medical assessment, clinical diagnosis, prescriptions, emergency hospital care, or individual treatment decisions by qualified medical doctors.</strong>
                </p>
                <p>
                  Physical symptoms—including persistent headaches, tremors, balance problems, repeated falls, sudden memory decline, or unexplained fatigue—require formal clinical examination by qualified medical practitioners. If your concerns indicate medical investigation, we will guide you towards appropriate healthcare clinicians.
                </p>
              </div>

              <div className="approach-disclaimer-actions">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="approach-disclaimer-btn-wa"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Ask a Question on WhatsApp</span>
                </a>
                <Link href="/faq" className="approach-disclaimer-btn-faq">
                  <span>View Frequently Asked Questions</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
