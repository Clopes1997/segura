export interface HeroContent {
  title: string;
  titleEmphasis: string;
  titleSuffix: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  stats: string[];
}

export interface PlatformContent {
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaPrimaryLink: string;
  ctaSecondary: string;
  ctaSecondaryLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhySeguraContent {
  title: string;
  items: FAQItem[];
  ctaPrimary: string;
  ctaPrimaryLink: string;
  ctaSecondary: string;
  ctaSecondaryLink: string;
}

export interface FAQContent {
  title: string;
  items: FAQItem[];
}

export interface TestimonialContent {
  quote: string;
  quoteDetail: string;
  author: string;
  stats: Array<{
    number: string;
    description: string;
  }>;
  ctaText: string;
  ctaLink: string;
}

export interface ComplianceStandard {
  name: string;
  link: string;
  icon?: string;
}

export interface ComplianceContent {
  title: string;
  introText: string;
  description: string;
  emphasis: string;
  ctaText: string;
  ctaLink: string;
  standards: ComplianceStandard[];
}

export interface SoftwareReviewContent {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface GartnerReportContent {
  title: string;
  subtitle: string;
  introText: string;
  items: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ComparisonContent {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface SupportContent {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface AwardsContent {
  title: string;
  quote: string;
  author: string;
}

export interface BlogCard {
  image: string;
  link: string;
}

export interface BlogCardsContent {
  title: string;
  description: string;
  cards: BlogCard[];
}

export interface StripeCTAContent {
  text: string;
  ctaText: string;
  ctaLink: string;
}

export interface HomepageContent {
  hero: HeroContent;
  platform: PlatformContent;
  partners: {
    title: string;
  };
  whySegura: WhySeguraContent;
  faq: FAQContent;
  testimonials: TestimonialContent;
  compliance: ComplianceContent;
  softwareReview: SoftwareReviewContent;
  gartnerReport: GartnerReportContent;
  comparison: ComparisonContent;
  support: SupportContent;
  awards: AwardsContent;
  blogCards: BlogCardsContent;
  stripeCTA: StripeCTAContent;
}

export interface NavigationContent {
  topBanner: {
    announcement: string;
    linkText: string;
    linkUrl: string;
  };
  topMenu: {
    becomePartner: string;
    contact: string;
    support: string;
    docs: string;
  };
  cta: {
    bookDemo: string;
  };
  platform: {
    label: string;
    products: Array<{ title: string; description: string; href: string }>;
    cta: { title: string; description: string; buttonText: string; href: string };
  };
  solutions: {
    label: string;
    byUseCase: { sectionTitle: string; items: Array<{ label: string; href: string }> };
    useCaseColumn2: { sectionTitle: string; items: Array<{ label: string; href: string }> };
    byIndustry: { sectionTitle: string; items: Array<{ label: string; href: string }> };
    byCertification: { sectionTitle: string; items: Array<{ label: string; href: string }> };
  };
  partners: {
    label: string;
    affinityProgram: string;
    aboutProgram: string;
    becomePartner: string;
    seguraOnAzure: string;
    partnersGroupLinkedIn: string;
    opportunityBooking: string;
    opportunityBookingDesc: string;
    requestNow: string;
    seePartners: string;
    seePartnersDesc: string;
    findPartner: string;
  };
  services: {
    label: string;
    deploymentAndConsulting: string;
    deploymentDesc: string;
    exploreDeployment: string;
    solutionCenter: string;
    solutionCenterDesc: string;
    exploreSolutionCenter: string;
    training: string;
    trainingDesc: string;
    exploreTraining: string;
  };
  company: {
    label: string;
    aboutUs: string;
    meetSegura: string;
    careers: string;
    contactUs: string;
    buildWithUs: string;
    whySegura: string;
    advantage: string;
    pricing: string;
    trustCenter: string;
    awards: string;
    mea: string;
    jiuJitCISO: string;
    news: string;
    inTheNews: string;
    pressRoom: string;
    centersOfExcellence: string;
    saoPaulo: string;
    riyadh: string;
    austin: string;
    katowice: string;
    kualaLumpur: string;
    singapore: string;
    manila: string;
    soon: string;
  };
  resources: {
    label: string;
    productInfo: { sectionTitle: string; items: Array<{ label: string; href: string }>; docsLabel: string };
    cybersecurityInfo: { sectionTitle: string; items: Array<{ label: string; href: string }> };
    reports: { sectionTitle: string; items: Array<{ label: string; href: string }> };
    legal: { sectionTitle: string; items: Array<{ label: string; href: string }> };
  };
}

export interface FooterContent {
  stayConnected: {
    title: string;
    description: string;
    ctaText: string;
  };
  support: {
    title: string;
    documentation: string;
    solutionCenter: string;
    suggestions: string;
    trainingAndCertification: string;
    deploymentAndConsulting: string;
    supportPolicy: string;
  };
  resources: {
    title: string;
    blog: string;
    eBooks: string;
    whitepapers: string;
    datasheets: string;
    infographics: string;
    caseStudies: string;
    webinarsAndEvents: string;
  };
  partners: {
    title: string;
    aboutTheProgram: string;
    becomeAPartner: string;
    securityAllianceProgram: string;
    university: string;
  };
  company: {
    title: string;
    aboutUs: string;
    achievements: string;
    workWithUs: string;
    operations: string;
    termsOfUse: string;
    privacyAndCookiePolicy: string;
    informationSecurityPolicy: string;
    whistleblowingChannel: string;
  };
  usCenter: {
    title: string;
    centerOfExcellence: string;
    address: string;
    zipCode: string;
    country: string;
    phone1: string;
    phone2: string;
  };
  aiPrompt: {
    text: string;
  };
  copyright: string;
  terms: string;
  privacy: string;
  cookies: string;
}
