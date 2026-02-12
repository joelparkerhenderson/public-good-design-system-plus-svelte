# RatingGroup

A rating group is a component that allows users to select a rating value from a set of discrete options, typically represented as stars, hearts, thumbs, or other symbols. Commonly used in product reviews, feedback forms, survey questionnaires, and content evaluation interfaces, the rating group provides an intuitive way for users to express a qualitative judgment on a numeric scale.

This headless component renders a `<fieldset>` with `role="radiogroup"` and an accessible label. Each option in the group functions as a radio button, allowing exactly one value to be selected at a time. The consumer provides the individual rating options as children.

## Implementation Notes

- Renders a `<fieldset>` element with `role="radiogroup"` to semantically group the rating options
- Consumer provides `<input type="radio">` elements or equivalent as children
- The fieldset groups the options so screen readers announce them as a single rating control
- Accepts `...restProps` for forwarding additional attributes to the fieldset
- No internal state -- purely a structural wrapper

## Props

- `label`: string (required) -- accessible name describing what is being rated, applied via `aria-label`
- `children`: Snippet (required) -- the rating option elements

## Usage

```svelte
<RatingGroup label="Rate this product">
    <label><input type="radio" name="rating" value="1" /> 1 star</label>
    <label><input type="radio" name="rating" value="2" /> 2 stars</label>
    <label><input type="radio" name="rating" value="3" /> 3 stars</label>
    <label><input type="radio" name="rating" value="4" /> 4 stars</label>
    <label><input type="radio" name="rating" value="5" /> 5 stars</label>
</RatingGroup>
```

## Keyboard Interactions

- Arrow Right / Arrow Down: Move focus to and select the next radio option
- Arrow Left / Arrow Up: Move focus to and select the previous radio option
- Tab: Move focus into/out of the radio group

(These are provided by the native radio button group behavior.)

## ARIA

- `role="radiogroup"` -- identifies the fieldset as a group of radio options
- `aria-label={label}` -- provides an accessible name describing what is being rated

## References

- WAI-ARIA Radiogroup Role: https://www.w3.org/TR/wai-aria-1.2/#radiogroup
- WAI-ARIA Radio Group Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/radio/
