<script lang="ts">
    // Component: Carousel
    //
    // A headless carousel/slider using ARIA region with live announcements.
    // Consumer provides slides as children and controls navigation.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for slide content
    //
    // Usage:
    //   <Carousel label="Photo gallery">
    //     <div role="group" aria-label="Slide 1">...</div>
    //   </Carousel>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Slide elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="region" aria-label={label} aria-roledescription="carousel" {...restProps}>
    {@render children()}
</div>
