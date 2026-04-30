---
Source: https://docs.astro.build/en/reference/errors/invalid-prerender-export
Generated: 2026-04-19
Updated: 2026-04-19
---

# Invalid prerender export.

> **Example error messages:**
> InvalidPrerenderExport: A `prerender` export has been detected, but its value cannot be statically analyzed.

## What went wrong?

[](#what-went-wrong)

The `prerender` feature only supports a subset of valid JavaScript — be sure to use exactly `export const prerender = true` so that our compiler can detect this directive at build time. Variables, `let`, and `var` declarations are not supported.

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
