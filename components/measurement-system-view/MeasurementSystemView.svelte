<script lang="ts">
    // Component: MeasurementSystemView
    //
    // A headless display component that shows a measurement system name
    // in a <span> element. A measurement system is a collection of units
    // and rules for measuring, such as "metric", "imperial", or "SI".
    //
    // Usage:
    //   <MeasurementSystemView value="metric" />
    //   <MeasurementSystemView value="SI" label="International System" />
    //
    // Props:
    //   - value: The measurement system name to display (required)
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
        /** The measurement system name to display */
        value: string;
        /** Optional accessible name */
        label?: string;
        [key: string]: unknown;
    } = $props();
</script>

<span aria-label={label} {...restProps}>{value}</span>
