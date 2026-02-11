# Measurement System Input

A measurement system input provides a text field for entering a measurement
system name, such as "metric", "imperial", or "SI". Uses aria-label for
accessible labelling.
# Measurement System Input

## Implementation Notes

- Uses `<input type="text">` with `aria-label` for accessible naming
- A measurement system is a collection of units (e.g. "metric", "imperial", "SI")
- Bindable `value` prop for two-way data binding via `$bindable()`
- Supports `required` and `disabled` HTML attributes
- Spreads `...restProps` on the root `<input>` element

## Props

- `label`: string (required) -- accessible name via aria-label
- `value`: string (default: "") -- bindable measurement system name
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)

## Keyboard Interactions

- Native `<input type="text">` keyboard behavior

## ARIA

- `aria-label` set from `label` prop
