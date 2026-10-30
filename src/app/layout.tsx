import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollObserver from '@/components/motion/ScrollObserver';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: {
    default: 'Sunny Welbeing Center | Health Support for Body and Mind | Kolkata',
    template: '%s | Sunny Welbeing Center (SWC) Kolkata'
  },
  description: 'Sunny Welbeing Center (SWC) in Kolkata provides body and mind health support, psychological counselling, and care navigation at 74B Acharya Jagadish Bose Road. Enquire on WhatsApp: +91 98746 13267.',
  keywords: [
    'Sunny Welbeing Center',
    'SWC Kolkata',
    'Body and mind health support Kolkata',
    'Psychological counselling Kolkata',
    'Health guidance Kolkata',
    'Counselling centre Acharya Jagadish Bose Road',
    'Child and adolescent wellbeing Kolkata',
    'Adult stress support Kolkata',
    'Older adult family guidance Kolkata',
    'Care navigation Kolkata'
  ],
  authors: [{ name: 'Sunny Welbeing Center' }],
  creator: 'Sunny Welbeing Center',
  metadataBase: new URL('https://sunnywelbeing.in'),
  openGraph: {
    title: 'Sunny Welbeing Center | Health Support for Body and Mind',
    description: 'Care for the Body. Support for the Mind. Guidance for Your Wellbeing in Kolkata, India.',
    siteName: 'Sunny Welbeing Center',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/swc-logo.png',
        width: 476,
        height: 420,
        alt: 'Sunny Welbeing Center Official Logo',
      }
    ],
  },
  icons: {
    icon: '/swc-logo-transparent.png',
    apple: '/swc-logo-transparent.png',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.shortName,
    description: `${BUSINESS_INFO.tagline} ${BUSINESS_INFO.primaryMessage}`,
    url: 'https://sunnywelbeing.in',
    telephone: BUSINESS_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5488',
      longitude: '88.3639'
    },
    image: 'https://sunnywelbeing.in/swc-logo.png',
    priceRange: '$$',
    sameAs: [
      BUSINESS_INFO.whatsappUrl
    ]
  };

  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] antialiased">
        <ScrollObserver />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
