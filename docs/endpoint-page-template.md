# Paid Endpoint Page Template

Use this as the working template for future one-page landing pages.

## Endpoint Intake

Collect this before writing or designing a page.

### Identity

- Endpoint name:
- Provider:
- Provider URL:
- Endpoint URL:
- Category:
- Protocol: x402, L402, MPP, or other
- Protocol version or SDK:
- Last verified:
- Status:

### User Job

- One-sentence job:
- Primary audience:
- Main use case:
- Secondary use cases:
- What this endpoint does not do:
- Search queries this page should satisfy:

### Commercial Details

- Price:
- Unit: request, result, token, second, session, file, or other
- Currency or asset:
- Payment network:
- Payment recipient:
- Refund behavior:
- Free test mode or sandbox:

### Technical Details

- Method:
- Route:
- Auth or payment flow:
- Request schema:
- Response schema:
- Example request:
- Example response:
- Error examples:
- Rate limits:
- Latency:
- Data retention:
- Idempotency and retries:
- Docs URL:
- OpenAPI URL:
- llms.txt URL if provider has one:

### Trust Details

- Provider description:
- Uptime or status page:
- Support contact:
- Privacy/security notes:
- Last successful test result:
- Known limitations:

## Page Metadata Template

### URL

Preferred:

`/services/{category}/{endpoint-slug}/`

Examples:

- `/services/image-generation/unhuman-design-image-api/`
- `/services/search/parallel-search-mpp/`
- `/services/data/weather-x402-api/`

### Title Tag

Pattern:

`{Endpoint job} | Pay-per-use {category} endpoint`

Examples:

- `Generate images on demand | Pay-per-use image API`
- `Search the web from your agent | MPP paid search endpoint`

### Meta Description

Pattern:

`Call {provider}'s {category} endpoint with {protocol}. {Result}. Price: {price}. Includes request schema, output example, and agent instructions.`

Keep it human-readable. Do not stuff every protocol keyword.

### H1

Pattern:

`{Do useful thing} with a pay-per-use {category} endpoint`

or:

`Use {provider/service} from your app or agent`

Avoid:

- `x402 Endpoint`
- `The Future of Payments`
- `Revolutionary AI Agent Payment Infrastructure`

## Section Template

### 1. Breadcrumb And Status Strip

Content:

- Breadcrumb.
- Protocol tag.
- Category tag.
- Provider.
- Price.
- Status.
- Last verified.

Rule:

This should be text, not only badges. Search and agents need readable facts.

### 2. Hero

Content:

- H1.
- One-sentence value statement.
- 3 short bullets:
  - Output.
  - Price/payment.
  - Who can use it.
- CTA 1: `Try {endpoint}`
- CTA 2: `Copy request` or `View docs`
- Technical preview panel.

Technical preview panel:

- Method and route.
- Price.
- Protocol.
- Sample input.
- Sample output.

### 3. Result Example

Show the actual thing the endpoint returns:

- Image thumbnail.
- JSON response.
- Text output.
- Search result snippet.
- Transaction or receipt data.

Rule:

If the output is visual, use a real example image. If the output is data, use a realistic response object.

### 4. Use Cases

Use 3 to 6 items.

Pattern:

`{Audience} can {action} without {old friction}.`

Examples:

- `Agents can generate a cover image only when a workflow needs one.`
- `Developers can add paid enrichment without creating user accounts.`
- `Researchers can fetch fresh data without buying a monthly API plan.`

### 5. How It Works

Use protocol-specific variant.

x402:

1. Your app or agent requests the endpoint.
2. The endpoint returns payment requirements.
3. The client pays, retries, and receives the result.

L402:

1. Your app or agent requests the endpoint.
2. The endpoint returns a Lightning invoice and access token.
3. The client pays, receives the preimage, and uses it with the token to access the resource.

MPP:

1. Your app or agent requests the endpoint.
2. The endpoint returns a Payment challenge.
3. The client sends a Payment credential and receives the response with a receipt.

### 6. Endpoint Reference

Use tabs or compact sections:

- Request.
- Response.
- Errors.
- Payment.
- Limits.

Required fields:

- Method.
- URL.
- Input schema.
- Output schema.
- Price.
- Protocol.
- Example.

### 7. Code And Agent Use

Tabs:

- curl.
- JavaScript.
- Python.
- Agent prompt.

Agent prompt pattern:

`Use {endpoint name} at {endpoint URL} to {job}. It costs {price} via {protocol}. Send {input fields}. Expect {output fields}. Ask before spending more than {budget}.`

### 8. Provider And Trust

Content:

- Who runs it.
- Why trust it.
- Payment recipient.
- Status and last tested.
- Data handling.
- Refund/retry behavior.

Rule:

Do not hide weak trust data. If a field is unknown, say "Not published" or leave it out until verified.

### 9. FAQ

Keep questions specific to the endpoint. Avoid generic protocol FAQs repeated on every page unless the answer is adapted.

Good questions:

- `What does this endpoint return?`
- `How much does one request cost?`
- `Can an AI agent call it?`
- `Do I need an account?`
- `What happens if payment succeeds but the request fails?`

### 10. Related Endpoints

Show:

- Same category.
- Same protocol.
- Same provider.
- Protocol explainer.

Rule:

Related links are part of the SEO system. They should be useful, not filler.

## Copy Rules

- Lead with action and result.
- Use short headings.
- Keep paragraphs under 3 lines where possible.
- Explain protocol mechanics only when useful.
- Replace vague claims with facts: price, route, response type, last verified date.
- Avoid hype around agents. Use specific agent jobs.
- Avoid "seamless", "revolutionary", "unlock", and "future of payments" unless there is a concrete reason.

## SEO Checklist

- Unique H1.
- Unique title and meta description.
- Descriptive canonical URL.
- Breadcrumbs.
- Internal links to category, protocol, provider, and related endpoints.
- Visible price, protocol, endpoint URL, provider, and last verified date.
- Real request and response examples.
- JSON-LD for `WebPage`, `BreadcrumbList`, `WebAPI`, provider, and pricing where accurate.
- Page content available in server-rendered or pre-rendered HTML.
- Included in sitemap.
- Listed in `/llms.txt` if high priority.
- Robots and CDN allow search crawlers and selected AI crawlers.
- No duplicate thin variants.

## Agent Readiness Checklist

- Endpoint has input schema.
- Endpoint has output schema.
- Example request is valid.
- Example response is realistic.
- Price and payment method are explicit.
- Failure behavior is explained.
- Spending limit guidance is included.
- OpenAPI or protocol-native discovery metadata exists where possible.
- `/llms.txt` points to this page and docs.
- Copy request and agent prompt are easy to extract.

## Design Checklist

- First viewport answers value, price, protocol, and action.
- Request/output preview is visible early.
- CTA labels are specific.
- Code blocks behave on mobile.
- The page has no nested cards.
- The color accent helps distinguish category or protocol.
- The page does not look like a generic SaaS template.
- Related endpoints are visually secondary but easy to scan.
- The endpoint output is used as the main visual artifact when possible.
