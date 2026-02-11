<script lang="ts">
    // Component: TimeInput
    //
    // A headless <input type="time"> with aria-label and bindable value.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable time string (HH:MM format)
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <TimeInput label="Start time" bind:value />

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current value. Bindable. */
        value?: string;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="time"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
