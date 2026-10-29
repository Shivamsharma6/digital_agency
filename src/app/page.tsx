import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BusinessChallenges } from "@/components/BusinessChallenges";
import { Services } from "@/components/Services";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { WorkingTogether } from "@/components/WorkingTogether";
import { UseCaseStudy } from "@/components/UseCaseStudy";
import { FAQ } from "@/components/FAQ";
import { EnquirySection } from "@/components/EnquirySection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  // Truthful JSON-LD Schema (Organization / ProfessionalService) without fake reviews or ratings
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brand.name,
    description: siteConfig.hero.supportingCopy,
    url: "https://growthwave-digital.example.com",
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

      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Landmarks */}
        <main id="main-content" className="flex-grow">
          {/* Section B: Hero */}
          <Hero />

          {/* Section C: Trust and Business Challenges */}
          <BusinessChallenges />

          {/* Section D: Core Services */}
          <Services />

          {/* Section E: Industry Solutions */}
          <IndustrySolutions />

          {/* Section F: How It Works */}
          <Process />

          {/* Section G: Indicative Packages and Pricing */}
          <Pricing />

          {/* Section H: What Working Together Looks Like */}
          <WorkingTogether />

          {/* Section I: Example Transformation Use Case */}
          <UseCaseStudy />

          {/* Section J: Frequently Asked Questions */}
          <FAQ />

          {/* Section K & 6: Final CTA & Lead Generation Form */}
          <EnquirySection />
        </main>

        {/* Section L: Footer */}
        <Footer />

        {/* Floating Quick WhatsApp Action */}
        <WhatsAppFloatingButton />
      </div>
    </>
  );
}
