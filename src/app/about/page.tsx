import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/data/business';
import { 
  MISSION_STATEMENT, 
  OUR_AIMS, 
  OUR_OBJECTIVES 
} from '@/data/organization';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Compass, 
  ArrowRight,
  Ear,
  MapPin,
  CheckCircle2,
  Sparkles,
  Users,
  Target,
  Scale
} from 'lucide-react';
import { OrgIcon } from '@/components/OrgIcon';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Us | Our Mission, Aims & Objectives | Sunny Welbeing Center',
  description: 'Learn about the mission, aims, and objectives of Sunny Welbeing Center in Kolkata. We promote mental health, psychosocial well-being, resilience, and social inclusion with dignity.',
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
      
      {/* 1. Mind Inside Split Hero: Dark Left Column + Right Image Column */}
      <section className="about-hero-section">
        <div className="about-hero-grid">
          
          {/* Left Column: Text & Verified Attributes */}
          <div className="about-hero-col-text">
            <div className="about-hero-badge">
              <span className="about-hero-badge-dot" />
              <span>Health &amp; Psychosocial Support &bull; Kolkata</span>
            </div>

            <h1 className="about-hero-title">
              Where the body &amp; mind<br />
              find <em className="about-hero-title-accent">clarity.</em>
            </h1>

            <p className="about-hero-desc">
              Scientific health support with a humane touch. We offer a compassionate, respectful, and scientifically informed space in central Kolkata, helping individuals, families, and communities organise their concerns, build resilience, and navigate their next steps with dignity.
            </p>

            <div className="about-hero-actions">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-primary"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Enquire via WhatsApp</span>
              </a>

              <Link href="/services" className="about-btn-ghost">
                <span>Explore What We Do</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Verified Qualitative Commitments */}
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

      {/* 2. OUR MISSION SECTION */}
      <section 
        id="our-mission" 
        className="py-20 lg:py-24 bg-[#162727] text-white relative overflow-hidden scroll-mt-[100px] max-md:scroll-mt-[80px]" 
        aria-labelledby="mission-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,70,0.15),transparent_60%)] pointer-events-none" />
        <div className="swc-container relative z-10">
          
          <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D4A373] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span>✦ Our Mission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight" id="mission-heading">
              Creating Supportive Communities with <em className="font-accent-serif italic font-normal text-[#D4A373]">Dignity &amp; Purpose</em>
            </h2>
          </ScrollReveal>

          {/* Main Mission Text Block */}
          <ScrollReveal variant="fade-up" className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-xl mb-14">
            <div className="space-y-6 text-lg sm:text-xl text-[#F9F8F6]/90 leading-relaxed font-normal">
              <p className="border-l-4 border-[#D97746] pl-6 text-xl sm:text-2xl text-white font-medium italic">
                &ldquo;{MISSION_STATEMENT.paragraph1}&rdquo;
              </p>
              <p className="pl-6 text-[#F9F8F6]/85">
                {MISSION_STATEMENT.paragraph2}
              </p>
            </div>
          </ScrollReveal>

          {/* Highlighted Phrases Cards Grid */}
          <div>
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold">Core Pillars of Our Mission</span>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" staggerDelay={0.08}>
              {MISSION_STATEMENT.highlightPhrases.map((phrase, idx) => (
                <StaggerItem key={idx} className="h-full flex flex-col">
                  <div className="h-full bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-[#D97746]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3 min-h-[2.5rem]">
                        <CheckCircle2 className="w-5 h-5 text-[#D97746] flex-shrink-0" />
                        <h3 className="font-heading font-bold text-lg text-white leading-snug">
                          {phrase.term}
                        </h3>
                      </div>
                      <p className="text-sm text-white/75 leading-relaxed">
                        {phrase.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D4A373]">
                      <span className="flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D97746]" />
                        <span>{phrase.supportingLabel}</span>
                      </span>
                      <span className="text-white/40 text-[11px] font-mono">0{idx + 1}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
              
              {/* Sixth Card with Callout */}
              <StaggerItem className="h-full flex flex-col">
                <div className="h-full bg-gradient-to-br from-[#D97746]/20 to-transparent border border-[#D97746]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3 min-h-[2.5rem]">
                      <Sparkles className="w-5 h-5 text-[#D4A373] flex-shrink-0" />
                      <h3 className="font-heading font-bold text-lg text-white leading-snug">
                        Compassionate Guidance
                      </h3>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Ensuring every voice is heard with unconditional positive regard, cultural sensitivity, and ethical privacy.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D4A373]">
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97746]" />
                      <span>Serving Kolkata &amp; Beyond</span>
                    </span>
                    <span className="text-white/60 text-[11px] font-mono">06</span>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

        </div>
      </section>

      {/* 3. OUR AIMS SECTION */}
      <section 
        id="our-aims" 
        className="py-20 lg:py-24 bg-[#FAF8F5] scroll-mt-[100px] max-md:scroll-mt-[80px]" 
        aria-labelledby="aims-heading"
      >
        <div className="swc-container">
          
          <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D4F4F]/10 border border-[#2D4F4F]/15 text-[#2D4F4F] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span>✦ Our Aims</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#1A3333] tracking-tight leading-tight" id="aims-heading">
              Our Strategic Aims for <em className="font-accent-serif italic font-normal text-[#D97746]">Community Well-being</em>
            </h2>
            <p className="mt-4 text-[#4A5D5D] text-lg max-w-2xl mx-auto leading-relaxed">
              Clear, practical goals designed to dismantle barriers, foster individual coping skills, and ensure respectful psychosocial care.
            </p>
          </ScrollReveal>

          {/* 7 Aims Grid + Balanced Community Vision Card */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" staggerDelay={0.07}>
            {OUR_AIMS.map((aim, idx) => (
              <StaggerItem key={aim.id} className="h-full flex flex-col">
                <div className="h-full bg-white rounded-2xl border border-[rgba(45,79,79,0.12)] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#D97746]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[rgba(45,79,79,0.1)] flex items-center justify-center text-[#2D4F4F] group-hover:bg-[#162727] group-hover:text-[#D4A373] transition-colors duration-300 shadow-xs">
                        <OrgIcon name={aim.iconName} className="w-6 h-6" />
                      </div>
                      <span className="font-heading text-xs font-bold text-[#D97746] tracking-wider uppercase">
                        Aim 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#1A3333] mb-3 min-h-[3.5rem] flex items-start group-hover:text-[#2D4F4F] transition-colors leading-snug">
                      {aim.title}
                    </h3>

                    <p className="text-[#4A5D5D] text-sm leading-relaxed">
                      {aim.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#2D4F4F]">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97746]" />
                      <span>{aim.supportingLabel}</span>
                    </span>
                    <span className="text-[#4A5D5D]/50 text-[11px] font-mono">0{idx + 1}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}

            {/* Additional Summary Card spanning 2 columns on desktop to balance the 3x3 layout */}
            <StaggerItem className="h-full flex flex-col lg:col-span-2">
              <div className="h-full bg-[#162727] rounded-2xl border border-[#162727] p-6 sm:p-7 shadow-sm text-white flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A373] shadow-xs">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-xs font-bold text-[#D4A373] tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Community Vision
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3 min-h-[3.5rem] flex items-start leading-snug">
                    Sustainable Care Networks
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                    By partnering directly with families, schools, and medical providers, we turn these aims into tangible daily impact for communities in Kolkata.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-semibold text-[#D4A373]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97746]" />
                    <span>Collaborative Partnerships</span>
                  </span>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A373] hover:text-white transition-colors">
                    <span>Connect with our care team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* 4. OUR OBJECTIVES SECTION */}
      <section 
        id="our-objectives" 
        className="py-20 lg:py-24 bg-white border-y border-[rgba(45,79,79,0.08)] scroll-mt-[100px] max-md:scroll-mt-[80px]" 
        aria-labelledby="objectives-heading"
      >
        <div className="swc-container">
          
          <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D4F4F]/10 border border-[#2D4F4F]/15 text-[#2D4F4F] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span>✦ Our Objectives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#1A3333] tracking-tight leading-tight" id="objectives-heading">
              Our Core <em className="font-accent-serif italic font-normal text-[#D97746]">Action Framework</em>
            </h2>
            <p className="mt-4 text-[#4A5D5D] text-lg max-w-2xl mx-auto leading-relaxed">
              Organized into four major pillars addressing individual well-being, family networks, proactive community education, and institutional advocacy.
            </p>
          </ScrollReveal>

          {/* 4 Subsections Grid */}
          <div className="space-y-8">
            {OUR_OBJECTIVES.map((obj, idx) => (
              <ScrollReveal key={obj.id} variant="fade-up" delay={idx * 0.08}>
                <div className="bg-[#FAF8F5] rounded-3xl border border-[rgba(45,79,79,0.12)] p-8 sm:p-10 shadow-sm hover:border-[#D97746]/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    
                    {/* Header Col */}
                    <div className="lg:w-1/3 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#2D4F4F] text-[#D4A373] flex items-center justify-center mb-4 shadow-sm">
                        <OrgIcon name={obj.iconName} className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-[#1A3333] mb-2">
                        {obj.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#D97746] tracking-wide">
                        {obj.subtitle}
                      </p>
                    </div>

                    {/* Points Col */}
                    <div className="lg:w-2/3 space-y-4">
                      {obj.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3.5 bg-white rounded-xl p-4 sm:p-5 border border-[rgba(45,79,79,0.06)] shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-[#D97746] mt-2 flex-shrink-0" />
                          <p className="text-[#3A4E4E] text-sm sm:text-base leading-relaxed">
                            {pt}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Core Philosophy Section (Existing Pillars Preserved) */}
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
