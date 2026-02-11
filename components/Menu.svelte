<script lang="ts">
    // Component: Menu
    //
    // A headless menu container with ARIA menu role and keyboard navigation.
    // Consumer provides menu items as children (typically with role="menuitem").
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for menu items
    //
    // Usage:
    //   <Menu label="Actions">
    //     <div role="menuitem" tabindex="-1">Cut</div>
    //     <div role="menuitem" tabindex="-1">Copy</div>
    //   </Menu>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the menu. */
        label: string;
        /** Menu item elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let menuRef: HTMLElement | undefined = $state(undefined);

    function onkeydown(event: KeyboardEvent) {
        if (!menuRef) return;
        const items = Array.from(menuRef.querySelectorAll<HTMLElement>("[role='menuitem']"));
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

<div role="menu" aria-label={label} bind:this={menuRef} {onkeydown} {...restProps}>
    {@render children()}
</div>
