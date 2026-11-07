import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, BUSINESS_INFO } from '@/data/business';
import { WHAT_WE_DO_INFO, SPECIAL_PROGRAMMES } from '@/data/organization';
import { ArrowRight, Sparkles, CheckCircle2, HeartHandshake, BookOpen, BrainCircuit } from 'lucide-react';
import { OrgIcon } from '@/components/OrgIcon';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'What We Do & Special Programmes | Sunny Welbeing Center Kolkata',
  description: 'Discover what we do at Sunny Welbeing Center: psychosocial support, counselling, awareness programmes, life skills training, art-based activities, and healthcare navigation in Kolkata.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF8F5]">
      
      {/* 1. Header Banner */}
      <section className="services-hero-banner">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,119,70,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="swc-container services-hero-container">
          <div className="services-hero-badge-wrap">
            <span className="services-hero-badge">
              <span className="services-hero-dot" />
              Psychosocial Care &amp; Health Guidance
            </span>
          </div>
          <h1 className="services-hero-h1">
            Care for the Body, Mind, &amp;
            <span className="services-hero-accent">Community Resilience</span>
          </h1>
          <p className="services-hero-desc">
            Scientific health support with a humane touch. We provide compassionate psychosocial support, life skills education, community sensitization, and ethical health navigation in Kolkata.
          </p>
        </div>
      </section>

      {/* 2. WHAT WE DO SECTION */}
      <section 
        id="what-we-do" 
        className="py-20 lg:py-24 bg-white border-b border-[rgba(45,79,79,0.08)] scroll-mt-[100px] max-md:scroll-mt-[80px]" 
        aria-labelledby="what-we-do-heading"
      >
        <div className="swc-container">
          
          <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D4F4F]/10 border border-[#2D4F4F]/15 text-[#2D4F4F] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span>{WHAT_WE_DO_INFO.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#1A3333] tracking-tight leading-tight" id="what-we-do-heading">
              What We Do at <em className="font-accent-serif italic font-normal text-[#D97746]">Sunny Welbeing Center</em>
            </h2>
            <p className="mt-5 text-[#4A5D5D] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              &ldquo;{WHAT_WE_DO_INFO.description}&rdquo;
            </p>
          </ScrollReveal>

          {/* 9 What We Do Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" staggerDelay={0.06}>
            {WHAT_WE_DO_INFO.services.map((item, idx) => (
              <StaggerItem key={item.id} className="h-full flex flex-col">
                <div className="h-full bg-[#FAF8F5] rounded-2xl border border-[rgba(45,79,79,0.12)] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#D97746]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[rgba(45,79,79,0.1)] flex items-center justify-center text-[#2D4F4F] group-hover:bg-[#2D4F4F] group-hover:text-[#D4A373] transition-colors duration-300 shadow-xs">
                        <OrgIcon name={item.iconName} className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D97746] bg-white px-3 py-1 rounded-full border border-[rgba(217,119,70,0.2)]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#1A3333] mb-3 min-h-[3.5rem] flex items-start group-hover:text-[#2D4F4F] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[#4A5D5D] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[rgba(45,79,79,0.08)] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#2D4F4F]/80">
                      0{idx + 1} of 09
                    </span>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97746] hover:underline"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 3. SPECIAL PROGRAMMES AND ACTIVITIES SECTION */}
      <section 
        id="special-programmes" 
        className="py-20 lg:py-24 bg-[#162727] text-white relative overflow-hidden scroll-mt-[100px] max-md:scroll-mt-[80px]" 
        aria-labelledby="programmes-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,119,70,0.12),transparent_70%)] pointer-events-none" />
        <div className="swc-container relative z-10">
          
          <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D4A373] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span>✦ Dedicated Initiatives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight" id="programmes-heading">
              Our Programmes and <em className="font-accent-serif italic font-normal text-[#D4A373]">Activities</em>
            </h2>
            <p className="mt-4 text-[#F9F8F6]/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Targeted capacity building, creative psychosocial expression, and evidence-informed mental health education for communities.
            </p>
          </ScrollReveal>

          {/* 4 Feature Programmes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {SPECIAL_PROGRAMMES.map((prog, idx) => (
              <ScrollReveal key={prog.id} variant="fade-up" delay={idx * 0.1} className="h-full flex flex-col">
                <div className="h-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-[#D97746]/50 rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#D97746]/20 border border-[#D97746]/30 flex items-center justify-center text-[#D4A373]">
                        <OrgIcon name={prog.iconName} className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-[#D4A373] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                        {prog.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-4 min-h-[2rem] flex items-center leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-[#F9F8F6]/85 text-base leading-relaxed mb-6">
                      {prog.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/10">
                      <span className="text-xs uppercase tracking-wider text-[#D4A373] font-semibold block mb-2">
                        Key Dimensions &amp; Methodologies:
                      </span>
                      {prog.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-sm text-white/75">
                          <CheckCircle2 className="w-4 h-4 text-[#D97746] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/60">Community Centred</span>
                    <a
                      href={BUSINESS_INFO.whatsappCustomUrl(`Hello SWC, I would like to enquire about your ${prog.title} programme.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#D97746] hover:bg-[#C56636] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Participate / Enquire</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Core Guidance Offerings (Existing 5 Confirmed Services Preserved) */}
      <section className="services-offerings-section">
        <div className="swc-container">
          
          <ScrollReveal variant="fade-up" className="services-offerings-header">
            <div className="services-offerings-label-wrap">
              <span className="services-offerings-label">✦ Clinical Health Guidance Areas</span>
            </div>
            <h2 className="services-offerings-title">
              Care Grounded in
              <span className="services-offerings-title-accent">Patient Listening &amp; Clarity</span>
            </h2>
            <p className="services-offerings-desc">
              Below are the five core areas of health guidance and counselling consultations provided by Sunny Welbeing Center in central Kolkata.
            </p>
          </ScrollReveal>

          <StaggerContainer className="services-cards-grid">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <article className="service-card group">
                  <div className="service-card-media">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Sunny Welbeing Center`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <span className="service-card-badge">
                      {service.category}
                    </span>
                  </div>

                  <div className="service-card-body">
                    <div>
                      <h3 className="service-card-title">
                        {service.title}
                      </h3>

                      <p className="service-card-desc">
                        {service.shortDesc}
                      </p>

                      <div className="service-card-aspects">
                        <p className="service-card-aspects-lbl">
                          Key Aspects Addressed:
                        </p>
                        {service.whatItInvolves.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="service-card-aspect-item">
                            <span className="service-card-check" aria-hidden="true">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="service-card-footer">
                      <Link
                        href={`/services/${service.slug}`}
                        className="service-card-detail-btn"
                      >
                        <span>Explore Service Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-card-enquire-btn"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </article>
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
