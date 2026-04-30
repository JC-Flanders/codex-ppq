# Astro Page and Component Architecture: Best Practices

Research refreshed against primary sources on 2026-04-23.

## Summary

In Astro, pages work best as thin route-level orchestrators: they read route params, load data, choose layouts, and hand focused data into reusable components. Shared document structure belongs in layouts, and most view logic should stay in `.astro` components unless a boundary truly needs interactivity or another runtime. Use props for typed data contracts, slots for markup composition, and move cross-cutting request or mutation concerns out of page files.

## When To Use

- Building an Astro site or app with more than a handful of pages or sections.
- You want reusable content sections and layout shells without turning the whole app into a client-rendered SPA.
- Route files are starting to mix routing, data loading, shell markup, and presentational detail.
- You need a stable component structure that later agents can extend safely.

## When Not To Use

- The site is tiny enough that one or two route files are clearer than a component hierarchy.
- The primary problem is client interactivity or framework-island placement; that belongs in a separate islands/runtime artifact.
- You are building a framework-agnostic component package rather than an Astro application surface.
- A page is genuinely one-off and extracting components would add naming overhead without reuse or clarity.

## Recommended Defaults

- Keep page files responsible for routing, page-level data loading, and layout selection only.
- Put shared shell structure in layouts instead of repeating full document markup across pages.
- Use `.astro` components as the default presentation layer for non-interactive UI.
- Use props for typed data/configuration and slots for markup injection or layout regions.
- Move auth gates, locale setup, and other cross-cutting request logic into middleware or dedicated framework primitives.

## Evidence Notes

- Topic-wide defaults come from Astro pages, layouts, components, routing, middleware, actions, content collections, and TypeScript docs.
- The seed artifacts were useful for prior terminology, but the accepted defaults were refreshed against Astro-maintained docs only.

## Core Patterns

### 1. Thin Pages As Route Orchestrators

Pages should gather route input, load page data, select a layout, and compose children instead of accumulating reusable presentation logic.

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro"
import ProductHero from "../components/ProductHero.astro"
const { slug } = Astro.params
const product = await getProduct(slug!)
---
<BaseLayout title={product.title}>
  <ProductHero product={product} />
</BaseLayout>
```

Supported by: `S1`, `S2`, `S4`

### 2. Explicit Component Responsibilities

Use layouts for shared document structure, section or UI components for reusable rendering, and keep route-only logic out of leaf components. This makes component APIs smaller and keeps route churn from leaking through the tree.

Supported by: `S2`, `S3`, `S8`

### 3. Props For Data, Slots For Markup

Prefer props when the child needs typed, structured input, and slots when the parent owns layout and needs pluggable content regions. This preserves type clarity while still supporting flexible composition.

Supported by: `S3`, `S8`

### 4. Promote Repeated Content And Cross-Cutting Concerns

If many pages share data shapes, use content collections instead of ad hoc file access. If many routes repeat auth or request setup, move it to middleware or actions rather than duplicating boilerplate in each page.

Supported by: `S5`, `S6`, `S7`

## Anti-Patterns And Failure Modes

- Fat pages that mix routing, data loading, shell markup, mutation handling, and reusable presentation code.
- Using slots where typed props would express the contract more clearly.
- Extracting components so aggressively that the tree becomes harder to read than the original page.
- Duplicating auth gates, locale handling, or mutation wiring across many routes instead of centralizing them.
- Smuggling framework-specific interactive concerns into the generic Astro page architecture layer.

## Implementation Checklist

- Identify which page files should keep only route/data/layout responsibilities.
- Move repeated shell markup into one or more layouts.
- Define typed props for reusable components before adding more slots.
- Move repeated request or mutation logic to middleware, actions, or dedicated helpers.
- Use content collections when many entries share a common schema or query pattern.

## Verification Checklist

- Page files read as route orchestrators, not mini component libraries.
- Shared document structure is defined once in layouts.
- Component APIs are understandable from props and slot names alone.
- Repeated request or mutation code is centralized instead of copied between routes.
- Content queries are typed and consistent where collections are appropriate.

## Refresh Triggers

- Astro changes page/layout/content collection guidance or routing APIs.
- The project begins using far more live content than build-time content.
- New Astro component composition or typing guidance changes the props/slots boundary.
- A separate islands/runtime strategy starts to dominate page design decisions.

## Source Map

- `S1` `topic-wide` https://docs.astro.build/en/basics/astro-pages/ — page responsibilities and orchestration boundaries — local: `docs/docs.astro.build/en/basics/astro-pages.md`
- `S2` `topic-wide` https://docs.astro.build/en/basics/layouts/ — shared shell structure and layout reuse — local: `docs/docs.astro.build/en/basics/layouts.md`
- `S3` `topic-wide` https://docs.astro.build/en/basics/astro-components/ — props, slots, and reusable component contracts — local: `docs/docs.astro.build/en/basics/astro-components.md`
- `S4` `topic-wide` https://docs.astro.build/en/guides/routing/ — dynamic route handling and route-local concerns — local: `docs/docs.astro.build/en/guides/routing.md`
- `S5` `topic-wide` https://docs.astro.build/en/guides/middleware/ — cross-cutting request logic placement — local: `docs/docs.astro.build/en/guides/middleware.md`
- `S6` `topic-wide` https://docs.astro.build/en/guides/actions/ — mutation and validated form handling boundaries — local: `docs/docs.astro.build/en/guides/actions.md`
- `S7` `topic-wide` https://docs.astro.build/en/guides/content-collections/ — when repeated structured content should use collections — local: `docs/docs.astro.build/en/guides/content-collections.md`
- `S8` `topic-wide` https://docs.astro.build/en/guides/typescript/ — typed props and utility types for component APIs — local: `docs/docs.astro.build/en/guides/typescript.md`
- `S9` `seed` repo-local seed — prior Astro architecture draft for terminology and contamination audit — local: `plans/frontend/community-best-practices.md`
- `S10` `seed` repo-local seed — prior Astro component-pattern draft for terminology and contamination audit — local: `plans/frontend/component-patterns.md`
