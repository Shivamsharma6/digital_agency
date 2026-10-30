"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  Zap,
  Calendar,
  Bot,
  Star,
  Workflow,
  PhoneCall,
  BarChart3,
  Layers,
  Share2,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const serviceIcons: Record<string, React.ElementType> = {
  Zap,
  Calendar,
  Bot,
  Star,
  Workflow,
  PhoneCall,
  BarChart3,
  Layers,
  Share2,
  RefreshCcw,
};

export function Services() {
  const { t, language } = useApp();
  const { services, servicesBadge, servicesHeadline, servicesSubheadline } = t;

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0b1522] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="section-label">
            {servicesBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {servicesHeadline}{" "}
            <span className="text-[#2a9dc8] italic font-serif">
              {language === "hi" ? "आपके लिए प्रबंधित" : "Managed For You"}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {servicesSubheadline}
          </p>
        </div>

        {/* 10 Services Grid (matching InfiBusiness layout) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.iconName] || Zap;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="bg-slate-50/70 dark:bg-[#101f33] rounded-3xl p-7 border border-slate-200 dark:border-slate-800 hover:border-[#2a9dc8] dark:hover:border-[#2a9dc8] shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 text-[#2a9dc8] flex items-center justify-center shadow-subtle border border-slate-200/80 dark:border-slate-700 group-hover:bg-[#2a9dc8] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2a9dc8] bg-[#eaf6fb] dark:bg-[#2a9dc8]/15 px-3 py-1 rounded-full border border-[#2a9dc8]/20">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#2a9dc8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2a9dc8] hover:text-[#2286ab] dark:hover:text-[#7fd4f4]"
                  >
                    <span>{language === "hi" ? "इसके बारे में जानें" : "Explore feature"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
