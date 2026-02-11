# Tool Bar Item

A tool bar item is a single button within a toolbar, rendered as a native button element for proper keyboard and screen reader support.
# ToolBarItem

## Implementation Notes

- A single button item within a ToolBar, rendered as a `<button type="button">`
- Supports a `disabled` prop to disable the button
- Content is provided through the children snippet
- Passes through all additional HTML attributes via `...restProps`
- Designed to be placed inside a ToolBar container that manages keyboard navigation

## Props

- `disabled`: boolean (default: false) -- whether the button is disabled
- `children`: Snippet (required) -- button content
- `...restProps`: Any additional HTML attributes passed to the `<button>` element

## Keyboard Interactions

- Tab: Focus the button (when not inside a ToolBar managing roving focus)
- Enter / Space: Activate the button (browser default)
- Arrow keys: Handled by parent ToolBar for roving focus navigation
- Button is skipped in tab order when `disabled` is true

## ARIA

- Implicit `button` role from `<button>` element
- `disabled` attribute communicates disabled state to assistive technology
