'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/data/business';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

interface Slide {
  id: number;
  eyebrow: string;
  headline: string;
  subtitle: string;
  desc: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  isPrimaryWhatsApp: boolean;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "SUNNY WELBEING CENTER",
    headline: "Sunny Welbeing Center",
    subtitle: "Scientific health support with a humane touch.",
    desc: "Body and mind are closely connected. Sunny Welbeing Center provides a compassionate, respectful and scientifically informed approach to physical and mental wellbeing. We listen to your concerns and help you understand possible next steps.",
    image: "/images/hero-1.jpg",
    primaryCtaText: "Book an Appointment",
    primaryCtaLink: BUSINESS_INFO.whatsappUrl,
    isPrimaryWhatsApp: true,
    secondaryCtaText: "Explore Our Services",
    secondaryCtaLink: "#services",
  },
  {
    id: 2,
    eyebrow: "CARE FOR THE BODY & MIND",
    headline: "Care for the Body.\nSupport for the Mind.",
    subtitle: "A calm, supportive space in central Kolkata.",
    desc: "Your health questions deserve dedicated time, understanding, and thoughtful guidance. We help you unpack concerns, understand medical reports, and find appropriate professional support.",
    image: "/images/hero-2.jpg",
    primaryCtaText: "Book an Appointment",
    primaryCtaLink: BUSINESS_INFO.whatsappUrl,
    isPrimaryWhatsApp: true,
    secondaryCtaText: "Discover Our Approach",
    secondaryCtaLink: "/about",
  },
  {
    id: 3,
    eyebrow: "HEALTH QUESTIONS & CARE NAVIGATION",
    headline: "A Place to Find Clarity,\nCare and Guidance",
    subtitle: "Empowering informed healthcare decisions.",
    desc: "Busy specialists may not always have enough time to answer every question. We provide an unhurried environment to help patients and families prepare focused questions for qualified medical doctors.",
    image: "/images/hero-3.jpg",
    primaryCtaText: "Book an Appointment",
    primaryCtaLink: BUSINESS_INFO.whatsappUrl,
    isPrimaryWhatsApp: true,
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "/services",
  },
  {
    id: 4,
    eyebrow: "SUPPORT FOR ALL AGES",
    headline: "Guidance for Your\nWellbeing Journey",
    subtitle: "74B Acharya Jagadish Bose Road, Kolkata.",
    desc: "From stress and sleep concerns in adults to age-related changes in elderly family members, enquire easily on WhatsApp to schedule an unhurried consultation.",
    image: "/images/hero-4.jpg",
    primaryCtaText: "Book an Appointment",
    primaryCtaLink: BUSINESS_INFO.whatsappUrl,
    isPrimaryWhatsApp: true,
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="slider select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Sunny Welbeing Center Highlights"
    >
      {/* Slides */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.id}
            className={`slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Background Image with Ken Burns zoom */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={`${slide.headline.replace('\n', ' ')} - Sunny Welbeing Center`}
                fill
                priority={idx === 0}
                className="slide-img"
                sizes="100vw"
              />
            </div>

            {/* Gradient Overlays matching Mind Inside */}
            <div className="slide-overlay-lr" />
            <div className="slide-overlay-bt" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D97746]/15 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />

            {/* Slide Content */}
            <div className="slide-content">
              <div className="swc-container w-full relative">
                <div key={`${slide.id}-${current}`} className="slide-inner">
                  
                  {/* Eyebrow Pill */}
                  <div className="slide-tag hero-anim-tag">
                    <span className="slide-tag-dot" />
                    <span className="slide-tag-text">{slide.eyebrow}</span>
                  </div>

                  {/* Headline: h1 on primary slide, h2 on subsequent slides for semantic hierarchy */}
                  {idx === 0 ? (
                    <h1 className="slide-h1 hero-anim-h1 whitespace-pre-line">
                      {slide.headline}
                    </h1>
                  ) : (
                    <h2 className="slide-h1 hero-anim-h1 whitespace-pre-line">
                      {slide.headline}
                    </h2>
                  )}

                  {/* Subtitle */}
                  {slide.subtitle && (
                    <p className="font-accent-serif hero-anim-sub italic text-lg sm:text-xl text-[#D4A373] mb-4 font-normal">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Accent rule */}
                  <div className="slide-rule hero-anim-rule" />

                  {/* Short Introduction */}
                  <p className="slide-sub hero-anim-desc">
                    {slide.desc}
                  </p>

                  {/* Pill CTA buttons */}
                  <div className="slide-btns hero-anim-btns">
                    {slide.isPrimaryWhatsApp ? (
                      <a
                        href={slide.primaryCtaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                        <span>{slide.primaryCtaText}</span>
                      </a>
                    ) : (
                      <Link href={slide.primaryCtaLink} className="btn-primary group">
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}

                    <Link href={slide.secondaryCtaLink} className="btn-ghost group">
                      <span>{slide.secondaryCtaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Outer Edge Prev/Next Arrows */}
      <button
        onClick={prevSlide}
        className="slider-arrow prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="slider-arrow next"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Bottom Progress & Dots Indicator */}
      <div className="slider-bottom">
        <span className="slider-count">
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
        <div className="slider-dots">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`slider-dot ${idx === current ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="scroll-hint">
        <span className="scroll-hint-label">SCROLL</span>
        <div className="scroll-hint-line" />
      </div>

    </section>
  );
}
