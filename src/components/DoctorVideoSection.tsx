'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { BUSINESS_INFO } from '@/data/business';
import { DOCTOR_VIDEOS, type DoctorVideo } from '@/data/doctorVideos';
import DoctorVideoCard from '@/components/DoctorVideoCard';
import DoctorVideoModal from '@/components/DoctorVideoModal';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function DoctorVideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<DoctorVideo | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlayVideo = (video: DoctorVideo) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section 
      id="meet-our-doctors" 
      className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-b border-[rgba(45,79,79,0.08)] w-full"
      aria-label="Meet Our Doctors - Expert Healthcare Insights"
    >
      {/* Decorative ambient background radial gradients */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(217,119,70,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(45,79,79,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Perfectly Centered 1280px Maximum Width Container */}
      <div className="doctor-gallery-container">
        
        {/* Section Header (Centered) */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          
          {/* Eyebrow Label with generous headroom */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[rgba(45,79,79,0.12)] shadow-sm text-[12px] uppercase tracking-[0.12em] text-[#2D4F4F] font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D97746]" />
            <span>EXPERT HEALTHCARE INSIGHTS</span>
          </div>

          {/* Main Heading & Orange Italic Subtitle */}
          <h2 className="font-heading text-[30px] sm:text-[34px] lg:text-[44px] font-bold text-[#1A3333] leading-[1.18] tracking-[-0.02em] mb-4">
            Meet Our Doctors & Specialists<br />
            <em className="font-accent-serif italic font-normal text-[#D97746] text-[24px] sm:text-[28px] lg:text-[36px] block mt-2">
              Knowledge. Compassion. Better Wellbeing.
            </em>
          </h2>

          {/* Supporting Description */}
          <p className="text-[#4A5D5D] text-[16px] lg:text-[17px] leading-[1.65] max-w-[760px] mx-auto font-normal text-pretty">
            Get to know the healthcare professionals and psychological counsellors sharing their knowledge and experience to help you make informed decisions about your physical health, emotional wellbeing, and healthcare journey.
          </p>
        </ScrollReveal>

        {/* Doctor Card Grid: 3 cards/row desktop, 2 cards/row tablet, 1 card/row mobile.
            Final row is automatically centered via flex wrap + justify-center */}
        <StaggerContainer className="doctor-gallery-grid mb-16 lg:mb-20">
          {DOCTOR_VIDEOS.map((video) => (
            <StaggerItem 
              key={video.id} 
              className="doctor-gallery-item"
            >
              <DoctorVideoCard video={video} onPlay={handlePlayVideo} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Clean WhatsApp Pathway CTA Banner (Centered in the same 1280px container) */}
        <ScrollReveal variant="fade-up" className="doctor-gallery-cta bg-white rounded-2xl border border-[rgba(45,79,79,0.1)] p-8 sm:p-10 lg:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Column: Heading & Description */}
          <div className="text-center lg:text-left flex-1 max-w-2xl">
            <h4 className="font-heading font-bold text-[20px] sm:text-[22px] lg:text-[24px] text-[#1A3333] leading-[1.3] mb-2.5">
              Have Questions About Your Healthcare Pathway?
            </h4>
            <p className="text-[#5A7070] text-[15px] sm:text-[16px] leading-[1.65]">
              Connect directly with our care navigators on WhatsApp to discuss your symptoms, organise questions, and find the right medical specialist in Kolkata.
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0 w-full lg:w-auto">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#162727] text-white hover:bg-[#D97746] text-[15px] font-semibold transition-all duration-200 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#D97746]" />
              <span>Ask on WhatsApp</span>
            </a>

            <Link
              href="/approach"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[rgba(45,79,79,0.2)] text-[#2D4F4F] hover:bg-[#2D4F4F] hover:text-white text-[15px] font-semibold transition-all duration-200"
            >
              <span>Our Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

      </div>

      {/* Video Modal Player */}
      <DoctorVideoModal
        video={selectedVideo}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSelectVideo={handlePlayVideo}
        allVideos={DOCTOR_VIDEOS}
      />
    </section>
  );
}
