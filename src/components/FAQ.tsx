"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export function FAQ() {
  const { t, language } = useApp();
  const { faqs, ui } = t;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200 dark:border-slate-700">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            {language === "hi" ? "स्पष्ट उत्तर" : "Clear Answers"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {language === "hi"
              ? "हमारे साथ काम करने, हमारे दायरे, अपेक्षाओं और पारदर्शी शर्तों के बारे में सीधे और व्यावहारिक उत्तर।"
              : "Practical, direct answers about working with us, our scope, expectations, and transparent terms."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-colors bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
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
                    className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-in fade-in-50 duration-150"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {language === "hi"
              ? "क्या आपके पास अपने उद्योग या मौजूदा सॉफ़्टवेयर से संबंधित कोई प्रश्न है?"
              : "Have a question specific to your industry or existing software?"}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {language === "hi"
              ? "हम एक ईमानदार, बिना किसी दबाव के तकनीकी राय देने में प्रसन्न हैं।"
              : "We are happy to provide an honest, no-pressure technical opinion."}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <span>{ui.askDirectly}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
