# Checkbox

A checkbox component allows users to select one or more options from a set by toggling individual boxes on or off. Built on the native `<input type="checkbox">` element wrapped in a `<label>`, it provides full keyboard and assistive technology support out of the box. The component supports checked, unchecked, and indeterminate states, making it suitable for forms, settings, filters, preference menus, and select-all patterns.

The `checked` prop uses Svelte 5 `$bindable()` for two-way binding, allowing parent components to reactively track and control the checkbox state.

## Implementation Notes

- Wraps `<input type="checkbox">` inside a `<label>` element for click-to-toggle behavior
- Uses `$bindable()` on the `checked` prop for two-way binding with the parent component
- Supports the `indeterminate` state for "select all" or partial selection patterns
- Native checkbox provides implicit `checkbox` role and keyboard behavior
- Spreads `...restProps` on the root `<label>` element for consumer customization

## Props

- `checked`: boolean (default: false, bindable) -- whether the checkbox is checked
- `indeterminate`: boolean (default: false) -- whether the checkbox is in an indeterminate state
- `label`: string (required) -- visible text label for the checkbox
- `disabled`: boolean (default: false) -- whether the checkbox is disabled
- `required`: boolean (default: false) -- whether the checkbox is required for form submission
- `name`: string (optional) -- form field name
- `id`: string (optional) -- element identifier
- `value`: string (optional) -- form submission value
- `describedby`: string (optional) -- ID of an element that describes this checkbox, mapped to aria-describedby

## Usage

```svelte
<Checkbox label="Accept terms" bind:checked={accepted} />
<Checkbox label="Subscribe" name="subscribe" checked />
<Checkbox label="Select all" indeterminate />
```

## Keyboard Interactions

- Space: Toggle the checkbox on or off (native browser behavior)
- Tab: Move focus to the checkbox (native browser behavior)

## ARIA

- Implicit `checkbox` role from `<input type="checkbox">`
- `aria-checked` -- managed natively by the browser based on checked state
- `aria-describedby` -- set from the `describedby` prop to reference supplementary descriptions
- `required` attribute -- indicates the checkbox must be checked before form submission
