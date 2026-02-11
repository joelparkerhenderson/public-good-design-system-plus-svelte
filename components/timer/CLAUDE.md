# Timer

## Implementation Notes

- Renders as `<time role="timer" aria-label={label} aria-live="polite">`
- Children snippet provides the formatted timer display text
- `aria-live="polite"` ensures screen readers announce updates without interrupting
- Consumer manages timer logic; this component only provides structure and accessibility
- Optional `datetime` attribute can be passed via restProps for machine-readable duration

## Props

- `label`: string (required) -- accessible label for screen readers
- `children`: Snippet (required) -- formatted timer display content

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `role="timer"` indicates countdown or elapsed time
- `aria-label` from the label prop
- `aria-live="polite"` for non-intrusive screen reader announcements

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify time element, timer role, aria-label, aria-live, children content, passthrough attributes
