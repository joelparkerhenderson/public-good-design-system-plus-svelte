# Table

A table is a UI/UX component used to display structured data in rows and
columns, making it easy to compare and analyze information at a glance. Commonly
used for things like reports, schedules, product lists, or dashboards, tables
organize content into headers and cells, often with features like sorting,
filtering, pagination, and inline editing to enhance usability. A well-designed
table improves data readability, supports efficient decision-making, and allows
users to quickly find patterns or specific details. Tables are essential in
data-heavy interfaces, offering both clarity and functionality in a compact
format.
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
