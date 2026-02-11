# Badge

A badge is a small UI/UX component typically used to display dynamic status
information, counts, or indicators in a compact, visually prominent format.
Commonly seen as a colored circle or label attached to icons, buttons, or list
items, badges are often used to show unread messages, notification counts, or
activity statuses. They help draw attention to specific elements without
interrupting the user experience. Effective badge design ensures high visibility
through contrast and placement, while keeping content minimal—usually numbers,
short text, or symbols—to quickly convey information at a glance.
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
