<script lang="ts">
    // Component: Popup
    //
    // A headless conditional overlay dialog, similar to a Popover.
    // Renders its children inside a dialog container only when open.
    //
    // Props:
    //   label    — accessible name for the dialog
    //   open     — bindable boolean controlling visibility
    //   children — snippet content rendered inside the dialog
    //
    // Usage:
    //   <Popup label="Info" bind:open>
    //     <p>Popup content here</p>
    //   </Popup>

    import type { Snippet } from "svelte";

    let {
        label,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** Accessible label for the popup dialog. */
        label: string;
        /** Whether the popup is visible. Bindable. */
        open?: boolean;
        /** Content rendered inside the popup. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

{#if open}
    <div role="dialog" aria-label={label} {...restProps}>
        {@render children()}
    </div>
{/if}
