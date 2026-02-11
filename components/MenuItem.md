# Menu Item

A menu item is a UI/UX component representing a single action or option within
a menu, dropdown menu, or navigation menu. Menus are used throughout
applications to organize and present actions, settings, and navigation options
in a structured, discoverable format.

This component renders as a div with role="menuitem" and tabindex="-1",
following the WAI-ARIA menu pattern. The tabindex="-1" removes the item from
the normal tab order so that the parent menu can manage focus
programmatically using Arrow keys. The consumer provides the menu item content
(action label, icon, keyboard shortcut hint, etc.) through the children snippet.
Menu items should be placed within a container with role="menu" or
role="menubar". Items that open submenus can use aria-haspopup and
aria-expanded attributes.
# MenuItem

## Implementation Notes

- Renders as `<div role="menuitem" tabindex="-1">` for menu items
- tabindex="-1" supports roving focus managed by the parent menu
- Should be placed inside a `role="menu"` or `role="menubar"` container
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
- Supports `aria-haspopup` for submenu triggers
- Supports `aria-expanded` for items with open/closed submenus
