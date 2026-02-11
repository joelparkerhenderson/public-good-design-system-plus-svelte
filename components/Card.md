# Card

A card is a UI/UX component that groups related content and actions into a
self-contained, visually distinct container, making it easy to browse and
compare items. Commonly used for product listings, user profiles, article
previews, media galleries, and dashboard widgets, cards present a digestible
summary of information that can include headings, text, images, and interactive
elements. Cards help organize content into scannable units, allowing users to
quickly identify relevant items and drill down for more detail. Effective card
design ensures clear content hierarchy through headings and semantic structure,
supports optional linking for navigation, and provides accessible labeling so
that screen reader users can understand each card's purpose and context.
# Card

## Implementation Notes

- Uses `<article>` for standalone content grouping
- Heading level configurable (2-6) for document outline
- Heading optionally wraps in `<a>` when href provided

## Props

- `heading`: string (optional)
- `headingLevel`: 2-6 (default: 3)
- `href`: string (optional) — makes heading a link
- `label`: string (optional) — aria-label
- `children`: Snippet

## ARIA

- Implicit `article` role
- Optional `aria-label`
