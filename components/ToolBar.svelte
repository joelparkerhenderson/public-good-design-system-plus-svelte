<script lang="ts">
    // Component: ToolBar
    //
    // A headless toolbar container with ARIA toolbar role and keyboard navigation.
    // Left/right arrow keys move between toolbar items.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for toolbar items
    //
    // Usage:
    //   <ToolBar label="Editor tools">
    //     <button>Bold</button>
    //     <button>Italic</button>
    //   </ToolBar>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Toolbar item elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let toolbarRef: HTMLElement | undefined = $state(undefined);

    function onkeydown(event: KeyboardEvent) {
        if (!toolbarRef) return;
        const items = Array.from(toolbarRef.querySelectorAll<HTMLElement>("button, [role='button'], [tabindex]"));
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

<div role="toolbar" aria-label={label} bind:this={toolbarRef} {onkeydown} {...restProps}>
    {@render children()}
</div>
