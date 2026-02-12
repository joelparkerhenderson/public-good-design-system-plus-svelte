<script lang="ts">
    // Table component
    //
    // A headless table component that renders a semantic <table> element with
    // an accessible label. The consumer provides all table content (thead, tbody,
    // tr, th, td, etc.) through the children snippet.
    //
    // Usage:
    //   <Table label="User accounts">
    //     <thead><tr><th>Name</th><th>Email</th></tr></thead>
    //     <tbody><tr><td>Alice</td><td>alice@example.com</td></tr></tbody>
    //   </Table>
    //
    // Props:
    //   - label: Accessible label for the table (required)
    //   - children: Snippet for table content (thead, tbody, tfoot, etc.)
    //   - ...restProps: Any additional HTML attributes spread onto the table
    //
    // Accessibility:
    //   - aria-label provides the accessible name for screen readers
    //   - Semantic <table> element is used for proper table semantics
    //   - Consumers should use <th> with scope attributes for row/column headers
    //   - Consumers should use <caption> if a visible table title is desired
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - All content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the table */
        label: string;
        /** Table content (thead, tbody, tfoot, caption, colgroup, etc.) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- Table: a semantic table element with accessible labeling -->
<table
    aria-label={label}
    {...restProps}
>
    {@render children()}
</table>
