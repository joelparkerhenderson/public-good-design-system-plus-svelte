# Avatar circle

An avatar circle is a UI/UX component that displays a user’s profile image or
initials within a circular frame, commonly used to represent a user identity in
apps, websites, and social platforms. This visual element provides a quick,
recognizable way for users to identify themselves or others, often appearing in
headers, comments, chat interfaces, and account menus. The circular shape is
aesthetically pleasing and universally recognized as a placeholder for personal
identity, contributing to a more humanized and personalized user experience.
When no image is available, initials or default icons are often shown inside the
circle.
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
