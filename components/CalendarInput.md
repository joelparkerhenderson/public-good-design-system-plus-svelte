# Calendar

A calendar is a UI/UX component that displays dates in a structured, visual
format—typically as a monthly grid—and allows users to view, select, or interact
with specific dates. It's commonly used for scheduling, booking, event planning,
or setting deadlines in applications like calendars, to-do lists, or reservation
systems. A well-designed calendar component enhances usability by making date
selection intuitive and efficient, often including features like date pickers,
highlighted current dates, and navigational arrows for switching between months
or years. It helps users manage time-based tasks with clarity and ease,
contributing to a more organized and user-friendly experience.
# CalendarInput

## Implementation Notes

- Wraps native `<input type="date">` for browser-native date picker
- `$bindable()` for two-way value binding
- Value format is always YYYY-MM-DD (ISO 8601)
- `aria-label` used for headless accessibility

## Props

- `value`: string (default: "", bindable) — date in YYYY-MM-DD format
- `label`: string (required) — accessible label
- `min`, `max`: string (optional) — date range constraints
- `disabled`, `required`: boolean (default: false)

## ARIA

- `aria-label` from label prop
