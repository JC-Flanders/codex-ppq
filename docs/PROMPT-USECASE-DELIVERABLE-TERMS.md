# Use-Case Deliverable Term Cleanup Prompt

Use this prompt for one worker that owns exactly one generated use-case page pair:

- `codex-ppq/astro/src/pages/{USE_CASE_SLUG}.md`
- `codex-ppq/astro/src/pages/{USE_CASE_SLUG}-2.md`

Run at most four workers at a time. Each worker owns one folder pair, so the base page and `-2` variant stay terminology-consistent.

## Worker Prompt

```text
You are editing one generated Astro use-case folder pair in /home/dev/src/402-endpoints.

You are not alone in the codebase. Do not revert or edit files outside your owned targets. Do not edit _template.md, flight-price-monitoring.md, short-name pages, package files, docs, or parent research source files.

Owned targets:
- {TARGET_FILE}
- {TARGET_FILE_2}

Source folder:
{SOURCE_DIR}

Required references:
- codex-ppq/docs/QUALITY-GUIDELINES.md
- codex-ppq/research/copywriter/messaging-and-landing-page-copy.md
- codex-ppq/astro/src/pages/_template.md
- codex-ppq/astro/src/pages/flight-price-monitoring.md

Task:
Improve the two owned pages by replacing generic "packet" wording with concise, domain-appropriate deliverable language. Do not do a blind find/replace. Use the source folder and quality guidelines to choose terms that explain what the user actually gets and what decision it supports.

Use these principles:
- Prefer concrete nouns over generic "packet".
- Keep terms short enough for headings, buttons, cards, and preview JSON.
- Keep the page-specific term consistent across title, description, hero, intro, results, steps, facts, prompt, comparison, FAQ, and preview JSON.
- Replace JSON key "packet" with a domain key such as "brief", "card", "check", "triage", "answer", "resale_check", etc.
- Keep budget-first and human-approval language, but make safety boundaries short and use-case specific.
- Keep all frontmatter fields, field order, array shapes, and YAML structure intact.

Suggested term map:
- company diligence: "diligence brief"
- lead enrichment: "lead brief"
- legal/regulatory: "citation brief"
- travel disruption: "rebooking brief"
- market alert / investment: "triage brief"
- web extraction: "extraction brief"
- competitor SEO: "competitor brief"
- ecommerce / resale: "resale check"
- real estate: "property brief"
- incident/support: "incident brief"
- document OCR: "extraction brief"
- transaction risk / identity: "preflight card"
- concierge checkout: "buyer brief"
- investor diligence: "catalyst brief" or "diligence brief"
- site selection: "location brief"
- social trend: "trend brief"
- localization: "localization brief"
- vendor procurement: "vendor review"
- crypto investigation: "investigation brief"
- campaign launch: "launch brief"
- tutoring answers: "answer brief"
- weather routing: "routing brief"
- browser access: "access check"
- human follow-up: "follow-up brief"
- keyword research: "keyword brief"
- flight monitoring: "route watch" or "fare brief"

Validation:
From codex-ppq/astro, run:

npm run check:fields -- mode1 --target {TARGET_RELATIVE_TO_ASTRO}
npm run check:fields -- mode2 --target {TARGET_RELATIVE_TO_ASTRO}
npm run check:fields -- mode1 --target {TARGET_RELATIVE_TO_ASTRO_2}
npm run check:fields -- mode2 --target {TARGET_RELATIVE_TO_ASTRO_2}

Iterate until all four checks pass.

Final response:
- State the chosen replacement term.
- List files changed.
- Summarize main wording changes.
- Report mode1 and mode2 results for both files.
```

## Orchestration Notes

- Launch workers in waves of four folder pairs.
- A worker may edit only its two owned Markdown files.
- After each wave returns, review worker summaries for changed files and validator status.
- After all waves complete, run full generated-page validation and the Astro checks/build from `codex-ppq/astro`.
