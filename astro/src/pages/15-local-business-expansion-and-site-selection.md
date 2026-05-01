---
layout: ../layouts/UseCasePage.astro
title: Site Selection on demand | 402box
description: Use pay-as-you-go tools to check one bounded request and return a source-backed location brief with costs, timestamps, and human approval.
bodyClass: page-bumi page-usecase page-15-local-business-expansion-and-site-selection
themeColor: "#101113"
ogTitle: Site Selection location briefs, paid per focused check.
ogDescription: Give your agent a city, business type, or expansion brief, budget cap, and stop conditions. Get source evidence, rough costs, open questions, and next checks for human review.
schema:
  name: Local Business Expansion And Site Selection
  description: A pay-as-you-go site selection workflow for agents that return a source-backed location shortlist.
  mainEntityName: Local Business Expansion And Site Selection
  mainEntityDescription: Combines city, business type, or expansion brief, public source checks, priced endpoint calls, and review controls into a focused location shortlist.
  providerName: 402box
hero:
  backdrop:
    label: "15"
  brandKicker: 402box
  brandName: Site Selection
  topLinkText: Use cases
  topLinkHref: "#use-cases"
  integration:
    - Source APIs
    - Evidence
    - Brief run
  title:
    text: Compare locations,
    highlight: not every map tab.
  lead: Give your agent a city, business type, or expansion brief, source limits, and budget cap. Get a location shortlist with timestamps, costs, caveats, and approval boundaries before action.
  actions:
    - label: Budget first
      text: Plan Focused Run
      href: "#prompt"
      primary: true
    - label: See output
      text: Inspect Output
      href: "#example"
  trust:
    - Source checks
    - Location brief
    - Budget caps
    - Human approval
  preview:
    ariaLabel: Site Selection request to output preview
    request: Find expansion areas for this local business. Check maps, nearby competitors, demographics, reviews, search evidence, travel constraints, source timestamps, and return a shortlist without contacting landlords.
    responseAriaLabel: Example site selection location shortlist
    resultLabel: Result
    resultTitle: Location brief
    code: |-
      {
        "job": "Site Selection",
        "input": "city, business type, or expansion brief",
        "planned_calls": 8,
        "call_budget": "$0.68+ cap to $0.002+ cap",
        "status": "review_required",
        "location_brief": [
          "location shortlist: source-backed ranking with timestamps.",
          "Tools: RentCast, Google Maps, Mapbox.",
          "Next step: approve deeper checks only if the location brief is useful."
        ]
      }
intro:
  eyebrow: What it does
  title: One location shortlist. Evidence, costs, and next checks.
  text: Pay-as-you-go access is useful when city, business type, or expansion brief needs a focused answer now, not a permanent provider stack. The agent returns a location shortlist with proof, costs, and next checks.
  ariaLabel: Site Selection input and output details
  features:
    - title: Input
      text: A clean input, source limits, cadence if needed, and budget cap for the first focused run.
    - title: Output
      text: A location brief with source links, timestamps, cost notes, confidence labels, and next checks for human review.
    - title: Best fit
      text: Workflow options, location brief, source proof, and narrow jobs that need approval before action.
results:
  eyebrow: Real tools, bounded spend
  title: A priced location brief for human review.
  text: Use rough source ranges such as $0.68, $0.002, $0.69 as planning inputs, not live verified prices. Keep dynamic costs and freshness visible.
  metrics:
    - label: City Or Neighborhood
      value: $0.68+ cap
      text: City Or Neighborhood Shortlist starts with cheap source checks and returns a narrow location shortlist before expansion.
      large: true
    - label: Storefront check
      value: $0.002+ cap
      text: Adds corroborating source checks, proof capture, and synthesis after the first signal still looks useful for review.
    - label: Sales Territory Review
      value: $0.69+
      text: Use for broader reviews where dynamic endpoints, fanout, screenshots, and model calls need explicit caps.
    - label: Expanded review run
      value: $0.88-$1.51
      text: Use only when the first location shortlist justifies more providers, deeper evidence, or repeated monitoring.
steps:
  titleId: workflow-title
  eyebrow: How it works
  title: Start with the input. Pay for the signal.
  text: Run cheap source checks first, add richer tools only for promising signals, and keep mutations, outreach, payments, and expanded budgets under human approval.
  items:
    - number: "01"
      title: Normalize the input
      text: Turn the city, business type, or expansion brief into clean entities, constraints, and source limits before paid calls.
    - number: "02"
      title: Estimate the budget
      text: Show selected tools, expected call counts, rough ranges, dynamic endpoints, and stop conditions before the run begins.
    - number: "03"
      title: Gather source proof
      text: Use core tools plus proof checks to collect timestamped evidence, source links, and visible uncertainty for review.
    - number: "04"
      title: Return the brief
      text: Deliver the location brief, source links, cost notes, open questions, and actions that still need explicit human approval.
benefits:
  eyebrow: Benefits
  title: Use focused checks before buying the stack.
  items:
    - title: Specialized data without permanent seats
      text: Use site selection sources for one important request instead of keeping every provider, dashboard, and credit bundle active.
    - title: Cheaper checks before deeper evidence
      text: The workflow starts with the smallest useful source set, then adds richer extraction, search, proof, or synthesis when the signal warrants it.
    - title: Budget-first instructions
      text: The agent states planned tools, call counts, ranges, and stop conditions before spending or widening the scope of the focused run.
    - title: Human approval for real actions
      text: The location brief can inform a decision, but sends, purchases, account actions, wallet signatures, and expanded spend require approval.
facts:
  eyebrow: Tool details
  title: Keep source facts visible before each run.
  text: Site Selection works best when the agent separates source facts, generated synthesis, and unresolved questions. Start with focused APIs, add support rails only when they explain the decision, and keep the run review-only by default.
  ariaLabel: Site Selection tool facts
  items:
    - label: Core tools
      value: RentCast, Google Maps, Mapbox, BuiltWith, Apollo
    - label: Support rails
      value: Mapbox, BuiltWith, Apollo, Hunter, Company Enrichment, OpenWeather
    - label: Primary input
      value: city, business type, or expansion brief, source limits, and budget cap
    - label: Primary output
      value: location shortlist, timestamps, costs, caveats, and next checks
    - label: Dynamic costs
      value: Model synthesis, repeated checks, screenshots, fanout, and provider-specific dynamic prices
    - label: Execution status
      value: Scenario plan only, no endpoint calls performed
prompt:
  eyebrow: Example prompt
  title: Give your agent a site selection job.
  text: Keep the city, business type, or expansion brief, source limits, output format, call budget, and approval boundaries explicit before paid or repeated checks.
  copyTarget: 15-local-business-expansion-and-site-selection-prompt
  buttonLabel: Copy prompt
  code: |-
    Find expansion areas for this local business. Check maps, nearby competitors, demographics, reviews, search evidence, travel constraints, source timestamps, and return a shortlist without contacting landlords.

    Use the local Site Selection workflow to return a location shortlist. Start by estimating the call budget from the tools you plan to use. Show the providers, planned calls, dynamic-price risks, expected total cost, and stop conditions before beginning.

    Return a concise location brief with:
    - the cleaned input and assumptions
    - the source names, timestamps, and links used
    - the key findings separated from generated recommendations
    - rough cost notes and any dynamic pricing caveats
    - conflicts, stale sources, missing fields, and open questions
    - the next checks worth running only after approval

    Do not buy, book, send, publish, file, register, sign wallet messages, pay invoices, submit forms, move funds, contact people, or mutate external systems without explicit approval. Ask before spending more than the approved budget or expanding beyond this focused run.
comparison:
  eyebrow: Comparison
  title: When one focused run beats a full stack.
  ariaLabel: Traditional tools compared with this site selection workflow
  leftHeader: Traditional stack
  rightHeader: This workflow
  rows:
    - category: Signup
      left: Provider accounts, dashboards, API keys, credits, and billing setup
      right: One bounded agent run with an approved call budget
    - category: Tools
      left: Separate data, search, extraction, proof, synthesis, and delivery tools
      right: Pay-as-you-go endpoint mix selected for the request
    - category: Output
      left: Manual exports and screenshots to reconcile
      right: One location shortlist with timestamps, costs, and candidates
    - category: Cadence
      left: Manual reminders or subscription alerts
      right: Budgeted repeated checks only when the first location brief earns them
    - category: Action
      left: Research and operational action mixed together
      right: Options stay review-only until a human approves action
useCases:
  eyebrow: Use cases
  title: Use focused checks to decide when to act.
  items:
    - title: City Or Neighborhood
      text: Start with one bounded request when a source-backed answer is needed before more budget or action.
    - title: Storefront Micro-Market
      text: Compare source families, show conflicts, and decide whether richer checks are worth the next run.
    - title: Sales Territory Review
      text: Use higher-value reviews when screenshots, extraction, history, or synthesis can change the decision.
    - title: Reviewer handoff with proof
      text: Package findings, caveats, costs, and next actions so a human owner can approve, reject, or narrow the next run.
closing:
  eyebrow: Focused run
  title: Start with one narrow request first.
  text: No broad subscription stack. No silent expansion. Your agent pays only for the relevant checks needed to decide whether the next step is worth review.
  items:
    - Start with the cheapest useful source checks.
    - Cap providers, fanout, screenshots, and model calls.
    - Keep source timestamps and uncertainty visible.
    - Require approval before mutations, sends, or spend.
faq:
  eyebrow: FAQ
  title: Before the first focused run.
  items:
    - question: What does the location brief return?
      answer: It can return the cleaned input, source-backed findings, provider names, timestamps, confidence labels, rough costs, unresolved conflicts, and next checks a human should review.
      open: true
    - question: Which tools matter most?
      answer: RentCast, Google Maps, Mapbox, BuiltWith, Apollo are the main tools surfaced by the source bundle. Supporting search, extraction, proof, and synthesis tools should be added only when they improve the decision.
    - question: How much does a focused run cost?
      answer: The local source bundle gives rough ranges such as $0.68, $0.002, $0.69, $0.88-$1.51. Dynamic endpoints should be capped before execution, and repeated checks should be approved separately.
    - question: What needs human approval?
      answer: The default workflow returns reviewable candidates and tradeoffs. Purchases, bookings, filings, account actions, outreach, uploads, sends, wallet signatures, payments, and expanded budgets require explicit approval.
    - question: What should I watch for?
      answer: Keep source freshness, timestamps, provider limits, dynamic prices, retry behavior, source links, approval boundaries, and generated recommendations separate from observed facts.
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
