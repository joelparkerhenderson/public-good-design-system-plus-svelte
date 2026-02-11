# Net Promoter Score Rating View

A Net Promoter Score (NPS) rating view is a UI/UX component that displays an
NPS score value as read-only text. It is used to present previously captured
NPS data in dashboards, reports, or detail views. The component renders as a
span element with an accessible label, making the score readable by screen
readers and other assistive technologies. This headless component provides the
semantic structure and accessibility features while allowing consumers to apply
their own visual styling, such as color-coding by score range (Detractors 0-6,
Passives 7-8, Promoters 9-10).
# NetPromotorScoreRatingView

## Implementation Notes

- Renders as `<span aria-label={label}>` displaying the NPS score as text
- Read-only display component, not interactive
- Value defaults to empty string when not provided

## Props

- `label`: string (required) -- accessible label for screen readers
- `value`: string (default: "") -- the NPS score to display

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the span from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify span element, aria-label, value display, passthrough attributes
