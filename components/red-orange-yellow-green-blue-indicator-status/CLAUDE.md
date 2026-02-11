# RedOrangeYellowGreenBlueIndicatorStatus

## Implementation Notes

- Renders as `<span aria-label={label}>` displaying a ROYGB status value as text
- Five-level status: red, orange, yellow, green, blue
- Read-only display component, not interactive
- Value defaults to empty string when not provided

## Props

- `label`: string (required) -- accessible label for screen readers
- `value`: string (default: "") -- the ROYGB status to display

## Status Values

- `red`: Critical problem
- `orange`: Hazard or significant risk
- `yellow`: Caution or minor issues
- `green`: Normal, on track
- `blue`: Paused or informational

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the span from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify span element, aria-label, all five status values, passthrough attributes
