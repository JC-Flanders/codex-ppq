---
Source: https://docs.astro.build/en/reference/errors/no-client-only-hint
Generated: 2026-04-19
Updated: 2026-04-19
---

# Missing hint on client:only directive.

> **NoClientOnlyHint**: Unable to render `COMPONENT_NAME`. When using the `client:only` hydration strategy, Astro needs a hint to use the correct renderer.

## What went wrong?

[](#what-went-wrong)

`client:only` components are not run on the server, as such Astro does not know (and cannot guess) which renderer to use and require a hint. Like such:

```astro
<SomeReactComponent client:only="react" />
```

**See Also:**

-   [`client:only`](/en/reference/directives-reference/#clientonly)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
