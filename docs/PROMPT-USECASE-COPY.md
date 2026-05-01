# Prompt: Use-Case Astro Copy Generation

## Current Scope: V2 Alternate Content Recreation

Use the operational prompt below for the next content-recreation pass. This pass rewrites the human-facing content for only the v2 alternate Markdown page for each use case:

- `codex-ppq/astro/src/pages/<use-case-folder>-2.md`

This is not a light edit, polish pass, wording cleanup, or "make the hero better" pass. The existing v2 page is too similar to v1, so recreate the v2 copy from first principles using the use-case source material and the first-pass copywriting methodology, while preserving the existing frontmatter field structure.

Do not use the original candidate page as context or comparison material. V1 and V2 are roughly the same, so the v2 pass should not inherit V1's wording or structure:

- `codex-ppq/astro/src/pages/<use-case-folder>.md`

Use the parent use-case folder as the source of truth, especially `README.md` and `WEBPAGE.md`. Consult the more technical files in that folder only to ground claims, costs, endpoint details, caveats, and prompt/result specifics.

Do not regenerate both variants. Do not read or edit the original candidate page. Do not edit `_template.md`, `flight-price-monitoring.md`, parent source artifacts, short-name pages, package files, scripts, layouts, or components unless a later task explicitly expands the scope. Use the existing v2 page only as a schema and field-location reference. Its current copy is not a draft to improve.

The copy lens for this pass is:

- Peep Laja: first-screen clarity, value proposition, reader-order message layers, differentiation, proof, friction, and action.
- Henneke Duistermaat: benefit translation, concrete plain-language rewrite, clarity before voice, and removal of generic or hypey wording.

Pass order matters: first rebuild the page from Peep Laja's value-proposition and message-layer method, then use Henneke Duistermaat's method as the clarity edit. Do not start from the current v2 wording.

## Preserved Orchestration Prompt

Create two Astro Markdown page candidates for each parent use-case folder under `research/artifacts/USE-CASES/`:

- `codex-ppq/astro/src/pages/<use-case-folder>.md`
- `codex-ppq/astro/src/pages/<use-case-folder>-2.md`

Keep existing short-name pages like `bumi.md`, `competitor-seo.md`, and `flight-price-monitoring.md` in place as extra routes. The generated files must use the exact same frontmatter field structure as `_template.md`, use `flight-price-monitoring.md` as the length/style reference, and be produced through a two-subagent review workflow.

Also create:

- `codex-ppq/docs/PLAN-02-use-case-content-entries.md`
- `codex-ppq/docs/PROMPT-USECASE-COPY.md`
- `codex-ppq/astro/scripts/check_fields.js`

Add `check_fields.js` with two modes only:

- `mode1`: validate the target Markdown page has the exact same field tree, array shapes, and non-empty required values as `_template.md`; fail with path-specific missing/extra/type errors and hints.
- `mode2`: compare human-facing copy fields against `flight-price-monitoring.md` with a +/-20% character-length range; exclude machine fields like `layout`, `bodyClass`, `themeColor`, IDs, hrefs, booleans, step numbers, and class/control fields.

Use a direct YAML/frontmatter parser dependency if needed, preferably `yaml`, and wire the script through an npm command such as:

```bash
npm run check:fields -- mode1 --target src/pages/<file>.md
npm run check:fields -- mode2 --target src/pages/<file>.md
```

Generate pages from all 26 use-case folders. Each generated page reads primarily from `README.md` and `WEBPAGE.md`, with `endpoint-map.md`, `cost-model.md`, `research-notes.md`, `ORIGINAL.md`, and prompt artifacts consulted when useful.

Do not modify `_template.md`, `flight-price-monitoring.md`, or the parent use-case source folders.

Run at most two use-case master agents concurrently. Each master owns one use-case folder and produces both variants: `<slug>.md` and `<slug>-2.md`.

For each variant, the master runs two subagents:

- Agent 1: Use-case researcher to copy creator
  - Reads the source use-case folder.
  - Creates the first-pass Markdown page using `_template.md` as the field contract.
  - Uses `flight-price-monitoring.md` as the rough length guide.
  - Runs `check_fields.js mode1` and iterates until it passes.
- Agent 2: Copywriting expert
  - Reads `codex-ppq/research/copywriter/headline-formulas.md`, `messaging-and-landing-page-copy.md`, and `value-prop-frameworks.md`.
  - Edits only existing fields; no adding/removing fields.
  - Uses the copywriting lens of Joanna Wiebe, Neville Medhora, and Henneke Duistermaat.
  - Runs `check_fields.js mode1` and `mode2`, looping until both pass.

The master agent performs a final audit for both variants, reports changed files, and records whether each mode passed.

## Operational Master-Agent Prompt

Use this prompt for one use-case folder when recreating the existing v2 alternate page only. Replace the placeholders before launching the worker.

```text
You are a use-case v2 alternate content-recreation worker in /home/dev/src/402-endpoints. You are not alone in the codebase; do not revert edits made by others, and do not modify files outside your owned target.

Owned source:
- {USE_CASE_SLUG}
- {SOURCE_DIR}

Owned editable target:
- {TARGET_FILE_2}

Reference files:
- {REFERENCE_FILE}
- {TEMPLATE_FILE}
- research/artifacts/copywriting-thought-leaders/peep-laja.md
- research/artifacts/copywriting-thought-leaders/henneke-duistermaat.md
- codex-ppq/docs/QUALITY-GUIDELINES.md
- codex-ppq/research/copywriter/messaging-and-landing-page-copy.md
- codex-ppq/research/copywriter/value-prop-frameworks.md

Safety and source rules:
- Use local source artifacts only. Do not make paid calls, sign wallet messages, settle x402 payments, register accounts, buy API keys, book travel, send messages, submit forms, or perform mutations.
- Use {SOURCE_DIR} as the source of truth. Read README.md and WEBPAGE.md first. Consult endpoint-map.md, cost-model.md, research-notes.md, ORIGINAL.md, and prompt artifacts when useful for technical grounding.
- Keep uncertain prices, dynamic costs, source freshness, and execution status visible.
- Do not read, compare against, or edit {TARGET_FILE}. Do not edit {TEMPLATE_FILE}, {REFERENCE_FILE}, the parent source folder, layouts, components, scripts, package files, or short-name pages.
- If {TARGET_FILE_2} is missing, stop and report that the v2 alternate page is missing instead of creating a replacement from scratch.

Workflow:
1. Study the use-case source before writing
   - Read {SOURCE_DIR} in source-priority order: README.md, WEBPAGE.md, then endpoint-map.md, cost-model.md, research-notes.md, ORIGINAL.md, and prompt artifacts where present.
   - Think through the use-case before editing: the buyer/user, job to be done, concrete workflow, endpoint/service evidence, cost and approval constraints, likely objections, proof available, and the result the page should make tangible.
   - Write a short internal page strategy before editing: audience, page job, first-screen value proposition, message-layer order, proof/friction points, CTA/action, and how this v2 angle will differ from generic first-pass copy.
   - Read {TARGET_FILE_2} only to identify field names, array shapes, IDs, and non-copy control values. Treat its current human-facing copy as obsolete placeholder text.
   - Do not open {TARGET_FILE}; V1 is not useful comparison material for this pass.
   - Run `npm run check:fields -- mode1 --target {TARGET_FILE_2}` from `codex-ppq/astro` before editing so existing structure problems are visible.
   - Decide the fresh v2 page angle using Peep Laja's layers: clarity, relevance, value, differentiation, friction/proof, and action.
   - Decide the line-level rewrite standard using Henneke Duistermaat's rules: benefit translation, concrete language, clear nouns, concise sentences, and no generic hype.
2. Recreate the human-facing content in {TARGET_FILE_2}
   - Rewrite every human-facing field value from the source material and page strategy; do not make minor edits to the existing v2 wording.
   - Do not preserve existing v2 phrases unless they are factual labels, provider/tool names, price strings, endpoint/service names, URLs, IDs, or required control values.
   - Recreate the full page, including metadata, hero, preview request/result, intro, results/metrics, workflow steps, benefits, facts, prompt, comparison, use cases, closing, FAQ, and footer labels where human-facing.
   - Edit only existing field values; do not add, remove, reorder, or rename fields.
   - Keep the frontmatter field contract and array shapes from {TEMPLATE_FILE}.
   - Keep {REFERENCE_FILE} as the length and density guide.
   - Make first-screen copy answer: what this does, who it is for, what gets better, what proof or example supports it, and what the reader can do next.
   - Make proof, cost, source-freshness, approval, and no-paid-call caveats concrete without making the page feel legalistic.
   - Prefer concrete workflow examples over protocol-first or generic AI-agent claims.
3. Validate and report
   - Run `npm run check:fields -- mode1 --target {TARGET_FILE_2}` and `npm run check:fields -- mode2 --target {TARGET_FILE_2}` from `codex-ppq/astro`; iterate until both pass or report the exact blocker.
   - Confirm only {TARGET_FILE_2} changed.
   - Report the changed file path, mode1/mode2 results, the fresh page strategy, and the top 3 sections that changed most from the old v2.
   - If only the top of the page changed substantially and lower sections remain close to the old v2, treat the run as incomplete and keep rewriting before finalizing.
```
