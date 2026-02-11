# ButtonWithPressableOrPressed

## Implementation Notes

- Toggle button using `aria-pressed` for accessibility
- `pressable` prop controls whether the button can be toggled
- When `pressable` is false, `aria-pressed` is not rendered (regular button)
- Clicking toggles the `pressed` state via `$bindable()`
- `data-pressable` and `data-pressed` attributes for CSS state selectors

## Props

- `pressable`: boolean (default: true) — whether the button can be toggled
- `pressed`: boolean (default: false, bindable) — current toggle state
- `disabled`: boolean (default: false)
- `label`: string (optional) — aria-label override
- `onclick`: callback (optional) — click handler (called after toggle)
- `children`: Snippet — button content

## Keyboard Interactions

- Tab: Focus the button
- Enter/Space: Toggle the pressed state (native button behavior)

## ARIA

- Implicit `button` role
- `aria-pressed` reflects toggle state (only when pressable)
- Optional `aria-label`

## References

- WAI-ARIA Button Pattern (toggle): https://www.w3.org/WAI/ARIA/apd/patterns/button/
