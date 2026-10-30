import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1522" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Moon Digital Solutions | AI Automation & Growth Agency for Local Businesses",
  description:
    "Moon Digital Solutions sets up CRM pipelines, AI voice agents, WhatsApp booking automation, and 5-star Google review engines for businesses in Patna and Pan-India.",
  keywords: [
    "Moon Digital Solutions",
    "AI automation Patna",
    "digital marketing Patna",
    "CRM automation Bihar",
    "WhatsApp lead automation India",
    "LeadFlow",
    "BookSmart",
    "ChatPilot",
    "ReputeUp",
    "AI voice agent India",
  ],
  authors: [{ name: "Moon Digital Solutions" }],
  creator: "Moon Digital Solutions",
  publisher: "Moon Digital Solutions",
  metadataBase: new URL("https://digitalagency-chi-eosin.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moon Digital Solutions | AI Automation & Growth Agency",
    description:
      "Moon Digital Solutions sets up CRM pipelines, AI voice agents, WhatsApp booking automation, and 5-star Google review engines for businesses in Patna and Pan-India.",
    url: "https://digitalagency-chi-eosin.vercel.app",
    siteName: "Moon Digital Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon Digital Solutions | AI Automation & Growth Agency",
    description:
      "Moon Digital Solutions sets up CRM pipelines, AI voice agents, WhatsApp booking automation, and 5-star Google review engines for businesses in Patna and Pan-India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('color-scheme') || localStorage.getItem('theme');
                  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored === 'dark' || (!stored && systemDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  var storedLang = localStorage.getItem('app_lang');
                  if (storedLang === 'hi' || storedLang === 'en') {
                    document.documentElement.lang = storedLang;
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-white text-slate-900 dark:bg-[#0b1522] dark:text-slate-100 selection:bg-[#eaf6fb] selection:text-[#2a9dc8] dark:selection:bg-[#1a6f8f]/40 dark:selection:text-[#7fd4f4] transition-colors duration-200`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
