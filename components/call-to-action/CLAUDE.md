# CallToAction

## Implementation Notes

- Renders as `<a>` when href is provided, `<button>` otherwise
- Dual-mode: link for navigation CTAs, button for action CTAs
- `disabled` only applies in button mode

## Props

- `href`: string (optional) — renders as link
- `label`: string (optional) — aria-label override
- `disabled`: boolean (default: false) — button mode only
- `onclick`: callback (optional)
- `children`: Snippet

## ARIA

- Implicit `link` or `button` role
- Optional `aria-label`
