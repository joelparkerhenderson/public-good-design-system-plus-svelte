# Summary list

A summary list is a UI/UX component that presents a concise overview of key
information or data points, typically in a structured, easy-to-scan format. It
is often used to summarize important details, such as transaction history,
product features, or settings preferences, in a list-style layout. Each item in
the summary list usually includes a brief description or value, helping users
quickly grasp essential information without being overwhelmed by excessive
detail. A well-designed summary list focuses on clarity, using clear labels,
concise text, and consistent formatting to enhance readability and ensure that
users can easily find the most relevant information at a glance.
# SummaryList

## Implementation Notes

- Renders as `<dl aria-label={label}>` (description list) with children snippet
- Children typically contain `<dt>` (term) and `<dd>` (description) pairs
- Semantic `<dl>` element provides description list semantics for key-value pairs

## Props

- `label`: string (required) -- accessible label for the description list
- `children`: Snippet (required) -- list content (dt/dd pairs)

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the dl element from the label prop

## Testing

- Uses @testing-library/svelte with vitest
- Tests verify dl element, aria-label, children content, passthrough attributes
