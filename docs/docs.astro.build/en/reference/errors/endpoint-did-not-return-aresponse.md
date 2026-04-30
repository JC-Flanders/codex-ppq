---
Source: https://docs.astro.build/en/reference/errors/endpoint-did-not-return-aresponse
Generated: 2026-04-19
Updated: 2026-04-19
---

# The endpoint did not return a Response.

> **EndpointDidNotReturnAResponse**: An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`.

## What went wrong?

[](#what-went-wrong)

Thrown when an endpoint does not return anything or returns an object that is not a `Response` object.

An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`. For example:

```typescript
import type { APIContext } from 'astro';
export async function GET({ request, url, cookies }: APIContext): Promise<Response> {    return Response.json({        success: true,        result: 'Data from Astro Endpoint!'    })}
```

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
