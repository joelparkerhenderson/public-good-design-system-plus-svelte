<script lang="ts">
    // Component: AccordionAreaItem
    //
    // A single accordion item using native <details>/<summary>.
    //
    // Props:
    //   summary — text for the summary/header
    //   open — bindable open state
    //   children — snippet for the detail content
    //
    // Usage:
    //   <AccordionAreaItem summary="Question">Answer</AccordionAreaItem>

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

<details bind:open {...restProps}>
    <summary>{summary}</summary>
    {@render children()}
</details>
