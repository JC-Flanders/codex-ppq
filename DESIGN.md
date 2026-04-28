# 402 Landing Page Design Baseline

Draft design context for landing pages that promote individual paid endpoints.

## Design Register

Brand surface with developer utility. The page must communicate quickly, but it should also work like a product evaluation surface.

## Scene Sentence

A developer or agent builder is scanning the page on a laptop during implementation, trying to decide in under two minutes whether this endpoint is useful, priced clearly, and safe to call.

This points to a light-first, high-contrast, text-forward page with enough technical density to be credible. Dark sections can be used for code and protocol flows, but dark mode should not be the default identity.

## Visual Direction

- Reference lane: developer marketplace, API catalog, and integration directory.
- Avoid: generic SaaS hero, crypto neon, empty gradient backgrounds, oversized hero metrics, endless icon card grids.
- Feel: precise, useful, slightly technical, commercially trustworthy.
- The endpoint output should become the visual asset. Use real request and response previews, small diagrams, status strips, and protocol metadata instead of abstract illustrations.

## Layout Principles

- The first viewport must answer: what it does, who it is for, how much it costs, which protocol it uses, and how to try it.
- Use a split first fold only when both sides carry useful information. A code/output panel is acceptable. A decorative media card is not.
- Keep sections full-width or unframed. Use cards only for repeated endpoint examples, FAQs, related services, or compact technical facts.
- Avoid nested cards.
- Keep copy skimmable. Most sections should fit into one concise heading, one short paragraph, and concrete bullets or examples.
- Use internal links heavily, but make each page individually complete.

## Core Components

- Endpoint header: name, provider, category, protocol tags, price, status, last verified date.
- Value statement: one job-focused headline and a short promise.
- Request/output preview: method, route, sample input, sample output.
- Payment flow: short 3-step sequence with protocol-specific wording.
- Use case templates: concrete workflows or agent tasks the endpoint unlocks.
- Trust and constraints: provider, settlement method, refund/idempotency notes, rate limits, data retention, privacy, uptime, freshness.
- Code and agent use: curl, SDK snippet if available, and a short agent instruction.
- Related endpoints: same category, same protocol, same provider, and alternatives.

## Color And Type

Use a restrained or committed strategy per page. Let endpoint category or provider identity influence accents, but keep the system coherent across the series.

Good default:

- Tinted neutral background, not pure white.
- One strong accent for the protocol or endpoint category.
- Secondary accents reserved for status, price, and method chips.
- A readable sans family with strong weight contrast. Do not default to generic developer monospace for the full page.
- Use monospace only for endpoint routes, code, request fields, payment headers, and IDs.

## Interaction

- Primary CTA: try the endpoint or view docs, depending on whether a safe test path exists.
- Secondary CTA: see code example, copy request, inspect payment details.
- Tabs are useful for request examples across curl, JS, Python, and agent prompt.
- Accordions are acceptable for FAQs and deep protocol details, not for hiding the core value.
- Hover states should clarify clickable technical elements, not add decoration.

## Accessibility And Responsive Rules

- All important endpoint data must be in text, not only imagery.
- Keep body copy at readable line lengths.
- Ensure code blocks wrap or scroll without causing page overflow.
- Buttons need action-specific labels such as "Try weather endpoint", "Copy curl request", or "View API docs".
- Do not depend on color alone for protocol, status, or error meaning.

## Open Design Questions

- Final brand identity for the landing page series.
- Whether pages live under an Alby-owned domain, a 402 directory brand, or a neutral service marketplace brand.
- Whether each protocol gets a distinct color/icon system.
- Whether the first page needs a more editorial launch story or a strict endpoint template.
