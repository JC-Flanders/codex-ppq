---
layout: ../layouts/UseCasePage.astro
title: "Keyword research on demand | 402box"
description: "Use 402box to get keyword research data on demand. Search volume, difficulty, intent, and related keywords for AI agents and automated SEO workflows."
bodyClass: "page-bumi"
themeColor: "#101113"
ogTitle: "Keyword Research on Demand, paid per query."
ogDescription: "Give your AI agent real SEO data without subscriptions, signups, or manual API key setup."
schema:
  name: "402box Keyword Research"
  description: "A pay-per-query keyword research API for AI agents and automated SEO workflows."
  mainEntityName: "402box Keyword Research API"
  mainEntityDescription: "Returns search volume, difficulty, intent, and related keyword data for a submitted keyword."
  providerName: "402box"
hero:
  backdrop:
    label: "SEO"
    right: "-0.35rem"
    color: "rgba(255, 218, 77, 0.052)"
    letterSpacing: "-0.11em"
  brandKicker: "402box"
  brandName: "Keyword Research"
  topLinkText: "Use cases"
  topLinkHref: "#use-cases"
  integration:
    - "402box"
    - "x402"
    - "SEO data API"
  title:
    text: "Keyword Research on Demand, "
    highlight: "paid per query."
  lead: "Give your AI agent real SEO data - search volume, difficulty, and intent - without subscriptions or signups."
  actions:
    - label: "No signup required"
      text: "Start Querying Now"
      href: "#prompt"
      primary: true
    - label: "See response"
      text: "Inspect JSON"
      href: "#example"
  trust:
    - "Pay per use"
    - "No API keys"
    - "Structured JSON"
    - "Agent-ready workflow"
  preview:
    ariaLabel: "Keyword request to response preview"
    request: 'Research the keyword "best project management tools" and return volume, difficulty, intent, and related terms.'
    responseAriaLabel: "Example keyword research response"
    resultLabel: "Result"
    resultTitle: "Keyword data"
    code: |
      {
        "keyword": "best project management tools",
        "volume": 14800,
        "difficulty": 67,
        "intent": "commercial",
        "related": [
          "project management software",
          "team collaboration tools",
          "task management apps"
        ]
      }
intro:
  eyebrow: "What it does"
  title: "A pay-per-query keyword research API designed for agents."
  text: "No subscriptions. No API keys. Just search volume, difficulty scores, and intent data - delivered in milliseconds for automated SEO workflows."
  ariaLabel: "Endpoint input and output details"
  features:
    - title: "Input"
      text: "A keyword, market phrase, or topic your agent needs to evaluate."
    - title: "Output"
      text: "Search volume, difficulty score, intent classification, and related keyword ideas."
    - title: "Best fit"
      text: "Content pipelines, client audits, niche discovery, and programmatic SEO workflows."
results:
  eyebrow: "Real data, real results"
  title: "Not a promise of data. A visible result."
  text: "Every query returns actionable metrics your agent can use to make decisions autonomously - search volume to gauge demand, difficulty to assess competition, and intent to classify opportunity."
  metrics:
    - label: "Monthly search volume"
      value: "14,800"
      text: "Demand signal for the submitted keyword."
      large: true
    - label: "Keyword difficulty"
      value: "67 / 100"
      text: "Competition context before writing or pitching."
    - label: "Search intent"
      value: "Commercial"
      text: "Opportunity classification for downstream agent decisions."
    - label: "Related keywords"
      value: "5 returned"
      text: "Expansion terms for low-competition content opportunities."
steps:
  titleId: "payment-title"
  eyebrow: "How it works"
  title: "Give the agent access before asking for a task - always."
  text: "Your agent sends a keyword, handles the payment challenge, and receives structured JSON it can use in a broader SEO workflow."
  items:
    - number: "01"
      title: "Send a request"
      text: "Your AI agent calls the API endpoint with a keyword. No API key, no auth token - just an HTTP request."
    - number: "02"
      title: "Pay via x402"
      text: "The server returns a 402 Payment Required header. Your agent signs a micropayment and retries."
    - number: "03"
      title: "Get keyword data"
      text: "Search volume, difficulty score, intent classification, and related keywords return as structured JSON."
    - number: "04"
      title: "Act on the result"
      text: "Your agent can score the opportunity, draft a brief, or continue researching related keywords."
benefits:
  eyebrow: "Benefits"
  title: "Check the available options and pick the one that fits your use case."
  items:
    - title: "Zero onboarding friction"
      text: "Your agent starts pulling keyword data in seconds - no account creation, no API key provisioning, no approval queues."
    - title: "True pay-per-use"
      text: "Every cent goes to actual queries. No monthly minimums, no expiring credits, no paying for seats you do not use."
    - title: "Built for agents"
      text: "The x402 protocol means your AI agent handles authentication and payment in a single HTTP header."
    - title: "Structured output"
      text: "Keyword metrics return as JSON, ready for content scoring, clustering, or SEO brief generation."
facts:
  eyebrow: "Endpoint details"
  title: "Keyword metrics your workflow can inspect before scaling."
  text: "These facts should stay visible on the page and in structured metadata. Confirm the current route, pricing, and retry behavior before production use."
  ariaLabel: "Endpoint facts"
  items:
    - label: "Provider"
      value: "402box"
    - label: "Service"
      value: "Keyword Research API"
    - label: "Endpoint"
      value: "To confirm"
    - label: "Required input"
      value: "Keyword"
    - label: "Returned data"
      value: "Volume, difficulty, intent, related keywords"
    - label: "Protocol"
      value: "x402 payment flow"
prompt:
  eyebrow: "Example prompt"
  title: "Give your agent a custom instruction, start researching."
  text: "Keep the keyword, metrics, and related-keyword request explicit so the agent knows exactly what to retrieve before it pays for a query."
  copyTarget: "bumi-prompt"
  buttonLabel: "Copy prompt"
  code: |
    Research the keyword "best project management tools" and return the search volume, keyword difficulty score, and search intent.

    Also suggest 5 related long-tail keywords with their metrics so I can identify low-competition content opportunities.

    Before calling the paid endpoint, confirm the price and do not continue into additional keyword queries without approval.
comparison:
  eyebrow: "Comparison"
  title: "When this is better than another subscription."
  ariaLabel: "Traditional tools compared with this API"
  leftHeader: "Traditional tools"
  rightHeader: "This API"
  rows:
    - category: "Signup"
      left: "Account + credit card required"
      right: "None"
    - category: "Pricing"
      left: "$29 - $129/month"
      right: "Fractions of a cent per query"
    - category: "API access"
      left: "Enterprise plan or $50+ deposit"
      right: "Instant, any agent"
    - category: "Agent-native"
      left: "Manual API key setup"
      right: "x402 protocol, zero config"
    - category: "Minimum commitment"
      left: "Monthly or annual plan"
      right: "Pay only what you use"
useCases:
  eyebrow: "Use cases"
  title: "Great keyword data that unlocks the strategic part of AI-driven SEO."
  items:
    - title: "Content pipeline automation"
      text: "Your AI writing agent researches 50 keywords, scores them by difficulty and volume, picks the best opportunities, and drafts optimized articles."
    - title: "Client keyword audits"
      text: "Feed your agent a list of client domains. It pulls keyword gaps, maps search intent, and generates audit reports. Bill per project, not per seat."
    - title: "Niche discovery"
      text: "Tell your agent to explore a market vertical. It queries keyword variations, clusters them by intent, and surfaces untapped niches."
    - title: "Long-tail opportunity checks"
      text: "Ask for related terms, compare intent and difficulty, and find the low-competition angles worth briefing first."
closing:
  eyebrow: "Closing CTA"
  title: "Find the next paid service for your agent workflow."
  text: "No signup required. No subscription. Your AI agent pays per query and gets keyword data in milliseconds."
  items:
    - "Start with one keyword."
    - "Confirm price before each paid query."
    - "Return search volume, difficulty, and intent."
    - "Expand only after the first result is useful."
faq:
  eyebrow: "FAQ"
  title: "Questions that should be answered before the first query."
  items:
    - question: "How does payment work without an account?"
      answer: "The intended flow uses x402: the endpoint can return payment requirements, the agent pays, retries, and receives the keyword data."
      open: true
    - question: "What keyword data do I get back?"
      answer: "The page example includes search volume, keyword difficulty, search intent, and related keyword suggestions."
    - question: "How much does each query cost?"
      answer: "The seed copy positions this as pay per query. The current production price should be confirmed before calling the endpoint."
    - question: "Does this work with any AI agent or framework?"
      answer: "Any agent or workflow that can make HTTP requests and handle the configured payment flow should be able to use this pattern."
    - question: "How accurate is the keyword data?"
      answer: "Accuracy depends on the provider data source and freshness. Returned metrics should be timestamped and treated as decision support, not a ranking guarantee."
footer:
  brand: "402box"
  links:
    - label: "API Docs"
      href: "#endpoint"
    - label: "x402 Protocol"
      href: "#payment-title"
    - label: "All Services"
      href: "index.html"
---
