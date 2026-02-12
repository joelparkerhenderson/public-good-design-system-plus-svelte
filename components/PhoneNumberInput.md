# PhoneNumberInput

PhoneNumberInput is a headless component that wraps a native `<input type="tel">` element with accessible labelling and `autocomplete="tel"` for browser autofill support. It provides a bindable value for telephone number entry.

This component is useful for contact forms, registration flows, account settings, or any interface that collects phone numbers. The `type="tel"` attribute triggers an appropriate telephone keypad on mobile devices, improving the input experience. The `autocomplete="tel"` attribute enables browser autofill of stored phone numbers.

## Implementation Notes

- Renders a native `<input type="tel">` element
- Uses `aria-label` for an accessible name describing the input purpose
- Includes `autocomplete="tel"` for browser autofill of phone numbers
- The `value` prop uses `$bindable("")` for two-way binding
- Supports `required` and `disabled` boolean states
- Spreads `restProps` onto the input for consumer customization (e.g., `id`, `name`, `pattern`, `placeholder`)
- Svelte 5 pattern: `$bindable` for the value prop

## Props

- `label`: string (required) -- accessible name for the input via `aria-label`
- `value`: string (default: `""`) -- current phone number value; bindable with `bind:value`
- `required`: boolean (default: `false`) -- whether the input is required
- `disabled`: boolean (default: `false`) -- whether the input is disabled
- `...restProps`: unknown -- additional attributes spread onto the `<input>` element

## Usage

```svelte
<PhoneNumberInput label="Phone" bind:value />
```

## Keyboard Interactions

None at the component level. Keyboard behavior is handled natively by the browser's telephone input implementation.

## ARIA

- `aria-label={label}` -- provides an accessible name describing the purpose of the phone number input

## References

- HTML tel input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel
