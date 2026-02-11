# Medical Patient Banner Danger Box

A medical patient banner danger box is a container for critical patient
danger information. Uses `<aside role="alert">` with an aria-label to
immediately announce urgent content to screen readers, such as
life-threatening allergies or critical safety warnings.
# Medical Patient Banner Danger Box

## Implementation Notes

- Uses `<aside role="alert">` for immediate screen reader announcements
- Critical patient safety information such as life-threatening allergies
- `aria-label` provides the accessible name for the region
- `role="alert"` creates an implicit assertive live region
- Uses `children` Snippet for content
- Spreads `...restProps` on the root `<aside>` element

## Props

- `label`: string (required) -- accessible name via aria-label
- `children`: Snippet (required) -- the danger box content

## Keyboard Interactions

- None -- alerts are passive announcements, not interactive elements

## ARIA

- `role="alert"` creates an assertive live region
- `aria-label` set from `label` prop
- Screen readers immediately announce alert content

## References

- WAI-ARIA alert role: https://www.w3.org/TR/wai-aria-1.2/#alert
- WAI-ARIA Alert Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/alert/
