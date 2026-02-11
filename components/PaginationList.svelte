<script lang="ts">
    // Component: PaginationList
    //
    // A headless pagination navigation component.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for pagination items (links/buttons)
    //
    // Usage:
    //   <PaginationList label="Pagination">
    //     <li><a href="/page/1">1</a></li>
    //     <li><a href="/page/2" aria-current="page">2</a></li>
    //   </PaginationList>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Pagination items. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<nav aria-label={label} {...restProps}>
    <ul>
        {@render children()}
    </ul>
</nav>
