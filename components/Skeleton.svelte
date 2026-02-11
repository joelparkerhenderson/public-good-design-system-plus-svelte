<script lang="ts">
    // Component: Skeleton
    //
    // A headless loading placeholder with aria-hidden="true" and aria-busy="true".
    // Used to indicate content is loading. Hidden from screen readers.
    //
    // Props:
    //   children — optional snippet content (e.g., placeholder shapes)
    //
    // Usage:
    //   <Skeleton />
    //   <Skeleton><div class="skeleton-line" /></Skeleton>

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        /** Optional placeholder content. */
        children?: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div
    aria-hidden="true"
    aria-busy="true"
    {...restProps}
>
    {#if children}
        {@render children()}
    {/if}
</div>
