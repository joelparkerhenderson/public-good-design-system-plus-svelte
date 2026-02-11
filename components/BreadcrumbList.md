# Breadcrumb

A breadcrumb is a single item within a breadcrumb trail navigation. It
represents one step in the hierarchical path from the root page to the current
page. Each breadcrumb is a link that allows the user to navigate back to that
level of the hierarchy.

When the breadcrumb represents the current page, it is marked with
`aria-current="page"` so screen readers can announce which item in the trail
corresponds to the active page.

This component renders as a list item (`<li>`) containing an anchor (`<a>`),
designed to be used within a parent breadcrumbs navigation container.
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
