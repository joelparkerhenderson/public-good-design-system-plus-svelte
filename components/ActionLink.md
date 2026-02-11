# action-link

TODO NHS England
# ActionLink

## Implementation Notes

- Simple semantic `<a>` element — the simplest possible headless link component
- Supports `aria-label` override via `label` prop for screen reader accessibility
- Uses Svelte 5 `Snippet` for children content
- Passes through all additional HTML attributes via `...restProps`

## Keyboard Interactions

- Tab: Focus the link
- Enter: Activate the link (browser default)

## ARIA

- Implicit `link` role from `<a>` element
- Optional `aria-label` for screen reader text override

## References

- Inspired by NHS England action link pattern
- WAI-ARIA link role: https://www.w3.org/TR/wai-aria-1.2/#link
