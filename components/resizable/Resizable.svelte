<script lang="ts">
    // Component: Resizable
    //
    // A headless resizable container. Sets CSS resize property and provides
    // keyboard-accessible focus via tabindex.
    //
    // Props:
    //   label — accessible name via aria-label
    //   direction — resize direction ("both", "horizontal", "vertical")
    //   children — snippet for content
    //
    // Usage:
    //   <Resizable label="Resizable panel" direction="both">
    //     <p>Content</p>
    //   </Resizable>

    import type { Snippet } from "svelte";

    let {
        label,
        direction = "both",
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Resize direction. */
        direction?: "both" | "horizontal" | "vertical";
        /** Content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="region" aria-label={label} tabindex="0" data-resize={direction} {...restProps}>
    {@render children()}
</div>
