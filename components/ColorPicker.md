# ColorPicker

A color picker is a component that allows users to select a color value from a visual interface. Commonly used in design tools, theme customizers, form builders, and creative applications, the color picker enables intuitive color selection without requiring users to manually enter color codes. It provides real-time feedback as users interact with it, displaying the selected color alongside its hex value.

This headless component wraps the native `<input type="color">` element with an accessible label and two-way binding of the color value. It supports disabled state and delegates all visual presentation to the browser's built-in color picker UI.

## Implementation Notes

- Uses a native `<input type="color">` element for built-in browser color selection
- Supports `$bindable()` for two-way binding of the `value` prop
- Default value is "#000000" (black)
- Native input provides the color picker UI (swatch, spectrum, etc.)
- Accepts `...restProps` for forwarding additional attributes to the input element

## Props

- `label`: string (required) -- accessible name applied via `aria-label`
- `value`: string (default: "#000000") -- current color value as a hex string; bindable
- `disabled`: boolean (default: false) -- whether the color picker is disabled

## Usage

```svelte
<ColorPicker label="Background color" bind:value />
```

```svelte
<ColorPicker label="Text color" bind:value disabled />
```

## Keyboard Interactions

- Tab: Move focus to/from the color input
- Enter / Space: Open the browser's native color picker dialog

(These are provided by the native `<input type="color">` element.)

## ARIA

- `aria-label={label}` -- provides an accessible name for the color input

## References

- MDN input type="color": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
