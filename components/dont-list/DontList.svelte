<script lang="ts">
    // Component: DontList
    //
    // A headless list of discouraged actions. Renders as a <ul> with
    // accessible label. Each child should be an <li>.
    //
    // Props:
    //   label    — accessible name (default: "Don't")
    //   children — list items
    //
    // Usage:
    //   <DontList label="Don't">
    //     <li>Skip alt text</li>
    //     <li>Use only color for meaning</li>
    //   </DontList>

    import type { Snippet } from "svelte";

    let {
        label = "Don't",
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
