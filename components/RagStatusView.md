# RAG Status View

A RAG (Red/Amber/Green) status view is a UI/UX component that displays a
traffic-light status value as read-only text. It is used to present previously
captured RAG status data in dashboards, reports, or detail views. Red indicates
a critical problem, amber signals caution or minor issues, and green means
everything is on track. The component renders as a span element with an
accessible label, making the status readable by screen readers and other
assistive technologies. This headless component provides the semantic structure
and accessibility features while allowing consumers to apply their own visual
styling, such as color-coded backgrounds or text colors.
# RagStatusView

## Implementation Notes

- Renders as `<span aria-label={label}>` displaying the RAG status as text
- Read-only display component, not interactive
- Value defaults to empty string when not provided

## Props

- `label`: string (required) -- accessible label for screen readers
- `value`: string (default: "") -- the RAG status to display (red, amber, green)

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the span from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify span element, aria-label, red/amber/green display, passthrough attributes
