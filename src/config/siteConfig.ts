import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brand: {
    name: "Infibusiness Solution",
    tagline: "AI Automation for Local Businesses",
    subheadline:
      "We set up and manage enterprise-grade CRM, AI chatbots, booking automation, and reputation systems — so your business captures more leads and converts them while you focus on your work.",
    legalName: "Infibusiness Solution",
    sinceYear: 2015,
  },
  contact: {
    salesPhone: "+91 74900 23036",
    hrPhone: "+91 70413 60736",
    whatsappNumber: "917490023036",
    whatsappDisplayNumber: "+91 74900 23036",
    whatsappDefaultMessage:
      "Hello! I am interested in AI Automation solutions for my business.",
    email: "info@infibusiness.com",
    address:
      "316 Lotus Aura 2, Opp. Lillerria Party Plot, Nr IOCL Petrol Pump, Sama Savli Road, Vadodara, Gujarat 390024",
    workingHours: "Monday to Saturday, 9:30 AM – 6:30 PM IST",
  },
  hero: {
    badge: "• AI Automation · Built for Local Businesses",
    headlinePart1: "Your Business,",
    headlinePart2: "Growing on",
    headlineAccent: "Autopilot.",
    subheadline:
      "We set up and manage enterprise-grade CRM, AI chatbots, booking automation, and reputation systems — so your business captures more leads and converts them while you focus on your work.",
    ctaPrimary: "Start Free — No Card Needed",
    ctaSecondary: "Book A Demo",
    metrics: [
      { value: "2,000+", label: "Businesses automated" },
      { value: "4.9★", label: "Google rating" },
      { value: "Since 2015", label: "Pioneering automation" },
      { value: "14-Day", label: "Free trial on paid plans" },
    ],
  },
  trustedBy: [
    "Salons & Spas",
    "Clinics & Hospitals",
    "Gyms & Fitness",
    "Real Estate Agencies",
    "Manufacturers",
    "Coaching Institutes",
  ],
  servicesBadge: "10 Automation Services",
  servicesHeadline: "Everything Your Business Needs,",
  servicesSubheadline:
    "We set up, configure, and run every system inside your account — no technical skills required.",
  services: [
    {
      id: "leadflow",
      title: "LeadFlow",
      category: "Lead Capture & CRM",
      description:
        "Every enquiry gets an instant WhatsApp reply within 60 seconds — day or night — automatically.",
      tag: "Lead Capture & CRM",
      iconName: "Zap",
    },
    {
      id: "booksmart",
      title: "BookSmart",
      category: "Appointments & Booking",
      description:
        "Online booking, WhatsApp reminders, and no-show recovery — your calendar fills itself.",
      tag: "Appointments & Booking",
      iconName: "Calendar",
    },
    {
      id: "chatpilot",
      title: "ChatPilot",
      category: "AI Chatbot",
      description:
        "AI chatbot on your website and WhatsApp answers questions and books appointments 24/7.",
      tag: "AI Chatbot",
      iconName: "Bot",
    },
    {
      id: "reputeup",
      title: "ReputeUp",
      category: "Reviews & Reputation",
      description:
        "Collect 5x more Google reviews after every visit — with negative feedback handled privately.",
      tag: "Reviews & Reputation",
      iconName: "Star",
    },
    {
      id: "workease",
      title: "WorkEase",
      category: "Workflow Automation",
      description:
        "Connect all your tools and eliminate manual tasks with custom automation workflows built for your process.",
      tag: "Workflow Automation",
      iconName: "Workflow",
    },
    {
      id: "voiceagent",
      title: "VoiceAgent",
      category: "AI Voice Calling",
      description:
        "An AI that calls your leads within minutes — qualifies them, books appointments, and confirms visits.",
      tag: "AI Voice Calling",
      iconName: "PhoneCall",
    },
    {
      id: "insightdesk",
      title: "InsightDesk",
      category: "Reporting & Analytics",
      description:
        "Live dashboard showing every metric — leads, revenue, reviews, and ad ROI — all in one place.",
      tag: "Reporting & Analytics",
      iconName: "BarChart3",
    },
    {
      id: "selleasy",
      title: "SellEasy",
      category: "Sales Funnels",
      description:
        "High-converting landing pages and sales funnels that capture leads and follow them up automatically.",
      tag: "Sales Funnels",
      iconName: "Layers",
    },
    {
      id: "postpilot",
      title: "PostPilot",
      category: "Social Media",
      description:
        "AI writes and auto-publishes your social media content every month — zero effort from you.",
      tag: "Social Media",
      iconName: "Share2",
    },
    {
      id: "loyalloop",
      title: "LoyalLoop",
      category: "Retention",
      description:
        "Win back lapsed customers with birthday campaigns, loyalty rewards, and automated re-engagement.",
      tag: "Retention",
      iconName: "RefreshCcw",
    },
  ],
  processBadge: "How It Works",
  processHeadline: "Set Up Once. Works Forever.",
  processSubheadline:
    "We do all the technical work. You get a fully automated business system live in 5–7 days.",
  processSteps: [
    {
      step: 1,
      title: "Connect All Your Channels",
      description:
        "We link your website, WhatsApp Business, Facebook ads, Google Ads, and phone number into one unified system.",
    },
    {
      step: 2,
      title: "Automations Go Live",
      description:
        "Instant lead follow-ups, booking reminders, review requests, and AI calls start running 24/7 without you touching anything.",
    },
    {
      step: 3,
      title: "We Optimise Every Month",
      description:
        "We review performance monthly and continuously refine your workflows, sequences, and conversion rates.",
    },
  ],
  industriesBadge: "6 Industries",
  industriesHeadline: "Built for Your Industry",
  industriesSubheadline:
    "Every setup is configured specifically for your business type — not a generic template.",
  industries: [
    {
      id: "salons",
      title: "Salons & Spas",
      icon: "💇",
      description:
        "Fill every chair, eliminate no-shows, and build your Google reputation automatically.",
      tags: ["BookSmart", "ReputeUp", "LoyalLoop"],
    },
    {
      id: "clinics",
      title: "Clinics & Healthcare",
      icon: "🏥",
      description:
        "Zero no-shows, 5-star reviews, and 24/7 patient enquiry handling — all automated.",
      tags: ["BookSmart", "VoiceAgent", "ReputeUp"],
    },
    {
      id: "fitness",
      title: "Gyms & Fitness",
      icon: "💪",
      description:
        "Convert more trials, reduce churn, and grow your social media on autopilot.",
      tags: ["LeadFlow", "LoyalLoop", "PostPilot"],
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: "🏭",
      description:
        "Automate B2B enquiry follow-up and never lose a lead to slow response times again.",
      tags: ["WorkEase", "LeadFlow", "InsightDesk"],
    },
    {
      id: "realestate",
      title: "Real Estate",
      icon: "🏠",
      description:
        "Respond to property enquiries in 60 seconds and book site visits automatically.",
      tags: ["LeadFlow", "VoiceAgent", "SellEasy"],
    },
    {
      id: "coaching",
      title: "Coaching & Education",
      icon: "🎓",
      description:
        "Triple your demo-to-enrolment rate with automated follow-ups and referrals.",
      tags: ["SellEasy", "WorkEase", "LoyalLoop"],
    },
  ],
  pricingBadge: "Pricing",
  pricingHeadline: "Start Free.",
  pricingHeadlineAccent: "Scale When Ready.",
  pricingSubheadline:
    "14-day free trial on all paid plans. No credit card. Cancel any time.",
  freePlan: {
    badge: "Free Forever · No Credit Card",
    title: "Start with Our Free Plan",
    description:
      "Get a basic automation set up. Test everything before you commit to a paid plan.",
    features: [
      "Basic CRM setup",
      "Missed call text-back",
      "LeadFlow 50 leads/mo",
    ],
    cta: "Apply for Free",
  },
  pricingPlans: [
    {
      id: "growth",
      name: "Growth",
      price: "₹9,999",
      period: "/month",
      trial: "✓ 14-Day Free Trial",
      tagline:
        "The complete starter stack for local service businesses ready to automate their customer journey.",
      features: [
        { included: true, text: "Everything in Free plan" },
        { included: true, text: "Full CRM + pipeline configured" },
        { included: true, text: "LeadFlow — unlimited leads" },
        { included: true, text: "BookSmart booking system" },
        { included: true, text: "ChatPilot AI chatbot" },
        { included: true, text: "ReputeUp review automation" },
        { included: true, text: "PostPilot — 10 posts/month" },
        { included: true, text: "Priority WhatsApp support" },
        { included: false, text: "WorkEase workflows" },
        { included: false, text: "VoiceAgent AI calls" },
      ],
      cta: "Start 14-Day Trial",
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹19,999",
      period: "/month",
      trial: "✓ 14-Day Free Trial",
      tagline:
        "The full AI-powered engine for ambitious businesses ready to dominate their local market.",
      popular: true,
      features: [
        { included: true, text: "Everything in Growth" },
        { included: true, text: "WorkEase — 5 custom workflows" },
        { included: true, text: "InsightDesk live dashboard" },
        { included: true, text: "SellEasy — 1 funnel/month" },
        { included: true, text: "LoyalLoop retention system" },
        { included: true, text: "VoiceAgent — 100 AI calls/mo" },
        { included: true, text: "PostPilot — 30 posts/month" },
        { included: true, text: "Dedicated account manager" },
        { included: true, text: "Monthly performance review" },
        { included: true, text: "Custom automation design" },
      ],
      cta: "Start 14-Day Trial",
    },
    {
      id: "scale",
      name: "Scale",
      price: "₹39,999",
      period: "/month",
      trial: "✓ 14-Day Free Trial",
      tagline:
        "All 10 services fully activated. Multi-location, white-label, and unlimited everything.",
      features: [
        { included: true, text: "Everything in Pro" },
        { included: true, text: "All 10 services activated" },
        { included: true, text: "Unlimited WorkEase workflows" },
        { included: true, text: "VoiceAgent — unlimited calls" },
        { included: true, text: "Multi-location support" },
        { included: true, text: "White-label your own brand" },
        { included: true, text: "Custom API integrations" },
        { included: true, text: "Monthly 1-hr strategy call" },
        { included: true, text: "2-hour SLA support guarantee" },
      ],
      cta: "Start 14-Day Trial",
    },
  ],
  comparisonRows: [
    { feature: "CRM & pipeline setup", free: "Basic", growth: "Full", pro: "Full", scale: "Full" },
    { feature: "Missed call text-back", free: "✓", growth: "✓", pro: "✓", scale: "✓" },
    { feature: "LeadFlow — lead capture", free: "50/mo", growth: "Unlimited", pro: "Unlimited", scale: "Unlimited" },
    { feature: "BookSmart — booking system", free: "×", growth: "✓", pro: "✓", scale: "✓" },
    { feature: "ChatPilot — AI chatbot", free: "×", growth: "✓", pro: "✓", scale: "✓" },
    { feature: "ReputeUp — review automation", free: "×", growth: "✓", pro: "✓", scale: "✓" },
    { feature: "PostPilot — social content", free: "×", growth: "10/mo", pro: "30/mo", scale: "60/mo" },
    { feature: "WorkEase — workflow automation", free: "×", growth: "×", pro: "5 flows", scale: "Unlimited" },
    { feature: "InsightDesk — live dashboard", free: "×", growth: "×", pro: "✓", scale: "✓" },
    { feature: "SellEasy — funnels & pages", free: "×", growth: "×", pro: "1/mo", scale: "Unlimited" },
    { feature: "LoyalLoop — retention system", free: "×", growth: "×", pro: "✓", scale: "✓" },
    { feature: "VoiceAgent — AI calls", free: "×", growth: "×", pro: "100/mo", scale: "Unlimited" },
    { feature: "Multi-location support", free: "×", growth: "×", pro: "×", scale: "✓" },
    { feature: "White-label your brand", free: "×", growth: "×", pro: "×", scale: "✓" },
    { feature: "Dedicated account manager", free: "×", growth: "×", pro: "✓", scale: "✓" },
    { feature: "Monthly strategy call", free: "×", growth: "×", pro: "×", scale: "✓" },
    { feature: "14-day free trial", free: "—", growth: "✓", pro: "✓", scale: "✓" },
  ],
  testimonialsBadge: "Client Results",
  testimonialsHeadline: "2,000+ Businesses Growing Smarter",
  testimonials: [
    {
      quote:
        "We were losing leads every evening. Now every enquiry gets an instant WhatsApp reply. Bookings doubled in 6 weeks. I finally understand exactly how our business is growing.",
      name: "Priya Kapoor",
      business: "Beauty Salon",
      location: "Mumbai",
      rating: 5,
    },
    {
      quote:
        "Our clinic had 18 Google reviews. After 3 months of automated review requests, we have 94 reviews at 4.9 stars. New patients mention our rating every day when they call.",
      name: "Dr. Deepak Verma",
      business: "Multi-Specialty Clinic",
      location: "Vadodara",
      rating: 5,
    },
    {
      quote:
        "Our enquiry-to-invoice workflow had 12 manual steps. WorkEase reduced that to 3 automated ones. We now process twice the orders with the same team and zero data errors.",
      name: "Mahesh Joshi",
      business: "Industrial Manufacturer",
      location: "Surat",
      rating: 5,
    },
  ],
  faqBadge: "FAQ",
  faqHeadline: "Common Questions",
  faqs: [
    {
      id: "free-plan",
      question: "Is the Free plan really free forever?",
      answer:
        "Yes — completely free, no credit card, no trial period. You get a basic automation setup. Upgrade any time you're ready.",
    },
    {
      id: "trial-works",
      question: "How does the 14-day trial work?",
      answer:
        "We fully set up your chosen plan during the trial. Use everything for 14 days at zero cost. If you love it, continue. If not, cancel and pay nothing.",
    },
    {
      id: "technical-knowledge",
      question: "Do I need technical knowledge?",
      answer:
        "Zero. We build, configure, and manage everything. You only need to respond to the leads our system delivers to your WhatsApp.",
    },
    {
      id: "cancel-anytime",
      question: "Can I cancel any time?",
      answer:
        "Yes — no long-term contracts. Cancel before your next billing date. Your data stays accessible for 30 days after cancellation.",
    },
    {
      id: "how-long-live",
      question: "How long until I'm live?",
      answer:
        "Most clients are fully live in 5–7 business days. Scale plan onboarding takes 2–3 weeks for full custom setup.",
    },
    {
      id: "white-label",
      question: "What does white-label mean?",
      answer:
        "Scale plan clients can have the entire automation system branded under their own business name — perfect for agencies or multi-brand businesses.",
    },
  ],
  finalCta: {
    headline: "Ready to Put Your Business on Autopilot?",
    subheadline:
      "Start with our free plan — your business website and automation go live in 5–7 days. No credit card, no commitment.",
    ctaPrimary: "Start Free — No Card Needed",
    ctaSecondary: "Book a Demo Call",
    trustNote: "⚡ Live in 5–7 days • 14-day trial on paid plans • 2,000+ businesses trust us",
  },
};
