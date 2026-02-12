<script lang="ts">
    // SummaryListItem component
    //
    // A single key-value row within a SummaryList (<dl>). Renders a <div>
    // wrapper containing a <dt> (term) and <dd> (description) pair. The HTML
    // spec permits <div> as a direct child of <dl> for grouping dt/dd pairs.
    //
    // Props:
    //   term — the key/label text rendered in the <dt> element
    //   children — snippet for the value/description content in <dd>
    //
    // Usage:
    //   <SummaryList label="Order summary">
    //     <SummaryListItem term="Product">Widget</SummaryListItem>
    //     <SummaryListItem term="Quantity">3</SummaryListItem>
    //     <SummaryListItem term="Total">$29.97</SummaryListItem>
    //   </SummaryList>
    //
    // Accessibility:
    //   - Semantic <dt> and <dd> elements provide description list semantics
    //   - Screen readers announce term-description pairs naturally
    //   - The <div> wrapper is transparent to assistive technology
    //
    // Internationalization:
    //   - The term prop externalizes the key/label string
    //   - The children snippet allows localized description content

    import type { Snippet } from "svelte";

    let {
        term,
        children,
        ...restProps
    }: {
        /** The key/label text for this summary row. */
        term: string;
        /** The value/description content for this summary row. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- SummaryListItem: a term-description pair within a description list -->
<div {...restProps}>
    <dt>{term}</dt>
    <dd>{@render children()}</dd>
</div>
