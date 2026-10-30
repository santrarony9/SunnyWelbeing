import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WHO_WE_SUPPORT } from '@/data/business';
import { ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function WhoWeSupportSection() {
  return (
    <section id="who-we-support" className="who-we-support relative" aria-labelledby="who-we-support-heading">
      <div className="swc-container">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="who-we-support-header text-center">
          <div className="flex justify-center mb-4">
            <span className="section-eyebrow justify-center">Support Across Every Stage</span>
          </div>
          <h2 className="who-we-support-title" id="who-we-support-heading">
            Who We Support at<br />
            <em>Sunny Welbeing Center</em>
          </h2>
          <p className="who-we-support-intro">
            From developmental concerns in young students to complex health questions and age-related changes, our centre offers dedicated, unhurried guidance for individuals and families in Kolkata.
          </p>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {WHO_WE_SUPPORT.map((card) => (
            <StaggerItem key={card.id}>
              <article 
                className="who-we-support-card group h-full"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70" />
                  <span className="who-we-support-badge absolute bottom-3 left-3">
                    {card.subtitle}
                  </span>
                </div>

                {/* Card Body */}
                <div className="who-we-support-card-body">
                  <h3 className="who-we-support-card-title">
                    {card.title}
                  </h3>

                  <p className="who-we-support-card-desc">
                    {card.desc}
                  </p>

                  {/* 2 Key focus bullet points */}
                  <ul className="who-we-support-bullets">
                    {card.keyConcerns.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="who-we-support-bullet-item">
                        <span className="who-we-support-bullet-dot" aria-hidden="true">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="who-we-support-card-footer">
                    <Link
                      href={card.link}
                      className="who-we-support-link group-hover:translate-x-1 duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
