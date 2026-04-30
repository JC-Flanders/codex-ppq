---
Source: https://docs.astro.build/en/reference/errors/get-static-paths-required
Generated: 2026-04-19
Updated: 2026-04-19
---

# getStaticPaths() function required for dynamic routes.

> **GetStaticPathsRequired**: `getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.

## What went wrong?

[](#what-went-wrong)

In [Static Mode](/en/guides/routing/#static-ssg-mode), all routes must be determined at build time. As such, dynamic routes must `export` a `getStaticPaths` function returning the different paths to generate.

**See Also:**

-   [Dynamic Routes](/en/guides/routing/#dynamic-routes)
-   [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths)
-   [Server-side Rendering](/en/guides/on-demand-rendering/)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
