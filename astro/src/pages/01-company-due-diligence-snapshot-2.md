---
layout: ../layouts/UseCasePage.astro
title: "Company diligence memo on demand | 402box"
description: "Give an agent one company name or domain and get a bounded identity, web, filing, contact, cost, and proof memo for review."
bodyClass: page-bumi page-usecase page-01-company-due-diligence-snapshot page-alt
themeColor: "#101113"
ogTitle: "One target memo, paid per evidence lane."
ogDescription: "Price a focused company check before it runs, then return identity, stack, filing, contact, screenshot, source, and caveat notes."
schema:
  name: "Company Due Diligence Snapshot"
  description: "A pay-as-you-go company diligence workflow for agents that assemble a source-backed company snapshot."
  mainEntityName: "Company Due Diligence Snapshot"
  mainEntityDescription: "Combines company enrichment, technology checks, public web evidence, contact signals, SEC checks, screenshots, and cost controls into one reviewable snapshot."
  providerName: "402box"
hero:
  backdrop:
    label: "01"
  brandKicker: "402box"
  brandName: "Diligence Memo"
  topLinkText: "Use cases"
  topLinkHref: "#use-cases"
  integration:
    - "Company data"
    - "SEC checks"
    - "Source proof"
  title:
    text: "Triage one company, "
    highlight: "then buy depth."
  lead: "Start with a domain or name. Get a reviewer-ready memo that separates identity, web proof, filing exposure, contact candidates, cost, and caveats."
  actions:
    - label: "Budget first"
      text: "Plan Target Memo"
      href: "#prompt"
      primary: true
    - label: "See memo"
      text: "Inspect Output"
      href: "#example"
  trust:
    - "Identity first"
    - "Source conflicts"
    - "Rough costs"
    - "Human approval"
  preview:
    ariaLabel: "Company diligence request to output preview"
    request: "Check acme-robotics.example before procurement call. Confirm identity, stack, public mentions, contacts, SEC exposure, screenshot proof, and whether deeper diligence is worth approval."
    responseAriaLabel: "Example company diligence packet"
    resultLabel: "Result"
    resultTitle: "Target memo"
    code: |-
      {
        "target": "acme-robotics.example",
        "run_type": "private-company triage",
        "call_budget": "$0.205-$0.220",
        "memo": [
          "Identity: canonical domain needs review.",
          "Proof: stack, links, and screenshot attached.",
          "Contacts: candidates only.",
          "Next: approve SEC, KG, or people enrichment."
        ]
      }
intro:
  eyebrow: "What it does"
  title: "One target. Identity, evidence, and a next-step call."
  text: "Use it when a lead, vendor, partner, investor target, or acquisition candidate needs a fast answer before a meeting, screen, or deeper spend."
  ariaLabel: "Company diligence input and output details"
  features:
    - title: "Input"
      text: "A domain or company name, review context, source limits, optional SEC check, and first-run call budget."
    - title: "Output"
      text: "A diligence memo with identity, stack, contact, filing, screenshot, source, conflict, cost, and open-question notes."
    - title: "Best fit"
      text: "Vendor screens, lead qualification, investor research, partner review, and deal-desk triage."
results:
  eyebrow: "Real tools, bounded spend"
  title: "A diligence memo priced before the first call."
  text: "The source model uses rough MPP wrapper prices. Cap dynamic tools first, then preserve same-name matches, stale contacts, and SEC ambiguity."
  metrics:
    - label: "Private-company triage"
      value: "$0.205-$0.220"
      text: "Lean identity, stack, page proof, web context, contact hints, and synthesis for one private-company target."
      large: true
    - label: "Public-company risk memo"
      value: "$0.226-$0.331"
      text: "Adds SEC submissions, facts, concepts, filing search, web and news context, Diffbot KG, and screenshot proof."
    - label: "Deal-desk deep snapshot"
      value: "$0.706+"
      text: "Starts near seventy cents, then can rise to $5.416 when graph, people, contact, extraction, and proof expand."
    - label: "Dynamic cost driver"
      value: "Diffbot KG"
      text: "Graph result volume is the biggest swing factor, so cap entities before approving a broader diligence pass."
steps:
  titleId: workflow-title
  eyebrow: "How it works"
  title: "Resolve identity before expensive questions."
  text: "Begin with identity and source fit, price the evidence plan, then add contact, filing, graph, screenshot, or extraction calls only when they can change the review."
  items:
    - number: "01"
      title: "Resolve the target"
      text: "Use the domain or name to find the likely company, website, category, location hints, and same-name matches."
    - number: "02"
      title: "Price the evidence plan"
      text: "Show selected providers, call counts, rough wrapper prices, dynamic ranges, and stop rules before paid calls begin."
    - number: "03"
      title: "Separate proof lanes"
      text: "Keep enrichment, stack, public web, SEC, contact, extraction, screenshot, and synthesis evidence in distinct lanes."
    - number: "04"
      title: "Return the handoff"
      text: "Return findings, source links, timestamps, confidence labels, unresolved conflicts, cost notes, and next approvals."
benefits:
  eyebrow: "Benefits"
  title: "Turn scattered diligence tools into one review decision."
  items:
    - title: "Premium data without monthly seats"
      text: "Buy the company, contact, technology, filing, graph, search, scrape, and screenshot calls needed for one target."
    - title: "Buy deeper data only after signal"
      text: "Use a lean pass to decide whether people enrichment, domain search, SEC review, or graph fanout deserves budget."
    - title: "Conflict shown to reviewers"
      text: "Same-name companies, stale enrichment, mismatched SEC identities, and uncertain contact channels stay visible."
    - title: "Action stays out of scope"
      text: "The memo can inform a call, but outreach, account actions, wallet signatures, payments, and extra spend need approval."
facts:
  eyebrow: "Tool details"
  title: "Use each provider for one diligence question."
  text: "The workflow works best when every paid call has a job: confirm identity, inspect the stack, find context, check filings, suggest contacts, or capture proof."
  ariaLabel: "Company diligence tool facts"
  items:
    - label: "Core tools"
      value: "Company Enrichment, BuiltWith, Apollo, Hunter, Diffbot KG"
    - label: "Support rails"
      value: "EDGAR, Brave, Exa, Perplexity, ScreenshotOne, Firecrawl"
    - label: "Primary input"
      value: "Company domain or name, review context, source limits, and call budget"
    - label: "Primary output"
      value: "Company memo, filing risk note, or deal-desk packet with evidence"
    - label: "Dynamic costs"
      value: "Diffbot KG, Apollo people, Hunter search, Perplexity, screenshots"
    - label: "Execution status"
      value: "Scenario plan only, no endpoint calls performed"
prompt:
  eyebrow: "Example prompt"
  title: "Give your agent a target-review brief."
  text: "Name the company, the decision, the evidence lanes to price, the memo shape, and the approval rule before any paid work begins."
  copyTarget: 01-company-due-diligence-snapshot-2-prompt
  buttonLabel: "Copy prompt"
  code: |-
    Check acme-robotics.example before procurement.

    Decide whether it is real and worth review. Use Company Enrichment for identity; BuiltWith for stack; Firecrawl and ScreenshotOne for proof; Exa and Brave for mentions; Apollo and Hunter for org/contact signals; Perplexity for synthesis. If public, price EDGAR and filing search first.

    Before work, estimate budget: providers, call count, dynamic risks, total, and stop conditions. I will approve before you begin.

    Return a memo with:
    - company name, domain, and assumptions
    - stack, mentions, page links, and screenshot time
    - contact candidates marked unverified unless checked
    - SEC status or why no SEC check ran
    - conflicts, stale data, costs, and open questions
    - next checks worth approving

    Do not contact, create accounts, buy credits, sign wallet messages, pay invoices, submit forms, upload files, or exceed budget without approval.
comparison:
  eyebrow: "Comparison"
  title: "When one memo beats the subscription stack."
  ariaLabel: "Traditional tools compared with this company diligence workflow"
  leftHeader: "Traditional stack"
  rightHeader: "This workflow"
  rows:
    - category: "Signup"
      left: "Provider accounts, dashboards, API keys, credits, and billing setup"
      right: "One bounded agent run with an approved call budget"
    - category: "Tools"
      left: "Separate enrichment, search, filing, extraction, proof, and synthesis tools"
      right: "Pay-as-you-go endpoint mix chosen for the target"
    - category: "Output"
      left: "Exports, notes, screenshots, and filings checked by hand"
      right: "One diligence memo with timestamps, costs, and source conflicts"
    - category: "Cadence"
      left: "Manual reminders or always-on subscriptions"
      right: "Repeat checks only when the first memo earns another budget"
    - category: "Action"
      left: "Research, outreach, account work, and spend bundled"
      right: "Findings stay review-only until a human approves action"
useCases:
  eyebrow: "Use cases"
  title: "Use the memo before deeper spend."
  items:
    - title: "Private-company triage"
      text: "Check a startup, vendor, lead, or partner before a call and decide whether more enrichment is justified."
    - title: "Public-company risk memo"
      text: "Add EDGAR and filing search when the target may be an issuer, subsidiary, or investor-risk concern."
    - title: "Deal-desk deep packet"
      text: "Use broader graph, contact, screenshot, extraction, and search work when the target is worth dollars, not cents."
    - title: "Reviewer handoff packet"
      text: "Summarize evidence, caveats, costs, conflicts, and next approvals so a human owner can choose the next step."
closing:
  eyebrow: "Focused run"
  title: "Start with identity, then buy depth."
  text: "No broad subscription stack. No silent fanout. Your agent prices the evidence lane before buying the next company check."
  items:
    - "Resolve identity before buying depth."
    - "Cap people, graph, screenshots, and model calls."
    - "Keep source links, timestamps, and conflicts visible."
    - "Require approval before outreach, mutations, or extra spend."
faq:
  eyebrow: "FAQ"
  title: "Before the first diligence memo."
  items:
    - question: "What does the diligence memo return?"
      answer: "It can return cleaned identity, source-backed findings, provider names, timestamps, confidence labels, rough costs, unresolved conflicts, and next checks for review."
      open: true
    - question: "Which tools matter most?"
      answer: "Company Enrichment, BuiltWith, Apollo, Hunter, and Diffbot KG are the core tools. Search, extraction, proof, filing, and synthesis tools support the decision."
    - question: "How much does a focused run cost?"
      answer: "The local model estimates $0.205-$0.220 for private triage, $0.226-$0.331 for a filing memo, and $0.706-$5.416 for deeper work."
    - question: "What needs human approval?"
      answer: "Outreach, sends, account actions, purchases, uploads, wallet signatures, invoice payments, broader fanout, and any expanded budget need approval."
    - question: "What should I watch for?"
      answer: "Same-name companies, stale enrichment, candidate contacts, SEC mismatch, dynamic prices, source freshness, screenshots, and generated synthesis all need labels."
footer:
  brand: "402box"
  links:
    - label: "Tool Details"
      href: "#endpoint"
    - label: "How It Works"
      href: "#workflow-title"
    - label: "All Services"
      href: "index.html"
---
