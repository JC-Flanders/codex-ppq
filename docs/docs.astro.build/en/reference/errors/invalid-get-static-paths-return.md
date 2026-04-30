---
Source: https://docs.astro.build/en/reference/errors/invalid-get-static-paths-return
Generated: 2026-04-19
Updated: 2026-04-19
---

# Invalid value returned by getStaticPaths.

> **InvalidGetStaticPathsReturn**: Invalid type returned by `getStaticPaths`. Expected an `array`, got `RETURN_TYPE`

## What went wrong?

[](#what-went-wrong)

`getStaticPaths`’s return value must be an array of objects.

pages/blog/\[id\].astro

```typescript
export async function getStaticPaths() {  return [ // <-- Array    { params: { slug: "blog" } },    { params: { slug: "about" } }  ];}
```

**See Also:**

-   [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths)
-   [`params`](/en/reference/api-reference/#params)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
