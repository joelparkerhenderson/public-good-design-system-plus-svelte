<script lang="ts">
    // Component: MeasurementInstanceInput
    //
    // A headless text input for entering a measurement instance value.
    // A measurement instance is a specific measured value, such as "72 kg"
    // or "98.6 F" or "120/80 mmHg".
    //
    // Usage:
    //   <MeasurementInstanceInput label="Weight" bind:value />
    //   <MeasurementInstanceInput label="Temperature" bind:value required />
    //
    // Props:
    //   - label: Accessible name for the input (required)
    //   - value: Bindable measurement instance string (default: "")
    //   - required: Whether the field is required (default: false)
    //   - disabled: Whether the field is disabled (default: false)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - aria-label provides the accessible name
    //   - Supports required and disabled states
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - No hardcoded user-facing strings

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible name for the measurement instance input */
        label: string;
        /** Bindable measurement instance value */
        value?: string;
        /** Whether the input is required */
        required?: boolean;
        /** Whether the input is disabled */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input type="text" aria-label={label} bind:value {required} {disabled} {...restProps} />
