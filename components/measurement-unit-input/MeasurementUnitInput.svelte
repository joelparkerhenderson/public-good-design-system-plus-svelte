<script lang="ts">
    // Component: MeasurementUnitInput
    //
    // A headless text input for entering a measurement unit.
    // A measurement unit is a standard quantity used to express a
    // measurement, such as "kg", "lb", "cm", "inch", "F", or "C".
    //
    // Usage:
    //   <MeasurementUnitInput label="Unit" bind:value />
    //   <MeasurementUnitInput label="Unit of measure" bind:value required />
    //
    // Props:
    //   - label: Accessible name for the input (required)
    //   - value: Bindable measurement unit string (default: "")
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
        /** Accessible name for the measurement unit input */
        label: string;
        /** Bindable measurement unit value */
        value?: string;
        /** Whether the input is required */
        required?: boolean;
        /** Whether the input is disabled */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input type="text" aria-label={label} bind:value {required} {disabled} {...restProps} />
