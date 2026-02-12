<script lang="ts">
    // AccordionArea component
    //
    // A headless accordion container that organizes content in collapsible
    // sections. Renders a <div> with role="region" and aria-label, serving
    // as the outer wrapper for AccordionAreaItem children. Commonly used
    // for FAQs, settings panels, filter groups, and mobile navigation menus.
    //
    // This is a compound component: use with AccordionAreaItem for full
    // functionality. AccordionArea provides the semantic container, while
    // each AccordionAreaItem provides the expandable <details>/<summary>.
    //
    // Props:
    //   label    — string, required. Accessible name via aria-label.
    //   children — Snippet, required. AccordionAreaItem elements.
    //   ...restProps — additional HTML attributes spread onto the <div>.
    //
    // Syntax:
    //   <AccordionArea label="FAQ">
    //     <AccordionAreaItem summary="Question">Answer</AccordionAreaItem>
    //   </AccordionArea>
    //
    // Examples:
    //   <!-- FAQ accordion -->
    //   <AccordionArea label="Frequently Asked Questions">
    //     <AccordionAreaItem summary="What is this?">A design system.</AccordionAreaItem>
    //     <AccordionAreaItem summary="How do I use it?">Import and compose.</AccordionAreaItem>
    //   </AccordionArea>
    //
    //   <!-- Settings with custom attributes -->
    //   <AccordionArea label="Settings" data-testid="settings-accordion">
    //     <AccordionAreaItem summary="Display">Display options here</AccordionAreaItem>
    //   </AccordionArea>
    //
    // Keyboard: None — this is a passive container. Keyboard interactions
    // are handled by AccordionAreaItem children (Enter/Space to toggle).
    //
    // Accessibility:
    //   - role="region" identifies the accordion as a landmark region
    //   - aria-label provides the accessible name for screen readers
    //   - Compound pattern: each child AccordionAreaItem manages its own
    //     disclosure semantics via native <details>/<summary>
    //
    // Internationalization:
    //   - The label prop is the only user-facing string
    //   - No hardcoded text; all content comes through props and children
    //
    // Claude rules:
    //   - This is a compound component — always use with AccordionAreaItem
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Do not add heading elements; the region label is sufficient
    //   - Do not manage open/close state here; that belongs in AccordionAreaItem
    //
    // References:
    //   - WAI-ARIA Accordion Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/accordion/

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Accordion item elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- AccordionArea component: a labeled region container for collapsible accordion items -->
<div
    role="region"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</div>
