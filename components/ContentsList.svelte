<script lang="ts">
    // ContentsList component
    //
    // A headless table-of-contents navigation rendering a semantic <nav> landmark
    // with an ordered list of section links. It helps users quickly scan and jump to
    // different parts of a long page. Commonly used at the top of documentation pages,
    // articles, or forms with multiple sections. Use with ContentsListItem children.
    //
    // Props:
    //   label — string, required. Accessible name for the navigation landmark (e.g., "Contents").
    //   children — Snippet, required. List items, typically ContentsListItem components or <li> elements.
    //   ...restProps — additional HTML attributes spread onto the <nav>.
    //
    // Syntax:
    //   <ContentsList label="Contents">
    //     <li><a href="#section">Section</a></li>
    //   </ContentsList>
    //
    // Examples:
    //   <!-- Table of contents with multiple sections -->
    //   <ContentsList label="On this page">
    //     <li><a href="#introduction">Introduction</a></li>
    //     <li><a href="#usage">Usage</a></li>
    //     <li><a href="#examples">Examples</a></li>
    //   </ContentsList>
    //
    // Keyboard:
    //   - None — passive navigation container; keyboard navigation handled by anchor links within items
    //
    // Accessibility:
    //   - aria-label on <nav> provides an accessible name, distinguishing it from other nav regions
    //   - <ol> conveys the sequential nature of page sections
    //
    // Internationalization:
    //   - The label prop provides the accessible name; no hardcoded strings
    //   - All link text is provided by consumers through children
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Compound component: use with ContentsListItem for individual entries
    //
    // References:
    //   - WAI-ARIA Navigation Landmark: https://www.w3.org/WAI/ARIA/apd/practices/landmark-regions/
    //   - MDN nav element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: { label: string; children: Snippet; [key: string]: unknown } = $props();
</script>

<nav aria-label={label} {...restProps}>
    <ol>{@render children()}</ol>
</nav>
