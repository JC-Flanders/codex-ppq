---
Source: https://docs.astro.build/en/reference/errors/content-collection-type-mismatch-error
Generated: 2026-04-19
Updated: 2026-04-19
---

# Collection contains entries of a different type.

> **ContentCollectionTypeMismatchError**: COLLECTION contains EXPECTED\_TYPE entries, but is configured as a ACTUAL\_TYPE collection.

## What went wrong?

[](#what-went-wrong)

Legacy content collections must contain entries of the type configured. Collections are `type: 'content'` by default. Try adding `type: 'data'` to your collection config for data collections.

**See Also:**

-   [Legacy content collections](/en/guides/upgrade-to/v5/#updating-existing-collections)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
