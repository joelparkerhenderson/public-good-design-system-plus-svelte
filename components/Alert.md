# Alert

An alert is a UI/UX component designed to capture the user's attention and
convey important information, such as warnings, errors, confirmations, or status
updates. Typically displayed as a small modal or banner, alerts interrupt the
user's workflow to ensure visibility and often require acknowledgment through an
action like clicking “OK” or “Dismiss.” They are commonly used for critical
feedback or decision points—such as confirming deletion or notifying of failed
actions—and should be clear, concise, and appropriately styled (e.g.,
color-coded for severity) to avoid confusion or unnecessary disruption.
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
