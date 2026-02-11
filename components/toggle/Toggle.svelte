<script lang="ts">
    // Component: Toggle
    //
    // A headless toggle button with role="switch" and aria-checked.
    // Similar to SwitchInput but presented as a button element.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   pressed  — bindable boolean for pressed/unpressed state
    //   disabled — whether the toggle is disabled
    //
    // Usage:
    //   <Toggle label="Dark mode" bind:pressed />

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

<button
    type="button"
    role="switch"
    aria-checked={pressed}
    aria-label={label}
    {disabled}
    onclick={() => { if (!disabled) pressed = !pressed; }}
    onkeydown={handleKeydown}
    {...restProps}
></button>
