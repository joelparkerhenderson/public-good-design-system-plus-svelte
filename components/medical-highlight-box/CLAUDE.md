# Medical Highlight Box

## Implementation Notes

- Uses `<aside role="note">` to mark supplementary medical information
- `aria-label` provides the accessible name for the region
- Uses `children` Snippet for content
- Spreads `...restProps` on the root `<aside>` element
- Modeled after the InformationCallout component pattern

## Props

- `label`: string (required) -- accessible name via aria-label
- `children`: Snippet (required) -- the highlight box content

## Keyboard Interactions

- None -- this is a passive container, not an interactive element

## ARIA

- `role="note"` marks supplementary information
- `aria-label` set from `label` prop

## References

- WAI-ARIA note role: https://www.w3.org/TR/wai-aria-1.2/#note
