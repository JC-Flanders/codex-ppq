---
Source: https://docs.astro.build/en/reference/errors/middleware-cant-be-loaded
Generated: 2026-04-19
Updated: 2026-04-19
---

# Can't load the middleware.

> **MiddlewareCantBeLoaded**: An unknown error was thrown while loading your middleware.

## What went wrong?

[](#what-went-wrong)

Thrown in development mode when middleware throws an error while attempting to loading it.

For example:

```typescript
import {defineMiddleware} from "astro:middleware";throw new Error("Error thrown while loading the middleware.")export const onRequest = defineMiddleware(() => {  return "string"});
```

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
