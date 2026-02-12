# InputPassword

An input password component provides a specialized text input for entering
sensitive data such as passwords, PINs, or secret keys. It wraps the native HTML
`<input type="password">` element with accessible labeling and standard form input
props. The browser masks the entered characters by default to protect the value
from onlookers.

This headless component provides semantic structure, ARIA labeling, and bindable
value management while leaving all visual presentation to the consumer. It follows
the same patterns as the base Input component, specialized for secure text entry
with appropriate masking behavior.

## Implementation Notes

- Renders a single `<input>` element with `type="password"`
- Uses `aria-label` from the `label` prop for screen reader accessibility
- Value is a bindable string via Svelte 5 `$bindable()`
- Browser masks input characters by default for security
- Supports `minlength` and `maxlength` for password length constraints
- Supports `required` and `disabled` standard form states
- Supports `autocomplete` prop for password manager integration (e.g., "current-password", "new-password")
- Passes through additional HTML attributes via `...restProps`

## Props

- `label`: string (required) — accessible name for the input (used as aria-label)
- `value`: string (default: "") — bindable password value
- `minlength`: number (optional) — minimum number of characters required
- `maxlength`: number (optional) — maximum number of characters allowed
- `required`: boolean (default: false) — whether the input is required
- `disabled`: boolean (default: false) — whether the input is disabled
- `autocomplete`: string (optional) — hint for password manager integration
- `...restProps`: any additional HTML attributes passed to the `<input>` element

## Usage

```svelte
<InputPassword label="Password" bind:value required />
<InputPassword label="New password" bind:value minlength={8} autocomplete="new-password" />
<InputPassword label="Confirm password" bind:value required autocomplete="new-password" />
```

## Keyboard Interactions

- Tab: Move focus to the password input
- Type characters directly to enter the password (characters are masked)
- Standard text editing keys (Backspace, Delete, Ctrl+A, etc.)

## ARIA

- `aria-label` — set from the `label` prop to provide an accessible name for screen readers
- Implicit `textbox` role from the `<input>` element (with password masking behavior)

## References

- MDN input type="password": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password
- WAI-ARIA Authoring Practices — Forms: https://www.w3.org/WAI/tutorials/forms/
