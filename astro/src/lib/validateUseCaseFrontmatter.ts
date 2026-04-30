import type { UseCaseFrontmatter } from "../types";

function fail(path: string, expected: string): never {
  throw new Error(`Invalid use-case frontmatter at ${path}: expected ${expected}`);
}

function objectAt(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    fail(path, "object");
  }

  return value as Record<string, unknown>;
}

function stringAt(value: unknown, path: string): string {
  if (typeof value !== "string" || value.length === 0) {
    fail(path, "non-empty string");
  }

  return value;
}

function optionalStringAt(value: unknown, path: string): string | undefined {
  if (value === undefined) return undefined;
  return stringAt(value, path);
}

function booleanAt(value: unknown, path: string): boolean | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "boolean") {
    fail(path, "boolean");
  }

  return value;
}

function arrayAt(value: unknown, path: string): unknown[] {
  if (!Array.isArray(value)) {
    fail(path, "array");
  }

  return value;
}

function stringArrayAt(value: unknown, path: string): string[] {
  return arrayAt(value, path).map((item, index) => stringAt(item, `${path}[${index}]`));
}

function namedTextArrayAt(value: unknown, path: string) {
  return arrayAt(value, path).map((item, index) => {
    const entry = objectAt(item, `${path}[${index}]`);
    return {
      title: stringAt(entry.title, `${path}[${index}].title`),
      text: stringAt(entry.text, `${path}[${index}].text`)
    };
  });
}

function metricArrayAt(value: unknown, path: string) {
  return arrayAt(value, path).map((item, index) => {
    const entry = objectAt(item, `${path}[${index}]`);
    return {
      label: stringAt(entry.label, `${path}[${index}].label`),
      value: stringAt(entry.value, `${path}[${index}].value`),
      text: stringAt(entry.text, `${path}[${index}].text`),
      large: booleanAt(entry.large, `${path}[${index}].large`)
    };
  });
}

function stepArrayAt(value: unknown, path: string) {
  return arrayAt(value, path).map((item, index) => {
    const entry = objectAt(item, `${path}[${index}]`);
    return {
      number: stringAt(entry.number, `${path}[${index}].number`),
      title: stringAt(entry.title, `${path}[${index}].title`),
      text: stringAt(entry.text, `${path}[${index}].text`)
    };
  });
}

function factArrayAt(value: unknown, path: string) {
  return arrayAt(value, path).map((item, index) => {
    const entry = objectAt(item, `${path}[${index}]`);
    return {
      label: stringAt(entry.label, `${path}[${index}].label`),
      value: stringAt(entry.value, `${path}[${index}].value`)
    };
  });
}

function comparisonArrayAt(value: unknown, path: string) {
  return arrayAt(value, path).map((item, index) => {
    const entry = objectAt(item, `${path}[${index}]`);
    return {
      category: stringAt(entry.category, `${path}[${index}].category`),
      left: stringAt(entry.left, `${path}[${index}].left`),
      right: stringAt(entry.right, `${path}[${index}].right`)
    };
  });
}

function faqArrayAt(value: unknown, path: string) {
  return arrayAt(value, path).map((item, index) => {
    const entry = objectAt(item, `${path}[${index}]`);
    return {
      question: stringAt(entry.question, `${path}[${index}].question`),
      answer: stringAt(entry.answer, `${path}[${index}].answer`),
      open: booleanAt(entry.open, `${path}[${index}].open`)
    };
  });
}

function footerLinksAt(value: unknown, path: string) {
  return arrayAt(value, path).map((item, index) => {
    const entry = objectAt(item, `${path}[${index}]`);
    return {
      label: stringAt(entry.label, `${path}[${index}].label`),
      href: stringAt(entry.href, `${path}[${index}].href`)
    };
  });
}

export function validateUseCaseFrontmatter(value: unknown, source = "unknown"): UseCaseFrontmatter {
  const root = objectAt(value, source);
  const schema = objectAt(root.schema, `${source}.schema`);
  const hero = objectAt(root.hero, `${source}.hero`);
  const heroTitle = objectAt(hero.title, `${source}.hero.title`);
  const heroPreview = objectAt(hero.preview, `${source}.hero.preview`);
  const heroBackdrop = hero.backdrop === undefined ? undefined : objectAt(hero.backdrop, `${source}.hero.backdrop`);
  const intro = objectAt(root.intro, `${source}.intro`);
  const results = objectAt(root.results, `${source}.results`);
  const steps = objectAt(root.steps, `${source}.steps`);
  const benefits = objectAt(root.benefits, `${source}.benefits`);
  const facts = objectAt(root.facts, `${source}.facts`);
  const prompt = objectAt(root.prompt, `${source}.prompt`);
  const comparison = objectAt(root.comparison, `${source}.comparison`);
  const useCases = objectAt(root.useCases, `${source}.useCases`);
  const closing = objectAt(root.closing, `${source}.closing`);
  const faq = objectAt(root.faq, `${source}.faq`);
  const footer = objectAt(root.footer, `${source}.footer`);

  return {
    title: stringAt(root.title, `${source}.title`),
    description: stringAt(root.description, `${source}.description`),
    bodyClass: stringAt(root.bodyClass, `${source}.bodyClass`),
    themeColor: stringAt(root.themeColor, `${source}.themeColor`),
    ogTitle: stringAt(root.ogTitle, `${source}.ogTitle`),
    ogDescription: stringAt(root.ogDescription, `${source}.ogDescription`),
    schema: {
      name: stringAt(schema.name, `${source}.schema.name`),
      description: stringAt(schema.description, `${source}.schema.description`),
      mainEntityName: stringAt(schema.mainEntityName, `${source}.schema.mainEntityName`),
      mainEntityDescription: stringAt(schema.mainEntityDescription, `${source}.schema.mainEntityDescription`),
      providerName: stringAt(schema.providerName, `${source}.schema.providerName`)
    },
    hero: {
      backdrop: heroBackdrop
        ? {
            label: stringAt(heroBackdrop.label, `${source}.hero.backdrop.label`),
            right: optionalStringAt(heroBackdrop.right, `${source}.hero.backdrop.right`),
            color: optionalStringAt(heroBackdrop.color, `${source}.hero.backdrop.color`),
            letterSpacing: optionalStringAt(heroBackdrop.letterSpacing, `${source}.hero.backdrop.letterSpacing`)
          }
        : undefined,
      brandKicker: stringAt(hero.brandKicker, `${source}.hero.brandKicker`),
      brandName: stringAt(hero.brandName, `${source}.hero.brandName`),
      topLinkText: stringAt(hero.topLinkText, `${source}.hero.topLinkText`),
      topLinkHref: stringAt(hero.topLinkHref, `${source}.hero.topLinkHref`),
      integration: stringArrayAt(hero.integration, `${source}.hero.integration`),
      title: {
        text: stringAt(heroTitle.text, `${source}.hero.title.text`),
        highlight: stringAt(heroTitle.highlight, `${source}.hero.title.highlight`)
      },
      lead: stringAt(hero.lead, `${source}.hero.lead`),
      actions: arrayAt(hero.actions, `${source}.hero.actions`).map((item, index) => {
        const entry = objectAt(item, `${source}.hero.actions[${index}]`);
        return {
          label: stringAt(entry.label, `${source}.hero.actions[${index}].label`),
          text: stringAt(entry.text, `${source}.hero.actions[${index}].text`),
          href: stringAt(entry.href, `${source}.hero.actions[${index}].href`),
          primary: booleanAt(entry.primary, `${source}.hero.actions[${index}].primary`)
        };
      }),
      trust: stringArrayAt(hero.trust, `${source}.hero.trust`),
      preview: {
        ariaLabel: stringAt(heroPreview.ariaLabel, `${source}.hero.preview.ariaLabel`),
        request: stringAt(heroPreview.request, `${source}.hero.preview.request`),
        responseAriaLabel: stringAt(heroPreview.responseAriaLabel, `${source}.hero.preview.responseAriaLabel`),
        resultLabel: stringAt(heroPreview.resultLabel, `${source}.hero.preview.resultLabel`),
        resultTitle: stringAt(heroPreview.resultTitle, `${source}.hero.preview.resultTitle`),
        code: stringAt(heroPreview.code, `${source}.hero.preview.code`)
      }
    },
    intro: {
      eyebrow: stringAt(intro.eyebrow, `${source}.intro.eyebrow`),
      title: stringAt(intro.title, `${source}.intro.title`),
      text: stringAt(intro.text, `${source}.intro.text`),
      ariaLabel: stringAt(intro.ariaLabel, `${source}.intro.ariaLabel`),
      features: namedTextArrayAt(intro.features, `${source}.intro.features`)
    },
    results: {
      eyebrow: stringAt(results.eyebrow, `${source}.results.eyebrow`),
      title: stringAt(results.title, `${source}.results.title`),
      text: stringAt(results.text, `${source}.results.text`),
      metrics: metricArrayAt(results.metrics, `${source}.results.metrics`)
    },
    steps: {
      titleId: stringAt(steps.titleId, `${source}.steps.titleId`),
      eyebrow: stringAt(steps.eyebrow, `${source}.steps.eyebrow`),
      title: stringAt(steps.title, `${source}.steps.title`),
      text: stringAt(steps.text, `${source}.steps.text`),
      items: stepArrayAt(steps.items, `${source}.steps.items`)
    },
    benefits: {
      eyebrow: stringAt(benefits.eyebrow, `${source}.benefits.eyebrow`),
      title: stringAt(benefits.title, `${source}.benefits.title`),
      items: namedTextArrayAt(benefits.items, `${source}.benefits.items`)
    },
    facts: {
      eyebrow: stringAt(facts.eyebrow, `${source}.facts.eyebrow`),
      title: stringAt(facts.title, `${source}.facts.title`),
      text: stringAt(facts.text, `${source}.facts.text`),
      ariaLabel: stringAt(facts.ariaLabel, `${source}.facts.ariaLabel`),
      items: factArrayAt(facts.items, `${source}.facts.items`)
    },
    prompt: {
      eyebrow: stringAt(prompt.eyebrow, `${source}.prompt.eyebrow`),
      title: stringAt(prompt.title, `${source}.prompt.title`),
      text: stringAt(prompt.text, `${source}.prompt.text`),
      copyTarget: stringAt(prompt.copyTarget, `${source}.prompt.copyTarget`),
      buttonLabel: stringAt(prompt.buttonLabel, `${source}.prompt.buttonLabel`),
      code: stringAt(prompt.code, `${source}.prompt.code`)
    },
    comparison: {
      eyebrow: stringAt(comparison.eyebrow, `${source}.comparison.eyebrow`),
      title: stringAt(comparison.title, `${source}.comparison.title`),
      ariaLabel: stringAt(comparison.ariaLabel, `${source}.comparison.ariaLabel`),
      leftHeader: stringAt(comparison.leftHeader, `${source}.comparison.leftHeader`),
      rightHeader: stringAt(comparison.rightHeader, `${source}.comparison.rightHeader`),
      rows: comparisonArrayAt(comparison.rows, `${source}.comparison.rows`)
    },
    useCases: {
      eyebrow: stringAt(useCases.eyebrow, `${source}.useCases.eyebrow`),
      title: stringAt(useCases.title, `${source}.useCases.title`),
      items: namedTextArrayAt(useCases.items, `${source}.useCases.items`)
    },
    closing: {
      eyebrow: stringAt(closing.eyebrow, `${source}.closing.eyebrow`),
      title: stringAt(closing.title, `${source}.closing.title`),
      text: stringAt(closing.text, `${source}.closing.text`),
      items: stringArrayAt(closing.items, `${source}.closing.items`)
    },
    faq: {
      eyebrow: stringAt(faq.eyebrow, `${source}.faq.eyebrow`),
      title: stringAt(faq.title, `${source}.faq.title`),
      items: faqArrayAt(faq.items, `${source}.faq.items`)
    },
    footer: {
      brand: stringAt(footer.brand, `${source}.footer.brand`),
      links: footerLinksAt(footer.links, `${source}.footer.links`)
    }
  };
}
