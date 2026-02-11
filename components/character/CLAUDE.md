# Character

## Implementation Notes

- `role="img"` with `aria-label` for meaningful characters
- `role="presentation"` with `aria-hidden` for decorative characters
- Simple `<span>` wrapper

## Props

- `label`: string (optional) — accessible description
- `decorative`: boolean (default: false) — hides from screen readers
- `children`: Snippet — the character to display
