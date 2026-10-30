import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/data/business';
import { ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="swc-container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="services-header-wrap">
          <div className="services-label-wrap">
            <span className="services-label">✦ Confirmed Support Categories</span>
          </div>
          <h2 className="services-title" id="services-heading">
            Health Guidance &amp;<br />
            <em className="services-title-accent">Counselling Services</em>
          </h2>
          <p className="services-desc">
            Scientific health support with a humane touch. We offer a compassionate, respectful, and scientifically informed space to help individuals and families organise their concerns and understand their next steps.
          </p>
        </ScrollReveal>

        {/* 5 Services Grid */}
        <StaggerContainer className="services-grid" staggerDelay={0.08}>
          {SERVICES.map((s) => (
            <StaggerItem key={s.slug}>
              <article 
                className="service-card group h-full"
              >
                <div className="service-card-image-wrap">
                  <Image
                    src={s.image}
                    alt={`${s.title} - Sunny Welbeing Center`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-40 transition-opacity" />
                  <span className="service-card-badge">
                    {s.category}
                  </span>
                </div>

                {/* Card Content with 16px padding */}
                <div className="service-card-content">
                  <h3 className="service-card-title">
                    {s.title}
                  </h3>
                  
                  <p className="service-card-desc">
                    {s.shortDesc}
                  </p>

                  {/* Key points preview without horizontal divider */}
                  <ul className="service-card-bullets">
                    {s.whatItInvolves.slice(0, 2).map((item, fIdx) => (
                      <li key={fIdx} className="service-card-bullet-item">
                        <span className="text-[#2D4F4F] font-bold text-sm leading-none mt-0.5 select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore link placed naturally 16px below final bullet */}
                  <div className="service-card-link-wrap">
                    <Link 
                      href={`/services/${s.slug}`}
                      className="service-card-link group-hover:translate-x-1 duration-200"
                    >
                      <span>Explore Service Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all services CTA */}
        <div className="services-cta-wrap">
          <Link 
            href="/services" 
            className="services-cta-btn group"
          >
            <span>View All Health Support Categories</span>
            <ArrowRight className="services-cta-icon" />
          </Link>
        </div>

      </div>
    </section>
  );
}
