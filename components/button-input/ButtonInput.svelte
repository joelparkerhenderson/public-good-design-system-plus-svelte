<script lang="ts">
    // Component: ButtonInput
    //
    // A headless component wrapping the native HTML <input type="button">.
    // Unlike the Button component which uses <button> with children,
    // this uses <input type="button"> where the label is the value attribute.
    //
    // Usage:
    //   <ButtonInput value="Click me" onclick={handleClick} />
    //   <ButtonInput value="Submit" disabled />
    //
    // Props:
    //   - value: The button label text displayed on the input (required)
    //   - disabled: Whether the input is disabled (default: false)
    //   - name: Form field name (optional)
    //   - label: Accessible label override for screen readers (optional)
    //   - onclick: Click event handler
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: button (implicit from input[type="button"])
    //   - Keyboard: Enter and Space activate the button
    //   - ARIA: aria-label for screen reader text override
    //
    // Internationalization:
    //   - Button label comes through the value prop
    //   - Label override comes through label prop

    let {
        value,
        disabled = false,
        name = undefined,
        label = undefined,
        onclick = undefined,
        ...restProps
    }: {
        /** The button label text */
        value: string;
        /** Whether the input is disabled */
        disabled?: boolean;
        /** Form field name */
        name?: string;
        /** Accessible label override for screen readers */
        label?: string;
        /** Click event handler */
        onclick?: (event: MouseEvent) => void;
        [key: string]: unknown;
    } = $props();
</script>

<!-- ButtonInput: a native input[type="button"] element -->
<input
    type="button"
    {value}
    {disabled}
    {name}
    aria-label={label}
    {onclick}
    {...restProps}
/>
