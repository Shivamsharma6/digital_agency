"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, MessageSquare, PhoneCall, ArrowRight, Sparkles, Clock, Check } from "lucide-react";

export function Process() {
  const { t, language } = useApp();
  const { processBadge, processHeadline, processSubheadline, processSteps } = t;

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{processBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {processHeadline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {processSubheadline}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {processSteps.map((stepItem, index) => {
            return (
              <div
                key={stepItem.step}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-[#2a9dc8] font-mono text-xl font-bold flex items-center justify-center border border-sky-100 dark:border-sky-800">
                      0{stepItem.step}
                    </span>
                    <div className="h-0.5 flex-1 mx-4 bg-slate-100 dark:bg-slate-800 hidden md:block" />
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {index === 0 ? "Days 1–2" : index === 1 ? "Days 3–5" : "Day 6+"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-[#2a9dc8]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>
                    {index === 0
                      ? (language === "hi" ? "पूर्ण इंटीग्रेशन एवं टेस्टिंग" : "Zero technical burden on you")
                      : index === 1
                      ? (language === "hi" ? "24/7 ऑटोपायलट सक्रिय" : "Automatic lead responses 24/7")
                      : (language === "hi" ? "मासिक समीक्षा एवं अनुकूलन" : "Ongoing ROI optimisation")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live CRM Pipeline Simulation Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {language === "hi" ? "लाइव सीआरएम पाइपलाइन ऑटोमेशन" : "Live CRM Automation Pipeline"}
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {language === "hi"
                  ? "सभी लीड्स स्वचालित रूप से स्टेटस अपडेट और संदेशों के साथ आगे बढ़ती हैं"
                  : "Every lead automatically moves across stages with instant trigger actions"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                ⚡ Avg. Response: 42s
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                100% Automated
              </span>
            </div>
          </div>

          {/* 3 Pipeline Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
            {/* Column 1: New Leads */}
            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {language === "hi" ? "नई लीड्स (New)" : "1. New Enquiries"}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  3 active
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>Rahul S. (Dental Checkup)</span>
                    <span className="text-[10px] text-slate-400">Just now</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-[11px]">
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp auto-reply triggered</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>Neha M. (Salon Keratin)</span>
                    <span className="text-[10px] text-slate-400">3m ago</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-sky-600 dark:text-sky-400 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>Pricing catalogue sent via Bot</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Contacted / Qualified */}
            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {language === "hi" ? "संपर्क / योग्य (Qualified)" : "2. Followed Up"}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300">
                  5 in flow
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>Pooja D. (Gym 6-Month Pass)</span>
                    <span className="text-[10px] text-slate-400">12m ago</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-[11px]">
                    <PhoneCall className="w-3 h-3" />
                    <span>AI Voice qualified interest: High</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>Vikram P. (Warehouse Order)</span>
                    <span className="text-[10px] text-slate-400">28m ago</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-[11px]">
                    <MessageSquare className="w-3 h-3" />
                    <span>Catalog PDF delivered & viewed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Booked / Converted */}
            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {language === "hi" ? "बुक / पुष्टि (Booked)" : "3. Booked & Confirmed"}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                  8 today
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>Amit K. (Clinic Appointment)</span>
                    <span className="text-[10px] text-slate-400">1h ago</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-[11px]">
                    <Check className="w-3 h-3" />
                    <span>Slot confirmed • Calendar synced</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>Sanya R. (Spa Package)</span>
                    <span className="text-[10px] text-slate-400">2h ago</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-[11px]">
                    <Check className="w-3 h-3" />
                    <span>Payment link confirmed • ₹4,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a9dc8] hover:text-[#2286ab] transition-colors"
          >
            <span>{language === "hi" ? "हमारी सभी योजनाएं और मूल्य देखें →" : "See our transparent pricing and free plan →"}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
