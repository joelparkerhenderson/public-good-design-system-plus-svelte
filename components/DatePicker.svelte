<script lang="ts">
    // Component: DatePicker
    //
    // A headless date picker wrapping the native date input.
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — bindable date value (YYYY-MM-DD)
    //
    // Usage:
    //   <DatePicker label="Start date" bind:value />

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        min,
        max,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current date value. Bindable. */
        value?: string;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        /** Minimum date. */
        min?: string;
        /** Maximum date. */
        max?: string;
        [key: string]: unknown;
    } = $props();
</script>

<input type="date" aria-label={label} bind:value {required} {disabled} {min} {max} {...restProps} />
