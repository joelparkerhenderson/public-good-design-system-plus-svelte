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
