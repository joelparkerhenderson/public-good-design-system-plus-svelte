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
