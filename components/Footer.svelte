<script lang="ts">
    // Component: Footer
    //
    // A headless page footer using semantic <footer> element.
    //
    // Props:
    //   label    — optional accessible name (aria-label)
    //   children — footer content
    //
    // Usage:
    //   <Footer label="Site footer">
    //     <p>Copyright 2024</p>
    //   </Footer>

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        children,
        ...restProps
    }: {
        /** Optional accessible name. */
        label?: string;
        /** Footer content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<footer aria-label={label} {...restProps}>
    {@render children()}
</footer>
