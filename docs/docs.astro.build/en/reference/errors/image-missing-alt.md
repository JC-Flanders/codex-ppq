---
Source: https://docs.astro.build/en/reference/errors/image-missing-alt
Generated: 2026-04-19
Updated: 2026-04-19
---

# Image missing required "alt" property.

> **ImageMissingAlt**: Image missing “alt” property. “alt” text is required to describe important images on the page.

## What went wrong?

[](#what-went-wrong)

The `alt` property allows you to provide descriptive alt text to users of screen readers and other assistive technologies. In order to ensure your images are accessible, the `Image` component requires that an `alt` be specified.

If the image is merely decorative (i.e. doesn’t contribute to the understanding of the page), set `alt=""` so that screen readers know to ignore the image.

**See Also:**

-   [Images](/en/guides/images/)
-   [Image component](/en/reference/modules/astro-assets/#image-)
-    [Image component#alt](/en/reference/modules/astro-assets/#alt-required)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
