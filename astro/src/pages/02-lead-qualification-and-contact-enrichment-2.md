---
layout: ../layouts/UseCasePage.astro
title: Lead fit cards before sales follow-up | 402box
description: Use pay-as-you-go enrichment, email, phone, IP, and company checks to decide which leads deserve human follow-up.
bodyClass: page-bumi page-usecase page-02-lead-qualification-and-contact-enrichment page-alt
themeColor: "#101113"
ogTitle: Lead fit cards, paid per bounded check.
ogDescription: Give your agent a domain, email, phone, profile, or form-fill record. Get a decision-ready lead card with source evidence, mismatch flags, costs, and review gates.
schema:
  name: Lead Qualification And Contact Enrichment
  description: A pay-as-you-go lead qualification workflow for agents that turn raw lead inputs into reviewable fit cards and outreach packets.
  mainEntityName: Lead Qualification And Contact Enrichment
  mainEntityDescription: Combines company enrichment, sales intelligence, email verification, phone and IP risk checks, and model synthesis into a bounded lead decision packet.
  providerName: 402box
hero:
  backdrop:
    label: "02"
  brandKicker: 402box
  brandName: Lead Qualification
  topLinkText: Use cases
  topLinkHref: "#use-cases"
  integration:
    - Company fit
    - Evidence
    - Review queue
  title:
    text: Check the lead,
    highlight: before sales time.
  lead: Give your agent a domain, email, phone, profile, IP, or form fill. Get a lead card with company match, confidence, risk flags, cost, and review lane.
  actions:
    - label: Budget first
      text: Plan Lead Check
      href: "#prompt"
      primary: true
    - label: See card
      text: Inspect Output
      href: "#example"
  trust:
    - Identity match
    - Source evidence
    - Cost caps
    - No auto-send
  preview:
    ariaLabel: Lead qualification request to output preview
    request: Check this inbound lead before follow-up. Use the domain, work email, phone, LinkedIn profile, and source IP to verify fit, confidence, mismatch risk, and the right review lane.
    responseAriaLabel: Example lead qualification fit card
    resultLabel: Result
    resultTitle: Lead fit card
    code: |-
      {
        "lead": "inbound form-fill",
        "decision_lane": "manual_review",
        "planned_calls": 8,
        "call_budget": "$0.061-$0.151 plus model cost",
        "card": [
          "Company and email domains match; IP needs review.",
          "Email is deliverable, with reputation caution flags.",
          "Next step: approve deeper buyer research only if useful."
        ]
      }
intro:
  eyebrow: What it does
  title: One lead. Company fit, contact confidence, and risk flags.
  text: Pay-as-you-go qualification helps when one signup, intro, form fill, or scraped lead might be worth attention, but not another seat-based data stack.
  ariaLabel: Lead qualification input and output details
  features:
    - title: Input
      text: A domain, email, phone, LinkedIn profile, IP address, raw lead row, source limits, and a call budget.
    - title: Output
      text: A lead fit card, contact shortlist, or outreach packet with source labels, timestamps, costs, and conflicts.
    - title: Best fit
      text: Inbound triage, account research, buying-committee discovery, and outreach readiness before sends.
results:
  eyebrow: Real tools, bounded spend
  title: A lead decision built from priced checks.
  text: The source bundle estimates cents-to-low-dollar runs when search is capped. Treat these as planning ranges, not live invoices.
  metrics:
    - label: Single lead fit card
      value: $0.061-$0.151
      text: Resolves the company, checks email, phone, and IP, then returns a qualify, nurture, reject, or review lane.
      large: true
    - label: Buyer short list
      value: $0.338-$0.743
      text: Searches cheaply, enriches top people, verifies emails, and ranks stakeholders with source evidence.
    - label: Outreach review packet
      value: $0.098+
      text: Verifies five contacts, adds risk checks, drafts review copy, and keeps sending behind approval.
    - label: Approved send add-on
      value: $0.025-$0.100
      text: Optional five-email send cost after approval, before setup such as subdomains or inboxes.
steps:
  titleId: workflow-title
  eyebrow: How it works
  title: Match identity first. Enrich survivors.
  text: Start with the fields the lead submitted, make mismatches visible, use richer people data only after fit is plausible, and hold outreach or extra spend for human approval.
  items:
    - number: "01"
      title: Clean the lead
      text: Preserve the raw row, then normalize domain, email, phone, profile, company, IP, source, and constraints.
    - number: "02"
      title: Price the first pass
      text: List planned Company Enrichment, Apollo, Hunter, Clado, StableEnrich, model calls, ranges, and stop rules.
    - number: "03"
      title: Compare the signals
      text: Check company identity, email match, verifier results, reputation flags, phone validity, IP risk, and profile.
    - number: "04"
      title: Return a lane
      text: Return qualify, nurture, reject, or review with evidence, confidence, rough cost, conflicts, and next checks.
benefits:
  eyebrow: Benefits
  title: Spend data budget only where a lead deserves it.
  items:
    - title: Triage without permanent provider seats
      text: Use Apollo, Hunter, Clado, AbstractAPI checks, and StableEnrich routes for one lead instead of every dashboard.
    - title: Mismatch visibility before scoring
      text: Keep company, email, employer, IP, phone, and profile evidence separate before any model summarizes the lead.
    - title: Cheap checks, then enrich
      text: Run low-cost identity checks first, then enrich only top people or accounts after the signal earns more spend.
    - title: Drafts are not permission to send
      text: The workflow can draft outreach, but emails, account actions, signatures, purchases, and budget increases need approval.
facts:
  eyebrow: Tool details
  title: Use the right check for the uncertainty.
  text: Lead qualification works when observed facts stay separate from generated judgment. Company data shows fit, contact tools show reachability, and risk APIs surface caution flags.
  ariaLabel: Lead qualification tool facts
  items:
    - label: Core tools
      value: Apollo, Hunter, Clado, Company Enrichment, Email Reputation
    - label: Support rails
      value: Phone Intelligence, IP Intelligence, StableEnrich, AgentMail, StableEmail
    - label: Primary input
      value: Domain, email, phone, LinkedIn profile, IP, raw lead row, and budget cap
    - label: Primary output
      value: Lead fit card, buying-committee shortlist, or outreach readiness packet
    - label: Dynamic costs
      value: Apollo people enrichment, Hunter domain search, Clado results, models
    - label: Execution status
      value: Scenario plan only, no endpoint calls performed
prompt:
  eyebrow: Example prompt
  title: Give your agent one lead to qualify.
  text: Include the lead fields, decision lanes, tools, call budget, source limits, and approval rules before any paid enrichment or send-channel work begins.
  copyTarget: 02-lead-qualification-and-contact-enrichment-2-prompt
  buttonLabel: Copy prompt
  code: |-
    Qualify this inbound lead before sales follows up.

    Inputs: company domain, work email, name, phone, LinkedIn profile, source IP, source notes, and call budget.

    Use Company Enrichment for company identity, Apollo for organization context, and Hunter for company, domain-search, finder, and verifier signals. Use Email Reputation, Phone Intelligence, and IP Intelligence only when fields exist. Use Clado or StableEnrich only if the first pass deserves deeper research. Summarize the lane with OpenAI or Anthropic.

    Return cleaned input, raw fields, fit clues, source labels, confidence, mismatch flags, review lane, costs, timestamps, conflicts, and open questions.

    Do not contact the lead, send email, create inboxes, buy domains, submit forms, sign messages, pay invoices, move funds, or expand spend without approval.
comparison:
  eyebrow: Comparison
  title: When one lead card beats another data stack.
  ariaLabel: Traditional tools compared with this lead qualification workflow
  leftHeader: Traditional stack
  rightHeader: This workflow
  rows:
    - category: Signup
      left: Sales-intelligence seats, enrichment credits, API keys, and setup
      right: One bounded lead check with an approved call budget
    - category: Tools
      left: Separate company, contact, email, phone, IP, profile, drafting, and send systems
      right: Pay-as-you-go endpoint mix selected for the fields this lead actually has
    - category: Output
      left: Raw exports, verifier statuses, and CRM notes to reconcile
      right: One fit card with evidence, mismatch flags, costs, and a review lane
    - category: Cadence
      left: Bulk enrichment jobs and recurring credit spend
      right: Cheap first pass, then deeper people research only after the lead earns it
    - category: Action
      left: Research, drafting, lists, and sending blur together
      right: Drafts, sends, inbox setup, and added budget remain blocked until a human approves
useCases:
  eyebrow: Use cases
  title: Use lead checks before attention.
  items:
    - title: Inbound lead fit card
      text: Decide whether a signup, form fill, intro, or scraped lead is real, relevant, risky, or ready for a human review.
    - title: Buyer short list
      text: Turn a promising account into a stakeholder table with roles, profile links, emails, verification, and relevance reasons.
    - title: Outreach readiness queue
      text: Separate approved, hold, and reject lanes for a few contacts, with source-grounded draft copy waiting for review.
    - title: Mismatch and fraud review
      text: Surface conflicts between company, email, phone, IP, and public identity before scoring high.
closing:
  eyebrow: Lead check
  title: Start with the lead in front of you.
  text: No broad enrichment purchase. No automatic campaign. Your agent pays for the checks needed to decide whether this lead deserves the next human minute.
  items:
    - Preserve raw fields before normalization.
    - Cap search results, people enrichment, contacts, and model calls.
    - Keep timestamps, provider labels, prices, and conflicts visible
    - Require approval before sends, setup costs, or expanded spend.
faq:
  eyebrow: FAQ
  title: Before the first lead check.
  items:
    - question: What does the lead fit card return?
      answer: It can return cleaned input, company fit clues, email verification, reputation flags, phone and IP risk, profile context, source labels, timestamps, costs, conflicts, and a review lane.
      open: true
    - question: Which tools matter most?
      answer: Company Enrichment, Apollo, Hunter, Email Reputation, Phone Intelligence, IP Intelligence, Clado, and StableEnrich cover identity, contact, risk, and profile checks. Models summarize.
    - question: How much does a focused run cost?
      answer: The local model estimates about $0.061-$0.151 for a lead fit card, $0.338-$0.743 for a three-contact buyer pass, and $0.098+ for a five-contact outreach packet before sends.
    - question: Does the agent contact leads?
      answer: No. The default returns a reviewable fit card, shortlist, or draft packet. Email sends, inbox creation, domain setup, purchases, wallet signatures, and expanded budgets require approval.
    - question: What should I watch for?
      answer: Email verification and reputation can disagree, phone and IP signals are risk indicators, LinkedIn-style data can be stale, and found contact details are not permission to contact someone.
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
