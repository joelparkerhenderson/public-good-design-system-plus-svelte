<script lang="ts">
    // Component: UnitedKingdomNationalHealthServiceNumberView
    //
    // A headless view component for displaying a United Kingdom National Health
    // Service (NHS) number. Renders as an inline <span> element with an accessible
    // label for screen readers.
    //
    // Usage:
    //   <UnitedKingdomNationalHealthServiceNumberView label="NHS Number" value="123 456 7890" />
    //   <UnitedKingdomNationalHealthServiceNumberView label="Patient NHS Number" value={nhsNumber} />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: The NHS number string to display (default: "")
    //   - ...restProps: Any additional HTML attributes spread onto the span
    //
    // Accessibility:
    //   - aria-label provides the accessible name for screen readers
    //   - The value is rendered as text content inside the span
    //   - Screen readers will announce the label followed by the number value
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - No hardcoded strings in the component

    let {
        label,
        value = "",
        ...restProps
    }: {
        /** Accessible label for screen readers */
        label: string;
        /** The NHS number to display */
        value?: string;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- NHS Number View: displays an NHS number with accessible labeling -->
<span aria-label={label} {...restProps}>{value}</span>
