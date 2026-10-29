"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Compass, Lightbulb, Hammer, RefreshCw, ArrowRight } from "lucide-react";

const stepIcons = [Compass, Lightbulb, Hammer, RefreshCw];

export function Process() {
  const { t, language } = useApp();
  const { process, ui } = t;

  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200 dark:border-slate-700">
            {language === "hi" ? "संरचित निष्पादन" : "Structured Execution"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi"
              ? "कार्यप्रणाली: एक पारदर्शी 4-चरणीय प्रक्रिया"
              : "How It Works: A Transparent 4-Step Process"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === "hi"
              ? "हम अस्पष्टता को समाप्त करते हैं। पहले दिन से ही आपको मील के पत्थर, डिलीवरेबल्स और जिम्मेदारियों की पूरी स्पष्टता होती है।"
              : "We eliminate ambiguity. From day one, you have clarity on milestones, deliverables, and who is responsible for what."}
          </p>
        </div>

        {/* Desktop & Mobile Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {process.map((item, index) => {
            const Icon = stepIcons[index] || Compass;

            return (
              <div
                key={item.step}
                className="bg-slate-50/70 dark:bg-slate-900/60 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-slate-300 dark:text-slate-700 font-mono">
                      0{item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center shadow-sm border border-slate-800 dark:border-slate-700">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mt-0.5 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable badge */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    {language === "hi" ? "मुख्य डिलीवरेबल" : "Key Deliverable"}
                  </span>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    {item.keyDeliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span>{ui.haveQuestionsTimeline}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
