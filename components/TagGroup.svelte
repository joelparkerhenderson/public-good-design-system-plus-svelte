<script lang="ts">
    // Component: TagGroup
    //
    // A headless container for a collection of tags using role="group".
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for tag elements
    //
    // Usage:
    //   <TagGroup label="Technologies">
    //     <Tag>Svelte</Tag>
    //     <Tag>TypeScript</Tag>
    //   </TagGroup>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Tag elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="group" aria-label={label} {...restProps}>
    {@render children()}
</div>
