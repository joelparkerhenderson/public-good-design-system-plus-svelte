<script lang="ts">
    // TimePicker component
    //
    // A headless time picker that wraps a native <input type="time"> element,
    // allowing users to select a specific time of day. Often used alongside date
    // pickers in forms, scheduling tools, or booking systems. The native input
    // handles 12-hour/24-hour format based on the browser locale. Supports
    // two-way data binding and standard form validation attributes.
    //
    // Props:
    //   label — string, required. Accessible name via aria-label.
    //   value — string, default "". Current time value in HH:MM format; bindable with bind:value.
    //   required — boolean, default false. Whether a value is required for form submission.
    //   disabled — boolean, default false. Whether the input is disabled.
    //   ...restProps — additional HTML attributes spread onto the <input>.
    //
    // Syntax:
    //   <TimePicker label="Appointment time" bind:value />
    //
    // Examples:
    //   <!-- Required departure time picker -->
    //   <TimePicker label="Departure time" bind:value required />
    //
    // Keyboard:
    //   - Tab: move focus to/from the time input
    //   - ArrowUp/ArrowDown: increment/decrement the focused time segment
    //   - ArrowLeft/ArrowRight: move between time segments
    //
    // Accessibility:
    //   - aria-label={label} provides an accessible name for the time input
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - Time format is locale-dependent via native browser behavior
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Uses $bindable() for two-way data binding on value
    //
    // References:
    //   - MDN input type="time": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time
    
    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        label: string;
        value?: string;
        required?: boolean;
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<!-- TimePicker component: a time-type input for selecting a time of day -->
<input
    type="time"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
