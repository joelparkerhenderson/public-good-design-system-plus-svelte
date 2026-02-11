<script lang="ts">
    // Component: DateRange
    //
    // A headless date range with start and end date inputs.
    //
    // Props:
    //   label — accessible group label via aria-label
    //   startLabel — label for start date input
    //   endLabel — label for end date input
    //   start — bindable start date
    //   end — bindable end date
    //
    // Usage:
    //   <DateRange label="Trip dates" startLabel="Departure" endLabel="Return" bind:start bind:end />

    let {
        label,
        startLabel,
        endLabel,
        start = $bindable(""),
        end = $bindable(""),
        ...restProps
    }: {
        /** Accessible group label. */
        label: string;
        /** Start date label. */
        startLabel: string;
        /** End date label. */
        endLabel: string;
        /** Start date value. Bindable. */
        start?: string;
        /** End date value. Bindable. */
        end?: string;
        [key: string]: unknown;
    } = $props();
</script>

<fieldset aria-label={label} {...restProps}>
    <input type="date" aria-label={startLabel} bind:value={start} />
    <input type="date" aria-label={endLabel} bind:value={end} />
</fieldset>
