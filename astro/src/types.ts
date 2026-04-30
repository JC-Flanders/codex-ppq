export interface ActionCard {
  label: string;
  text: string;
  href: string;
  primary?: boolean;
}

export interface NamedText {
  title: string;
  text: string;
}

export interface MetricCard {
  label: string;
  value: string;
  text: string;
  large?: boolean;
}

export interface StepItem {
  number: string;
  title: string;
  text: string;
}

export interface FactItem {
  label: string;
  value: string;
}

export interface ComparisonRow {
  category: string;
  left: string;
  right: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  open?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface UseCaseFrontmatter {
  title: string;
  description: string;
  bodyClass: string;
  themeColor: string;
  ogTitle: string;
  ogDescription: string;
  schema: {
    name: string;
    description: string;
    mainEntityName: string;
    mainEntityDescription: string;
    providerName: string;
  };
  hero: {
    backdrop?: {
      label: string;
      right?: string;
      color?: string;
      letterSpacing?: string;
    };
    brandKicker: string;
    brandName: string;
    topLinkText: string;
    topLinkHref: string;
    integration: string[];
    title: {
      text: string;
      highlight: string;
    };
    lead: string;
    actions: ActionCard[];
    trust: string[];
    preview: {
      ariaLabel: string;
      request: string;
      responseAriaLabel: string;
      resultLabel: string;
      resultTitle: string;
      code: string;
    };
  };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
    ariaLabel: string;
    features: NamedText[];
  };
  results: {
    eyebrow: string;
    title: string;
    text: string;
    metrics: MetricCard[];
  };
  steps: {
    titleId: string;
    eyebrow: string;
    title: string;
    text: string;
    items: StepItem[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: NamedText[];
  };
  facts: {
    eyebrow: string;
    title: string;
    text: string;
    ariaLabel: string;
    items: FactItem[];
  };
  prompt: {
    eyebrow: string;
    title: string;
    text: string;
    copyTarget: string;
    buttonLabel: string;
    code: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    ariaLabel: string;
    leftHeader: string;
    rightHeader: string;
    rows: ComparisonRow[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: NamedText[];
  };
  closing: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  footer: {
    brand: string;
    links: FooterLink[];
  };
}
