<script lang="ts">
    // Component: ContentsListItem
    //
    // A headless list item component for use within a contents list or table of
    // contents. Renders a semantic <li> element that wraps consumer-provided
    // content through the children snippet.
    //
    // Usage:
    //   <ContentsListItem><a href="#section-1">Introduction</a></ContentsListItem>
    //   <ContentsListItem><a href="#section-2">Methods</a></ContentsListItem>
    //   <ContentsListItem>
    //     <a href="#section-3">Results</a>
    //     <ul>
    //       <ContentsListItem><a href="#section-3a">Data</a></ContentsListItem>
    //       <ContentsListItem><a href="#section-3b">Analysis</a></ContentsListItem>
    //     </ul>
    //   </ContentsListItem>
    //
    // Props:
    //   - children: Snippet for the list item content (typically a link or nested list)
    //   - ...restProps: Any additional HTML attributes spread onto the li
    //
    // Accessibility:
    //   - Semantic <li> element provides proper list item semantics
    //   - Should be used within a <ul> or <ol> parent for valid HTML structure
    //   - Consumers should provide meaningful link text for links within items
    //   - Supports aria-current="page" or aria-current="true" on the li for
    //     indicating the current page in a navigation context
    //
    // Internationalization:
    //   - All content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        /** List item content (typically a link or text) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- ContentsListItem: a list item for use in a contents or navigation list -->
<li {...restProps}>
    {@render children()}
</li>
