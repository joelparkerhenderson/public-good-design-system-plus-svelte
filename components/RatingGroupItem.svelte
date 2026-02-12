<script lang="ts">
    // RatingGroupItem component
    //
    // A single rating option within a RatingGroup. It renders as a <button> with
    // role="radio" and aria-checked, following the WAI-ARIA radio group pattern. Each
    // item represents one discrete rating level (e.g., 1 star, 2 stars). Uses roving
    // tabindex: tabindex="0" when checked, tabindex="-1" otherwise. Commonly used to
    // build custom star ratings, thumbs up/down, numeric scales, or emoji-based
    // feedback selectors. This is a compound component child; use inside RatingGroup.
    //
    // Props:
    //   checked — boolean, default false. Whether this rating option is currently selected.
    //   value — string, default "". Value associated with this rating level, exposed as data-value.
    //   disabled — boolean, default false. Whether the rating option is disabled.
    //   children — Snippet, required. Label content (star icon, number, emoji, etc.).
    //   ...restProps — additional HTML attributes spread onto the <button>.
    //
    // Syntax:
    //   <RatingGroupItem checked={selected} value="3">3 stars</RatingGroupItem>
    //
    // Examples:
    //   <!-- Rating group with clickable items -->
    //   <RatingGroup label="Rate this product">
    //     <RatingGroupItem checked={rating === 1} value="1" onclick={() => rating = 1}>
    //       1 star
    //     </RatingGroupItem>
    //     <RatingGroupItem checked={rating === 2} value="2" onclick={() => rating = 2}>
    //       2 stars
    //     </RatingGroupItem>
    //     <RatingGroupItem checked={rating === 3} value="3" onclick={() => rating = 3}>
    //       3 stars
    //     </RatingGroupItem>
    //   </RatingGroup>
    //
    // Keyboard:
    //   - Tab: focus moves to the checked option (or first if none checked)
    //   - Space / Enter: activates the focused option (native button behavior)
    //   - Arrow Left / Arrow Up: consumer should implement navigation on the parent RatingGroup
    //   - Arrow Right / Arrow Down: consumer should implement navigation on the parent RatingGroup
    //
    // Accessibility:
    //   - role="radio" identifies this button as a radio-like option within a radiogroup
    //   - aria-checked indicates whether this rating option is selected
    //   - Roving tabindex: only the checked item has tabindex="0", others have tabindex="-1"
    //   - data-value attribute exposes the rating value for CSS styling or JS queries
    //
    // Internationalization:
    //   - All label content comes through the children snippet
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - This is a compound component child; use inside RatingGroup
    //   - Consumer provides onclick handlers for selection logic
    //   - Uses <button> not <input type="radio"> for custom radio semantics
    //
    // References:
    //   - WAI-ARIA Radio Group Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/radio/

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
