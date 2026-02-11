# Clipboard

A clipboard component provides a button that copies specified text to the
system clipboard when activated. It uses the Clipboard API
(`navigator.clipboard.writeText`) and exposes success and error callbacks.

The component tracks a `copied` state that is exposed via `data-copied`
attribute, allowing consumers to show visual feedback (e.g., "Copied!"
indicator) through CSS.
