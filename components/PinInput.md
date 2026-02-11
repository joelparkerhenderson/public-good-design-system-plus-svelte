# Pin Input

A PIN input is a specialized form component that presents a series of
single-character input fields for entering Personal Identification Numbers
(PINs), verification codes, one-time passwords (OTPs), or similar short numeric
codes. Each digit occupies its own input field, creating a segmented entry
experience that clearly communicates the expected code length to the user.

The component automatically advances focus to the next field when a digit is
entered, supports Backspace to move back to the previous field, and allows Arrow
key navigation between fields. The combined value of all digit fields is
available as a single bindable string. This pattern is commonly used in
two-factor authentication flows, SMS verification, and secure PIN entry
interfaces. Each individual input field has an accessible label indicating its
position (e.g., "Digit 1 of 4") to support screen reader users.
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
