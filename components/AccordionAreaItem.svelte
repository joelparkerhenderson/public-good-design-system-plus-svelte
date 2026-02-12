<script lang="ts">
    // AccordionAreaItem component
    //
    // A single expandable section within an AccordionArea, using native HTML
    // <details>/<summary> elements for built-in disclosure behavior. Each item
    // has a clickable header (summary) that toggles the visibility of its content.
    //
    // Uses browser-native disclosure widget semantics — no custom JavaScript
    // needed for expand/collapse. The open prop is two-way bindable via
    // $bindable(), allowing parent components to programmatically control
    // and observe the expanded state.
    //
    // Props:
    //   summary  — string, required. Text for the summary/header line.
    //   open     — boolean, default false, bindable. Whether the item is expanded.
    //   children — Snippet, required. Detail content rendered when expanded.
    //   ...restProps — additional HTML attributes spread onto <details>.
    //
    // Syntax:
    //   <AccordionAreaItem summary="Header">Content</AccordionAreaItem>
    //
    // Examples:
    //   <!-- Basic usage -->
    //   <AccordionAreaItem summary="What is Svelte?">
    //     Svelte is a compiler-based UI framework.
    //   </AccordionAreaItem>
    //
    //   <!-- Pre-expanded with binding -->
    //   <AccordionAreaItem summary="Details" bind:open={isOpen}>
    //     This section starts expanded when isOpen is true.
    //   </AccordionAreaItem>
    //
    //   <!-- With custom attributes -->
    //   <AccordionAreaItem summary="Advanced" data-section="advanced">
    //     Advanced content here.
    //   </AccordionAreaItem>
    //
    // Keyboard:
    //   - Tab: Focus the summary element
    //   - Enter / Space: Toggle open/close (browser native behavior)
    //
    // Accessibility:
    //   - Native <details>/<summary> provides implicit disclosure widget semantics
    //   - Browser automatically manages expanded/collapsed state announcement
    //   - Screen readers announce "expanded" or "collapsed" on the summary
    //
    // Internationalization:
    //   - The summary prop is the only user-facing string
    //   - No hardcoded text; detail content comes through children snippet
    //
    // Claude rules:
    //   - Use inside an AccordionArea parent container
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Do not replace native <details>/<summary> with custom ARIA widgets
    //   - The open prop must use $bindable() for two-way binding
    //
    // References:
    //   - HTML details element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

    import type { Snippet } from "svelte";

    let {
        summary,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** Summary/header text. */
        summary: string;
        /** Whether expanded. Bindable. */
        open?: boolean;
        /** Detail content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- AccordionAreaItem component: a native details/summary disclosure widget for expandable content -->
<details
    bind:open
    {...restProps}
>
    <summary>{summary}</summary>
    {@render children()}
</details>
