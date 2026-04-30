---
Source: https://docs.astro.build/en/reference/errors/expected-image
Generated: 2026-04-19
Updated: 2026-04-19
---

# Expected src to be an image.

> **ExpectedImage**: Expected `src` property for `getImage` or `<Image />` to be either an ESM imported image or a string with the path of a remote image. Received `SRC` (type: `TYPEOF_OPTIONS`).
>
> Full serialized options received: `FULL_OPTIONS`.

## What went wrong?

[](#what-went-wrong)

An image’s `src` property is not valid. The Image component requires the `src` attribute to be either an image that has been ESM imported or a string. This is also true for the first parameter of `getImage()`.

```astro
---import { Image } from "astro:assets";import myImage from "../assets/my_image.png";---
<Image src={myImage} alt="..." /><Image src="https://example.com/logo.png" width={300} height={300} alt="..." />
```

In most cases, this error happens when the value passed to `src` is undefined.

**See Also:**

-   [Images](/en/guides/images/)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
