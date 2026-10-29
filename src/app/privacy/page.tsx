import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  description: "Privacy policy placeholder and data handling statement.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 dark:border-amber-900/40 w-fit">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          Placeholder Documentation
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
            <strong>Developer / Client Notice:</strong> This page is a structured template placeholder. Replace the clauses below with your registered entity&apos;s formal privacy terms and data privacy compliance policy (such as compliance with India&apos;s Digital Personal Data Protection Act, 2023).
          </div>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Information We Collect
          </h2>
          <p>
            When you request a digital audit or submit an enquiry on {siteConfig.brand.name}, we collect the contact details you voluntarily provide: your name, business name, phone number, email address, and optional project requirements.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. How We Use Your Information
          </h2>
          <p>
            Your details are used solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Perform the requested preliminary digital presence assessment.</li>
            <li>Contact you via WhatsApp, phone, or email to schedule a discovery conversation.</li>
            <li>Provide agreed proposals, estimates, and project deliverables.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. No Data Selling or Invasive Tracking
          </h2>
          <p>
            We do not sell, rent, or trade your contact information to third-party advertisers or lead brokers. We do not run invasive tracking pixels or fingerprinting scripts.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Contact & Inquiries
          </h2>
          <p>
            If you wish to update or delete your contact records from our preliminary enquiry logs, please reach out directly at:{" "}
            <span className="font-mono text-slate-900 dark:text-white font-semibold">{siteConfig.contact.emailPlaceholder}</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
