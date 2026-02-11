<script lang="ts">
    // Component: MenuBar
    //
    // A headless horizontal menu bar with ARIA menubar role.
    // Supports left/right arrow key navigation between top-level items.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for menu bar items
    //
    // Usage:
    //   <MenuBar label="Main menu">
    //     <div role="menuitem" tabindex="-1">File</div>
    //     <div role="menuitem" tabindex="-1">Edit</div>
    //   </MenuBar>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Menu bar item elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let barRef: HTMLElement | undefined = $state(undefined);

    function onkeydown(event: KeyboardEvent) {
        if (!barRef) return;
        const items = Array.from(barRef.querySelectorAll<HTMLElement>("[role='menuitem']"));
        const current = document.activeElement as HTMLElement;
        const index = items.indexOf(current);
        switch (event.key) {
            case "ArrowRight": { event.preventDefault(); const next = index < items.length - 1 ? index + 1 : 0; items[next]?.focus(); break; }
            case "ArrowLeft": { event.preventDefault(); const prev = index > 0 ? index - 1 : items.length - 1; items[prev]?.focus(); break; }
            case "Home": { event.preventDefault(); items[0]?.focus(); break; }
            case "End": { event.preventDefault(); items[items.length - 1]?.focus(); break; }
        }
    }
</script>

<div role="menubar" aria-label={label} bind:this={barRef} {onkeydown} {...restProps}>
    {@render children()}
</div>
