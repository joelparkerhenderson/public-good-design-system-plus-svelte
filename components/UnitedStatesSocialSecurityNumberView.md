# United States Social Security Number View

A United States Social Security Number (SSN) view is a display component for
showing a 9-digit SSN in a read-only format. The SSN is issued by the Social
Security Administration and serves as a national identifier for taxation, credit
reporting, and various government and private-sector purposes.

This component renders the SSN as an inline span element with an accessible
label, making it suitable for use in personal records, confirmation screens,
account summaries, or any context where an SSN needs to be displayed but not
edited. The accessible label ensures screen readers can announce the purpose of
the displayed number.
# UnitedStatesSocialSecurityNumberView

## Implementation Notes

- Renders as `<span aria-label={label}>` for inline display
- Displays the SSN value as text content
- Read-only display component (not an input)

## Props

- `label`: string (required) -- accessible label via aria-label
- `value`: string (default: "") -- the SSN to display
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None -- this is a display-only component

## ARIA

- `aria-label` provides accessible name from label prop
- Screen readers announce the label followed by the number value
