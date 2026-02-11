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
