<script lang="ts">
    // Component: ButtonWithPressableOrPressed
    //
    // A headless toggle button that distinguishes between "pressable" (can be
    // toggled) and "pressed" (currently active) states. Useful for toolbar
    // buttons, filter toggles, and any UI where a button has an on/off state.
    //
    // Usage:
    //   <ButtonWithPressableOrPressed pressable pressed={isBold} onclick={toggleBold}>
    //     Bold
    //   </ButtonWithPressableOrPressed>
    //
    // Props:
    //   - pressable: Whether the button can be toggled (default: true)
    //   - pressed: Whether the button is currently in the pressed/active state (default: false, bindable)
    //   - disabled: Whether the button is disabled (default: false)
    //   - label: Accessible label override for screen readers (optional)
    //   - onclick: Click event handler
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: button (implicit from <button>)
    //   - ARIA: aria-pressed reflects the toggle state
    //   - Keyboard: Enter and Space toggle the pressed state
    //
    // Internationalization:
    //   - Button text comes through children snippet
    //   - Label override comes through label prop

    import type { Snippet } from "svelte";

    let {
        pressable = true,
        pressed = $bindable(false),
        disabled = false,
        label = undefined,
        onclick = undefined,
        children,
        ...restProps
    }: {
        /** Whether the button can be toggled */
        pressable?: boolean;
        /** Whether the button is currently pressed/active */
        pressed?: boolean;
        /** Whether the button is disabled */
        disabled?: boolean;
        /** Accessible label override */
        label?: string;
        /** Click event handler */
        onclick?: (event: MouseEvent) => void;
        /** The button content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function handleClick(event: MouseEvent) {
        if (pressable) {
            pressed = !pressed;
        }
        onclick?.(event);
    }
</script>

<!-- ButtonWithPressableOrPressed: a toggle button with pressable/pressed semantics -->
<button
    type="button"
    {disabled}
    aria-pressed={pressable ? pressed : undefined}
    aria-label={label}
    data-pressable={pressable}
    data-pressed={pressed}
    onclick={handleClick}
    {...restProps}
>
    {@render children()}
</button>
