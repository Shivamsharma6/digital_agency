import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
  description: siteConfig.hero.supportingCopy,
  keywords: [
    "digital agency India",
    "local business digital transformation",
    "workflow automation",
    "business websites",
    "local SEO India",
    "WhatsApp lead automation",
    "custom business software",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  publisher: siteConfig.brand.name,
  metadataBase: new URL("https://growthwave-digital.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.hero.supportingCopy,
    url: "https://growthwave-digital.example.com",
    siteName: siteConfig.brand.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.hero.supportingCopy,
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
