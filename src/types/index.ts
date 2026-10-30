export interface NavLink {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface InfiService {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface InfiIndustry {
  id: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

export interface InfiProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface InfiPricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  trial: string;
  tagline: string;
  popular?: boolean;
  features: {
    included: boolean;
    text: string;
  }[];
  cta: string;
}

export interface ComparisonRow {
  feature: string;
  free: string;
  growth: string;
  pro: string;
  scale: string;
}

export interface InfiTestimonial {
  quote: string;
  name: string;
  business: string;
  location: string;
  rating: number;
}

export interface InfiFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subheadline: string;
    legalName: string;
    sinceYear: number;
  };
  contact: {
    salesPhone: string;
    hrPhone: string;
    whatsappNumber: string;
    whatsappDisplayNumber: string;
    whatsappDefaultMessage: string;
    email: string;
    address: string;
    workingHours: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    headlineAccent: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: MetricItem[];
  };
  trustedBy: string[];
  servicesBadge: string;
  servicesHeadline: string;
  servicesSubheadline: string;
  services: InfiService[];
  processBadge: string;
  processHeadline: string;
  processSubheadline: string;
  processSteps: InfiProcessStep[];
  industriesBadge: string;
  industriesHeadline: string;
  industriesSubheadline: string;
  industries: InfiIndustry[];
  pricingBadge: string;
  pricingHeadline: string;
  pricingHeadlineAccent: string;
  pricingSubheadline: string;
  freePlan: {
    badge: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  pricingPlans: InfiPricingPlan[];
  comparisonRows: ComparisonRow[];
  testimonialsBadge: string;
  testimonialsHeadline: string;
  testimonials: InfiTestimonial[];
  faqBadge: string;
  faqHeadline: string;
  faqs: InfiFAQ[];
  finalCta: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustNote: string;
  };
}
