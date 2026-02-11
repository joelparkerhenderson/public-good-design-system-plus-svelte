# Banner

## Implementation Notes

- Uses `role="region"` with `aria-live="polite"` for screen reader announcements
- Dismissible banners render a `<button>` with configurable `aria-label`
- `$state()` tracks visibility; dismissing sets visible to false and calls onclose callback
- `data-type` attribute exposes variant for consumer CSS

## Props

- `type`: "info" | "success" | "warning" | "error" (default: "info")
- `dismissible`: boolean (default: false)
- `onclose`: callback (optional) — called when banner is dismissed
- `closeLabel`: string (optional) — accessible label for dismiss button
- `children`: Snippet — banner content

## Keyboard Interactions

- Tab: Focus dismiss button (when dismissible)
- Enter/Space: Activate dismiss button

## ARIA

- `role="region"` for landmark navigation
- `aria-live="polite"` for dynamic announcements
- Dismiss button has `aria-label`
