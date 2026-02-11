# Red Orange Yellow Green Blue (ROYGB) status

The Red Orange Yellow Green Blue (ROYGB) status UI/UX component is a visual
status indicator that uses a rainbow-like color scheme to represent different
levels of status, performance, or urgency. Commonly used in dashboards, reports,
and project tracking tools, it provides an at-a-glance understanding of how
something is performing: red indicates a critical problem, orange indicates a
hazard, yellow indicates caution, green indicates normal status, and blue
indicates pausing. ROYGB status indicators enhance usability by delivering
quick, intuitive feedback through universally understood colors, enabling users
to assess situations rapidly and prioritize actions effectively.
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
