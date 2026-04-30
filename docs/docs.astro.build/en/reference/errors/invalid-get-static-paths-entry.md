---
Source: https://docs.astro.build/en/reference/errors/invalid-get-static-paths-entry
Generated: 2026-04-19
Updated: 2026-04-19
---

# Invalid entry inside getStaticPath's return value

> **InvalidGetStaticPathsEntry**: Invalid entry returned by getStaticPaths. Expected an object, got `ENTRY_TYPE`

## What went wrong?

[](#what-went-wrong)

`getStaticPaths`’s return value must be an array of objects. In most cases, this error happens because an array of array was returned. Using [`.flatMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) or a [`.flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) call may be useful.

pages/blog/\[id\].astro

```typescript
export async function getStaticPaths() {  return [ // <-- Array    { params: { slug: "blog" } }, // <-- Object    { params: { slug: "about" } }  ];}
```

**See Also:**

-   [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths)

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
