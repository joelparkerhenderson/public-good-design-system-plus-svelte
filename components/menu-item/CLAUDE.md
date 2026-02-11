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
