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
  title: "AI Automation for Local Businesses | Infibusiness Solution",
  description:
    "Infibusiness sets up CRM, AI chatbots, booking automation and review systems so local businesses capture leads, book faster and grow on autopilot.",
  keywords: [
    "AI automation local business",
    "CRM automation India",
    "Infibusiness Solution",
    "WhatsApp lead automation",
    "LeadFlow",
    "BookSmart",
    "ChatPilot",
    "ReputeUp",
    "AI voice agent India",
  ],
  authors: [{ name: "Infibusiness Solution" }],
  creator: "Infibusiness Solution",
  publisher: "Infibusiness Solution",
  metadataBase: new URL("https://infibusiness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Automation for Local Businesses | Infibusiness Solution",
    description:
      "Infibusiness sets up CRM, AI chatbots, booking automation and review systems so local businesses capture leads, book faster and grow on autopilot.",
    url: "https://infibusiness.com",
    siteName: "Infibusiness Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Local Businesses | Infibusiness Solution",
    description:
      "Infibusiness sets up CRM, AI chatbots, booking automation and review systems so local businesses capture leads, book faster and grow on autopilot.",
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
