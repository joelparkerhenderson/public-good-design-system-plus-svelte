# DateRangePicker

A date range picker is a component that combines paired date inputs with picker semantics, enabling users to select a start date and end date for defining a time span. Commonly used in hotel booking systems, travel search forms, event scheduling interfaces, and analytics dashboards, the date range picker provides a structured way to capture date spans with clear labels for each boundary.

This headless component renders a `<fieldset>` containing two native `<input type="date">` elements, each with its own accessible label. It is functionally similar to DateRange but conveys picker-oriented semantics. Both start and end values support two-way binding for reactive state management.

## Implementation Notes

- Renders a `<fieldset>` to semantically group the paired date inputs
- Uses two native `<input type="date">` elements for built-in browser date selection
- Both `start` and `end` use `$bindable()` for two-way binding
- Each input has its own `aria-label` for individual identification
- Accepts `...restProps` for forwarding additional attributes to the fieldset

## Props

- `label`: string (required) -- accessible group label applied to the fieldset via `aria-label`
- `startLabel`: string (required) -- accessible label for the start date input
- `endLabel`: string (required) -- accessible label for the end date input
- `start`: string (default: "") -- start date value in YYYY-MM-DD format; bindable
- `end`: string (default: "") -- end date value in YYYY-MM-DD format; bindable

## Usage

```svelte
<DateRangePicker
    label="Stay"
    startLabel="Check-in"
    endLabel="Check-out"
    bind:start
    bind:end
/>
```

## Keyboard Interactions

- Tab: Move focus between the start and end date inputs
- Up Arrow / Down Arrow: Increment/decrement the focused date segment
- Left Arrow / Right Arrow: Move between date segments within an input

(These are provided by the native `<input type="date">` elements.)

## ARIA

- `aria-label={label}` on `<fieldset>` -- provides an accessible group name for the date range picker
- `aria-label={startLabel}` on the start input -- identifies the start date field
- `aria-label={endLabel}` on the end input -- identifies the end date field

## References

- MDN input type="date": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
- MDN fieldset element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
