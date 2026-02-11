<script lang="ts">
    // Component: AccordionArea
    //
    // A headless accordion container. Consumer provides AccordionAreaItem children.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for accordion items
    //
    // Usage:
    //   <AccordionArea label="FAQ">
    //     <AccordionAreaItem summary="Question 1">Answer 1</AccordionAreaItem>
    //   </AccordionArea>

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

<div role="region" aria-label={label} {...restProps}>
    {@render children()}
</div>
