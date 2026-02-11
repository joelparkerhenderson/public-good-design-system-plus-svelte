# BeachBall

## Implementation Notes

- Uses `role="status"` with `aria-live="polite"` for non-blocking loading announcements
- `aria-busy` reflects the active state
- Inner `<span aria-hidden="true">` is the visual animation target for consumers
- Consumers apply spinning/animation CSS to the inner span
- `data-active` attribute for CSS state selectors

## Props

- `label`: string (required) — accessible description of what is loading
- `active`: boolean (default: true) — whether the indicator is active

## Keyboard Interactions

- None — informational, not interactive

## ARIA

- `role="status"`
- `aria-live="polite"`
- `aria-busy` reflects loading state
- `aria-label` describes the loading context
