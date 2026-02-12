# CalendarInput

A calendar input wraps the native HTML `<input type="date">` element, providing accessible labeling and ARIA attributes for date selection. It allows users to select a date via the browser's built-in date picker interface.

The component uses `$bindable()` for two-way value binding in YYYY-MM-DD (ISO 8601) format. It supports min/max date range constraints, required/disabled states, and form integration through name and id props. Date display format follows the user's browser locale settings automatically.

## Implementation Notes

- Wraps native `<input type="date">` for browser-native date picker behavior
- `$bindable()` for two-way value binding in YYYY-MM-DD format
- Value format is always YYYY-MM-DD (ISO 8601)
- `aria-label` used for headless accessibility labeling
- Supports min/max date range constraints
- Supports `name` and `id` for form integration
- Spreads `...restProps` on the root `<input>` element

## Props

- `value`: string (default: "", bindable) -- date in YYYY-MM-DD format
- `label`: string (required) -- accessible label via `aria-label`
- `min`: string (optional) -- minimum selectable date in YYYY-MM-DD format
- `max`: string (optional) -- maximum selectable date in YYYY-MM-DD format
- `disabled`: boolean (default: false) -- whether the input is disabled
- `required`: boolean (default: false) -- whether the input is required
- `name`: string (optional) -- form field name
- `id`: string (optional) -- element ID
- `...restProps`: Any additional HTML attributes passed to the `<input>` element

## Usage

```svelte
<CalendarInput label="Start date" bind:value={startDate} />
<CalendarInput label="Birthday" value="1990-01-15" min="1900-01-01" max="2025-12-31" />
```

## Keyboard Interactions

- Browser-native date picker keyboard interactions (varies by browser)
- Tab: Focus the input
- Arrow keys: Navigate date segments within the picker

## ARIA

- `aria-label` -- set from the `label` prop to provide an accessible name
