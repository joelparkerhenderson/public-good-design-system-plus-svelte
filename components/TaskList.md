# Task list

A task list is a UI/UX component that organizes and displays a series of tasks,
actions, or to-dos for users to complete. It is typically presented as a
checklist, where each task can be marked as completed or remain pending. Task
lists are commonly used in project management tools, to-do apps, or onboarding
processes to guide users through a sequence of actions. They help improve
productivity by breaking down complex workflows into manageable steps, offering
clear progress tracking. Effective task list design includes features like task
prioritization, due dates, and visual indicators (such as checkboxes or progress
bars) to enhance user clarity and motivation.

This component renders as an unordered list (<ul>) with role="list" and an
accessible label. The explicit role="list" ensures screen readers announce the
list semantics even when CSS removes default list styling. The consumer provides
task items as <li> children through the children snippet.
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
