'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, ExternalLink, ShieldCheck, Film } from 'lucide-react';
import type { DoctorVideo } from '@/data/doctorVideos';

interface DoctorVideoModalProps {
  video: DoctorVideo | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectVideo?: (video: DoctorVideo) => void;
  allVideos?: DoctorVideo[];
}

export default function DoctorVideoModal({
  video,
  isOpen,
  onClose,
  onSelectVideo,
  allVideos = []
}: DoctorVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Stop video playback whenever modal is closed or video changes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  // Handle keyboard ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !video) return null;

  // Find related videos for this practitioner (e.g. Session 1 and Session 2)
  const relatedVideos = allVideos.filter((v) => v.doctorName === video.doctorName);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-[#162727] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 flex flex-col my-auto max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#121F1F] border-b border-white/10">
            <div className="flex items-center gap-2.5 min-w-0 pr-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D97746] flex-shrink-0 animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#D97746] truncate">
                {video.badgeText ? `${video.badgeText} Video` : "Healthcare Insight Video"}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D97746]"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 16:9 Video Player Viewport */}
          <div className="relative w-full bg-black aspect-video flex items-center justify-center overflow-hidden">
            {video.videoSrc ? (
              <video
                ref={videoRef}
                src={video.videoSrc}
                poster={video.thumbnail}
                controls
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video playback.
              </video>
            ) : video.gdriveId ? (
              <iframe
                src={`https://drive.google.com/file/d/${video.gdriveId}/preview`}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                title={video.videoTitle}
              />
            ) : (
              <div className="p-6 text-center text-white/70">Video playback unavailable.</div>
            )}
          </div>

          {/* Video Metadata & Doctor Credentials Footer */}
          <div className="p-5 sm:p-6 bg-[#162727] overflow-y-auto">
            {/* If practitioner has multiple sessions, render session switcher tabs */}
            {relatedVideos.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="text-[12px] text-white/60 font-semibold tracking-wide flex items-center gap-1.5 mr-1">
                  <Film className="w-3.5 h-3.5 text-[#D97746]" />
                  <span>Available Sessions:</span>
                </span>
                {relatedVideos.map((rel, idx) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectVideo?.(rel)}
                    className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-200 cursor-pointer ${
                      rel.id === video.id
                        ? 'bg-[#D97746] text-white shadow-sm'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    Part {idx + 1} ({rel.duration})
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-[#D97746] text-[11px] font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D97746]" />
                  <span>{video.specialty}</span>
                </div>

                <h3
                  id="video-modal-title"
                  className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug mb-1"
                >
                  {video.doctorName}
                </h3>

                <p className="text-[#D4A373] text-[13.5px] font-medium leading-relaxed mb-1">
                  {video.designation}
                </p>

                <p className="text-white/70 text-[13.5px] font-normal leading-relaxed mb-3">
                  {video.hospital}
                </p>

                <p className="text-white/80 text-[14px] leading-relaxed font-normal">
                  {video.description}
                </p>
              </div>

              {/* Action buttons & duration */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white text-[12.5px] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#D97746]" />
                  <span>Duration: {video.duration}</span>
                </div>

                <a
                  href={video.gdriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/70 hover:text-[#D97746] transition-colors underline-offset-4 hover:underline"
                  title="View original file on Google Drive"
                >
                  <span>Google Drive File</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
