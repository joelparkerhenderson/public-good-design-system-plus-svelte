<script lang="ts">
    // Component: Meter
    //
    // A headless meter using native <meter> element.
    //
    // Props:
    //   value   — current value
    //   min     — minimum (default 0)
    //   max     — maximum (default 100)
    //   low     — low threshold
    //   high    — high threshold
    //   optimum — optimal value
    //   label   — accessible name
    //
    // Usage:
    //   <Meter label="Disk space" value={45} max={100} />

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

<meter {value} {min} {max} {low} {high} {optimum} aria-label={label} {...restProps}>{value}</meter>
