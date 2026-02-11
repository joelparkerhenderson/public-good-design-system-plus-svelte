<script lang="ts">
    // Component: UnitedStatesSocialSecurityNumberView
    //
    // A headless view component for displaying a United States Social Security
    // Number (SSN). Renders as an inline <span> element with an accessible
    // label for screen readers.
    //
    // Usage:
    //   <UnitedStatesSocialSecurityNumberView label="SSN" value="123-45-6789" />
    //   <UnitedStatesSocialSecurityNumberView label="Social Security Number" value={ssn} />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: The SSN string to display (default: "")
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
        /** The SSN to display */
        value?: string;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- SSN View: displays a Social Security Number with accessible labeling -->
<span aria-label={label} {...restProps}>{value}</span>
