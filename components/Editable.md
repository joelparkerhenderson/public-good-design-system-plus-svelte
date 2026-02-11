# Editable

An editable component allows inline text editing. It displays a value as
plain text that can be clicked or activated to enter edit mode, where it
becomes an input field. Pressing Enter confirms, Escape cancels.
# Editable

- Display mode: `<span role="button">` with value text
- Edit mode: `<input>` with `aria-label`
- Enter confirms, Escape cancels
- `$bindable()` value and editing state
- Disabled prevents activation
