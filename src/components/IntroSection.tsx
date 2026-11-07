import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function IntroSection() {
  const cards = [
    {
      badge: "TRANSFORMATION",
      subtitle: "CARE PHILOSOPHY",
      title: "Whole-Person Care",
      desc: "Compassionate support designed around your lived physical and emotional reality, helping you build sustained clarity and balance.",
      image: "/images/intro-whole-person.jpg",
      link: "/approach",
      btnText: "Discover Our Approach",
      features: [
        "Integrative body-mind perspective",
        "Patient, unhurried listening",
        "Practical wellbeing guidance",
        "Structured follow-up support"
      ]
    },
    {
      badge: "COMMUNITY",
      subtitle: "ACCESSIBLE GUIDANCE",
      title: "Family & Individual Support",
      desc: "A safe, non-judgemental space for children, adults, older adults, and family caregivers facing challenging health transitions.",
      image: "/images/intro-family-support.jpg",
      link: "/services",
      btnText: "Explore What We Do",
      features: [
        "Work stress & emotional navigation",
        "Sleep difficulties & screen use habits",
        "Senior balance & memory awareness",
        "Caregiver support & reassurance"
      ]
    },
    {
      badge: "EXPERTISE",
      subtitle: "ETHICAL NAVIGATION",
      title: "Professional Care Navigation",
      desc: "Clear, objective assistance understanding medical records, clarifying health questions, and finding verified medical specialists in Kolkata.",
      image: "/images/intro-navigation.jpg",
      link: BUSINESS_INFO.whatsappUrl,
      isWhatsApp: true,
      btnText: "Book an Appointment",
      features: [
        "Organising questions on test results",
        "Preparation for doctor consultations",
        "Clarifying differing medical opinions",
        "Coordinated healthcare navigation"
      ]
    }
  ];

  return (
    <section className="services" aria-labelledby="welcome-heading">
      <div className="services-inner">
        
        {/* 2-Column Header with requested About content */}
        <ScrollReveal variant="fade-up" className="services-header">
          <div>
            <span className="section-eyebrow">✦ Our Mission &amp; Approach</span>
            <h2 className="section-h2" id="welcome-heading">
              A Place to Find Clarity
            </h2>
          </div>

          <div>
            <div className="section-rule-h" />
            <div className="space-y-4 text-[17px] text-[#4A5D5D] leading-[1.75] font-normal">
              <p>
                Every day, people face questions about their body, mind and health. They may experience doubt, fear and uncertainty, especially when they or their loved ones are unwell. Busy medical specialists may not always have enough time to answer every question, leaving patients and families feeling helpless.
              </p>
              <p>
                Sunny Welbeing Center provides a calm, supportive space to discuss concerns about physical and mental wellbeing. Our approach focuses on listening carefully, offering compassionate guidance and helping people prepare informed questions for qualified healthcare professionals.
              </p>
              <div className="pt-2">
                <Link href="/about#our-mission" className="inline-flex items-center gap-2 text-sm font-bold text-[#D97746] hover:underline">
                  <span>Read Our Mission, Aims &amp; Objectives</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Distinct Cards Grid */}
        <StaggerContainer className="cards-grid" staggerDelay={0.1}>
          {cards.map((c, idx) => (
            <StaggerItem key={idx}>
              <div className="card group h-full">
                <div className="card-accent-bar" />
                
                <div className="card-img-wrap">
                  <Image
                    src={c.image}
                    alt={`${c.title} - Sunny Welbeing Center`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="card-img"
                  />
                  <div className="card-img-overlay" />
                  <span className="card-badge">{c.badge}</span>
                </div>

                <div className="card-body">
                  <span className="card-subtitle">{c.subtitle}</span>
                  <h3 className="card-title">{c.title}</h3>
                  <div className="card-rule" />
                  <p className="card-desc">{c.desc}</p>

                  <ul className="card-features">
                    {c.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="text-[#2D4F4F] font-bold text-sm leading-none mt-0.5 select-none">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {c.isWhatsApp ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn group-hover:bg-[#C56636]"
                    >
                      <span>{c.btnText}</span>
                      <ArrowRight className="w-4 h-4 arrow group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>
                  ) : (
                    <Link href={c.link} className="card-btn group-hover:bg-[#C56636]">
                      <span>{c.btnText}</span>
                      <ArrowRight className="w-4 h-4 arrow group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
