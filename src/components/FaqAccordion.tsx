'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO, FAQS } from '@/data/business';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import ScrollReveal from '@/components/motion/ScrollReveal';

interface FaqAccordionProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function FaqAccordion({ limit = 8, showAllLink = true }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = limit ? FAQS.slice(0, limit) : FAQS;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-inner">
        
        {/* Left Column: Heading, description, and WhatsApp enquiry card */}
        <ScrollReveal variant="fade-up" className="faq-left-col">
          <div className="faq-left-content">
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-line" aria-hidden="true" />
              <span>PATIENT CONCERNS &amp; FAQS</span>
            </div>
            
            <h2 className="faq-heading" id="faq-heading">
              Common Patient<br />
              Questions &amp;<br />
              <em className="faq-heading-accent">Health Concerns</em>
            </h2>

            <p className="faq-intro-desc">
              Every day, individuals and families face uncertainty about physical symptoms, emotional strain, or navigating healthcare. Below are examples of how we listen, provide compassionate guidance, and help you prepare questions for qualified medical doctors.
            </p>

            <div className="faq-whatsapp-card">
              <h3 className="faq-whatsapp-card-title">
                Have a specific health question?
              </h3>
              <p className="faq-whatsapp-card-desc">
                Our team is readily available on WhatsApp to discuss your concerns and guide you on the most suitable appointment.
              </p>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-whatsapp-btn"
                aria-label="Enquire on WhatsApp about specific health questions"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0 text-[#D4A373]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Accordion list */}
        <ScrollReveal variant="fade-up" delay={0.1} className="faq-right-col">
          <div className="faq-accordion-card">
            <div className="faq-accordion-list">
              {displayFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                    <button
                      onClick={() => toggle(idx)}
                      className="faq-q-btn focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className="faq-q-text">
                        {faq.question}
                      </span>
                      <span 
                        className={`faq-toggle-icon ${isOpen ? 'active' : ''}`}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          id={`faq-answer-${idx}`}
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: 'auto', 
                            opacity: 1,
                            transition: {
                              height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                              opacity: { duration: 0.25, delay: 0.05 }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                              opacity: { duration: 0.15 }
                            }
                          }}
                          className="faq-a-wrap"
                        >
                          <div className="faq-a-inner">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {showAllLink && limit && limit < FAQS.length && (
              <div className="faq-view-all-wrap">
                <Link 
                  href="/faq" 
                  className="faq-view-all-link group"
                >
                  <span>View All Questions &amp; Answers</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
