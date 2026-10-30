import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      quote: "When our teenager was struggling with severe academic anxiety and school dread, having an unhurried, patient counsellor who listened without judgement helped our entire family regain perspective and calm.",
      author: "Parent of Secondary Student",
      location: "Central Kolkata",
      focus: "Adolescent Emotional Wellbeing"
    },
    {
      stars: 5,
      quote: "I was overwhelmed by persistent work fatigue, sleep issues, and physical tension. SWC helped me connect the physical sensations with chronic stress, giving me clear, practical guidance on when to seek physician care and how to rebuild daily balance.",
      author: "Corporate Professional",
      location: "Salt Lake, Kolkata",
      focus: "Adult Stress & Mood Support"
    },
    {
      stars: 5,
      quote: "Navigating my elderly father's memory changes and frequent balance concerns was frightening. The team at Sunny Welbeing Center listened with genuine patience and helped us prepare the right questions before our neurologist consultation.",
      author: "Family Caregiver",
      location: "South Kolkata",
      focus: "Senior Health & Family Guidance"
    }
  ];

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="swc-container">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="testimonials-header-wrap">
          <div className="testimonials-label-wrap">
            <span className="testimonials-label">✦ Client Reflections</span>
          </div>
          <h2 className="testimonials-heading" id="testimonials-heading">
            <span className="testimonials-heading-main">Client Experiences &amp; Reflections</span>
            <span className="testimonials-heading-accent">from Individuals and Families</span>
          </h2>
          <p className="testimonials-desc">
            Client confidentiality and emotional safety are our highest priorities. These reflections describe the reassurance and clarity our visitors experience through patient, respectful and unhurried guidance.
          </p>
        </ScrollReveal>

        {/* 3 Testimonial Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {testimonials.map((t, idx) => (
            <StaggerItem
              key={idx}
              className={`h-full ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full' : ''
              }`}
            >
              <div 
                className="testimonial-card group h-full"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="testimonial-stars">
                    {[...Array(t.stars)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-200" />
                    ))}
                  </div>

                  {/* Quote in clean, normal upright sans-serif text */}
                  <p className="testimonial-text">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Reviewer details cleanly aligned at bottom */}
                <div className="testimonial-footer">
                  <p className="testimonial-author">
                    {t.author}
                  </p>
                  <div className="testimonial-meta">
                    <span>{t.location}</span>
                    <span className="testimonial-focus">{t.focus}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Confidentiality Commitment / Privacy Notice */}
        <div className="testimonial-privacy">
          <ShieldCheck className="w-4 h-4 text-[#D97746] flex-shrink-0" />
          <span>In accordance with our professional code of conduct, personal reflections are published only with consent and anonymised to respect client privacy.</span>
        </div>

      </div>
    </section>
  );
}
