# ButtonInput

## Implementation Notes

- Wraps native `<input type="button">` for form-native button semantics
- Label is the `value` attribute (plain text only, no rich content)
- Distinguished from Button component: Button uses `<button>` with children snippets

## Props

- `value`: string (required) — button label text
- `disabled`: boolean (default: false)
- `name`: string (optional) — form field name
- `label`: string (optional) — aria-label override
- `onclick`: callback (optional) — click handler

## Keyboard Interactions

- Tab: Focus the button
- Enter: Activate (native behavior)
- Space: Activate (native behavior)

## ARIA

- Implicit `button` role from `<input type="button">`
- Optional `aria-label` for screen reader override
