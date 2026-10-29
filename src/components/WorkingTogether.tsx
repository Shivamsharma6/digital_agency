import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  CalendarCheck,
  Receipt,
  ShieldCheck,
  KeyRound,
  FileCheck2,
  Headphones,
  CheckCircle,
} from "lucide-react";

const principleIconMap: Record<string, React.ElementType> = {
  CalendarCheck,
  Receipt,
  ShieldCheck,
  KeyRound,
  FileCheck2,
  Headphones,
};

export function WorkingTogether() {
  const { engagement } = siteConfig;

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
            {engagement.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {engagement.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {engagement.intro}
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagement.principles.map((item, index) => {
            const Icon = principleIconMap[item.iconName] || ShieldCheck;

            return (
              <div
                key={item.title}
                className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/90 hover:border-slate-300 transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
