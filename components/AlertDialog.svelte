<script lang="ts">
    // Component: AlertDialog
    //
    // A headless alert dialog component for critical interactions that require
    // user acknowledgment. Uses the native HTML <dialog> element with the
    // ARIA alertdialog role.
    //
    // Alert dialogs are modal by nature — they interrupt the user's workflow
    // to deliver a critical message and require a response before the user
    // can continue. Examples: confirm deletion, unsaved changes warning.
    //
    // Usage:
    //   <AlertDialog open={showDialog} title="Confirm" description="Are you sure?">
    //     <button onclick={handleConfirm}>Yes</button>
    //     <button onclick={handleCancel}>No</button>
    //   </AlertDialog>
    //
    // Props:
    //   - open: Whether the dialog is visible (default: false, bindable)
    //   - title: The dialog title for screen readers (required for accessibility)
    //   - description: The dialog description/message
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: alertdialog
    //   - Keyboard: Escape closes the dialog (managed by consumer)
    //   - ARIA: aria-labelledby references the title, aria-describedby references the description
    //   - aria-modal="true" signals modal behavior to assistive technologies
    //   - Consumers are responsible for focus trapping (headless component)
    //
    // Internationalization:
    //   - Title and description come through props
    //   - Action buttons come through children snippet

    import type { Snippet } from "svelte";

    let {
        open = $bindable(false),
        title,
        description = undefined,
        children,
        ...restProps
    }: {
        /** Whether the dialog is visible */
        open?: boolean;
        /** The dialog title for the heading and aria-labelledby */
        title: string;
        /** The dialog description/message for aria-describedby */
        description?: string;
        /** The dialog action buttons and content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    // Generate unique IDs for ARIA references
    let titleId = "alert-dialog-title";
    let descriptionId = "alert-dialog-description";
</script>

<!-- AlertDialog: a modal dialog requiring user acknowledgment.
     Uses the `open` attribute on <dialog> for visibility.
     Consumers handle focus management and backdrop styling. -->
{#if open}
    <dialog
        open
        role="alertdialog"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        aria-modal="true"
        {...restProps}
    >
        <div>
            <p id={titleId}><strong>{title}</strong></p>
            {#if description}
                <p id={descriptionId}>{description}</p>
            {/if}
            {@render children()}
        </div>
    </dialog>
{/if}
