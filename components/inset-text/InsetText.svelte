<script lang="ts">
    // Component: InsetText
    //
    // A headless inset text block used for distinguishing quoted
    // or highlighted content from surrounding text.
    //
    // Props:
    //   children — inset content
    //
    // Usage:
    //   <InsetText>It can take up to 8 weeks to process.</InsetText>

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="note" {...restProps}>
    {@render children()}
</div>
