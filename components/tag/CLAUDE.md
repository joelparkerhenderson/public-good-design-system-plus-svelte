# Tag

## Implementation Notes

- Renders as `<span role="status" aria-label={label}>` for status announcements
- `role="status"` creates a live region for screen reader announcements
- All visible content provided through children snippet

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- tag content
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None -- tags are informational, not interactive

## ARIA

- `role="status"` for live region announcements
- `aria-label` provides accessible name from label prop
