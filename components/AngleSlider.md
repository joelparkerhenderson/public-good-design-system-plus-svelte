# Angle Slider

An angle slider is a specialized range input component for selecting an angle
value, typically between 0 and 360 degrees. Built on the native HTML range input,
it provides semantic ARIA slider attributes including value text that conveys
the angle with a degree symbol to screen readers.

Common uses include rotation controls, compass direction selectors, gradient
angle pickers, and any interface where a circular or angular value needs to be
selected by the user. The step property allows snapping to common increments
like 15° or 45°.
# AngleSlider

## Implementation Notes

- Built on native `<input type="range">` for inherent slider behavior
- Uses `$bindable()` for two-way value binding
- `aria-valuetext` provides human-readable angle text (e.g., "90°") for screen readers
- Customizable suffix via `valueTextSuffix` prop (default "°", can be " degrees" etc.)
- `$derived()` computes valueText reactively from value and suffix

## Props

- `value`: number (default: 0, bindable) — current angle in degrees
- `min`: number (default: 0) — minimum angle
- `max`: number (default: 360) — maximum angle
- `step`: number (default: 1) — step increment
- `label`: string (required) — accessible label
- `disabled`: boolean (default: false)
- `valueTextSuffix`: string (default: "°") — suffix for aria-valuetext

## Keyboard Interactions

- Arrow Right/Up: Increase value by step
- Arrow Left/Down: Decrease value by step
- Home: Set to minimum
- End: Set to maximum
- (All handled natively by input[type="range"])

## ARIA

- `role="slider"` (implicit from input[type="range"])
- `aria-label` from label prop
- `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- `aria-valuetext` for human-readable angle

## References

- WAI-ARIA Slider Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/slider/
