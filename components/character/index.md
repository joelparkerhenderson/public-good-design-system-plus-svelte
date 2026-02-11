# Character

A character component displays a single character (glyph, symbol, emoji, or
letter) with proper accessibility semantics. When the character conveys meaning
(like a checkmark for success or a warning symbol), it uses `role="img"` with
an `aria-label` so screen readers announce its purpose. When the character is
purely decorative, the `decorative` prop hides it from assistive technologies.
