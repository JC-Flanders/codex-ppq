# PLAN-02: Use-Case Astro Content Entries

## Goal

Create two Astro Markdown page candidates for every parent use-case folder under `research/artifacts/USE-CASES/`.

The outputs live in `codex-ppq/astro/src/pages/`:

- `<use-case-folder>.md`
- `<use-case-folder>-2.md`

Existing short-name routes such as `bumi.md`, `competitor-seo.md`, and `flight-price-monitoring.md` stay in place as extra routes.

## Command Contract

Run field-shape validation:

```bash
npm run check:fields -- mode1 --target src/pages/<file>.md
```

Run field-shape and copy-length validation:

```bash
npm run check:fields -- mode2 --target src/pages/<file>.md
```

Mode behavior:

- `mode1` compares the target frontmatter against `src/pages/_template.md` for the same field tree, array shapes, types, and non-empty required values.
- `mode2` compares human-facing copy fields against `src/pages/flight-price-monitoring.md` and requires each included field to stay within a +/-20% character-length range.
- The script has no mode 3.

## Concurrency Rule

Run at most two use-case master agents at a time. When one master finishes, start the next use case so there are never more than two active master agents producing page files.

Each master owns one source folder and two target files. It must not edit `_template.md`, `flight-price-monitoring.md`, or the parent source use-case bundle.

## Worklist

| # | Source folder | Candidate pages |
| --- | --- | --- |
| 01 | `research/artifacts/USE-CASES/01-company-due-diligence-snapshot/` | `01-company-due-diligence-snapshot.md`, `01-company-due-diligence-snapshot-2.md` |
| 02 | `research/artifacts/USE-CASES/02-lead-qualification-and-contact-enrichment/` | `02-lead-qualification-and-contact-enrichment.md`, `02-lead-qualification-and-contact-enrichment-2.md` |
| 03 | `research/artifacts/USE-CASES/03-legal-and-regulatory-answer-check/` | `03-legal-and-regulatory-answer-check.md`, `03-legal-and-regulatory-answer-check-2.md` |
| 04 | `research/artifacts/USE-CASES/04-travel-disruption-and-rebooking-assistant/` | `04-travel-disruption-and-rebooking-assistant.md`, `04-travel-disruption-and-rebooking-assistant-2.md` |
| 05 | `research/artifacts/USE-CASES/05-market-alert-and-investment-triage/` | `05-market-alert-and-investment-triage.md`, `05-market-alert-and-investment-triage-2.md` |
| 06 | `research/artifacts/USE-CASES/06-web-data-extraction-and-monitoring/` | `06-web-data-extraction-and-monitoring.md`, `06-web-data-extraction-and-monitoring-2.md` |
| 07 | `research/artifacts/USE-CASES/07-competitor-seo-and-market-intelligence/` | `07-competitor-seo-and-market-intelligence.md`, `07-competitor-seo-and-market-intelligence-2.md` |
| 08 | `research/artifacts/USE-CASES/08-ecommerce-and-resale-arbitrage/` | `08-ecommerce-and-resale-arbitrage.md`, `08-ecommerce-and-resale-arbitrage-2.md` |
| 09 | `research/artifacts/USE-CASES/09-real-estate-opportunity-check/` | `09-real-estate-opportunity-check.md`, `09-real-estate-opportunity-check-2.md` |
| 10 | `research/artifacts/USE-CASES/10-developer-incident-and-support-automation/` | `10-developer-incident-and-support-automation.md`, `10-developer-incident-and-support-automation-2.md` |
| 11 | `research/artifacts/USE-CASES/11-document-ocr-and-knowledge-extraction/` | `11-document-ocr-and-knowledge-extraction.md`, `11-document-ocr-and-knowledge-extraction-2.md` |
| 12 | `research/artifacts/USE-CASES/12-transaction-risk-and-identity-preflight/` | `12-transaction-risk-and-identity-preflight.md`, `12-transaction-risk-and-identity-preflight-2.md` |
| 13 | `research/artifacts/USE-CASES/13-autonomous-buyer-or-concierge-checkout/` | `13-autonomous-buyer-or-concierge-checkout.md`, `13-autonomous-buyer-or-concierge-checkout-2.md` |
| 14 | `research/artifacts/USE-CASES/14-public-company-and-investor-diligence/` | `14-public-company-and-investor-diligence.md`, `14-public-company-and-investor-diligence-2.md` |
| 15 | `research/artifacts/USE-CASES/15-local-business-expansion-and-site-selection/` | `15-local-business-expansion-and-site-selection.md`, `15-local-business-expansion-and-site-selection-2.md` |
| 16 | `research/artifacts/USE-CASES/16-creator-and-social-trend-triage/` | `16-creator-and-social-trend-triage.md`, `16-creator-and-social-trend-triage-2.md` |
| 17 | `research/artifacts/USE-CASES/17-content-localization-and-repurposing/` | `17-content-localization-and-repurposing.md`, `17-content-localization-and-repurposing-2.md` |
| 18 | `research/artifacts/USE-CASES/18-vendor-and-procurement-qualification/` | `18-vendor-and-procurement-qualification.md`, `18-vendor-and-procurement-qualification-2.md` |
| 19 | `research/artifacts/USE-CASES/19-crypto-wallet-token-and-protocol-investigation/` | `19-crypto-wallet-token-and-protocol-investigation.md`, `19-crypto-wallet-token-and-protocol-investigation-2.md` |
| 20 | `research/artifacts/USE-CASES/20-micro-app-or-campaign-launch/` | `20-micro-app-or-campaign-launch.md`, `20-micro-app-or-campaign-launch-2.md` |
| 21 | `research/artifacts/USE-CASES/21-tutoring-research-and-technical-answer-packets/` | `21-tutoring-research-and-technical-answer-packets.md`, `21-tutoring-research-and-technical-answer-packets-2.md` |
| 22 | `research/artifacts/USE-CASES/22-weather-routing-and-physical-world-operations/` | `22-weather-routing-and-physical-world-operations.md`, `22-weather-routing-and-physical-world-operations-2.md` |
| 23 | `research/artifacts/USE-CASES/23-browser-and-access-unblocking-for-agents/` | `23-browser-and-access-unblocking-for-agents.md`, `23-browser-and-access-unblocking-for-agents-2.md` |
| 24 | `research/artifacts/USE-CASES/24-human-follow-up-and-offline-delivery/` | `24-human-follow-up-and-offline-delivery.md`, `24-human-follow-up-and-offline-delivery-2.md` |
| 25 | `research/artifacts/USE-CASES/25-keyword-research-for-ai-seo-agents/` | `25-keyword-research-for-ai-seo-agents.md`, `25-keyword-research-for-ai-seo-agents-2.md` |
| 26 | `research/artifacts/USE-CASES/26-persistent-flight-price-monitoring-and-trip-planning/` | `26-persistent-flight-price-monitoring-and-trip-planning.md`, `26-persistent-flight-price-monitoring-and-trip-planning-2.md` |

## Source Priority

Read the parent use-case folder in this order:

1. `README.md`
2. `WEBPAGE.md`
3. `endpoint-map.md`
4. `cost-model.md`
5. `research-notes.md`
6. `ORIGINAL.md` and prompt artifacts when present

Keep unknowns explicit. Do not claim paid calls, wallet signing, booking, sending, purchasing, account registration, or other mutations happened.

## Done Criteria Per Use Case

- Both candidate pages exist in `codex-ppq/astro/src/pages/`.
- Both files keep the `_template.md` frontmatter field contract.
- Both files use source-grounded copy from the parent use-case bundle.
- Both files keep budget approval, source timestamps, human approval, and no-paid-call caveats visible where relevant.
- Both files pass:

```bash
npm run check:fields -- mode1 --target src/pages/<file>.md
npm run check:fields -- mode2 --target src/pages/<file>.md
```

- After each two-master batch, run:

```bash
npm run check
```

- After all 52 candidate pages are generated, run:

```bash
npm run build
```

- Confirm the Astro index continues to use `import.meta.glob("./*.md")` and sees the generated Markdown pages.
