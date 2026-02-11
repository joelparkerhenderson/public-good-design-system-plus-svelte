# KanbanBoardKtem

## Implementation Notes

- A single Kanban board item/card rendered as a `<div>` with `role="listitem"`
- Designed to be used inside a KanbanBoard column that has `role="list"`
- Supports an optional `label` prop for an accessible name via `aria-label`
- Content is provided through the children snippet
- Passes through all additional HTML attributes via `...restProps`

## Props

- `label`: string (optional) -- accessible label for the card via `aria-label`
- `children`: Snippet (required) -- card content
- `...restProps`: Any additional HTML attributes passed to the `<div>` element

## Keyboard Interactions

- None directly -- keyboard interaction depends on interactive elements within the card content

## ARIA

- `role="listitem"` -- identifies this as an item within a list container
- `aria-label` -- optional accessible name for the card, set via the `label` prop
