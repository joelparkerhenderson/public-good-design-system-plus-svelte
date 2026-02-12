<script lang="ts">
    // Toggle component
    //
    // A headless toggle button that provides a binary on/off control using
    // role="switch" with aria-checked. Supports both click and keyboard (Space
    // key) activation. Commonly used for settings like dark mode, notifications,
    // or feature flags. While similar to SwitchInput, this component uses a
    // "pressed" prop name, providing a semantic distinction for use cases where
    // "pressed/unpressed" better describes the interaction.
    //
    // Props:
    //   label — string, required. Accessible name via aria-label.
    //   pressed — boolean, default false. Whether the toggle is on; bindable with bind:pressed.
    //   disabled — boolean, default false. Whether the toggle is disabled.
    //   ...restProps — additional HTML attributes spread onto the <button>.
    //
    // Syntax:
    //   <Toggle label="Dark mode" bind:pressed />
    //
    // Examples:
    //   <!-- Mute toggle with conditional disabled -->
    //   <Toggle label="Mute audio" bind:pressed={muted} disabled={locked} />
    //
    // Keyboard:
    //   - Space: toggles between on and off states (custom handler with preventDefault)
    //   - Enter: activates the button (native button behavior)
    //
    // Accessibility:
    //   - role="switch" identifies the element as a two-state toggle switch
    //   - aria-checked={pressed} communicates on/off state
    //   - aria-label={label} provides the accessible name
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Uses $bindable() for two-way data binding on pressed prop
    //   - type="button" prevents accidental form submission
    //
    // References:
    //   - WAI-ARIA Switch Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/switch/
    //   - WAI-ARIA Switch Role: https://www.w3.org/TR/wai-aria-1.2/#switch

    let {
        label,
        pressed = $bindable(false),
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Whether pressed. Bindable. */
        pressed?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === " " && !disabled) {
            event.preventDefault();
            pressed = !pressed;
        }
    }
</script>

<!-- Toggle component: a button with role="switch" and aria-checked for pressed/unpressed toggling -->
<button
    type="button"
    role="switch"
    aria-checked={pressed}
    aria-label={label}
    {disabled}
    onclick={() => {
        if (!disabled) pressed = !pressed;
    }}
    onkeydown={handleKeydown}
    {...restProps}
></button>
