<script lang="ts">
    // Component: SummaryList
    //
    // A headless summary list component that renders a <dl> (description list)
    // element for presenting key-value pairs or summary information. The
    // children snippet provides the content, typically <dt> and <dd> elements.
    //
    // Usage:
    //   <SummaryList label="Order summary">
    //     <dt>Product</dt><dd>Widget</dd>
    //     <dt>Quantity</dt><dd>3</dd>
    //     <dt>Total</dt><dd>$29.97</dd>
    //   </SummaryList>
    //
    // Props:
    //   - label: Accessible label for the description list (required)
    //   - children: Snippet for the list content (dt/dd pairs)
    //   - ...restProps: Any additional HTML attributes spread onto the dl element
    //
    // Accessibility:
    //   - Semantic: <dl> element provides description list semantics
    //   - ARIA: aria-label on the dl for screen reader context
    //   - Screen readers announce the list and its term-description pairs
    //   - WCAG 2.2 AAA: Properly labeled with semantic list element
    //
    // Internationalization:
    //   - The label prop externalizes the accessible label string
    //   - The children snippet allows localized content

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the description list */
        label: string;
        /** The list content, typically dt/dd element pairs */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- SummaryList: a description list for key-value pair presentation -->
<dl aria-label={label} {...restProps}>
    {@render children()}
</dl>
