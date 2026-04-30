---
Source: https://docs.astro.build/en/reference/errors/invalid-get-static-path-param
Generated: 2026-04-19
Updated: 2026-04-19
---

# Invalid value returned by a getStaticPaths path.

> **InvalidGetStaticPathParam**: Invalid params given to `getStaticPaths` path. Expected an `object`, got `PARAM_TYPE`

## What went wrong?

[](#what-went-wrong)

The `params` property in `getStaticPaths`’s return value (an array of objects) should also be an object.

pages/blog/\[id\].astro

```astro
---export async function getStaticPaths() {  return [    { params: { slug: "blog" } },    { params: { slug: "about" } }  ];}---
```

**See Also:**

-   [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths)
-   [`params`](/en/reference/api-reference/#params)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
