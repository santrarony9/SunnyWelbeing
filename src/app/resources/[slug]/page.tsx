import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES, BUSINESS_INFO } from '@/data/business';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import CtaBanner from '@/components/CtaBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Sunny Welbeing Center Kolkata`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Article Header Banner */}
      <div className="bg-[#172828] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,119,70,0.12)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="swc-container relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              href="/resources"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#D97746] hover:text-white transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Resources</span>
            </Link>
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#D97746] mb-4">
            {article.category}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D97746]" />
              {article.date}
            </span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D97746]" />
              {article.readTime}
            </span>
            <span>&bull;</span>
            <span>Sunny Welbeing Center</span>
          </div>
        </div>
      </div>

      {/* Main Article Body */}
      <section className="py-16 lg:py-24">
        <div className="swc-container max-w-3xl mx-auto">
          
          {/* Cover image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-12 border border-[rgba(45,79,79,0.1)]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Text Content */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[rgba(45,79,79,0.08)] shadow-sm space-y-6 text-[#334155] text-base sm:text-lg leading-relaxed font-body">
            <p className="font-serif italic text-xl sm:text-2xl text-[#1A3333] border-l-4 border-[#D97746] pl-6 py-1 leading-snug">
              {article.excerpt}
            </p>

            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Author / Centre credit */}
            <div className="pt-8 mt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-heading font-semibold text-sm text-[#1A3333]">
                  Sunny Welbeing Center (SWC)
                </p>
                <p className="text-xs text-[#5A7070]">
                  74B Acharya Jagadish Bose Road, Kolkata
                </p>
              </div>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 px-4"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="font-heading text-2xl font-semibold text-[#1A3333] mb-6">
                Related Wellbeing Readings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/resources/${rel.slug}`}
                    className="bg-white p-6 rounded-xl border border-[rgba(45,79,79,0.08)] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#D97746] font-semibold block mb-2">
                        {rel.category}
                      </span>
                      <h4 className="font-heading text-base font-medium text-[#1A3333] group-hover:text-[#D97746] transition-colors mb-2">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#D97746] font-semibold mt-4">
                      <span>Read Insight</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
