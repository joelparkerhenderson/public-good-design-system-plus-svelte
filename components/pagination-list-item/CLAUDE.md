# PaginationListItem

## Implementation Notes

- Renders as a semantic `<li>` element for use inside a PaginationList `<ul>` / `<nav>`
- Content is provided through the children snippet, typically a link or button for a page number
- Passes through all additional HTML attributes via `...restProps`
- Consumer is responsible for adding `aria-current="page"` or `aria-label` as needed on the child link

## Props

- `children`: Snippet (required) -- item content, typically a link (e.g., `<a href="/page/2">2</a>`)
- `...restProps`: Any additional HTML attributes passed to the `<li>` element

## Keyboard Interactions

- None directly -- keyboard interaction is handled by contained links or buttons

## ARIA

- Semantic `<li>` provides implicit `listitem` role
- Consumer should set `aria-current="page"` on the active page link within the item
