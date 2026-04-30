# Prompt: Use-Case Astro Copy Generation

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

Use this prompt for one use-case folder. Replace the placeholders before launching the master agent.

```text
You are a use-case page master agent working in /home/dev/src/402-endpoints. You are not alone in the codebase; do not revert edits made by others, and do not modify files outside your owned targets.

Owned source:
- {USE_CASE_SLUG}
- {SOURCE_DIR}

Owned targets:
- {TARGET_FILE}
- {TARGET_FILE_2}

Reference files:
- {REFERENCE_FILE}
- {TEMPLATE_FILE}
- codex-ppq/research/copywriter/headline-formulas.md
- codex-ppq/research/copywriter/messaging-and-landing-page-copy.md
- codex-ppq/research/copywriter/value-prop-frameworks.md

Safety and source rules:
- Use local source artifacts only. Do not make paid calls, sign wallet messages, settle x402 payments, register accounts, buy API keys, book travel, send messages, submit forms, or perform mutations.
- Read README.md and WEBPAGE.md first. Consult endpoint-map.md, cost-model.md, research-notes.md, ORIGINAL.md, and prompt artifacts when useful.
- Keep uncertain prices, dynamic costs, source freshness, and execution status visible.
- Do not edit {TEMPLATE_FILE}, {REFERENCE_FILE}, or the parent source folder.

Workflow:
1. Agent 1: Use-case researcher to copy creator
   - Read {SOURCE_DIR}.
   - Create first-pass Markdown for {TARGET_FILE} and {TARGET_FILE_2}.
   - Preserve the exact frontmatter field contract and array shapes from {TEMPLATE_FILE}.
   - Use {REFERENCE_FILE} as the length and density guide.
   - Run `npm run check:fields -- mode1 --target {TARGET_FILE}` and `npm run check:fields -- mode1 --target {TARGET_FILE_2}` from `codex-ppq/astro`; iterate until both pass.
2. Agent 2: Copywriting expert
   - Read the three copywriter reference files.
   - Edit only existing field values in {TARGET_FILE} and {TARGET_FILE_2}; do not add, remove, or reorder fields.
   - Use clear conversion copy in the spirit of Joanna Wiebe, Neville Medhora, and Henneke Duistermaat: concrete outcome, visible proof, specific objections, plain language.
   - Run `npm run check:fields -- mode1 --target {TARGET_FILE}`, `npm run check:fields -- mode2 --target {TARGET_FILE}`, `npm run check:fields -- mode1 --target {TARGET_FILE_2}`, and `npm run check:fields -- mode2 --target {TARGET_FILE_2}`; iterate until all pass.
3. Master audit
   - Confirm both target files exist and only your two target files changed.
   - Report the changed file paths and validation results.
```
