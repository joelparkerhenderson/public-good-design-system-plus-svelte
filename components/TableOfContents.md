# Table of contents

A table of contents (TOC) is a UI/UX component that provides a structured,
hierarchical overview of the content on a page or within a document, typically
listing section headings as clickable links. It helps users quickly navigate to
specific parts of the content without scrolling, improving accessibility and
ease of use -- especially in long-form pages like articles, documentation, or
reports. A well-designed TOC enhances the user experience by offering clear
orientation, reducing cognitive load, and enabling faster information retrieval.
It is often presented as a sidebar, dropdown, or sticky element that stays
visible as users scroll through the content.

This component renders as a semantic <nav> element with an accessible label,
creating a navigation landmark that screen readers can identify and announce.
The consumer provides the content structure (typically a nested list of links)
through the children snippet.
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
