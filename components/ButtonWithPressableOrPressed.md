# ButtonWithPressableOrPressed

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

## Implementation Notes

- Toggle button using `aria-pressed` for accessibility
- `pressable` prop controls whether the button can be toggled
- When `pressable` is false, `aria-pressed` is not rendered (regular button)
- Clicking toggles the `pressed` state via `$bindable()`
- `data-pressable` and `data-pressed` attributes for CSS state selectors
- Internal click handler toggles state then calls consumer's `onclick`

## Props

- `pressable`: boolean (default: true) -- whether the button can be toggled
- `pressed`: boolean (default: false, bindable) -- current toggle state
- `disabled`: boolean (default: false)
- `label`: string (optional) -- aria-label override
- `onclick`: callback (optional) -- click handler (called after toggle)
- `children`: Snippet -- button content
- `...restProps`: Any additional HTML attributes

## Usage

Basic toggle button:

```svelte
<script lang="ts">
  import ButtonWithPressableOrPressed from './ButtonWithPressableOrPressed.svelte';

  let isBold = $state(false);
</script>

<ButtonWithPressableOrPressed bind:pressed={isBold}>
  Bold
</ButtonWithPressableOrPressed>
```

Toolbar with multiple toggle buttons:

```svelte
<script lang="ts">
  import ButtonWithPressableOrPressed from './ButtonWithPressableOrPressed.svelte';

  let bold = $state(false);
  let italic = $state(false);
  let underline = $state(false);
</script>

<div role="toolbar" aria-label="Formatting">
  <ButtonWithPressableOrPressed bind:pressed={bold} label="Bold">
    B
  </ButtonWithPressableOrPressed>
  <ButtonWithPressableOrPressed bind:pressed={italic} label="Italic">
    I
  </ButtonWithPressableOrPressed>
  <ButtonWithPressableOrPressed bind:pressed={underline} label="Underline">
    U
  </ButtonWithPressableOrPressed>
</div>
```

Non-pressable mode (acts as a regular button):

```svelte
<ButtonWithPressableOrPressed pressable={false} onclick={handleAction}>
  Action
</ButtonWithPressableOrPressed>
```

## Keyboard Interactions

- Tab: Focus the button
- Enter/Space: Toggle the pressed state (native button behavior)

## ARIA

- Implicit `button` role
- `aria-pressed` reflects toggle state (only when pressable)
- Optional `aria-label`

## References

- WAI-ARIA Button Pattern (toggle): https://www.w3.org/WAI/ARIA/apd/patterns/button/
