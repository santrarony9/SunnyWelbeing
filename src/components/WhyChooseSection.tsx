import React from 'react';
import { HeartPulse, Ear, Compass, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { BUSINESS_INFO } from '@/data/business';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function WhyChooseSection() {
  const cards = [
    {
      num: "01",
      icon: HeartPulse,
      title: "Body & Mind Health Support",
      desc: "Recognising that physical symptoms and emotional wellbeing continuously affect one another, offering a balanced, integrated perspective rather than isolated treatments."
    },
    {
      num: "02",
      icon: Ear,
      title: "Patient, Unhurried Listening",
      desc: "Taking the dedicated time to understand your complete health timeline, personal concerns, and unanswered questions without feeling hurried or dismissed."
    },
    {
      num: "03",
      icon: Compass,
      title: "Independent Care Navigation",
      desc: "Helping you clarify medical terms, organise questions, and identify the most suitable healthcare specialists and clinical doctors for formal medical care in Kolkata."
    },
    {
      num: "04",
      icon: WhatsAppIcon,
      title: "Accessible WhatsApp Care Desk",
      desc: "Enquiring and coordinating your appointment is simple, direct, and transparent through our dedicated WhatsApp enquiry channel."
    }
  ];

  return (
    <section id="why-choose" className="wc-section" aria-labelledby="why-choose-heading">
      <div className="wc-inner">
        
        {/* Header Grid matching Mind Inside */}
        <ScrollReveal variant="fade-up" className="wc-header">
          <div>
            <span className="wc-eyebrow">✦ Why Choose SWC</span>
            <h2 className="wc-title" id="why-choose-heading">
              Why Choose<br />
              <em>Sunny Welbeing Center</em>
            </h2>
          </div>

          <div>
            <div className="wc-divider" />
            <p className="wc-desc">
              When physical or emotional health concerns arise, knowing where to turn can be daunting. Sunny Welbeing Center provides an objective, welcoming environment in Kolkata where individuals and families can unpack their concerns and find clear direction.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 Unified Grid Container */}
        <StaggerContainer className="wc-grid" staggerDelay={0.08}>
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <StaggerItem key={c.num}>
                <div className="wc-card group h-full">
                  <span className="wc-card-num">{c.num}</span>
                  <div className="wc-icon">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="wc-card-line" />
                  <h3 className="wc-card-title">{c.title}</h3>
                  <p className="wc-card-text">{c.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA Banner matching Mind Inside .wc-bottom */}
        <div className="wc-bottom">
          <p className="wc-bottom-text">
            Ready to Discuss Your Health or Wellbeing Concerns? <span>We are here to listen.</span>
          </p>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wc-bottom-btn"
          >
            <span>CONNECT ON WHATSAPP</span>
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
}
