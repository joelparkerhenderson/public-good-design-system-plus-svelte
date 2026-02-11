<script lang="ts">
    // Component: ScrollArea
    //
    // A headless scrollable container with tabindex for keyboard scrolling.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for scrollable content
    //
    // Usage:
    //   <ScrollArea label="Scrollable content">
    //     <p>Long content...</p>
    //   </ScrollArea>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Scrollable content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="region" aria-label={label} tabindex="0" {...restProps}>
    {@render children()}
</div>
