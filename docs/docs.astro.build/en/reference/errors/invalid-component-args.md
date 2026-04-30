---
Source: https://docs.astro.build/en/reference/errors/invalid-component-args
Generated: 2026-04-19
Updated: 2026-04-19
---

# Invalid component arguments.

> **Example error messages:**
> InvalidComponentArgs: Invalid arguments passed to `<MyAstroComponent>` component.

## What went wrong?

[](#what-went-wrong)

Astro components cannot be rendered manually via a function call, such as `Component()` or `{items.map(Component)}`. Prefer the component syntax `<Component />` or `{items.map(item => <Component {...item} />)}`.

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
