# Steps

## Implementation Notes

- Renders as `<ol aria-label={label}>` for sequential step semantics
- Ordered list conveys the sequential nature of steps
- All step content provided through children snippet (should be `<li>` elements)
- Consumers can add `aria-current="step"` to the active step

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- step items (should be `<li>` elements)
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None directly -- standard list navigation by screen readers

## ARIA

- Semantic `<ol>` for ordered/sequential content
- `aria-label` provides accessible name for the list
- Consumers should use `aria-current="step"` on the active step
