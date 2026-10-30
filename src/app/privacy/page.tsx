import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  description: "Privacy policy and data protection terms.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a9dc8] hover:text-[#2286ab] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Information We Collect
          </h2>
          <p>
            When you request a demo, sign up for a free plan, or enquire about our automation services on {siteConfig.brand.name}, we collect information you voluntarily provide: your name, business name, phone/WhatsApp number, email address, and industry focus.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. How We Use Your Information
          </h2>
          <p>
            Your details are used solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Configure and deliver the requested AI automation workflows and CRM pipelines.</li>
            <li>Contact you via WhatsApp, phone, or email regarding your system onboarding and account support.</li>
            <li>Send monthly performance insights and system health reports.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Data Privacy & Confidentiality
          </h2>
          <p>
            We do not sell, rent, or trade your contact information or customer lead data to third parties. All lead and customer data processed through your automated pipelines remains strictly confidential and owned by your business.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Contact & Inquiries
          </h2>
          <p>
            If you wish to update or delete your contact records, reach out directly at:{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-mono text-[#2a9dc8] font-semibold underline">
              {siteConfig.contact.email}
            </a>{" "}
            or visit our office at {siteConfig.contact.address}.
          </p>
        </div>
      </div>
    </main>
  );
}
