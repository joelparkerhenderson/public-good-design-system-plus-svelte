<script lang="ts">
    // Component: DateField
    //
    // A headless date field with label, description, and error support.
    // Wraps a native <input type="date"> with proper labelling.
    //
    // Props:
    //   label       — visible label text
    //   value       — bindable date string (YYYY-MM-DD)
    //   description — optional helper text
    //   error       — optional error message
    //   required    — whether the field is required
    //   disabled    — whether the field is disabled
    //   id          — optional id for the input (auto-generated if omitted)
    //
    // Usage:
    //   <DateField label="Start date" bind:value />
    //   <DateField label="End date" bind:value error="Required" required />

    let {
        label,
        value = $bindable(""),
        description = undefined,
        error = undefined,
        required = false,
        disabled = false,
        id = undefined,
        ...restProps
    }: {
        /** Visible label for the date field. */
        label: string;
        /** Current date value in YYYY-MM-DD format. Bindable. */
        value?: string;
        /** Helper text displayed below the input. */
        description?: string;
        /** Error message when validation fails. */
        error?: string;
        /** Whether the field is required. */
        required?: boolean;
        /** Whether the field is disabled. */
        disabled?: boolean;
        /** Custom id for the input element. */
        id?: string;
        [key: string]: unknown;
    } = $props();

    // Generate a stable id for linking label/input/description/error.
    const generatedId = `date-field-${Math.random().toString(36).slice(2, 9)}`;
    let inputId = $derived(id ?? generatedId);
    let descriptionId = $derived(`${inputId}-desc`);
    let errorId = $derived(`${inputId}-error`);
</script>

<div {...restProps}>
    <label for={inputId}>{label}</label>
    <input
        id={inputId}
        type="date"
        bind:value
        {required}
        {disabled}
        aria-describedby={description ? descriptionId : undefined}
        aria-invalid={error ? true : undefined}
        aria-errormessage={error ? errorId : undefined}
    />
    {#if description}
        <p id={descriptionId}>{description}</p>
    {/if}
    {#if error}
        <p id={errorId} role="alert">{error}</p>
    {/if}
</div>
