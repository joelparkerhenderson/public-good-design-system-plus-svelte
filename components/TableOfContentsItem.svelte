<script lang="ts">
    // TableOfContentsItem component
    //
    // A single item within a TableOfContents navigation. Renders a semantic <li>
    // containing an <a> link to a page section. Supports indicating the currently
    // active/visible section via aria-current="location", which assistive technology
    // can announce to the user. Designed to be placed inside a <ul> or <ol> within
    // a TableOfContents <nav>.
    //
    // Props:
    //   href — string, required. Link target (e.g. "#section-1").
    //   current — boolean, default false. Whether this is the currently active section.
    //   children — Snippet, required. Link text content.
    //   ...restProps — additional HTML attributes spread onto the <li>.
    //
    // Syntax:
    //   <TableOfContentsItem href="#intro">Introduction</TableOfContentsItem>
    //
    // Examples:
    //   <!-- TOC with active section indicator -->
    //   <TableOfContents label="Table of contents">
    //     <ul>
    //       <TableOfContentsItem href="#intro" current>Introduction</TableOfContentsItem>
    //       <TableOfContentsItem href="#methods">Methods</TableOfContentsItem>
    //       <TableOfContentsItem href="#results">Results</TableOfContentsItem>
    //     </ul>
    //   </TableOfContents>
    //
    // Keyboard:
    //   - Tab: focus the link (browser default)
    //   - Enter: follow the link (browser default)
    //
    // Accessibility:
    //   - Semantic <li> element provides list item semantics within the parent list
    //   - Semantic <a> element provides link role and keyboard activation
    //   - aria-current="location" indicates the currently active section to assistive technology
    //
    // Internationalization:
    //   - All content is provided through the children snippet
    //   - No hardcoded strings in the component
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Must be placed inside a <ul> or <ol> within a TableOfContents <nav>
    //
    // References:
    //   - WAI-ARIA aria-current: https://www.w3.org/TR/wai-aria-1.2/#aria-current
    //   - WAI-ARIA link role: https://www.w3.org/TR/wai-aria-1.2/#link

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
