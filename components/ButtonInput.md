# Button Input

A button input is a form component that wraps the native HTML
`<input type="button">` element. Unlike the `<button>` element which can
contain rich content (icons, formatted text), the button input displays its
label as the `value` attribute and renders only plain text.

This component is useful in form contexts where the native input semantics are
preferred, or when interacting with systems that expect `<input>` elements. The
button input supports the same keyboard interactions as a regular button —
Enter and Space to activate.
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
