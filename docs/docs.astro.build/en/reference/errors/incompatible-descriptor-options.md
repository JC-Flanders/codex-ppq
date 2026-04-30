---
Source: https://docs.astro.build/en/reference/errors/incompatible-descriptor-options
Generated: 2026-04-19
Updated: 2026-04-19
---

# Cannot set both densities and widths

> **IncompatibleDescriptorOptions**: Only one of `densities` or `widths` can be specified. In most cases, you’ll probably want to use only `widths` if you require specific widths.

## What went wrong?

[](#what-went-wrong)

Only one of `densities` or `widths` can be specified. Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors.

**See Also:**

-   [Images](/en/guides/images/)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
