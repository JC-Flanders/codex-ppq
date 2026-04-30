---
Source: https://docs.astro.build/en/reference/errors/middleware-not-aresponse
Generated: 2026-04-19
Updated: 2026-04-19
---

# The middleware returned something that is not a Response object.

> **MiddlewareNotAResponse**: Any data returned from middleware must be a valid `Response` object.

## What went wrong?

[](#what-went-wrong)

Thrown in development mode when middleware returns something that is not a `Response` object.

For example:

```typescript
import {defineMiddleware} from "astro:middleware";export const onRequest = defineMiddleware(() => {  return "string"});
```

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
