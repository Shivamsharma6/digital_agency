import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Terms of Service | ${siteConfig.brand.name}`,
  description: "Terms of service and engagement scope for InfiBusiness Solution.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Services Provided
          </h2>
          <p>
            {siteConfig.brand.name} provides AI automation, CRM pipelines, booking engines, AI voice calling, review generation, and digital transformation services tailored for local service businesses across India.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. 14-Day Free Trial & Subscriptions
          </h2>
          <p>
            Paid plans (Growth, Pro, Scale) include a 14-day free trial period. No credit card is required to begin. You may cancel at any time before your billing cycle without penalty.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Client Data & Account Ownership
          </h2>
          <p>
            Clients maintain 100% ownership of their business data, leads, contacts, customer interactions, and third-party account assets (WhatsApp Business API, Google Business Profile, Domain, Ad Accounts). In the event of account cancellation, your data remains exportable for 30 days.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Contact
          </h2>
          <p>
            For any queries regarding these terms, please contact:{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-mono text-[#2a9dc8] font-semibold underline">
              {siteConfig.contact.email}
            </a>{" "}
            or call our sales desk at {siteConfig.contact.salesPhone}.
          </p>
        </div>
      </div>
    </main>
  );
}
