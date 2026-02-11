<script lang="ts">
    // Component: NumberInput
    //
    // A headless number input using <input type="number">.
    //
    // Usage:
    //   <NumberInput label="Quantity" bind:value min={0} max={100} step={1} />

    let {
        label,
        value = $bindable(undefined),
        min = undefined,
        max = undefined,
        step = undefined,
        required = false,
        disabled = false,
        ...restProps
    }: {
        label: string;
        value?: number | undefined;
        min?: number;
        max?: number;
        step?: number;
        required?: boolean;
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="number"
    aria-label={label}
    bind:value
    {min}
    {max}
    {step}
    {required}
    {disabled}
    {...restProps}
/>
