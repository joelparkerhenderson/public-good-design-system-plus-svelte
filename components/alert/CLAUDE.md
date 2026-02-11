# Alert

## Implementation Notes

- Uses `role="alert"` with `aria-live="assertive"` by default for immediate screen reader announcements
- Supports `role="status"` with `aria-live="polite"` for less urgent messages
- `aria-atomic="true"` ensures the entire alert is re-read when content changes
- `data-type` attribute exposes severity type for CSS styling by consumers
- Heading rendered as `<p><strong>` for semantic emphasis without assuming heading level

## Props

- `type`: "info" | "success" | "warning" | "error" (default: "info")
- `heading`: Optional heading text
- `role`: "alert" | "status" (default: "alert")
- `live`: Override for aria-live politeness

## Keyboard Interactions

- None — alerts are passive announcements, not interactive elements

## ARIA

- `role="alert"` or `role="status"`
- `aria-live="assertive"` or `aria-live="polite"`
- `aria-atomic="true"`

## References

- WAI-ARIA Alert Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/alert/
- WAI-ARIA alert role: https://www.w3.org/TR/wai-aria-1.2/#alert
