<script lang="ts">
    // Component: MeasurementUnitView
    //
    // A headless display component that shows a measurement unit
    // in a <span> element. A measurement unit is a standard quantity
    // used to express a measurement, such as "kg", "lb", "cm", or "inch".
    //
    // Usage:
    //   <MeasurementUnitView value="kg" />
    //   <MeasurementUnitView value="lb" label="Pounds" />
    //
    // Props:
    //   - value: The measurement unit to display (required)
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
        /** The measurement unit to display */
        value: string;
        /** Optional accessible name */
        label?: string;
        [key: string]: unknown;
    } = $props();
</script>

<span aria-label={label} {...restProps}>{value}</span>
