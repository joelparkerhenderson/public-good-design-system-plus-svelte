# HintText

HintText is a headless component that displays supplementary descriptive text, typically used to provide guidance or additional context for form controls. It renders a `<span>` element that can be linked to an input via the `aria-describedby` attribute, ensuring assistive technologies announce the hint when the associated control receives focus.

This component is useful for displaying instructions beneath form fields (e.g., "Full legal name as on passport"), clarifying expected input formats, or providing contextual help. The optional `id` prop enables the `aria-describedby` association pattern with form controls.

## Implementation Notes

- Renders a `<span>` element containing the children snippet content
- Accepts an optional `id` prop to enable `aria-describedby` linking from form controls
- Accepts a `children` Snippet for flexible text content
- Spreads `restProps` onto the span for consumer customization
- Svelte 5 pattern: standard `$props()` destructuring with typed props

## Props

- `id`: string (optional) -- element ID for linking via `aria-describedby` on a form control
- `children`: Snippet (required) -- text content to display as the hint
- `...restProps`: unknown -- additional attributes spread onto the `<span>` element

## Usage

```svelte
<HintText id="name-hint">Full legal name as on passport</HintText>
<input aria-describedby="name-hint" />
```

## Keyboard Interactions

None -- this component is a passive text element with no interactive behavior.

## ARIA

- `id` attribute enables linking via `aria-describedby` on associated form controls, so that screen readers announce the hint text when the control is focused

## References

- WAI-ARIA aria-describedby: https://www.w3.org/TR/wai-aria-1.2/#aria-describedby
- Accessible Form Hints: https://www.w3.org/WAI/tutorials/forms/instructions/
