import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, BUSINESS_INFO } from '@/data/business';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services & Health Guidance | Sunny Welbeing Center Kolkata',
  description: 'Explore the 5 confirmed health support and counselling areas at Sunny Welbeing Center Kolkata: mental wellbeing & counselling, health guidance & test results, older adult care, ongoing health concerns, and understanding medical options.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="services-hero-banner">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,119,70,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="swc-container services-hero-container">
          <div className="services-hero-badge-wrap">
            <span className="services-hero-badge">
              <span className="services-hero-dot" />
              Counselling &amp; Health Guidance
            </span>
          </div>
          <h1 className="services-hero-h1">
            Services for Body and Mind
            <span className="services-hero-accent">Health Support</span>
          </h1>
          <p className="services-hero-desc">
            Scientific health support with a humane touch. We help individuals and families navigate physical-health questions, emotional difficulties, and appropriate professional care.
          </p>
        </div>
      </section>

      {/* Services Listing Section */}
      <section className="services-offerings-section">
        <div className="swc-container">
          
          <ScrollReveal variant="fade-up" className="services-offerings-header">
            <div className="services-offerings-label-wrap">
              <span className="services-offerings-label">✦ Confirmed Offerings</span>
            </div>
            <h2 className="services-offerings-title">
              Care Grounded in
              <span className="services-offerings-title-accent">Patient Listening &amp; Clarity</span>
            </h2>
            <p className="services-offerings-desc">
              Below are the five core areas of health guidance and counselling provided by Sunny Welbeing Center in central Kolkata.
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
