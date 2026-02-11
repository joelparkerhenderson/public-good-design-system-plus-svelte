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
