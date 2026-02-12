# DatePicker

A date picker provides a lightweight wrapper around the native `<input type="date">` element with accessible labelling. It is useful in forms, booking systems, and scheduling tools where users need to select a specific date. The component supports minimum and maximum date constraints to restrict selectable ranges.

Unlike the DateField component, DatePicker renders only the bare input element without a visible label, description, or error handling. It uses `aria-label` for accessibility, making it suitable for compact UI contexts where visible labels are provided externally or where space is limited.

## Implementation Notes

- Renders a single `<input type="date">` element
- Uses `aria-label` for accessible naming (no visible label element)
- Uses `$bindable()` for two-way binding on the `value` prop
- Supports `min` and `max` props for date range constraints
- Spreads `restProps` onto the input for consumer customization

## Props

- `label`: string (required) -- accessible name applied via `aria-label`
- `value`: string (default: "") -- current date value in YYYY-MM-DD format, bindable via `bind:value`
- `required`: boolean (default: false) -- whether the input is required
- `disabled`: boolean (default: false) -- whether the input is disabled
- `min`: string (default: undefined) -- minimum selectable date in YYYY-MM-DD format
- `max`: string (default: undefined) -- maximum selectable date in YYYY-MM-DD format

## Usage

```svelte
<DatePicker label="Start date" bind:value />
```

```svelte
<DatePicker label="Departure" bind:value min="2025-01-01" max="2025-12-31" required />
```

## Keyboard Interactions

None beyond native `<input type="date">` keyboard behavior, which varies by browser.

## ARIA

- `aria-label={label}` -- provides an accessible name for the date input

## References

- MDN input type="date": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
