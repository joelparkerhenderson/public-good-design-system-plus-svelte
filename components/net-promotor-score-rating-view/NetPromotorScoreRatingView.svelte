<script lang="ts">
    // Component: NetPromotorScoreRatingView
    //
    // A headless Net Promoter Score (NPS) rating view component that displays
    // an NPS score value as text within a span element. This is a read-only
    // display component, not an input.
    //
    // Usage:
    //   <NetPromotorScoreRatingView label="NPS Score" value="8" />
    //   <NetPromotorScoreRatingView label="Customer rating" value={score} />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: The NPS score to display (default: "")
    //   - ...restProps: Any additional HTML attributes spread onto the span
    //
    // Accessibility:
    //   - ARIA: aria-label on the span for screen reader context
    //   - Screen readers announce the label and displayed value
    //   - WCAG 2.2 AAA: Properly labeled for assistive technology
    //
    // Internationalization:
    //   - The label prop externalizes the accessible label string
    //   - The value is displayed as-is, allowing localized formatting

    let {
        label,
        value = "",
        ...restProps
    }: {
        /** Accessible label for screen readers */
        label: string;
        /** The NPS score value to display */
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- NetPromotorScoreRatingView: displays an NPS score as text -->
<span aria-label={label} {...restProps}>{value}</span>
