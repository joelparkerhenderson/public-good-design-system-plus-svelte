<script lang="ts">
    // Component: ColorInput
    //
    // A headless color input wrapping native <input type="color">.
    //
    // Usage:
    //   <ColorInput label="Background color" bind:value={color} />

    let {
        value = $bindable("#000000"),
        label,
        disabled = false,
        name = undefined,
        id = undefined,
        ...restProps
    }: {
        value?: string;
        label: string;
        disabled?: boolean;
        name?: string;
        id?: string;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="color"
    bind:value={value}
    aria-label={label}
    {disabled}
    {name}
    {id}
    {...restProps}
/>
