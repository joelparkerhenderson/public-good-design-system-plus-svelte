<script lang="ts">
    // Component: RadioInput
    //
    // A headless bare <input type="radio"> with aria-label (no wrapping label).
    // Useful when the label is provided separately or by a parent component.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   name     — radio group name
    //   value    — the value of this radio option
    //   checked  — whether this radio is checked
    //   disabled — whether the radio is disabled
    //
    // Usage:
    //   <RadioInput label="Option A" name="choice" value="a" />

    let {
        label,
        name = undefined,
        value = undefined,
        checked = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Radio group name. */
        name?: string;
        /** Value for this option. */
        value?: string;
        /** Whether checked. */
        checked?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="radio"
    aria-label={label}
    {name}
    {value}
    {checked}
    {disabled}
    {...restProps}
/>
