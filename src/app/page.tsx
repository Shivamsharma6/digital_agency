import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { EnquirySection } from "@/components/EnquirySection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brand.name,
    description: siteConfig.hero.subheadline,
    url: "https://infibusiness.com",
    telephone: siteConfig.contact.salesPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "316 Lotus Aura 2, Sama Savli Road",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390024",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:30-18:30",
    serviceArea: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections matching infibusiness.com */}
        <main id="main-content" className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* 10 Automation Services */}
          <Services />

          {/* How It Works & Live CRM Automation Pipeline */}
          <Process />

          {/* Built for Your Industry (6 Industries) */}
          <IndustrySolutions />

          {/* Transparent Pricing, Free Plan & 17-Feature Breakdown */}
          <Pricing />

          {/* Verified Client Results & Testimonials */}
          <Testimonials />

          {/* Frequently Asked Questions */}
          <FAQ />

          {/* Final CTA & Demo / Free Plan Booking Form */}
          <EnquirySection />
        </main>

        {/* InfiBusiness Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloatingButton />
      </div>
    </>
  );
}
