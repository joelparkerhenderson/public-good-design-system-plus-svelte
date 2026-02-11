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
