import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Refund Policy | ${siteConfig.brand.name}`,
  description: "Refund and cancellation policy for InfiBusiness Solution plans.",
};

export default function RefundPage() {
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
          Refund & Cancellation Policy
        </h1>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. 14-Day Free Trial
          </h2>
          <p>
            All paid subscription plans (Growth, Pro, Scale) include a full 14-day free trial. You can test all features and workflows at zero cost before committing to a paid invoice.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Cancellation Policy
          </h2>
          <p>
            You can cancel your subscription at any time without long-term commitments or hidden lock-in contracts. Simply notify your dedicated account manager or email{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-[#2a9dc8] font-semibold underline">
              {siteConfig.contact.email}
            </a>{" "}
            before your next billing date.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Refund Requests
          </h2>
          <p>
            If you experience technical issues that prevent your automations from functioning as agreed during an active paid billing cycle, please notify our support team within 7 days of the billing date for review and refund processing.
          </p>
        </div>
      </div>
    </main>
  );
}
