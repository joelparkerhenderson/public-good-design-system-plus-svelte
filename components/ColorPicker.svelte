<script lang="ts">
    // ColorPicker component
    //
    // A headless color picker wrapping the native <input type="color"> element with
    // an accessible label and two-way binding. It delegates all visual presentation
    // to the browser's built-in color picker UI. Commonly used in design tools, theme
    // customizers, form builders, and creative applications for intuitive color selection.
    //
    // Props:
    //   label — string, required. Accessible name applied via aria-label.
    //   value — string, default "#000000". Current color value as a hex string; bindable.
    //   disabled — boolean, default false. Whether the color picker is disabled.
    //   ...restProps — additional HTML attributes spread onto the <input>.
    //
    // Syntax:
    //   <ColorPicker label="Background color" bind:value />
    //
    // Examples:
    //   <!-- Disabled color picker -->
    //   <ColorPicker label="Text color" bind:value disabled />
    //
    // Keyboard:
    //   - Tab: Move focus to/from the color input (native behavior)
    //   - Enter/Space: Open the browser's native color picker dialog (native behavior)
    //
    // Accessibility:
    //   - aria-label provides an accessible name for the color input
    //
    // Internationalization:
    //   - The label prop provides the accessible name; no hardcoded strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Renders a bare <input type="color"> with no wrapper element
    //   - Uses $bindable() for two-way binding on the value prop
    //
    // References:
    //   - MDN input type="color": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

    let {
        label,
        value = $bindable("#000000"),
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current color value. Bindable. */
        value?: string;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="color"
    aria-label={label}
    bind:value
    {disabled}
    {...restProps}
/>
