---
Source: https://docs.astro.build/en/reference/errors/forbidden-rewrite
Generated: 2026-04-19
Updated: 2026-04-19
---

# Forbidden rewrite to a static route.

> **ForbiddenRewrite**: You tried to rewrite the on-demand route ‘FROM’ with the static route ‘TO’, when using the ‘server’ output.
>
> The static route ‘TO’ is rendered by the component ‘COMPONENT’, which is marked as prerendered. This is a forbidden operation because during the build, the component ‘COMPONENT’ is compiled to an HTML file, which can’t be retrieved at runtime by Astro.

## What went wrong?

[](#what-went-wrong)

`Astro.rewrite()` can’t be used to rewrite an on-demand route with a static route when using the `"server"` output.

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
