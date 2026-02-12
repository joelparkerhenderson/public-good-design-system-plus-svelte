<script lang="ts">
    // DatePicker component
    //
    // A headless date picker providing a lightweight wrapper around the native
    // <input type="date"> element with accessible labelling via aria-label. Unlike
    // DateField, it renders only the bare input without a visible label, description,
    // or error handling. Supports min and max date constraints to restrict selectable
    // ranges. Useful in booking systems, scheduling tools, and compact UI contexts.
    //
    // Props:
    //   label — string, required. Accessible name applied via aria-label.
    //   value — string, default "". Current date value in YYYY-MM-DD format; bindable via bind:value.
    //   required — boolean, default false. Whether the input is required.
    //   disabled — boolean, default false. Whether the input is disabled.
    //   min — string, default undefined. Minimum selectable date in YYYY-MM-DD format.
    //   max — string, default undefined. Maximum selectable date in YYYY-MM-DD format.
    //   ...restProps — additional HTML attributes spread onto the <input>.
    //
    // Syntax:
    //   <DatePicker label="Start date" bind:value />
    //
    // Examples:
    //   <!-- Date picker with constraints and required state -->
    //   <DatePicker label="Departure" bind:value min="2025-01-01" max="2025-12-31" required />
    //
    // Keyboard:
    //   - None beyond native <input type="date"> keyboard behavior, which varies by browser
    //
    // Accessibility:
    //   - aria-label provides an accessible name for the date input
    //
    // Internationalization:
    //   - The label prop provides the accessible name; no hardcoded strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Renders a bare <input type="date"> with no wrapper element
    //   - Uses $bindable() for two-way binding on the value prop
    //
    // References:
    //   - MDN input type="date": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        min,
        max,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current date value. Bindable. */
        value?: string;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        /** Minimum date. */
        min?: string;
        /** Maximum date. */
        max?: string;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="date"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {min}
    {max}
    {...restProps}
/>
