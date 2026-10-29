"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  SearchX,
  UserX,
  TrendingDown,
  BarChart3,
  Clock,
  Unlink2,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  SearchX,
  UserX,
  TrendingDown,
  BarChart3,
  Clock,
  Unlink2,
};

export function BusinessChallenges() {
  const { t, language } = useApp();
  const { challenges } = t;

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-300/60 dark:border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
            {challenges.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {challenges.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {challenges.intro}
          </p>
        </div>

        {/* 6 Problem Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.items.map((item, index) => {
            const Icon = iconMap[item.iconName] || SearchX;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center mb-4 border border-red-100 dark:border-red-900/40">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Bridge Banner */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl border border-blue-200 dark:border-blue-900/60 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === "hi"
                    ? "हम इसे कैसे हल करते हैं: बिखरे हुए हिस्सों को जोड़ना"
                    : "How We Solve This: Connecting the Fragments"}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  {challenges.summary}
                </p>
              </div>
            </div>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shrink-0 shadow-sm"
            >
              <span>{t.hero.secondaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
