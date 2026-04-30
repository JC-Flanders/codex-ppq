---
Source: https://docs.astro.build/en/reference/errors/invalid-content-entry-frontmatter-error
Generated: 2026-04-19
Updated: 2026-04-19
---

# Content entry frontmatter does not match schema.

Deprecated

This error only applies to legacy content collections which were removed in Astro 6.

> **Example error message:**
> **blog** → **post.md** frontmatter does not match collection schema.
> “title” is required.
> “date” must be a valid date.

## What went wrong?

[](#what-went-wrong)

A Markdown or MDX entry does not match its collection schema. Make sure that all required fields are present, and that all fields are of the correct type. You can check against the collection schema in your `src/content.config.*` file. See the [Content collections documentation](/en/guides/content-collections/) for more information.

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
