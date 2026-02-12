<script lang="ts">
    // SegmentGroup component
    //
    // A headless segmented control group using role="radiogroup".
    //
    // Consumer provides segment buttons as children.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for segment elements
    //
    // Usage:
    //   <SegmentGroup label="View">
    //     <button role="radio" aria-checked="true">Grid</button>
    //     <button role="radio" aria-checked="false">List</button>
    //   </SegmentGroup>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Segment elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- SegmentGroup component: TODO -->
<div
    role="radiogroup"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</div>
