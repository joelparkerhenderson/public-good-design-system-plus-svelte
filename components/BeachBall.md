# Beach ball

The beach ball in UI/UX typically refers to a loading indicator or waiting
indicator, most famously seen as the colorful spinning cursor on macOS when the
system is busy or unresponsive. While not always a formal “component” in design
systems, it represents a visual cue that a process is in progress and the user
must wait. In broader UI/UX contexts, similar spinning indicators or animations
(often circular) serve the same purpose—communicating that the system is working
on a task. While helpful for setting expectations, overuse or long durations of
beach ball indicators can lead to user frustration, so they should be paired with
good performance practices or more informative feedback when possible.
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
