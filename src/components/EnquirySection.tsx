"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function EnquirySection() {
  const { finalCta, contact, services, industries } = siteConfig;

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
      errs.fullName = "Please enter your full name (at least 2 characters).";
    }

    if (!businessName.trim() || businessName.trim().length < 2) {
      errs.businessName = "Please enter your business or practice name.";
    }

    if (contactMethod === "email" || contactMethod === "both") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) {
        errs.email = "Please enter a valid email address (e.g. name@company.com).";
      }
    }

    if (contactMethod === "phone" || contactMethod === "both") {
      const cleanPhone = phone.replace(/[^\d+]/g, "");
      if (!phone.trim() || cleanPhone.length < 10) {
        errs.phone = "Please enter a 10-digit mobile number or full phone with country code.";
      }
    }

    if (!consent) {
      errs.consent = "Please confirm that you agree to be contacted regarding this request.";
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
          message: data.error || "Failed to submit enquiry. Please try again.",
        });
      } else {
        setSubmissionResult({
          success: true,
          mode: data.mode,
          message: data.message,
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
        message: "Network error. Please check your internet connection or reach us directly on WhatsApp.",
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
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Direct Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {finalCta.supportingCopy}
          </p>
        </div>

        {/* Dual Layout: Form + WhatsApp/Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Comprehensive Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-9 border border-slate-200 shadow-card">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Request a Free Digital Audit & Discovery Call
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below for a structured preliminary assessment.
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-blue-600 hidden sm:block shrink-0" />
            </div>

            {/* Submission Status Alert */}
            {submissionResult && (
              <div
                className={`mb-6 p-4 rounded-xl border text-sm leading-relaxed ${
                  submissionResult.success
                    ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                    : "bg-red-50 border-red-200 text-red-900"
                }`}
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  {submissionResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">
                      {submissionResult.success ? "Enquiry Received" : "Notice"}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm">
                      {submissionResult.message}
                    </p>
                    {submissionResult.mode === "demo" && (
                      <p className="mt-2 text-xs font-mono bg-white/70 p-2 rounded border border-emerald-300">
                        Developer Info: To forward enquiries to your real inbox or CRM, define ENQUIRY_WEBHOOK_URL in .env.local.
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
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) {
                          setErrors((prev) => ({ ...prev, fullName: "" }));
                        }
                      }}
                      aria-invalid={errors.fullName ? "true" : "false"}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Business / Practice Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      placeholder="e.g. Apex Health Clinic"
                      value={businessName}
                      onChange={(e) => {
                        setBusinessName(e.target.value);
                        if (errors.businessName) {
                          setErrors((prev) => ({ ...prev, businessName: "" }));
                        }
                      }}
                      aria-invalid={errors.businessName ? "true" : "false"}
                      aria-describedby={errors.businessName ? "businessName-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                  {errors.businessName && (
                    <p id="businessName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Contact Method Selection */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Preferred Contact Method
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
                    <span className="text-slate-800 font-medium">WhatsApp / Phone</span>
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
                    <span className="text-slate-800 font-medium">Email</span>
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
                    <span className="text-slate-800 font-medium">Both</span>
                  </label>
                </div>
              </div>

              {/* Contact Inputs: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(contactMethod === "phone" || contactMethod === "both") && (
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: "" }));
                        }
                      }}
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                )}

                {(contactMethod === "email" || contactMethod === "both") && (
                  <div className={contactMethod === "email" ? "sm:col-span-2" : ""}>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="rahul@clinic.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: "" }));
                        }
                      }}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
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
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Your Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  >
                    <option value="">Select your industry...</option>
                    {industries.map((ind) => (
                      <option key={ind.id} value={ind.id}>
                        {ind.name}
                      </option>
                    ))}
                    <option value="other">Other Local Business / Service</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Primary Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  >
                    <option value="">Select service focus...</option>
                    {services.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="all-in-one">Comprehensive Growth & Automation</option>
                  </select>
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <label
                  htmlFor="problemDescription"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  Brief Overview of Your Current Challenge or Goal (Optional)
                </label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  rows={3}
                  placeholder="e.g. We get enquiries on WhatsApp but staff forget to follow up, and our current website does not look professional on smartphones."
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
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
                    className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    I agree to be contacted via WhatsApp, phone, or email regarding this digital audit request. We respect your privacy and will never share your details with third parties.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-slate-900 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Your Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Free Digital Audit Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Audit Scope Disclaimer */}
              <p className="text-[11px] text-slate-400 text-center leading-normal">
                {finalCta.auditDisclaimer}
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
                  Fastest Response Channel
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  Prefer to Chat on WhatsApp?
                </h3>
                <p className="mt-2 text-sm text-emerald-200 leading-relaxed">
                  Send us a direct message with a link to your current website or Google Business listing. We will review it and reply during business hours.
                </p>

                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>Talk to Us on WhatsApp</span>
                  </a>
                </div>

                <p className="mt-3 text-xs text-emerald-300/80 text-center">
                  Direct number: {contact.whatsappDisplayNumber}
                </p>
              </div>
            </div>

            {/* Why Request an Audit Box */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-subtle">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                What Happens After You Submit?
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-slate-400 text-xs shrink-0 mt-0.5">
                    1.
                  </span>
                  <span>
                    <strong>Preliminary Review:</strong> We inspect your website speed, Google Maps profile, and mobile experience.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-slate-400 text-xs shrink-0 mt-0.5">
                    2.
                  </span>
                  <span>
                    <strong>Discovery Call:</strong> A brief 15–20 minute conversation to discuss your customer acquisition bottlenecks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-slate-400 text-xs shrink-0 mt-0.5">
                    3.
                  </span>
                  <span>
                    <strong>Actionable Roadmap:</strong> Honest recommendations with transparent costs—with zero obligation to hire us.
                  </span>
                </li>
              </ul>
            </div>

            {/* Business Operating Hours & Details */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">Operating Hours:</span>
                <span>{contact.workingHours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">Service Coverage:</span>
                <span>Pan-India Remote Delivery</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">Direct Email:</span>
                <span className="font-mono">{contact.emailPlaceholder}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
