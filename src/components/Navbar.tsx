"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
  Globe,
  ChevronDown,
} from "lucide-react";

export function Navbar() {
  const { t, language, setLanguage, theme, toggleTheme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0b1522]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800"
          : "bg-white/90 dark:bg-[#0b1522]/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* InfiBusiness Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2a9dc8] rounded-lg p-1"
            aria-label={`${t.brand.name} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2a9dc8] to-[#1a6f8f] flex items-center justify-center text-white font-extrabold text-xl shadow-sm tracking-tight group-hover:scale-105 transition-transform">
              <span className="font-mono text-2xl font-black">∞</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-xl leading-tight flex items-center gap-1">
                {t.brand.name}
              </span>
              <span className="text-[11px] text-[#2a9dc8] font-bold tracking-wider uppercase">
                {language === "hi" ? "एआई ऑटोमेशन" : "AI Automation"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            aria-label="Main Navigation"
          >
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href="#services"
                className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2a9dc8] dark:hover:text-[#7fd4f4] rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors inline-flex items-center gap-1"
              >
                <span>{t.ui.navServices}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white dark:bg-[#101f33] rounded-2xl shadow-elevated border border-slate-200 dark:border-slate-800 p-3 grid grid-cols-2 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {t.services.map((srv) => (
                    <a
                      key={srv.id}
                      href={`#service-${srv.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="p-2 rounded-lg hover:bg-[#eaf6fb] dark:hover:bg-slate-800/80 transition-colors group"
                    >
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#2a9dc8] dark:group-hover:text-[#7fd4f4]">
                        {srv.title}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {srv.tag}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <a
                href="#industries"
                className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2a9dc8] dark:hover:text-[#7fd4f4] rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors inline-flex items-center gap-1"
              >
                <span>{t.ui.navIndustries}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {industriesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white dark:bg-[#101f33] rounded-2xl shadow-elevated border border-slate-200 dark:border-slate-800 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {t.industries.map((ind) => (
                    <a
                      key={ind.id}
                      href={`#industry-${ind.id}`}
                      onClick={() => setIndustriesOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#eaf6fb] dark:hover:bg-slate-800/80 transition-colors group"
                    >
                      <span className="text-base">{ind.icon}</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#2a9dc8] dark:group-hover:text-[#7fd4f4]">
                        {ind.title}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#how-it-works"
              className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2a9dc8] dark:hover:text-[#7fd4f4] rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              {language === "hi" ? "कार्यप्रणाली" : "How It Works"}
            </a>

            <a
              href="#pricing"
              className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2a9dc8] dark:hover:text-[#7fd4f4] rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              {t.ui.navPricing}
            </a>

            <a
              href="#faq"
              className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2a9dc8] dark:hover:text-[#7fd4f4] rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              {language === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "FAQ"}
            </a>

            <a
              href="#contact"
              className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2a9dc8] dark:hover:text-[#7fd4f4] rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              {t.ui.navContactUs}
            </a>
          </nav>

          {/* Controls: Language + Dark Mode + CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-[#eaf6fb] dark:hover:bg-slate-800 hover:text-[#2a9dc8] dark:hover:text-[#7fd4f4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2a9dc8]"
              aria-label={t.ui.languageToggle}
              title={t.ui.languageToggle}
            >
              <Globe className="w-3.5 h-3.5 text-[#2a9dc8]" />
              <span>{language === "en" ? "हिंदी" : "English"}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2a9dc8]"
              aria-label={theme === "dark" ? t.ui.lightModeToggle : t.ui.darkModeToggle}
              title={theme === "dark" ? t.ui.lightModeToggle : t.ui.darkModeToggle}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Book a Demo Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span>{t.ui.bookDemo}</span>
            </a>

            {/* Start Free Button */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#2a9dc8] text-white hover:bg-[#2286ab] shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2a9dc8]"
            >
              <span>{t.ui.startFree}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 rounded text-xs font-bold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label={t.ui.languageToggle}
            >
              {language === "en" ? "हिं" : "EN"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label={theme === "dark" ? t.ui.lightModeToggle : t.ui.darkModeToggle}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2a9dc8]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1522] px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-1">
            <a
              href="#services"
              onClick={closeMenu}
              className="px-3 py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-[#2a9dc8] rounded-lg"
            >
              {t.ui.navServices} (10 Services)
            </a>
            <a
              href="#industries"
              onClick={closeMenu}
              className="px-3 py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-[#2a9dc8] rounded-lg"
            >
              {t.ui.navIndustries} (6 Industries)
            </a>
            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="px-3 py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-[#2a9dc8] rounded-lg"
            >
              {language === "hi" ? "कार्यप्रणाली" : "How It Works"}
            </a>
            <a
              href="#pricing"
              onClick={closeMenu}
              className="px-3 py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-[#2a9dc8] rounded-lg"
            >
              {t.ui.navPricing}
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="px-3 py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-[#2a9dc8] rounded-lg"
            >
              {language === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "FAQ"}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-[#2a9dc8] rounded-lg"
            >
              {t.ui.navContactUs}
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <a
              href="#pricing"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-bold bg-[#2a9dc8] text-white hover:bg-[#2286ab] shadow-sm"
            >
              <span>{t.ui.startFree}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-bold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            >
              <span>{t.ui.bookDemo}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
