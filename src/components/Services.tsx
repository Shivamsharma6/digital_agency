"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  Globe,
  TrendingUp,
  Cpu,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Info,
  Sparkle,
} from "lucide-react";

const serviceIconMap: Record<string, React.ElementType> = {
  Globe,
  TrendingUp,
  Cpu,
  Code2,
  Sparkles,
};

export function Services() {
  const { t, language } = useApp();
  const { services, ui } = t;

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100 dark:border-blue-800">
            <Sparkle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            {language === "hi" ? "हमारी मुख्य क्षमताएं" : "Core Capabilities"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi" ? (
              <>
                एकीकृत समाधान। <br className="hidden sm:inline" />
                वास्तविक व्यावसायिक परिणामों के लिए निर्मित।
              </>
            ) : (
              <>
                Integrated Solutions. <br className="hidden sm:inline" />
                Built for Tangible Business Outcomes.
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === "hi"
              ? "आधुनिक वेब उपस्थिति से लेकर हैंड्स-ऑफ वर्कफ़्लो ऑटोमेशन और कस्टम सॉफ़्टवेयर तक—हम आपके व्यवसाय के विकास के लिए पूर्ण तकनीकी नींव प्रदान करते हैं।"
              : "From modern web presence to hands-off workflow automation and custom operational software—we provide the complete technology foundation your business needs to grow."}
          </p>
        </div>

        {/* 5 Distinct Service Blocks */}
        <div className="mt-16 space-y-10">
          {services.map((service) => {
            const Icon = serviceIconMap[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="bg-slate-50/70 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Category Info & Primary Outcome */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm border border-slate-800 dark:border-slate-700">
                          <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            {service.categoryTag}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                        {service.summary}
                      </p>

                      {/* Explicit Outcome Callout Box */}
                      <div className="mt-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-subtle">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block mb-1">
                          {ui.keyOutcome}
                        </span>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                          {service.outcome}
                        </p>
                      </div>

                      {/* Scope Note if provided */}
                      {service.scopeNote && (
                        <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs leading-relaxed">
                          <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>{service.scopeNote}</span>
                        </div>
                      )}
                    </div>

                    {/* Action link */}
                    <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                      <a
                        href={`#contact?service=${service.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 group"
                      >
                        <span>
                          {ui.enquireAbout} {service.title}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Detailed Capability Checklist */}
                  <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-subtle">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                      {ui.includedCapabilities}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
