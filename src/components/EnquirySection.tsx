"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  Phone,
  Clock,
  Building2,
  CalendarCheck,
} from "lucide-react";

export function EnquirySection() {
  const { t, language } = useApp();
  const { finalCta, contact, services, industries, ui } = t;

  // Form states
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [consent, setConsent] = useState(false);

  // Interaction & submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    mode?: "demo" | "production";
    message: string;
  } | null>(null);

  // Sync hash or URL query parameters on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("service=")) {
        const s = hash.split("service=")[1]?.split("&")[0];
        if (s) setSelectedService(s);
      }
      if (hash.includes("industry=")) {
        const ind = hash.split("industry=")[1]?.split("&")[0];
        if (ind) setSelectedIndustry(ind);
      }
      if (hash.includes("plan=")) {
        const p = hash.split("plan=")[1]?.split("&")[0];
        if (p) setSelectedService(`Plan: ${p.toUpperCase()}`);
      }
    }
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName =
        language === "hi"
          ? "कृपया अपना पूरा नाम दर्ज करें।"
          : "Please enter your full name.";
    }

    if (!businessName.trim() || businessName.trim().length < 2) {
      errs.businessName =
        language === "hi"
          ? "कृपया अपने व्यवसाय का नाम दर्ज करें।"
          : "Please enter your business or practice name.";
    }

    const cleanPhone = phone.replace(/[^\d+]/g, "");
    if (!phone.trim() || cleanPhone.length < 10) {
      errs.phone =
        language === "hi"
          ? "कृपया 10-अंकों का मोबाइल / व्हाट्सएप नंबर दर्ज करें।"
          : "Please enter a valid 10-digit mobile or WhatsApp number.";
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errs.email =
          language === "hi"
            ? "कृपया एक वैध ईमेल पता दर्ज करें।"
            : "Please enter a valid email address.";
      }
    }

    if (!consent) {
      errs.consent =
        language === "hi"
          ? "कृपया आगे बढ़ने के लिए सहमति दें।"
          : "Please check the box to confirm consent.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    const payload = {
      fullName: fullName.trim(),
      businessName: businessName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      industry: selectedIndustry || "Not specified",
      service: selectedService || "General Enquiry",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmissionResult({
          success: false,
          message: data.error || (language === "hi" ? "त्रुटि हुई। कृपया पुनः प्रयास करें।" : "Failed to submit. Please try again."),
        });
      } else {
        setSubmissionResult({
          success: true,
          mode: data.mode,
          message:
            language === "hi"
              ? "धन्यवाद! आपका विवरण प्राप्त हो गया है। हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।"
              : data.message || "Thank you! Your request has been received. Our team will contact you within 24 hours.",
        });
        setFullName("");
        setBusinessName("");
        setEmail("");
        setPhone("");
        setConsent(false);
        setErrors({});
      }
    } catch {
      setSubmissionResult({
        success: false,
        message:
          language === "hi"
            ? "नेटवर्क त्रुटि। कृपया व्हाट्सएप पर सीधे संपर्क करें।"
            : "Network error. Please try again or message us on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <section id="enquiry" className="py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Top Banner */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#2a9dc8] text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "hi" ? "शुरू करें" : "Get Started Today"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {finalCta.subheadline}
          </p>
          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
            {finalCta.trustNote}
          </div>
        </div>

        {/* Dual Layout: Form + WhatsApp/Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {ui.form.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {ui.form.subtitle}
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#2a9dc8] hidden sm:block shrink-0" />
            </div>

            {/* Submission Status Alert */}
            {submissionResult && (
              <div
                className={`mb-6 p-4 rounded-xl border text-sm leading-relaxed ${
                  submissionResult.success
                    ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                    : "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-red-900 dark:text-red-200"
                }`}
                role="status"
              >
                <div className="flex items-start gap-3">
                  {submissionResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">
                      {submissionResult.success
                        ? language === "hi"
                          ? "पूछताछ प्राप्त हुई"
                          : "Request Submitted Successfully"
                        : "Notice"}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm">
                      {submissionResult.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Business Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {ui.form.fullNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder={ui.form.fullNamePlaceholder}
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9dc8] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {ui.form.businessNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    placeholder={ui.form.businessNamePlaceholder}
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      if (errors.businessName) setErrors((prev) => ({ ...prev, businessName: "" }));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9dc8] transition-colors"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {ui.form.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder={ui.form.phonePlaceholder}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9dc8] transition-colors"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {ui.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={ui.form.emailPlaceholder}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9dc8] transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Industry & Service Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {ui.form.industryLabel}
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2a9dc8] transition-colors"
                  >
                    <option value="">{ui.form.industryPlaceholder}</option>
                    {industries.map((ind) => (
                      <option key={ind.id} value={ind.title}>
                        {ind.title}
                      </option>
                    ))}
                    <option value="Other">Other Business</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {ui.form.serviceLabel}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2a9dc8] transition-colors"
                  >
                    <option value="">{ui.form.servicePlaceholder}</option>
                    <option value="Free Plan Setup">Free Forever Plan (₹0)</option>
                    <option value="Growth Plan">Growth Plan (₹9,999/mo)</option>
                    <option value="Pro Plan">Pro Plan (₹19,999/mo)</option>
                    <option value="Scale Plan">Scale Plan (₹39,999/mo)</option>
                    {services.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title} ({srv.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (errors.consent) setErrors((prev) => ({ ...prev, consent: "" }));
                    }}
                    className="mt-0.5 rounded border-slate-300 text-[#2a9dc8] focus:ring-[#2a9dc8]"
                  />
                  <span className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                    {ui.form.consentText}
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#2a9dc8] text-white hover:bg-[#2286ab] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a9dc8] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{ui.form.submittingBtn}</span>
                  </>
                ) : (
                  <>
                    <span>{ui.form.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
                {language === "hi"
                  ? "🔒 कोई क्रेडिट कार्ड आवश्यक नहीं • 14-दिन का निःशुल्क ट्रायल • आपकी गोपनीयता सुरक्षित है"
                  : "🔒 No credit card required • 14-day free trial on paid plans • Zero risk"}
              </p>
            </form>
          </div>

          {/* Right Column: WhatsApp & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Direct Card */}
            <div className="bg-emerald-950 text-white rounded-2xl p-7 border border-emerald-800 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-300 text-xs font-semibold mb-4 border border-emerald-700">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === "hi" ? "त्वरित प्रतिक्रिया चैनल" : "Fastest Channel"}</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  {language === "hi" ? "व्हाट्सएप पर बात करें" : "Prefer WhatsApp?"}
                </h3>
                <p className="mt-2 text-sm text-emerald-200 leading-relaxed">
                  {language === "hi"
                    ? "सीधे हमारे ऑटोमेशन इंजीनियर से व्हाट्सएप पर बात करें। हम व्यावसायिक घंटों में कुछ ही मिनटों में उत्तर देते हैं।"
                    : "Message our team directly with your business name and website. We'll reply within minutes during business hours."}
                </p>

                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>{language === "hi" ? "व्हाट्सएप पर चैट करें" : "Chat on WhatsApp"}</span>
                  </a>
                </div>

                <p className="mt-3 text-xs text-emerald-300/80 text-center font-mono">
                  {contact.whatsappDisplayNumber}
                </p>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-[#2a9dc8]" />
                <span>{language === "hi" ? "इसके बाद क्या होता है?" : "What Happens Next?"}</span>
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#2a9dc8] text-xs shrink-0 mt-0.5">
                    1.
                  </span>
                  <span>
                    <strong>{language === "hi" ? "30-मिनट का लाइव डेमो:" : "Live 30-min walkthrough:"}</strong>{" "}
                    {language === "hi"
                      ? "हम आपके उद्योग के लिए तैयार वास्तविक वर्कफ़्लो और पाइपलाइन दिखाते हैं।"
                      : "We show you the exact CRM, chatbot, and booking setup for your business."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#2a9dc8] text-xs shrink-0 mt-0.5">
                    2.
                  </span>
                  <span>
                    <strong>{language === "hi" ? "5-7 दिनों में लाइव:" : "Live in 5–7 days:"}</strong>{" "}
                    {language === "hi"
                      ? "हमारी टीम सभी तकनीकी एकीकरण, व्हाट्सएप और सीआरएम सेट अप करती है।"
                      : "We connect your website, ads, phone, and WhatsApp without you doing any tech work."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#2a9dc8] text-xs shrink-0 mt-0.5">
                    3.
                  </span>
                  <span>
                    <strong>{language === "hi" ? "14-दिवसीय निःशुल्क ट्रायल:" : "14-day free trial:"}</strong>{" "}
                    {language === "hi"
                      ? "पूरी प्रणाली का निःशुल्क परीक्षण करें। कोई क्रेडिट कार्ड नहीं, कोई जोखिम नहीं।"
                      : "Test everything in action. Continue only if you see real bookings and leads."}
                  </span>
                </li>
              </ul>
            </div>

            {/* Business Contact Info Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#2a9dc8]" />
                  Sales:
                </span>
                <a href={`tel:${contact.salesPhone.replace(/\s+/g, "")}`} className="text-[#2a9dc8] font-bold">
                  {contact.salesPhone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#2a9dc8]" />
                  HR:
                </span>
                <a href={`tel:${contact.hrPhone.replace(/\s+/g, "")}`} className="text-slate-700 dark:text-slate-300 font-medium">
                  {contact.hrPhone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Hours:
                </span>
                <span>{contact.workingHours}</span>
              </div>
              <div className="flex items-start justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shrink-0 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  Office:
                </span>
                <span className="text-right text-[11px] leading-relaxed max-w-[240px]">{contact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
