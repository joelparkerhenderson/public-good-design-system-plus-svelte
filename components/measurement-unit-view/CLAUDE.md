# Measurement Unit View

## Implementation Notes

- Displays a measurement unit in a `<span>` element
- A measurement unit is a standard quantity (e.g. "kg", "lb", "cm", "inch")
- Optional `label` prop for aria-label context
- Spreads `...restProps` on the root `<span>` element

## Props

- `value`: string (required) -- the measurement unit to display
- `label`: string (optional) -- accessible name via aria-label

## Keyboard Interactions

- None -- this is a display-only component

## ARIA

- Optional `aria-label` set from `label` prop
