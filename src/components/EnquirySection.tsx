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
} from "lucide-react";

export function EnquirySection() {
  const { t, language } = useApp();
  const { finalCta, contact, services, industries, ui } = t;

  // Form states
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [contactMethod, setContactMethod] = useState<"phone" | "email" | "both">("phone");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
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
    }
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName =
        language === "hi"
          ? "कृपया अपना पूरा नाम दर्ज करें (कम से कम 2 अक्षर)।"
          : "Please enter your full name (at least 2 characters).";
    }

    if (!businessName.trim() || businessName.trim().length < 2) {
      errs.businessName =
        language === "hi"
          ? "कृपया अपने व्यवसाय या क्लिनिक का नाम दर्ज करें।"
          : "Please enter your business or practice name.";
    }

    if (contactMethod === "email" || contactMethod === "both") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) {
        errs.email =
          language === "hi"
            ? "कृपया एक वैध ईमेल पता दर्ज करें।"
            : "Please enter a valid email address (e.g. name@company.com).";
      }
    }

    if (contactMethod === "phone" || contactMethod === "both") {
      const cleanPhone = phone.replace(/[^\d+]/g, "");
      if (!phone.trim() || cleanPhone.length < 10) {
        errs.phone =
          language === "hi"
            ? "कृपया 10-अंकों का मोबाइल नंबर दर्ज करें।"
            : "Please enter a 10-digit mobile number or full phone with country code.";
      }
    }

    if (!consent) {
      errs.consent =
        language === "hi"
          ? "कृपया पुष्टि करें कि आप इस अनुरोध के संबंध में संपर्क किए जाने के लिए सहमत हैं।"
          : "Please confirm that you agree to be contacted regarding this request.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          businessName,
          contactMethod,
          email,
          phone,
          industry: selectedIndustry || "Not specified",
          serviceOfInterest: selectedService || "General consultation",
          problemDescription,
          consent,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmissionResult({
          success: false,
          message:
            data.error ||
            (language === "hi"
              ? "अनुरोध सबमिट करने में विफल। कृपया पुनः प्रयास करें।"
              : "Failed to submit enquiry. Please try again."),
        });
      } else {
        setSubmissionResult({
          success: true,
          mode: data.mode,
          message:
            language === "hi"
              ? "धन्यवाद! आपका पूछताछ विवरण प्राप्त हो गया है। हमारी टीम 1 कार्यदिवस के भीतर आपसे संपर्क करेगी।"
              : data.message,
        });
        // Reset form on success
        setFullName("");
        setBusinessName("");
        setEmail("");
        setPhone("");
        setProblemDescription("");
        setConsent(false);
        setErrors({});
      }
    } catch {
      setSubmissionResult({
        success: false,
        message:
          language === "hi"
            ? "नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें या व्हाट्सएप पर सीधे संपर्क करें।"
            : "Network error. Please check your internet connection or reach us directly on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp click-to-chat URL
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            {language === "hi" ? "सीधा जुड़ाव" : "Direct Engagement"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {finalCta.supportingCopy}
          </p>
        </div>

        {/* Dual Layout: Form + WhatsApp/Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Comprehensive Enquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {ui.form.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {ui.form.subtitle}
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 hidden sm:block shrink-0" />
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
                aria-live="polite"
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
                          : "Enquiry Received"
                        : language === "hi"
                        ? "सूचना"
                        : "Notice"}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm">
                      {submissionResult.message}
                    </p>
                    {submissionResult.mode === "demo" && (
                      <p className="mt-2 text-xs font-mono bg-white/70 dark:bg-slate-800/80 p-2 rounded border border-emerald-300 dark:border-emerald-700">
                        Developer Info: Configure ENQUIRY_WEBHOOK_URL in .env.local to route leads in production.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name & Business Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {ui.form.fullNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      autoComplete="name"
                      placeholder={ui.form.fullNamePlaceholder}
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) {
                          setErrors((prev) => ({ ...prev, fullName: "" }));
                        }
                      }}
                      aria-invalid={errors.fullName ? "true" : "false"}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
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
                  <div className="relative">
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      placeholder={ui.form.businessNamePlaceholder}
                      value={businessName}
                      onChange={(e) => {
                        setBusinessName(e.target.value);
                        if (errors.businessName) {
                          setErrors((prev) => ({ ...prev, businessName: "" }));
                        }
                      }}
                      aria-invalid={errors.businessName ? "true" : "false"}
                      aria-describedby={errors.businessName ? "businessName-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                  {errors.businessName && (
                    <p id="businessName-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Contact Method Selection */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  {ui.form.contactMethodLabel}
                </span>
                <div className="flex items-center gap-4 text-sm">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={contactMethod === "phone"}
                      onChange={() => setContactMethod("phone")}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{ui.form.phoneOption}</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={contactMethod === "email"}
                      onChange={() => setContactMethod("email")}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{ui.form.emailOption}</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="both"
                      checked={contactMethod === "both"}
                      onChange={() => setContactMethod("both")}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{ui.form.bothOption}</span>
                  </label>
                </div>
              </div>

              {/* Contact Inputs: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(contactMethod === "phone" || contactMethod === "both") && (
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
                      autoComplete="tel"
                      placeholder={ui.form.phonePlaceholder}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: "" }));
                        }
                      }}
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                )}

                {(contactMethod === "email" || contactMethod === "both") && (
                  <div className={contactMethod === "email" ? "sm:col-span-2" : ""}>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                    >
                      {ui.form.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder={ui.form.emailPlaceholder}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: "" }));
                        }
                      }}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>
                )}
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  >
                    <option value="">{ui.form.industryPlaceholder}</option>
                    {industries.map((ind) => (
                      <option key={ind.id} value={ind.id}>
                        {ind.name}
                      </option>
                    ))}
                    <option value="other">{ui.form.otherIndustry}</option>
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  >
                    <option value="">{ui.form.servicePlaceholder}</option>
                    {services.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="all-in-one">{ui.form.allInOneService}</option>
                  </select>
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <label
                  htmlFor="problemDescription"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                >
                  {ui.form.problemLabel}
                </label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  rows={3}
                  placeholder={ui.form.problemPlaceholder}
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />
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
                      if (errors.consent) {
                        setErrors((prev) => ({ ...prev, consent: "" }));
                      }
                    }}
                    className="mt-0.5 rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500"
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{ui.form.submittingButton}</span>
                  </>
                ) : (
                  <>
                    <span>{ui.form.submitButton}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Audit Scope Disclaimer */}
              <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center leading-normal">
                {ui.form.auditScopeNote}
              </p>
            </form>
          </div>

          {/* Right Column: Direct WhatsApp Contact & Transparency Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Direct Card */}
            <div className="bg-emerald-950 text-white rounded-2xl p-7 border border-emerald-800 shadow-card relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-300 text-xs font-semibold mb-4 border border-emerald-700">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  {ui.fastestChannel}
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  {ui.preferWhatsApp}
                </h3>
                <p className="mt-2 text-sm text-emerald-200 leading-relaxed">
                  {language === "hi"
                    ? "अपनी वर्तमान वेबसाइट या गूगल बिजनेस लिस्टिंग के लिंक के साथ हमें सीधा संदेश भेजें। हम व्यावसायिक घंटों के दौरान समीक्षा करेंगे।"
                    : "Send us a direct message with a link to your current website or Google Business listing. We will review it and reply during business hours."}
                </p>

                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>{ui.talkOnWhatsApp}</span>
                  </a>
                </div>

                <p className="mt-3 text-xs text-emerald-300/80 text-center">
                  {contact.whatsappDisplayNumber}
                </p>
              </div>
            </div>

            {/* Why Request an Audit Box */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-subtle">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {ui.whatHappensNext.title}
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-slate-400 dark:text-slate-500 text-xs shrink-0 mt-0.5">
                    1.
                  </span>
                  <span>
                    <strong>{ui.whatHappensNext.step1Title}</strong> {ui.whatHappensNext.step1Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-slate-400 dark:text-slate-500 text-xs shrink-0 mt-0.5">
                    2.
                  </span>
                  <span>
                    <strong>{ui.whatHappensNext.step2Title}</strong> {ui.whatHappensNext.step2Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-slate-400 dark:text-slate-500 text-xs shrink-0 mt-0.5">
                    3.
                  </span>
                  <span>
                    <strong>{ui.whatHappensNext.step3Title}</strong> {ui.whatHappensNext.step3Desc}
                  </span>
                </li>
              </ul>
            </div>

            {/* Business Operating Hours & Details */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{ui.operatingHours}</span>
                <span>{contact.workingHours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{ui.serviceCoverage}</span>
                <span>{language === "hi" ? "अखिल भारतीय रिमोट डिलीवरी" : "Pan-India Remote Delivery"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{ui.directEmail}</span>
                <span className="font-mono">{contact.emailPlaceholder}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
