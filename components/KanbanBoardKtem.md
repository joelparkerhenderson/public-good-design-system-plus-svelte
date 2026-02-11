# Kanban board item

A Kanban board item is a UI/UX component that represents a single work item or
task card within a Kanban board column. Each item typically displays summary
information about a task, such as its title, assignee, priority, or due date,
and serves as the draggable unit that moves between workflow stages. Commonly
used as a child element within Kanban board columns, the item provides a
self-contained view of a work unit that users can select, inspect, or
reposition. Effective Kanban board item design uses a listitem role to convey
its position within a list of tasks, supports an optional accessible label for
screen reader identification, and allows consumers to render any content inside
it while maintaining proper semantic structure within the broader board layout.
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
