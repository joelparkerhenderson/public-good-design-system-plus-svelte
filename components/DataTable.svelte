<script lang="ts">
    // DataTable component
    //
    // A headless data table wrapper providing a semantic <table> element with optional
    // visible caption or aria-label for accessibility. Consumers provide their own
    // <thead>, <tbody>, <tr>, <th>, and <td> elements as children. When a caption prop
    // is provided, aria-label is omitted to avoid redundant accessible names. Commonly
    // used for displaying structured data in rows and columns.
    //
    // Props:
    //   caption — string, default undefined. Visible caption text displayed above the table.
    //   label — string, default undefined. Accessible label used when caption is not provided.
    //   children — Snippet, required. Table content including thead, tbody, tr, th, td elements.
    //   ...restProps — additional HTML attributes spread onto the <table>.
    //
    // Syntax:
    //   <DataTable caption="User accounts">
    //     <thead><tr><th scope="col">Name</th></tr></thead>
    //     <tbody><tr><td>Alice</td></tr></tbody>
    //   </DataTable>
    //
    // Examples:
    //   <!-- Table with aria-label instead of visible caption -->
    //   <DataTable label="Sales data">
    //     <thead><tr><th scope="col">Month</th><th scope="col">Revenue</th></tr></thead>
    //     <tbody><tr><td>January</td><td>$10,000</td></tr></tbody>
    //   </DataTable>
    //
    // Keyboard:
    //   - None — passive container; navigation follows standard browser table behavior
    //
    // Accessibility:
    //   - <caption> provides a visible accessible name when the caption prop is set
    //   - aria-label provides an accessible name when no visible caption is present
    //   - Consumer should use scope="col" on <th> and scope="row" for row headers
    //
    // Internationalization:
    //   - The caption and label props provide all text; no hardcoded strings
    //   - All cell content is provided by consumers through children
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - When caption is provided, aria-label is omitted to avoid duplicate accessible names
    //   - Consumer is responsible for thead, tbody, scope attributes, and all row/cell structure
    //
    // References:
    //   - WAI-ARIA Table Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/table/
    //   - WAI Tutorial on Tables: https://www.w3.org/WAI/tutorials/tables/

    import type { Snippet } from "svelte";

    let {
        caption = undefined,
        label = undefined,
        children,
        ...restProps
    }: {
        /** Visible caption for the table. */
        caption?: string;
        /** Accessible label when caption is not used. */
        label?: string;
        /** Table content (thead, tbody, etc.). */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<table
    aria-label={caption ? undefined : label}
    {...restProps}
>
    {#if caption}
        <caption>{caption}</caption>
    {/if}
    {@render children()}
</table>
