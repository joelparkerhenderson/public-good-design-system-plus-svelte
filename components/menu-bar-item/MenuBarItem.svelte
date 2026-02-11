<script lang="ts">
    // Component: MenuBarItem
    //
    // A single item within a MenuBar. Uses role="menuitem" with tabindex.
    //
    // Usage:
    //   <MenuBarItem>File</MenuBarItem>

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        /** Content of the menu bar item. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="menuitem" tabindex="-1" {...restProps}>
    {@render children()}
</div>
