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
  "how to change name legally in India",
  "name change procedure step by step",
  "GST registration online",
  "GST number registration India",
  "new GST registration",
  "GSTIN registration",
  "GST registration documents required",
  "GST registration process step by step",
  "trademark registration India",
  "trademark filing online",
  "brand name registration India",
  "logo registration",
  "how to file trademark in India",
  "trademark registration cost India",
  "company registration India",
  "private limited company registration",
  "LLP registration India",
  "OPC registration online",
  "business registration India",
  "how to register company in India",
  "documents required for company registration",
  "LLP vs private limited company",
  "Pvt Ltd company registration online",
  "ISO certification India",
  "ISO 9001 certification",
  "ISO 14001 certification",
  "ISO 27001 certification",
  "ISO certification process India",
  "ISO certification cost India",
  "ITR filing online",
  "income tax return filing India",
  "online tax filing",
  "CA for ITR filing",
  "ITR filing for salaried employees",
  "ITR filing guide for beginners",
  "how to file ITR online India",
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
  "MCA company registration",
  "DIN DSC registration",
  "Section 80C deductions ITR",
  "TM search India",
  "gazette notification online India",
  "LegalApex",
  "legal apex",
  "legalapex.in",
] as const;

export const TESTIMONIALS_CONFIG = [
  {
    name: "Rahul Mehta",
    location: "Mumbai, Maharashtra",
    service: "Company Registration",
    rating: 5,
    text: "Got my Pvt Ltd company registered in just 8 days. The team handled everything from DSC to PAN and TAN. Very professional and transparent throughout the process.",
    date: "2025-11-15",
  },
  {
    name: "Priya Sharma",
    location: "Delhi NCR",
    service: "Name Change",
    rating: 5,
    text: "Needed a name change after marriage. LegalApex handled the gazette notification, affidavit, and newspaper publication. Received all documents within a week. Highly recommend!",
    date: "2025-12-02",
  },
  {
    name: "Vikram Patel",
    location: "Ahmedabad, Gujarat",
    service: "GST Registration",
    rating: 5,
    text: "Quick and hassle-free GST registration for my e-commerce business. They prepared all the documents and got me the GSTIN in 4 working days. Great value for money.",
    date: "2026-01-10",
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad, Telangana",
    service: "Trademark Filing",
    rating: 5,
    text: "Filed trademark for my brand logo and name. The team did a thorough search before filing, explained everything clearly, and kept me updated at every step. Very professional.",
    date: "2025-10-20",
  },
  {
    name: "Suresh Kumar",
    location: "Bangalore, Karnataka",
    service: "ITR Filing",
    rating: 4,
    text: "Used their premium plan for ITR filing with capital gains. The CA was very thorough and helped me claim all eligible deductions. Will definitely use again next year.",
    date: "2026-01-25",
  },
  {
    name: "Deepika Nair",
    location: "Kochi, Kerala",
    service: "ISO Certification",
    rating: 5,
    text: "Got ISO 9001:2015 certification for our manufacturing unit. The process was smooth and the team coordinated the entire audit process. Very impressed with the turnaround time.",
    date: "2025-09-18",
  },
] as const;

export const TRUST_GUARANTEES_CONFIG = [
  {
    title: "Money-Back Guarantee",
    description: "Not satisfied? Get a full refund within 7 days of service initiation, no questions asked.",
    key: "money-back",
  },
  {
    title: "Secure & Confidential",
    description: "Your documents and data are encrypted and handled with strict confidentiality protocols.",
    key: "secure",
  },
  {
    title: "Govt Registered Platform",
    description: "We are a registered entity operating under Indian law with full compliance and transparency.",
    key: "registered",
  },
  {
    title: "Verified Professionals",
    description: "Every legal expert on our platform is verified with valid bar council or CA registration.",
    key: "verified",
  },
] as const;

export const STATS_CONFIG = [
  { label: "Clients Served", value: "127+", key: "clients" },
  { label: "Google Rating", value: "4.8", key: "rating" },
  { label: "Legal Experts", value: "15+", key: "experts" },
  { label: "Years in Practice", value: "7+", key: "years" },
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

// ─── SERVICE DETAIL CONFIG ─────────────────────────────────────────────────────

export interface ServiceDetailConfig {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  documentsRequired: string[];
  timeline: string;
  processSteps: { title: string; description: string }[];
  whatsIncluded: string[];
  faqs: { question: string; answer: string }[];
  relatedBlogSlugs: string[];
}

export const SERVICE_DETAIL_CONFIG: ServiceDetailConfig[] = [
  {
    slug: "name-change",
    heroTitle: "Legal Name Change in India — Gazette Notification, Affidavit & Newspaper Publication",
    heroDescription:
      "Change your name legally in India with end-to-end assistance. We handle affidavit drafting, gazette notification filing, and newspaper publication so your new name is recognized by all government departments, banks, and institutions.",
    metaTitle: "Legal Name Change in India | Gazette Notification & Affidavit | LegalApex",
    metaDescription:
      "Change your name legally in India. We handle affidavit drafting, gazette notification, and newspaper publication. Fast, affordable, Pan India service.",
    documentsRequired: [
      "Aadhaar Card (current name)",
      "PAN Card",
      "Passport-size photographs (2 copies)",
      "Address proof (utility bill or rent agreement)",
      "Affidavit on stamp paper (we draft this for you)",
      "Reason for name change (written statement)",
    ],
    timeline: "7-10 working days",
    processSteps: [
      {
        title: "Document Collection & Review",
        description:
          "Share your ID proof and reason for name change via WhatsApp. Our team reviews your documents and confirms eligibility.",
      },
      {
        title: "Affidavit Drafting on Stamp Paper",
        description:
          "We draft a legally valid affidavit on appropriate stamp paper value as per your state. The affidavit is notarized by a registered notary public.",
      },
      {
        title: "Gazette Notification Filing",
        description:
          "Your name change application is submitted to the Government Gazette (state or central) for official publication and public notification.",
      },
      {
        title: "Newspaper Publication",
        description:
          "A public notice of your name change is published in two newspapers (one English, one regional language) as required by law.",
      },
      {
        title: "Final Documentation & Delivery",
        description:
          "You receive the gazette copy, newspaper clippings, and notarized affidavit — a complete set for updating your name across all records.",
      },
    ],
    whatsIncluded: [
      "Affidavit drafting and notarization",
      "Gazette notification filing",
      "Newspaper advertisement in two newspapers",
      "Document review and verification",
      "Guidance for updating Aadhaar, PAN, and passport",
      "Dedicated WhatsApp support throughout the process",
    ],
    faqs: [
      {
        question: "Is gazette notification mandatory for a name change?",
        answer:
          "Yes, gazette notification is a mandatory legal step for an official name change in India. Without it, government departments, banks, and passport authorities may not accept your new name. The gazette serves as a public declaration of your name change.",
      },
      {
        question: "Can I change my name after marriage without gazette notification?",
        answer:
          "For minor changes like adding a surname after marriage, some institutions accept a marriage certificate. However, for a complete legal name change recognized across all documents (Aadhaar, PAN, passport), gazette notification and newspaper publication are strongly recommended.",
      },
      {
        question: "How long does the gazette notification take to publish?",
        answer:
          "The gazette notification typically takes 2-4 weeks after submission to the Government Press. However, processing times vary by state. We ensure your application is correctly filed to avoid delays or rejections.",
      },
      {
        question: "Can NRIs change their name through this process?",
        answer:
          "Yes, NRIs can change their name in Indian records through gazette notification. Additional documentation like a valid passport and overseas address proof may be required. Our team assists NRIs with the complete process remotely.",
      },
    ],
    relatedBlogSlugs: ["how-to-change-name-legally-india"],
  },
  {
    slug: "gst-registration",
    heroTitle: "GST Registration Online — Get Your GSTIN Number in 3-5 Working Days",
    heroDescription:
      "Register for GST online with expert assistance. We handle your complete GST application including document preparation, ARN generation, and GSTIN procurement on the GST portal. Suitable for businesses, freelancers, and e-commerce sellers across India.",
    metaTitle: "GST Registration Online India | Get GSTIN Number Fast | LegalApex",
    metaDescription:
      "Get GST registration online in India. Expert assistance for GSTIN application, document preparation, and ARN generation. Fast processing for businesses.",
    documentsRequired: [
      "PAN Card of the business or proprietor",
      "Aadhaar Card of the authorized signatory",
      "Proof of business address (electricity bill, rent agreement, or NOC)",
      "Bank account statement or cancelled cheque",
      "Passport-size photograph",
      "Digital Signature Certificate (for companies/LLPs)",
    ],
    timeline: "3-5 working days",
    processSteps: [
      {
        title: "Document Verification",
        description:
          "Submit your business documents via WhatsApp. Our GST experts verify all documents for completeness and accuracy before filing.",
      },
      {
        title: "Application Filing on GST Portal",
        description:
          "We complete your GST REG-01 application on the official GST portal (gst.gov.in) with all required details including business type, HSN/SAC codes, and bank information.",
      },
      {
        title: "ARN Generation & Tracking",
        description:
          "Once submitted, you receive an Application Reference Number (ARN) for tracking. We monitor the application status and respond to any queries from the GST officer.",
      },
      {
        title: "GSTIN Allotment",
        description:
          "Upon approval, your 15-digit GSTIN is allotted. We share the GST registration certificate and guide you on GST return filing obligations and compliance requirements.",
      },
    ],
    whatsIncluded: [
      "Complete GST REG-01 application filing",
      "Document preparation and formatting",
      "HSN/SAC code identification",
      "ARN generation and application tracking",
      "GST registration certificate delivery",
      "Initial GST compliance guidance",
      "WhatsApp support for queries",
    ],
    faqs: [
      {
        question: "Who needs GST registration?",
        answer:
          "GST registration is mandatory if your annual turnover exceeds Rs. 40 lakh (Rs. 20 lakh for special category states) for goods, or Rs. 20 lakh (Rs. 10 lakh for special category states) for services. It is also mandatory for interstate suppliers, e-commerce sellers, and casual taxable persons regardless of turnover.",
      },
      {
        question: "What is the GST registration fee?",
        answer:
          "There is no government fee for GST registration on the GST portal. The charges you pay to LegalApex cover professional assistance including document preparation, application filing, follow-up with the GST department, and compliance guidance.",
      },
      {
        question: "Can I register for GST voluntarily?",
        answer:
          "Yes, any business can opt for voluntary GST registration even if their turnover is below the threshold limit. Voluntary registration allows you to collect GST, claim input tax credit, and appear more credible to business clients.",
      },
      {
        question: "What happens if I don't register for GST when required?",
        answer:
          "Operating without mandatory GST registration is an offence under the CGST Act. You may face a penalty of Rs. 10,000 or the tax amount due, whichever is higher. Additionally, you cannot claim input tax credit and may face legal proceedings.",
      },
    ],
    relatedBlogSlugs: ["gst-registration-guide"],
  },
  {
    slug: "trademark-filing",
    heroTitle: "Trademark Registration in India — Protect Your Brand Name, Logo & Slogan",
    heroDescription:
      "Secure your brand with trademark registration under the Trade Marks Act, 1999. We conduct comprehensive TM searches, file your application with the Trademark Registry, and support you through examination and registration stages.",
    metaTitle: "Trademark Registration India | TM Filing & Brand Protection | LegalApex",
    metaDescription:
      "Register your trademark in India. Comprehensive TM search, application filing with Trademark Registry, and brand protection. Expert assistance from LegalApex.",
    documentsRequired: [
      "Brand name, logo, or slogan to be trademarked",
      "PAN Card and Aadhaar of the applicant",
      "Address proof of the business",
      "MSME/Udyam registration certificate (if applicable, for fee concession)",
      "Power of Attorney (we draft this for you)",
    ],
    timeline: "1-2 working days for filing, 12-18 months for registration",
    processSteps: [
      {
        title: "Trademark Search & Clearance",
        description:
          "We conduct a detailed search on the IP India database (ipindia.gov.in) to check if your desired trademark is available or conflicts with existing registrations in the relevant class.",
      },
      {
        title: "Class Identification & Application Drafting",
        description:
          "Based on your business, we identify the appropriate Nice Classification class(es) and draft the TM-A application with proper goods/services description.",
      },
      {
        title: "Filing with Trademark Registry",
        description:
          "Your trademark application is filed online with the Controller General of Patents, Designs & Trademarks. You receive the TM application number and filing receipt.",
      },
      {
        title: "Examination & Publication Support",
        description:
          "We monitor your application through the examination stage, respond to any objections raised by the examiner, and guide you through the publication stage in the Trademark Journal.",
      },
      {
        title: "Registration Certificate",
        description:
          "After publication without opposition (or successful opposition proceedings), the Trademark Registry issues the registration certificate valid for 10 years and renewable indefinitely.",
      },
    ],
    whatsIncluded: [
      "Comprehensive trademark search report",
      "Nice Classification identification",
      "TM-A application drafting and filing",
      "Government fee payment assistance",
      "Examination report response (if objected)",
      "Status tracking and regular updates",
      "Dedicated trademark expert support",
    ],
    faqs: [
      {
        question: "How long does trademark registration take in India?",
        answer:
          "The complete trademark registration process takes approximately 12-18 months from filing. This includes examination (1-2 months), publication in the Trademark Journal (4 months), and opposition period. However, you can use the TM symbol immediately after filing your application.",
      },
      {
        question: "What is the difference between TM and R symbols?",
        answer:
          "The TM symbol can be used as soon as you file a trademark application — it indicates that you claim rights over the mark. The R symbol (registered trademark) can only be used after the Trademark Registry issues the registration certificate. Using R without registration is an offence under the Trade Marks Act.",
      },
      {
        question: "Can I trademark a business name?",
        answer:
          "Yes, business names, brand names, taglines, logos, and even unique packaging (trade dress) can be registered as trademarks in India. The mark must be distinctive and not descriptive of the goods or services. Generic or common words may face objections during examination.",
      },
      {
        question: "What is the cost of trademark registration in India?",
        answer:
          "Government fees for trademark registration are Rs. 4,500 per class for individuals and startups (with Udyam registration), and Rs. 9,000 per class for others. LegalApex charges cover professional services including search, filing, and ongoing support throughout the registration process.",
      },
    ],
    relatedBlogSlugs: ["trademark-registration-india-guide"],
  },
  {
    slug: "company-registration",
    heroTitle: "Company Registration in India — Private Limited, LLP & OPC Incorporation",
    heroDescription:
      "Register your company with the Ministry of Corporate Affairs (MCA) through our end-to-end incorporation service. We handle DSC procurement, DIN application, name reservation via RUN (Reserve Unique Name), SPICe+ filing, and post-incorporation compliance setup.",
    metaTitle: "Company Registration India | Pvt Ltd, LLP, OPC Incorporation | LegalApex",
    metaDescription:
      "Register your Private Limited, LLP, or OPC in India. Complete MCA filing with DSC, DIN, SPICe+ form. Expert incorporation assistance from LegalApex.",
    documentsRequired: [
      "PAN Card and Aadhaar Card of all directors/partners",
      "Passport-size photographs of all directors/partners",
      "Address proof of directors (voter ID, passport, or driving license)",
      "Registered office address proof (electricity bill + NOC from owner or rent agreement)",
      "Digital Signature Certificate (DSC) of proposed directors",
      "Proposed company name (minimum 2 options)",
    ],
    timeline: "7-12 working days",
    processSteps: [
      {
        title: "DSC & DIN Application",
        description:
          "We obtain Class 2 Digital Signature Certificates for all proposed directors and apply for Director Identification Numbers (DIN) through the MCA portal.",
      },
      {
        title: "Name Reservation (RUN Form)",
        description:
          "Your preferred company name is reserved through the RUN (Reserve Unique Name) service on MCA21. We ensure the name complies with the Companies Act, 2013 naming guidelines.",
      },
      {
        title: "SPICe+ Form Filing",
        description:
          "The SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) form is filed with MCA. This integrated form covers incorporation, DIN allotment, PAN, TAN, EPFO, ESIC, and GST registration.",
      },
      {
        title: "MOA & AOA Drafting",
        description:
          "We draft the Memorandum of Association (MOA) and Articles of Association (AOA) as per your business objectives and file them along with the SPICe+ form.",
      },
      {
        title: "Certificate of Incorporation",
        description:
          "Once MCA approves the application, the Certificate of Incorporation with CIN (Corporate Identification Number) is issued along with PAN and TAN of the company.",
      },
    ],
    whatsIncluded: [
      "DSC procurement for all directors",
      "DIN application and allotment",
      "Name reservation through RUN",
      "SPICe+ form drafting and filing",
      "MOA and AOA drafting",
      "PAN and TAN application",
      "Post-incorporation compliance checklist",
    ],
    faqs: [
      {
        question: "What is the minimum requirement to register a Private Limited Company?",
        answer:
          "A Private Limited Company requires a minimum of 2 directors and 2 shareholders (they can be the same persons), a registered office address in India, and at least Rs. 1 lakh authorized share capital. At least one director must be an Indian resident (stayed in India for 182+ days in the previous year).",
      },
      {
        question: "How long does company registration take?",
        answer:
          "With all documents ready, company registration typically takes 7-12 working days. This includes 1-2 days for DSC, 1-2 days for name approval via RUN, and 5-7 days for MCA to process the SPICe+ form and issue the Certificate of Incorporation.",
      },
      {
        question: "What is the difference between LLP and Private Limited Company?",
        answer:
          "An LLP has no minimum capital requirement, limited compliance burden, and partners have limited liability. A Private Limited Company offers better fundraising options through equity, greater credibility with investors, and is preferred for venture-funded startups. LLPs cannot issue shares or have an employee stock option plan.",
      },
      {
        question: "Can an NRI or foreign national be a director?",
        answer:
          "Yes, NRIs and foreign nationals can be directors and shareholders in an Indian Private Limited Company. However, at least one director must be an Indian resident. Foreign directors need a valid passport, and their documents may require apostille or notarization from their country of residence.",
      },
    ],
    relatedBlogSlugs: [
      "how-to-register-company-india",
      "documents-required-company-registration",
      "llp-vs-pvt-ltd-comparison",
    ],
  },
  {
    slug: "iso-certification",
    heroTitle: "ISO Certification in India — ISO 9001, ISO 14001 & ISO 27001 Compliance",
    heroDescription:
      "Achieve ISO certification for your business with complete documentation preparation, gap analysis, internal audit support, and certification body coordination. We assist with ISO 9001 (Quality), ISO 14001 (Environment), and ISO 27001 (Information Security) standards.",
    metaTitle: "ISO Certification India | ISO 9001, 14001, 27001 | LegalApex",
    metaDescription:
      "Get ISO 9001, ISO 14001, or ISO 27001 certification in India. Complete documentation, audit support, and certification body coordination by LegalApex.",
    documentsRequired: [
      "Business registration certificate (GST, incorporation certificate, etc.)",
      "Organization chart and process flow",
      "Existing quality/management documentation (if any)",
      "PAN Card and address proof of the business",
      "List of products/services offered",
    ],
    timeline: "15-30 working days",
    processSteps: [
      {
        title: "Gap Analysis & Standard Selection",
        description:
          "We assess your current business processes against the chosen ISO standard to identify gaps. Based on your industry and goals, we recommend the most suitable ISO standard (9001, 14001, or 27001).",
      },
      {
        title: "Documentation Preparation",
        description:
          "We prepare the complete Quality Management System (QMS) documentation including quality manual, procedures, work instructions, forms, and records required for ISO compliance.",
      },
      {
        title: "Implementation & Internal Audit",
        description:
          "We guide your team on implementing the documented processes and conduct an internal audit to verify compliance. Any non-conformities are addressed before the certification audit.",
      },
      {
        title: "Certification Body Coordination",
        description:
          "We coordinate with an accredited certification body for Stage 1 (documentation review) and Stage 2 (on-site audit) assessments. We assist in addressing any audit findings.",
      },
      {
        title: "Certification Issuance",
        description:
          "Upon successful completion of the certification audit, the certification body issues the ISO certificate valid for 3 years with annual surveillance audits.",
      },
    ],
    whatsIncluded: [
      "Gap analysis report",
      "Complete QMS documentation package",
      "Quality manual and SOPs",
      "Internal audit support",
      "Certification body coordination",
      "Audit preparation and training",
      "Post-certification surveillance guidance",
    ],
    faqs: [
      {
        question: "Which ISO certification is right for my business?",
        answer:
          "ISO 9001 is suitable for any business looking to demonstrate quality management. ISO 14001 is for companies wanting to showcase environmental responsibility. ISO 27001 is essential for IT companies, BPOs, and any business handling sensitive data. Many businesses benefit from multiple certifications.",
      },
      {
        question: "Is ISO certification mandatory in India?",
        answer:
          "ISO certification is voluntary for most businesses. However, many government tenders, large corporate contracts, and export orders require ISO certification as a qualifying criterion. It also provides a competitive advantage and demonstrates commitment to quality standards.",
      },
      {
        question: "How long is an ISO certificate valid?",
        answer:
          "An ISO certificate is valid for 3 years from the date of issue. During this period, annual surveillance audits are conducted by the certification body to ensure continued compliance. After 3 years, a re-certification audit is required for renewal.",
      },
    ],
    relatedBlogSlugs: ["iso-certification-process-india"],
  },
  {
    slug: "itr-filing",
    heroTitle: "Income Tax Return (ITR) Filing Online — Expert CA Review & Maximum Deductions",
    heroDescription:
      "File your income tax return accurately and on time with expert Chartered Accountant review. We ensure you claim all eligible deductions under Section 80C, 80D, HRA, and other provisions. Suitable for salaried individuals, freelancers, HUFs, and businesses.",
    metaTitle: "ITR Filing Online India | Income Tax Return with CA Review | LegalApex",
    metaDescription:
      "File your income tax return online with expert CA review. Maximum deductions under 80C, 80D, HRA. For salaried, freelancers & businesses. From Rs. 499.",
    documentsRequired: [
      "PAN Card",
      "Aadhaar Card",
      "Form 16 (for salaried individuals)",
      "Bank statements for the financial year",
      "Investment proofs (PPF, ELSS, insurance, etc.)",
      "Form 26AS / AIS (Annual Information Statement)",
    ],
    timeline: "1-3 working days",
    processSteps: [
      {
        title: "Document Collection",
        description:
          "Share your Form 16, bank statements, investment proofs, and other income documents via WhatsApp. Our team reviews your complete financial profile for the assessment year.",
      },
      {
        title: "Income Computation & Deduction Optimization",
        description:
          "Our CA computes your total income from all sources (salary, house property, capital gains, other sources) and identifies all eligible deductions under Sections 80C, 80D, 80E, 80G, 80TTA, HRA exemption, and other applicable provisions.",
      },
      {
        title: "ITR Form Selection & Filing",
        description:
          "Based on your income sources, we select the correct ITR form (ITR-1, ITR-2, ITR-3, or ITR-4) and file your return on the Income Tax e-Filing portal (incometax.gov.in) of the CBDT.",
      },
      {
        title: "Verification & Acknowledgement",
        description:
          "After filing, we guide you through e-verification via Aadhaar OTP, net banking, or DSC. You receive the ITR-V acknowledgement and filing confirmation for your records.",
      },
    ],
    whatsIncluded: [
      "Expert CA review of all documents",
      "Maximum deduction identification",
      "Correct ITR form selection and filing",
      "Capital gains computation (if applicable)",
      "E-verification assistance",
      "ITR-V acknowledgement delivery",
      "Post-filing query support",
    ],
    faqs: [
      {
        question: "Which ITR form should I file?",
        answer:
          "ITR-1 (Sahaj) is for salaried individuals with income up to Rs. 50 lakh from salary, one house property, and other sources. ITR-2 is for individuals with capital gains or foreign income. ITR-3 is for business income, and ITR-4 (Sugam) is for presumptive taxation under Section 44AD/44ADA. Our CA will select the appropriate form based on your income profile.",
      },
      {
        question: "What is the last date for ITR filing?",
        answer:
          "The due date for individual ITR filing is usually July 31 of the assessment year. For businesses requiring audit, the deadline is October 31. Late filing attracts a penalty of Rs. 5,000 (or Rs. 1,000 if income is below Rs. 5 lakh) under Section 234F, and you may lose the ability to carry forward certain losses.",
      },
      {
        question: "Do I need to file ITR if my income is below the taxable limit?",
        answer:
          "While it is not mandatory if your gross total income is below the basic exemption limit (Rs. 2.5 lakh / Rs. 3 lakh for senior citizens), filing ITR is highly recommended. It serves as valid income proof for loan applications, visa processing, and can help you claim TDS refunds.",
      },
      {
        question: "Can I file ITR for previous years?",
        answer:
          "You can file a belated or revised return for the previous assessment year before December 31 of the assessment year (or before the completion of assessment). For older years, you may need to approach the Assessing Officer. Late filing may attract penalties and interest under Sections 234A, 234B, and 234C.",
      },
    ],
    relatedBlogSlugs: ["itr-filing-guide-beginners"],
  },
];

// ─── BLOG POSTS CONFIG ─────────────────────────────────────────────────────────

export interface BlogPostConfig {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  relatedServiceSlug: string;
  sections: { heading: string; content: string }[];
  keywords: string[];
}

export const BLOG_POSTS_CONFIG: BlogPostConfig[] = [
  {
    slug: "how-to-register-company-india",
    title: "How to Register a Company in India: Complete Guide 2025",
    metaTitle: "How to Register a Company in India: Complete Guide 2025 | LegalApex",
    metaDescription:
      "Step-by-step guide to register a Private Limited, LLP, or OPC in India. Learn about MCA filing, SPICe+ form, documents required, and costs involved.",
    excerpt:
      "A comprehensive guide covering every step of company registration in India — from choosing the right business structure to obtaining your Certificate of Incorporation from MCA.",
    category: "Company Registration",
    readTime: "12 min read",
    publishDate: "2025-01-15",
    relatedServiceSlug: "company-registration",
    sections: [
      {
        heading: "Understanding Business Structures in India",
        content:
          "Before registering a company in India, it is crucial to understand the different business structures available under Indian law. The most common options include Private Limited Company, Limited Liability Partnership (LLP), One Person Company (OPC), and Sole Proprietorship. Each structure has distinct advantages depending on your business goals, number of founders, and funding requirements.\n\nA Private Limited Company is governed by the Companies Act, 2013 and is the most preferred structure for startups looking to raise venture capital or angel investment. It offers limited liability to shareholders, perpetual succession, and the ability to issue Employee Stock Option Plans (ESOPs). The minimum requirement is 2 directors and 2 shareholders, with at least Rs. 1 lakh authorized share capital.\n\nAn LLP, governed by the Limited Liability Partnership Act, 2008, is ideal for professional services firms, consultancies, and small businesses that want limited liability without the compliance burden of a company. It requires a minimum of 2 designated partners and has no minimum capital requirement.\n\nA One Person Company (OPC) is a special category under the Companies Act that allows a single individual to incorporate a company with limited liability. However, OPCs have certain restrictions — they cannot raise equity funding, and must convert to a Private Limited Company once paid-up share capital exceeds Rs. 50 lakh or annual turnover exceeds Rs. 2 crore.",
      },
      {
        heading: "Documents Required for Company Registration",
        content:
          "The Ministry of Corporate Affairs (MCA) requires specific documents from all proposed directors and for the registered office address. Having these documents ready before starting the process significantly speeds up incorporation.\n\nFor each director and shareholder, you need a PAN Card (mandatory for Indian nationals), Aadhaar Card, passport-size photographs, and address proof such as a voter ID, passport, or driving license. If any director is an NRI or foreign national, a valid passport and proof of overseas address (utility bill or bank statement not older than 2 months) are required.\n\nFor the registered office address, you need a recent utility bill (electricity, water, or gas bill not older than 2 months) as address proof, along with a No Objection Certificate (NOC) from the property owner. If the premises are rented, a copy of the rent agreement or lease deed is also required. The registered office must be a physical address in India — virtual office addresses may be accepted in certain states.\n\nAdditionally, all proposed directors need to obtain a Digital Signature Certificate (DSC) of Class 2 category, which is used for digitally signing all MCA forms and documents. The DSC can be obtained from any Certifying Authority authorized by the Controller of Certifying Authorities (CCA) under the Information Technology Act.",
      },
      {
        heading: "Step-by-Step Registration Process via MCA",
        content:
          "Company registration in India is now a fully online process through the MCA21 portal. The key steps involve obtaining DSCs, reserving a company name, and filing the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) form.\n\nStep 1: Obtain Digital Signature Certificates (DSC) for all proposed directors. This typically takes 1-2 working days when done online with Aadhaar-based e-KYC.\n\nStep 2: Reserve your company name using the RUN (Reserve Unique Name) form on the MCA portal. You can suggest up to 2 name options. MCA checks for availability and compliance with Section 4(2) and 4(3) of the Companies Act. Names that are identical or too similar to existing companies, LLPs, or trademarks are rejected. Name approval typically takes 1-2 working days.\n\nStep 3: File the SPICe+ form, which is an integrated form that covers company incorporation, DIN allotment for directors, PAN and TAN application, professional tax registration (in applicable states), EPFO and ESIC registration, and even GST registration. The SPICe+ form consists of Part A (name reservation) and Part B (incorporation details, director information, share capital structure, and registered office details).\n\nStep 4: Upload the e-MOA (Memorandum of Association) and e-AOA (Articles of Association) along with the SPICe+ form. These foundational documents define the company's objectives, authorized share capital, and internal management rules.\n\nStep 5: Upon verification and approval, MCA issues the Certificate of Incorporation along with the CIN (Corporate Identification Number), PAN, and TAN. The entire process, when documents are in order, takes approximately 7-12 working days.",
      },
      {
        heading: "Post-Incorporation Compliance",
        content:
          "Once your company is incorporated, there are several mandatory compliances that must be completed within stipulated timeframes. Failure to comply can result in penalties under the Companies Act, 2013.\n\nWithin 30 days of incorporation, you must open a current bank account in the company's name and deposit the initial share capital. The company must also hold its first Board of Directors meeting within 30 days of incorporation, where key appointments (auditor, company secretary if required) and operational decisions are made.\n\nWithin 180 days, the company must file a declaration of commencement of business (INC-20A form) with MCA. This is a mandatory requirement introduced by the Companies (Amendment) Act, 2018. Without this declaration, the company cannot commence any business activity or exercise any borrowing powers.\n\nOngoing annual compliances include filing Annual Returns (MGT-7/MGT-7A), Financial Statements (AOC-4), Income Tax Returns, GST returns (if registered), maintaining statutory registers, holding Annual General Meetings, and conducting board meetings at prescribed intervals. For Private Limited Companies, a minimum of 4 board meetings per year is required, with not more than 120 days gap between two consecutive meetings.\n\nStartups registered under the Startup India initiative may benefit from simplified compliance requirements, tax exemptions under Section 80-IAC, and self-certification under labour and environmental laws during the initial years.",
      },
      {
        heading: "Costs Involved in Company Registration",
        content:
          "The total cost of registering a company in India includes government fees, professional charges, and stamp duty. Government fees are standardized across India, but stamp duty varies significantly from state to state.\n\nThe MCA filing fees for SPICe+ are based on the authorized share capital. For companies with authorized capital up to Rs. 15 lakh, the fee is approximately Rs. 500. Stamp duty on MOA and AOA varies — for example, it is around Rs. 1,300 in Delhi and can be up to Rs. 5,000-10,000 in states like Maharashtra or Karnataka.\n\nDSC costs range from Rs. 800-1,500 per director depending on the certifying authority and validity period. Professional charges from CAs, CSs, or legal service providers like LegalApex cover the effort involved in document preparation, drafting MOA/AOA, filing forms, and coordinating with MCA.\n\nFor LLPs, the filing structure is different — the LLP Form FiLLiP is used for incorporation along with the LLP Agreement. Government fees are similarly based on partner contribution amount. LLPs are generally less expensive to incorporate and maintain compared to Private Limited Companies due to lighter compliance requirements.",
      },
    ],
    keywords: [
      "company registration India",
      "how to register company India",
      "private limited company registration",
      "MCA registration process",
      "SPICe+ form filing",
      "company incorporation India 2025",
      "startup registration India",
    ],
  },
  {
    slug: "how-to-change-name-legally-india",
    title: "How to Change Your Name Legally in India: Step-by-Step Process",
    metaTitle: "How to Change Your Name Legally in India: Step-by-Step Process | LegalApex",
    metaDescription:
      "Complete guide to legal name change in India. Learn about gazette notification, affidavit, newspaper publication, and updating Aadhaar, PAN, and passport.",
    excerpt:
      "Everything you need to know about legally changing your name in India — from drafting the affidavit to gazette notification and updating all government documents.",
    category: "Name Change",
    readTime: "10 min read",
    publishDate: "2025-01-20",
    relatedServiceSlug: "name-change",
    sections: [
      {
        heading: "When and Why You May Need a Legal Name Change",
        content:
          "A legal name change in India may be required for various personal, professional, or religious reasons. Common situations include marriage or divorce (adding or removing spouse's surname), correcting spelling errors in official documents, changing name after religious conversion, adopting a new name for personal reasons, or updating a name to match the correct official records.\n\nUnder Indian law, every citizen has the right to change their name at any point in their life. There is no specific statute that governs the name change process at the central level, but the procedure is well-established through a combination of gazette notification, affidavit, and newspaper publication. Different states may have slightly varying requirements, but the core process remains consistent across India.\n\nIt is important to understand that a legal name change must be formally documented and published. Simply using a new name informally is not sufficient for official purposes. Government departments like the Passport Office (RPO), Income Tax Department (CBDT), UIDAI (Aadhaar), and banks require documentary proof of a legal name change before updating their records.",
      },
      {
        heading: "Step 1: Drafting and Notarizing the Affidavit",
        content:
          "The first step in the legal name change process is to draft an affidavit declaring your intention to change your name. The affidavit is sworn on non-judicial stamp paper of appropriate value (which varies by state — Rs. 10 in some states, Rs. 50 or Rs. 100 in others).\n\nThe affidavit must include your current name, proposed new name, father's or spouse's name, date of birth, current address, reason for the name change, and a declaration that the name change is not being sought for any illegal or fraudulent purpose. It should also state that you will use the new name in all future dealings and transactions.\n\nOnce drafted, the affidavit must be notarized by a registered Notary Public. Notarization involves the notary verifying your identity, witnessing your signature on the affidavit, and applying the notary seal and signature. This makes the affidavit a legally valid document.\n\nThe notarized affidavit forms the foundation of your name change. It will be required for subsequent steps including gazette notification, newspaper publication, and updating all government documents. Keep multiple original copies and certified photocopies of the notarized affidavit for future use.",
      },
      {
        heading: "Step 2: Gazette Notification",
        content:
          "Publishing your name change in the official Government Gazette is a mandatory step that gives your name change legal validity. The Gazette of India is published by the Department of Publication under the Ministry of Urban Development, while state gazettes are published by respective state governments.\n\nYou can apply for gazette notification at either the central level (published in the Gazette of India) or the state level (published in the respective State Gazette). For most purposes, either is acceptable. The application is submitted to the Government Press along with the notarized affidavit, identity proof, and the prescribed fee.\n\nThe gazette notification typically takes 2-4 weeks to be published, depending on the backlog at the Government Press. Some states like Delhi, Maharashtra, and Karnataka have online application processes that can expedite the publication. Once published, the gazette entry serves as the primary legal document for your name change.\n\nYou should obtain multiple original copies of the gazette notification, as different institutions (passport office, banks, UIDAI) may require original copies for their records. The gazette notification is a public document and can also be accessed online through the official gazette websites of the central and state governments.",
      },
      {
        heading: "Step 3: Newspaper Publication",
        content:
          "After obtaining the gazette notification, the next step is to publish a public notice of your name change in at least two newspapers — one in English and one in the regional/local language of your state. This serves as a public declaration of your name change and fulfills the requirement of public notice.\n\nThe newspaper advertisement should clearly state your old name, new name, and that you have changed your name vide gazette notification (mentioning the gazette notification number and date). It should also mention that you will be known by the new name henceforth and request all concerned to take note.\n\nThe cost of newspaper publication varies depending on the newspaper and city. Local newspapers charge less compared to national dailies. For most purposes, publication in two local newspapers (one English, one vernacular) is sufficient. Major newspapers frequently used for name change publications include mid-range dailies that are widely circulated in the applicant's city or district.\n\nPreserve the original newspaper clippings (the actual newspaper pages showing the advertisement) as they will be required as proof when updating your name on Aadhaar, PAN, passport, bank accounts, property documents, educational certificates, and other official records.",
      },
      {
        heading: "Updating Your Name on Official Documents",
        content:
          "With the notarized affidavit, gazette notification, and newspaper clippings in hand, you can proceed to update your name across all official documents. Each department has its own procedure and may require additional supporting documents.\n\nFor Aadhaar Card, visit your nearest Aadhaar Enrolment/Update Centre or use the UIDAI online portal (myaadhaar.uidai.gov.in). Submit the gazette notification and affidavit as proof of name change. Aadhaar name updates typically take 10-15 working days.\n\nFor PAN Card, file a correction request through the NSDL or UTIITSL portal online. Submit the gazette notification as supporting proof. The updated PAN card is usually dispatched within 15-20 working days.\n\nFor Passport, apply for re-issuance of passport with the new name through the Passport Seva portal (passportindia.gov.in). You will need the gazette notification, newspaper clippings, old passport, and the affidavit. A police verification may or may not be required depending on your case.\n\nFor bank accounts, educational certificates, property documents, insurance policies, and other records, contact the respective institutions with your name change documents. Most banks update names within 7-10 working days upon submission of the gazette notification and a filled name change request form.",
      },
    ],
    keywords: [
      "name change India",
      "how to change name legally India",
      "gazette notification name change",
      "name change affidavit",
      "legal name change process India",
      "name change after marriage India",
      "name change newspaper publication",
    ],
  },
  {
    slug: "gst-registration-guide",
    title: "GST Registration Process in India: Complete Guide",
    metaTitle: "GST Registration Process in India: Complete Guide | LegalApex",
    metaDescription:
      "Complete guide to GST registration in India. Learn who needs GST, documents required, step-by-step process on GST portal, and post-registration compliance.",
    excerpt:
      "Everything you need to know about GST registration in India — eligibility criteria, required documents, the online registration process, and compliance after obtaining your GSTIN.",
    category: "GST Registration",
    readTime: "11 min read",
    publishDate: "2025-02-01",
    relatedServiceSlug: "gst-registration",
    sections: [
      {
        heading: "Who Needs GST Registration?",
        content:
          "The Goods and Services Tax (GST) was introduced in India on July 1, 2017, replacing multiple indirect taxes including VAT, Service Tax, Central Excise, and others. Under the CGST Act, 2017, GST registration is mandatory for certain categories of businesses and individuals based on their turnover and nature of activity.\n\nFor businesses dealing in goods, GST registration is mandatory if the aggregate annual turnover exceeds Rs. 40 lakh (Rs. 20 lakh for special category states like Manipur, Mizoram, Nagaland, Tripura, Meghalaya, Arunachal Pradesh, Sikkim, and Uttarakhand). For service providers, the threshold is Rs. 20 lakh (Rs. 10 lakh for special category states).\n\nCertain categories of businesses must register for GST regardless of their turnover. These include persons making interstate taxable supplies, casual taxable persons, non-resident taxable persons, e-commerce operators and sellers on e-commerce platforms, agents of suppliers, input service distributors, persons liable to pay tax under reverse charge mechanism, and persons supplying through e-commerce operators.\n\nBusinesses below the threshold limit can also opt for voluntary GST registration. This allows them to issue proper tax invoices, claim input tax credit on purchases, and appear more credible to business-to-business (B2B) clients. Voluntary registration is particularly beneficial for export-oriented businesses as it enables them to claim refunds on taxes paid on inputs.",
      },
      {
        heading: "Documents Required for GST Registration",
        content:
          "The documents required for GST registration vary based on the type of business entity — proprietorship, partnership, LLP, private limited company, or trust/society. However, certain basic documents are common to all applications.\n\nFor Proprietorship Firms, you need the proprietor's PAN card, Aadhaar card, passport-size photograph, bank account details (cancelled cheque or first page of passbook), and proof of place of business (rent agreement with NOC from landlord, or property tax receipt/electricity bill for owned premises).\n\nFor Partnership Firms and LLPs, in addition to the above documents for all partners, you need the partnership deed or LLP agreement, and the firm's PAN card. For LLPs, the Certificate of Incorporation issued by MCA is also required.\n\nFor Private Limited Companies and Public Limited Companies, the requirements include the company's PAN card, Certificate of Incorporation, MOA and AOA, board resolution authorizing a person to apply for GST, identity and address proof of all directors, and a Digital Signature Certificate (DSC) of the authorized signatory.\n\nThe proof of place of business is crucial — for rented premises, a rent agreement and a No Objection Certificate from the landlord are mandatory. For owned premises, property tax receipts or municipal khata copies serve as address proof. The electricity bill must be in the name of the applicant or the property owner (if rented).",
      },
      {
        heading: "Step-by-Step GST Registration Process on the GST Portal",
        content:
          "GST registration is a completely online process carried out on the official GST portal at gst.gov.in. No physical visit to any government office is required. Here is the step-by-step process for new GST registration:\n\nStep 1: Visit gst.gov.in and click on 'Register Now' under the Taxpayers section. Select 'New Registration' and fill in the basic details — state, district, legal name of the business (as per PAN), PAN number, email address, and mobile number. An OTP verification is sent to both email and mobile.\n\nStep 2: After OTP verification, you receive a Temporary Reference Number (TRN). Use this TRN to log in and complete Part B of the registration form (GST REG-01). This part requires detailed information including business details, promoter/partner details, authorized signatory information, principal and additional place of business, HSN codes for goods and SAC codes for services, and bank account details.\n\nStep 3: Upload all required documents including photographs, address proof, business registration certificates, and authorization documents. Each document must be in the specified format (PDF or JPEG) and within the file size limits.\n\nStep 4: Complete the verification — for companies and LLPs, the application must be digitally signed using the DSC of the authorized signatory. For proprietorships and partnerships, EVC (Electronic Verification Code) through Aadhaar authentication is accepted.\n\nStep 5: Upon submission, an Application Reference Number (ARN) is generated. The GST officer reviews the application and may raise clarifications through GST REG-03 form. You must respond within 7 working days through GST REG-04 form. If everything is in order, GSTIN is typically allotted within 3-7 working days through GST REG-06 form.",
      },
      {
        heading: "Understanding Your GSTIN and GST Certificate",
        content:
          "The GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit alphanumeric identifier assigned to every registered taxpayer. The structure of GSTIN encodes important information: the first 2 digits represent the state code, the next 10 digits are the PAN of the taxpayer, the 13th digit indicates the number of registrations within a state, the 14th digit is 'Z' by default, and the 15th is a check digit.\n\nThe GST Registration Certificate (Form GST REG-06) is issued electronically and can be downloaded from the GST portal. It contains your GSTIN, legal name, trade name, address, date of registration, and the type of registration (regular, composition, etc.). This certificate should be prominently displayed at your principal place of business.\n\nEvery GSTIN holder must also register on the GST e-Invoice portal if their turnover exceeds the prescribed threshold (currently Rs. 5 crore). E-invoicing is mandatory for generating Invoice Reference Numbers (IRN) for B2B transactions and is being progressively extended to businesses with lower turnover.\n\nIf you have places of business in multiple states, you need separate GST registrations for each state. Each registration will have a different GSTIN (since the first two digits change based on the state code). However, all registrations are linked to the same PAN.",
      },
      {
        heading: "Post-Registration GST Compliance",
        content:
          "Once registered, every GSTIN holder must comply with several ongoing requirements under the GST law. Non-compliance can result in penalties, late fees, and even cancellation of registration.\n\nGST Return Filing is the most critical compliance. Regular taxpayers must file GSTR-1 (outward supplies) by the 11th of the following month, GSTR-3B (summary return and tax payment) by the 20th of the following month, and GSTR-9 (annual return) by December 31 of the following year. Quarterly filers under the QRMP scheme file GSTR-1 and GSTR-3B quarterly.\n\nTax invoices must comply with the format prescribed under Rule 46 of the CGST Rules. Every invoice must contain the supplier's GSTIN, invoice number and date, recipient's GSTIN (for B2B), HSN/SAC codes, taxable value, rate and amount of CGST, SGST/UTGST, and IGST. Proper invoicing is essential for the recipient to claim input tax credit.\n\nInput Tax Credit (ITC) is the mechanism by which you can reduce your tax liability by claiming credit for taxes paid on business purchases. To claim ITC, the supplier must have filed their GSTR-1, the invoices must reflect in your GSTR-2B, and you must have received the goods or services. ITC matching and reconciliation through GSTR-2B is now a critical monthly activity for every business.\n\nMaintaining proper books of accounts, supporting invoices, and filing returns on time are the pillars of GST compliance. Late filing of GSTR-3B attracts a late fee of Rs. 50 per day (Rs. 20 per day for nil returns), subject to a maximum cap.",
      },
    ],
    keywords: [
      "GST registration India",
      "GST registration process",
      "how to register for GST",
      "GSTIN registration online",
      "GST registration documents",
      "GST portal registration",
      "GST compliance India",
    ],
  },
  {
    slug: "trademark-registration-india-guide",
    title: "How to File a Trademark in India: Complete Guide",
    metaTitle: "How to File a Trademark in India: Complete Guide | LegalApex",
    metaDescription:
      "Complete guide to trademark registration in India. Learn about TM search, filing process, costs, classes, and how to protect your brand under the Trade Marks Act.",
    excerpt:
      "A detailed guide to filing and registering a trademark in India — covering trademark search, application process, Nice Classification, examination, and opposition.",
    category: "Trademark Filing",
    readTime: "13 min read",
    publishDate: "2025-02-10",
    relatedServiceSlug: "trademark-filing",
    sections: [
      {
        heading: "What Can Be Registered as a Trademark in India?",
        content:
          "Under the Trade Marks Act, 1999, a trademark is defined as a mark capable of being represented graphically and capable of distinguishing the goods or services of one person from those of others. The scope of what can be trademarked in India is broad and includes several categories.\n\nWord marks are the most common type — these include brand names, business names, product names, taglines, and slogans. Examples include recognizable brand names in any industry. Device marks (logos) can also be registered, either independently or in combination with word marks. A combined word+device mark protects both elements together as a single mark.\n\nSound marks and 3D shape marks can also be registered in India, though they are less common and subject to stricter examination. Colour combinations applied to goods or packaging can be trademarked if they have acquired distinctiveness through extensive use.\n\nA trademark must be distinctive to be registrable. Marks that are purely descriptive of the goods or services (for example, registering 'Sweet' for a confectionery brand), generic terms, or marks identical or deceptively similar to existing registered trademarks will face objections during examination. The Trademarks Registry checks for distinctiveness, deceptive similarity, and conflicts with prior registrations and pending applications.",
      },
      {
        heading: "Conducting a Trademark Search Before Filing",
        content:
          "Before filing a trademark application, conducting a thorough trademark search is essential to identify potential conflicts with existing trademarks. A comprehensive search reduces the risk of objection during examination or opposition by a third party.\n\nThe official database for trademark searches in India is the IP India public search portal (ipindiaonline.gov.in). You can search for existing trademarks by word mark, phonetic similarity, Vienna code (for device/logo marks), and by applicant or proprietor name. The search should cover identical marks, phonetically similar marks, and visually similar device marks in the same and related classes.\n\nIt is important to search across all relevant Nice Classification classes, not just your primary class. For example, if you are registering a brand name for a food product (Class 30), you should also check Classes 29 (processed food), 32 (beverages), and 43 (restaurant services) to ensure there are no conflicting marks that could cause consumer confusion.\n\nThe search should also check for unregistered marks that may have acquired common law rights through prior use. While the Trade Marks Act gives priority to the proprietor of a registered mark, a prior user of an unregistered mark can file an opposition or seek cancellation of a later registration. Therefore, it is advisable to also conduct a general online search including business directories, domain name registries, and social media to identify any unregistered but actively used similar marks.\n\nLegalApex provides detailed trademark search reports that cover the IP India database, phonetic analysis, and visual similarity assessment, along with a recommendation on the registrability of your proposed mark.",
      },
      {
        heading: "Understanding Nice Classification for Trademarks",
        content:
          "The Nice Classification is an international system that categorizes goods and services into 45 classes (Classes 1-34 for goods, Classes 35-45 for services). India follows this classification system, and every trademark application must specify the class(es) under which registration is sought.\n\nChoosing the correct class is critical because trademark protection is limited to the class(es) in which the mark is registered. For example, a trademark registered in Class 25 (clothing) does not automatically protect the same mark in Class 9 (electronics). If your business spans multiple categories, you may need to file separate applications in each relevant class (multi-class filing is also allowed in India).\n\nSome commonly used classes include Class 9 (software, electronics, apps), Class 25 (clothing, footwear), Class 35 (advertising, business management, retail services), Class 41 (education, training, entertainment), Class 42 (IT services, software development, web design), and Class 43 (restaurant and food services).\n\nThe government fee for a trademark application is Rs. 4,500 per class for individuals, startups (with DPIIT/Udyam registration), and small enterprises. For other entities (companies, firms, trusts), the fee is Rs. 9,000 per class. These fees are prescribed in the Trade Marks Rules, 2017 and are subject to revision.",
      },
      {
        heading: "The Trademark Application and Registration Process",
        content:
          "The trademark application process in India involves several stages from filing to registration, typically taking 12-18 months. Understanding each stage helps set realistic expectations and prepares you for potential objections.\n\nFiling: The trademark application (Form TM-A) is filed online through the IP India e-filing portal. The application includes details of the applicant, representation of the mark, description of goods/services, and the designated class(es). Upon filing, you receive a filing receipt with the application number, and you can begin using the TM symbol with your mark.\n\nExamination: The Trademark Registry assigns the application to an examiner who reviews it for compliance with the Trade Marks Act. The examination report is typically issued within 1-2 months of filing. If objections are raised (under Sections 9 or 11 of the Act), you must file a response to the examination report within 30 days. If the objections are not resolved, a hearing is scheduled before the Registrar.\n\nPublication: If the examiner accepts the mark (or after successful resolution of objections), the trademark is published in the Trade Marks Journal. This is a weekly online publication that gives the public an opportunity to oppose the registration. The opposition period is 4 months from the date of publication.\n\nOpposition: During the 4-month window, any person can file a Notice of Opposition if they believe the mark infringes their rights. If no opposition is filed, or if the opposition is decided in your favour, the mark proceeds to registration.\n\nRegistration: The Trademark Registry issues the Registration Certificate, and the mark is entered in the Register of Trade Marks. The registration is valid for 10 years from the date of filing (not the date of registration) and can be renewed indefinitely for successive 10-year periods by filing Form TM-R and paying the prescribed renewal fee.",
      },
      {
        heading: "Protecting and Enforcing Your Trademark",
        content:
          "Registration gives you the exclusive right to use the mark in relation to the goods or services for which it is registered. The registered trademark symbol (R in a circle) can only be used after the registration certificate is issued. Using the R symbol without valid registration is an offence punishable with imprisonment and fine under Section 107 of the Trade Marks Act.\n\nTo maintain your trademark registration, you must renew it every 10 years and actively use the mark in commerce. A registered trademark that is not used for a continuous period of 5 years and 1 month is vulnerable to cancellation by any interested person under Section 47 of the Act.\n\nIf you discover trademark infringement (unauthorized use of your registered mark or a deceptively similar mark), you can take several actions. A cease and desist notice is usually the first step, informing the infringer about your registration and demanding they stop using the mark. If the infringement continues, you can file a suit for trademark infringement and passing off in the District Court or the High Court.\n\nAdditionally, the Customs (IPR Enforcement) Rules, 2007 allow you to record your trademark with the Indian Customs authorities to prevent import of counterfeit goods bearing your mark. This is particularly important for brands facing counterfeiting issues from imported goods.\n\nLegalApex assists clients not only with trademark filing but also with post-registration monitoring and enforcement through watch services that track new applications that may conflict with your registered mark.",
      },
    ],
    keywords: [
      "trademark registration India",
      "how to file trademark India",
      "trademark filing process",
      "TM registration India",
      "trademark search India",
      "Nice Classification trademark",
      "Trade Marks Act India",
    ],
  },
  {
    slug: "itr-filing-guide-beginners",
    title: "ITR Filing Guide for Beginners: Everything You Need to Know",
    metaTitle: "ITR Filing Guide for Beginners: Everything You Need to Know | LegalApex",
    metaDescription:
      "Beginner's guide to filing income tax returns in India. Learn about ITR forms, deductions under 80C, 80D, HRA, tax slabs, and step-by-step e-filing process.",
    excerpt:
      "A beginner-friendly guide to income tax return filing in India — understand ITR forms, eligible deductions, tax slabs, and how to file your return on the income tax portal.",
    category: "ITR Filing",
    readTime: "14 min read",
    publishDate: "2025-02-15",
    relatedServiceSlug: "itr-filing",
    sections: [
      {
        heading: "Understanding Income Tax in India: Basics for Beginners",
        content:
          "Income tax in India is governed by the Income Tax Act, 1961, administered by the Central Board of Direct Taxes (CBDT) under the Ministry of Finance. Every individual, HUF, firm, company, and other entities earning income in India above the basic exemption limit are required to pay income tax and file an annual income tax return.\n\nThe basic exemption limit for the Assessment Year 2025-26 (Financial Year 2024-25) is Rs. 2,50,000 for individuals below 60 years of age, Rs. 3,00,000 for senior citizens (60-80 years), and Rs. 5,00,000 for super senior citizens (above 80 years) under the old tax regime. Under the new tax regime introduced in Budget 2023, the basic exemption limit is Rs. 3,00,000 for all individuals.\n\nIncome is classified into five heads under the Act: Income from Salary, Income from House Property, Profits and Gains from Business or Profession, Capital Gains (from sale of property, shares, mutual funds, etc.), and Income from Other Sources (interest, dividends, gifts, etc.). Your total income is the aggregate of income under all these heads, after deductions.\n\nFiling an ITR is mandatory if your gross total income exceeds the basic exemption limit. However, even if your income is below the limit, filing ITR is advisable as it serves as a valid income proof for loans, credit cards, and visa applications. Additionally, if you have paid TDS (Tax Deducted at Source) in excess of your actual liability, filing ITR is the only way to claim a refund.",
      },
      {
        heading: "Choosing the Right ITR Form",
        content:
          "The Income Tax Department prescribes different ITR forms based on the nature and amount of income. Filing the wrong ITR form is a common mistake that can lead to your return being treated as defective. Here is a guide to choosing the correct form:\n\nITR-1 (Sahaj) is the simplest form, meant for resident individuals with total income up to Rs. 50 lakh from three sources: salary or pension, one house property (not a case of brought forward loss), and other sources like interest income (not from lottery or horse racing). This form cannot be used by individuals with capital gains, agricultural income above Rs. 5,000, or foreign income/assets.\n\nITR-2 is for individuals and HUFs who do not have income from business or profession. This is the correct form if you have capital gains (from sale of shares, mutual funds, or property), more than one house property, foreign income or foreign assets, or agricultural income exceeding Rs. 5,000.\n\nITR-3 is for individuals and HUFs who have income from a proprietorship business or profession. If you are a freelancer, consultant, or run a business as a sole proprietor, this is likely your form.\n\nITR-4 (Sugam) is for individuals, HUFs, and partnership firms with income from business or profession computed under presumptive taxation (Section 44AD for business or Section 44ADA for professionals). Under presumptive taxation, you declare income at a prescribed percentage of gross receipts without maintaining detailed books of accounts.\n\nIf you are a salaried individual with only salary income, one house property, and interest income, ITR-1 is your form. If you also have capital gains from selling shares or mutual fund units, you must use ITR-2 instead.",
      },
      {
        heading: "Maximizing Deductions: Section 80C, 80D, HRA, and More",
        content:
          "The Indian tax law provides several deductions and exemptions that can significantly reduce your taxable income. Understanding and claiming all eligible deductions is the key to minimizing your tax liability. Note that most deductions are available only under the old tax regime — the new tax regime offers lower tax rates but with minimal deductions.\n\nSection 80C is the most widely used deduction, allowing up to Rs. 1,50,000 per year for investments and expenses including EPF (Employee Provident Fund), PPF (Public Provident Fund), ELSS (Equity Linked Savings Schemes), NSC (National Savings Certificates), life insurance premium, tuition fees for up to 2 children, principal repayment of home loan, Sukanya Samriddhi Yojana, and 5-year fixed deposits.\n\nSection 80D allows deduction for medical insurance premiums — up to Rs. 25,000 for self and family, and an additional Rs. 25,000 (Rs. 50,000 for senior citizen parents) for parents. Preventive health check-up expenses up to Rs. 5,000 are also covered within this limit.\n\nHRA (House Rent Allowance) exemption under Section 10(13A) is available to salaried individuals living in rented accommodation. The exempt amount is the least of: actual HRA received, rent paid minus 10% of salary, or 50% of salary (for metro cities) / 40% of salary (for non-metro cities). If you pay rent but don't receive HRA, you can claim deduction under Section 80GG up to Rs. 5,000 per month.\n\nOther useful deductions include Section 80E (interest on education loan — no upper limit), Section 80G (donations to eligible charitable institutions — 50% or 100% deduction depending on the institution), Section 80TTA (savings bank interest up to Rs. 10,000), Section 80EEA (additional interest on home loan up to Rs. 1,50,000 for affordable housing), and Section 24(b) (interest on home loan up to Rs. 2,00,000 for self-occupied property).",
      },
      {
        heading: "Step-by-Step ITR Filing Process on the Income Tax Portal",
        content:
          "The Income Tax Department's e-filing portal (incometax.gov.in, managed by the CBDT) is the official platform for filing income tax returns online. Here is a step-by-step guide for first-time filers:\n\nStep 1: Register on the e-filing portal using your PAN as the user ID. Complete the profile setup including personal details, contact information, and bank account details. Link your Aadhaar number with PAN (mandatory under Section 139AA).\n\nStep 2: Gather all documents — Form 16 from employer, Form 26AS (tax credit statement showing TDS credited to your PAN), Annual Information Statement (AIS) showing all financial transactions, bank interest certificates, investment proofs, rent receipts, and any other income/deduction documents.\n\nStep 3: Log in to the portal, go to e-File > Income Tax Returns > File Income Tax Return. Select the appropriate Assessment Year, select the ITR form (the portal also has a wizard to help you select the correct form), and choose the filing mode — online (recommended for ITR-1 and ITR-4) or offline (using the Excel or Java utility for ITR-2 and ITR-3).\n\nStep 4: Fill in the details section by section — personal information, income details (pre-filled from Form 26AS and AIS — verify and correct if needed), deductions under Chapter VI-A, tax computation, and bank account details for refund (if applicable).\n\nStep 5: Preview the computed tax summary. If additional tax is payable, pay the self-assessment tax using Challan 280 on the TIN-NSDL portal before filing. After payment, enter the BSR code, challan serial number, and date of payment in the ITR.\n\nStep 6: Submit the ITR and complete e-verification. E-verification can be done through Aadhaar OTP, net banking, bank account EVC, demat account EVC, or by sending the signed ITR-V to CPC Bangalore by post. The return is not considered filed until e-verification is completed.",
      },
      {
        heading: "Common Mistakes to Avoid While Filing ITR",
        content:
          "Even with the pre-filled data available on the income tax portal, several common mistakes can lead to notices, scrutiny, or refund delays. Being aware of these pitfalls ensures a smooth filing experience.\n\nNot reconciling Form 26AS and AIS with your records is the most common mistake. Form 26AS shows all TDS deducted against your PAN by employers, banks, and other deductors. If there is a mismatch between the income you declare and the income reported in Form 26AS/AIS, you may receive a notice under Section 143(1) or 143(2). Always download and cross-verify these statements before filing.\n\nForgetting to report all bank accounts is another frequent error. All bank accounts held at any time during the financial year (including those closed during the year) must be disclosed in the ITR. Failure to report bank accounts and the interest earned on them can trigger scrutiny.\n\nNot reporting capital gains from mutual fund redemptions, share sales, or property transactions is a serious omission. Even if you have reinvested the sale proceeds, capital gains are taxable in the year of sale. Short-term and long-term capital gains have different tax rates and must be reported correctly in Schedule CG of the ITR.\n\nIncorrect bank account details for refunds can cause significant delays. Ensure the bank account number, IFSC code, and account holder name are correct. The refund account must be pre-validated on the e-filing portal and linked to your PAN. Using an inactive or closed account will result in refund failure, and you will need to raise a refund re-issue request.\n\nFinally, missing the filing deadline attracts a late filing fee of Rs. 5,000 under Section 234F (Rs. 1,000 if total income is below Rs. 5 lakh). Late filing also means you cannot carry forward certain losses (like capital loss or business loss) to future years, and interest under Sections 234A, 234B, and 234C may apply.",
      },
    ],
    keywords: [
      "ITR filing guide",
      "how to file ITR India",
      "income tax return beginners",
      "ITR forms explained",
      "Section 80C deductions",
      "income tax e-filing portal",
      "tax filing India beginners",
    ],
  },
  {
    slug: "iso-certification-process-india",
    title: "ISO Certification Process in India: Requirements & Steps",
    metaTitle: "ISO Certification Process in India: Requirements & Steps | LegalApex",
    metaDescription:
      "Complete guide to ISO certification in India. Learn about ISO 9001, 14001, 27001 requirements, certification process, costs, and how to choose a certification body.",
    excerpt:
      "A comprehensive guide to obtaining ISO certification in India — understand the standards, prepare your documentation, and navigate the certification audit process.",
    category: "ISO Certification",
    readTime: "11 min read",
    publishDate: "2025-02-20",
    relatedServiceSlug: "iso-certification",
    sections: [
      {
        heading: "Understanding ISO Standards: 9001, 14001, and 27001",
        content:
          "The International Organization for Standardization (ISO) develops and publishes international standards that help organizations implement robust management systems. In India, ISO certification is widely recognized as a mark of quality and is often a prerequisite for government tenders, corporate contracts, and international trade.\n\nISO 9001 is the most widely implemented ISO standard globally. It specifies requirements for a Quality Management System (QMS) that helps organizations consistently deliver products and services that meet customer and regulatory requirements. The current version, ISO 9001:2015, follows a process-based approach with emphasis on risk-based thinking and continual improvement.\n\nISO 14001 specifies requirements for an Environmental Management System (EMS). It helps organizations minimize their environmental footprint, comply with applicable environmental laws and regulations, and demonstrate environmental responsibility. This is particularly relevant for manufacturing companies, chemical industries, and organizations in sectors with significant environmental impact.\n\nISO 27001 is the international standard for Information Security Management Systems (ISMS). It provides a framework for protecting the confidentiality, integrity, and availability of information. This standard is essential for IT companies, BPOs, financial institutions, healthcare organizations, and any business that handles sensitive customer data. With increasing cybersecurity threats and data protection regulations, ISO 27001 certification is becoming a business necessity rather than a differentiator.",
      },
      {
        heading: "Preparing for ISO Certification: Gap Analysis and Documentation",
        content:
          "Preparing for ISO certification requires a systematic approach that begins with understanding your current processes and identifying the gaps between your existing practices and the requirements of the chosen ISO standard.\n\nA gap analysis is the first step — it involves reviewing your current management practices, processes, procedures, and documentation against each clause of the ISO standard. The gap analysis report highlights areas of compliance, areas needing improvement, and areas where new processes or documentation must be created. This provides a clear roadmap for implementation.\n\nDocumentation is a cornerstone of any ISO management system. The typical documentation hierarchy includes the Quality/Environmental/Information Security Manual (top-level document describing the management system), Standard Operating Procedures (SOPs) detailing how specific processes are carried out, Work Instructions providing step-by-step guidance for individual tasks, and Records/Forms that provide evidence of activities performed.\n\nFor ISO 9001, key documented procedures include management review, internal audit, control of documents and records, control of nonconforming outputs, corrective action, and risk assessment. For ISO 27001, the documentation is more extensive and includes the information security policy, risk assessment methodology, Statement of Applicability (SoA), risk treatment plan, and policies covering access control, business continuity, incident management, and more.\n\nLegalApex prepares the complete documentation package tailored to your organization's specific processes and industry. We don't provide generic templates — every document is customized to reflect your actual operations, making the implementation practical and the audit process smoother.",
      },
      {
        heading: "The ISO Certification Audit Process",
        content:
          "The ISO certification audit is conducted by an accredited certification body (also called a registrar or certification agency). In India, certification bodies should be accredited by the National Accreditation Board for Certification Bodies (NABCB), which is a constituent board of the Quality Council of India (QCI).\n\nThe certification audit is conducted in two stages. Stage 1 Audit (Documentation Review) is an off-site or on-site review of your management system documentation to assess whether your documented system addresses all the requirements of the ISO standard. The auditor reviews the manual, procedures, and records and identifies any areas where documentation is incomplete or non-compliant. A Stage 1 audit report is issued with findings that must be addressed before proceeding to Stage 2.\n\nStage 2 Audit (Certification Audit) is a more thorough on-site audit where the auditor verifies that the documented management system is effectively implemented and maintained. The auditor interviews employees, observes processes, reviews records, and assesses the effectiveness of your management system. Any non-conformities identified are classified as major (requiring resolution before certification) or minor (requiring a corrective action plan).\n\nUpon successful completion of the Stage 2 audit and resolution of any major non-conformities, the certification body issues the ISO certificate. The certificate specifies the scope of certification (which locations, products, and services are covered), the applicable ISO standard, and the validity period (typically 3 years).\n\nChoosing the right certification body is important — ensure they are NABCB accredited and have experience in your industry sector. Avoid fly-by-night certification agencies that may issue certificates without proper audits, as such certificates may not be recognized by clients or in tenders.",
      },
      {
        heading: "Maintaining ISO Certification: Surveillance and Re-certification",
        content:
          "Obtaining ISO certification is not a one-time event — maintaining it requires ongoing commitment to the management system and compliance with the standard's requirements. Certification bodies conduct regular surveillance audits to verify continued compliance.\n\nSurveillance audits are typically conducted annually (some certification bodies may do them semi-annually). These audits are smaller in scope than the initial certification audit and focus on specific areas of the management system. The auditor checks whether corrective actions from previous audits have been implemented, internal audits are being conducted regularly, management reviews are held, and the management system continues to be effective.\n\nRe-certification audit is required at the end of the 3-year certification cycle. This is a comprehensive audit similar to the initial certification audit and covers all clauses of the standard. A successful re-certification audit results in the issuance of a new certificate for another 3-year period.\n\nTo maintain your management system effectively between audits, you should conduct regular internal audits (at least annually), hold management review meetings to evaluate system performance, track and resolve customer complaints and non-conformities, keep documentation updated to reflect process changes, and ensure employee training and awareness programs are ongoing.\n\nThe cost of ISO certification in India varies based on the size of the organization, number of employees, number of locations, and the chosen certification body. For a small to medium enterprise, the total cost including documentation preparation, implementation support, and certification body fees typically ranges from Rs. 50,000 to Rs. 2,00,000 depending on the standard and complexity.",
      },
    ],
    keywords: [
      "ISO certification India",
      "ISO certification process",
      "ISO 9001 certification India",
      "ISO 14001 certification",
      "ISO 27001 certification India",
      "ISO audit process",
      "NABCB certification body India",
    ],
  },
  {
    slug: "documents-required-company-registration",
    title: "Documents Required for Company Registration in India",
    metaTitle: "Documents Required for Company Registration in India | LegalApex",
    metaDescription:
      "Complete checklist of documents required for Private Limited, LLP, and OPC registration in India. Director documents, address proof, DSC, and MCA requirements.",
    excerpt:
      "A comprehensive checklist of all documents required for company registration in India, covering Private Limited, LLP, and OPC incorporation with MCA.",
    category: "Company Registration",
    readTime: "8 min read",
    publishDate: "2025-03-01",
    relatedServiceSlug: "company-registration",
    sections: [
      {
        heading: "Director and Shareholder Identity Documents",
        content:
          "Every proposed director and shareholder of the company must provide identity and address proof documents. These documents are verified by MCA during the incorporation process and are essential for obtaining Director Identification Numbers (DIN).\n\nFor Indian nationals, the mandatory documents include PAN Card (this is non-negotiable — PAN is required for all financial and regulatory filings), Aadhaar Card (used for identity verification and digital signature), and recent passport-size photographs. Additionally, a valid address proof in the form of Voter ID, valid Passport, or Driving License is required.\n\nFor NRIs and Foreign Nationals acting as directors or shareholders, a valid Passport (notarized and apostilled from the country of residence) is mandatory. They must also provide an overseas address proof — typically a bank statement, utility bill, or government-issued document not older than 2 months, notarized and apostilled. Foreign nationals do not need an Indian PAN at the time of incorporation, but they must obtain one within a stipulated period after the company is incorporated.\n\nIt is important to note that at least one director must be an Indian resident — defined as a person who has stayed in India for a total period of not less than 182 days during the immediately preceding financial year. This requirement cannot be waived and applies to all types of companies registered under the Companies Act, 2013.",
      },
      {
        heading: "Registered Office Address Documents",
        content:
          "Every company must have a registered office address in India from the date of incorporation. This address is where all official communications from MCA, ROC, and other government authorities are sent. The registered office need not be the primary place of business — it can be a virtual office in certain states.\n\nFor owned premises, you need a property tax receipt, electricity bill, or water bill in the name of the property owner (not older than 2 months), and a utility bill showing the complete address. If the property is jointly owned, a NOC from all co-owners may be required.\n\nFor rented premises, a rent agreement or lease deed is required along with a No Objection Certificate (NOC) from the landlord specifically permitting the use of the premises as a registered office. The NOC should be on the landlord's letterhead (if a company) or on plain paper with the landlord's signature and address proof. Additionally, the latest electricity bill of the premises is required as address proof.\n\nIf you are registering the company at a co-working space or virtual office address, check whether your state's ROC (Registrar of Companies) accepts such addresses. States like Karnataka, Maharashtra, and Delhi generally accept co-working space addresses, but they may require additional documentation like the co-working space provider's NOC and their business registration documents.",
      },
      {
        heading: "Digital Signature Certificate (DSC) Requirements",
        content:
          "A Digital Signature Certificate (DSC) is mandatory for all directors of the proposed company. The DSC is used to digitally sign all MCA forms, including the SPICe+ incorporation form, MOA, AOA, and all subsequent annual filings. Only Class 2 or above DSC issued by a Certifying Authority (CA) recognized by the Controller of Certifying Authorities (CCA) under the Information Technology Act, 2000 is accepted.\n\nTo obtain a DSC, each director needs to provide their PAN Card, Aadhaar Card, an email address (unique to each director), and a mobile number. The DSC is typically issued within 1-2 working days when using Aadhaar-based e-KYC verification.\n\nFor directors located outside India, the DSC process involves additional verification steps. Foreign directors must provide their passport and overseas address proof, which are verified by the certifying authority through video KYC or attestation by the Indian Embassy/Consulate in their country of residence.\n\nThe DSC has a validity period of 1-2 years (depending on the issuing authority) and must be renewed upon expiry. All forms filed with MCA require a valid DSC, so directors should ensure their DSC is current. The DSC is also required for filing income tax returns of the company, GST returns (for companies and LLPs), and other statutory filings.",
      },
      {
        heading: "Additional Documents for LLP and OPC Registration",
        content:
          "While the basic document requirements for LLP and OPC registration overlap with Private Limited Company registration, there are some specific additional requirements for these entity types.\n\nFor LLP Registration, the key additional document is the LLP Agreement. This is a comprehensive document that defines the mutual rights and obligations of the partners and the LLP. It covers the name and registered office of the LLP, name and address of partners, business objectives, capital contribution of each partner, profit sharing ratio, management structure, and provisions for admission and retirement of partners. The LLP Agreement must be filed with the ROC within 30 days of the date of incorporation using Form 3. If not filed within 30 days, a penalty of Rs. 100 per day applies.\n\nFor OPC Registration, the unique requirement is the nomination of a nominee who will become the member of the company in the event of the sole member's death or incapacity. The consent of the nominee must be obtained in Form INC-3, and the nominee's PAN, Aadhaar, and address proof must be submitted along with the incorporation documents. The nominee must be an Indian citizen and resident.\n\nFor both LLP and OPC, the subscriber sheet (equivalent to MOA) and incorporation form (FiLLiP for LLP, SPICe+ for OPC) require specific declarations from practicing professionals — a Chartered Accountant, Company Secretary, or Cost Accountant in practice must certify the compliance of all requirements.\n\nIt is advisable to keep certified copies of all submitted documents for your records. MCA may request additional documents or clarifications during the processing of your application, and having everything organized can help you respond quickly and avoid delays in incorporation.",
      },
    ],
    keywords: [
      "documents for company registration India",
      "company registration documents list",
      "private limited company documents",
      "LLP registration documents",
      "MCA registration documents",
      "DSC for company registration",
      "registered office address proof",
    ],
  },
  {
    slug: "llp-vs-pvt-ltd-comparison",
    title: "LLP vs Private Limited Company: Which is Better for Your Business?",
    metaTitle: "LLP vs Private Limited Company: Which is Better for Your Business? | LegalApex",
    metaDescription:
      "Detailed comparison of LLP vs Private Limited Company in India. Compare compliance, taxation, liability, fundraising, and choose the right structure for your business.",
    excerpt:
      "A detailed comparison between LLP and Private Limited Company in India — covering legal structure, compliance, taxation, liability, and which is better for different business types.",
    category: "Company Registration",
    readTime: "10 min read",
    publishDate: "2025-03-10",
    relatedServiceSlug: "company-registration",
    sections: [
      {
        heading: "Legal Structure and Governance",
        content:
          "Understanding the fundamental legal differences between an LLP and a Private Limited Company is essential for making an informed choice. Both entities are registered with the Ministry of Corporate Affairs (MCA) but are governed by different laws.\n\nA Limited Liability Partnership (LLP) is governed by the Limited Liability Partnership Act, 2008. It combines the flexibility of a partnership with the limited liability of a company. An LLP is a separate legal entity from its partners, meaning it can own property, sue and be sued in its own name. The minimum requirement is 2 designated partners (there is no maximum limit), and at least one must be an Indian resident.\n\nA Private Limited Company is governed by the Companies Act, 2013. It is a separate legal entity with perpetual succession, meaning the company continues to exist regardless of changes in membership. It requires a minimum of 2 directors and 2 shareholders (maximum 200 shareholders), and at least one director must be an Indian resident. The company is managed by the Board of Directors, and major decisions require shareholder approval.\n\nThe governance structure differs significantly. An LLP is managed as per the LLP Agreement, which the partners can customize extensively. There is no mandatory requirement for board meetings or annual general meetings. A Private Limited Company, on the other hand, must follow strict corporate governance requirements including regular board meetings (minimum 4 per year), Annual General Meetings, maintenance of statutory registers, and adherence to the Companies Act provisions on related party transactions, managerial appointments, and more.",
      },
      {
        heading: "Compliance and Regulatory Requirements",
        content:
          "The compliance burden is one of the most significant differences between an LLP and a Private Limited Company. For entrepreneurs who prefer simpler operations, this can be a deciding factor.\n\nLLP Compliances are relatively minimal. The primary annual filings include Form 8 (Statement of Account and Solvency, due within 30 days of 6 months from the close of the financial year) and Form 11 (Annual Return, due within 60 days from the close of the financial year). LLPs with turnover exceeding Rs. 40 lakh or partner contribution exceeding Rs. 25 lakh must get their accounts audited. There is no requirement for regular board meetings, statutory registers, or elaborate governance procedures.\n\nPrivate Limited Company Compliances are more extensive. Mandatory annual filings with ROC include Form AOC-4 (financial statements), MGT-7/MGT-7A (annual return), ADT-1 (auditor appointment), and DIR-3 KYC (director KYC). The company must hold a minimum of 4 board meetings per year (with no gap exceeding 120 days between meetings) and an Annual General Meeting within 6 months of the financial year-end. A statutory audit is mandatory regardless of turnover.\n\nThe cost of compliance for a Private Limited Company is significantly higher than for an LLP. Annual compliance costs including auditor fees, ROC filing fees, and professional charges can range from Rs. 15,000-50,000 for an LLP compared to Rs. 30,000-1,00,000 for a Private Limited Company, depending on the complexity of operations.\n\nNon-compliance attracts penalties under both laws. However, penalties under the Companies Act tend to be more severe and can include prosecution of directors for certain defaults. LLP Act penalties are generally monetary and less stringent.",
      },
      {
        heading: "Taxation: LLP vs Private Limited Company",
        content:
          "Taxation is a critical factor in choosing between an LLP and a Private Limited Company. While the corporate tax rates are similar, the way profits are distributed and taxed differs significantly.\n\nBoth LLPs and Private Limited Companies are taxed at the flat rate of 30% (plus surcharge and cess) on their net profit. Companies with turnover up to Rs. 400 crore in the previous year are taxed at 25%. Companies opting for the new tax regime under Section 115BAA pay a reduced rate of 22% (effective rate approximately 25.17% including surcharge and cess), but they cannot claim most exemptions and deductions.\n\nThe key taxation difference lies in profit distribution. In an LLP, profits distributed to partners are not taxed again in the hands of the partners — there is no Dividend Distribution Tax (DDT) or additional income tax on profit distribution. Partners receive their share of profits tax-free. This makes LLPs more tax-efficient for businesses that regularly distribute profits to owners.\n\nIn a Private Limited Company, dividends paid to shareholders are taxed in the hands of shareholders at their applicable income tax slab rates. Additionally, if dividend income exceeds Rs. 5,000 in a year, TDS at 10% is deducted before payment. This results in effective double taxation — the company pays corporate tax on profits, and shareholders pay income tax on dividends received.\n\nFor businesses where owners want to regularly withdraw profits, LLPs offer a clear tax advantage. For businesses focused on growth and reinvestment (where profits are retained in the entity rather than distributed), the tax difference is less significant.",
      },
      {
        heading: "Fundraising, Credibility, and Exit Options",
        content:
          "If your business plans include raising external funding, attracting investors, or eventually selling the business, the choice of entity type has significant implications.\n\nPrivate Limited Companies have a clear advantage in fundraising. They can issue shares (equity and preference), accept venture capital and private equity investment, issue Employee Stock Option Plans (ESOPs) to attract talent, and eventually list on stock exchanges through an IPO. Most institutional investors, angel networks, and venture capital funds invest only in Private Limited Companies because the share structure allows for clean entry and exit, valuation mechanisms, and liquidation preferences.\n\nLLPs cannot issue shares or equity stakes. Investment in an LLP is structured as a capital contribution, which is fundamentally different from equity investment. LLPs cannot issue ESOPs, and there is no standardized mechanism for investors to have liquidation preferences or anti-dilution rights. As a result, most VCs and angel investors will not invest in LLPs. If you have plans to raise external funding, a Private Limited Company is almost always the better choice.\n\nIn terms of credibility, Private Limited Companies generally carry more weight with banks (for loans and credit facilities), government departments (for contracts and tenders), and large corporate clients. However, for professional services firms (CA firms, law firms, consulting firms), LLPs are widely accepted and preferred due to the flexibility of partnership structure.\n\nExit options also differ. A Private Limited Company can be acquired through a share purchase agreement, making exits cleaner and more structured. LLP exits involve transfer of partnership interest, which is subject to the LLP Agreement terms and requires consent of other partners. For tech startups and high-growth businesses planning for eventual acquisition or IPO, the Private Limited structure is significantly more advantageous.\n\nFor small businesses, consulting firms, and professional practices that plan to remain owner-operated without external investment, an LLP offers the advantages of limited liability, tax efficiency, and simpler compliance. For startups with growth ambitions, fundraising plans, or aspirations for a future exit event, a Private Limited Company is the recommended structure.",
      },
    ],
    keywords: [
      "LLP vs Private Limited",
      "LLP vs Pvt Ltd comparison",
      "which is better LLP or Pvt Ltd",
      "LLP advantages disadvantages",
      "Private Limited Company advantages",
      "business structure India comparison",
      "LLP or company for startup",
    ],
  },
];

// ─── ABOUT PAGE CONFIG ──────────────────────────────────────────────────────────

export interface AboutPageConfig {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  mission: string;
  values: { title: string; description: string }[];
  team: { title: string; description: string };
}

export const ABOUT_PAGE_CONFIG: AboutPageConfig = {
  metaTitle: "About LegalApex | Trusted Legal Services Platform in India",
  metaDescription:
    "Learn about LegalApex — India's trusted legal services platform providing affordable, transparent, and reliable legal assistance for individuals and businesses across India.",
  heroTitle: "Making Legal Services Simple for Every Indian",
  heroDescription:
    "LegalApex was founded with a simple belief: legal services should be accessible, affordable, and transparent. We connect individuals and businesses with verified legal professionals across India, making complex legal processes simple through technology and dedicated personal support.",
  mission:
    "Our mission is to democratize access to legal services in India. Too many individuals and small businesses struggle with legal processes that should be straightforward — from changing a name to registering a company. We bridge the gap between complex legal requirements and everyday people by providing expert-assisted services at transparent prices, delivered through the convenience of WhatsApp and our digital platform.",
  values: [
    {
      title: "Transparency",
      description:
        "No hidden fees, no surprise charges. We communicate the exact cost — including government fees — before you commit. Every step of the process is visible to you through real-time WhatsApp updates.",
    },
    {
      title: "Accessibility",
      description:
        "Legal services should not be limited by geography or budget. We serve clients across all Indian states and cities, with services starting at just Rs. 499. Our WhatsApp-first approach ensures you can access expert help from anywhere.",
    },
    {
      title: "Reliability",
      description:
        "Every case is handled by a verified legal professional with relevant expertise. We maintain strict quality checks, provide dedicated case managers, and take accountability for the timely completion of every engagement.",
    },
    {
      title: "Client-First Approach",
      description:
        "We listen before we advise. Every client's situation is unique, and we tailor our approach accordingly. From the first consultation to the final delivery, your satisfaction and peace of mind are our primary objectives.",
    },
  ],
  team: {
    title: "Our Team",
    description:
      "LegalApex is powered by a network of experienced legal professionals including Chartered Accountants, Company Secretaries, trademark attorneys, and compliance experts. Our team brings together expertise across corporate law, taxation, intellectual property, and regulatory compliance. Each professional in our network is vetted for qualifications, experience, and track record before being onboarded to ensure you receive the highest quality of service.",
  },
};

// ─── CONTACT PAGE CONFIG ────────────────────────────────────────────────────────

export interface ContactPageConfig {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  officeHours: string;
  responseTime: string;
}

export const CONTACT_PAGE_CONFIG: ContactPageConfig = {
  metaTitle: "Contact LegalApex | Get Free Legal Consultation",
  metaDescription:
    "Contact LegalApex for free legal consultation. Reach us via WhatsApp, email, or phone. Mon-Sat, 9 AM - 7 PM IST. Expert assistance for all legal services.",
  heroTitle: "Get in Touch",
  heroDescription:
    "Have questions about our services or need help with a legal matter? Our team is ready to assist you. Reach out via WhatsApp for the fastest response, or use any of the contact methods below. Your first consultation is always free.",
  officeHours: "Mon-Sat, 9:00 AM - 7:00 PM IST",
  responseTime: "We typically respond within 30 minutes during business hours",
};

// ─── LEGAL PAGES CONFIG ─────────────────────────────────────────────────────────

export interface LegalPageConfig {
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  sections: { heading: string; content: string }[];
}

export interface LegalPagesConfig {
  privacy: LegalPageConfig;
  terms: LegalPageConfig;
  refund: LegalPageConfig;
}

export const LEGAL_PAGES_CONFIG: LegalPagesConfig = {
  privacy: {
    metaTitle: "Privacy Policy | LegalApex",
    metaDescription:
      "Read LegalApex's privacy policy. Learn how we collect, use, store, and protect your personal data and documents in compliance with Indian data protection laws.",
    lastUpdated: "February 2025",
    sections: [
      {
        heading: "Introduction",
        content:
          "LegalApex (\"we\", \"us\", or \"our\"), operated through the website legalapex.in, is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services. By accessing our website or engaging our services, you consent to the practices described in this policy. This policy is compliant with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and applicable provisions of the Digital Personal Data Protection Act, 2023.",
      },
      {
        heading: "Information We Collect",
        content:
          "We collect personal information that you voluntarily provide to us when you enquire about our services, engage us for a legal service, or communicate with us through WhatsApp, email, phone, or our website contact form. This includes your full name, email address, phone number, postal address, PAN number, Aadhaar number, and other identification documents required for specific legal services.\n\nFor specific services like company registration, GST registration, or ITR filing, we may collect additional information such as financial documents, business registration details, director/partner information, income details, investment proofs, and other documents necessary to complete the legal service you have engaged us for.\n\nWe also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages visited, and the dates and times of visits. This information is collected through cookies and similar tracking technologies and is used solely for website analytics and improvement.",
      },
      {
        heading: "How We Use Your Information",
        content:
          "We use the personal information we collect for the following purposes: to provide, operate, and maintain the legal services you have engaged us for; to process your documents and applications with relevant government authorities; to communicate with you about your case status, updates, and related information; to respond to your enquiries and provide customer support; to send you relevant service updates and notifications (with your consent); to comply with our legal and regulatory obligations; and to improve our website, services, and user experience.\n\nWe do not use your personal data for any purpose other than the specific legal service for which it was provided. We do not engage in automated decision-making or profiling using your personal data. Your documents and information are used exclusively by the legal professional assigned to your case and our internal quality review team.",
      },
      {
        heading: "Data Sharing and Disclosure",
        content:
          "We do not sell, trade, rent, or otherwise share your personal information with third parties for their marketing purposes. We share your information only in the following limited circumstances:\n\nWith verified legal professionals in our network who are assigned to handle your specific case. These professionals are bound by confidentiality agreements and professional ethics standards.\n\nWith government authorities and departments (such as MCA, GST portal, Income Tax Department, Trademark Registry, Government Press) solely for the purpose of filing your applications and completing the legal services you have engaged.\n\nWith our technology service providers who assist in website hosting, communication, and data storage, all of whom are contractually obligated to maintain the confidentiality and security of your data.\n\nWhen required by law, regulation, legal process, or enforceable governmental request, including compliance with any court order or regulatory authority directive.",
      },
      {
        heading: "Data Security",
        content:
          "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include encrypted communication channels (SSL/TLS), secure document handling procedures, access controls limiting data access to authorized personnel only, and regular security reviews.\n\nWhatsApp communications are protected by WhatsApp's end-to-end encryption. Documents shared via WhatsApp or email are handled with strict confidentiality and are deleted from our systems within 90 days of service completion, unless retention is required for legal or regulatory purposes.\n\nWhile we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to avoid sharing sensitive information through unsecured channels.",
      },
      {
        heading: "Data Retention",
        content:
          "We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. Typically, case-related documents are retained for a period of 3 years from the date of service completion, in accordance with applicable laws and professional standards.\n\nAfter the retention period, personal data and documents are securely deleted or anonymized. You may request earlier deletion of your data by contacting us at hello@legalapex.in, subject to any legal or regulatory obligations that require us to retain certain records.",
      },
      {
        heading: "Your Rights",
        content:
          "Under applicable Indian data protection laws, you have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (subject to legal retention requirements), withdraw consent for data processing, and lodge a complaint with the relevant data protection authority.\n\nTo exercise any of these rights, please contact us at hello@legalapex.in or reach out to us via WhatsApp. We will respond to your request within 30 days.",
      },
      {
        heading: "Changes to This Policy",
        content:
          "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a revised \"Last Updated\" date. We encourage you to review this policy periodically. Your continued use of our services after any changes constitutes acceptance of the updated policy.",
      },
    ],
  },
  terms: {
    metaTitle: "Terms of Service | LegalApex",
    metaDescription:
      "Read LegalApex's terms of service. Understand the terms and conditions governing the use of our legal services platform, payment terms, and service delivery.",
    lastUpdated: "February 2025",
    sections: [
      {
        heading: "Acceptance of Terms",
        content:
          "These Terms of Service (\"Terms\") govern your use of the LegalApex website (legalapex.in) and the legal services provided through our platform. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.\n\nLegalApex reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website or services after any modifications constitutes acceptance of the updated Terms.",
      },
      {
        heading: "Nature of Services",
        content:
          "LegalApex is a legal services facilitation platform that connects users with verified independent legal professionals for various legal and compliance services. We are not a law firm, a chartered accountancy firm, or a government body. We do not provide legal advice or legal opinions.\n\nOur services include facilitation and coordination of legal documentation, application filing, and compliance processes through our network of independent legal practitioners, Chartered Accountants, Company Secretaries, and other qualified professionals. The actual legal work is performed by these independent professionals, and LegalApex acts as a platform facilitating the service delivery.\n\nThe information provided on our website, blog posts, and communications is for general informational purposes only and does not constitute legal advice. For specific legal advice tailored to your situation, we recommend consulting a qualified advocate or solicitor.",
      },
      {
        heading: "Service Engagement and Payment",
        content:
          "Service engagement begins when you contact us through WhatsApp, phone, or our website, and a service scope and price are mutually agreed upon. No work is commenced until you provide explicit confirmation to proceed.\n\nOur listed prices on the website are indicative starting prices for professional service charges. The actual price for your specific case may vary based on complexity, state-specific requirements, and additional services required. The final price, including any government fees, stamp duty, or third-party charges, will be communicated to you before you confirm the engagement.\n\nPayment can be made through UPI, bank transfer (NEFT/IMPS), or digital wallets as communicated by our team. Payment is typically collected in advance or in milestones as agreed. Government fees, stamp duty, notary charges, and other statutory charges are collected separately and are payable in addition to our professional fees.\n\nAll payments are processed in Indian Rupees (INR). We issue a receipt for all payments received. GST at the applicable rate is charged on our professional fees and reflected in the receipt.",
      },
      {
        heading: "Service Delivery and Timelines",
        content:
          "We commit to delivering services within the timelines communicated at the time of engagement. However, timelines are indicative and subject to factors beyond our control, including government processing times, public holidays, workload at government departments, and the completeness and accuracy of documents provided by you.\n\nYou are responsible for providing accurate, complete, and genuine documents as requested for your service. Providing false or misleading information may result in rejection of applications, legal consequences, and termination of our services without refund.\n\nWe will keep you informed of the progress of your case through WhatsApp updates. If there are any delays or issues, we will notify you promptly and provide an updated timeline. Our obligation is to file your application correctly and follow up diligently — approval of applications by government authorities is beyond our control.",
      },
      {
        heading: "Limitation of Liability",
        content:
          "LegalApex shall not be liable for any rejection or delay in processing of applications by government authorities, any loss or damage arising from inaccurate or incomplete information provided by you, any changes in government policies, rules, or fees that affect the outcome or cost of your service, any indirect, incidental, or consequential damages arising from the use of our services, or any unauthorized access to or loss of data due to circumstances beyond our reasonable control.\n\nOur total liability for any claim arising from our services shall not exceed the amount of professional fees paid by you for the specific service in question. This limitation does not apply to liability that cannot be excluded or limited by law.",
      },
      {
        heading: "Intellectual Property",
        content:
          "All content on the LegalApex website, including text, graphics, logos, images, blog posts, and software, is the property of LegalApex and is protected by Indian copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on our website without our prior written consent.\n\nThe LegalApex name, logo, and tagline are trademarks of LegalApex. Use of these marks without our written permission is prohibited.",
      },
      {
        heading: "Governing Law and Dispute Resolution",
        content:
          "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.\n\nBefore initiating any legal proceedings, both parties agree to attempt to resolve the dispute through good-faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, either party may initiate legal proceedings in the appropriate court.",
      },
    ],
  },
  refund: {
    metaTitle: "Refund Policy | LegalApex",
    metaDescription:
      "Read LegalApex's refund policy. Understand refund eligibility, cancellation terms, and the refund process for our legal services in India.",
    lastUpdated: "February 2025",
    sections: [
      {
        heading: "Refund Policy Overview",
        content:
          "At LegalApex, we strive to deliver every service to your complete satisfaction. However, we understand that circumstances may arise where a refund is warranted. This Refund Policy outlines the conditions under which refunds are available, the process for requesting a refund, and the timelines for processing.\n\nThis policy applies to all professional service fees paid to LegalApex. Government fees, stamp duty, notary charges, newspaper publication charges, and other third-party fees are generally non-refundable once paid to the respective authority or vendor, as these are external charges beyond our control.",
      },
      {
        heading: "Full Refund Eligibility",
        content:
          "You are eligible for a full refund of professional service fees in the following cases:\n\nIf you cancel the service before any work has been initiated by our team. Work is considered initiated once we begin document review, application drafting, or any processing activity.\n\nIf we are unable to provide the service due to reasons attributable solely to LegalApex, such as unavailability of a qualified professional, failure to initiate work within the committed timeline (without valid external reasons), or any error or negligence on our part that makes the service undeliverable.\n\nIf you are charged in error or double-charged for the same service, a full refund of the excess amount will be processed immediately.",
      },
      {
        heading: "Partial Refund and Non-Refundable Scenarios",
        content:
          "A partial refund may be issued in cases where work has been partially completed before cancellation. The refund amount will be determined based on the stage of work completed and the effort invested. We will communicate the refund breakdown transparently before processing.\n\nRefunds are generally not available in the following scenarios: when the service has been fully delivered (for example, documents have been filed with the government authority); when the application is rejected by a government authority due to reasons not attributable to our error (such as inaccurate information provided by the client, non-eligibility of the applicant, or policy changes); when government fees, stamp duty, or third-party charges have already been remitted; or when the client fails to provide required documents within 30 days of engagement despite repeated follow-ups, leading to service abandonment.\n\nFor services involving government filing (such as company registration, GST registration, or trademark filing), once the application has been submitted to the government portal or authority, professional service fees are non-refundable as the work has been substantially completed on our end.",
      },
      {
        heading: "How to Request a Refund",
        content:
          "To request a refund, please contact us through any of the following channels: WhatsApp at +91 73026 17785, email at hello@legalapex.in, or through our website contact form. Please include your name, service engaged, date of payment, payment amount, reason for the refund request, and any supporting details.\n\nOur team will acknowledge your refund request within 24 hours and conduct a review within 3-5 working days. We will communicate the outcome of the review and the refund amount (if applicable) to you. If you are not satisfied with the outcome, you may escalate the matter, and a senior team member will review your case.",
      },
      {
        heading: "Refund Processing Timeline",
        content:
          "Approved refunds are processed within 7-10 working days from the date of approval. Refunds are issued to the same payment method used for the original payment (bank account for NEFT/IMPS payments, UPI ID for UPI payments). In exceptional cases where the original payment method is not available, we will work with you to find an alternative refund method.\n\nPlease note that while we process the refund promptly on our end, the actual credit to your account may take additional time depending on your bank or payment provider. If you do not receive the refund within 15 working days of the approval date, please contact us for assistance.",
      },
      {
        heading: "Service Redo and Dispute Resolution",
        content:
          "Before processing a refund, we may offer a service redo if the issue can be resolved by re-performing the service. For example, if a document was drafted with errors, we will offer to correct and re-draft it at no additional cost before considering a refund. Our goal is to ensure you receive the service you paid for to your satisfaction.\n\nIf you have a dispute regarding a refund decision, please escalate the matter by emailing hello@legalapex.in with the subject line \"Refund Dispute\". A senior team member will review your case and respond within 5 working days with a final resolution. We are committed to fair and transparent handling of all refund requests and disputes.",
      },
    ],
  },
};
