# RagStatusInput

## Implementation Notes

- Renders as `<select aria-label={label}>` with three options: red, amber, green
- The `value` prop is `$bindable()` for two-way binding with `bind:value`
- Uses native select keyboard navigation

## Props

- `label`: string (required) -- accessible label for the select
- `value`: string (default: "") -- currently selected status, bindable

## Options

- `red`: Critical problem, needs immediate attention
- `amber`: Caution, minor issues or at risk
- `green`: On track, everything is fine

## Keyboard Interactions

- Arrow keys navigate options (native select behavior)
- Enter/Space opens the dropdown
- Escape closes the dropdown

## ARIA

- `aria-label` on the select from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify select element, three options, option values, passthrough attributes
