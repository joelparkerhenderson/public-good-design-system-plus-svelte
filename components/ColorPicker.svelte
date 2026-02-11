<script lang="ts">
    // Component: ColorPicker
    //
    // A headless color picker wrapping the native color input.
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — bindable color value (hex string)
    //
    // Usage:
    //   <ColorPicker label="Background color" bind:value />

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

<input type="color" aria-label={label} bind:value {disabled} {...restProps} />
