<script lang="ts">
    // SegmentGroupItem component
    //
    // A single segment option within a SegmentGroup (role="radiogroup").
    // Renders as a button with role="radio" and aria-checked for selection state.
    // Uses roving tabindex: tabindex="0" when checked, tabindex="-1" otherwise.
    //
    // Props:
    //   checked — whether this segment is currently selected
    //   value — the value associated with this segment
    //   disabled — whether the segment is disabled (default false)
    //   children — snippet for the segment label content
    //
    // Usage:
    //   <SegmentGroup label="View">
    //     <SegmentGroupItem checked={true} value="grid">Grid</SegmentGroupItem>
    //     <SegmentGroupItem checked={false} value="list">List</SegmentGroupItem>
    //   </SegmentGroup>

    import type { Snippet } from "svelte";

    let {
        checked = false,
        value = "",
        disabled = false,
        children,
        ...restProps
    }: {
        /** Whether this segment is selected. */
        checked?: boolean;
        /** Value associated with this segment. */
        value?: string;
        /** Whether this segment is disabled. */
        disabled?: boolean;
        /** Label content for the segment. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- SegmentGroupItem component: a single radio-like segment option -->
<button
    role="radio"
    aria-checked={checked}
    data-value={value}
    tabindex={checked ? 0 : -1}
    {disabled}
    {...restProps}
>
    {@render children()}
</button>
