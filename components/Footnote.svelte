<script lang="ts">
    // Component: Footnote
    //
    // A headless footnote reference and content. Links a superscript
    // marker to its footnote text.
    //
    // Props:
    //   id       — unique footnote identifier
    //   children — footnote text content
    //
    // Usage:
    //   <Footnote id="fn1">Source: Example et al., 2024</Footnote>

    import type { Snippet } from "svelte";

    let {
        id,
        children,
        ...restProps
    }: {
        /** Unique footnote identifier. */
        id: string;
        /** Footnote content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<aside id={id} role="note" aria-label={id} {...restProps}>
    {@render children()}
</aside>
