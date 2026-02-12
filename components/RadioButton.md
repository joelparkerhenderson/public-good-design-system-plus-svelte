# RadioButton

A radio button is a UI component that allows users to select one option from a predefined set of mutually exclusive choices. The RadioButton component renders a native `<input type="radio">` inside a wrapping `<label>` element, providing click-to-select behavior where clicking anywhere on the label text selects the radio button.

Radio buttons are used in forms and settings where only one option from a group can be selected at a time. The `name` prop groups radio buttons together so that selecting one automatically deselects the others in the same group. The wrapping label ensures the accessible name is properly associated with the input.

## Implementation Notes

- Renders a `<label>` element wrapping an `<input type="radio">` and the label text
- The wrapping `<label>` provides implicit association, so no `for`/`id` pairing is needed
- The `name` prop groups radio buttons for mutual exclusivity
- The `value` prop identifies this specific option within the group
- Supports `checked` and `disabled` states
- Rest props are spread onto the `<label>` element
- The label text is rendered after the `<input>` element

## Props

- `label`: string (required) -- visible label text displayed next to the radio button; also serves as the accessible name
- `name`: string (optional) -- the radio group name; all radio buttons with the same name are mutually exclusive
- `value`: string (optional) -- the value submitted when this radio button is selected
- `checked`: boolean (default: false) -- whether this radio button is currently selected
- `disabled`: boolean (default: false) -- whether the radio button is disabled
- `...restProps`: unknown -- additional attributes spread onto the `<label>` element

## Usage

```svelte
<!-- Radio button group -->
<RadioButton label="Small" name="size" value="small" />
<RadioButton label="Medium" name="size" value="medium" checked />
<RadioButton label="Large" name="size" value="large" />

<!-- Disabled radio button -->
<RadioButton label="Unavailable option" name="choice" value="none" disabled />
```

## Keyboard Interactions

- Tab: Moves focus into and out of the radio group (focuses the selected radio, or the first if none selected)
- Arrow Up / Arrow Left: Moves focus to and selects the previous radio button in the group
- Arrow Down / Arrow Right: Moves focus to and selects the next radio button in the group
- Space: Selects the focused radio button if not already selected

## ARIA

- The native `<input type="radio">` element has an implicit `role="radio"`
- The wrapping `<label>` element provides the accessible name via its text content
- `checked` state is conveyed natively by the browser to assistive technology
- `disabled` state is conveyed natively by the browser to assistive technology
- The `name` attribute creates an implicit radio group for keyboard navigation

## References

- WAI-ARIA Radio Group Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/radio/
- HTML input type="radio": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
