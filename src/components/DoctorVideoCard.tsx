'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import type { DoctorVideo } from '@/data/doctorVideos';

interface DoctorVideoCardProps {
  video: DoctorVideo;
  onPlay: (video: DoctorVideo) => void;
}

export default function DoctorVideoCard({ video, onPlay }: DoctorVideoCardProps) {
  return (
    <div
      onClick={() => onPlay(video)}
      className="group bg-white rounded-2xl border border-[rgba(45,79,79,0.12)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-[#D97746] box-border"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlay(video);
        }
      }}
      aria-label={`Watch video discussion with ${video.doctorName}`}
    >
      {/* 1. Video Thumbnail (16:9 Aspect Ratio with Centered Play Button) */}
      <div className="relative aspect-video w-full bg-[#162727] overflow-hidden rounded-t-2xl">
        <Image
          src={video.thumbnail}
          alt={`Video thumbnail of ${video.doctorName}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Ambient Dark Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

        {/* Category Pill Tag (Top Left) */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/95 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97746]" />
          <span>Doctor Insight</span>
        </div>

        {/* Video Duration Badge (Bottom Right) */}
        <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-white text-[12px] font-semibold tracking-wide flex items-center gap-1.5 z-10">
          <Clock className="w-3.5 h-3.5 text-[#D97746]" />
          <span>{video.duration}</span>
        </div>

        {/* Centered Circular Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/95 text-[#D97746] shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#D97746] group-hover:text-white transition-all duration-300">
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Card Body - Sequence: Specialty -> Name -> Designation -> Hospital -> Description -> Footer */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 bg-white">
        
        {/* 2. Specialty Label (12px, Orange, Uppercase) */}
        <div className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#D97746] mb-2.5">
          <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-[#D97746]" />
          <span>{video.specialty}</span>
        </div>

        {/* 3. Doctor Name (21px, Dark Teal, Font Heading Bold) */}
        <h3 className="font-heading font-bold text-[20px] lg:text-[21px] text-[#1A3333] leading-[1.3] group-hover:text-[#D97746] transition-colors duration-200 mb-1.5">
          {video.doctorName}
        </h3>

        {/* 4. Professional Designation (15px, Muted Teal, Font Medium) */}
        <p className="text-[15px] text-[#5A7070] font-medium leading-[1.45] mb-1">
          {video.designation}
        </p>

        {/* 5. Hospital or Institution (15px, Deep Muted Teal, Balanced Height) */}
        <p className="text-[15px] text-[#2D4F4F] font-normal leading-[1.45] min-h-[44px] flex items-center mb-4">
          {video.hospital}
        </p>

        {/* 6. Short Video Description (15px, Complete Sentence, Line Height 1.55, Balanced Height) */}
        <p className="text-[15px] text-[#4A5D5D] leading-[1.55] font-normal min-h-[72px] mb-6">
          {video.description}
        </p>

        {/* 7. Watch Full Discussion Link (15px, Anchored at Bottom) */}
        <div className="mt-auto pt-4 border-t border-[rgba(45,79,79,0.1)] flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2D4F4F] group-hover:text-[#D97746] transition-colors">
            <span>Watch Full Discussion</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          <span className="text-[12.5px] font-semibold text-[#5A7070] px-2.5 py-1 rounded bg-[rgba(45,79,79,0.06)] group-hover:bg-[#D97746]/10 group-hover:text-[#D97746] transition-colors whitespace-nowrap">
            {video.duration}
          </span>
        </div>
      </div>
    </div>
  );
}
