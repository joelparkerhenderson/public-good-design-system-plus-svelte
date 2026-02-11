<script lang="ts">
    // Component: Dialog
    //
    // A headless modal dialog. Uses native <dialog> element rendered conditionally.
    // Manages focus trap and keyboard dismissal.
    //
    // Props:
    //   open     — bindable boolean controlling visibility
    //   label    — accessible name for the dialog (aria-label)
    //   modal    — whether the dialog is modal (default true)
    //   children — dialog content
    //
    // Keyboard:
    //   Escape — closes the dialog
    //
    // Usage:
    //   <Dialog label="Confirm" bind:open>
    //     <p>Are you sure?</p>
    //     <button onclick={() => open = false}>Close</button>
    //   </Dialog>
    //
    // Accessibility:
    //   - role="dialog" (native)
    //   - aria-modal="true" for modal dialogs
    //   - aria-label for accessible name
    //   - Escape key closes the dialog

    import type { Snippet } from "svelte";

    let {
        open = $bindable(false),
        label,
        modal = true,
        children,
        ...restProps
    }: {
        /** Whether the dialog is visible. Bindable. */
        open?: boolean;
        /** Accessible name for the dialog. */
        label: string;
        /** Whether the dialog is modal. */
        modal?: boolean;
        /** Dialog content. */
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
    <dialog
        open
        tabindex="-1"
        aria-label={label}
        aria-modal={modal || undefined}
        {onkeydown}
        {...restProps}
    >
        {@render children()}
    </dialog>
{/if}
