# CharacterCounter

## Implementation Notes

- `role="status"` with `aria-live="polite"` for non-intrusive updates
- `$derived()` computes remaining count and over-limit state
- Displays "count / max" when max provided, "count" otherwise
- data attributes for CSS styling: data-count, data-remaining, data-over-limit

## Props

- `count`: number (default: 0)
- `max`: number (optional)
- `label`: string (optional) — aria-label
