<script lang="ts">
    // Component: NavigationMenu
    //
    // A headless navigation menu using the <nav> element.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for navigation links
    //
    // Usage:
    //   <NavigationMenu label="Main navigation">
    //     <a href="/">Home</a>
    //     <a href="/about">About</a>
    //   </NavigationMenu>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Navigation content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<nav aria-label={label} {...restProps}>
    {@render children()}
</nav>
