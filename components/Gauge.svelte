<script lang="ts">
    // Component: Gauge
    //
    // A headless gauge/meter display using native <meter> element.
    //
    // Props:
    //   value — current value
    //   min   — minimum value (default 0)
    //   max   — maximum value (default 100)
    //   low   — low threshold
    //   high  — high threshold
    //   optimum — optimal value
    //   label — accessible name
    //
    // Usage:
    //   <Gauge label="CPU usage" value={75} />

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

<meter
    {value}
    {min}
    {max}
    {low}
    {high}
    {optimum}
    aria-label={label}
    {...restProps}
>{value}</meter>
