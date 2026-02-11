# AlertDialog

## Implementation Notes

- Uses native HTML `<dialog>` element with `showModal()` for proper modal behavior
- `role="alertdialog"` distinguishes from regular dialogs — indicates critical content requiring acknowledgment
- `$bindable()` open prop syncs with native dialog state
- `$effect()` manages showModal/close based on open prop changes
- Prevents default cancel behavior to manage state through the open prop

## Props

- `open`: boolean (default: false, bindable) — whether the dialog is visible
- `title`: string (required) — dialog heading, referenced by aria-labelledby
- `description`: string (optional) — dialog message, referenced by aria-describedby
- `children`: Snippet — action buttons and additional content

## Keyboard Interactions

- Escape: Closes the dialog (native behavior, synced with open prop)
- Tab: Focus is trapped within the dialog (native showModal behavior)

## ARIA

- `role="alertdialog"`
- `aria-modal="true"`
- `aria-labelledby` references the title element
- `aria-describedby` references the description element (when present)

## References

- WAI-ARIA alertdialog role: https://www.w3.org/TR/wai-aria-1.2/#alertdialog
- WAI-ARIA Alert and Message Dialogs Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/alertdialog/
