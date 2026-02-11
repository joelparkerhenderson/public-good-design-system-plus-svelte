# TableOfContents

## Implementation Notes

- Renders as `<nav aria-label={label}>` creating a navigation landmark
- All content provided through children snippet (typically nested lists of links)
- The `aria-label` distinguishes this nav from other navigation landmarks on the page

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- table of contents content
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None directly -- keyboard interaction handled by contained links

## ARIA

- Semantic `<nav>` creates a navigation landmark
- `aria-label` provides accessible name for the landmark
- Screen readers can jump to this landmark via navigation shortcuts
