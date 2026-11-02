import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/data/business';
import { 
  UserCheck, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  Award,
  Stethoscope,
  Brain,
  Compass,
  Clock
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import DoctorVideoSection from '@/components/DoctorVideoSection';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Team & Professional Expertise | Sunny Welbeing Center Kolkata',
  description: 'Learn about the professional team and consultative expertise at Sunny Welbeing Center Kolkata, including senior psychological counselling and health guidance advisers.',
};

export default function TeamPage() {
  const practiceDisciplines = [
    {
      title: "Psychological Counsellors",
      subtitle: "Compassionate Emotional Support",
      icon: Brain,
      color: "text-[#D97746]",
      bg: "bg-[#D97746]/10",
      desc: "Our psychological counselling practice provides dedicated expertise in patient listening, emotional distress, workplace stress, family dynamics, and behavioural guidance."
    },
    {
      title: "Health Guidance Advisers",
      subtitle: "Care Navigation & Direction",
      icon: Compass,
      color: "text-[#2D4F4F]",
      bg: "bg-[#2D4F4F]/10",
      desc: "Our health navigation framework offers seasoned healthcare guidance, assisting individuals in understanding medical advice and identifying suitable specialist care."
    },
    {
      title: "Physical-Health Specialists",
      subtitle: "By Appointment & Referral",
      icon: Stethoscope,
      color: "text-[#6B1D2F]",
      bg: "bg-[#6B1D2F]/10",
      desc: "Consultative medical guidance is coordinated in collaboration with qualified physicians and specialist clinicians across Kolkata, available through scheduled appointment and clinical referral."
    },
    {
      title: "Mental-Health Professionals",
      subtitle: "Collaborative Practice Network",
      icon: UserCheck,
      color: "text-[#2D4F4F]",
      bg: "bg-[#2D4F4F]/10",
      desc: "Where formal clinical assessments or specialised interventions are indicated, we connect visitors with our network of accredited clinical psychologists and psychiatrists."
    }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="bg-[#172828] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,119,70,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="swc-container relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#D97746] font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[#D97746]" />
            Professional Expertise & Advisory
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Decades of Experienced Guidance in<br />
            <em className="font-accent-serif italic font-normal text-[#D97746]">Body and Mind Health</em>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Grounded in seasoned consultative experience in psychological counselling and healthcare guidance in Kolkata.
          </p>
        </div>
      </div>

      {/* Senior Advisory Experience Overview */}
      <section className="py-20 lg:py-24">
        <div className="swc-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <ScrollReveal variant="fade-right" className="lg:col-span-7">
              <span className="section-eyebrow">✦ Experienced Foundation</span>
              <h2 className="section-title mb-6">
                A Thoughtful Foundation of<br />
                <em>Senior Healthcare Wisdom</em>
              </h2>
              <div className="space-y-4 text-[#5A7070] text-base leading-relaxed mb-8">
                <p>
                  Sunny Welbeing Center was established with guidance from experienced healthcare and counselling practitioners: bringing together compassionate counselling in emotional and behavioural care alongside thoughtful guidance in healthcare orientation and patient support.
                </p>
                <p>
                  We believe that health decisions require deep wisdom, not rushed recommendations. Our multidisciplinary framework connects individuals with psychological counsellors, physical health advisers, and specialized clinical practitioners by scheduled appointment or referral.
                </p>
                <p>
                  In accordance with strict professional ethics and transparent communication, individual verified profiles, biographies, and academic registrations will be published following institutional confirmation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Enquire About Practitioner Availability</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={0.15} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[rgba(45,79,79,0.12)]">
                <Image
                  src="/images/centre-hall.jpg"
                  alt="Sunny Welbeing Center Kolkata reception and consultation suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 4 Professional Disciplines Framework */}
          <div className="mb-20">
            <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-eyebrow">✦ Disciplines of Support</span>
              <h3 className="section-title text-2xl sm:text-3xl">
                Our Multidisciplinary Care Structure
              </h3>
              <p className="text-[#5A7070] text-sm sm:text-base leading-relaxed mt-3">
                How our consultative team and clinical referral network accommodate physical and mental wellbeing needs.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practiceDisciplines.map((d, idx) => {
                const Icon = d.icon;
                return (
                  <StaggerItem key={idx}>
                    <div 
                      className="bg-white p-8 rounded-2xl border border-[rgba(45,79,79,0.08)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full hover:-translate-y-1"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl ${d.bg} ${d.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D97746] block">
                              {d.subtitle}
                            </span>
                            <h4 className="font-heading font-semibold text-xl text-[#1A3333]">
                              {d.title}
                            </h4>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-[#5A7070] leading-relaxed pl-0 sm:pl-16">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Availability Notice */}
          <ScrollReveal variant="fade-up" className="bg-white rounded-2xl border border-[rgba(45,79,79,0.1)] p-8 max-w-3xl mx-auto text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#2D4F4F]/10 text-[#2D4F4F] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-semibold text-lg text-[#1A3333] mb-2">
              Appointment &amp; Referral Transparency
            </h4>
            <p className="text-xs sm:text-sm text-[#5A7070] leading-relaxed mb-6">
              Specialist consultants and advisers coordinate sessions through prior appointment scheduling. When specialized diagnostic testing or clinical treatment is required, our team provides objective guidance to help you arrange formal consultations with suitable hospital or clinic specialists in Kolkata.
            </p>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-teal text-xs py-2.5 px-5"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#D4A373] flex-shrink-0" />
              <span>Contact Care Desk via WhatsApp</span>
            </a>
          </ScrollReveal>

        </div>
      </section>

      <DoctorVideoSection />

      <CtaBanner />
    </div>
  );
}
