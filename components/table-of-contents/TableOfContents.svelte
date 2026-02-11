<script lang="ts">
    // Component: TableOfContents
    //
    // A headless table of contents component that renders a semantic <nav>
    // element with an accessible label. Used to provide a navigational overview
    // of page sections or document structure. The consumer provides all content
    // (typically a list of links) through the children snippet.
    //
    // Usage:
    //   <TableOfContents label="Table of contents">
    //     <ul>
    //       <li><a href="#intro">Introduction</a></li>
    //       <li><a href="#methods">Methods</a></li>
    //       <li><a href="#results">Results</a></li>
    //     </ul>
    //   </TableOfContents>
    //
    // Props:
    //   - label: Accessible label for the navigation landmark (required)
    //   - children: Snippet for the table of contents content
    //   - ...restProps: Any additional HTML attributes spread onto the nav
    //
    // Accessibility:
    //   - Semantic <nav> element creates a navigation landmark for screen readers
    //   - aria-label distinguishes this nav from other navigation landmarks on the page
    //   - Screen readers announce the navigation landmark with its label
    //   - Consumers should use proper heading hierarchy and link text
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
        /** Accessible label for the navigation landmark */
        label: string;
        /** Table of contents content (typically a list of links) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- TableOfContents: a navigation landmark for page section links -->
<nav aria-label={label} {...restProps}>
    {@render children()}
</nav>
