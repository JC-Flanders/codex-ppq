---
Source: https://docs.astro.build/en/reference/errors/i18n-not-enabled
Generated: 2026-04-19
Updated: 2026-04-19
---

# i18n Not Enabled

> **i18nNotEnabled**: The `astro:i18n` module cannot be used without enabling i18n in your Astro config.

## What went wrong?

[](#what-went-wrong)

The `astro:i18n` module cannot be used without enabling i18n in your Astro config. To enable i18n, add a default locale and a list of supported locales to your Astro config:

```javascript
import { defineConfig } from 'astro'export default defineConfig({ i18n: {   locales: ['en', 'fr'],   defaultLocale: 'en',  },})
```

For more information on internationalization support in Astro, see our [Internationalization guide](/en/guides/internationalization/).

**See Also:**

-   [Internationalization](/en/guides/internationalization/)
-   [`i18n` Configuration Reference](/en/reference/configuration-reference/#i18n)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
