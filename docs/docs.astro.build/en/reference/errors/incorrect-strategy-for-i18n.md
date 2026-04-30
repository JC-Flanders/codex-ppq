---
Source: https://docs.astro.build/en/reference/errors/incorrect-strategy-for-i18n
Generated: 2026-04-19
Updated: 2026-04-19
---

# You can't use the current function with the current strategy

> **IncorrectStrategyForI18n**: The function `FUNCTION_NAME` can only be used when the `i18n.routing.strategy` is set to `"manual"`.

## What went wrong?

[](#what-went-wrong)

Some internationalization functions are only available when Astro’s own i18n routing is disabled by the configuration setting `i18n.routing: "manual"`.

**See Also:**

-   [`i18n` routing](/en/guides/internationalization/#routing)

![](/_astro/CodingInPublic.DpaYu7Qd_1BEEUO.webp)

## Learn Astro with **Coding in Public**

150+ video lessons • Astro v5 ready

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
