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
