# InputNumber

An input number component provides a specialized text input for entering numeric
values. It wraps the native HTML `<input type="number">` element with accessible
labeling and standard form input props. Users can type numbers directly or use
browser-provided increment/decrement controls (spinner buttons) to adjust the
value.

This headless component provides semantic structure, ARIA labeling, and bindable
value management while leaving all visual presentation to the consumer. It follows
the same patterns as the base Input component, specialized for numeric entry with
appropriate min, max, and step constraints.

## Implementation Notes

- Renders a single `<input>` element with `type="number"`
- Uses `aria-label` from the `label` prop for screen reader accessibility
- Value is a bindable string via Svelte 5 `$bindable()` (string to preserve empty state)
- Supports `min` and `max` props to constrain the allowable numeric range
- Supports `step` prop to control increment/decrement granularity
- Supports `required` and `disabled` standard form states
- Passes through additional HTML attributes via `...restProps`

## Props

- `label`: string (required) — accessible name for the input (used as aria-label)
- `value`: string (default: "") — bindable numeric value as string
- `min`: number | string (optional) — minimum allowable value
- `max`: number | string (optional) — maximum allowable value
- `step`: number | string (optional) — step increment for the value
- `required`: boolean (default: false) — whether the input is required
- `disabled`: boolean (default: false) — whether the input is disabled
- `...restProps`: any additional HTML attributes passed to the `<input>` element

## Usage

```svelte
<InputNumber label="Quantity" bind:value />
<InputNumber label="Age" bind:value min="0" max="150" step="1" />
<InputNumber label="Price" bind:value min="0" step="0.01" required />
```

## Keyboard Interactions

- Tab: Move focus to the number input
- Up Arrow: Increment the value by one step
- Down Arrow: Decrement the value by one step
- Type digits directly to enter a value

## ARIA

- `aria-label` — set from the `label` prop to provide an accessible name for screen readers
- Implicit `spinbutton` role from the `<input type="number">` element

## References

- MDN input type="number": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
- WAI-ARIA spinbutton role: https://www.w3.org/TR/wai-aria-1.2/#spinbutton
