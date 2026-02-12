#

TourGuide is a headless guided walkthrough overlay that presents step-by-step instructions to users. It renders as a modal dialog when active and can be dismissed with the Escape key, providing a structured onboarding or feature discovery experience.

This component is useful for onboarding flows, feature tutorials, or contextual help systems. The `active` prop is bindable, allowing the consumer to programmatically start or stop the tour. Step content, navigation buttons, and progress indicators are provided by the consumer as children.

## Implementation Notes

- Conditionally renders a `<div>` with `role="dialog"` and `aria-modal="true"` when `active` is true
- Uses `aria-label` for an accessible name describing the tour
- Sets `tabindex="-1"` on the dialog to enable keyboard event capture
- Handles Escape key via an `onkeydown` handler that sets `active` to false
- Uses `$bindable(false)` for the `active` prop, enabling two-way binding
- Spreads `restProps` onto the dialog container for consumer customization

## Props

- `label`: string (required) -- accessible name for the tour dialog via `aria-label`
- `active`: boolean (default: `false`) -- whether the tour is currently visible; bindable with `bind:active`
- `children`: Snippet (required) -- tour step content, navigation controls, and any additional UI
- `...restProps`: unknown -- additional attributes spread onto the dialog `<div>`

## Usage

```svelte
<Tour label="Getting started" bind:active>
  <p>Welcome to the app!</p>
</Tour>
```

## Keyboard Interactions

- Escape: Closes the tour by setting `active` to false

## ARIA

- `role="dialog"` -- identifies the tour overlay as a dialog window
- `aria-modal="true"` -- indicates the dialog is modal and content behind it is inert
- `aria-label={label}` -- provides an accessible name describing the tour
- `tabindex="-1"` -- allows the dialog element to receive focus for keyboard event handling

## References

- WAI-ARIA Dialog Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
