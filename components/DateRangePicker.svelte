<script lang="ts">
    // DateRangePicker component
    //
    // A headless date range picker combining paired date inputs with picker semantics,
    // enabling users to select a start date and end date for defining a time span. It
    // renders a <fieldset> containing two native <input type="date"> elements, each
    // with its own accessible label. Functionally similar to DateRange but conveys
    // picker-oriented semantics. Commonly used in hotel booking, travel search, event
    // scheduling, and analytics dashboards.
    //
    // Props:
    //   label — string, required. Accessible group label applied to the fieldset via aria-label.
    //   startLabel — string, required. Accessible label for the start date input.
    //   endLabel — string, required. Accessible label for the end date input.
    //   start — string, default "". Start date value in YYYY-MM-DD format; bindable.
    //   end — string, default "". End date value in YYYY-MM-DD format; bindable.
    //   ...restProps — additional HTML attributes spread onto the <fieldset>.
    //
    // Syntax:
    //   <DateRangePicker label="Stay" startLabel="Check-in" endLabel="Check-out" bind:start bind:end />
    //
    // Examples:
    //   <!-- Hotel booking date range picker -->
    //   <DateRangePicker
    //     label="Reservation dates"
    //     startLabel="Check-in"
    //     endLabel="Check-out"
    //     bind:start
    //     bind:end
    //   />
    //
    // Keyboard:
    //   - Tab: Move focus between the start and end date inputs
    //   - Arrow keys: Navigate within date picker fields (native browser behavior)
    //
    // Accessibility:
    //   - aria-label on <fieldset> provides an accessible group name for the date range picker
    //   - aria-label on each input provides individual accessible names
    //
    // Internationalization:
    //   - The label, startLabel, and endLabel props provide all text; no hardcoded strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Both start and end use $bindable() for two-way binding
    //   - Uses <fieldset> to semantically group the paired date inputs
    //
    // References:
    //   - MDN input type="date": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
    //   - MDN fieldset element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset

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

<fieldset
    aria-label={label}
    {...restProps}
>
    <input
        type="date"
        aria-label={startLabel}
        bind:value={start}
    />
    <input
        type="date"
        aria-label={endLabel}
        bind:value={end}
    />
</fieldset>
