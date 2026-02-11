<script lang="ts">
    // Component: Caption
    //
    // A headless caption component for providing supplementary text alongside
    // media elements. Uses the <figcaption> element for semantic correctness.
    //
    // Usage:
    //   <Caption>Photo of a sunset over the ocean.</Caption>
    //   <Caption id="chart-caption">Figure 1: Revenue growth over time.</Caption>
    //
    // Accessibility:
    //   - Semantic <figcaption> provides implicit association with parent <figure>
    //   - Can be referenced via aria-describedby from other elements

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<figcaption {...restProps}>
    {@render children()}
</figcaption>
