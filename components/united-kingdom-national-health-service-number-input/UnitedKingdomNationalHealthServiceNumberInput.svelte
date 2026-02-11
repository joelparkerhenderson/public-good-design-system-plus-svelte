<script lang="ts">
    // Component: UnitedKingdomNationalHealthServiceNumberInput
    //
    // A headless input component for entering a United Kingdom National Health
    // Service (NHS) number. The NHS number is a 10-digit identifier assigned to
    // every patient registered with the NHS. The standard display format is
    // "XXX XXX XXXX" (three groups separated by spaces).
    //
    // Usage:
    //   <UnitedKingdomNationalHealthServiceNumberInput label="NHS Number" />
    //   <UnitedKingdomNationalHealthServiceNumberInput label="NHS Number" bind:value={nhsNumber} />
    //   <UnitedKingdomNationalHealthServiceNumberInput label="NHS Number" required />
    //   <UnitedKingdomNationalHealthServiceNumberInput label="NHS Number" disabled />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: Bindable string value of the input (default: "")
    //   - required: Whether the input is required (default: false)
    //   - disabled: Whether the input is disabled (default: false)
    //   - ...restProps: Any additional HTML attributes spread onto the input
    //
    // Pattern:
    //   The pattern attribute enforces the format "XXX XXX XXXX" where X is a digit.
    //   The inputmode="numeric" attribute hints mobile devices to show a numeric keyboard.
    //   autocomplete="off" prevents browsers from suggesting previously entered values,
    //   which is appropriate for sensitive health identifiers.
    //
    // Accessibility:
    //   - aria-label provides the accessible name for screen readers
    //   - inputmode="numeric" ensures appropriate keyboard on mobile devices
    //   - required and disabled states are conveyed to assistive technology
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - No hardcoded strings in the component

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label for screen readers */
        label: string;
        /** The current value of the input, bindable */
        value?: string;
        /** Whether the input is required for form submission */
        required?: boolean;
        /** Whether the input is disabled */
        disabled?: boolean;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();

    // Pattern for NHS number format: XXX XXX XXXX (3 digits, space, 3 digits, space, 4 digits)
    // Defined as a constant to avoid Svelte template expression parsing of curly braces
    const nhsPattern = "[0-9]{3} [0-9]{3} [0-9]{4}";
</script>

<!-- NHS Number Input: a specialized numeric text input for UK NHS numbers -->
<input
    type="text"
    aria-label={label}
    inputmode="numeric"
    pattern={nhsPattern}
    autocomplete="off"
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
