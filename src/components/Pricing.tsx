import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Check, ArrowRight, Info, Sparkles } from "lucide-react";

export function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            {pricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {pricing.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {pricing.intro}
          </p>
        </div>

        {/* 3 Pricing Packages */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                pkg.isPopular
                  ? "bg-white border-2 border-blue-600 shadow-elevated ring-1 ring-blue-600/20"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  Recommended For Growth
                </div>
              )}

              <div>
                {/* Header */}
                <h3 className="text-xl font-bold text-slate-900">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Starting at
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {pkg.billingPeriod}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    Best for: {pkg.targetAudience}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-700 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Scope note if applicable */}
                  {pkg.scopeNote && (
                    <div className="mt-5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
                      <span className="font-semibold text-slate-700 block mb-0.5">
                        Scope note:
                      </span>
                      {pkg.scopeNote}
                    </div>
                  )}
                </div>
              </div>

              {/* Package CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={`#contact?package=${pkg.id}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                    pkg.isPopular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                      : "bg-slate-900 text-white hover:bg-blue-600 shadow-sm"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparent Pricing Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200/90 text-center max-w-4xl mx-auto shadow-subtle">
          <div className="flex items-start sm:items-center justify-center gap-2 text-xs text-slate-600">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              {pricing.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
