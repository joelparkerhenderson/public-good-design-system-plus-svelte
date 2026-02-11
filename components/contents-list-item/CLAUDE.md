# ContentsListItem

## Implementation Notes

- Renders as a semantic `<li>` element for use in contents/navigation lists
- All content is provided through the children snippet (typically links)
- Supports `aria-current="page"` for indicating the current page
- Should be placed inside a `<ul>` or `<ol>` parent element

## Props

- `children`: Snippet -- list item content (typically a link)
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None directly -- keyboard interaction is handled by contained links or the parent list

## ARIA

- Semantic `<li>` provides implicit listitem role
- Supports `aria-current` for indicating active/current item
