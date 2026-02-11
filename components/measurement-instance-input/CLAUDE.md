# Measurement Instance Input

## Implementation Notes

- Uses `<input type="text">` with `aria-label` for accessible naming
- A measurement instance is a specific measured value (e.g. "72 kg", "98.6 F")
- Bindable `value` prop for two-way data binding via `$bindable()`
- Supports `required` and `disabled` HTML attributes
- Spreads `...restProps` on the root `<input>` element

## Props

- `label`: string (required) -- accessible name via aria-label
- `value`: string (default: "") -- bindable measurement instance value
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)

## Keyboard Interactions

- Native `<input type="text">` keyboard behavior

## ARIA

- `aria-label` set from `label` prop
