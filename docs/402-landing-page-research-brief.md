# 402 Landing Page Research Brief

Research date: 2026-04-28

This brief prepares the information architecture, SEO approach, protocol context, and page template strategy for one-page landing pages promoting individual paid endpoints using x402, L402, and Machine Payments Protocol.

## Executive Thesis

The page should be closer to an API marketplace detail page than a generic landing page. Zapier-style integration pages work because they combine a searchable noun pair, immediate workflow examples, a clear setup path, and dense internal links. For 402 services, the equivalent is: endpoint job, price, protocol, request schema, output example, trust details, and a runnable path for humans and agents.

The template should not sell "402" first. It should sell a valuable outcome that happens to be accessible through a 402 payment flow.

## Source Base

Protocol and payment sources:

- [RFC 9110, HTTP 402 Payment Required](https://datatracker.ietf.org/doc/rfc9110/)
- [x402.org](https://www.x402.org/)
- [Coinbase x402 documentation](https://docs.cdp.coinbase.com/x402/welcome)
- [Coinbase x402 Bazaar discovery documentation](https://docs.cdp.coinbase.com/x402/bazaar)
- [Cloudflare x402 proxy documentation](https://developers.cloudflare.com/agents/agentic-payments/x402/charge-for-http-content/)
- [Lightning Labs L402 repository](https://github.com/lightninglabs/L402)
- [Lightning Labs L402 Builder's Guide](https://docs.lightning.engineering/the-lightning-network/l402)
- [mpp.dev](https://mpp.dev/)
- [Payment Auth Internet-Drafts](https://paymentauth.org/)
- [Payment HTTP Authentication Scheme draft](https://paymentauth.org/draft-httpauth-payment-00.html)
- [Payment Auth discovery draft](https://paymentauth.org/draft-payment-discovery-00.html)
- [Payment Auth MCP transport draft](https://paymentauth.org/draft-payment-transport-mcp-00.html)

SEO, IA, and agent discovery sources:

- [Google Search helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Schema.org WebAPI](https://schema.org/WebAPI)
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)
- [llms.txt reference](https://llmtxt.info/)
- [Zapier example page](https://zapier.com/apps/tweet-hunter/integrations/discord)
- [Zapier integration showcase best practices](https://docs.zapier.com/integrations/publish/best-practices)

## Protocol Knowledge

### HTTP 402 Baseline

RFC 9110 still defines `402 Payment Required` as reserved for future use. The modern 402 protocols are trying to give this status code concrete semantics for paid web resources.

Implication for pages:

- Do not imply that HTTP alone defines the payment flow.
- Name the specific protocol used by the endpoint.
- Explain the user-visible flow in plain language.

### x402

x402 is an HTTP-native payment protocol developed around instant programmatic payments, especially stablecoin payments. Coinbase positions it for APIs, paid content, AI agents, microservices, and usage-based monetization without accounts or manual payment flows.

Key concepts:

- A client requests a protected resource.
- The server returns a 402 response with payment requirements.
- The client pays and retries with a payment payload.
- A facilitator can verify and settle payments so the seller does not need to maintain blockchain infrastructure.
- x402 Bazaar is the current discovery layer for CDP-facilitated services. It indexes metadata after a successful settlement, supports catalog browsing, semantic search, input and output schemas, pricing data, and quality signals.
- Cloudflare supports an x402 proxy pattern that sits in front of HTTP backends and can charge for protected routes.

Page implications:

- Each page should include a clear `accepts` style payment summary: network, asset, price, recipient, and protocol version when known.
- Input and output schemas matter for agent discovery, not just developer docs.
- If the endpoint uses CDP Bazaar, make sure the page and route metadata use consistent descriptions and examples.
- Explain facilitator reliance and supported networks as operational facts, not as marketing claims.

### L402

L402 is Lightning Labs' protocol for paying for and authenticating access to APIs and services over HTTP using the Lightning Network. It combines a token, commonly a Macaroon, with a Lightning invoice. After payment, the client uses the payment preimage as proof of payment.

Key concepts:

- Client requests a paid endpoint.
- Server responds with `HTTP 402 Payment Required` and a `WWW-Authenticate` header containing a token and Lightning invoice.
- Client pays the invoice and receives a preimage.
- Client presents the token and preimage to access the endpoint.
- The endpoint can verify access statelessly.
- Macaroons can carry caveats and can be attenuated or delegated.
- Aperture is a reverse proxy implementation for paid APIs.

Page implications:

- Explain Lightning payment and authentication together. L402 is not only "pay once"; it is also "authenticate with the receipt".
- If Macaroon caveats exist, show what access the paid token grants.
- Show invoice expiry, access duration, route scope, and whether the token is reusable.
- This is the most Bitcoin-native of the three protocols, so Alby/NWC wallet context may be more relevant on L402 pages.

### Machine Payments Protocol

MPP is positioned by mpp.dev as an open protocol for machine-to-machine payments over HTTP 402, co-developed by Tempo and Stripe. The related Payment Auth specs are Internet-Drafts, which means they are work in progress and can change.

Key concepts:

- The core Payment HTTP Authentication Scheme defines a `Payment` auth scheme for HTTP 402.
- The flow uses a challenge in `WWW-Authenticate`, a credential in `Authorization`, and a `Payment-Receipt` header after successful access.
- It is payment-method agnostic. Separate specs define methods such as Lightning, EVM, Solana, Stripe, Tempo, and others.
- It supports one-time charge flows and session-oriented flows.
- The service discovery draft uses OpenAPI and adds payment metadata, including categories, docs, llms.txt, input schema, and `x-payment-info`.
- There is a JSON-RPC and MCP transport draft, which matters for paid AI tool calls.

Page implications:

- Mark MPP content as current as of the page's last verification date.
- Mention supported payment methods per endpoint, not only "MPP".
- For MCP or JSON-RPC tools, include tool-call examples, not only HTTP examples.
- Publish OpenAPI metadata with input schemas so agents can construct requests without guessing.

## Protocol Comparison For Page Design

| Protocol | Strongest page angle | Discovery needs | Trust details to show |
| --- | --- | --- | --- |
| x402 | Pay per HTTP request with stablecoins and no account setup | Bazaar metadata, input/output schemas, route descriptions, semantic search terms | Facilitator, network, asset, recipient, price, idempotency, supported clients |
| L402 | Lightning payment plus cryptographic access token | Human page, docs, endpoint schema, directory listing if available | Invoice expiry, Macaroon caveats, access scope, token reuse, wallet compatibility |
| MPP | Standardized payment challenge for machines across multiple payment methods | OpenAPI discovery, llms.txt, MCP/JSON-RPC metadata | Draft/version status, payment method, charge vs session, receipts, refunds, limits |

## What Zapier Gets Right

The example Zapier page has a recognizable pattern:

- Breadcrumbs and indexed app-pair URL.
- H1 that names the integration pair and the outcome.
- Benefit bullets above the fold.
- Immediate builder metaphor: choose trigger, choose action.
- Template workflows with concrete task titles.
- "How it works" explanation.
- Supported triggers and actions.
- Related app/category/internal links.
- App descriptions and alternatives near the end.

For 402 endpoint pages, the equivalent pattern is:

- Breadcrumbs and endpoint/category URL.
- H1 that names the paid job and endpoint category.
- Benefit bullets plus price/protocol/status above the fold.
- Request/payment/result metaphor: send input, pay, receive output.
- Concrete workflow templates for users and agents.
- Endpoint details with schemas.
- Protocol-specific "how payment works".
- Related endpoints, protocol pages, category pages, and provider pages.

## SEO And IA Findings

### Google Fundamentals

Google's current guidance still emphasizes useful, reliable, people-first content. SEO is valuable when it helps search engines discover and understand genuinely useful pages.

Practical rules:

- Each endpoint page needs original, endpoint-specific content. Do not mass-generate thin variants.
- The H1 and title should describe the endpoint job clearly.
- Use descriptive URLs with human-readable terms.
- Group pages into logical directories by category, protocol, and provider.
- Canonicalize duplicate or near-duplicate pages.
- Keep important content available as text in initial HTML.
- Structured data must match visible content.
- Use Search Console to monitor indexing, rich result validity, and query behavior.

### Google AI Features

Google says normal SEO fundamentals apply to AI Overviews and AI Mode. There are no special files or schema required to appear. A page needs to be indexed and eligible for snippets. Google also recommends allowing crawling, making content findable through internal links, providing text content, adding helpful images or videos where relevant, and ensuring structured data matches the visible page.

Implication:

- Do not chase "AI SEO" hacks.
- Make pages clear, crawlable, internally linked, and authoritative.
- Add machine-readable aids because agents need them, not because Google requires them for AI features.

### OpenAI And LLM Crawlers

OpenAI documents separate crawlers:

- `OAI-SearchBot` is used for ChatGPT search features.
- `GPTBot` is used for training foundation models.
- `ChatGPT-User` is user-triggered and not automatic web crawling.

Implication:

- If ChatGPT search visibility matters, robots.txt and CDN rules should allow `OAI-SearchBot`.
- Decide separately whether to allow `GPTBot`.
- Do not accidentally block AI crawlers through security tooling or CDN defaults.

### llms.txt

`llms.txt` is a proposed Markdown convention at `/llms.txt` that gives models a curated map of important pages. It is not a W3C or IETF standard and no major LLM provider has publicly committed to consistently fetching it, but it is useful as a stable machine-readable site guide.

Implication:

- Use `/llms.txt` as a low-cost aid, not as a replacement for sitemap.xml, robots.txt, structured data, OpenAPI, or internal links.
- Add endpoint category pages, protocol explainers, and high-value endpoint pages to it.
- Consider `/llms-full.txt` only if the site has concise, high-signal docs worth ingesting.

## Recommended Site Architecture

Build more than isolated landing pages. Even if each endpoint page is one page, the site needs an internal graph.

Recommended routes:

- `/` - value proposition and searchable endpoint directory.
- `/services/` - all paid endpoints.
- `/services/{category}/` - category page, for example image-generation, search, data, analysis, payments, content.
- `/services/{category}/{endpoint-slug}/` - primary landing page for one paid endpoint.
- `/protocols/x402/`, `/protocols/l402/`, `/protocols/mpp/` - protocol explainers with endpoint links.
- `/providers/{provider-slug}/` - provider profile and all endpoints.
- `/use-cases/{use-case-slug}/` - workflow-oriented pages when several endpoints solve the same job.
- `/docs/agents/` - how agents can discover and call services.
- `/llms.txt` - curated machine-readable map.
- `/openapi/{endpoint-slug}.json` or linked provider OpenAPI docs where available.

URL rules:

- Prefer task/category words over protocol words in endpoint slugs.
- Use protocol pages to rank for protocol terms.
- Use endpoint pages to rank for jobs, such as "pay per use image generation API" or "weather data API for AI agents".
- Avoid one page per tiny keyword variation.
- Keep canonical pages stable. Redirect renamed endpoints.

## Endpoint Page Template

### 1. Breadcrumb And Proof Strip

Goal: orient both humans and crawlers.

Include:

- Services > Category > Endpoint
- Protocol tags: x402, L402, MPP
- Provider
- Price
- Status
- Last verified date

### 2. Hero

Goal: answer the buying question immediately.

Required:

- H1: job-focused, not protocol-first.
- One-sentence description of the result.
- Primary CTA: try endpoint, view docs, or copy request.
- Secondary CTA: see pricing/payment details.
- Above-fold technical panel with method, URL, price, protocol, and sample output.

Good headline pattern:

`Generate {output} with a pay-per-use {category} endpoint`

or:

`Use {service} from your app or agent, no account setup required`

### 3. What This Endpoint Does

Goal: explain the useful job in concrete terms.

Include:

- Inputs it accepts.
- Output it returns.
- Best-fit use cases.
- What it does not do.
- Example result.

### 4. Use Cases And Workflows

Goal: create SEO depth and human relevance without fluff.

Use 3 to 6 concrete workflow templates:

- "When you need X, call this endpoint to get Y."
- "An agent can use this to..."
- "A developer can add this to..."

Each workflow should map to a query someone might search.

### 5. How Payment Works

Goal: make 402 understandable and safe.

Use a 3-step flow:

1. Request the endpoint.
2. Pay through the supported protocol.
3. Receive the result and receipt or access proof.

Adapt wording per protocol:

- x402: payment requirements, retry with payment payload, facilitator verification if applicable.
- L402: Lightning invoice, token, payment preimage, authenticated access.
- MPP: Payment challenge, credential, receipt, payment method.

### 6. Endpoint Details

Goal: give enough detail to call it.

Include:

- HTTP method and route.
- Request body or query schema.
- Required and optional fields.
- Response schema and example.
- Price model.
- Rate limits.
- Latency range if known.
- Data retention.
- Error states.
- Retry and idempotency notes.
- Protocol version or SDK version if known.

### 7. Try It Or Integrate

Goal: move from interest to action.

Include:

- curl example.
- JavaScript or Python example when available.
- Agent prompt snippet.
- Wallet or client requirements.
- Test mode or sandbox path when available.

### 8. Trust, Provider, And Operations

Goal: reduce risk.

Include:

- Provider identity.
- Payment recipient or wallet address if public.
- Settlement network and asset.
- Refund policy or "no refund" clarity.
- Uptime/status link.
- Last successful test.
- Security and privacy notes.
- Contact or support path.

### 9. FAQ

Goal: answer objections and capture long-tail queries.

Recommended questions:

- What does this endpoint return?
- How much does one request cost?
- Which payment protocol does it use?
- Can an AI agent call it?
- Do I need an account?
- What happens if the payment succeeds but the request fails?
- Is there a free test mode?
- What data is stored?

Only add FAQ structured data if the same Q&A is visible on the page.

### 10. Related Endpoints

Goal: create discovery paths and SEO graph.

Include:

- Same category.
- Same protocol.
- Same provider.
- Cheaper/faster/higher-quality alternatives when true.
- Protocol explainer links.

## Structured Data Plan

Recommended JSON-LD:

- `WebPage` for the landing page.
- `BreadcrumbList` for hierarchy.
- `WebAPI` for the endpoint, using `name`, `description`, `documentation`, `provider`, `url`, `termsOfService`, and `mainEntityOfPage`.
- `Organization` for the provider where known.
- `Offer` or service pricing metadata when it accurately reflects visible page content.
- `FAQPage` only when FAQs are visible and high quality.

Important caveats:

- Schema.org `WebAPI` is useful, but not all search engines will display special results for it.
- Structured data is not a substitute for visible content.
- Do not mark up claims, prices, reviews, or availability that are not visible and current.

## Agent Discovery Plan

Each endpoint should have four layers of machine readability:

1. Human page: clear text, examples, price, protocol, and schemas.
2. Search layer: sitemap, robots.txt, canonical URLs, structured data.
3. Agent guide: `/llms.txt` with curated links to endpoint pages, protocol pages, and docs.
4. Protocol-native metadata: x402 Bazaar metadata, MPP OpenAPI discovery, or provider OpenAPI where available.

Minimum endpoint metadata for agents:

- Name.
- Description.
- Category.
- Protocol.
- Endpoint URL.
- Method.
- Input schema.
- Output schema.
- Example request.
- Example response.
- Price.
- Currency or asset.
- Payment method.
- Provider.
- Status.
- Last verified date.
- Limits and failure behavior.

## Measurement Ideas For Plausible

Other developers will implement analytics, but the template should reserve measurement points.

Recommended events:

- `Endpoint CTA Clicked`
- `Copy Request Clicked`
- `Code Tab Selected`
- `Protocol Details Expanded`
- `Pricing Details Viewed`
- `Provider Link Clicked`
- `Related Endpoint Clicked`
- `Docs Link Clicked`
- `Agent Instructions Copied`
- `Try Endpoint Started`
- `Try Endpoint Succeeded`
- `Try Endpoint Failed`

Useful dimensions:

- endpoint slug
- category
- protocol
- provider
- CTA location
- code language
- price band

## Content Rules

- First sentence: explain the endpoint result.
- First fold: show price and protocol.
- Avoid jargon in headings. Put protocol details in body copy and technical sections.
- Use real examples. Placeholder examples hurt both trust and agent usefulness.
- Name limitations. Pages that explain fit and non-fit convert better for technical users.
- Keep protocol explainers consistent across pages.
- Do not overstate autonomy. Say agents can pay when configured with a compatible wallet/client and spending policy.
- Show budgets, limits, and revocation where wallet access is involved.

## Design Rules

- Do not use a generic hero with a decorative abstract image.
- Use actual endpoint artifacts as visual material: request, output, payment challenge, receipt, status, examples.
- Keep the page scan-friendly. Dense, but not cramped.
- Make protocol tags useful filters, not decorative badges.
- Give every page a category accent, but maintain a common system.
- Design for comparison across many endpoint pages.
- Mobile must keep the price/protocol/status strip visible early.
- Code blocks must not cause horizontal page overflow.

## What The User May Have Missed

- Build a keyword and category map before redesigning the first page.
- Create an endpoint intake sheet so every page has the same minimum facts.
- Define a canonical protocol glossary before writing copy at scale.
- Decide whether provider verification or "last tested" status is part of the trust model.
- Define a machine-readable endpoint manifest for internal use, even if public standards differ by protocol.
- Plan related-page linking from day one.
- Add a legal/privacy review path for pages that expose provider claims, price, availability, or data retention.
- Test pages with real crawlers and agent tools, not only browser QA.
