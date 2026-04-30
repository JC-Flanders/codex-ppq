---
Source: https://docs.astro.build/en/reference/errors/prerender-dynamic-endpoint-path-collide
Generated: 2026-04-19
Updated: 2026-04-19
---

# Prerendered dynamic endpoint has path collision.

> **PrerenderDynamicEndpointPathCollide**: Could not render `PATHNAME` with an `undefined` param as the generated path will collide during prerendering. Prevent passing `undefined` as `params` for the endpoint’s `getStaticPaths()` function, or add an additional extension to the endpoint’s filename.

## What went wrong?

[](#what-went-wrong)

The endpoint is prerendered with an `undefined` param so the generated path will collide with another route.

If you cannot prevent passing `undefined`, then an additional extension can be added to the endpoint file name to generate the file with a different name. For example, renaming `pages/api/[slug].ts` to `pages/api/[slug].json.ts`.

**See Also:**

-   [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths)
-   [`params`](/en/reference/api-reference/#params)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
