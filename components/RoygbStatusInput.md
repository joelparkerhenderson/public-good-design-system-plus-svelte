# ROYGB Status Input

A ROYGB (Red/Orange/Yellow/Green/Blue) status input is a UI/UX component that
allows users to select a five-level color-coded status value from a dropdown.
ROYGB extends the traditional RAG (Red/Amber/Green) model by adding orange
and blue levels for more granular status reporting. Red indicates a critical
problem, orange signals a hazard or significant risk, yellow means caution or
minor issues, green indicates normal on-track status, and blue represents a
paused or informational state. The component renders as a select element with
appropriate accessibility attributes, providing native keyboard navigation and
screen reader support. This headless component provides the semantic structure
while allowing consumers to apply their own visual styling.
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
