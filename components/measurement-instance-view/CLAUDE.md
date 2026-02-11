# Measurement Instance View

## Implementation Notes

- Displays a measurement instance value in a `<span>` element
- A measurement instance is a specific measured value (e.g. "72 kg", "98.6 F")
- Optional `label` prop for aria-label context
- Spreads `...restProps` on the root `<span>` element

## Props

- `value`: string (required) -- the measurement instance value to display
- `label`: string (optional) -- accessible name via aria-label

## Keyboard Interactions

- None -- this is a display-only component

## ARIA

- Optional `aria-label` set from `label` prop
