"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppFloatingButton() {
  const { contact } = siteConfig;
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional dismissible prompt */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-slate-200 animate-in fade-in slide-in-from-right-3 duration-200">
          <span>Need a quick answer? Chat with us</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Dismiss WhatsApp popup helper"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="w-13 h-13 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
