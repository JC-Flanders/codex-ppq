---
Source: https://docs.astro.build/en/reference/errors/middleware-no-data-or-next-called
Generated: 2026-04-19
Updated: 2026-04-19
---

# The middleware didn't return a Response.

> **MiddlewareNoDataOrNextCalled**: Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function.

## What went wrong?

[](#what-went-wrong)

Thrown when the middleware does not return any data or call the `next` function.

For example:

```typescript
import {defineMiddleware} from "astro:middleware";export const onRequest = defineMiddleware((context, _) => {  // doesn't return anything or call `next`  context.locals.someData = false;});
```

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
