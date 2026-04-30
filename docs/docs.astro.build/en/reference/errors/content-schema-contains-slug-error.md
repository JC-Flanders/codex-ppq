---
Source: https://docs.astro.build/en/reference/errors/content-schema-contains-slug-error
Generated: 2026-04-19
Updated: 2026-04-19
---

# Content Schema should not contain slug.

> **ContentSchemaContainsSlugError**: A content collection schema should not contain `slug` since it is reserved for slug generation. Remove this from your COLLECTION\_NAME collection schema.

## What went wrong?

[](#what-went-wrong)

A legacy content collection schema should not contain the `slug` field. This is reserved by Astro for generating entry slugs. Remove `slug` from your schema. You can still use custom slugs in your frontmatter.

**See Also:**

-   [Legacy content collections](/en/guides/upgrade-to/v5/#updating-existing-collections)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
