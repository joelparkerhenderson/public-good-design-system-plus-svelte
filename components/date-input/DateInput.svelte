<script lang="ts">
    // Component: DateInput
    //
    // A headless native date input. Thin wrapper around <input type="date">
    // with bindable value and accessible label.
    //
    // Props:
    //   label    — accessible name (aria-label)
    //   value    — bindable date string (YYYY-MM-DD)
    //   min      — minimum allowed date
    //   max      — maximum allowed date
    //   required — whether input is required
    //   disabled — whether input is disabled
    //
    // Usage:
    //   <DateInput label="Birth date" bind:value />
    //   <DateInput label="Deadline" bind:value min="2024-01-01" max="2024-12-31" />

    let {
        label,
        value = $bindable(""),
        min = undefined,
        max = undefined,
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label for the date input. */
        label: string;
        /** Current date value (YYYY-MM-DD). Bindable. */
        value?: string;
        /** Minimum date. */
        min?: string;
        /** Maximum date. */
        max?: string;
        /** Whether the input is required. */
        required?: boolean;
        /** Whether the input is disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="date"
    aria-label={label}
    bind:value
    {min}
    {max}
    {required}
    {disabled}
    {...restProps}
/>
