# PinInput

## Implementation Notes

- Renders as `<div role="group">` containing individual single-digit `<input>` elements
- Uses `$state()` for internal digits array and `$bindable()` for combined value
- Auto-focuses next input on digit entry
- Backspace in empty input moves focus to previous input
- ArrowLeft/ArrowRight navigate between inputs
- Only accepts numeric characters (0-9)

## Props

- `label`: string (required) -- accessible label for the group via aria-label
- `length`: number (default: 4) -- number of digit inputs
- `value`: string (default: "") -- bindable combined string of all digits
- `disabled`: boolean (default: false) -- disables all inputs
- `...restProps`: Any additional HTML attributes on the group div

## Keyboard Interactions

- Digit entry: enters value and auto-focuses next input
- Backspace: clears current or moves to previous input
- ArrowLeft: focuses previous input
- ArrowRight: focuses next input
- Tab: standard tab navigation in/out of the group

## ARIA

- `role="group"` with `aria-label` on the container
- Each input has `aria-label="Digit X of Y"` for positional context
- `inputmode="numeric"` for numeric keyboard on mobile
