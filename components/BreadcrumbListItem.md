# Breadcrumb List Item

A breadcrumb list item represents a single step in a breadcrumb trail, with aria-current="page" support for marking the current location.
# BreadcrumbListItem

## Implementation Notes

- Renders as a semantic `<li>` element for use inside a breadcrumb `<nav>` / `<ol>`
- Supports `aria-current="page"` to indicate the current/active page in the breadcrumb trail
- Content is provided through the children snippet (typically an `<a>` link or plain text)
- Passes through all additional HTML attributes via `...restProps`

## Props

- `current`: boolean (default: false) -- whether this item represents the current page
- `children`: Snippet (required) -- breadcrumb content, typically a link or text
- `...restProps`: Any additional HTML attributes passed to the `<li>` element

## Keyboard Interactions

- None directly -- keyboard interaction is handled by contained links or the parent list

## ARIA

- Semantic `<li>` provides implicit `listitem` role
- `aria-current="page"` is set when `current` is true, indicating the current location in the breadcrumb trail
