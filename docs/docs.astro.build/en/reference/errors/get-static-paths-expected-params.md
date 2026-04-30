---
Source: https://docs.astro.build/en/reference/errors/get-static-paths-expected-params
Generated: 2026-04-19
Updated: 2026-04-19
---

# Missing params property on getStaticPaths route.

> **GetStaticPathsExpectedParams**: Missing or empty required `params` property on `getStaticPaths` route.

## What went wrong?

[](#what-went-wrong)

Every route specified by `getStaticPaths` require a `params` property specifying the path parameters needed to match the route.

For instance, the following code:

pages/blog/\[id\].astro

```astro
---export async function getStaticPaths() {  return [    { params: { id: '1' } }  ];}---
```

Will create the following route: `site.com/blog/1`.

**See Also:**

-   [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths)
-   [`params`](/en/reference/api-reference/#params)

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
