# Red Amber Green (RAG) status

The Red Amber Green (RAG) status UI/UX component is a visual status indicator
that uses the traffic light color scheme—red, amber (yellow), and green—to
represent different levels of status, performance, or urgency. Commonly used in
dashboards, reports, and project tracking tools, it provides an at-a-glance
understanding of how something is performing: green typically means everything
is on track, amber signals caution or minor issues, and red indicates a critical
problem that needs immediate attention. RAG status indicators enhance usability
by delivering quick, intuitive feedback through universally understood colors,
enabling users to assess situations rapidly and prioritize actions effectively.
# RedAmberGreenStatus

## Implementation Notes

- Renders as `<span aria-label={label}>` displaying a RAG status value as text
- Alternative naming for the RAG status view pattern using full color names
- Read-only display component, not interactive
- Value defaults to empty string when not provided

## Props

- `label`: string (required) -- accessible label for screen readers
- `value`: string (default: "") -- the status to display (red, amber, green)

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the span from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify span element, aria-label, red/amber/green display, passthrough attributes
