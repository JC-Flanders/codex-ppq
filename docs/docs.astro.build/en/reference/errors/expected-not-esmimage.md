---
Source: https://docs.astro.build/en/reference/errors/expected-not-esmimage
Generated: 2026-04-19
Updated: 2026-04-19
---

# Expected image options, not an ESM-imported image.

> **ExpectedNotESMImage**: An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.

## What went wrong?

[](#what-went-wrong)

An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.

```diff
import { getImage } from "astro:assets";import myImage from "../assets/my_image.png"; const optimizedImage = await getImage( myImage ); const optimizedImage = await getImage({ src: myImage });
```

**See Also:**

-   [Images](/en/guides/images/)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
