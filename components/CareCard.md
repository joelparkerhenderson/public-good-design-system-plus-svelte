# Care Card

A care card is a healthcare-oriented UI component for displaying medical
guidance with varying levels of urgency. Inspired by the NHS England design
system, care cards communicate health advice in three tiers: non-urgent
(speak to a GP), urgent (visit A&E or call 111), and immediate (call 999).

Each care card has a heading that describes the action and a body containing
the relevant advice or conditions. The `data-type` attribute allows consumers
to apply urgency-appropriate styling (e.g., blue for non-urgent, red for
immediate).
# CareCard

## Implementation Notes

- NHS England inspired pattern for healthcare guidance
- Three urgency levels: non-urgent, urgent, immediate
- Uses `<section role="region">` with heading for landmark navigation
- `data-type` for urgency-based CSS styling

## Props

- `type`: "non-urgent" | "urgent" | "immediate" (default: "non-urgent")
- `heading`: string (required)
- `label`: string (optional) — aria-label override
- `children`: Snippet

## ARIA

- `role="region"` with `aria-label`
