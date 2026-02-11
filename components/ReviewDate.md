# Review Date

A review date is a UI/UX component that displays a date associated with a
review, audit, or scheduled check-in. It renders as a semantic HTML `<time>`
element with a machine-readable `datetime` attribute in ISO 8601 format and
human-readable display text provided through a children snippet. This
separation allows browsers and assistive technologies to parse the date for
accurate interpretation while displaying a user-friendly formatted date. The
component is commonly used in dashboards, compliance tracking, audit logs, and
scheduling interfaces where dates need to be both human-readable and
machine-parseable.
# ReviewDate

## Implementation Notes

- Renders as `<time aria-label={label} datetime={datetime}>` with children snippet
- The datetime attribute uses ISO 8601 format for machine readability
- Children snippet provides localized human-readable date text
- Semantic `<time>` element enables browser and assistive technology date parsing

## Props

- `label`: string (required) -- accessible label for screen readers
- `datetime`: string (required) -- ISO 8601 date/time string
- `children`: Snippet (required) -- human-readable display text

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the time element from the label prop
- `datetime` attribute provides machine-readable date

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify time element, aria-label, datetime attribute, children content, passthrough attributes
