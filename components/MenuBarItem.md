# Menu Bar Item

A menu bar item is a single interactive item within a menu bar, using the ARIA menuitem role for keyboard navigation and screen reader support.
# MenuBarItem

## Implementation Notes

- A single item within a MenuBar, rendered as a `<div>` with `role="menuitem"`
- Uses `tabindex="-1"` so focus is managed programmatically by the parent MenuBar
- Content is provided through the children snippet
- Passes through all additional HTML attributes via `...restProps`
- Designed to be placed inside a MenuBar container with `role="menubar"`

## Props

- `children`: Snippet (required) -- content of the menu bar item
- `...restProps`: Any additional HTML attributes passed to the `<div>` element

## Keyboard Interactions

- Arrow keys: Focus movement is managed by the parent MenuBar
- Enter / Space: Activate the menu item (consumer-provided handler)
- `tabindex="-1"` enables programmatic focus from parent keyboard navigation

## ARIA

- `role="menuitem"` -- identifies this as an item within a menubar
- `tabindex="-1"` -- removed from tab order; focus managed by parent MenuBar
