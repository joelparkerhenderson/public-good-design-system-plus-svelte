# Date Field

A date field provides a labeled container for date-related input. It wraps a
native date input with a visible label and optional description or error
message for form validation.
# DateField

- `<label>` + `<input type="date">` with linked ids
- `$derived()` for generated ids
- Optional description via `aria-describedby`
- Error via `aria-invalid` + `aria-errormessage` + `role="alert"`
