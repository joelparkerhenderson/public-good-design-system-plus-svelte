# Measurement Unit Input

## Implementation Notes

- Uses `<input type="text">` with `aria-label` for accessible naming
- A measurement unit is a standard quantity (e.g. "kg", "lb", "cm", "inch")
- Bindable `value` prop for two-way data binding via `$bindable()`
- Supports `required` and `disabled` HTML attributes
- Spreads `...restProps` on the root `<input>` element

## Props

- `label`: string (required) -- accessible name via aria-label
- `value`: string (default: "") -- bindable measurement unit
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)

## Keyboard Interactions

- Native `<input type="text">` keyboard behavior

## ARIA

- `aria-label` set from `label` prop
