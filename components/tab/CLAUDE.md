# Tab

## Implementation Notes

- Renders as `<button role="tab">` for proper tab semantics
- `aria-selected` reflects active/inactive state
- `aria-controls` links to the associated tabpanel id
- Roving tabindex: selected tab has tabindex=0, others have tabindex=-1
- Should be placed within a `role="tablist"` container

## Props

- `selected`: boolean (default: false) -- whether this tab is active
- `controls`: string (required) -- id of the associated tabpanel
- `children`: Snippet -- tab label content
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- Tab: moves focus to the selected tab in the tablist
- ArrowLeft/ArrowRight: moves between tabs (handled by parent tablist)
- Enter/Space: activates the tab (native button behavior)

## ARIA

- `role="tab"` identifies this as a tab
- `aria-selected` communicates selection state
- `aria-controls` links to the corresponding tabpanel
- Roving `tabindex` (0 for selected, -1 for unselected)
