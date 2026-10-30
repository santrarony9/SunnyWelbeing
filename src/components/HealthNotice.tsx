import React from 'react';
import { AlertCircle, PhoneCall, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function HealthNotice() {
  return (
    <div className="bg-[#1A2E2E] text-white/90 text-xs py-3.5 px-4 border-y border-white/10">
      <div className="swc-container flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex items-center gap-2.5 justify-center md:justify-start">
          <ShieldAlert className="w-4 h-4 text-[#D97746] flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-white">Health & Medical Notice:</strong> Health guidance and counselling support informed decisions but do not replace medical diagnosis, treatment, or emergency care.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/75 text-[11px]">
          <span>
            Medical Emergency: <a href="tel:112" className="text-[#D97746] font-semibold hover:underline">112 / 102</a>
          </span>
          <span>&bull;</span>
          <span>
            Emotional Crisis (Tele-MANAS): <a href="tel:14416" className="text-[#D4A373] font-semibold hover:underline">14416 (24/7 Toll-Free)</a>
          </span>
        </div>
      </div>
    </div>
  );
}
