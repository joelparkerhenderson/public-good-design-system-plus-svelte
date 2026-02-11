<script lang="ts">
    // Component: Field
    //
    // A headless form field wrapper with label, description, and error support.
    // Children provide the actual input control.
    //
    // Props:
    //   label       — visible label text
    //   description — optional helper text
    //   error       — optional error message
    //   required    — adds required indicator
    //   children    — form control (input, select, etc.)
    //
    // Usage:
    //   <Field label="Name" description="Enter full name">
    //     <input id="name-input" />
    //   </Field>

    import type { Snippet } from "svelte";

    let {
        label,
        description = undefined,
        error = undefined,
        required = false,
        inputId = undefined,
        children,
        ...restProps
    }: {
        /** Visible label text. */
        label: string;
        /** Helper description. */
        description?: string;
        /** Error message. */
        error?: string;
        /** Whether the field is required. */
        required?: boolean;
        /** ID of the input to link the label to. */
        inputId?: string;
        /** Form control. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    const generatedId = `field-${Math.random().toString(36).slice(2, 9)}`;
    let fieldId = $derived(inputId ?? generatedId);
    let descId = $derived(`${fieldId}-desc`);
    let errorId = $derived(`${fieldId}-error`);
</script>

<div data-required={required || undefined} {...restProps}>
    <label for={fieldId}>{label}{#if required}<span aria-hidden="true"> *</span>{/if}</label>
    {#if description}
        <p id={descId}>{description}</p>
    {/if}
    {@render children()}
    {#if error}
        <p id={errorId} role="alert">{error}</p>
    {/if}
</div>
