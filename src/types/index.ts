export interface NavLink {
  label: string;
  href: string;
}

export interface SupportingPoint {
  title: string;
  description: string;
}

export interface BusinessChallenge {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  categoryTag: string;
  summary: string;
  outcome: string;
  capabilities: string[];
  scopeNote?: string;
  iconName: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  subtitle: string;
  workflows: string[];
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverable: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  startingPrice: string;
  billingPeriod: string;
  tagline: string;
  targetAudience: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  scopeNote?: string;
}

export interface EngagementPrinciple {
  title: string;
  description: string;
  iconName: string;
}

export interface ExampleUseCase {
  title: string;
  businessType: string;
  label: string;
  disclaimer: string;
  before: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  after: {
    title: string;
    description: string;
    points: string[];
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EnquiryFormData {
  fullName: string;
  businessName: string;
  contactMethod: 'email' | 'phone' | 'both';
  email: string;
  phone: string;
  industry: string;
  serviceOfInterest: string;
  problemDescription: string;
  consent: boolean;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subheadline: string;
    legalNamePlaceholder: string;
    foundedYear: number;
  };
  contact: {
    emailPlaceholder: string;
    phonePlaceholder: string;
    whatsappNumber: string; // E.g. '919876543210' - placeholder for easy customization
    whatsappDisplayNumber: string;
    whatsappDefaultMessage: string;
    locationPlaceholder: string;
    workingHours: string;
  };
  navLinks: NavLink[];
  hero: {
    headline: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
    supportingPoints: SupportingPoint[];
  };
  challenges: {
    badge: string;
    headline: string;
    intro: string;
    items: BusinessChallenge[];
    summary: string;
  };
  services: ServiceCategory[];
  industries: IndustrySolution[];
  process: ProcessStep[];
  pricing: {
    badge: string;
    headline: string;
    intro: string;
    packages: PricingPackage[];
    disclaimer: string;
  };
  engagement: {
    badge: string;
    headline: string;
    intro: string;
    principles: EngagementPrinciple[];
  };
  exampleUseCase: ExampleUseCase;
  faqs: FAQItem[];
  finalCta: {
    headline: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
    auditDisclaimer: string;
  };
}
