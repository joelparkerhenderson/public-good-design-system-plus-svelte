<script lang="ts">
    // RedOrangeYellowGreenBlueStatusView component
    //
    // A headless ROYGB (Red/Orange/Yellow/Green/Blue) status view component
    // that displays a five-level color-coded status value as read-only text.
    // Used to present ROYGB status information in dashboards and reports.
    //
    // Usage:
    //   <RedOrangeYellowGreenBlueStatusView label="Risk level" value="yellow" />
    //   <RedOrangeYellowGreenBlueStatusView label="Alert status" value={level} />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: The ROYGB status value to display (default: "")
    //   - ...restProps: Any additional HTML attributes spread onto the span
    //
    // Accessibility:
    //   - ARIA: aria-label on the span for screen reader context
    //   - Screen readers announce the label and displayed status value
    //   - WCAG 2.2 AAA: Properly labeled for assistive technology
    //
    // Internationalization:
    //   - The label prop externalizes the accessible label string
    //   - The value is displayed as-is, allowing localized status names

    let {
        label,
        value = "",
        ...restProps
    }: {
        /** Accessible label for screen readers */
        label: string;
        /** The ROYGB status value to display */
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- RedOrangeYellowGreenBlueStatusView: displays a ROYGB status value as text -->
<span
    aria-label={label}
    {...restProps}>{value}</span
>
