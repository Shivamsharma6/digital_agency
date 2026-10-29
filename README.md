# GrowthWave Digital — Landing Page for Digital Growth & Automation

A responsive, production-quality landing page built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** for a digital growth, automation, and custom software consultancy helping local businesses in India.

---

## Key Features & Highlights

- **B2B Tech Consultancy Positioning**: Communicates digital presence, customer acquisition, workflow automation, and custom software under one roof.
- **Dark Mode Support**: Seamless toggle between light and dark themes using Tailwind `class` mode, FOUC prevention script, native `color-scheme` synchronization, and `localStorage` persistence.
- **Bilingual Support (English & हिंदी)**: Seamless in-place language switching between English and authentic, professional Hindi for all 12 sections, form controls, validation, and FAQ.
- **Centralized Configuration (`src/config/siteConfig.ts` & `src/config/translations.ts`)**: Edit brand name, contact details, phone, WhatsApp number, pricing packages, FAQs, and industry workflows in centralized dictionaries without modifying component logic.
- **Modern Web Standards**:
  - Semantic HTML (`header`, `nav`, `main`, `section`, `footer`).
  - Native accessible form validation utilizing `:user-invalid` and `:user-valid` patterns from modern web guidance.
  - Complete ARIA accessibility tags (`aria-describedby`, `aria-errormessage`, `aria-expanded`).
  - Mobile-responsive navigation and smooth anchor scrolling.
  - Transparent pricing disclaimer and no fabricated metrics or fake reviews.
- **Lead Generation & Conversion Flow**:
  - Working lead enquiry form with full-name, business name, contact preference (WhatsApp/Phone/Email), industry selector, service selector, and consent verification.
  - Backend API endpoint (`/api/enquiry`) with input validation, sanitization, and honest demo fallback logging.
  - Direct 1-click WhatsApp CTA and floating button.
- **Technical SEO & Performance**:
  - OpenGraph & Twitter Cards metadata.
  - `sitemap.xml` and `robots.txt` dynamic generation.
  - Clean `Schema.org` `ProfessionalService` structured data.

---

## Project Structure

```
digital_agency/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── enquiry/
│   │   │       └── route.ts          # API route handling lead form submissions
│   │   ├── privacy/
│   │   │   └── page.tsx              # Transparent Privacy Policy placeholder
│   │   ├── terms/
│   │   │   └── page.tsx              # Transparent Terms of Service placeholder
│   │   ├── globals.css               # Design system & :user-invalid form styles
│   │   ├── layout.tsx                # Root layout with fonts, SEO & viewport
│   │   ├── page.tsx                  # Main page assembling all 12 sections
│   │   ├── robots.ts                 # Dynamic robots.txt
│   │   └── sitemap.ts                # Dynamic sitemap.xml
│   ├── components/
│   │   ├── Navbar.tsx                # Responsive header with mobile drawer
│   │   ├── Hero.tsx                  # Hero with interactive ecosystem mockup
│   │   ├── BusinessChallenges.tsx    # 6 common local business bottlenecks
│   │   ├── Services.tsx              # 5 core services with outcomes & capabilities
│   │   ├── IndustrySolutions.tsx     # 6 industry-specific solution cards
│   │   ├── Process.tsx               # 4-step execution timeline (Discover, Plan, Build, Improve)
│   │   ├── Pricing.tsx               # 3 starting packages with transparent disclaimers
│   │   ├── WorkingTogether.tsx       # 6 engagement principles & transparency
│   │   ├── UseCaseStudy.tsx          # Illustrative gym operational transformation
│   │   ├── FAQ.tsx                   # 10 accessible accordion questions & answers
│   │   ├── EnquirySection.tsx        # High-conversion audit request form + WhatsApp card
│   │   ├── Footer.tsx                # Complete footer with brand, links & copyright
│   │   └── WhatsAppFloatingButton.tsx# Accessible quick-action floating WhatsApp pill
│   ├── config/
│   │   └── siteConfig.ts             # Centralized source of truth for all content & settings
│   └── types/
│       └── index.ts                  # TypeScript interfaces for all data structures
├── .env.example                      # Documented environment variables
├── tailwind.config.ts                # Custom colors (deep navy, charcoal, brand blues)
└── package.json
```

---

## Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** (or Node 20+) installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build and Run Production Server
```bash
npm run build
npm run start
```

### 5. Run Linting and Type Checking
```bash
npm run lint
```

---

## How to Customize Brand & Business Details

All placeholder content is stored in [`src/config/siteConfig.ts`](./src/config/siteConfig.ts).

### Replace Brand Information
Edit the `brand` block:
```typescript
brand: {
  name: "Your Agency Name",
  tagline: "Your Value Proposition",
  subheadline: "Your Subtitle",
  legalNamePlaceholder: "Your Registered Legal Entity",
  foundedYear: 2024,
}
```

### Replace WhatsApp and Contact Details
Edit the `contact` block:
```typescript
contact: {
  emailPlaceholder: "contact@yourdomain.com",
  phonePlaceholder: "+91 98765 43210",
  whatsappNumber: "919876543210", // 10-digit number with 91 country code, no + or spaces
  whatsappDisplayNumber: "+91 98765 43210",
  whatsappDefaultMessage: "Hello! I am interested in exploring digital growth and automation solutions for my business.",
  locationPlaceholder: "Bengaluru, India",
  workingHours: "Monday to Saturday, 9:30 AM – 6:30 PM IST",
}
```

### Adjust Indicative Pricing
Edit `pricing.packages`:
```typescript
{
  id: "digital-foundation",
  name: "Digital Foundation",
  startingPrice: "₹9,999",
  billingPeriod: "one-time",
  ...
}
```

---

## Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `ENQUIRY_WEBHOOK_URL` | Optional webhook URL (Zapier, Make, Slack, n8n, CRM) to receive lead form submissions. When absent, the API runs in **local demonstration mode** and logs submissions to the server console. |
| `NEXT_PUBLIC_SITE_URL` | Base production domain for OpenGraph cards and canonical URLs (e.g., `https://yourdomain.com`). |
