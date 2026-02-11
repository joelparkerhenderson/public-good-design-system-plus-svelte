<script lang="ts">
    // Component: ToolBarItem
    //
    // A single item within a ToolBar. Renders as a button.
    //
    // Usage:
    //   <ToolBarItem>Bold</ToolBarItem>

    import type { Snippet } from "svelte";

    let {
        disabled = false,
        children,
        ...restProps
    }: {
        /** Whether disabled. */
        disabled?: boolean;
        /** Button content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<button type="button" {disabled} {...restProps}>
    {@render children()}
</button>
