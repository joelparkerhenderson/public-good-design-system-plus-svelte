<script lang="ts">
    // Component: TreeMenu
    //
    // A headless tree-based menu, alias for tree view with menu semantics.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for tree items
    //
    // Usage:
    //   <TreeMenu label="Navigation">
    //     <li role="treeitem" tabindex="-1">Home</li>
    //     <li role="treeitem" tabindex="-1">About</li>
    //   </TreeMenu>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Tree item elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let treeRef: HTMLElement | undefined = $state(undefined);

    function onkeydown(event: KeyboardEvent) {
        if (!treeRef) return;
        const items = Array.from(treeRef.querySelectorAll<HTMLElement>("[role='treeitem']"));
        const current = document.activeElement as HTMLElement;
        const index = items.indexOf(current);
        switch (event.key) {
            case "ArrowDown": { event.preventDefault(); const next = index < items.length - 1 ? index + 1 : 0; items[next]?.focus(); break; }
            case "ArrowUp": { event.preventDefault(); const prev = index > 0 ? index - 1 : items.length - 1; items[prev]?.focus(); break; }
            case "Home": { event.preventDefault(); items[0]?.focus(); break; }
            case "End": { event.preventDefault(); items[items.length - 1]?.focus(); break; }
        }
    }
</script>

<ul role="tree" aria-label={label} bind:this={treeRef} {onkeydown} {...restProps}>
    {@render children()}
</ul>
