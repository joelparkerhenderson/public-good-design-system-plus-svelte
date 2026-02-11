<script lang="ts">
    // Component: DateRangePicker
    //
    // A headless date range picker — alias for DateRange with picker semantics.
    //
    // Usage:
    //   <DateRangePicker label="Stay" startLabel="Check-in" endLabel="Check-out" bind:start bind:end />

    let {
        label,
        startLabel,
        endLabel,
        start = $bindable(""),
        end = $bindable(""),
        ...restProps
    }: {
        label: string;
        startLabel: string;
        endLabel: string;
        start?: string;
        end?: string;
        [key: string]: unknown;
    } = $props();
</script>

<fieldset aria-label={label} {...restProps}>
    <input type="date" aria-label={startLabel} bind:value={start} />
    <input type="date" aria-label={endLabel} bind:value={end} />
</fieldset>
