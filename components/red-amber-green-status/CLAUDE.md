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
