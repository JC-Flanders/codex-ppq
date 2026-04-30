---
Source: https://docs.astro.build/en/reference/errors/rewrite-with-body-used
Generated: 2026-04-19
Updated: 2026-04-19
---

# Cannot use Astro.rewrite after the request body has been read

> **RewriteWithBodyUsed**: Astro.rewrite() cannot be used if the request body has already been read. If you need to read the body, first clone the request.

## What went wrong?

[](#what-went-wrong)

`Astro.rewrite()` cannot be used if the request body has already been read. If you need to read the body, first clone the request. For example:

```javascript
const data = await Astro.request.clone().formData();
Astro.rewrite("/target")
```

**See Also:**

-   [Request.clone()](https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
-   [Astro.rewrite](/en/reference/api-reference/#rewrite)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
