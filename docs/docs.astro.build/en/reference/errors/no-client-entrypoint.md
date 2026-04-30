---
Source: https://docs.astro.build/en/reference/errors/no-client-entrypoint
Generated: 2026-04-19
Updated: 2026-04-19
---

# No client entrypoint specified in renderer.

> **NoClientEntrypoint**: `COMPONENT_NAME` component has a `client:CLIENT_DIRECTIVE` directive, but no client entrypoint was provided by `RENDERER_NAME`.

## What went wrong?

[](#what-went-wrong)

Astro tried to hydrate a component on the client, but the renderer used does not provide a client entrypoint to use to hydrate.

**See Also:**

-   [addRenderer option](/en/reference/integrations-reference/#addrenderer-option)
-   [Hydrating framework components](/en/guides/framework-components/#hydrating-interactive-components)

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
