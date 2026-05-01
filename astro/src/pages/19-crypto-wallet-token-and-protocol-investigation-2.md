---
layout: ../layouts/UseCasePage.astro
title: Crypto investigation on demand | 402box
description: Use pay-as-you-go crypto analytics to check wallets, token moves, and protocol activity, then return a source-linked brief for human review.
bodyClass: page-bumi page-usecase page-19-crypto-wallet-token-and-protocol-investigation page-alt
themeColor: "#101113"
ogTitle: Crypto investigation briefs, paid per focused check.
ogDescription: Give your agent a wallet, token, transaction, or protocol question, a call budget, and stop rules. Get source evidence, cost notes, and next checks.
schema:
  name: Crypto Wallet, Token, And Protocol Investigation
  description: A pay-as-you-go crypto investigation workflow for agents that return source-linked wallet, token, and protocol briefs.
  mainEntityName: Crypto Wallet, Token, And Protocol Investigation
  mainEntityDescription: Combines wallet analytics, token market data, smart-money signals, read-only RPC facts, and capped synthesis into a reviewable brief.
  providerName: 402box
hero:
  backdrop:
    label: "19"
  brandKicker: 402box
  brandName: Crypto Investigation
  topLinkText: Use cases
  topLinkHref: "#use-cases"
  integration:
    - Wallet data
    - Flow data
    - RPC checks
  title:
    text: Investigate crypto,
    highlight: not browser tabs.
  lead: Give your agent a wallet, token, transaction, or protocol question. Get holdings, flows, prices, timestamps, cost notes, and next checks before action.
  actions:
    - label: Budget first
      text: Plan Crypto Check
      href: "#prompt"
      primary: true
    - label: See brief
      text: Inspect Brief
      href: "#example"
  trust:
    - Wallet facts
    - Source timestamps
    - Cost caps
    - Human approval
  preview:
    ariaLabel: Crypto investigation request to output preview
    request: Investigate this wallet and token event. Use Allium, Nansen, CoinGecko, Codex, read-only RPC, and public context. Cap spend first; do not sign, swap, bridge, or move funds.
    responseAriaLabel: Example crypto investigation brief
    resultLabel: Result
    resultTitle: Signal brief
    code: |-
      {
        "question": "wallet + token event",
        "planned_calls": 19,
        "call_budget": "$0.266-$0.420 before OpenAI",
        "brief": [
          "Wallet: balances, transfers, PnL, counterparties.",
          "Token: contract, price move, flows, holders, liquidity.",
          "Decision: normal, watch, or investigate after review."
        ]
      }
intro:
  eyebrow: What it does
  title: One crypto question. Evidence, cost, and next checks.
  text: The workflow turns a wallet address, token contract, transaction, or protocol question into a reviewable brief, so an analyst can decide whether to ignore, watch, or fund deeper research.
  ariaLabel: Crypto investigation input and output details
  features:
    - title: Input
      text: A wallet, token contract, transaction hash, protocol scope, chain, time window, source limits, and call budget.
    - title: Output
      text: A source-linked brief with balances, flows, market context, RPC facts, cost notes, caveats, and next checks.
    - title: Best fit
      text: Wallet triage, token-event review, protocol diligence, and analyst handoffs before deeper spend.
results:
  eyebrow: Real tools, capped calls
  title: A brief that shows what was checked.
  text: Use rough local ranges as planning inputs. Fixed calls stay low; Dune, Allium Explorer, Perplexity chat, and OpenAI need caps before execution.
  metrics:
    - label: Wallet Snapshot
      value: $0.266-$0.281
      text: Balances, recent transfers, PnL, counterparties, price context, and a normal/watch/investigate lane.
      large: true
    - label: Token Flow Review
      value: $0.405-$0.420
      text: Contract identity, price move, DEX activity, holder concentration, liquidity, and likely explanations.
    - label: Dynamic SQL expansion
      value: $0.505+
      text: Use only after cheap checks justify a custom cohort query; cap rows, time window, and result fetches.
    - label: Lean protocol packet
      value: $0.43-$0.45
      text: No-SQL protocol review using market, graph, realtime, smart-money, and read-only RPC checks.
steps:
  titleId: workflow-title
  eyebrow: How it works
  title: Start with identity. Pay for proof.
  text: Validate the entity first, run the cheapest useful checks, and add SQL or synthesis only when the evidence is strong enough to justify the next paid call.
  items:
    - number: "01"
      title: Normalize the entity
      text: Confirm chain, address, contract, symbol, protocol scope, and time window before any broader fanout.
    - number: "02"
      title: Plan the call budget
      text: List selected tools, expected call counts, fixed prices, dynamic ranges, and stop conditions before spending.
    - number: "03"
      title: Gather evidence
      text: Pull wallet, token, market, graph, smart-money, and read-only RPC facts with source timestamps.
    - number: "04"
      title: Brief the decision
      text: Return findings, confidence, conflicts, raw-source references, cost notes, and checks needing approval.
benefits:
  eyebrow: Benefits
  title: Research the signal before buying the stack.
  items:
    - title: Specialist analytics without seats
      text: Use Allium, Nansen, Dune, CoinGecko, Codex, and RPC checks for one bounded question, not a permanent dashboard.
    - title: Cheap checks before dynamic SQL
      text: Start with fixed-price identity, market, graph, and RPC calls before Dune or Allium Explorer can widen the bill.
    - title: Evidence stays separate
      text: Keep wallet labels, indexer metrics, public context, and AI synthesis in distinct lanes with timestamps.
    - title: Review gates for action
      text: The brief can inform research, but trading, transfers, signatures, write RPC, and expanded spend need approval.
facts:
  eyebrow: Tool details
  title: The useful detail is the source mix and limits.
  text: This page is based on local scenario artifacts, not live endpoint execution. The agent should expose which source supplied each metric and where pricing or coverage remains uncertain.
  ariaLabel: Crypto investigation tool facts
  items:
    - label: Core tools
      value: Allium, Nansen, Dune, CoinGecko, Codex
    - label: Support rails
      value: Alchemy, Quicknode, Conduit, Tempo RPC, Perplexity, OpenAI
    - label: Primary input
      value: Wallet, token contract, transaction hash, protocol scope, budget cap
    - label: Primary output
      value: Source-linked crypto brief with costs, caveats, and next checks
    - label: Dynamic costs
      value: Dune results, Allium Explorer results, Perplexity chat, OpenAI
    - label: Execution status
      value: Scenario plan only, no endpoint calls performed
prompt:
  eyebrow: Example prompt
  title: Give your agent a bounded crypto brief.
  text: Name the entity, sources, output shape, call budget, and approval gates before any paid analytics, SQL, model, or repeated checks begin.
  copyTarget: 19-crypto-wallet-token-and-protocol-investigation-2-prompt
  buttonLabel: Copy prompt
  code: |-
    Investigate whether wallet 0x... and token contract 0x... show normal activity, a watch signal, or a reason for deeper review.

    Use Allium for balances, PnL, token lookup, and price history. Use Nansen for profiler, flows, holders, DEX trades, and smart-money context. Use CoinGecko for market charts, Codex for token/trade/liquidity checks, and read-only RPC for block or transaction facts. Use Dune or Allium Explorer SQL only after cheap checks show signal.

    Before work, estimate the call budget: tools, call count, fixed prices, dynamic ranges, OpenAI unknowns, and stop conditions. I will approve before execution.

    Return:
    - cleaned entities, chain, assumptions
    - findings separated from synthesis
    - sources, timestamps, block numbers, links
    - costs, conflicts, stale data, gaps, next checks

    Do not trade, transfer, sign, bridge, use write RPC, create accounts, or overspend without approval.
comparison:
  eyebrow: Comparison
  title: When one crypto brief beats tab sprawl.
  ariaLabel: Traditional tools compared with this crypto investigation workflow
  leftHeader: Traditional stack
  rightHeader: This workflow
  rows:
    - category: Signup
      left: Crypto accounts, dashboards, API keys, credits, and billing setup
      right: One bounded investigation with an approved call budget
    - category: Tools
      left: Separate explorers, market screens, analytics dashboards, SQL tools, and notes
      right: Wallet, token, market, graph, RPC, and synthesis tools selected for the question
    - category: Output
      left: Manual screenshots and exports to reconcile
      right: One source-linked brief with timestamps, costs, caveats, and next checks
    - category: Cadence
      left: Ad hoc checks when a token moves
      right: Repeat only the checks that the first brief justifies
    - category: Action
      left: Research, trading, and wallet action blurred
      right: Investigation stays review-only until a human approves action
useCases:
  eyebrow: Use cases
  title: Use the brief when evidence matters.
  items:
    - title: Wallet exposure check
      text: Review balances, recent transfers, PnL, counterparties, and holdings before escalating.
    - title: Token spike review
      text: Explain price movement with contract identity, market context, flows, holders, liquidity, and caveats.
    - title: Protocol activity packet
      text: Scope a chain, app, bridge, or sector and return cohorts, smart-money signals, market context, and query assumptions.
    - title: Analyst handoff brief
      text: Package source references, conflicts, cost notes, confidence, and next checks for a reviewer.
closing:
  eyebrow: Review brief
  title: Start with one crypto question.
  text: No permanent analytics stack. No silent SQL expansion. Your agent pays for the checks needed to decide whether a wallet, token, or protocol deserves more review.
  items:
    - Validate chain, contract, and wallet first.
    - Run fixed-price checks before dynamic SQL spend.
    - Keep timestamps, source names, and caveats visible.
    - Require approval before transfers, signatures, or more spend.
faq:
  eyebrow: FAQ
  title: Before the first crypto brief.
  items:
    - question: What does the crypto brief return?
      answer: It can return cleaned entities, holdings, transfers, price context, flows, liquidity notes, RPC facts, source timestamps, confidence, costs, and next checks.
      open: true
    - question: Which tools matter most?
      answer: Allium, Nansen, CoinGecko, Codex, and read-only RPC cover most focused checks. Dune or Allium Explorer is for capped custom SQL after cheaper checks show signal.
    - question: How much should I budget first?
      answer: Local estimates range from $0.266-$0.281 for wallet exposure to $0.405-$0.420 for token flow before OpenAI. SQL can widen costs, so cap it first.
    - question: What still needs approval?
      answer: Trading, transfers, wallet signatures, bridge actions, write-capable RPC, account creation, wider provider fanout, repeated checks, and higher spend need explicit approval.
    - question: What should I watch for?
      answer: Token symbols collide, labels are not legal identity, indexers disagree, markets go stale, and synthesis can be wrong. Keep raw rows and source names visible.
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
