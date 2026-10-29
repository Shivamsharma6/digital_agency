import React from "react";
import { siteConfig } from "@/config/siteConfig";
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
  const { industries } = siteConfig;

  return (
    <section id="industries" className="py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-slate-700" />
            Industry Tailored Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tailored Solutions for Local Growth in India
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business model has unique friction points. Here is how we configure our web presence, acquisition, and workflow automation services to address industry-specific needs.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Briefcase;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {ind.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Configured Solutions & Workflows
                  </p>

                  <ul className="space-y-2.5">
                    {ind.workflows.map((wf) => (
                      <li key={wf} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2
                          className="w-4 h-4 text-blue-600 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{wf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Tailored implementation
                  </span>
                  <a
                    href={`#contact?industry=${ind.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <span>Discuss for your business</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Tailored vs Pre-packaged Software */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          We develop and configure each solution around your exact business workflow rather than forcing you into rigid, one-size-fits-all prepackaged software.
        </div>
      </div>
    </section>
  );
}
