<script lang="ts">
    // TableOfContents component
    //
    // A headless table of contents that renders a semantic <nav> element with an
    // accessible label, creating a navigation landmark for page section links.
    // Used to provide a navigational overview of page sections or document
    // structure in articles, documentation, reports, or long-form content. The
    // consumer provides the content structure (typically nested lists of links)
    // through the children snippet.
    //
    // Props:
    //   label — string, required. Accessible label for the navigation landmark via aria-label.
    //   children — Snippet, required. Table of contents content (typically a list of links).
    //   ...restProps — additional HTML attributes spread onto the <nav>.
    //
    // Syntax:
    //   <TableOfContents label="Table of contents">...</TableOfContents>
    //
    // Examples:
    //   <!-- Simple flat list of section links -->
    //   <TableOfContents label="Table of contents">
    //     <ul>
    //       <li><a href="#intro">Introduction</a></li>
    //       <li><a href="#methods">Methods</a></li>
    //       <li><a href="#results">Results</a></li>
    //     </ul>
    //   </TableOfContents>
    //
    // Keyboard:
    //   - None directly -- keyboard interaction handled by contained links
    //   - Tab moves focus between links within the TOC
    //
    // Accessibility:
    //   - Semantic <nav> element creates a navigation landmark for screen readers
    //   - aria-label distinguishes this nav from other navigation landmarks on the page
    //   - Screen readers can jump to this landmark via navigation shortcuts
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - All content is provided through the children snippet
    //   - No hardcoded strings in the component
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Consumers should use proper heading hierarchy and link text
    //
    // References:
    //   - WAI-ARIA Navigation Landmark: https://www.w3.org/TR/wai-aria-1.2/#navigation

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the navigation landmark */
        label: string;
        /** Table of contents content (typically a list of links) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- TableOfContents: a navigation landmark for page section links -->
<nav
    aria-label={label}
    {...restProps}
>
    {@render children()}
</nav>
