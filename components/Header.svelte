<script lang="ts">
    // Component: Header
    //
    // A headless page header using semantic <header> element.
    //
    // Props:
    //   label    — optional accessible name
    //   children — header content
    //
    // Usage:
    //   <Header label="Site header"><h1>My Site</h1></Header>

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        children,
        ...restProps
    }: {
        label?: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<header aria-label={label} {...restProps}>
    {@render children()}
</header>
