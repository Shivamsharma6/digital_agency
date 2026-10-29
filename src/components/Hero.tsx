"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  MessageSquare,
  Workflow,
  BarChart2,
  Clock,
  Zap,
} from "lucide-react";

export function Hero() {
  const { t, language } = useApp();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50/70 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-200">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-50/70 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {language === "hi"
                  ? "डिजिटल परिवर्तन • भारतीय स्थानीय व्यवसाय"
                  : "Digital Transformation • Local Business India"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.14]">
              {language === "hi" ? (
                <>
                  अपना व्यवसाय बढ़ाएं। <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 dark:from-slate-100 dark:via-blue-300 dark:to-blue-400">
                    समझदारी से काम करें।
                  </span>{" "}
                  <br />
                  <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-200 dark:decoration-blue-900 underline-offset-8">
                    डिजिटल बनें।
                  </span>
                </>
              ) : (
                <>
                  Grow Your Business. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 dark:from-slate-100 dark:via-blue-300 dark:to-blue-400">
                    Work Smarter.
                  </span>{" "}
                  <br />
                  <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-200 dark:decoration-blue-900 underline-offset-8">
                    Go Digital.
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {t.hero.supportingCopy}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500 shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 shadow-sm"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* 3 Value Pillars */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.hero.supportingPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                      {point.title}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Ecosystem Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Container Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-elevated p-5 sm:p-6 relative">
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 ml-2">
                      connected-ecosystem.app
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                    {language === "hi" ? "एकीकृत आर्किटेक्चर" : "ILLUSTRATIVE ARCHITECTURE"}
                  </span>
                </div>

                {/* Simulated Business Workflow Stack */}
                <div className="mt-4 space-y-3.5">
                  {/* Step 1: Digital Presence / Website Card */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            {language === "hi" ? "1. आधुनिक वेबसाइट व स्थानीय एसईओ" : "1. Modern Website & Local SEO"}
                          </p>
                          <span className="text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded font-medium">
                            {language === "hi" ? "सक्रिय" : "Live"}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {language === "hi" ? "मोबाइल-अनुकूल पेज व गूगल मैप्स उपस्थिति" : "Mobile-first pages & Google Business visibility"}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                      {language === "hi" ? "खोज" : "Discovery"}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-blue-300 dark:bg-blue-600 relative">
                      <div className="absolute -bottom-1 -left-[3px] border-solid border-t-blue-500 dark:border-t-blue-400 border-t-[5px] border-x-transparent border-x-[4px] border-b-0" />
                    </div>
                  </div>

                  {/* Step 2: Customer Enquiry Intake */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            {language === "hi" ? "2. तत्काल पूछताछ कैप्चर" : "2. Instant Lead Capture"}
                          </p>
                          <span className="text-[10px] text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.2 rounded font-medium">
                            WhatsApp + Form
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {language === "hi" ? "शून्य छूटी हुई लीड्स • केंद्रीकृत ट्रैकर" : "Zero missed enquiries • Synced to central tracker"}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                      {language === "hi" ? "कैप्चर" : "Capture"}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-blue-300 dark:bg-blue-600 relative">
                      <div className="absolute -bottom-1 -left-[3px] border-solid border-t-blue-500 dark:border-t-blue-400 border-t-[5px] border-x-transparent border-x-[4px] border-b-0" />
                    </div>
                  </div>

                  {/* Step 3: Workflow Automation */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                        <Workflow className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            {language === "hi" ? "3. स्वचालित फॉलो-अप व रिमाइंडर" : "3. Automated Nurture & Reminders"}
                          </p>
                          <span className="text-[10px] text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-1.5 py-0.2 rounded font-medium">
                            {language === "hi" ? "स्वचालित" : "Automated"}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {language === "hi" ? "ग्राहक को तुरंत उत्तर + स्टाफ को अलर्ट" : "Instant customer reply + staff notification"}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                      {language === "hi" ? "ऑटोमेशन" : "Automation"}
                    </span>
                  </div>

                  {/* Step 4: Operations & Analytics Pulse */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2.5">
                    <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {language === "hi" ? "प्रतिक्रिया समय" : "Response Time"}
                        </span>
                        <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
                        &lt; 5 {language === "hi" ? "मिनट" : "Minutes"}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500">
                        {language === "hi" ? "बनाम 6+ घंटे मैन्युअल" : "vs. 6+ hours manual"}
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {language === "hi" ? "लीड ट्रैकिंग" : "Lead Tracking"}
                        </span>
                        <BarChart2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
                        100% {language === "hi" ? "कैप्चर" : "Captured"}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500">
                        {language === "hi" ? "एकल सत्यापित डैशबोर्ड" : "Single verified dashboard"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer annotation */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    {language === "hi" ? "एकीकृत वेब व स्वचालन स्टैक" : "Unified Web + Automation Stack"}
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {language === "hi" ? "स्टाफ के लिए कोडिंग ज़रूरी नहीं" : "Zero Code Required by Staff"}
                  </span>
                </div>
              </div>

              {/* Floating Decorative Pill */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 -right-3 bg-slate-900 dark:bg-slate-800 text-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-800 dark:border-slate-700 text-xs font-medium">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {language === "hi"
                    ? "कस्टम सॉफ़्टवेयर और सास (SaaS) विस्तार योग्य"
                    : "Custom Software & SaaS Expandable"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
