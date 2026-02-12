# RangeCalendar

A range calendar is a component that presents a calendar grid specifically designed for selecting a range of dates, highlighting the span between a chosen start date and end date. Commonly used in booking interfaces, vacation planners, availability selectors, and reporting date filters, the range calendar provides a visual representation of consecutive days that makes it easy for users to see and adjust their selected date span.

This headless component renders a `<div>` with `role="application"` and an accessible label, providing a container for rich calendar-based date range selection. Unlike a standard date picker that selects a single date, the range calendar emphasizes the continuous interval between two dates. The consumer provides the calendar grid, selection logic, and range highlighting as children.

## Implementation Notes

- Renders a `<div>` with `role="application"` to support rich keyboard interactions beyond standard navigation
- Consumer provides all calendar grid rendering, date selection logic, and range highlighting
- The `role="application"` signals to screen readers that the widget handles its own keyboard interactions
- Accepts `...restProps` for forwarding additional attributes to the container
- No internal state -- purely a structural wrapper

## Props

- `label`: string (required) -- accessible name describing the calendar purpose, applied via `aria-label`
- `children`: Snippet (required) -- the calendar grid content including date cells and navigation controls

## Usage

```svelte
<RangeCalendar label="Select vacation dates">
    <!-- calendar grid with date cells and range highlighting -->
</RangeCalendar>
```

## Keyboard Interactions

None built-in -- the consumer should implement date cell navigation (arrow keys), selection (Enter/Space), and range extension as appropriate.

## ARIA

- `role="application"` -- indicates that the widget manages its own keyboard interactions, overriding standard screen reader navigation
- `aria-label={label}` -- provides an accessible name for the range calendar

## References

- WAI-ARIA Application Role: https://www.w3.org/TR/wai-aria-1.2/#application
- WAI-ARIA Grid Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/grid/
