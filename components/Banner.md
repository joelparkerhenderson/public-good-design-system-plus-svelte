# Banner

A banner is a prominent UI/UX component used to display important messages,
updates, or calls to action at the top or bottom of an interface. Often spanning
the full width of the screen, banners are designed to catch the user's attention
without fully interrupting their experience. They are commonly used for
announcements, cookie consent, warnings, promotions, or system alerts. Banners
may be persistent or dismissible, depending on the message’s importance. Good
banner design ensures high visibility, concise messaging, and clear actions—like
buttons or links—so users can quickly understand and respond if needed.
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
