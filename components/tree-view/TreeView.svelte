<script lang="ts">
    // Component: TreeView
    //
    // A headless tree view using ARIA tree role with keyboard navigation.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for tree items (role="treeitem")
    //
    // Usage:
    //   <TreeView label="File browser">
    //     <li role="treeitem">Documents</li>
    //     <li role="treeitem">Photos</li>
    //   </TreeView>

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
