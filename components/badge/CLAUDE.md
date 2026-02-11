# Badge

## Implementation Notes

- Renders as `<span role="status">` for screen reader announcements of dynamic content
- `data-type` attribute exposes variant for consumer CSS styling
- `aria-label` provides expanded context when badge text alone is insufficient (e.g., "3" → "3 unread messages")

## Props

- `type`: "default" | "info" | "success" | "warning" | "error" (default: "default")
- `label`: string (optional) — accessible label for screen readers
- `children`: Snippet — badge content

## Keyboard Interactions

- None — badges are informational, not interactive

## ARIA

- `role="status"` for live region announcements
- Optional `aria-label` for expanded context
