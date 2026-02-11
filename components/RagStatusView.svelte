<script lang="ts">
    // Component: RagStatusView
    //
    // A headless RAG (Red/Amber/Green) status view component that displays
    // a RAG status value as read-only text. Used to present traffic-light
    // status information in dashboards, reports, and detail views.
    //
    // Usage:
    //   <RagStatusView label="Project status" value="green" />
    //   <RagStatusView label="Health check" value={status} />
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - value: The RAG status value to display (default: "")
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
        /** The RAG status value to display (e.g. "red", "amber", "green") */
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- RagStatusView: displays a RAG status value as text -->
<span aria-label={label} {...restProps}>{value}</span>
