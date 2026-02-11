# Tel Input

## Implementation Notes

- Uses `<input type="tel">` with `aria-label` for accessible naming
- `autocomplete="tel"` enables browser autofill for phone numbers
- Bindable `value` prop for two-way data binding via `$bindable()`
- Supports `required` and `disabled` HTML attributes
- Spreads `...restProps` on the root `<input>` element

## Props

- `label`: string (required) -- accessible name via aria-label
- `value`: string (default: "") -- bindable telephone value
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)

## Keyboard Interactions

- Native `<input type="tel">` keyboard behavior

## ARIA

- `aria-label` set from `label` prop
- `autocomplete="tel"`

## References

- HTML tel input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel
