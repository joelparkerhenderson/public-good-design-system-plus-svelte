<script lang="ts">
    // Component: MeasurementInstanceView
    //
    // A headless display component that shows a measurement instance value
    // in a <span> element. A measurement instance is a specific measured
    // value, such as "72 kg" or "98.6 F" or "120/80 mmHg".
    //
    // Usage:
    //   <MeasurementInstanceView value="72 kg" />
    //   <MeasurementInstanceView value="98.6 F" label="Body temperature" />
    //
    // Props:
    //   - value: The measurement instance value to display (required)
    //   - label: Optional accessible name via aria-label
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Optional aria-label for additional context
    //   - Text content is inherently accessible
    //
    // Internationalization:
    //   - All text comes through the value and label props
    //   - No hardcoded user-facing strings

    let {
        value,
        label = undefined,
        ...restProps
    }: {
        /** The measurement instance value to display */
        value: string;
        /** Optional accessible name */
        label?: string;
        [key: string]: unknown;
    } = $props();
</script>

<span aria-label={label} {...restProps}>{value}</span>
