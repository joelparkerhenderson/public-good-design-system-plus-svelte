<script lang="ts">
    // TableOfContentsItem component
    //
    // A single item within a TableOfContents navigation. Renders a semantic
    // <li> containing an <a> link to a page section. Supports indicating
    // the currently active section via aria-current="location".
    //
    // Props:
    //   href — link target (e.g. "#section-1")
    //   current — whether this is the currently active/visible section
    //   children — link text content
    //
    // Usage:
    //   <TableOfContents label="Table of contents">
    //     <ul>
    //       <TableOfContentsItem href="#intro" current>Introduction</TableOfContentsItem>
    //       <TableOfContentsItem href="#methods">Methods</TableOfContentsItem>
    //       <TableOfContentsItem href="#results">Results</TableOfContentsItem>
    //     </ul>
    //   </TableOfContents>
    //
    // Accessibility:
    //   - Semantic <li> element provides list item semantics
    //   - <a> element provides link semantics and keyboard navigation
    //   - aria-current="location" indicates the currently visible section
    //   - Should be placed inside a <ul> or <ol> within a TableOfContents <nav>
    //
    // Internationalization:
    //   - All content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        href,
        current = false,
        children,
        ...restProps
    }: {
        /** Link target (e.g. "#section-1"). */
        href: string;
        /** Whether this is the currently active section. */
        current?: boolean;
        /** Link text content. */
        children: Snippet;
        /** Additional HTML attributes spread onto the <li>. */
        [key: string]: unknown;
    } = $props();
</script>

<!-- TableOfContentsItem component: a linked list item in a table of contents -->
<li {...restProps}>
    <a
        {href}
        aria-current={current ? "location" : undefined}
    >
        {@render children()}
    </a>
</li>
