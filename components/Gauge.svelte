<script lang="ts">
    // Gauge component
    //
    // A gauge/meter display that visually represents a scalar value within a defined range
    // using the native HTML <meter> element. Commonly used in dashboards and monitoring
    // tools to display metrics like CPU usage, disk space, battery level, or temperature.
    // Supports low, high, and optimum thresholds for semantic range indication.
    //
    // Props:
    //   value — number, required. Current measurement value.
    //   min — number, default 0. Minimum value of the range.
    //   max — number, default 100. Maximum value of the range.
    //   low — number, default undefined. Upper boundary of the low range.
    //   high — number, default undefined. Lower boundary of the high range.
    //   optimum — number, default undefined. Optimal value within the range.
    //   label — string, required. Accessible name applied via aria-label.
    //   ...restProps — additional HTML attributes spread onto the meter element.
    //
    // Syntax:
    //   <Gauge label="CPU usage" value={75} />
    //
    // Examples:
    //   <!-- Basic gauge -->
    //   <Gauge label="CPU usage" value={75} />
    //
    //   <!-- Gauge with thresholds -->
    //   <Gauge label="Disk space" value={40} min={0} max={100} low={25} high={75} optimum={50} />
    //
    //   <!-- Battery level gauge -->
    //   <Gauge label="Battery level" value={15} low={20} high={80} optimum={100} />
    //
    // Keyboard:
    //   - None — this is a passive display element that does not accept user input
    //
    // Accessibility:
    //   - Uses the native <meter> element which provides semantic meaning for scalar measurements
    //   - aria-label provides an accessible name describing what the gauge measures
    //   - The text content of the meter element serves as a fallback for unsupported browsers
    //
    // Internationalization:
    //   - The label prop allows localized accessible names; no hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Uses the native <meter> element, not a custom implementation
    //   - The low, high, and optimum attributes enable browser semantic range indication
    //
    // References:
    //   - MDN meter element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
    //   - WAI-ARIA meter role: https://www.w3.org/WAI/ARIA/apd/patterns/meter/

    let {
        value,
        min = 0,
        max = 100,
        low = undefined,
        high = undefined,
        optimum = undefined,
        label,
        ...restProps
    }: {
        value: number;
        min?: number;
        max?: number;
        low?: number;
        high?: number;
        optimum?: number;
        label: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- Gauge component -->
<meter
    {value}
    {min}
    {max}
    {low}
    {high}
    {optimum}
    aria-label={label}
    {...restProps}>{value}</meter
>
