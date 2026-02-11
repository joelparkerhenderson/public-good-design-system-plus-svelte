# AvatarCircle

## Implementation Notes

- Outer `<span role="img" aria-label>` provides accessible image semantics
- Image fallback: if `src` errors, switches to initials display via `$state()` error tracking
- Initials `<span>` is `aria-hidden="true"` since the outer element already has aria-label
- `$derived()` computes whether to show image based on src presence and error state
- Consumers apply circular styling via CSS (border-radius: 50%)

## Props

- `src`: string (optional) — avatar image URL
- `alt`: string (required) — accessible description
- `initials`: string (optional) — fallback text when no image

## Keyboard Interactions

- None — decorative/informational, not interactive

## ARIA

- `role="img"` on outer container
- `aria-label` from alt prop
- Inner initials `aria-hidden="true"`
