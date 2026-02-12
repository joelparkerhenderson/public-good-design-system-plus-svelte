<script lang="ts">
    // AspectRatio component
    //
    // A headless layout container that maintains a specific width-to-height
    // aspect ratio for its content. Sets CSS aspect-ratio via a style attribute
    // and exposes a data-aspect-ratio attribute for consumer styling hooks.
    // Useful for responsive images, videos, cards, and any content that must
    // maintain consistent proportions across screen sizes.
    //
    // Props:
    //   ratio    — number, default 1. Aspect ratio as width/height.
    //              Common values: 16/9, 4/3, 1 (square), 21/9 (ultrawide).
    //   children — Snippet, required. Content to display inside the container.
    //   ...restProps — additional HTML attributes spread onto the <div>.
    //
    // Syntax:
    //   <AspectRatio ratio={16/9}>content</AspectRatio>
    //
    // Examples:
    //   <!-- 16:9 video container -->
    //   <AspectRatio ratio={16/9}>
    //     <video src="video.mp4"></video>
    //   </AspectRatio>
    //
    //   <!-- Square avatar frame -->
    //   <AspectRatio ratio={1}>
    //     <img src="avatar.jpg" alt="User avatar" />
    //   </AspectRatio>
    //
    //   <!-- 4:3 card layout -->
    //   <AspectRatio ratio={4/3} data-testid="card-frame">
    //     <p>Card content</p>
    //   </AspectRatio>
    //
    // Keyboard: None — this is a layout utility, not an interactive element.
    //
    // Accessibility:
    //   - No specific ARIA role needed; this is a layout utility
    //   - Content within maintains its own accessibility semantics
    //   - data-aspect-ratio attribute exposed for consumer CSS queries
    //
    // Internationalization:
    //   - No user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles beyond the inline aspect-ratio
    //   - Uses CSS aspect-ratio property (not padding-bottom hack)
    //   - Do not add overflow: hidden — consumer handles clipping
    //
    // References:
    //   - CSS aspect-ratio: https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio

    import type { Snippet } from "svelte";

    let {
        ratio = 1,
        children,
        ...restProps
    }: {
        /** The aspect ratio as a number (width / height), e.g. 16/9 */
        ratio?: number;
        /** The content to display within the aspect ratio container */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- AspectRatio component: a container that maintains a specific width-to-height ratio -->
<div
    style:aspect-ratio={ratio}
    data-aspect-ratio={ratio}
    {...restProps}
>
    {@render children()}
</div>
