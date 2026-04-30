---
Source: https://docs.astro.build/en/reference/errors/missing-media-query-directive
Generated: 2026-04-19
Updated: 2026-04-19
---

# Missing value for client:media directive.

> **MissingMediaQueryDirective**: Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided

## What went wrong?

[](#what-went-wrong)

A [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) parameter is required when using the `client:media` directive.

```astro
<Counter client:media="(max-width: 640px)" />
```

**See Also:**

-   [`client:media`](/en/reference/directives-reference/#clientmedia)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
