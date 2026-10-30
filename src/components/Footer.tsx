"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useApp();
  const { brand, contact, services, industries, ui } = t;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Address column (spans 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2a9dc8] rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#2a9dc8] flex items-center justify-center text-white font-extrabold text-base tracking-tight shadow-sm">
                IB
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg tracking-tight leading-none">
                  Infi<span className="text-[#2a9dc8]">Business</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                  Solution
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {brand.tagline}. {brand.subheadline}
            </p>

            {/* Address */}
            <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-400 max-w-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-[#2a9dc8] shrink-0 mt-0.5" />
              <span>{contact.address}</span>
            </div>

            {/* Sales, HR, Email */}
            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2a9dc8]" />
                <span className="text-slate-400">{ui.footer.salesCall}</span>
                <a href={`tel:${contact.salesPhone.replace(/\s+/g, "")}`} className="text-white hover:text-[#2a9dc8] font-medium">
                  {contact.salesPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2a9dc8]" />
                <span className="text-slate-400">{ui.footer.hrCall}</span>
                <a href={`tel:${contact.hrPhone.replace(/\s+/g, "")}`} className="text-white hover:text-[#2a9dc8] font-medium">
                  {contact.hrPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2a9dc8]" />
                <a href={`mailto:${contact.email}`} className="text-slate-300 hover:text-white font-medium">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* 10 Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {ui.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {services.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={`#service-${srv.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 6 Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {ui.footer.industriesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {industries.map((ind) => (
                <li key={ind.id}>
                  <a
                    href="#industries"
                    className="hover:text-white transition-colors"
                  >
                    {ind.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & WhatsApp */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {ui.footer.exploreTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {ui.navServices}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {ui.navWhoWeAre}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {ui.navPricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-white transition-colors">
                  {ui.startFree}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                  contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {brand.legalName}. {ui.footer.rightsReserved}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              {ui.footer.privacyPolicy}
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              {ui.footer.termsOfService}
            </Link>
            <Link
              href="/refund"
              className="hover:text-slate-300 transition-colors"
            >
              {ui.footer.refundPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
