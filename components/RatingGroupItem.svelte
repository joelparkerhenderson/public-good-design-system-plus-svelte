<script lang="ts">
    // RatingGroupItem component
    //
    // A single rating option within a RatingGroup (role="radiogroup").
    // Renders as a button with role="radio" and aria-checked for selection state.
    // Uses roving tabindex: tabindex="0" when checked, tabindex="-1" otherwise.
    //
    // Props:
    //   checked — whether this rating option is currently selected
    //   value — the value associated with this rating option (e.g. "1", "2", "3")
    //   disabled — whether the option is disabled (default false)
    //   children — snippet for the rating label content (e.g. star icon, number)
    //
    // Usage:
    //   <RatingGroup label="Rate this product">
    //     <RatingGroupItem checked={rating === 1} value="1">1 star</RatingGroupItem>
    //     <RatingGroupItem checked={rating === 2} value="2">2 stars</RatingGroupItem>
    //     <RatingGroupItem checked={rating === 3} value="3">3 stars</RatingGroupItem>
    //   </RatingGroup>

    import type { Snippet } from "svelte";

    let {
        checked = false,
        value = "",
        disabled = false,
        children,
        ...restProps
    }: {
        /** Whether this rating option is selected. */
        checked?: boolean;
        /** Value associated with this rating option. */
        value?: string;
        /** Whether this rating option is disabled. */
        disabled?: boolean;
        /** Label content for the rating option. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- RatingGroupItem component: a single radio-like rating option -->
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
