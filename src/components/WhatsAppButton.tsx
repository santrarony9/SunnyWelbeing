import React from 'react';
import { BUSINESS_INFO } from '@/data/business';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating group"
      aria-label="Enquire and Book an Appointment on WhatsApp"
      title="Chat with Sunny Welbeing Center on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-[#D4A373] transition-transform duration-300 group-hover:scale-110" />
      <span className="sr-only">Book an Appointment via WhatsApp</span>
      
      {/* Floating tooltip on desktop hover */}
      <span className="hidden md:group-hover:inline-block absolute right-16 top-1/2 -translate-y-1/2 bg-[#1A2E2E] text-white text-xs font-medium px-3.5 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-white/10 pointer-events-none">
        Book an Appointment via WhatsApp
      </span>
    </a>
  );
}
