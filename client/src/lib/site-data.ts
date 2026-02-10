import {
  UserCheck,
  Receipt,
  Award,
  Building2,
  ShieldCheck,
  FileText,
  Search,
  Send,
  ClipboardCheck,
  Rocket,
  IndianRupee,
  Eye,
  MessageCircle,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import {
  SITE_CONFIG,
  SERVICES_CONFIG,
  FAQS_CONFIG,
  STEPS_CONFIG,
  CITIES_CONFIG,
  STATS_CONFIG,
  PRICING_CONFIG,
} from "@shared/site-config";

export const SITE = {
  ...SITE_CONFIG,
  phone: SITE_CONFIG.phoneDisplay,
};

export const STATS = STATS_CONFIG;
export const CITIES = CITIES_CONFIG;

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  keywords: string[];
  slug: string;
}

const serviceIcons: Record<string, LucideIcon> = {
  "name-change": UserCheck,
  "gst-registration": Receipt,
  "trademark-filing": Award,
  "company-registration": Building2,
  "iso-certification": ShieldCheck,
  "itr-filing": FileText,
};

export const SERVICES: ServiceItem[] = SERVICES_CONFIG.map((s) => ({
  title: s.title,
  description: s.description,
  price: s.price,
  icon: serviceIcons[s.slug] || FileText,
  keywords: [...s.keywords],
  slug: s.slug,
}));

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  popular: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = PRICING_CONFIG.map((p) => ({
  ...p,
  features: [...p.features],
}));

export const PRICING_DISCLAIMER =
  "Government fees, stamp duty, notary, and courier charges are extra. Final pricing is confirmed after reviewing your specific requirements.";

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const stepIcons: LucideIcon[] = [Search, Send, ClipboardCheck, Rocket];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = STEPS_CONFIG.map((s, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: s.name,
  description: s.text,
  icon: stepIcons[i] || Search,
}));

export interface WhyReason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WHY_REASONS: WhyReason[] = [
  {
    title: "Transparent Pricing",
    description:
      "Know exactly what you're paying before we start. No ambiguity, no last-minute additions.",
    icon: IndianRupee,
  },
  {
    title: "No Hidden Charges",
    description:
      "Government fees are listed separately. Our service charge is clear and fixed upfront.",
    icon: Eye,
  },
  {
    title: "Real Human Support",
    description:
      "Talk to real people on WhatsApp. No bots, no waiting in queues, no automated replies.",
    icon: MessageCircle,
  },
  {
    title: "Trusted Legal Experts",
    description:
      "Every case is handled by verified professionals with years of legal practice experience.",
    icon: Users,
  },
  {
    title: "Fast Turnaround",
    description:
      "Most services completed within 2\u20135 days. Premium plans get 24\u201348 hour fast-track handling.",
    icon: Zap,
  },
];

export type FaqItem = typeof FAQS_CONFIG[number];
export const FAQS = FAQS_CONFIG;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO = {
  badge: "Trusted Legal Services Across India",
  headingStart: "Simple. Legal.",
  headingHighlight: "Done Right.",
  subheading:
    "India's trusted legal services platform for individuals and businesses. From online name change to company registration, GST filing to trademark protection \u2014 we handle the paperwork so you can focus on what matters.",
  ctaPrimary: "Talk on WhatsApp",
  ctaSecondary: "View Services",
  defaultWhatsAppMessage:
    "Hi, I need legal assistance. Please help me get started.",
  trustBadges: [
    { label: "100% Confidential", key: "confidential" },
    { label: "Expert Verified", key: "verified" },
    { label: "Pan India Support", key: "india-wide" },
  ],
} as const;

export const CTA_BANNER = {
  heading: "Ready to Get Started?",
  subheading:
    "Get expert legal assistance today. Talk to our team on WhatsApp and get a free consultation on your legal needs.",
  buttonText: "Start on WhatsApp",
  message:
    "Hi, I'd like a free consultation for my legal needs. Please help me get started.",
} as const;
