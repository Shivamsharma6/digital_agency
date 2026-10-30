"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Check, X, ArrowRight, Sparkles, MessageCircle, PhoneCall, ChevronDown, ChevronUp } from "lucide-react";

export function Pricing() {
  const { t, language } = useApp();
  const {
    pricingBadge,
    pricingHeadline,
    pricingHeadlineAccent,
    pricingSubheadline,
    freePlan,
    pricingPlans,
    comparisonRows,
    contact,
    ui,
  } = t;

  const [showComparison, setShowComparison] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#2a9dc8] text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{pricingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {pricingHeadline}{" "}
            <span className="text-[#2a9dc8]">{pricingHeadlineAccent}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {pricingSubheadline}
          </p>
        </div>

        {/* Free Plan Banner */}
        <div className="mb-12 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-[#2a9dc8]/40 dark:border-[#2a9dc8]/30 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200 dark:border-emerald-800">
                {freePlan.badge}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {freePlan.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {freePlan.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {freePlan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <a
                href="#enquiry?plan=free"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#2a9dc8] text-white hover:bg-[#2286ab] shadow-sm transition-all"
              >
                <span>{freePlan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? "bg-white dark:bg-slate-900 border-2 border-[#2a9dc8] shadow-lg ring-2 ring-[#2a9dc8]/20"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2a9dc8] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {language === "hi" ? "सर्वाधिक लोकप्रिय ★" : "Most Popular ★"}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {plan.trial}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        {feat.included ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3" />
                          </div>
                        )}
                        <span
                          className={
                            feat.included
                              ? "text-slate-700 dark:text-slate-300 font-medium"
                              : "text-slate-400 dark:text-slate-600 line-through"
                          }
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`#enquiry?plan=${plan.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold transition-all ${
                      isPopular
                        ? "bg-[#2a9dc8] text-white hover:bg-[#2286ab] shadow-sm"
                        : "bg-slate-900 dark:bg-slate-800 text-white hover:bg-[#2a9dc8] dark:hover:bg-[#2a9dc8] shadow-sm"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-16">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="w-full flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-left cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2a9dc8] block mb-1">
                {ui.fullComparison}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {ui.featureByFeature}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span>{showComparison ? "Hide breakdown" : "View all 17 features"}</span>
              {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showComparison && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/70 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="py-4 px-6 min-w-[200px]">{ui.featureCol}</th>
                    <th className="py-4 px-4 text-center min-w-[100px]">{ui.freeCol}</th>
                    <th className="py-4 px-4 text-center min-w-[120px]">{ui.growthCol}</th>
                    <th className="py-4 px-4 text-center min-w-[120px] text-[#2a9dc8] bg-sky-50/50 dark:bg-sky-950/30">
                      {ui.proCol}
                    </th>
                    <th className="py-4 px-4 text-center min-w-[120px]">{ui.scaleCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {comparisonRows.map((row, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <tr
                        key={row.feature}
                        className={isEven ? "bg-white dark:bg-slate-900" : "bg-slate-50/50 dark:bg-slate-900/50"}
                      >
                        <td className="py-3.5 px-6 font-medium text-slate-800 dark:text-slate-200">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-4 text-center font-medium text-slate-600 dark:text-slate-400">
                          {row.free === "✓" ? (
                            <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                          ) : row.free === "×" ? (
                            <span className="text-slate-300 dark:text-slate-600">—</span>
                          ) : (
                            row.free
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center font-medium text-slate-600 dark:text-slate-400">
                          {row.growth === "✓" ? (
                            <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                          ) : row.growth === "×" ? (
                            <span className="text-slate-300 dark:text-slate-600">—</span>
                          ) : (
                            row.growth
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center font-semibold text-[#2a9dc8] bg-sky-50/30 dark:bg-sky-950/20">
                          {row.pro === "✓" ? (
                            <Check className="w-4 h-4 text-[#2a9dc8] mx-auto font-bold" />
                          ) : row.pro === "×" ? (
                            <span className="text-slate-300 dark:text-slate-600">—</span>
                          ) : (
                            row.pro
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center font-medium text-slate-800 dark:text-slate-200">
                          {row.scale === "✓" ? (
                            <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                          ) : row.scale === "×" ? (
                            <span className="text-slate-300 dark:text-slate-600">—</span>
                          ) : (
                            row.scale
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Not Sure Which Plan? Help Block */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-8 sm:p-10 text-white shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
                {ui.notSureWhichPlan}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {ui.weHelpYouChoose}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {ui.notSureSub}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#2a9dc8] text-white hover:bg-[#2286ab] shadow-sm transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{ui.bookStrategyCall}</span>
              </a>
              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                  "Hello InfiBusiness team, I'd like help choosing the best plan for my business."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{ui.whatsAppUs}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
