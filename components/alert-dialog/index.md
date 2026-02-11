# Alert Dialog

An alert dialog is a modal dialog that interrupts the user's workflow to
communicate critical information and require a response. Unlike regular dialogs,
alert dialogs demand immediate attention — they are used for important warnings,
confirmations of destructive actions, or error conditions that must be
acknowledged before the user can continue.

Alert dialogs automatically trap focus within themselves and can be dismissed
with the Escape key. They are distinguished from standard dialogs by the
`alertdialog` ARIA role, which signals to assistive technologies that the
content requires the user's immediate attention.

Common uses include confirming irreversible actions (e.g., "Delete this item?"),
warning about unsaved changes, or displaying critical error messages that
require acknowledgment.
