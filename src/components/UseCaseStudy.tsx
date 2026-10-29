"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  AlertTriangle,
  CheckCircle2,
  Workflow,
  Info,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export function UseCaseStudy() {
  const { t, language } = useApp();
  const { exampleUseCase, ui } = t;

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with explicit Illustrative Scenario Label */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 dark:border-amber-900/40">
            <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            {exampleUseCase.label} &bull; {language === "hi" ? "परिचालन वॉकथ्रू" : "Operational Walkthrough"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {exampleUseCase.title}
          </h2>
          <p className="mt-2 text-base text-blue-600 dark:text-blue-400 font-semibold">
            {language === "hi" ? "संदर्भ:" : "Context:"} {exampleUseCase.businessType}
          </p>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 italic max-w-2xl">
            {exampleUseCase.disclaimer}
          </p>
        </div>

        {/* 3 Step Transformation Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* 1. BEFORE */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-red-200/90 dark:border-red-950/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-4 border border-red-100 dark:border-red-900/40">
                <AlertTriangle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                {language === "hi" ? "शुरुआती स्थिति" : "Baseline Situation"}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {exampleUseCase.before.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exampleUseCase.before.description}
              </p>

              <ul className="mt-5 space-y-3">
                {exampleUseCase.before.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-red-700 dark:text-red-400 font-medium">
              {language === "hi"
                ? "परिणाम: उच्च ग्राहक गिरावट और स्टाफ पर दबाव"
                : "Result: High drop-off rate and staff fatigue"}
            </div>
          </div>

          {/* 2. PROPOSED SOLUTION */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border-2 border-blue-600 shadow-elevated flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-6 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              {language === "hi" ? "एकीकृत समाधान" : "Integrated Solution"}
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100 dark:border-blue-900/40 mt-1">
                <Workflow className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {language === "hi" ? "कार्यान्वयन" : "The Implementation"}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {exampleUseCase.solution.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exampleUseCase.solution.description}
              </p>

              <ul className="mt-5 space-y-3">
                {exampleUseCase.solution.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2
                      className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-blue-700 dark:text-blue-400 font-medium">
              {language === "hi" ? "लगभग 10 कार्य दिवसों में तैयार" : "Deployed in ~10 working days"}
            </div>
          </div>

          {/* 3. AFTER */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-emerald-200/90 dark:border-emerald-950/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100 dark:border-emerald-900/40">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {language === "hi" ? "परिचालन परिणाम" : "Operational Outcome"}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {exampleUseCase.after.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exampleUseCase.after.description}
              </p>

              <ul className="mt-5 space-y-3">
                {exampleUseCase.after.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              {language === "hi"
                ? "निरंतर दृश्यता और मानकीकृत लीड प्रक्रिया"
                : "Continuous visibility & standardized intake"}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-700 dark:text-slate-300 font-medium text-center sm:text-left">
            {language === "hi"
              ? "देखना चाहते हैं कि यह पैटर्न आपके विशिष्ट ग्राहक प्रवाह पर कैसे लागू होता है?"
              : "Want to explore how this pattern applies to your specific customer flow?"}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shrink-0"
          >
            <span>{ui.requestCustomReview}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
