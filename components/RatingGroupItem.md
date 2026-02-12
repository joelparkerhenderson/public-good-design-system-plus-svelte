# RatingGroupItem

RatingGroupItem is a single rating option within a RatingGroup. It renders as a `<button>` with `role="radio"` and `aria-checked`, following the WAI-ARIA radio group pattern. Each item represents one discrete rating level (e.g. 1 star, 2 stars, etc.) in a rating control.

Use RatingGroupItem inside a RatingGroup to build custom rating controls such as star ratings, thumbs up/down, numeric scales, or emoji-based feedback selectors.

## Implementation Notes

- Renders a `<button>` element with `role="radio"` for ARIA semantics
- `aria-checked` reflects the `checked` prop to indicate selection state
- Uses roving tabindex: `tabindex="0"` when checked, `tabindex="-1"` otherwise
- `data-value` attribute exposes the rating value for CSS styling or JS queries
- Supports `disabled` prop to prevent interaction
- Spreads `restProps` onto the button for consumer customization
- Uses Svelte 5 `$props()` with TypeScript typing

## Props

- `checked`: boolean (default `false`) -- whether this rating option is currently selected
- `value`: string (default `""`) -- value associated with this rating level, exposed as `data-value`
- `disabled`: boolean (default `false`) -- whether the rating option is disabled
- `children`: Snippet (required) -- label content to render inside the button (star icon, number, emoji, etc.)
- `...restProps`: unknown -- additional attributes spread onto the `<button>` element

## Usage

```svelte
<RatingGroup label="Rate this product">
  <RatingGroupItem checked={rating === 1} value="1" onclick={() => rating = 1}>
    1 star
  </RatingGroupItem>
  <RatingGroupItem checked={rating === 2} value="2" onclick={() => rating = 2}>
    2 stars
  </RatingGroupItem>
  <RatingGroupItem checked={rating === 3} value="3" onclick={() => rating = 3}>
    3 stars
  </RatingGroupItem>
  <RatingGroupItem checked={rating === 4} value="4" onclick={() => rating = 4}>
    4 stars
  </RatingGroupItem>
  <RatingGroupItem checked={rating === 5} value="5" onclick={() => rating = 5}>
    5 stars
  </RatingGroupItem>
</RatingGroup>
```

## Keyboard Interactions

- Tab: Focus moves to the checked option (or first option if none checked)
- Arrow Left / Arrow Up: Consumer should implement arrow key navigation on the parent RatingGroup
- Arrow Right / Arrow Down: Consumer should implement arrow key navigation on the parent RatingGroup
- Space / Enter: Activates the focused option (native button behavior)

## ARIA

- `role="radio"` -- identifies this button as a radio-like option within a radiogroup
- `aria-checked` -- indicates whether this rating option is selected (`true`) or not (`false`)
- Roving tabindex -- only the checked item has `tabindex="0"`, others have `tabindex="-1"`

## References

- WAI-ARIA Radio Group Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
