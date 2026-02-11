# NetPromotorScoreRatingInput

## Implementation Notes

- Renders as `<fieldset role="radiogroup">` with 11 radio buttons (0-10)
- Each radio has `aria-label` with its numeric value for screen readers
- The `value` prop is `$bindable()` for two-way binding
- Default radio group name is "nps", customizable via `name` prop
- Radio values are strings ("0" through "10")

## Props

- `label`: string (required) -- accessible label for the radiogroup
- `value`: string (default: "") -- currently selected score, bindable
- `name`: string (default: "nps") -- name attribute for the radio group

## Keyboard Interactions

- Arrow keys navigate between radio buttons (native radio group behavior)
- Space selects the focused radio button
- Tab moves focus into/out of the radio group

## ARIA

- `role="radiogroup"` on the fieldset
- `aria-label` on the fieldset from the label prop
- Each radio has `aria-label` with its numeric value

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify 11 radio buttons, aria-labels, values 0-10, passthrough attributes
