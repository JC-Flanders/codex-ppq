---
layout: ../layouts/UseCasePage.astro
title: Source-linked investor diligence on demand | 402box
description: Use pay-as-you-go tools to turn one issuer, ticker, domain, or risk question into a source-separated diligence packet with rough costs and review gates.
bodyClass: page-bumi page-usecase page-14-public-company-and-investor-diligence page-alt
themeColor: "#101113"
ogTitle: Public-company diligence, paid per bounded check.
ogDescription: Give your agent one issuer question, source limits, and a call budget. Get SEC evidence, market context, regulatory signals, source classes, caveats, and next checks.
schema:
  name: Public Company And Investor Diligence
  description: A pay-as-you-go public-company diligence workflow for source-linked issuer, risk, and relationship checks.
  mainEntityName: Public Company And Investor Diligence
  mainEntityDescription: Combines SEC filings, market data, regulatory search, enrichment, and synthesis into a reviewable diligence packet.
  providerName: 402box
hero:
  backdrop:
    label: "14"
  brandKicker: 402box
  brandName: Investor Diligence
  topLinkText: Use cases
  topLinkHref: "#use-cases"
  integration:
    - SEC filings
    - Alpha API
    - Risk brief
  title:
    text: Buy issuer evidence,
    highlight: not data seats.
  lead: Give your agent a ticker, CIK, domain, or risk question. Get a source-separated diligence packet with SEC links, market context, costs, and review gates.
  actions:
    - label: Budget first
      text: Plan Diligence
      href: "#prompt"
      primary: true
    - label: See output
      text: Inspect Output
      href: "#example"
  trust:
    - Filing evidence
    - Source separation
    - Budget caps
    - No auto-actions
  preview:
    ariaLabel: Investor Diligence request to output preview
    request: Review this public company question. Resolve issuer identity, pull SEC filings and market context, screen named risks, and return a source-separated packet.
    responseAriaLabel: Example investor diligence packet
    resultLabel: Result
    resultTitle: Issuer packet
    code: |-
      {
        "job": "issuer diligence",
        "input": "ticker, CIK, domain, or risk question",
        "call_budget": "$0.19-$0.37 first pass",
        "status": "review_required",
        "packet": [
          "SEC links, filing language, market context, risk signals.",
          "Source classes: official, vendor, web, synthesis.",
          "Next: approve KG/people expansion if needed."
        ]
      }
intro:
  eyebrow: What it does
  title: One issuer. Source classes, costs, and review gates.
  text: Pay-as-you-go access is useful when an analyst or operator needs one public-company question answered without opening every data subscription behind the work.
  ariaLabel: Investor Diligence input and output details
  features:
    - title: Input
      text: A ticker, CIK, company domain, issuer name, filing topic, risk keyword, and approved call budget.
    - title: Output
      text: A diligence packet with source links, filing identifiers, cost notes, conflicts, and open review questions.
    - title: Best fit
      text: Earnings change briefs, filing-risk screens, counterparty checks, and investor handoffs.
results:
  eyebrow: Real tools, bounded spend
  title: A diligence packet built from source evidence.
  text: Treat these ranges as planning estimates from the local MPP catalog, not billing guarantees. Cap dynamic endpoints before any real run.
  metrics:
    - label: Filing-change brief
      value: $0.19-$0.21
      text: Resolves identity, pulls EDGAR facts and filing language, adds market context, and lists open questions.
      large: true
    - label: Entity context pass
      value: $0.22-$0.33
      text: Adds one Diffbot KG enhancement when relationships, ownership, or counterparty context affects the packet.
    - label: Regulatory Risk Screen
      value: $0.35+
      text: Searches filings, resolves CFR citations, checks changes, and separates disclosed risk from commentary.
    - label: Relationship packet
      value: $0.29-$3.53
      text: Adds organization, people, contact, graph, SEC status, and public context with fanout caps.
steps:
  titleId: workflow-title
  eyebrow: How it works
  title: Start with the filing record. Expand with care.
  text: Run the official-source layer first, then add market, regulatory, graph, contact, or synthesis calls only when they answer the question.
  items:
    - number: "01"
      title: Resolve the issuer
      text: Align ticker, CIK, company name, domain, and subsidiary clues before a summary treats them as the same company.
    - number: "02"
      title: Set the call plan
      text: Show selected endpoints, expected counts, rough fixed ranges, dynamic-price risks, and stop conditions up front.
    - number: "03"
      title: Separate evidence
      text: Keep SEC facts, market data, regulatory citations, enrichment claims, web context, and synthesis in labeled lanes.
    - number: "04"
      title: Hand off the packet
      text: Return the brief, source links, conflicts, costs, reviewer questions, and expansion choices that need approval.
benefits:
  eyebrow: Benefits
  title: Run diligence before committing to the stack.
  items:
    - title: Specialized sources without seats
      text: Use SEC, market, regulatory, enrichment, contact, graph, and search tools for one target without every subscription.
    - title: Official facts stay clearly visible
      text: Filing facts and CFR citations stay separate from vendor enrichment, web mentions, and generated synthesis.
    - title: Cap dynamic spend first
      text: Diffbot KG, Apollo people enrichment, Hunter domain search, and Perplexity synthesis are called out before expansion.
    - title: Review-only by default
      text: The packet informs a reviewer; trading, outreach, account actions, wallet signatures, and broader spend need approval.
facts:
  eyebrow: Tool details
  title: Use each source for the evidence it can actually prove.
  text: The workflow works when the agent names what each source contributes, preserves links and timestamps, and refuses to turn keyword hits into conclusions.
  ariaLabel: Investor Diligence tool facts
  items:
    - label: Core tools
      value: EDGAR, EDGAR Full-Text Search, Alpha Vantage, GovLaws
    - label: Support rails
      value: Company Enrichment, Apollo, Hunter, Diffbot KG, Brave, Perplexity
    - label: Primary input
      value: Ticker, CIK, company domain, issuer name, or risk topic
    - label: Primary output
      value: Source-separated diligence packet with costs and open questions
    - label: Dynamic costs
      value: KG entities, people enrichment, Hunter domain search, synthesis
    - label: Execution status
      value: Scenario plan only, no endpoint calls performed
prompt:
  eyebrow: Example prompt
  title: Give your agent one diligence question.
  text: Keep the issuer input, source scope, evidence lanes, call budget, and review boundaries explicit before paid checks or wider fanout.
  copyTarget: 14-public-company-and-investor-diligence-2-prompt
  buttonLabel: Copy prompt
  code: |-
    Build a diligence packet for this company question: [issuer, ticker, CIK, domain, or risk topic].

    Resolve issuer identity. Use EDGAR and EDGAR Full-Text Search for filings, Alpha Vantage for market context, GovLaws for regulatory citations, and Company Enrichment for names/domains. Use Brave or Perplexity only for recent context and labeled synthesis.

    Before paid work begins, estimate the call budget. Show planned tools, call counts, fixed ranges, dynamic-price risks, and stop conditions. I will approve the budget before the run.

    Return SEC links, filing dates, query terms, market context, regulatory references, timestamps, conflicts, cost notes, and open questions. Keep official facts, enrichment, web context, and synthesis separate.

    Do not trade, contact people, file documents, create accounts, sign wallet messages, pay invoices, submit forms, or expand budget without approval.
comparison:
  eyebrow: Comparison
  title: When one diligence packet beats another terminal.
  ariaLabel: Traditional tools compared with this investor diligence workflow
  leftHeader: Traditional stack
  rightHeader: This workflow
  rows:
    - category: Signup
      left: Market, filing, regulatory, people, contact, and graph accounts
      right: One bounded agent run with an approved source list and call budget
    - category: Tools
      left: Analyst exports, browser tabs, screen grabs, and summaries reconciled by hand
      right: Pay-as-you-go endpoint mix chosen for the exact issuer question
    - category: Output
      left: Raw filings, charts, search results, enrichment records
      right: One diligence packet with source classes, timestamps, conflicts, and costs
    - category: Cadence
      left: Recurring alerts when only one target matters
      right: Repeat checks only after the first packet shows what is worth watching
    - category: Action
      left: Research, outreach, and investment workflows blur
      right: Findings stay review-only until a human approves the next action
useCases:
  eyebrow: Use cases
  title: Use the packet when a source trail matters.
  items:
    - title: Earnings and filing brief
      text: Compare recent filings, metric deltas, transcript or sentiment context, and open questions after an earnings trigger.
    - title: Regulatory risk screen
      text: Check whether filings, CFR citations, recent changes, and public commentary point to a reviewable risk signal.
    - title: Relationship packet
      text: Review company identity, relevant people, candidate contacts, graph notes, SEC status, and confidence labels.
    - title: Reviewer-ready handoff
      text: Give an analyst, operator, or investor the evidence lanes, caveats, costs, and next calls to approve or reject.
closing:
  eyebrow: Focused run
  title: Start with one issuer and one question.
  text: No broad research subscription. No silent fanout. Your agent pays for the source checks needed to decide whether deeper diligence is worth review.
  items:
    - Start with SEC identity, filings, and query terms.
    - Cap citations, people, KG entities, searches, and synthesis.
    - Keep official facts separate from enrichment and web context.
    - Require approval before outreach, trades, forms, or more spend.
faq:
  eyebrow: FAQ
  title: Before the first diligence packet.
  items:
    - question: What does the diligence packet return?
      answer: It can return cleaned issuer identity, SEC links, filing hits, market context, regulatory citations, source timestamps, cost notes, conflicts, and open questions.
      open: true
    - question: Which tools matter most?
      answer: EDGAR and EDGAR Full-Text Search ground the packet. Alpha Vantage, GovLaws, Company Enrichment, Apollo, Hunter, Diffbot KG, Brave, and Perplexity add context when capped.
    - question: How much does a focused run cost?
      answer: The local model estimates about $0.19-$0.21 for an earnings brief, $0.35-$0.37 for a risk screen, and $0.29-$3.53 for a relationship packet.
    - question: What needs human approval?
      answer: The default packet is review-only. Trading, outreach, account actions, filings, uploads, wallet signatures, paid expansion, and recommendations need explicit approval.
    - question: What should I watch for?
      answer: Confirm ticker, CIK, domain, subsidiary, and company-name matches. Treat filing keyword hits, contact data, KG edges, and generated summaries as review leads.
footer:
  brand: 402box
  links:
    - label: Tool Details
      href: "#endpoint"
    - label: How It Works
      href: "#workflow-title"
    - label: All Services
      href: index.html
---
