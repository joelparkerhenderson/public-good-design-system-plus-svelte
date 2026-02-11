# Button With Pressable Or Pressed

A toggle button component that distinguishes between "pressable" (can be
toggled) and "pressed" (currently active) states. This component is useful
for toolbar buttons, formatting toggles (bold, italic), filter buttons,
and any interface where a button needs to communicate an on/off state.

When the button is pressable, clicking it toggles between pressed and unpressed
states, with `aria-pressed` communicating the current state to screen readers.
When the button is not pressable, it behaves as a regular button without toggle
semantics.

The component exposes `data-pressable` and `data-pressed` attributes for
consumers to apply styling based on the toggle state.
