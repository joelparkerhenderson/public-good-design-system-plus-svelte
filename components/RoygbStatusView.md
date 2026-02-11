# ROYGB Status View

A ROYGB (Red/Orange/Yellow/Green/Blue) status view is a UI/UX component that
displays a five-level color-coded status value as read-only text. It is used
to present previously captured ROYGB status data in dashboards, reports, or
detail views. Red indicates a critical problem, orange signals a hazard,
yellow means caution, green indicates normal status, and blue represents a
paused or informational state. The component renders as a span element with an
accessible label, making the status readable by screen readers and other
assistive technologies. This headless component provides the semantic structure
and accessibility features while allowing consumers to apply their own visual
styling.
# RoygbStatusView

## Implementation Notes

- Renders as `<span aria-label={label}>` displaying a ROYGB status value as text
- Read-only display component, not interactive
- Value defaults to empty string when not provided

## Props

- `label`: string (required) -- accessible label for screen readers
- `value`: string (default: "") -- the ROYGB status to display

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the span from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify span element, aria-label, all five status values, passthrough attributes
