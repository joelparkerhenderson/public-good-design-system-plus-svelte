<script lang="ts">
    // Component: Checklist — a semantic list container for checklist items.

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

<ul role="list" aria-label={label} {...restProps}>
    {@render children()}
</ul>
