<script lang="ts">
    // Component: Sheet
    //
    // A headless sliding panel overlay, similar to a drawer/dialog.
    // Conditionally rendered, with Escape to close.
    //
    // Props:
    //   label — accessible name via aria-label
    //   open  — bindable visibility state
    //   side  — which edge it slides from (default "right")
    //   children — snippet for sheet content
    //
    // Usage:
    //   <Sheet label="Settings" bind:open side="right">
    //     <p>Sheet content</p>
    //   </Sheet>

    import type { Snippet } from "svelte";

    let {
        label,
        open = $bindable(false),
        side = "right",
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Whether the sheet is open. Bindable. */
        open?: boolean;
        /** Edge from which the sheet appears. */
        side?: "left" | "right" | "top" | "bottom";
        /** Sheet content. */
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
    <div role="dialog" aria-label={label} aria-modal="true" tabindex="-1" data-side={side} {onkeydown} {...restProps}>
        {@render children()}
    </div>
{/if}
