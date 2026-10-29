import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  MessageSquare,
  Workflow,
  BarChart2,
  Clock,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50/70 via-white to-white">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Digital Transformation &bull; Local Business India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Grow Your Business. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700">
                Work Smarter.
              </span>{" "}
              <br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">
                Go Digital.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {siteConfig.hero.supportingCopy}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-slate-900 text-white hover:bg-blue-600 shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                <span>{siteConfig.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 shadow-sm"
              >
                <span>{siteConfig.hero.secondaryCta}</span>
              </a>
            </div>

            {/* 3 Value Pillars */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.hero.supportingPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900 leading-snug">
                      {point.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5 leading-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Ecosystem Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Container Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-elevated p-5 sm:p-6 relative">
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-200" />
                    <span className="w-3 h-3 rounded-full bg-slate-200" />
                    <span className="w-3 h-3 rounded-full bg-slate-200" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      connected-ecosystem.app
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    ILLUSTRATIVE ARCHITECTURE
                  </span>
                </div>

                {/* Simulated Business Workflow Stack */}
                <div className="mt-4 space-y-3.5">
                  {/* Step 1: Digital Presence / Website Card */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900">
                            1. Modern Website & Local SEO
                          </p>
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-medium">
                            Live
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Mobile-first pages & Google Business visibility
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-600 bg-white px-2 py-1 rounded border border-slate-200">
                      Discovery
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-blue-300 relative">
                      <div className="absolute -bottom-1 -left-[3px] border-solid border-t-blue-500 border-t-[5px] border-x-transparent border-x-[4px] border-b-0" />
                    </div>
                  </div>

                  {/* Step 2: Customer Enquiry Intake */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900">
                            2. Instant Lead Capture
                          </p>
                          <span className="text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded font-medium">
                            WhatsApp + Form
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Zero missed enquiries &bull; Synced to central tracker
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-600 bg-white px-2 py-1 rounded border border-slate-200">
                      Capture
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-blue-300 relative">
                      <div className="absolute -bottom-1 -left-[3px] border-solid border-t-blue-500 border-t-[5px] border-x-transparent border-x-[4px] border-b-0" />
                    </div>
                  </div>

                  {/* Step 3: Workflow Automation */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                        <Workflow className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900">
                            3. Automated Nurture & Reminders
                          </p>
                          <span className="text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded font-medium">
                            Automated
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Instant customer reply + staff notification
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-600 bg-white px-2 py-1 rounded border border-slate-200">
                      Automation
                    </span>
                  </div>

                  {/* Step 4: Operations & Analytics Pulse */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-medium">
                          Response Time
                        </span>
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <p className="text-base font-bold text-slate-900 mt-1">
                        &lt; 5 Minutes
                      </p>
                      <p className="text-[10px] text-slate-400">
                        vs. 6+ hours manual
                      </p>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-medium">
                          Lead Tracking
                        </span>
                        <BarChart2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <p className="text-base font-bold text-slate-900 mt-1">
                        100% Captured
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Single verified dashboard
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer annotation */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Unified Web + Automation Stack
                  </span>
                  <span className="font-medium text-slate-700">Zero Code Required by Staff</span>
                </div>
              </div>

              {/* Floating Decorative Pill */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 -right-3 bg-slate-900 text-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-800 text-xs font-medium">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom Software & SaaS Expandable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
