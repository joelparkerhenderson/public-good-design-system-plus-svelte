<script lang="ts">
    // Component: Button
    //
    // A headless button component for triggering actions. Uses the native
    // HTML <button> element for inherent accessibility and keyboard support.
    //
    // Usage:
    //   <Button onclick={handleClick}>Click me</Button>
    //   <Button type="submit" disabled={isSubmitting}>Submit</Button>
    //   <Button pressed={isToggled} onclick={toggle}>Toggle</Button>
    //
    // Props:
    //   - type: HTML button type — "button" | "submit" | "reset" (default: "button")
    //   - disabled: Whether the button is disabled (default: false)
    //   - pressed: For toggle buttons, the current pressed state (default: undefined)
    //   - label: Accessible label override for screen readers (optional)
    //   - onclick: Click event handler
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: button (implicit from <button>)
    //   - Keyboard: Enter and Space activate the button
    //   - ARIA: aria-pressed for toggle buttons, aria-disabled for disabled state
    //   - ARIA: aria-label for screen reader text override
    //
    // Internationalization:
    //   - Button text comes through children snippet
    //   - Label override comes through label prop

    import type { Snippet } from "svelte";

    let {
        type = "button",
        disabled = false,
        pressed = undefined,
        label = undefined,
        onclick = undefined,
        children,
        ...restProps
    }: {
        /** HTML button type */
        type?: "button" | "submit" | "reset";
        /** Whether the button is disabled */
        disabled?: boolean;
        /** Toggle button pressed state (undefined = not a toggle button) */
        pressed?: boolean;
        /** Accessible label override */
        label?: string;
        /** Click event handler */
        onclick?: (event: MouseEvent) => void;
        /** The button content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- Button: a semantic button element for triggering actions -->
<button
    {type}
    {disabled}
    aria-pressed={pressed}
    aria-label={label}
    {onclick}
    {...restProps}
>
    {@render children()}
</button>
