# InputDate

An input date component provides a specialized text input for entering date
values. It wraps the native HTML `<input type="date">` element with accessible
labeling and standard form input props. Users can type dates directly or use the
browser's built-in date picker to select a value, depending on browser support.

This headless component provides semantic structure, ARIA labeling, and bindable
value management while leaving all visual presentation to the consumer. It follows
the same patterns as the base Input component, specialized for date entry with
appropriate type, min, max, and step constraints.

## Implementation Notes

- Renders a single `<input>` element with `type="date"`
- Uses `aria-label` from the `label` prop for screen reader accessibility
- Value is a bindable string in `YYYY-MM-DD` format via Svelte 5 `$bindable()`
- Supports `min` and `max` props to constrain the allowable date range
- Supports `step` prop to control date increment granularity (in days)
- Supports `required` and `disabled` standard form states
- Passes through additional HTML attributes via `...restProps`

## Props

- `label`: string (required) — accessible name for the input (used as aria-label)
- `value`: string (default: "") — bindable date value in YYYY-MM-DD format
- `min`: string (optional) — minimum allowable date in YYYY-MM-DD format
- `max`: string (optional) — maximum allowable date in YYYY-MM-DD format
- `step`: number | string (optional) — step increment in days
- `required`: boolean (default: false) — whether the input is required
- `disabled`: boolean (default: false) — whether the input is disabled
- `...restProps`: any additional HTML attributes passed to the `<input>` element

## Usage

```svelte
<InputDate label="Birth date" bind:value />
<InputDate label="Start date" bind:value min="2024-01-01" max="2024-12-31" />
<InputDate label="Appointment date" bind:value required />
```

## Keyboard Interactions

- Tab: Move focus to the date input
- Arrow keys: Navigate within the date picker (browser-dependent)
- Enter: Confirm selection in date picker (browser-dependent)
- Escape: Close date picker dropdown (browser-dependent)

## ARIA

- `aria-label` — set from the `label` prop to provide an accessible name for screen readers
- Implicit `textbox` role from the `<input>` element (with date-specific browser UI)

## References

- MDN input type="date": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
- WAI-ARIA Authoring Practices — Date Picker: https://www.w3.org/WAI/ARIA/apd/patterns/dialog-modal/
