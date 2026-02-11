<script lang="ts">
    // Component: Drawer
    //
    // A headless drawer/panel that slides in from an edge. Rendered
    // conditionally based on the open prop. Uses dialog role with
    // aria-modal for accessibility.
    //
    // Props:
    //   open     — bindable boolean controlling visibility
    //   label    — accessible name
    //   side     — which edge the drawer comes from (default "left")
    //   children — drawer content
    //
    // Keyboard:
    //   Escape — closes the drawer
    //
    // Usage:
    //   <Drawer label="Navigation" bind:open side="left">
    //     <nav>...</nav>
    //   </Drawer>

    import type { Snippet } from "svelte";

    let {
        open = $bindable(false),
        label,
        side = "left",
        children,
        ...restProps
    }: {
        /** Whether the drawer is visible. Bindable. */
        open?: boolean;
        /** Accessible name for the drawer. */
        label: string;
        /** Edge the drawer enters from. */
        side?: "left" | "right" | "top" | "bottom";
        /** Drawer content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            event.preventDefault();
            open = false;
        }
    }
</script>

{#if open}
    <div
        role="dialog"
        tabindex="-1"
        aria-label={label}
        aria-modal="true"
        data-side={side}
        {onkeydown}
        {...restProps}
    >
        {@render children()}
    </div>
{/if}
