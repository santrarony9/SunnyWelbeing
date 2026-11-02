import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import IntroSection from '@/components/IntroSection';
import DoctorVideoSection from '@/components/DoctorVideoSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import WhoWeSupportSection from '@/components/WhoWeSupportSection';
import ServicesSection from '@/components/ServicesSection';
import ApproachValuesSection from '@/components/ApproachValuesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import LaunchPopup from '@/components/LaunchPopup';

export default function HomePage() {
  return (
    <>
      <LaunchPopup />
      <HeroSlider />
      <IntroSection />
      <DoctorVideoSection />
      <WhyChooseSection />
      <WhoWeSupportSection />
      <ServicesSection />
      <ApproachValuesSection />
      <TestimonialsSection />
      <FaqAccordion limit={8} />
      <CtaBanner />
    </>
  );
}
