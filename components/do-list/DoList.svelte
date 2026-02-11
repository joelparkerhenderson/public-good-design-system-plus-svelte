<script lang="ts">
    // Component: DoList
    //
    // A headless list of recommended actions. Renders as a <ul> with
    // accessible label. Each child should be an <li>.
    //
    // Props:
    //   label    — accessible name (default: "Do")
    //   children — list items
    //
    // Usage:
    //   <DoList label="Do">
    //     <li>Write clear labels</li>
    //     <li>Use semantic HTML</li>
    //   </DoList>

    import type { Snippet } from "svelte";

    let {
        label = "Do",
        children,
        ...restProps
    }: {
        /** Accessible name for the list. */
        label?: string;
        /** List items. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<ul role="list" aria-label={label} {...restProps}>
    {@render children()}
</ul>
