<script lang="ts">
    // Component: Scrollbar
    //
    // A headless scrollbar track element. Consumer styles provide visual appearance.
    //
    // Props:
    //   orientation — "vertical" or "horizontal"
    //   label — accessible name
    //   children — snippet for scrollbar thumb/content
    //
    // Usage:
    //   <Scrollbar orientation="vertical" label="Scroll">
    //     <div>thumb</div>
    //   </Scrollbar>

    import type { Snippet } from "svelte";

    let {
        orientation = "vertical",
        label,
        children,
        ...restProps
    }: {
        /** Scrollbar orientation. */
        orientation?: "vertical" | "horizontal";
        /** Accessible label. */
        label: string;
        /** Scrollbar content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="scrollbar" aria-label={label} aria-orientation={orientation} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} {...restProps}>
    {@render children()}
</div>
