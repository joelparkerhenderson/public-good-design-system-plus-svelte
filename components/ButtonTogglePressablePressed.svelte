<script lang="ts">
    // ButtonTogglePressablePressed component
    //
    // A headless toggle button that distinguishes between "pressable" (can be
    // toggled) and "pressed" (currently active) states. When pressable, clicking
    // toggles between pressed and unpressed states with aria-pressed communicating
    // the state to screen readers. Useful for toolbar formatting buttons (bold,
    // italic), filter toggles, and any on/off button pattern.
    //
    // Props:
    //   pressable — boolean, default true. Whether the button can be toggled.
    //   pressed — boolean, default false, bindable. Current toggle state.
    //   disabled — boolean, default false. Whether the button is disabled.
    //   label — string, optional. Accessible label override via aria-label.
    //   onclick — (event: MouseEvent) => void, optional. Click handler (called after toggle).
    //   children — Snippet, required. The button content.
    //   ...restProps — additional HTML attributes spread onto the <button>.
    //
    // Syntax:
    //   <ButtonTogglePressablePressed bind:pressed={isBold}>Bold</ButtonTogglePressablePressed>
    //
    // Examples:
    //   <!-- Toolbar with multiple toggle buttons -->
    //   <div role="toolbar" aria-label="Formatting">
    //     <ButtonTogglePressablePressed bind:pressed={bold} label="Bold">B</ButtonTogglePressablePressed>
    //     <ButtonTogglePressablePressed bind:pressed={italic} label="Italic">I</ButtonTogglePressablePressed>
    //   </div>
    //
    //   <!-- Non-pressable mode (regular button behavior) -->
    //   <ButtonTogglePressablePressed pressable={false} onclick={handleAction}>Action</ButtonTogglePressablePressed>
    //
    // Keyboard:
    //   - Tab: Focus the button
    //   - Enter: Toggle the pressed state (or activate if not pressable)
    //   - Space: Toggle the pressed state (or activate if not pressable)
    //
    // Accessibility:
    //   - Implicit button role from <button> element
    //   - aria-pressed reflects the toggle state (only rendered when pressable is true)
    //   - Optional aria-label for screen reader text override
    //   - data-pressable and data-pressed attributes for CSS state selectors
    //
    // Internationalization:
    //   - Button text comes through children snippet; no hardcoded strings
    //   - Label override comes through label prop
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Internal click handler toggles pressed state, then calls consumer onclick
    //   - When pressable is false, aria-pressed is not rendered (regular button)
    //
    // References:
    //   - WAI-ARIA Button Pattern (toggle): https://www.w3.org/WAI/ARIA/apd/patterns/button/

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

<!-- ButtonTogglePressablePressed component: a toggle button with pressable/pressed semantics -->
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
