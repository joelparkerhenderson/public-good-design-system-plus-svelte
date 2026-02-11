# SummaryList

## Implementation Notes

- Renders as `<dl aria-label={label}>` (description list) with children snippet
- Children typically contain `<dt>` (term) and `<dd>` (description) pairs
- Semantic `<dl>` element provides description list semantics for key-value pairs

## Props

- `label`: string (required) -- accessible label for the description list
- `children`: Snippet (required) -- list content (dt/dd pairs)

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the dl element from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify dl element, aria-label, children content, passthrough attributes
