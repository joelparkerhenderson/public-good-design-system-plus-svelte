<script lang="ts">
    // Component: Sidebar
    //
    // A headless sidebar using <aside> with complementary landmark role.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for sidebar content
    //
    // Usage:
    //   <Sidebar label="Navigation">
    //     <nav>...</nav>
    //   </Sidebar>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Sidebar content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<aside aria-label={label} {...restProps}>
    {@render children()}
</aside>
