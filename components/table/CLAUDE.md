# Table

## Implementation Notes

- Renders as `<table aria-label={label}>` for semantic table structure
- All content (thead, tbody, tfoot, caption, etc.) provided through children snippet
- Consumers responsible for proper th scope attributes and table structure

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- table content
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None directly -- standard table navigation by screen readers

## ARIA

- `aria-label` provides accessible name for the table
- Semantic `<table>` element for proper table semantics
- Consumers should use `<th scope="col">` and `<th scope="row">` for headers
