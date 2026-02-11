# ToolBar

## Implementation Notes

- A headless toolbar container with `role="toolbar"` and built-in keyboard navigation
- Arrow keys (Left/Right) move focus between toolbar items using roving focus
- Home/End keys jump to first/last toolbar item
- Queries focusable items via `button`, `[role='button']`, and `[tabindex]` selectors
- Uses `$state()` for the toolbar element reference and `bind:this` for DOM access
- Accessible name is set via `aria-label` from the `label` prop

## Props

- `label`: string (required) -- accessible name for the toolbar via `aria-label`
- `children`: Snippet (required) -- toolbar item elements
- `...restProps`: Any additional HTML attributes passed to the `<div>` element

## Keyboard Interactions

- ArrowRight: Move focus to next item (wraps to first)
- ArrowLeft: Move focus to previous item (wraps to last)
- Home: Move focus to first item
- End: Move focus to last item
- Tab: Enter/exit the toolbar

## ARIA

- `role="toolbar"` -- identifies the container as a toolbar widget
- `aria-label` -- provides the accessible name for the toolbar
