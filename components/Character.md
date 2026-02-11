# Character

A character component displays a single character (glyph, symbol, emoji, or
letter) with proper accessibility semantics. When the character conveys meaning
(like a checkmark for success or a warning symbol), it uses `role="img"` with
an `aria-label` so screen readers announce its purpose. When the character is
purely decorative, the `decorative` prop hides it from assistive technologies.
# Character

## Implementation Notes

- `role="img"` with `aria-label` for meaningful characters
- `role="presentation"` with `aria-hidden` for decorative characters
- Simple `<span>` wrapper

## Props

- `label`: string (optional) — accessible description
- `decorative`: boolean (default: false) — hides from screen readers
- `children`: Snippet — the character to display
