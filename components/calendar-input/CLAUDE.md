# CalendarInput

## Implementation Notes

- Wraps native `<input type="date">` for browser-native date picker
- `$bindable()` for two-way value binding
- Value format is always YYYY-MM-DD (ISO 8601)
- `aria-label` used for headless accessibility

## Props

- `value`: string (default: "", bindable) — date in YYYY-MM-DD format
- `label`: string (required) — accessible label
- `min`, `max`: string (optional) — date range constraints
- `disabled`, `required`: boolean (default: false)

## ARIA

- `aria-label` from label prop
