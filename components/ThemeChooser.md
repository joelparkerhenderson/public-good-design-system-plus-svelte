# ThemeChooser

A theme chooser is a headless component that allows users to switch between different visual themes or color schemes using a native `<select>` dropdown. It is commonly used to offer light, dark, high-contrast, or other visual modes, enhancing personalization and accessibility by letting users adapt the interface to their preferences or environment.

The consumer provides `<option>` elements as children to define the available themes. The component uses `aria-label` for accessible naming and supports two-way binding on the selected theme via Svelte 5 `$bindable()`.

## Implementation Notes

- Renders a single `<select>` element containing consumer-provided theme `<option>` children
- Uses `aria-label` for accessible naming instead of a visible `<label>` element
- Uses Svelte 5 `$bindable()` for two-way binding on the `value` prop
- Uses Svelte 5 Snippet for the `children` prop to render `<option>` elements
- The consumer is responsible for applying the selected theme value to the page (e.g., setting a CSS class or data attribute on the document)
- Spreads `restProps` onto the select element for consumer extensibility

## Props

- `label`: string (required) -- accessible name applied via `aria-label`
- `value`: string (default: "") -- bindable string representing the currently selected theme
- `children`: Snippet (required) -- `<option>` elements representing available themes
- `...restProps`: unknown -- additional attributes spread onto the select element

## Usage

```svelte
<ThemeChooser label="Theme" bind:value>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</ThemeChooser>
```

```svelte
<ThemeChooser label="Color scheme" bind:value={theme}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="high-contrast">High Contrast</option>
  <option value="system">System Default</option>
</ThemeChooser>
```

## Keyboard Interactions

- Tab: Moves focus to and from the select element (native browser behavior)
- Space/Enter: Opens the dropdown list when focused (native browser behavior)
- Arrow Up/Down: Navigates through theme options (native browser behavior)
- Escape: Closes the dropdown list (native browser behavior)

## ARIA

- `aria-label={label}` -- provides an accessible name for the theme chooser since there is no visible `<label>` element

## References

- MDN select element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
- WCAG 1.4.12 Text Spacing (theme customization): https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
