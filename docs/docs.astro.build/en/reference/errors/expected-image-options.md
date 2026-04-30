---
Source: https://docs.astro.build/en/reference/errors/expected-image-options
Generated: 2026-04-19
Updated: 2026-04-19
---

# Expected image options.

> **ExpectedImageOptions**: Expected getImage() parameter to be an object. Received `OPTIONS`.

## What went wrong?

[](#what-went-wrong)

`getImage()`’s first parameter should be an object with the different properties to apply to your image.

```typescript
import { getImage } from "astro:assets";import myImage from "../assets/my_image.png";
const optimizedImage = await getImage({src: myImage, width: 300, height: 300});
```

In most cases, this error happens because parameters were passed directly instead of inside an object.

**See Also:**

-   [Images](/en/guides/images/)

![Scrimba](/_astro/Scrimba.ByZ1pAIN_Z1aWGoT.webp) ![](/_astro/JamesQuick.BYVczE5K_Z27j1Lz.webp)

## **Learn Astro** with James Q Quick

Build your first site with 35 interactive Scrimba lessons

[Contribute](/en/contribute/) [Community](https://astro.build/chat) [Sponsor](https://opencollective.com/astrodotbuild)
