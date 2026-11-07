import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WHO_WE_SERVE_INFO } from '@/data/organization';
import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { OrgIcon } from '@/components/OrgIcon';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function WhoWeSupportSection() {
  const groupLabels: Record<string, string> = {
    'children': 'Early Development',
    'adolescents': 'Emotional Balance',
    'adults': 'Stress Management',
    'families-caregivers': 'Caregiver Guidance',
    'students-teachers': 'Academic Wellbeing',
    'community-members': 'Grassroots Solidarity',
    'mental-health-difficulties': 'Respectful Care',
    'vulnerable-marginalized': 'Protection & Hope'
  };

  return (
    <section 
      id="who-we-serve" 
      className="who-we-support relative py-20 lg:py-24 bg-[#FAF8F5] scroll-mt-[100px] max-md:scroll-mt-[80px]" 
      aria-labelledby="who-we-serve-heading"
    >
      {/* Anchor alias for backwards compatibility */}
      <span id="who-we-support" className="absolute -top-20" aria-hidden="true" />
      
      <div className="swc-container">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="who-we-support-header text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center mb-4">
            <span className="section-eyebrow justify-center">{WHO_WE_SERVE_INFO.badge}</span>
          </div>
          <h2 className="who-we-support-title" id="who-we-serve-heading">
            {WHO_WE_SERVE_INFO.title} at<br />
            <em className="font-accent-serif italic font-normal text-[#D97746]">Sunny Welbeing Center</em>
          </h2>
          <p className="who-we-support-intro text-lg text-[#4A5D5D] leading-relaxed mt-4">
            {WHO_WE_SERVE_INFO.description}
          </p>
        </ScrollReveal>

        {/* 8 Beneficiary Groups Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 items-stretch" staggerDelay={0.06}>
          {WHO_WE_SERVE_INFO.groups.map((group, idx) => (
            <StaggerItem key={group.id} className="h-full flex flex-col">
              <div className="h-full bg-white rounded-2xl border border-[rgba(45,79,79,0.12)] p-6 shadow-xs hover:shadow-md hover:border-[#D97746]/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[rgba(45,79,79,0.1)] flex items-center justify-center text-[#2D4F4F] group-hover:bg-[#2D4F4F] group-hover:text-[#D4A373] transition-colors duration-300 mb-4 shadow-xs">
                    <OrgIcon name={group.iconName} className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#1A3333] mb-2.5 min-h-[2.75rem] flex items-center group-hover:text-[#2D4F4F] transition-colors leading-snug">
                    {group.title}
                  </h3>

                  <p className="text-sm text-[#4A5D5D] leading-relaxed">
                    {group.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#2D4F4F]/80">
                  <span className="font-semibold text-[#D97746]">
                    {groupLabels[group.id] || 'Inclusive Care'}
                  </span>
                  <span className="text-gray-400 font-mono text-[11px]">0{idx + 1}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Highlighted Statement Box */}
        <ScrollReveal variant="fade-up" className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-[#D97746]/30 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D97746]" />
            <div className="w-12 h-12 rounded-full bg-[#D97746]/10 text-[#D97746] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D97746] block mb-1">
                Our Foundational Commitment
              </span>
              <p className="text-base sm:text-lg font-medium text-[#1A3333] leading-relaxed">
                &ldquo;{WHO_WE_SERVE_INFO.highlightStatement}&rdquo;
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A5D5D]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F4F]" />
                  Local Culture &amp; Lived Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F4F]" />
                  100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4F4F]" />
                  Safety &amp; Protection First
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
