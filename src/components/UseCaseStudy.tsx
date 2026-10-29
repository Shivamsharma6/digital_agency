import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  AlertTriangle,
  CheckCircle2,
  Workflow,
  Info,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export function UseCaseStudy() {
  const { exampleUseCase } = siteConfig;

  return (
    <section className="py-24 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with explicit Illustrative Scenario Label */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <Info className="w-3.5 h-3.5 text-amber-600" />
            {exampleUseCase.label} &bull; Operational Walkthrough
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {exampleUseCase.title}
          </h2>
          <p className="mt-2 text-base text-blue-600 font-semibold">
            Context: {exampleUseCase.businessType}
          </p>
          <p className="mt-3 text-sm text-slate-500 italic max-w-2xl">
            {exampleUseCase.disclaimer}
          </p>
        </div>

        {/* 3 Step Transformation Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* 1. BEFORE */}
          <div className="bg-white rounded-2xl p-7 border border-red-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
                <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                Baseline Situation
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {exampleUseCase.before.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {exampleUseCase.before.description}
              </p>

              <ul className="mt-5 space-y-3">
                {exampleUseCase.before.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-red-700 font-medium">
              Result: High drop-off rate and staff fatigue
            </div>
          </div>

          {/* 2. PROPOSED SOLUTION */}
          <div className="bg-white rounded-2xl p-7 border-2 border-blue-600 shadow-elevated flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-6 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Integrated Solution
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100 mt-1">
                <Workflow className="w-3.5 h-3.5 text-blue-600" />
                The Implementation
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {exampleUseCase.solution.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {exampleUseCase.solution.description}
              </p>

              <ul className="mt-5 space-y-3">
                {exampleUseCase.solution.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2
                      className="w-4 h-4 text-blue-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-blue-700 font-medium">
              Deployed in ~10 working days
            </div>
          </div>

          {/* 3. AFTER */}
          <div className="bg-white rounded-2xl p-7 border border-emerald-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                Operational Outcome
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {exampleUseCase.after.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {exampleUseCase.after.description}
              </p>

              <ul className="mt-5 space-y-3">
                {exampleUseCase.after.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-emerald-700 font-medium">
              Continuous visibility & standardized intake
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-700 font-medium text-center sm:text-left">
            Want to explore how this pattern applies to your specific customer flow?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-blue-600 transition-colors shrink-0"
          >
            <span>Request a Custom Workflow Review</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
