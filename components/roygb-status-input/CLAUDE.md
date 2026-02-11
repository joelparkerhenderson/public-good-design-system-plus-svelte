# RoygbStatusInput

## Implementation Notes

- Renders as `<select aria-label={label}>` with five options: red, orange, yellow, green, blue
- The `value` prop is `$bindable()` for two-way binding with `bind:value`
- Uses native select keyboard navigation

## Props

- `label`: string (required) -- accessible label for the select
- `value`: string (default: "") -- currently selected status, bindable

## Options

- `red`: Critical problem
- `orange`: Hazard or significant risk
- `yellow`: Caution or minor issues
- `green`: Normal, on track
- `blue`: Paused or informational

## Keyboard Interactions

- Arrow keys navigate options (native select behavior)
- Enter/Space opens the dropdown
- Escape closes the dropdown

## ARIA

- `aria-label` on the select from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify select element, five options, option values, passthrough attributes
