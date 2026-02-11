# TaskBar

## Implementation Notes

- A headless task bar container using `role="toolbar"` for a row of task action buttons
- Accessible name is set via `aria-label` from the `label` prop
- Content is provided through the children snippet, typically TaskBarItem components or buttons
- Passes through all additional HTML attributes via `...restProps`
- Does not implement arrow key navigation itself (unlike ToolBar); consumers can add their own

## Props

- `label`: string (required) -- accessible name for the toolbar via `aria-label`
- `children`: Snippet (required) -- task bar item elements
- `...restProps`: Any additional HTML attributes passed to the `<div>` element

## Keyboard Interactions

- Tab: Focus moves to the first focusable item within the toolbar

## ARIA

- `role="toolbar"` -- identifies the container as a toolbar widget
- `aria-label` -- provides the accessible name for the toolbar
