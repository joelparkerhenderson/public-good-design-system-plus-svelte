<script lang="ts">
    // Component: MeasurementSystemInput
    //
    // A headless text input for entering a measurement system name.
    // A measurement system is a collection of units and rules for
    // measuring, such as "metric", "imperial", or "SI".
    //
    // Usage:
    //   <MeasurementSystemInput label="Measurement system" bind:value />
    //   <MeasurementSystemInput label="System" bind:value required />
    //
    // Props:
    //   - label: Accessible name for the input (required)
    //   - value: Bindable measurement system name string (default: "")
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
        /** Accessible name for the measurement system input */
        label: string;
        /** Bindable measurement system name */
        value?: string;
        /** Whether the input is required */
        required?: boolean;
        /** Whether the input is disabled */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input type="text" aria-label={label} bind:value {required} {disabled} {...restProps} />
