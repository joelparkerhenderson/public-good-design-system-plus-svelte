<script lang="ts">
    // Component: HolyGrailLayout
    //
    // A headless holy grail layout with header, footer, main, and two sidebars.
    // Uses semantic HTML landmarks for accessibility.
    //
    // Props:
    //   children — layout content (header, nav, main, aside, footer)
    //
    // Usage:
    //   <HolyGrailLayout>
    //     <header>...</header>
    //     <nav>...</nav>
    //     <main>...</main>
    //     <aside>...</aside>
    //     <footer>...</footer>
    //   </HolyGrailLayout>

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div {...restProps}>
    {@render children()}
</div>
