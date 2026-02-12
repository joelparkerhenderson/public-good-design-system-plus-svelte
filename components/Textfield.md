# Textfield

A textfield is a UI/UX component that provides a single-line text input field. It is functionally equivalent to a text input and serves as an alternative naming convention commonly used in material design and other design systems. The component uses the native HTML `<input type="text">` element with aria-label for accessibility, and supports bindable value for two-way data binding along with standard form attributes.

Textfields are the most fundamental form input, used for names, usernames, short text entries, and any single-line text data. This component provides the same functionality as TextInput under a different name to match naming preferences in various design system conventions.

## Implementation Notes

- Renders a single `<input type="text">` element for standard text input
- Uses `$bindable()` for the `value` prop enabling two-way data binding with `bind:value`
- The `aria-label` prop provides an accessible name since there is no visible `<label>` element
- Supports rest props via `...restProps` for extensibility (e.g., `id`, `name`, `placeholder`, `class`)
- Functionally identical to TextInput; exists as a naming convention alternative

## Props

- `label`: string (required) -- accessible name applied via `aria-label`
- `value`: string (default: "") -- current text value, bindable with `bind:value`
- `required`: boolean (default: false) -- whether the field must be filled before form submission
- `disabled`: boolean (default: false) -- whether the input is disabled
- `...restProps`: spread onto the `<input>` element

## Usage

```svelte
<Textfield label="Username" bind:value />
```

```svelte
<Textfield label="Company name" bind:value={company} required />
```

## Keyboard Interactions

None beyond native text input behavior. The `<input type="text">` element supports standard text editing keys (typing, selection, clipboard operations) natively.

## ARIA

- `aria-label={label}` -- provides the accessible name for the text input since no visible label element is associated

## References

- MDN input type="text": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
