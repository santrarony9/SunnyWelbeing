import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ARTICLES, BUSINESS_INFO } from '@/data/business';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Resources & Insights | Counselling & Wellbeing',
  description: 'Articles, reflective guides, and insights on emotional wellbeing, mindfulness, stress relief, and self-understanding from Sunny Welbeing Center Kolkata.',
};

export default function ResourcesPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="bg-[#172828] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,119,70,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="swc-container relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#D97746] font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[#D97746]" />
            Wellbeing Insights
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Reflective Resources for<br />
            <em className="font-accent-serif italic font-normal text-[#D97746]">Inner Calm and Growth</em>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Original articles and reflections to support emotional grounding, self-awareness, and resilience in Kolkata.
          </p>
        </div>
      </div>

      {/* Articles Grid Section */}
      <section className="py-20 lg:py-28">
        <div className="swc-container">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <span className="section-eyebrow justify-center">✦ Recent Articles</span>
            </div>
            <h2 className="section-title mb-5">
              Explore Our Latest<br />
              <em>Wellbeing Readings</em>
            </h2>
            <p className="text-[#5A7070] text-[16.5px] leading-[1.75] max-w-xl mx-auto">
              Curated perspectives on emotional balance, the power of dialogue, and managing life transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((art) => (
              <article 
                key={art.slug}
                className="bg-white rounded-2xl border border-[rgba(45,79,79,0.08)] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1A3333] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-[#5A7070] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D97746]" />
                      {art.date}
                    </span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D97746]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-[#1A3333] mb-3 group-hover:text-[#D97746] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-[#5A7070] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {art.excerpt}
                  </p>

                  <Link
                    href={`/resources/${art.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D97746] hover:text-[#C56636] transition-colors mt-auto group-hover:translate-x-1 duration-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
