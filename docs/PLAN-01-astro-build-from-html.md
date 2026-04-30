# Astro 6 Template Port Plan With Sub-Agent Quality Gates

## Summary

Build a side-by-side Astro 6 app in `codex-ppq/astro/`, served on its own port, and port the three use-case pages first: `bumi.html`, `competitor-seo.html`, and `flight-price-monitoring.html`.

Keep the current static HTML pages as golden references. Use Markdown pages for per-page content and shared Astro layouts/components for reusable design. Run each page through multiple conversion passes until it is mostly 1:1 with the original, allowing only template-maintainability differences.

Every implementation and audit agent must read:
- `codex-ppq/AGENTS.md`
- `codex-ppq/docs/astro-page-and-component-architecture-best-practices.md`
- `codex-ppq/docs/docs.astro.build/` docs relevant to its task

## Key Changes

- Scaffold Astro 6 in `codex-ppq/astro/` with dev/build/check scripts:
  - `dev`: bind `0.0.0.0` on a new port, default `4324`
  - `preview`: bind `0.0.0.0` on a new port, default `4325`
  - `build` and `check` for validation
- Configure Astro with `build.format: "file"` so generated pages can preserve `.html`-style output later.
- Author page content as Markdown:
  - `src/pages/bumi.md`
  - `src/pages/competitor-seo.md`
  - `src/pages/flight-price-monitoring.md`
  - `src/pages/_template.md` as the non-routed starter for future pages
- Build reusable components for shared design sections:
  - base layout, landing layout, hero, prompt/result preview, intro split, metrics, steps, benefits, facts panel, copyable prompt, comparison table, use-case grid, closing section, FAQ, footer
- Keep current CSS class names and design rhythm during the first port. Move CSS into Astro-managed styles without redesigning.
- Preserve the fixed copy-button behavior for plain HTTP; no framework island is needed.

## Sub-Agent Workflow

Use sub-agents to speed up each page pass, but keep responsibilities separate.

- Main implementer:
  - Owns Astro scaffold, shared schema, components, Markdown pages, and integration fixes.
  - Does not start the next page until the current page has at least passed build and basic render checks.

- Architecture auditor:
  - Reads the Astro best-practices file first.
  - Checks thin pages, shared layouts, component boundaries, props/slots usage, and absence of page-specific hardcoding in reusable components.
  - Reports issues only; does not edit files.

- Visual parity auditor:
  - Uses `playwright-cli` to compare original HTML on port `8090` against Astro on `4324`.
  - Checks desktop, tablet, and mobile screenshots.
  - Reports missing sections, spacing/type drift, hero preview differences, overflow, and obvious visual regressions.

- Content integrity auditor:
  - Compares visible text, meta title/description, Open Graph copy, JSON-LD, prompts, result previews, FAQ text, and footer links.
  - Flags accidental copy changes and stale prompt/schema drift.

- Interaction/accessibility auditor:
  - Verifies copy buttons copy the full prompt over plain HTTP.
  - Checks FAQ/details behavior, heading order, aria labels, focus behavior, code block wrapping, and horizontal overflow.

- Portability auditor:
  - Reviews whether a fourth page can be made by copying `_template.md` and editing content only.
  - Flags component APIs that are too page-specific or Markdown fields that are unclear.

After each page reaches a stable conversion, run the auditors in parallel. The implementer then fixes only the confirmed issues and reruns the failed gates.

## Conversion Passes

- Pass 0: Golden baseline
  - Capture screenshots and DOM/text metadata for the three static pages.
  - Record prompt lengths, copy-target IDs, section order, body classes, JSON-LD, and page URLs.

- Pass 1: BUMI page
  - Build the initial Markdown schema and component set from `bumi.html`.
  - Run all auditors.
  - Refine until mostly 1:1.

- Pass 2: Competitor SEO page
  - Reuse BUMI components.
  - Add only schema fields needed for competitor-specific sections.
  - Run all auditors and refactor components only when reuse improves.

- Pass 3: Flight monitoring page
  - Reuse the same component stack.
  - Verify `travel brief`, `call_budget`, `flight_budget`, route-watch copy, alert language, and full prompt copy behavior.
  - Run all auditors.

- Pass 4: Future-page readiness
  - Add `_template.md` with required and optional frontmatter examples.
  - Create a temporary sample page only if needed for validation, then remove it before handoff unless explicitly asked to keep it.
  - Confirm future pages do not require layout/component edits for normal content changes.

## Quality Gates

- Visual parity:
  - Compare `1440x1000`, `768x1024`, and `390x844`.
  - Fail on missing sections, incoherent overlap, horizontal overflow, broken hero previews, or major type/spacing drift.

- Content parity:
  - Fail on unintended changes to page title, description, JSON-LD, prompt text, response preview, FAQ, or key section headings.
  - Allow deliberate copy improvements only when documented.

- Astro architecture:
  - Fail if route pages become fat page components.
  - Fail if shared components contain BUMI/SEO/flight-only copy that belongs in Markdown.
  - Fail if page data is duplicated across metadata, visible content, JSON-LD, and prompt sections instead of being sourced consistently.

- Interaction:
  - Copy buttons must copy the full prompt on public HTTP.
  - FAQ/details must work without extra client framework code.
  - Code blocks must not cause mobile overflow.

- Build:
  - `astro check` and `astro build` must pass.
  - Build output must include the three generated pages and required assets.

## Assumptions

- First wave includes only `bumi.html`, `competitor-seo.html`, and `flight-price-monitoring.html`.
- `index.html` stays static for now and acts as an additional style reference.
- Astro remains side-by-side in `codex-ppq/astro/` until the user explicitly asks to switch deployment.
- Sub-agents are read-only quality gates unless a later implementation task gives a specific editing role and non-overlapping file ownership.
- No commits are made unless explicitly requested.
