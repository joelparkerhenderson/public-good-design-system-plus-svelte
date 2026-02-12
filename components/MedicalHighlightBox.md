# MedicalHighlightBox

A medical highlight box is a container for highlighting important medical information. It uses `<aside role="note">` with an `aria-label` to semantically mark supplementary content such as allergy warnings, clinical notes, or other medical information that requires attention.

This component is designed for healthcare interfaces where certain information needs to stand out contextually within a patient record or clinical workflow. Screen readers announce the label when entering the region, ensuring the highlighted content is discoverable by assistive technology users.

## Implementation Notes

- Uses `<aside role="note">` to mark supplementary medical information
- `aria-label` provides the accessible name for the region
- All content is provided through the children snippet
- Spreads `...restProps` on the root `<aside>` element for consumer customization

## Props

- `label`: string (required) -- accessible name for the highlight box, applied via `aria-label`
- `children`: Snippet (required) -- the highlight box content
- `...restProps`: Any additional HTML attributes spread onto the `<aside>`

## Usage

```svelte
<MedicalHighlightBox label="Allergy warning">
  <p>Patient is allergic to penicillin.</p>
</MedicalHighlightBox>
```

## Keyboard Interactions

- None -- this is a passive container, not an interactive element

## ARIA

- `role="note"` -- marks the content as supplementary information
- `aria-label` -- set from the `label` prop, provides the accessible name for the region

## References

- WAI-ARIA note role: https://www.w3.org/TR/wai-aria-1.2/#note
