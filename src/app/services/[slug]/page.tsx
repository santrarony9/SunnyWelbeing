import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, BUSINESS_INFO } from '@/data/business';
import { 
  ArrowLeft, 
  ArrowRight, 
  Phone
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Sunny Welbeing Center Kolkata`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Service Hero Banner matching Mind Inside service layout */}
      <div className="support-hero-banner">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,119,70,0.12)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="swc-container relative z-10">
          <div className="mb-6">
            <Link 
              href="/services"
              className="support-page-back-link"
            >
              <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Back to All Services</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="support-page-badge">
                {service.category}
              </span>
              <h1 className="support-page-title">
                {service.title}
              </h1>
              <p className="support-page-hero-desc">
                {service.heroHeadline}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="support-hero-btn-wa group"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <span>Enquire via WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="support-hero-btn-phone group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-[#D97746] transition-transform duration-300 group-hover:scale-105" strokeWidth={2} />
                <span>Call +91 98746 13267</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Service Content Layout */}
      <section className="support-content-section">
        <div className="swc-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left 8 Columns: Service Narrative & Details */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Introduction & Lead Image */}
              <div className="support-overview-card">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8 border border-[rgba(45,79,79,0.1)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <h2 className="support-section-title">
                  Overview of {service.title}
                </h2>
                <p className="support-body-text">
                  {service.introduction}
                </p>
              </div>

              {/* What This Service Involves */}
              <div className="support-feature-box">
                <h3 className="support-card-title mb-6">
                  What This Service Involves
                </h3>

                <div className="space-y-3.5">
                  {service.whatItInvolves.map((item, idx) => (
                    <div key={idx} className="support-list-item">
                      <span className="support-bullet-dot" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who It Is Suitable For */}
              <div className="support-feature-box">
                <h3 className="support-card-title mb-6">
                  Who This May Be Suitable For
                </h3>

                <div className="space-y-3.5">
                  {service.whoItIsFor.map((item, idx) => (
                    <div key={idx} className="support-list-item">
                      <span className="support-bullet-dot" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Can Expect */}
              <div className="support-feature-box">
                <h3 className="support-card-title mb-6">
                  What to Expect at Sunny Welbeing Center
                </h3>

                <div className="space-y-3.5">
                  {service.whatToExpect.map((item, idx) => (
                    <div key={idx} className="support-list-item">
                      <span className="support-bullet-dot" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="support-faq-section">
                  <h3 className="support-card-title mb-6">
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="support-faq-item">
                        <h4 className="support-faq-q">
                          {faq.question}
                        </h4>
                        <p className="support-faq-a">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Columns: Sticky Booking Sidebar & Related Services */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                
                {/* Booking Action Box */}
                <div className="support-sidebar-card">
                  <div className="mb-4">
                    <h4 className="support-sidebar-heading">
                      Arrange a Consultation
                    </h4>
                    <p className="support-sidebar-sublabel">Direct WhatsApp Booking</p>
                  </div>

                  <p className="support-sidebar-desc">
                    Our team will share available consultation dates and assist you with convenient scheduling.
                  </p>

                  <div className="flex flex-col gap-2.5">
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="support-sidebar-btn-wa group"
                    >
                      <WhatsAppIcon className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                      <span>WhatsApp Enquiry</span>
                    </a>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="support-sidebar-btn-phone group"
                    >
                      <Phone className="w-4 h-4 flex-shrink-0 text-[#2D4F4F] transition-transform duration-300 group-hover:scale-105" strokeWidth={2} />
                      <span>Call +91 98746 13267</span>
                    </a>
                  </div>

                  <div className="support-sidebar-footer-note">
                    Confidential &bull; Kolkata In-Person or Online
                  </div>
                </div>

                {/* Related Services */}
                <div className="support-sidebar-card">
                  <h4 className="support-related-heading">
                    Other Counselling Services
                  </h4>

                  <div className="space-y-3.5">
                    {relatedServices.map((rel) => (
                      <Link 
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="support-related-link group"
                      >
                        <p className="support-related-cat">
                          {rel.category}
                        </p>
                        <h5 className="support-related-title">
                          <span>{rel.title}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-[#D97746]" />
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
