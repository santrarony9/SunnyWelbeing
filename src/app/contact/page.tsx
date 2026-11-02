'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/data/business';
import { 
  MapPin, 
  Phone, 
  Navigation, 
  CheckCircle2, 
  AlertCircle,
  Mail
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { FacebookIcon } from '@/components/FacebookIcon';
import { YouTubeIcon } from '@/components/YouTubeIcon';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredMethod: 'WhatsApp',
    enquiryType: 'Mental Wellbeing and Counselling',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    setError('');
    setSubmitted(true);

    const formattedMsg = encodeURIComponent(
      `Hello Sunny Welbeing Center, I would like to enquire about your counselling and health guidance services. Please let me know how I can arrange an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService of interest: ${formData.enquiryType}\nNote: ${formData.message || 'I would like to enquire about consultation availability.'}`
    );
    const whatsappLink = `https://wa.me/919874613267?text=${formattedMsg}`;
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
    }, 1200);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="contact-hero-banner">
        <div className="contact-hero-bg-overlay" />
        <ScrollReveal variant="fade-up" className="contact-hero-container">
          <div className="contact-hero-badge">
            <span className="contact-hero-badge-dot" />
            Connect With Us
          </div>
          <h1 className="contact-hero-title">
            Contact Sunny <br />
            <em>Welbeing Center</em>
          </h1>
          <p className="contact-hero-desc">
            We are here to help you begin your path to body and mind wellbeing. Reach out directly on WhatsApp or visit our centre in central Kolkata.
          </p>
        </ScrollReveal>
      </div>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Left Column: Verified Contact Information */}
            <div className="contact-info-col">
              <ScrollReveal variant="fade-up">
                <div className="contact-info-header">
                  <span className="contact-info-eyebrow">✦ Official Details</span>
                  <h2 className="contact-info-title">
                    A Welcoming Health Sanctuary<br />
                    <em>in Kolkata</em>
                  </h2>
                  <p className="contact-info-desc">
                    Located along Acharya Jagadish Bose Road, our centre provides an accessible, quiet setting for supportive counselling and healthcare guidance conversations.
                  </p>
                </div>
              </ScrollReveal>

              {/* Contact Cards Stack */}
              <StaggerContainer staggerDelay={0.09} className="contact-cards-stack">
                
                {/* 1. WhatsApp Priority Card */}
                <StaggerItem>
                  <div className="contact-info-card">
                    <div className="contact-card-icon">
                      <WhatsAppIcon className="w-5 h-5 text-[#D4A373]" />
                    </div>
                    <div className="contact-card-body">
                      <span className="contact-card-channel">
                        Primary Appointment Channel
                      </span>
                      <h3 className="contact-card-title">
                        WhatsApp Appointments
                      </h3>
                      <p className="contact-card-text">
                        Message our care desk to enquire about counselling and health guidance options and schedule an appointment.
                      </p>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-theme-btn group"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#D4A373] flex-shrink-0" />
                        <span>Message +91 98746 13267</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                {/* 2. Official Centre Address Card */}
                <StaggerItem>
                  <div className="contact-info-card">
                    <div className="contact-card-icon">
                      <MapPin className="w-5 h-5 text-[#D4A373]" />
                    </div>
                    <div className="contact-card-body">
                      <span className="contact-card-channel">
                        Official Centre Address
                      </span>
                      <h3 className="contact-card-title">
                        Sunny Welbeing Center (SWC)
                      </h3>
                      <p className="contact-card-text">
                        74B Acharya Jagadish Bose Road<br />
                        Kolkata, West Bengal 700016<br />
                        India
                      </p>
                      <a
                        href={BUSINESS_INFO.address.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-theme-btn group"
                      >
                        <Navigation className="w-4 h-4 text-[#D4A373] flex-shrink-0" />
                        <span>Open Directions on Google Maps</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                {/* 3. Official Phone Line Card */}
                <StaggerItem>
                  <div className="contact-info-card">
                    <div className="contact-card-icon">
                      <Phone className="w-5 h-5 text-[#D4A373]" />
                    </div>
                    <div className="contact-card-body">
                      <span className="contact-card-channel">
                        Official Phone Line
                      </span>
                      <h3 className="contact-card-title">
                        Telephone Direct
                      </h3>
                      <p className="contact-card-text">
                        Available for direct calls and telephone enquiries.
                      </p>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="contact-theme-btn group"
                      >
                        <Phone className="w-4 h-4 text-[#D4A373] flex-shrink-0" />
                        <span>Call {BUSINESS_INFO.phone}</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                {/* 4. Official Facebook Card */}
                <StaggerItem>
                  <div className="contact-info-card">
                    <div className="contact-card-icon">
                      <FacebookIcon variant="monochrome" className="w-5 h-5 text-[#D4A373]" />
                    </div>
                    <div className="contact-card-body">
                      <span className="contact-card-channel">
                        Official Facebook Page
                      </span>
                      <h3 className="contact-card-title">
                        Facebook Community &amp; Updates
                      </h3>
                      <p className="contact-card-text">
                        Connect with Sunny Welbeing Center on Facebook for wellness guidance, centre announcements, and health updates.
                      </p>
                      <a
                        href={BUSINESS_INFO.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-theme-btn group"
                      >
                        <FacebookIcon variant="monochrome" className="w-4 h-4 text-[#D4A373] flex-shrink-0" />
                        <span>Visit Our Facebook Page</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                {/* 5. Official Email Card */}
                <StaggerItem>
                  <div className="contact-info-card">
                    <div className="contact-card-icon">
                      <Mail className="w-5 h-5 text-[#D4A373]" />
                    </div>
                    <div className="contact-card-body">
                      <span className="contact-card-channel">
                        Official Email Channel
                      </span>
                      <h3 className="contact-card-title">
                        Official Email Address
                      </h3>
                      <p className="contact-card-text">
                        Send us a written enquiry at our official email address. We aim to respond within one working day.
                      </p>
                      <a
                        href={BUSINESS_INFO.emailUrl}
                        className="contact-theme-btn group"
                      >
                        <Mail className="w-4 h-4 text-[#D4A373] flex-shrink-0" />
                        <span className="break-all">{BUSINESS_INFO.email}</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                {/* 6. Official YouTube Channel Card */}
                <StaggerItem>
                  <div className="contact-info-card">
                    <div className="contact-card-icon">
                      <YouTubeIcon className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div className="contact-card-body">
                      <span className="contact-card-channel">
                        Official YouTube Channel
                      </span>
                      <h3 className="contact-card-title">
                        Watch Our Health Videos
                      </h3>
                      <p className="contact-card-text">
                        Explore expert wellness talks, doctor insights, and guidance videos from Sunny Welbeing Center on our official YouTube channel.
                      </p>
                      <a
                        href="https://www.youtube.com/@SunnyWellbeingCentre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-theme-btn group"
                      >
                        <YouTubeIcon className="w-4 h-4 flex-shrink-0" />
                        <span>Visit Our YouTube Channel</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                {/* Consultation Suite Visual Card */}
                <StaggerItem>
                  <div className="rounded-[20px] overflow-hidden border border-[rgba(45,79,79,0.14)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] bg-white">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src="/images/contact-interior.jpg"
                        alt="Sunny Welbeing Center Kolkata consultation suite interior"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                      <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-[#1A3333] text-[12px] font-heading font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        74B Acharya Jagadish Bose Road
                      </span>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-[13.5px] text-[#5A7070] leading-[1.6]">
                        A quiet, confidential health sanctuary in central Kolkata designed for peaceful, respectful and unhurried guidance.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

              </StaggerContainer>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div>
              <ScrollReveal variant="fade-up" delay={0.1}>
                <div className="contact-form-card">
                <div className="contact-form-header">
                  <span className="contact-form-eyebrow">✦ Consultation Enquiry</span>
                  <h3 className="contact-form-title">
                    Send an Appointment Enquiry
                  </h3>
                  <p className="contact-form-desc">
                    Fill in your details below. For the fastest response, submitting this form opens your consultation enquiry directly with Sunny Welbeing Center on WhatsApp.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-[#FAF8F5] border border-[#D97746]/40 p-8 rounded-xl text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#D97746] mx-auto mb-3" />
                    <h4 className="font-heading font-semibold text-xl text-[#1A3333] mb-2">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-sm text-[#5A7070] leading-relaxed mb-6 max-w-md mx-auto">
                      Your enquiry message has been prepared. If WhatsApp did not open automatically, please click below to send it directly.
                    </p>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                      <span>Open WhatsApp Enquiry</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    {error && (
                      <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="contact-form-row">
                      <div className="contact-form-field">
                        <label className="contact-form-label">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sen"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="contact-form-input"
                        />
                      </div>

                      <div className="contact-form-field">
                        <label className="contact-form-label">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98300 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="contact-form-input"
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-form-field">
                        <label className="contact-form-label">
                          Service of Interest
                        </label>
                        <select
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                          className="contact-form-select"
                        >
                          <option value="Mental Wellbeing and Counselling">Mental Wellbeing and Counselling</option>
                          <option value="Health Guidance and Understanding Test Results">Health Guidance and Understanding Test Results</option>
                          <option value="Support for Older Adults and Families">Support for Older Adults and Families</option>
                          <option value="Ongoing Health Concerns">Ongoing Health Concerns</option>
                          <option value="Understanding Medical Options">Understanding Medical Options</option>
                          <option value="General Health & Wellbeing Enquiry">General Health & Wellbeing Enquiry</option>
                        </select>
                      </div>

                      <div className="contact-form-field">
                        <label className="contact-form-label">
                          Preferred Contact Channel
                        </label>
                        <select
                          value={formData.preferredMethod}
                          onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                          className="contact-form-select"
                        >
                          <option value="WhatsApp">WhatsApp (Recommended)</option>
                          <option value="Phone Call">Phone Call</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-form-field">
                      <label className="contact-form-label">
                        How Can We Support You? (Optional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Briefly share your concerns or convenient times for a consultation..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="contact-form-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      className="contact-form-submit"
                    >
                      <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                      <span>Send Enquiry &amp; Connect via WhatsApp</span>
                    </button>

                    <p className="contact-form-privacy">
                      Strict privacy ensured. We do not share your contact details or health concerns with third parties.
                    </p>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

          </div>
        </div>
      </section>

      {/* Verified Google Maps Section */}
      <section className="contact-map-section">
        <div className="contact-container">
          <ScrollReveal variant="fade-up">
            <div className="contact-map-card">
              <div className="contact-map-header">
                <div className="contact-map-info">
                  <span className="contact-map-eyebrow">
                    Location Map
                  </span>
                  <h3 className="contact-map-title">
                    Find Sunny Welbeing Center in Kolkata
                  </h3>
                  <p className="contact-map-address">
                    74B Acharya Jagadish Bose Road, Kolkata 700016, West Bengal, India
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-btn"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving / Transit Directions</span>
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="contact-map-iframe-wrap">
                <iframe
                  title="Sunny Welbeing Center Kolkata Location"
                  src="https://maps.google.com/maps?q=74B+Acharya+Jagadish+Bose+Road+Kolkata+West+Bengal+700016&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
