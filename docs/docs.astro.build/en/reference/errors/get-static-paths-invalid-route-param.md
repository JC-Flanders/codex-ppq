---
Source: https://docs.astro.build/en/reference/errors/get-static-paths-invalid-route-param
Generated: 2026-04-19
Updated: 2026-04-19
---

# Invalid route parameter returned by getStaticPaths().

> **GetStaticPathsInvalidRouteParam**: Invalid `getStaticPaths()` route parameter for `KEY`. Expected a string or undefined, received `VALUE_TYPE` (`VALUE`)

## What went wrong?

[](#what-went-wrong)

Since `params` are encoded into the URL, only certain types are supported as values.

/route/\[id\].astro

```astro
---export async function getStaticPaths() {  return [    { params: { id: '1' } } // Works    { params: { id: 2 } } // Does not work    { params: { id: false } } // Does not work    { params: { id: [1, 2] } } // Does not work  ];}---
```

In routes using [rest parameters](/en/guides/routing/#rest-parameters), `undefined` can be used to represent a path with no parameters passed in the URL:

/route/\[...id\].astro

```astro
---export async function getStaticPaths() {  return [    { params: { id: '1' } } // /route/1    { params: { id: '2' } } // /route/2    { params: { id: undefined } } // /route/  ];}---
```

**See Also:**

-   [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths)
-   [`params`](/en/reference/api-reference/#params)

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
