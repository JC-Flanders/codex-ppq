---
Source: https://docs.astro.build/en/reference/errors/missing-image-dimension
Generated: 2026-04-19
Updated: 2026-04-19
---

# Missing image dimensions

> Missing width and height attributes for `IMAGE_URL`. When using remote images, both dimensions are required in order to avoid cumulative layout shift (CLS).

## What went wrong?

[](#what-went-wrong)

For remote images, `width` and `height` cannot automatically be inferred from the original file. To avoid cumulative layout shift (CLS), either specify these two properties, or set [`inferSize`](/en/reference/modules/astro-assets/#infersize) to `true` to fetch a remote image’s original dimensions.

If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](/en/guides/imports/#other-assets).

**See Also:**

-   [Images](/en/guides/images/)
-   [Image component#width-and-height-required](/en/reference/modules/astro-assets/#width-and-height-required-for-images-in-public)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
