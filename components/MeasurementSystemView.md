# Measurement System View

A measurement system view displays a measurement system name in a `<span>`
element. Examples include "metric", "imperial", or "SI". Supports an optional
aria-label for additional accessible context.
# Measurement System View

## Implementation Notes

- Displays a measurement system name in a `<span>` element
- A measurement system is a collection of units (e.g. "metric", "imperial", "SI")
- Optional `label` prop for aria-label context
- Spreads `...restProps` on the root `<span>` element

## Props

- `value`: string (required) -- the measurement system name to display
- `label`: string (optional) -- accessible name via aria-label

## Keyboard Interactions

- None -- this is a display-only component

## ARIA

- Optional `aria-label` set from `label` prop
