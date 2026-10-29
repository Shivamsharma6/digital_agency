"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  Stethoscope,
  Dumbbell,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Factory,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

const industryIconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Dumbbell,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Factory,
};

export function IndustrySolutions() {
  const { t, language } = useApp();
  const { industries, ui } = t;

  return (
    <section id="industries" className="py-24 bg-slate-50/70 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-300/60 dark:border-slate-700">
            <Briefcase className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
            {language === "hi" ? "उद्योग-विशिष्ट कार्यप्रवाह" : "Industry Tailored Workflows"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi"
              ? "भारत में स्थानीय विकास के लिए अनुकूलित समाधान"
              : "Tailored Solutions for Local Growth in India"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === "hi"
              ? "प्रत्येक व्यावसायिक मॉडल में अद्वितीय चुनौतियां होती हैं। जानिए कैसे हम आपकी आवश्यकताओं के अनुरूप वेब, लीड अधिग्रहण और ऑटोमेशन सेवाएं कॉन्फ़िगर करते हैं।"
              : "Every business model has unique friction points. Here is how we configure our web presence, acquisition, and workflow automation services to address industry-specific needs."}
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Briefcase;
            return (
              <div
                key={ind.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center shrink-0 border border-slate-800 dark:border-slate-700">
                      <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {ind.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {language === "hi" ? "कॉन्फ़िगर किए गए समाधान व वर्कफ़्लो" : "Configured Solutions & Workflows"}
                  </p>

                  <ul className="space-y-2.5">
                    {ind.workflows.map((wf) => (
                      <li key={wf} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2
                          className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{wf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {language === "hi" ? "अनुकूलित कार्यान्वयन" : "Tailored implementation"}
                  </span>
                  <a
                    href={`#contact?industry=${ind.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <span>{ui.discussForBusiness}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Tailored vs Pre-packaged Software */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          {language === "hi"
            ? "हम आपको कठोर, एक-आकार-सभी-के-लिए उपयुक्त प्रीपैकेज्ड सॉफ़्टवेयर में बांधने के बजाय आपके सटीक व्यावसायिक वर्कफ़्लो के अनुसार समाधान विकसित करते हैं।"
            : "We develop and configure each solution around your exact business workflow rather than forcing you into rigid, one-size-fits-all prepackaged software."}
        </div>
      </div>
    </section>
  );
}
