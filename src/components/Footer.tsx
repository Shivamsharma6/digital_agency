"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t } = useApp();
  const { brand, contact, navLinks, services, ui } = t;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Mission column (spans 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-base tracking-tight shadow-sm">
                GW
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                {brand.name}
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {brand.tagline}. {brand.subheadline}
            </p>

            <div className="pt-2 text-xs text-slate-500">
              <p>Entity: {brand.legalNamePlaceholder}</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {ui.footer.navigation}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {ui.footer.coreServices}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#service-${service.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & WhatsApp */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {ui.footer.directContact}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="font-mono text-xs">{contact.emailPlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{contact.phonePlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{contact.locationPlaceholder}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {brand.name}. {ui.footer.rightsReserved}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              {ui.footer.privacyPolicy}
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              {ui.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
