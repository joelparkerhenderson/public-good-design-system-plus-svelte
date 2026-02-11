<script lang="ts">
    // Component: WeekInput
    //
    // A headless <input type="week"> with aria-label and bindable value.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable week string (YYYY-Www format)
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <WeekInput label="Select week" bind:value />

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
    type="week"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
