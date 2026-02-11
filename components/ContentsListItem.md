# Contents List Item

A contents list item is a UI/UX component representing a single entry within a
table of contents or navigation list. It renders as a semantic list item (<li>)
that typically contains a link to a section of a page or document.

Contents list items are used as children of ordered or unordered lists within a
table of contents component. They support nesting for hierarchical document
structures where sections contain subsections. The consumer provides the content
(usually an anchor link with descriptive text) through the children snippet, and
can add aria-current attributes to indicate the currently active section.
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
