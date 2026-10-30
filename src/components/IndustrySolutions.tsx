"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { ArrowRight, Sparkles } from "lucide-react";

export function IndustrySolutions() {
  const { t, language } = useApp();
  const { industriesBadge, industriesHeadline, industriesSubheadline, industries } = t;

  return (
    <section id="industries" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#2a9dc8] text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{industriesBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {industriesHeadline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {industriesSubheadline}
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => {
            return (
              <div
                key={ind.id}
                className="bg-slate-50/70 dark:bg-slate-900/60 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#2a9dc8]/40 dark:hover:border-[#2a9dc8]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Emoji & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="text-3xl p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700">
                      {ind.icon}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {ind.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  {/* Configured Automation Stack */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      {language === "hi" ? "सक्रिय ऑटोमेशन स्टैक" : "Activated Automation Stack"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#2a9dc8]/10 text-[#2a9dc8] dark:bg-[#2a9dc8]/20 dark:text-sky-300 border border-[#2a9dc8]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href="#enquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2a9dc8] group-hover:text-[#2286ab] transition-colors"
                  >
                    <span>{language === "hi" ? "इस उद्योग के लिए सेटअप देखें" : "See Setup for this Industry"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    ⚡ Live in 5-7d
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
