# SlideOutDrawer

## Implementation Notes

- Renders as `<div role="dialog" aria-label={label} aria-modal="true">` when open
- Conditionally rendered with `{#if open}` -- not in DOM when closed
- The `open` prop is `$bindable()` for two-way binding
- Escape key closes the drawer via keydown handler
- `tabindex="-1"` allows the dialog div to receive focus (needed for jsdom keyboard events)

## Props

- `label`: string (required) -- accessible label for the dialog
- `open`: boolean (default: false) -- whether the drawer is visible, bindable
- `children`: Snippet (required) -- drawer content

## Keyboard Interactions

- Escape closes the drawer

## ARIA

- `role="dialog"` for modal dialog semantics
- `aria-label` from the label prop
- `aria-modal="true"` indicates modal behavior
- `tabindex="-1"` for programmatic focus

## Testing

- Uses @testing-library/svelte with vitest and fireEvent
- Tests verify conditional rendering, dialog role, aria attributes, Escape close, passthrough attributes
