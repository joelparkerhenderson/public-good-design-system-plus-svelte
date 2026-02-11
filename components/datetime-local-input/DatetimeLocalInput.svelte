<script lang="ts">
    // Component: DatetimeLocalInput
    //
    // A headless native datetime-local input. Wraps <input type="datetime-local">
    // with accessible label and bindable value.
    //
    // Props:
    //   label    — accessible name (aria-label)
    //   value    — bindable datetime string
    //   min      — minimum datetime
    //   max      — maximum datetime
    //   required — whether input is required
    //   disabled — whether input is disabled
    //
    // Usage:
    //   <DatetimeLocalInput label="Event start" bind:value />

    let {
        label,
        value = $bindable(""),
        min = undefined,
        max = undefined,
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label for the input. */
        label: string;
        /** Current datetime value. Bindable. */
        value?: string;
        /** Minimum datetime. */
        min?: string;
        /** Maximum datetime. */
        max?: string;
        /** Whether the input is required. */
        required?: boolean;
        /** Whether the input is disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="datetime-local"
    aria-label={label}
    bind:value
    {min}
    {max}
    {required}
    {disabled}
    {...restProps}
/>
