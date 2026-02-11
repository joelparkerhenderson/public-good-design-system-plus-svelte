<script lang="ts">
    // Component: Option
    //
    // A headless <option> element wrapper for use inside <select> elements.
    // Passes a value prop and renders children as the option label text.
    //
    // Usage:
    //   <select>
    //     <Option value="us">United States</Option>
    //     <Option value="uk">United Kingdom</Option>
    //   </select>
    //
    // Props:
    //   - value: The option value submitted with the form (required)
    //   - selected: Whether this option is selected (default: false)
    //   - disabled: Whether this option is disabled (default: false)
    //   - children: Snippet for the option label text
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Native <option> element provides built-in accessibility
    //   - Screen readers announce the option text and selected state
    //
    // Internationalization:
    //   - Option label text comes through children snippet
    //   - No hardcoded user-facing strings

    import type { Snippet } from "svelte";

    let {
        value,
        selected = false,
        disabled = false,
        children,
        ...restProps
    }: {
        /** The value of this option */
        value: string;
        /** Whether this option is pre-selected */
        selected?: boolean;
        /** Whether this option is disabled */
        disabled?: boolean;
        /** The option label content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<option {value} {selected} {disabled} {...restProps}>{@render children()}</option>
