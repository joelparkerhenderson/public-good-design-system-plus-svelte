<script lang="ts">
    // Component: RadioButton
    //
    // A headless radio button with a wrapping <label> for click-to-select.
    // Renders an <input type="radio"> inside a <label> element.
    //
    // Props:
    //   label    — visible label text and accessible name
    //   name     — radio group name for mutual exclusivity
    //   value    — the value of this radio option
    //   checked  — whether this radio is checked
    //   disabled — whether the radio is disabled
    //
    // Usage:
    //   <RadioButton label="Option A" name="choice" value="a" />

    let {
        label,
        name = undefined,
        value = undefined,
        checked = false,
        disabled = false,
        ...restProps
    }: {
        /** Visible label and accessible name. */
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

<label {...restProps}>
    <input
        type="radio"
        {name}
        {value}
        {checked}
        {disabled}
    />
    {label}
</label>
