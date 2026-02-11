<script lang="ts">
    // Component: RedOrangeYellowGreenBlueIndicatorStatus
    //
    // A headless ROYGB (Red/Orange/Yellow/Green/Blue) indicator status display
    // component that renders a span element showing a five-level status value.
    // ROYGB extends the traditional RAG model with orange and blue levels for
    // more granular status reporting.
    //
    // Usage:
    //   <RedOrangeYellowGreenBlueIndicatorStatus label="Risk level" value="yellow" />
    //   <RedOrangeYellowGreenBlueIndicatorStatus label="Alert level" value={level} />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: The status value to display (default: "")
    //   - ...restProps: Any additional HTML attributes spread onto the span
    //
    // Status values:
    //   - "red": Critical problem
    //   - "orange": Hazard or significant risk
    //   - "yellow": Caution or minor issues
    //   - "green": Normal, on track
    //   - "blue": Paused or informational
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

<!-- RedOrangeYellowGreenBlueIndicatorStatus: displays a ROYGB status value as text -->
<span aria-label={label} {...restProps}>{value}</span>
