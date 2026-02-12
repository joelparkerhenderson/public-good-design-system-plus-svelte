# EmailAddressInput

An email address input wraps a native `<input type="email">` with accessible labeling and autofill support. Used for collecting email addresses in forms, it provides built-in browser validation for email format and includes `autocomplete="email"` to enable browser autofill of saved email addresses.

This component supports placeholder text, required field validation, and disabled state, making it suitable for registration forms, contact forms, and newsletter signups.

## Implementation Notes

- Renders a native `<input type="email">` element for browser-native email validation
- Uses `bind:value` with `$bindable()` for two-way binding of the email string
- Sets `autocomplete="email"` to enable browser autofill for email fields
- Provides `aria-label` for screen reader accessibility
- Supports `placeholder`, `required`, and `disabled` for standard form behavior
- Spreads `restProps` for consumer customization

## Props

- `label`: string (required) -- accessible name via `aria-label`
- `value`: string (default: `""`) -- current email value, bindable via `bind:value`
- `placeholder`: string (default: `undefined`) -- placeholder text shown when empty
- `required`: boolean (default: `false`) -- whether the field is required
- `disabled`: boolean (default: `false`) -- whether the field is disabled
- `...restProps`: unknown -- additional attributes spread onto the `<input>`

## Usage

```svelte
<EmailAddressInput label="Email" bind:value />
```

## Keyboard Interactions

None -- keyboard behavior is provided by the browser-native email input.

## ARIA

- `aria-label="..."` -- provides an accessible name for the email input since it has no visible `<label>` element

## References

- MDN `<input type="email">`: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
