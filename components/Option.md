# Option

An option component wraps the native HTML `<option>` element for use inside
`<select>` elements. It accepts a value prop and renders children as the
visible option label text.
# Option

## Implementation Notes

- Wraps native `<option>` element with Svelte 5 runes
- Uses `children` Snippet for label text content
- Supports `selected` and `disabled` HTML attributes
- Spreads `...restProps` on the root `<option>` element

## Props

- `value`: string (required) -- the option value
- `selected`: boolean (default: false) -- whether pre-selected
- `disabled`: boolean (default: false) -- whether disabled
- `children`: Snippet (required) -- option label text

## Keyboard Interactions

- Native `<option>` keyboard behavior (managed by parent `<select>`)

## ARIA

- Native `<option>` provides built-in accessibility via the select element

## References

- HTML option element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
