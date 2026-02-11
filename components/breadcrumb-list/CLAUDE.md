# Breadcrumb

## Implementation Notes

- Renders as `<li>` containing `<a>` — designed for use inside a `<nav><ol>` parent
- `aria-current="page"` indicates the current page in the breadcrumb trail
- Separate from Breadcrumbs (the container); this is a single item

## Props

- `href`: string (required) — link URL
- `current`: boolean (default: false) — whether this is the current page
- `children`: Snippet — link text

## Keyboard Interactions

- Tab: Focus the link
- Enter: Activate the link

## ARIA

- Implicit `link` role from `<a>`
- `aria-current="page"` on the current breadcrumb

## References

- WAI-ARIA Breadcrumb Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/breadcrumb/
