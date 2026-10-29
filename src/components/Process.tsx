import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Compass, Lightbulb, Hammer, RefreshCw, ArrowRight } from "lucide-react";

const stepIcons = [Compass, Lightbulb, Hammer, RefreshCw];

export function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            Structured Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How It Works: A Transparent 4-Step Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We eliminate ambiguity. From day one, you have clarity on milestones, deliverables, and who is responsible for what.
          </p>
        </div>

        {/* Desktop & Mobile Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {process.map((item, index) => {
            const Icon = stepIcons[index] || Compass;

            return (
              <div
                key={item.step}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-slate-300 font-mono">
                      0{item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable badge */}
                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Deliverable
                  </span>
                  <p className="text-xs font-medium text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600"
          >
            <span>Have questions about our implementation timeline? Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
