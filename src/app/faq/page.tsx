'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQS, BUSINESS_INFO } from '@/data/business';
import { Plus, Minus, Phone, Search, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter((faq) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query)
    );
  });

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="faq-hero-banner">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,119,70,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="swc-container faq-hero-container">
          <div className="faq-hero-badge-wrap">
            <span className="faq-hero-badge">
              <span className="faq-hero-dot" />
              Help &amp; Guidance
            </span>
          </div>
          <h1 className="faq-hero-h1">
            Frequently Asked
            <span className="faq-hero-accent">Questions</span>
          </h1>
          <p className="faq-hero-desc">
            Clear, honest answers regarding counselling, appointments, confidentiality, and our location at 74B Acharya Jagadish Bose Road, Kolkata.
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="faq-page-section">
        <div className="swc-container faq-page-container">
          
          {/* Search Bar */}
          <ScrollReveal variant="fade-up" className="faq-search-section">
            <div className="faq-search-wrapper">
              <Search className="faq-search-icon" />
              <input
                type="text"
                placeholder="Search questions (e.g., appointment, Kolkata, counselling)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
                aria-label="Search frequently asked questions"
              />
            </div>
          </ScrollReveal>

          {/* FAQ Accordion List */}
          <ScrollReveal variant="fade-up" delay={0.08} className="faq-card-container">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-[#5A7070]/40 mx-auto mb-3" />
                <p className="text-base text-[#1A3333] font-medium">No matching questions found.</p>
                <p className="text-xs text-[#5A7070] mt-1 mb-6">
                  Feel free to message us on WhatsApp and we will gladly answer your questions.
                </p>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="faq-item-row">
                    <button
                      onClick={() => toggle(idx)}
                      className="faq-item-trigger group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="faq-item-text-wrap">
                        <span className="faq-item-category">
                          {faq.category}
                        </span>
                        <span className="faq-item-question">
                          {faq.question}
                        </span>
                      </div>
                      <span className={`faq-item-toggle-icon ${
                        isOpen ? 'open' : 'closed'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-item-answer animate-in fade-in duration-200">
                        <p className="faq-item-answer-text">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </ScrollReveal>

          {/* Direct WhatsApp Callout beneath FAQ */}
          <ScrollReveal variant="fade-up" className="faq-callout-card">
            <h3 className="faq-callout-title">
              Still Have Questions Regarding Counselling?
            </h3>
            <p className="faq-callout-desc">
              We understand that taking the first step can feel unfamiliar. Reach out to our WhatsApp care desk directly for quick, confidential guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-callout-btn-wa group"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <span>Message Us on WhatsApp (+91 98746 13267)</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="faq-callout-btn-phone group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-[#2D4F4F] transition-transform duration-300 group-hover:scale-105" strokeWidth={2} />
                <span>Call Us Directly</span>
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
