import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata = {
  title: `Terms of Service | ${siteConfig.brand.name}`,
  description: "Terms of service and engagement scope placeholder.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 w-fit">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          Placeholder Documentation
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Terms of Service & Engagement
        </h1>
        <p className="mt-2 text-xs text-slate-500 font-mono">
          Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-8 space-y-6 text-sm text-slate-600 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <strong>Developer / Client Notice:</strong> This page is a structured template placeholder. Customize these terms with your legal counsel to reflect your specific jurisdiction, liability terms, and commercial service agreements.
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            1. Scope of Preliminary Services
          </h2>
          <p>
            The &quot;Free Digital Audit&quot; is a preliminary, high-level evaluation of public digital assets (such as web performance and Google Business listings) conducted on an exploratory basis with zero commercial obligation.
          </p>

          <h2 className="text-lg font-bold text-slate-900">
            2. Commercial Engagements & Separate Statements of Work
          </h2>
          <p>
            All paid web design, digital marketing, automation setup, or custom software projects are governed by a mutually agreed, written Statement of Work (SOW) specifying deliverables, milestones, payment terms, and timelines.
          </p>

          <h2 className="text-lg font-bold text-slate-900">
            3. Third-Party Costs & Platform Accounts
          </h2>
          <p>
            Clients maintain direct ownership and payment responsibility for third-party subscriptions, including domain registrations, web hosting, advertising budgets (Meta Ads, Google Ads), and third-party SaaS licenses (such as WhatsApp Business API providers or CRM seats).
          </p>

          <h2 className="text-lg font-bold text-slate-900">
            4. Asset Ownership & Handover
          </h2>
          <p>
            Upon settlement of agreed invoices, clients retain full ownership of custom assets, designs, code repositories, and credentials created specifically for their business.
          </p>

          <h2 className="text-lg font-bold text-slate-900">
            5. Inquiries
          </h2>
          <p>
            For legal inquiries or corporate contracts, contact:{" "}
            <span className="font-mono text-slate-900 font-semibold">{siteConfig.contact.emailPlaceholder}</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
