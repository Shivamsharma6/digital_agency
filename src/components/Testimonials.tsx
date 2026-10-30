"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Star, Sparkles, Quote, MapPin, Building2 } from "lucide-react";

export function Testimonials() {
  const { t, language } = useApp();
  const { testimonialsBadge, testimonialsHeadline, testimonials } = t;

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#2a9dc8] text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{testimonialsBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {testimonialsHeadline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === "hi"
              ? "देखें कि भारत भर के स्थानीय व्यवसाय कैसे अपने संचालन को स्वचालित कर रहे हैं और राजस्व बढ़ा रहे हैं।"
              : "Real business owners sharing how automation changed their day-to-day operations and growth."}
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-slate-50/70 dark:bg-slate-900/60 rounded-2xl p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#2a9dc8]/20 group-hover:text-[#2a9dc8]/40 transition-colors" />
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-[#2a9dc8]" />
                        {item.business}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    ✓
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
