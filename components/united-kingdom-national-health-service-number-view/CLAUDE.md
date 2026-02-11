# UnitedKingdomNationalHealthServiceNumberView

## Implementation Notes

- Renders as `<span aria-label={label}>` for inline display
- Displays the NHS number value as text content
- Read-only display component (not an input)

## Props

- `label`: string (required) -- accessible label via aria-label
- `value`: string (default: "") -- the NHS number to display
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None -- this is a display-only component

## ARIA

- `aria-label` provides accessible name from label prop
- Screen readers announce the label followed by the number value
