"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { ChevronDown, Sparkles, MessageCircle } from "lucide-react";

export function FAQ() {
  const { t, language } = useApp();
  const { faqBadge, faqHeadline, faqs, contact } = t;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#2a9dc8] text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{faqBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {faqHeadline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {language === "hi"
              ? "हमारे निःशुल्क प्लान, 14-दिवसीय परीक्षण और ऑटोमेशन सेटअप के बारे में अक्सर पूछे जाने वाले प्रश्न।"
              : "Everything you need to know about our plans, trial, and setup process."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all bg-white dark:bg-slate-900 shadow-sm hover:border-[#2a9dc8]/40 dark:hover:border-[#2a9dc8]/40"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-[#2a9dc8] dark:hover:text-sky-300 transition-colors"
                  >
                    <span className="text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#2a9dc8]" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {language === "hi" ? "कोई अन्य प्रश्न है?" : "Have a specific question not listed here?"}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {language === "hi"
                ? "हमारी सहायता टीम व्हाट्सएप या कॉल पर तुरंत मदद के लिए उपलब्ध है।"
                : "Chat with an automation specialist directly on WhatsApp."}
            </p>
          </div>
          <a
            href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              "Hi InfiBusiness team, I have a question about your automation services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === "hi" ? "व्हाट्सएप पर पूछें" : "Chat on WhatsApp"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
