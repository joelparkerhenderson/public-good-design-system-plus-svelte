<script lang="ts">
    // MeasurementUnitInput component
    //
    // A headless text input for entering a measurement unit, such as "kg", "lb",
    // "cm", "inch", "F", or "C". A measurement unit is a standard quantity used
    // to express a physical measurement. The component renders an <input type="text">
    // with aria-label for accessible naming and a bindable value for reactive form
    // integration.
    //
    // Props:
    //   label — string, required. Accessible name for the input via aria-label.
    //   value — string, default "". Bindable measurement unit value via $bindable().
    //   required — boolean, default false. Whether the field is required.
    //   disabled — boolean, default false. Whether the field is disabled.
    //   ...restProps — additional HTML attributes spread onto the <input>.
    //
    // Syntax:
    //   <MeasurementUnitInput label="Unit" bind:value />
    //
    // Examples:
    //   <!-- Basic unit input -->
    //   <MeasurementUnitInput label="Unit" bind:value />
    //
    //   <!-- Required unit input -->
    //   <MeasurementUnitInput label="Unit of measure" bind:value required />
    //
    // Keyboard:
    //   - Native <input type="text"> keyboard behavior (typing, selection, clipboard).
    //
    // Accessibility:
    //   - aria-label provides the accessible name from the label prop
    //   - Supports required and disabled HTML states
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Part of the Input/View pattern; pairs with MeasurementUnitView
    //
    // References:
    //   - HTML input element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible name for the measurement unit input */
        label: string;
        /** Bindable measurement unit value */
        value?: string;
        /** Whether the input is required */
        required?: boolean;
        /** Whether the input is disabled */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<!-- MeasurementUnitInput component: a text input for entering a measurement unit abbreviation -->
<input
    type="text"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
