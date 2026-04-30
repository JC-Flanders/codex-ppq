# Quality Guidelines

Use these notes when turning any use-case folder into a static page. The goal is not to copy one page's wording. The goal is to preserve the use case's real value, make the prompt runnable, and show a result that feels worth paying for.

## Start From The Use-Case Folder

Read the local artifacts before writing page copy. Prefer repo evidence over outside research.

Useful source order:

- `WEBPAGE.md` or `ORIGINAL.md` for the intended story
- `README.md` for workflow summaries
- `endpoint-map.md` for services, methods, endpoints, and prices
- `cost-model.md` for realistic call plans and budget ranges
- `research-notes.md` for caveats, quality checks, and unresolved details
- provider catalog artifacts when a tool's value needs more detail

The page should expose the specific value of the use case. Do not flatten the offer into generic words like "research," "automation," "data," or "insights" if the artifacts contain more precise value.

For example, a competitor SEO page should mention keyword overlap, ad history, page proof, and next pages to build. A travel page might mention flight options, fare checks, hotel constraints, and itinerary tradeoffs. A company-enrichment page might mention firmographics, identity cleanup, confidence labels, and records for human review.

## Define The Page Job

Before writing titles or prompts, write one plain sentence:

```text
This page helps [audience] use [paid tools/workflow] to get [specific output] so they can [specific decision or action] without [current alternative or friction].
```

Good page jobs usually include:

- the buyer or agent workflow
- the concrete input
- the concrete output
- the next decision the output supports
- the alternative being avoided, such as a subscription, signup, manual audit, API-key setup, or broad crawl

If the page job is vague, the titles and prompt will also be vague.

## Name The Deliverable

Always choose a deliverable name that fits the use case. Do not default to generic words like "packet" if the workflow has a more natural domain term.

Examples:

- Travel: `travel brief`, `fare brief`, `route watch`, `booking-window brief`
- SEO: `competitor brief`, `keyword brief`, `content brief`
- Vendor diligence: `vendor review`, `qualification brief`, `risk review`
- Document extraction: `extraction brief`, `source summary`, `citation brief`
- Design or creative generation: `creative brief`, `asset review`, `variant set`

Use the general name for the page and more specific names for subsections. For example, a travel page can use `travel brief` as the main deliverable, then use `route watch` or `booking-window brief` for specific workflows.

## Titles Should Carry The Positioning

Do not optimize headings for shortness alone. A good title should usually say one of these:

- what the user gets
- what decision the output supports
- what workflow friction disappears
- what subscription or manual process this replaces
- what proof makes the result trustworthy

Good title shapes:

```text
Buy [specific evidence], not another [subscription/tool].
One run. [Input], [proof], and [next action].
A [deliverable] built from real evidence.
Start with [input]. Pay for [proof/output].
Use [data/output] to choose [next action].
```

Example from the competitor SEO page:

```text
Buy competitor evidence, not another SEO subscription.
One run. Keywords, pages, proof, and next moves.
A competitor brief built from real evidence.
Start with domains. Pay for the proof.
```

Avoid titles that are only category labels:

```text
Market intelligence.
Premium data.
Workflow automation.
Better research.
```

Those may be concise, but they do not explain the use case, the alternative, or the decision being supported.

## Prompts Must Be Ready To Run

The example prompt should sound like something a user can paste into an agent. It should be plain, specific, and bounded.

Include:

- realistic inputs, such as domains, keywords, companies, locations, files, dates, products, or campaign themes
- the tools or services the agent should use
- what each tool contributes
- the desired output shape
- budget planning before paid work begins
- safety or human-review boundaries only where the use case needs them

Prefer affirmative tool instructions:

```text
Use [tool] for [specific data].
Use [tool] to validate [current evidence].
Use [tool] to capture [proof].
Use [tool] only for [limited context].
```

Avoid vague prompt copy:

```text
Research this market and return useful insights.
Analyze these companies and make recommendations.
Find opportunities for me.
```

Those prompts do not tell the agent what to buy, what to verify, or what the user expects back.

## Prompt Cleanup Rules

Use natural user inputs. Let the tools normalize provider-specific details like codes, IDs, domains, locations, entities, or endpoint fields.

Bad:

```text
Run lookup for entity_id abc123 and airport_code MUC.
```

Good:

```text
Find options for my trip from Munich to New York.
```

Separate different budgets. If a workflow has more than one kind of budget, name each budget by its role: `call_budget`, `ad_budget`, `purchase_budget`, `travel_budget`, `generation_budget`, or `time_budget`.

Bad:

```json
{
  "budget": "$500"
}
```

Good:

```json
{
  "call_budget": "$0.40-$0.60",
  "purchase_budget": "$500"
}
```

State flexibility and hard constraints. Prompts should distinguish flexible dimensions from non-negotiable requirements.

Bad:

```text
Find the best option.
```

Good:

```text
I am flexible on provider and timing, but the result must be under $500 and require no account creation.
```

Use multiple sources when comparison is the value. When the value is finding the best, cheapest, safest, fastest, most complete, or most trustworthy option, ask relevant tools to compete or corroborate each other.

Bad:

```text
Use one tool and return the result.
```

Good:

```text
Compare results across the relevant tools and show which source returned the best option.
```

Return decision fields, not status labels. Example outputs should include the data needed for the next decision: best option, cost, date, source, confidence, reason, risk, tradeoff, or next action.

Bad:

```json
{
  "status": "good"
}
```

Good:

```json
{
  "best_option": "Option A",
  "why": "Lowest cost with the fewest constraints",
  "next_action": "Review before approval"
}
```

Avoid stale static details. Avoid hardcoded years, deadlines, prices, names, or model versions in evergreen examples unless they are essential to the use case. Static pages should not age themselves unnecessarily.

Bad:

```text
Find options for August 2026.
```

Good:

```text
Find options for August.
```

## Budget Language

Ask for a budget before the work begins, not halfway through the task.

Good pattern:

```text
Before doing the work, estimate the budget from the calls you plan to make.
Show me the planned tools, call count, proof count, and expected total cost.
I will approve the budget, then you can begin the run.
```

Adapt `proof count` to the use case:

- screenshot count
- enrichment count
- document count
- search count
- scrape count
- generation count
- synthesis pass count

Use estimated budget ranges when the cost model says a component is dynamic or model-dependent.

## Safety Boundaries Should Be Short And Use-Case Specific

Long legalistic safety paragraphs make prompts feel less usable. Keep boundaries tied to actual risk.

Examples:

```text
Do not do outreach or take account actions. If you find contacts or account records, include them only as candidates for human review.
```

```text
Do not book, buy, reserve, or submit forms. Return options and tradeoffs for human approval.
```

For travel monitoring, do not block the alert path if alerts are the product value.

Bad:

```text
Do not book, buy, cancel, create accounts, submit passenger details, sign wallet messages, or send alerts without my explicit approval.
```

Better:

```text
Do not book flights, cancel travel, or submit passenger details without approval. Send fare alerts to the human when thresholds are met, and return fare options, timing, and tradeoffs for review.
```

```text
Do not publish, post, email, or upload anything. Return draft assets and a review checklist.
```

Do not list every possible forbidden action unless the use case needs it. A short boundary is more likely to stay readable and useful.

## Example Results Should Show Value

The response preview should not be a vanity counter. Counts are useful only when they support a decision.

Good result previews show:

- the input that was analyzed
- the planned or estimated cost when cost matters
- the useful output in a compact form
- decisions, tradeoffs, gaps, recommendations, or next actions
- proof or confidence only where it affects trust

Example from the competitor SEO page:

```json
{
  "website": "anthropic.com",
  "compare": [
    "chatgpt.com",
    "gemini.google.com"
  ],
  "planned_calls": 27,
  "budget": "$0.52-$0.54",
  "intel": [
    "ChatGPT: fill the 'AI writing assistant' gap with a Claude page for marketers, support teams, and internal comms.",
    "ChatGPT: build a '/chatgpt-alternative' page around long-context review, safer enterprise controls, and team workflows.",
    "Gemini: answer the 'Google Workspace AI' gap with integration pages for Docs, Sheets, Gmail, and Drive workflows.",
    "Gemini: create an 'AI search assistant' page showing Claude research workflows, citations, and source review."
  ]
}
```

Avoid bloated output previews:

```json
{
  "records_returned": 34,
  "themes_found": 6,
  "proof_captures": 3,
  "sources": [...]
}
```

If the prompt already names the tools, the result does not need to repeat every source. Use the result space for decisions and useful output.

## Use Human Field Names

Use field names readers understand quickly.

Prefer:

```json
{
  "website": "anthropic.com",
  "compare": ["chatgpt.com", "gemini.google.com"],
  "budget": "$0.52-$0.54"
}
```

Use-case-specific alternatives:

```json
{
  "company": "acme.com",
  "trip": "Bangkok to Tokyo",
  "keyword": "best project management tools",
  "file": "vendor-contract.pdf",
  "product": "launch image"
}
```

Avoid internal or overly technical labels in marketing previews:

```json
{
  "target": "anthropic.com",
  "entity_id": "abc123",
  "resource_count": 2
}
```

## Real Examples Versus Placeholder Examples

Use realistic examples when they help the reader understand the use case. Real domains, companies, places, or products can make a page more concrete.

If using real names, keep the result framed as a sample unless a live run was actually performed. Do not imply verified current findings when the output is illustrative.

Reserved domains or obvious placeholders are useful for technical docs, but they can make a landing page feel synthetic.

## Keep Prompt And Result Balanced

The hero preview works best when the prompt and result feel like a matched before/after pair. If the result is much longer than the prompt, the page starts to feel like documentation instead of a product preview.

Rules of thumb:

- Put tool instructions in the prompt.
- Put decisions and useful output in the result.
- Remove nested sections unless they make the result easier to scan.
- Keep code-preview lines short enough for mobile.
- Prefer one strong array of actionable results over several weak categories.
- Verify that the page has no horizontal overflow.

## Write For Proof, Not Hype

The strongest pages make claims reviewable.

Depending on the use case, proof can mean:

- screenshots beside page or visual claims
- source links beside research claims
- price estimates beside budget claims
- timestamps beside time-sensitive claims
- confidence labels beside enrichment or extraction claims
- before/after examples beside generation claims
- human-review boundaries beside contact, booking, posting, or account actions

Good page copy sounds confident because it is specific, not because it is louder.

## Keep The Existing Page Rhythm

New pages should feel like they belong to the same site:

- short hero headline with a concrete contrast
- direct subhead that says what the agent gets back
- preview prompt and preview result
- "what it does" section
- example outcomes or costs
- how-it-works steps
- benefits tied to the alternative being replaced
- tool details or source details
- reusable prompt
- comparison section
- use cases
- closing CTA
- FAQ

Adapt section names to the use case, but keep the argument clear: input, tools, proof, budget, output, next action.

## Final Review Checklist

Before considering a new page ready:

- The relevant use-case folder was read locally.
- The page job is clear in one sentence.
- The headline names the outcome, proof, or alternative being replaced.
- The prompt includes realistic inputs and the intended tools.
- The prompt asks for budget approval before paid work begins.
- The result preview contains actionable output, not just metrics.
- The result does not repeat tool details already covered by the prompt.
- Field names are human-readable.
- Safety boundaries are short and specific to the use case.
- Example claims are not presented as verified live results unless a live run happened.
- The page follows the existing visual structure and copy rhythm.
- Desktop and mobile previews have no incoherent overlap or page overflow.
