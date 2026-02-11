<script lang="ts">
    // Component: CheckboxInput
    //
    // A headless native checkbox input. Uses aria-label instead of wrapping <label>.

    let {
        checked = $bindable(false),
        label,
        disabled = false,
        required = false,
        name = undefined,
        id = undefined,
        value = undefined,
        ...restProps
    }: {
        checked?: boolean;
        label: string;
        disabled?: boolean;
        required?: boolean;
        name?: string;
        id?: string;
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="checkbox"
    bind:checked={checked}
    aria-label={label}
    {disabled}
    {required}
    {name}
    {id}
    {value}
    {...restProps}
/>
