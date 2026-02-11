<script lang="ts">
    // Component: Panel
    //
    // A headless panel/section container with accessible labelling.
    //
    // Props:
    //   label    — accessible name for the panel region
    //   children — panel content
    //
    // Usage:
    //   <Panel label="Settings"><p>Content</p></Panel>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        label: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<section aria-label={label} {...restProps}>
    {@render children()}
</section>
