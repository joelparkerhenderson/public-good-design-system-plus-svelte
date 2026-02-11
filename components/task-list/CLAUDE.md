# TaskList

## Implementation Notes

- Renders as `<ul role="list" aria-label={label}>` for task list semantics
- Explicit `role="list"` ensures list semantics when CSS removes default styling
- All task content provided through children snippet (should be `<li>` elements)
- Consumers can use checkboxes within `<li>` for completable tasks

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- task items (should be `<li>` elements)
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None directly -- standard list navigation by screen readers

## ARIA

- `role="list"` explicitly marks as a list
- `aria-label` provides accessible name for the list
- Screen readers announce the list with its label and item count
