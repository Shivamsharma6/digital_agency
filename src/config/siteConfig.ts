import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brand: {
    name: "Moon Digital Solutions",
    tagline: "AI Automation & Digital Growth for Local Businesses",
    subheadline:
      "We set up and manage enterprise-grade CRM, AI chatbots, WhatsApp booking automation, and 5-star reputation systems — helping ambitious businesses in Patna and across India capture leads, convert clients, and scale on autopilot.",
    legalName: "Moon Digital Solutions Pvt. Ltd.",
    sinceYear: 2018,
  },
  contact: {
    salesPhone: "+91 97710 42389",
    hrPhone: "+91 97710 42390",
    whatsappNumber: "919771042389",
    whatsappDisplayNumber: "+91 97710 42389",
    whatsappDefaultMessage:
      "Hello Moon Digital team! I want to automate and grow my business with AI solutions.",
    email: "contact@moondigital.in",
    address:
      "4th Floor, Grand Chandra Complex, Fraser Road / Boring Road, Patna, Bihar 800001",
    workingHours: "Monday to Saturday, 9:30 AM – 7:00 PM IST",
  },
  hero: {
    badge: "🌙 Moon Digital Solutions · Bihar & Pan-India AI Automation",
    headlinePart1: "Your Business,",
    headlinePart2: "Growing on",
    headlineAccent: "Autopilot.",
    subheadline:
      "We set up and manage enterprise-grade CRM, AI chatbots, WhatsApp booking systems, and Google review engines — so your business captures more leads and converts them 24/7 while you focus on your work.",
    ctaPrimary: "Start Free — No Card Needed",
    ctaSecondary: "Book A Demo",
    metrics: [
      { value: "500+", label: "Businesses automated" },
      { value: "4.9★", label: "Google rating" },
      { value: "Patna & Pan-India", label: "Local presence & scale" },
      { value: "14-Day", label: "Free trial on paid plans" },
    ],
  },
  trustedBy: [
    "Patna Clinics & Doctors",
    "Boring Road Coaching Hubs",
    "Luxury Salons & Spas",
    "Gyms & Fitness Studios",
    "Real Estate Developers",
    "Manufacturers & Distributors",
  ],
  servicesBadge: "10 Automation Services",
  servicesHeadline: "Everything Your Business Needs,",
  servicesSubheadline:
    "We configure, deploy, and manage every automation directly inside your account — zero technical headaches for you.",
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
        "An AI that calls your leads in minutes — qualifies them, books appointments, and confirms visits.",
      tag: "AI Voice Calling",
      iconName: "PhoneCall",
    },
    {
      id: "insightdesk",
      title: "InsightDesk",
      category: "Reporting & Analytics",
      description:
        "Live dashboard showing every metric — leads, revenue, reviews, and ad ROI — in one place.",
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
    "Moon Digital handles all technical execution. You get a fully automated business system live in 5–7 days.",
  processSteps: [
    {
      step: 1,
      title: "Connect All Your Channels",
      description:
        "We link your website, WhatsApp Business, Meta ads, Google Business Profile, and phone number into one unified system.",
    },
    {
      step: 2,
      title: "Automations Go Live",
      description:
        "Instant lead follow-ups, appointment reminders, Google review collection, and AI voice calls run 24/7 without you lifting a finger.",
    },
    {
      step: 3,
      title: "We Optimise Every Month",
      description:
        "Our team reviews your conversion analytics monthly and continuously refines workflows, follow-up messages, and booking rates.",
    },
  ],
  industriesBadge: "6 Industries",
  industriesHeadline: "Built for Your Industry",
  industriesSubheadline:
    "Every automation stack is custom-tailored for your specific business model — not a generic template.",
  industries: [
    {
      id: "salons",
      title: "Salons & Spas",
      icon: "💇",
      description:
        "Fill appointment slots, eliminate weekend no-shows, and build your local Google reputation automatically.",
      tags: ["BookSmart", "ReputeUp", "LoyalLoop"],
    },
    {
      id: "clinics",
      title: "Clinics & Healthcare",
      icon: "🏥",
      description:
        "Zero patient no-shows, 5-star Google ratings, and 24/7 enquiry handling — all automated on WhatsApp.",
      tags: ["BookSmart", "VoiceAgent", "ReputeUp"],
    },
    {
      id: "fitness",
      title: "Gyms & Fitness Studios",
      icon: "💪",
      description:
        "Convert trial passes into paid memberships, automate renewal reminders, and boost retention on autopilot.",
      tags: ["LeadFlow", "LoyalLoop", "PostPilot"],
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Distributors",
      icon: "🏭",
      description:
        "Automate B2B wholesale enquiries, follow up quotes instantly, and never lose an order to slow replies.",
      tags: ["WorkEase", "LeadFlow", "InsightDesk"],
    },
    {
      id: "realestate",
      title: "Real Estate & Builders",
      icon: "🏠",
      description:
        "Respond to property enquiries in under 60 seconds and schedule verified site visits automatically.",
      tags: ["LeadFlow", "VoiceAgent", "SellEasy"],
    },
    {
      id: "coaching",
      title: "Coaching & Institutes",
      icon: "🎓",
      description:
        "Double your demo-to-admission rate with automated WhatsApp lead tracking, parent reminders, and course updates.",
      tags: ["SellEasy", "WorkEase", "LoyalLoop"],
    },
  ],
  pricingBadge: "Pricing",
  pricingHeadline: "Start Free.",
  pricingHeadlineAccent: "Scale When Ready.",
  pricingSubheadline:
    "14-day free trial on all paid plans. No credit card required. Cancel any time.",
  freePlan: {
    badge: "Free Forever · No Credit Card",
    title: "Start with Our Free Plan",
    description:
      "Get a basic automation system set up. Test real results for your business before committing to a paid plan.",
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
  testimonialsBadge: "Client Results · Patna & Beyond",
  testimonialsHeadline: "Ambitious Patna Businesses Growing Smarter",
  testimonials: [
    {
      quote:
        "In Patna's competitive coaching hub on Boring Road, parents enquire at odd hours. Before Moon Digital, our counselors were missing 40% of evening leads. With LeadFlow and automated WhatsApp demo booking, our demo-to-admission rate jumped by 65% this session.",
      name: "Alok Kumar",
      business: "Apex IIT-JEE & Medical Academy",
      location: "Boring Road, Patna",
      rating: 5,
    },
    {
      quote:
        "Our clinic in Kankarbagh relied solely on word of mouth with just 14 reviews on Google. Moon Digital set up ReputeUp and WhatsApp appointment reminders. We now have 180+ verified 4.9-star reviews, and our daily patient no-shows dropped to almost zero.",
      name: "Dr. Rajiv Ranjan",
      business: "Patna Smile Dental & Implant Clinic",
      location: "Kankarbagh, Patna",
      rating: 5,
    },
    {
      quote:
        "Managing weekend booking chaos on Bailey Road was a nightmare for our staff. BookSmart and LoyalLoop automated our client slots, bridal enquiries, and birthday reward messages. Our repeat bookings are up 85% with zero manual follow-ups.",
      name: "Priya Sahay",
      business: "Velvet Glow Luxury Salon & Spa",
      location: "Bailey Road, Patna",
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
        "We fully configure and activate your chosen plan during the trial. Use everything for 14 days at zero cost. If you love the results, continue. If not, cancel with zero charges.",
    },
    {
      id: "technical-knowledge",
      question: "Do I need technical knowledge?",
      answer:
        "Zero. Moon Digital builds, configures, and manages everything. You only need to respond to the qualified leads our system delivers to your WhatsApp.",
    },
    {
      id: "cancel-anytime",
      question: "Can I cancel any time?",
      answer:
        "Yes — no long-term lock-in contracts. Cancel before your next billing date. Your data stays accessible and exportable for 30 days after cancellation.",
    },
    {
      id: "how-long-live",
      question: "How long until my automations go live?",
      answer:
        "Most clients are fully live in 5–7 business days. Scale plan onboarding takes 2–3 weeks for full custom enterprise setup.",
    },
    {
      id: "white-label",
      question: "What does white-label mean?",
      answer:
        "Scale plan clients can have the entire automation system branded under their own business name — ideal for agencies or multi-branch operations.",
    },
  ],
  finalCta: {
    headline: "Ready to Put Your Business on Autopilot?",
    subheadline:
      "Start with our free plan — your business automations and CRM pipeline go live in 5–7 days. No credit card, no commitment.",
    ctaPrimary: "Start Free — No Card Needed",
    ctaSecondary: "Book a Demo Call",
    trustNote: "⚡ Live in 5–7 days • 14-day trial on paid plans • Trusted by top Patna businesses",
  },
};
