# Context Menu Item

A context menu item is a UI/UX component representing a single action or option
within a context menu (also known as a right-click menu). Context menus appear
in response to a secondary interaction (typically right-click on desktop or
long-press on mobile) and provide contextually relevant actions for the element
that was interacted with.

This component renders as a div with role="menuitem" and tabindex="-1",
following the WAI-ARIA menu pattern. The tabindex="-1" removes the item from
the normal tab order so that the parent menu can manage focus
programmatically using Arrow keys. The consumer provides the menu item content
(action label, keyboard shortcut hint, etc.) through the children snippet.
Context menu items should be placed within a container with role="menu".
# ContextMenuItem

## Implementation Notes

- Renders as `<div role="menuitem" tabindex="-1">` for context menu items
- tabindex="-1" supports roving focus managed by the parent menu
- Should be placed inside a `role="menu"` container
- Focus management (ArrowUp/ArrowDown) is handled by the parent menu component

## Props

- `children`: Snippet -- menu item content
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- Focus is managed by the parent menu using ArrowUp/ArrowDown
- Enter or Space activates the menu item (handled by consumer event listeners)

## ARIA

- `role="menuitem"` identifies this as a menu item
- `tabindex="-1"` for roving focus management
- Supports `aria-disabled` for disabled state
- Supports `aria-keyshortcuts` for keyboard shortcut hints
