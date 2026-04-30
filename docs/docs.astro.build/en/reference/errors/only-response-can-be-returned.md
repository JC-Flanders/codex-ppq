---
Source: https://docs.astro.build/en/reference/errors/only-response-can-be-returned
Generated: 2026-04-19
Updated: 2026-04-19
---

# Invalid type returned by Astro page.

> Route returned a `RETURNED_VALUE`. Only a Response can be returned from Astro files.

## What went wrong?

[](#what-went-wrong)

Only instances of [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned inside Astro files.

pages/login.astro

```astro
---return new Response(null, { status: 404, statusText: 'Not found'});
// Alternatively, for redirects, Astro.redirect also returns an instance of Responsereturn Astro.redirect('/login');---
```

**See Also:**

-   [Response](/en/guides/on-demand-rendering/#response)

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
