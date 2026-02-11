# Task Bar Item

A task bar item is a single button within a task bar, rendered as a native button element.
# TaskBarItem

## Implementation Notes

- A single button item within a TaskBar, rendered as a `<button type="button">`
- Supports a `disabled` prop to disable the button
- Content is provided through the children snippet
- Passes through all additional HTML attributes via `...restProps`
- Designed to be placed inside a TaskBar container

## Props

- `disabled`: boolean (default: false) -- whether the button is disabled
- `children`: Snippet (required) -- button content
- `...restProps`: Any additional HTML attributes passed to the `<button>` element

## Keyboard Interactions

- Tab: Focus the button
- Enter / Space: Activate the button (browser default)
- Button is skipped in tab order when `disabled` is true

## ARIA

- Implicit `button` role from `<button>` element
- `disabled` attribute communicates disabled state to assistive technology
