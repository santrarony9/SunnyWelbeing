import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/data/business';
import { CORE_VALUES } from '@/data/organization';
import { 
  Ear, 
  HelpCircle, 
  Compass, 
  HeartHandshake, 
  ShieldAlert, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { OrgIcon } from '@/components/OrgIcon';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Approach & Core Values | Sunny Welbeing Center Kolkata',
  description: 'Explore the 4-stage framework and 9 core principles that define Our Approach at Sunny Welbeing Center Kolkata: Dignity, Confidentiality, Inclusivity, and Rights-Based Care.',
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
            <span>Our Approach &amp; Core Values</span>
          </div>
          <h1 className="approach-hero-title">
            Compassionate Guidance Grounded in
            <span className="approach-hero-subtitle">Ethics, Dignity, &amp; Clarity</span>
          </h1>
          <p className="approach-hero-desc">
            How Sunny Welbeing Center helps individuals, families, and communities navigate emotional distress, physical-health questions, and appropriate healthcare pathways in Kolkata.
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
                  When facing emotional distress, physical discomfort, behavioural difficulties in a child, or subtle changes in an aging relative, it is common to feel confused by medical terminology or uncertain about which specialist to visit first.
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
                  <span>Explore What We Do</span>
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

            <StaggerContainer className="approach-stages-grid items-stretch">
              {stages.map((stg) => {
                return (
                  <StaggerItem key={stg.num} className="h-full flex flex-col">
                    <div className="approach-stage-card h-full flex flex-col justify-between">
                      <div>
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
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

        </div>
      </section>

      {/* 4. OUR APPROACH - 9 CORE VALUES & PRINCIPLES SECTION */}
      <section 
        id="our-values" 
        className="py-20 lg:py-24 bg-[#162727] text-white relative overflow-hidden scroll-mt-[100px] max-md:scroll-mt-[80px]" 
        aria-labelledby="values-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,119,70,0.15),transparent_60%)] pointer-events-none" />
        <div className="swc-container relative z-10">
          
          <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D4A373] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span>✦ Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight" id="values-heading">
              Our Core Values &amp; <em className="font-accent-serif italic font-normal text-[#D4A373]">Ethical Principles</em>
            </h2>
            <p className="mt-4 text-[#F9F8F6]/80 text-lg max-w-2xl mx-auto leading-relaxed">
              These nine foundational principles guide every interaction, community initiative, counselling session, and advocacy effort at Sunny Welbeing Center.
            </p>
          </ScrollReveal>

          {/* 9 Core Values Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" staggerDelay={0.06}>
            {CORE_VALUES.map((val, idx) => (
              <StaggerItem key={val.id} className="h-full flex flex-col">
                <div className="h-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#D97746]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D97746] group-hover:text-white transition-colors duration-300 shadow-xs">
                        <OrgIcon name={val.iconName} className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A373] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                        Value 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-white mb-3 min-h-[3.5rem] flex items-start leading-snug">
                      {val.name}
                    </h3>

                    <p className="text-white/75 text-sm leading-relaxed">
                      {val.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D4A373]">
                    <span className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D97746]" />
                      <span>Ethical Standard</span>
                    </span>
                    <span className="text-white/40 text-[11px] font-mono">0{idx + 1}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 5. Mandatory Clear Health Guidance Disclaimer */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="swc-container">
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
