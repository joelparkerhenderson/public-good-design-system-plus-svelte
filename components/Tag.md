# Tag

A tag is a small UI/UX component used to label, categorize, or indicate the
status of an item. Tags are commonly used in content management systems, product
listings, article metadata, and filtering interfaces to visually group or
classify content. They typically display short text such as category names,
keywords, status labels, or attribute values.

Tags help users quickly scan and identify relevant information, and are often
presented as inline elements alongside other content. Effective tag design
ensures clear readability, appropriate contrast, and accessible labeling so that
screen readers can convey the tag's purpose and content to users of assistive
technology.
# Tag

## Implementation Notes

- Renders as `<span role="status" aria-label={label}>` for status announcements
- `role="status"` creates a live region for screen reader announcements
- All visible content provided through children snippet

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- tag content
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None -- tags are informational, not interactive

## ARIA

- `role="status"` for live region announcements
- `aria-label` provides accessible name from label prop
