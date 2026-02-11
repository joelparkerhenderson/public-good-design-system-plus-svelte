# United Kingdom National Health Service Number View

A United Kingdom National Health Service (NHS) number view is a display
component for showing a 10-digit NHS patient identifier in a read-only format.
The NHS number uniquely identifies individuals registered with the National
Health Service in England, Wales, and the Isle of Man.

This component renders the NHS number as an inline span element with an
accessible label, making it suitable for use in patient records, summaries,
confirmation screens, or any context where an NHS number needs to be displayed
but not edited. The accessible label ensures screen readers can announce the
purpose of the displayed number.
# UnitedKingdomNationalHealthServiceNumberView

## Implementation Notes

- Renders as `<span aria-label={label}>` for inline display
- Displays the NHS number value as text content
- Read-only display component (not an input)

## Props

- `label`: string (required) -- accessible label via aria-label
- `value`: string (default: "") -- the NHS number to display
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None -- this is a display-only component

## ARIA

- `aria-label` provides accessible name from label prop
- Screen readers announce the label followed by the number value
