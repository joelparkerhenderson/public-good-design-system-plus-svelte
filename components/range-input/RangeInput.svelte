<script lang="ts">
    // Component: RangeInput
    //
    // A headless <input type="range"> with aria-label and bindable value.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable numeric value
    //   min      — minimum value (default 0)
    //   max      — maximum value (default 100)
    //   step     — step increment (default 1)
    //   disabled — whether disabled
    //
    // Usage:
    //   <RangeInput label="Volume" bind:value min={0} max={100} />

    let {
        label,
        value = $bindable(50),
        min = 0,
        max = 100,
        step = 1,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current value. Bindable. */
        value?: number;
        /** Minimum value. */
        min?: number;
        /** Maximum value. */
        max?: number;
        /** Step increment. */
        step?: number;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="range"
    aria-label={label}
    bind:value
    {min}
    {max}
    {step}
    {disabled}
    {...restProps}
/>
