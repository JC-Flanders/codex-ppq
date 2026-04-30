---
Source: https://docs.astro.build/en/reference/errors/missing-sharp
Generated: 2026-04-19
Updated: 2026-04-19
---

# Could not find Sharp.

> **MissingSharp**: Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.

## What went wrong?

[](#what-went-wrong)

Sharp is the default image service used for `astro:assets`. When using a [strict package manager](https://pnpm.io/pnpm-vs-npm#npms-flat-tree) like pnpm, Sharp must be installed manually into your project in order to use image processing.

If you are not using `astro:assets` for image processing, and do not wish to install Sharp, you can configure the following passthrough image service that does no processing:

```javascript
import { defineConfig, passthroughImageService } from "astro/config";export default defineConfig({ image: {   service: passthroughImageService(), },});
```

**See Also:**

-   [Default Image Service](/en/guides/images/#default-image-service)
-   [Image Services API](/en/reference/image-service-reference/)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
