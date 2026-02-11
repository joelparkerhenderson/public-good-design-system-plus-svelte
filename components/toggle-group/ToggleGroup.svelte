<script lang="ts">
    // Component: ToggleGroup
    //
    // A headless group of toggle buttons using role="group".
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for toggle buttons
    //
    // Usage:
    //   <ToggleGroup label="Text formatting">
    //     <button aria-pressed="true">Bold</button>
    //     <button aria-pressed="false">Italic</button>
    //   </ToggleGroup>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Toggle button elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="group" aria-label={label} {...restProps}>
    {@render children()}
</div>
