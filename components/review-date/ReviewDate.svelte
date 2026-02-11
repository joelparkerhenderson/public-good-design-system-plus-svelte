<script lang="ts">
    // Component: ReviewDate
    //
    // A headless review date component that renders a <time> element with a
    // machine-readable datetime attribute and human-readable display text via
    // a children snippet. Used to display dates for reviews, audits, or
    // scheduled check-ins.
    //
    // Usage:
    //   <ReviewDate label="Next review" datetime="2025-06-15">June 15, 2025</ReviewDate>
    //   <ReviewDate label="Last audit" datetime={isoDate}>{formattedDate}</ReviewDate>
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - datetime: Machine-readable date/time string in ISO 8601 format (required)
    //   - children: Snippet for the human-readable display text
    //   - ...restProps: Any additional HTML attributes spread onto the time element
    //
    // Accessibility:
    //   - Semantic: <time> element provides machine-readable date context
    //   - ARIA: aria-label for screen reader context beyond the visible text
    //   - The datetime attribute enables browsers and assistive technology
    //     to parse and format the date appropriately
    //   - WCAG 2.2 AAA: Properly labeled with semantic time element
    //
    // Internationalization:
    //   - The label prop externalizes the accessible label string
    //   - The children snippet allows localized date formatting
    //   - The datetime attribute uses ISO 8601, which is locale-independent

    import type { Snippet } from "svelte";

    let {
        label,
        datetime,
        children,
        ...restProps
    }: {
        /** Accessible label for screen readers */
        label: string;
        /** Machine-readable date/time in ISO 8601 format */
        datetime: string;
        /** Human-readable display text for the date */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- ReviewDate: a time element with machine-readable datetime and human-readable content -->
<time aria-label={label} {datetime} {...restProps}>
    {@render children()}
</time>
