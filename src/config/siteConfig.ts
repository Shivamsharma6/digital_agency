import { SiteConfig } from "@/types";

/**
 * Centralized Configuration for Brand, Contact, Services, Pricing, and Content.
 * 
 * Replace placeholder values here to customize the site for a specific brand or client.
 */
export const siteConfig: SiteConfig = {
  brand: {
    name: "GrowthWave Digital",
    tagline: "Digital Growth & Automation for Indian Businesses",
    subheadline: "Websites, Marketing, Workflows & Custom Software Under One Roof",
    legalNamePlaceholder: "[Registered Entity Name / Sole Proprietorship Placeholder]",
    foundedYear: 2024,
  },
  contact: {
    emailPlaceholder: "contact@yourdomain.com",
    phonePlaceholder: "+91 98765 43210",
    whatsappNumber: "919876543210", // Format: Country code + 10 digits without '+' or spaces
    whatsappDisplayNumber: "+91 98765 43210",
    whatsappDefaultMessage: "Hello! I am interested in exploring digital growth and automation solutions for my business.",
    locationPlaceholder: "Bengaluru / Mumbai / Delhi NCR, India (Serving businesses pan-India)",
    workingHours: "Monday to Saturday, 9:30 AM – 6:30 PM IST",
  },
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Us", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: "Grow Your Business. Work Smarter. Go Digital.",
    supportingCopy:
      "We help local businesses attract more customers, build a stronger online presence, and automate everyday work through websites, digital marketing, and practical technology.",
    primaryCta: "Get a Free Digital Audit",
    secondaryCta: "Explore Our Services",
    supportingPoints: [
      {
        title: "Built around your business goals",
        description: "Tailored to your specific customer acquisition needs, not generic one-size templates.",
      },
      {
        title: "Technology that solves real problems",
        description: "Practical digital tools that save staff hours and prevent missed customer enquiries.",
      },
      {
        title: "One partner from digital presence to automation",
        description: "A single team handling web design, marketing visibility, workflow automations, and custom tools.",
      },
    ],
  },
  challenges: {
    badge: "Common Business Bottlenecks",
    headline: "Your Business Deserves More Than Just an Online Presence.",
    intro:
      "Having a basic social profile or an outdated website is rarely enough. Many local enterprises struggle with disconnected systems that leak potential revenue and drain productive hours.",
    items: [
      {
        id: "discovery",
        title: "Customers cannot easily find the business online",
        description:
          "High-intent local searches in your neighborhood lead to competitors because your digital footprint and local listings are incomplete or unoptimized.",
        iconName: "SearchX",
      },
      {
        id: "followup",
        title: "Enquiries arrive but are not followed up consistently",
        description:
          "Customer messages on WhatsApp, Instagram, or phone calls get lost during busy operating hours, leading to cold leads and lost bookings.",
        iconName: "UserX",
      },
      {
        id: "conversion",
        title: "The website fails to turn visitors into customers",
        description:
          "Pages take too long to load on mobile, lack clear service information, or have confusing contact forms that discourage buyers.",
        iconName: "TrendingDown",
      },
      {
        id: "tracking",
        title: "Marketing activity lacks clear performance tracking",
        description:
          "Spending money on promotions or posts without knowing which channels actually generate genuine calls, visits, or paid customers.",
        iconName: "BarChart3",
      },
      {
        id: "admin",
        title: "Repetitive administrative work consumes valuable time",
        description:
          "Staff spend hours manually copying customer details into spreadsheets, sending manual reminders, or answering repetitive queries.",
        iconName: "Clock",
      },
      {
        id: "silos",
        title: "Business tools operate in disconnected silos",
        description:
          "Billing, messaging, CRM, and order records do not speak to one another, creating duplicate data entry and avoidable errors.",
        iconName: "Unlink2",
      },
    ],
    summary:
      "We help connect these fragmented pieces into a coherent, high-performing business system that attracts enquiries, nurtures leads, and simplifies daily operations.",
  },
  services: [
    {
      id: "websites",
      title: "Websites & Digital Presence",
      categoryTag: "Digital Foundation",
      summary:
        "Modern, fast-loading, mobile-first websites designed to turn local visitors into qualified enquiries.",
      outcome:
        "Help customers discover your business and make it effortless for them to take immediate action.",
      capabilities: [
        "Business websites and high-converting landing pages",
        "E-commerce websites and digital storefronts",
        "Mobile-friendly customer experiences (tested across all screen sizes)",
        "Website redesign, security, and performance improvements",
        "Google Business Profile optimization and local map presence",
        "Basic technical SEO, schema markup, and search indexing",
        "Online service catalogues, interactive menus, and enquiry forms",
      ],
      iconName: "Globe",
    },
    {
      id: "marketing",
      title: "Digital Marketing & Content",
      categoryTag: "Customer Acquisition",
      summary:
        "Targeted local marketing strategies designed to generate genuine customer calls, visits, and bookings.",
      outcome:
        "Improve your business visibility across search and social channels to generate relevant local enquiries.",
      capabilities: [
        "Local SEO to rank in nearby customer searches",
        "Social media content strategy and profile management",
        "Short-form video and educational content planning",
        "Search-optimized blog and service page content",
        "Paid campaign setup, audience targeting, and ad optimization",
        "Landing-page conversion rate optimization (CRO)",
        "Transparent monthly performance and enquiry reporting",
      ],
      scopeNote:
        "Third-party advertising budget paid to ad platforms (Google/Meta) and intensive on-site video production are scoped separately based on campaign goals.",
      iconName: "TrendingUp",
    },
    {
      id: "automation",
      title: "Workflow Automation",
      categoryTag: "Operational Efficiency",
      summary:
        "Connect your communication channels and tools to eliminate repetitive tasks and ensure zero missed leads.",
      outcome:
        "Reduce manual administrative work and respond to customer enquiries instantly and consistently.",
      capabilities: [
        "Instant multi-channel lead capture and tracking",
        "Automated customer enquiry follow-up sequences",
        "Appointment confirmations and WhatsApp/SMS booking reminders",
        "Lightweight CRM setup and customer pipeline configuration",
        "Form-to-CRM, spreadsheet, and email integrations",
        "Weekly and monthly automated management reporting",
        "API integration between existing business tools and accounting software",
      ],
      iconName: "Cpu",
    },
    {
      id: "custom-software",
      title: "Custom Software & Business Tools",
      categoryTag: "Tailored Technology",
      summary:
        "Bespoke internal software, customer portals, and digitised operational tools built around your exact business model.",
      outcome:
        "Replace clunky spreadsheets and unsuitable off-the-shelf software with purpose-built digital tools.",
      capabilities: [
        "Internal operational dashboards and KPI trackers",
        "Inventory tracking and custom order management tools",
        "Secure customer self-service and staff management portals",
        "Custom web applications with role-based permissions",
        "Cross-platform mobile application development",
        "Custom API bridges connecting proprietary systems",
        "End-to-end paperless business process digitization",
      ],
      scopeNote:
        "Custom software solutions require an initial technical discovery phase, wireframing, and an itemized development proposal.",
      iconName: "Code2",
    },
    {
      id: "ai-solutions",
      title: "AI & Productivity Solutions",
      categoryTag: "Applied Intelligence",
      summary:
        "Pragmatic AI integrations that assist staff, summarize documents, and resolve routine customer queries without overpromising.",
      outcome:
        "Apply artificial intelligence where it genuinely removes operational drag rather than adding unnecessary complexity.",
      capabilities: [
        "AI-assisted customer support workflows and FAQ triage",
        "Internal knowledge assistants for staff SOPs and policies",
        "Intelligent document parsing and invoice data extraction",
        "AI-assisted business reporting, trend analysis, and summarization",
        "Repetitive digital task automation and data formatting",
        "Employee productivity toolkits and prompt workflows",
        "Sensible AI adoption guidance, security guardrails, and implementation",
      ],
      scopeNote:
        "We implement practical, supervised automation workflows. We do not promise unmonitored autonomous business operations or speculative financial windfalls.",
      iconName: "Sparkles",
    },
  ],
  industries: [
    {
      id: "clinics",
      name: "Clinics & Dental Practices",
      subtitle: "Healthcare & Wellness Providers",
      workflows: [
        "Clean, trustworthy clinic website with treatment breakdowns",
        "Optimized Google Business Profile for local patient discovery",
        "Automated WhatsApp appointment confirmations and reminders",
        "Patient enquiry intake and automated review collection",
      ],
      iconName: "Stethoscope",
    },
    {
      id: "fitness",
      name: "Gyms & Fitness Studios",
      subtitle: "Health Clubs & Personal Trainers",
      workflows: [
        "Trial-class booking landing pages and local campaign setup",
        "Instant WhatsApp enquiry capture and follow-up sequence",
        "Automated membership renewal alerts and drop-off recovery",
        "Simple trainer schedule and attendance tracking tools",
      ],
      iconName: "Dumbbell",
    },
    {
      id: "coaching",
      name: "Coaching Institutes & Academies",
      subtitle: "Education & Test Prep Centers",
      workflows: [
        "Course landing pages with syllabus download gates",
        "Admissions enquiry tracking and counsellor follow-up CRM",
        "Batch announcement and parent communication automation",
        "Fee reminder workflows and enquiry status dashboards",
      ],
      iconName: "GraduationCap",
    },
    {
      id: "restaurants",
      name: "Restaurants & Cafés",
      subtitle: "Hospitality & Food Outlets",
      workflows: [
        "Fast-loading mobile digital menus and outlet websites",
        "Local map presence to capture nearby dining searches",
        "Private dining, catering, and event booking enquiry flows",
        "Customer feedback collection and Google review prompts",
      ],
      iconName: "Utensils",
    },
    {
      id: "retail",
      name: "Retail & Local Showrooms",
      subtitle: "Shops & Home-Service Providers",
      workflows: [
        "Digital product catalogues browsable on smartphones",
        "Click-to-WhatsApp product enquiry and stock availability checks",
        "Local promotional campaign setup and customer re-engagement",
        "Centralized enquiry logging for floor sales representatives",
      ],
      iconName: "ShoppingBag",
    },
    {
      id: "manufacturing",
      name: "Distributors & Manufacturers",
      subtitle: "B2B Suppliers & Small Factories",
      workflows: [
        "Professional B2B digital catalogue and quote request forms",
        "Order management and shipment status notification tools",
        "Simple raw material and finished goods inventory trackers",
        "Automated customer invoice delivery and payment reminders",
      ],
      iconName: "Factory",
    },
  ],
  process: [
    {
      step: 1,
      title: "Discover",
      subtitle: "Understanding your current reality",
      description:
        "We audit your existing digital footprint, customer journey, and operational bottlenecks. We identify where enquiries are slipping through the cracks and where manual work is draining time.",
      keyDeliverable: "Audit summary and prioritized opportunity roadmap",
    },
    {
      step: 2,
      title: "Plan",
      subtitle: "Defining scope, architecture & milestones",
      description:
        "We present transparent recommendations tailored to your budget and growth targets. We clearly define what will be built, timeline milestones, third-party software needs, and expected outcomes.",
      keyDeliverable: "Transparent implementation plan and fixed-scope quotation",
    },
    {
      step: 3,
      title: "Build",
      subtitle: "Execution, integration & testing",
      description:
        "We build your website, configure marketing campaigns, set up automation rules, or develop custom software tools. We conduct rigorous cross-device and error-handling tests before launch.",
      keyDeliverable: "Production-ready digital assets and validated workflows",
    },
    {
      step: 4,
      title: "Improve",
      subtitle: "Handover, measurement & refinement",
      description:
        "We provide clear documentation and staff training. We measure agreed indicators, fine-tune messaging or automation steps, and provide structured ongoing support as your business expands.",
      keyDeliverable: "System handover, admin credentials, and monthly reviews",
    },
  ],
  pricing: {
    badge: "Transparent Starting Packages",
    headline: "Predictable Investment for Real Business Impact",
    intro:
      "We believe in straightforward pricing with zero hidden fees. Choose an initial package or talk with us for a custom engagement tailored to your specific scope.",
    packages: [
      {
        id: "digital-foundation",
        name: "Digital Foundation",
        startingPrice: "₹9,999",
        billingPeriod: "one-time",
        tagline: "Essential digital presence to get discovered and convert local searches.",
        targetAudience: "Businesses establishing or refreshing their core online presence.",
        features: [
          "Modern, fast-loading business website or multi-section landing page",
          "Mobile-responsive design optimized for smartphones and tablets",
          "Custom lead capture form with instant email notification",
          "One-click WhatsApp contact integration with custom greeting",
          "Google Business Profile setup guidance & local map readiness",
          "Basic technical SEO (meta tags, sitemap, indexing setup)",
          "Domain & hosting configuration with complete asset handover",
        ],
        ctaText: "Get Started with Foundation",
      },
      {
        id: "growth-partner",
        name: "Growth Partner",
        startingPrice: "₹9,999",
        billingPeriod: "/ month",
        tagline: "Continuous marketing, local search optimization, and lead generation.",
        targetAudience: "Established businesses seeking steady monthly enquiry growth.",
        isPopular: true,
        features: [
          "Agreed monthly content planning and local SEO improvements",
          "Regular Google Business Profile posts, updates, and Q&A management",
          "Ongoing website performance checks and minor content updates",
          "Customer review collection workflow and reputation guidance",
          "Clear monthly lead, traffic, and enquiry performance report",
          "Monthly 45-minute strategy and optimization review call",
          "Priority technical support and emergency website assistance",
        ],
        ctaText: "Choose Growth Partner",
        scopeNote: "Ad spend paid directly to ad networks and intensive custom video shoots are scoped separately.",
      },
      {
        id: "automation-productivity",
        name: "Automation & Productivity",
        startingPrice: "₹14,999",
        billingPeriod: "one-time",
        tagline: "Custom workflow automation to eliminate manual tasks and follow up faster.",
        targetAudience: "Businesses with steady enquiries needing faster response times.",
        features: [
          "Operational workflow discovery session with process mapping",
          "One fully implemented multi-step automation workflow (e.g. Lead to CRM to WhatsApp alert)",
          "Integration between your website, enquiry channels, and Google Sheets/CRM",
          "Automated customer acknowledgment sequence (Email/WhatsApp)",
          "End-to-end integration testing and edge-case validation",
          "Recorded video walkthrough and staff operating documentation",
          "14 days of post-deployment monitoring and bug fixes included",
        ],
        ctaText: "Request Automation Setup",
        scopeNote: "Multi-branch logic, proprietary software integrations, or recurring workflow management quoted after discovery.",
      },
    ],
    disclaimer:
      "All prices are indicative starting prices. Final pricing depends on requirements, scope, third-party software, integrations, and implementation complexity. Applicable taxes and external platform costs are additional where relevant.",
  },
  engagement: {
    badge: "Our Principles",
    headline: "What Working Together Looks Like",
    intro:
      "We operate as an extension of your business. We build credibility through process clarity, realistic expectations, and respectful communication—never high-pressure sales.",
    principles: [
      {
        title: "Clear Deliverables & Timelines",
        description:
          "Every project begins with a documented scope, clear milestones, and estimated completion dates. You always know what is being built and when.",
        iconName: "CalendarCheck",
      },
      {
        title: "Transparent Scope & Pricing",
        description:
          "No surprises or unannounced add-ons. If requirements evolve, we discuss scope adjustments and budget implications before writing code.",
        iconName: "Receipt",
      },
      {
        title: "Practical Recommendations",
        description:
          "We recommend only the technology your business actually needs today. We never push complex, expensive software when a clean, simple tool solves the problem.",
        iconName: "ShieldCheck",
      },
      {
        title: "Client Ownership & Access",
        description:
          "You retain 100% ownership of your domains, accounts, digital assets, code, and customer data. We never hold client accounts hostage.",
        iconName: "KeyRound",
      },
      {
        title: "Clear Handover & Documentation",
        description:
          "Every deliverable includes straightforward documentation and video guides so your internal staff can confidently handle routine tasks.",
        iconName: "FileCheck2",
      },
      {
        title: "Reliable Ongoing Support",
        description:
          "Whether you need monthly maintenance, occasional updates, or support scaling into custom software, we offer flexible post-launch support arrangements.",
        iconName: "Headphones",
      },
    ],
  },
  exampleUseCase: {
    title: "How an Integrated Digital System Works in Practice",
    businessType: "Local Fitness Studio & Gym",
    label: "Illustrative Scenario",
    disclaimer:
      "This is an illustrative scenario representing a typical operational workflow transformation, not an actual client case study or a guarantee of specific commercial results.",
    before: {
      title: "Before: Disconnected Channels & Lost Enquiries",
      description:
        "The studio spent money on social media ads and local flyers, but experienced high drop-offs due to manual bottlenecks:",
      points: [
        "Enquiries trickled in through Instagram DMs, phone calls, and WhatsApp at random hours.",
        "Front desk staff recorded prospect details manually in physical diaries or fragmented personal WhatsApp chats.",
        "Follow-ups for free trial classes were inconsistent, often occurring 24 to 48 hours later when interest had cooled.",
        "The studio owner had no clear visibility into how many trial enquiries actually converted into paid monthly memberships.",
      ],
    },
    solution: {
      title: "Proposed Solution: An Integrated Acquisition & Booking System",
      description:
        "We designed a cohesive, automated workflow connecting marketing, capture, and front-desk notifications:",
      points: [
        "A fast, mobile-friendly landing page highlighting studio facilities, trainer credentials, and class schedules.",
        "An intuitive trial booking form capturing the prospect's preferred workout time and fitness goals.",
        "Immediate automated WhatsApp confirmation to the prospect with studio location pin and trial instructions.",
        "Instant notification dispatched to the front-desk staff dashboard to follow up within 15 minutes.",
        "Centralized lead pipeline in a shared tracker with automated trial reminder 2 hours prior to class.",
      ],
    },
    after: {
      title: "Intended Operational Transformation",
      description:
        "The operational improvement streamlined staff time and created a consistent prospect experience:",
      points: [
        "Zero enquiries slipped through the cracks during busy floor hours or weekends.",
        "Prospects received immediate professional responses, building trust before visiting the facility.",
        "Front-desk staff spent less time typing repetitive messages and more time welcoming visitors in person.",
        "Management gained weekly visibility into enquiry volumes, trial attendance, and renewal trends.",
      ],
    },
  },
  faqs: [
    {
      id: "small-businesses",
      question: "Do you work with small businesses?",
      answer:
        "Yes, absolutely. Our core focus is helping local enterprises, service professionals, clinics, and growing SMBs establish credible digital presence and automate time-consuming administrative tasks. We design our packages to be accessible without sacrificing engineering quality.",
    },
    {
      id: "website-prerequisite",
      question: "Do I need a website before working with you?",
      answer:
        "No. If you do not have an existing website, we can build your digital foundation from scratch—including domain setup, website architecture, copywriting guidance, and mobile optimization.",
    },
    {
      id: "existing-website",
      question: "Can you work with my existing website?",
      answer:
        "Yes. If your current website is functional, we can review its technical health, improve mobile responsiveness, optimize conversion points, or connect workflow automations (such as WhatsApp alerts and CRM integrations) without requiring a full rebuild.",
    },
    {
      id: "ongoing-support",
      question: "Do you provide ongoing support?",
      answer:
        "Yes. We offer both monthly retainer partnerships (covering updates, SEO, and ongoing improvements) and ad-hoc hourly support agreements. All project handovers also include complete documentation so your team can handle basic updates independently.",
    },
    {
      id: "custom-application",
      question: "Can you build a custom application?",
      answer:
        "Yes. While we start with high-impact web and automation setups, our team has full-stack software engineering capability. We build custom client portals, internal operational tools, inventory trackers, and proprietary web applications following a dedicated discovery and scoping phase.",
    },
    {
      id: "ad-software-costs",
      question: "Do I need to pay separately for advertising or software?",
      answer:
        "Yes. Third-party advertising budgets (such as Google Ads or Meta Ads) are paid directly to those respective platforms using your corporate billing account. Similarly, third-party software subscriptions (such as custom CRM seats or business WhatsApp API provider fees) are billed directly to your business to maintain full account ownership.",
    },
    {
      id: "timeline",
      question: "How long does a typical project take?",
      answer:
        "A foundational website or landing page typically takes 1 to 2 weeks from content approval. Standard workflow automations are usually configured and validated within 5 to 10 working days. Custom software applications follow agreed milestones based on the discovery scope.",
    },
    {
      id: "automate-workflow",
      question: "Can you automate my existing workflow?",
      answer:
        "In most cases, yes. If your tools support webhooks, APIs, or common integration platforms (such as Google Workspace, common CRMs, or WhatsApp business tooling), we can design automated workflows to pass data seamlessly and eliminate manual copy-pasting.",
    },
    {
      id: "guarantees",
      question: "Do you guarantee rankings or leads?",
      answer:
        "No, and we advise caution regarding anyone who does. Search engine algorithms and consumer purchasing decisions depend on market competition, product-market fit, and local factors outside any agency's unilateral control. We commit to industry-standard technical best practices, transparent reporting, and continuous data-informed optimization.",
    },
    {
      id: "get-started",
      question: "How do I get started?",
      answer:
        "The easiest way is to request a Free Digital Audit using our online form or message us directly on WhatsApp. We will perform an initial review of your current digital touchpoints and schedule a brief discovery call to discuss practical improvement opportunities.",
    },
  ],
  finalCta: {
    headline: "Let's Find the Right Digital Opportunities for Your Business.",
    supportingCopy:
      "Tell us how your business operates today. We'll help identify practical ways to improve your digital presence, customer acquisition, or everyday workflows.",
    primaryCta: "Request a Free Digital Audit",
    secondaryCta: "Talk to Us on WhatsApp",
    auditDisclaimer:
      "A free digital audit is a preliminary, high-level review of your current online discoverability and enquiry touchpoints, provided with zero sales obligation.",
  },
};
