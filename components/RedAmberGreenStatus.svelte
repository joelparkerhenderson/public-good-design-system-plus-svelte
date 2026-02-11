<script lang="ts">
    // Component: RedAmberGreenStatus
    //
    // A headless Red/Amber/Green (RAG) status display component that renders
    // a span element showing a traffic-light status value. This is an
    // alternative naming for the RAG status view pattern, using the full
    // color names rather than the acronym.
    //
    // Usage:
    //   <RedAmberGreenStatus label="Build status" value="green" />
    //   <RedAmberGreenStatus label="Deployment health" value={status} />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: The status value to display (default: "")
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
        /** The status value to display (e.g. "red", "amber", "green") */
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- RedAmberGreenStatus: displays a RAG status value as text -->
<span aria-label={label} {...restProps}>{value}</span>
