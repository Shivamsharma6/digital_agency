"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  ArrowRight,
  Zap,
  MessageSquare,
  Calendar,
  Star,
} from "lucide-react";

export function Hero() {
  const { t } = useApp();
  const { hero, trustedBy } = t;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#eaf6fb]/40 via-white to-white dark:from-[#0b1522] dark:via-[#0e1b2e] dark:to-[#0b1522] transition-colors duration-200">
      {/* Background glow effects */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2a9dc8]/10 rounded-full blur-3xl opacity-60 dark:opacity-20" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#2a9dc8]/10 rounded-full blur-3xl opacity-50 dark:opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, CTAs, Social Proof Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#eaf6fb] dark:bg-[#2a9dc8]/10 border border-[#2a9dc8]/30 text-xs font-bold text-[#2a9dc8] dark:text-[#7fd4f4] tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2a9dc8] animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              {hero.headlinePart1} <br />
              {hero.headlinePart2}{" "}
              <span className="text-[#2a9dc8] italic font-serif underline decoration-[#2a9dc8]/30 underline-offset-8">
                {hero.headlineAccent}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#2a9dc8] hover:bg-[#2286ab] text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2a9dc8]"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-[#2a9dc8] dark:hover:border-[#2a9dc8] hover:bg-[#eaf6fb]/30 dark:hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 shadow-sm"
              >
                <span>{hero.ctaSecondary}</span>
              </a>
            </div>

            {/* 4 Social Proof Metrics Grid */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {hero.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">
                    {metric.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: InfiBusiness Automation Dashboard — Live Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-white dark:bg-[#101f33] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-elevated p-5 sm:p-6 relative">
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white ml-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                      Automation Dashboard — Live
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#2a9dc8] bg-[#eaf6fb] dark:bg-[#2a9dc8]/15 px-2 py-0.5 rounded-full border border-[#2a9dc8]/30">
                    24/7 ACTIVE
                  </span>
                </div>

                {/* Live Activity Feed */}
                <div className="mt-4 space-y-3">
                  {/* LeadFlow event */}
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-[#2a9dc8] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#2a9dc8] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            LeadFlow
                          </p>
                          <span className="text-[10px] text-slate-400 font-normal">
                            New lead captured
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Priya S. · Salon enquiry · Website
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      • Live
                    </span>
                  </div>

                  {/* ChatPilot event */}
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-[#2a9dc8] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            ChatPilot
                          </p>
                          <span className="text-[10px] text-slate-400 font-normal">
                            WhatsApp replied
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          60 sec response · Auto-qualified
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                      Running
                    </span>
                  </div>

                  {/* BookSmart event */}
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-[#2a9dc8] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            BookSmart
                          </p>
                          <span className="text-[10px] text-slate-400 font-normal">
                            Appointment booked
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Tomorrow 3PM · Reminder sent
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      • Done
                    </span>
                  </div>

                  {/* ReputeUp event */}
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between hover:border-[#2a9dc8] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Star className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            ReputeUp
                          </p>
                          <span className="text-[10px] text-slate-400 font-normal">
                            Review requested
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Post-visit flow · Google 5★
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                      Queued
                    </span>
                  </div>

                  {/* 3 Metrics Bottom Pulse */}
                  <div className="pt-2 grid grid-cols-3 gap-2">
                    <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                      <p className="text-sm font-black text-slate-900 dark:text-white font-mono">
                        +48
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        Leads / week
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                      <p className="text-sm font-black text-emerald-600 dark:text-emerald-400 font-mono">
                        72%
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        Converted
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                      <p className="text-sm font-black text-amber-500 font-mono">
                        4.9★
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        Google
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section / Industry Marquee */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 shrink-0">
              TRUSTED BY LOCAL ENTERPRISES:
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              {trustedBy.map((ind) => (
                <span key={ind} className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2a9dc8]" />
                  <span>{ind}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
