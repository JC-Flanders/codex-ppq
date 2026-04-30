---
Source: https://docs.astro.build/en/reference/errors/locals-not-an-object
Generated: 2026-04-19
Updated: 2026-04-19
---

# Value assigned to locals is not accepted.

> **LocalsNotAnObject**: `locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.

## What went wrong?

[](#what-went-wrong)

Thrown when `locals` is overwritten with something that is not an object

For example:

```typescript
import {defineMiddleware} from "astro:middleware";export const onRequest = defineMiddleware((context, next) => {  context.locals = 1541;  return next();});
```

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
