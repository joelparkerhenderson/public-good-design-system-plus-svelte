# Calendar Board Item

A calendar board item is a single day cell within a calendar grid, supporting aria-selected for the chosen date and aria-current="date" for today.
# CalendarBoardItem

## Implementation Notes

- Renders as a `<td>` element with `role="gridcell"` for a single day cell in a calendar grid
- Supports `selected` and `today` states for visual and accessible indication
- Uses `tabindex` to manage focus: `0` when selected, `-1` otherwise (roving tabindex pattern)
- Content is provided through the children snippet (typically the day number)
- Designed to be used inside a CalendarBoard `<table>` / `<tr>` structure

## Props

- `selected`: boolean (default: false) -- whether this day cell is selected
- `today`: boolean (default: false) -- whether this day cell represents today's date
- `children`: Snippet (required) -- day content, typically the day number
- `...restProps`: Any additional HTML attributes passed to the `<td>` element

## Keyboard Interactions

- Tab: Focus moves to the selected cell (tabindex="0")
- Arrow keys: Typically handled by the parent CalendarBoard grid navigation

## ARIA

- `role="gridcell"` -- identifies the cell as part of a grid
- `aria-selected` -- set when the cell is selected
- `aria-current="date"` -- set when the cell represents today's date
