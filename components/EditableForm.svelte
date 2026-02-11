<script lang="ts">
    // Component: EditableForm
    //
    // A headless editable form that wraps inline editing in a <form>.
    // Provides submit/cancel semantics with Enter/Escape keyboard support.
    //
    // Props:
    //   label    — accessible name for the form
    //   editing  — bindable boolean for edit mode
    //   onsubmit — callback when form is submitted
    //   oncancel — callback when editing is cancelled
    //   children — form content
    //
    // Usage:
    //   <EditableForm label="Edit profile" bind:editing onsubmit={save}>
    //     <input name="name" value={name} />
    //     <button type="submit">Save</button>
    //   </EditableForm>

    import type { Snippet } from "svelte";

    let {
        label,
        editing = $bindable(false),
        onsubmit = undefined,
        oncancel = undefined,
        children,
        ...restProps
    }: {
        /** Accessible name for the form. */
        label: string;
        /** Whether the form is in edit mode. Bindable. */
        editing?: boolean;
        /** Called when form is submitted. */
        onsubmit?: (event: SubmitEvent) => void;
        /** Called when editing is cancelled. */
        oncancel?: () => void;
        /** Form content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        editing = false;
        onsubmit?.(event);
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            event.preventDefault();
            editing = false;
            oncancel?.();
        }
    }
</script>

{#if editing}
    <form
        aria-label={label}
        tabindex="-1"
        onsubmit={handleSubmit}
        onkeydown={handleKeydown}
        {...restProps}
    >
        {@render children()}
    </form>
{/if}
