export const SITE_CONFIG = {
  name: "LegalApex",
  tagline: "Simple. Legal. Done Right.",
  domain: "legalapex.in",
  url: "https://legalapex.in",
  email: "hello@legalapex.in",
  phone: "+917302617785",
  phoneDisplay: "+91 73026 17785",
  whatsappNumber: "917302617785",
  description:
    "India's trusted legal services platform for individuals and businesses. Expert assistance for Name Change, GST Registration, Trademark Filing, Company Registration, ISO Certification, and ITR Filing with transparent pricing and fast turnaround.",
  seoDescription:
    "LegalApex is India's trusted legal services platform. Expert assistance for Name Change, GST Registration, Trademark Filing, Company Registration, ISO Certification & ITR Filing. Transparent pricing from \u20B9499. Pan India coverage.",
  disclaimer:
    "LegalApex provides legal service assistance through verified professionals. We are not a law firm, advocate, or government body. Services are facilitated through our network of independent legal practitioners. Results may vary based on individual case merits and government processing timelines.",
  coverage: "Pan India",
  ogImage: "https://legalapex.in/og-image.png",
} as const;

export interface ServiceConfig {
  title: string;
  description: string;
  seoDescription: string;
  price: string;
  priceNumeric: string;
  slug: string;
  keywords: string[];
}

export const SERVICES_CONFIG: ServiceConfig[] = [
  {
    title: "Name Change",
    description:
      "Legal name change in India through gazette notification, affidavit drafting, and newspaper publication. Complete online name change assistance with document preparation and filing support across all Indian states.",
    seoDescription:
      "Legal name change through gazette notification, affidavit drafting, and newspaper publication across all Indian states.",
    price: "1,499",
    priceNumeric: "1499",
    slug: "name-change",
    keywords: [
      "name change online India",
      "legal name change",
      "gazette notification name change",
      "affidavit for name change",
      "name change procedure India",
    ],
  },
  {
    title: "GST Registration",
    description:
      "Complete GST registration online with expert document preparation, application filing, and GSTIN procurement. Fast GST number registration for businesses, freelancers, and e-commerce sellers anywhere in India.",
    seoDescription:
      "Complete GST registration online with document preparation, application filing, and GSTIN procurement.",
    price: "999",
    priceNumeric: "999",
    slug: "gst-registration",
    keywords: [
      "GST registration online",
      "GST number registration",
      "GSTIN registration",
      "new GST registration",
      "GST registration process India",
    ],
  },
  {
    title: "Trademark Filing",
    description:
      "Protect your brand with comprehensive trademark registration in India. Includes trademark search, application filing under the Trademarks Act, and complete registration support for logos, names, and slogans.",
    seoDescription:
      "Comprehensive trademark registration in India including search, application filing, and registration support.",
    price: "2,499",
    priceNumeric: "2499",
    slug: "trademark-filing",
    keywords: [
      "trademark registration India",
      "trademark filing online",
      "brand registration",
      "logo registration India",
      "TM registration",
    ],
  },
  {
    title: "Company Registration",
    description:
      "End-to-end Private Limited, LLP, or One Person Company registration with MCA filing, DIN/DSC procurement, and compliance setup. Start your business in India with expert guidance on incorporation.",
    seoDescription:
      "End-to-end Private Limited, LLP, or OPC registration with MCA filing and compliance setup.",
    price: "4,999",
    priceNumeric: "4999",
    slug: "company-registration",
    keywords: [
      "company registration India",
      "private limited company registration",
      "LLP registration online",
      "OPC registration",
      "business registration India",
    ],
  },
  {
    title: "ISO Certification",
    description:
      "ISO 9001, ISO 14001, and ISO 27001 certification guidance for Indian businesses. Complete documentation preparation, internal audit support, and certification body coordination for quality management compliance.",
    seoDescription:
      "ISO 9001, 14001, 27001 certification guidance with documentation and audit preparation.",
    price: "5,999",
    priceNumeric: "5999",
    slug: "iso-certification",
    keywords: [
      "ISO certification India",
      "ISO 9001 certification",
      "ISO 14001 certification",
      "ISO 27001 certification",
      "quality certification India",
    ],
  },
  {
    title: "ITR Filing",
    description:
      "Hassle-free income tax return filing online for individuals, HUFs, and businesses. Expert CA review, maximum deduction claims, and timely filing with the Income Tax Department of India.",
    seoDescription:
      "Hassle-free income tax return filing for individuals, HUFs, and businesses with expert CA review.",
    price: "499",
    priceNumeric: "499",
    slug: "itr-filing",
    keywords: [
      "ITR filing online",
      "income tax return filing",
      "tax filing India",
      "online tax filing",
      "ITR filing for salaried",
    ],
  },
];

export interface FaqConfig {
  question: string;
  answer: string;
}

export const FAQS_CONFIG: FaqConfig[] = [
  {
    question: "Is LegalApex a law firm?",
    answer:
      "LegalApex is a legal services platform that connects you with verified legal professionals across India. We are not a law firm or a government body. We facilitate legal service assistance through our network of trusted experts who specialize in services like name change, GST registration, trademark filing, company registration, ISO certification, and ITR filing.",
  },
  {
    question: "Are government fees included in the pricing?",
    answer:
      "No, government fees, stamp duty, notary charges, and courier charges are separate and vary by service and state. Our listed prices cover professional service charges only. The exact government fees applicable to your specific case will be communicated to you before you proceed.",
  },
  {
    question: "How do I send my documents?",
    answer:
      "You can securely share your documents directly via WhatsApp. Simply click any 'WhatsApp' button on our site, and our team will guide you through the exact documents required for your legal service. All documents are handled with strict confidentiality.",
  },
  {
    question: "How fast is the service?",
    answer:
      "Turnaround time depends on the plan you choose. Basic plans take 3\u20135 working days, Standard plans take 2\u20134 working days, and Premium plans offer fast-track handling within 24\u201348 hours. Government processing timelines are additional and vary by department.",
  },
  {
    question: "Is my data safe with LegalApex?",
    answer:
      "Absolutely. We treat every piece of information with the highest level of confidentiality. Documents are only shared with the assigned legal professional handling your case. We do not store, sell, or share your personal data with any third parties.",
  },
  {
    question: "What are the accepted payment methods?",
    answer:
      "We accept UPI, bank transfers (NEFT/IMPS), and all major digital wallets. Payment details are shared after your requirements are confirmed by our expert. We do not charge anything upfront without your explicit approval.",
  },
  {
    question: "Do you provide services across all of India?",
    answer:
      "Yes, LegalApex provides legal services Pan India. Whether you are in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, or any other city, our experts can assist you remotely via WhatsApp with documentation and filing.",
  },
  {
    question: "Can I track the progress of my case?",
    answer:
      "Yes, once your case is initiated, you receive regular updates on WhatsApp. Your dedicated case handler will keep you informed at every stage \u2014 from document review to final submission and government processing status.",
  },
];

export const STEPS_CONFIG = [
  {
    name: "Choose a Service",
    text: "Browse our legal services and pick the one that fits your need.",
  },
  {
    name: "Share Documents",
    text: "Send your documents securely on WhatsApp. We'll tell you exactly what's needed.",
  },
  {
    name: "Expert Reviews",
    text: "Our verified legal expert reviews your case and confirms the exact price.",
  },
  {
    name: "Work Starts",
    text: "Once confirmed, your work begins immediately with real-time WhatsApp updates.",
  },
] as const;

export const CITIES_CONFIG = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
] as const;

export const SEO_KEYWORDS = [
  "legal services India",
  "online legal services",
  "legal assistance India",
  "affordable legal services",
  "name change online India",
  "legal name change India",
  "gazette notification name change",
  "name change affidavit",
  "GST registration online",
  "GST number registration India",
  "new GST registration",
  "GSTIN registration",
  "trademark registration India",
  "trademark filing online",
  "brand name registration India",
  "logo registration",
  "company registration India",
  "private limited company registration",
  "LLP registration India",
  "OPC registration online",
  "business registration India",
  "ISO certification India",
  "ISO 9001 certification",
  "ISO 14001 certification",
  "ISO 27001 certification",
  "ITR filing online",
  "income tax return filing India",
  "online tax filing",
  "CA for ITR filing",
  "legal services platform India",
  "online legal help India",
  "legal consultant India",
  "business compliance India",
  "startup registration India",
  "MSME registration",
  "business license India",
  "legal documentation India",
  "affordable lawyer India",
  "legal services near me",
  "best legal services India",
  "LegalApex",
  "legal apex",
  "legalapex.in",
] as const;

export const STATS_CONFIG = [
  { label: "Cases Handled", value: "500+", key: "cases" },
  { label: "Client Rating", value: "4.9", key: "rating" },
  { label: "Legal Experts", value: "50+", key: "experts" },
  { label: "Years Experience", value: "10+", key: "years" },
] as const;

export const PRICING_CONFIG = [
  {
    name: "Basic",
    price: "999",
    description: "Perfect for simple legal tasks with guided assistance.",
    popular: false,
    features: [
      "Document checklist",
      "Format guidance",
      "WhatsApp support",
      "3\u20135 day turnaround",
    ],
  },
  {
    name: "Standard",
    price: "1,999",
    description: "Ideal for individuals needing hands-on legal support.",
    popular: true,
    features: [
      "Drafting + filing guidance",
      "2 revisions included",
      "Priority WhatsApp support",
      "2\u20134 day turnaround",
    ],
  },
  {
    name: "Premium",
    price: "2,999",
    description: "For urgent matters requiring dedicated attention.",
    popular: false,
    features: [
      "Fast-track handling",
      "Dedicated case manager",
      "4 revisions included",
      "24\u201348 hour turnaround",
    ],
  },
] as const;
