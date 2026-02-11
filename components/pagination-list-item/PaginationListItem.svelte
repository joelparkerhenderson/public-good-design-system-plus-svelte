<script lang="ts">
    // Component: PaginationListItem
    //
    // A single item in a pagination list. Renders as an <li>.
    //
    // Usage:
    //   <PaginationListItem><a href="/page/1">1</a></PaginationListItem>

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        /** Item content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<li {...restProps}>
    {@render children()}
</li>
