<script lang="ts">
    // Component: Checkbox
    //
    // A headless checkbox component built on native <input type="checkbox">
    // with accessible labeling and ARIA support.
    //
    // Usage:
    //   <Checkbox label="Accept terms" bind:checked={accepted} />
    //   <Checkbox label="Subscribe" name="subscribe" checked />
    //   <Checkbox label="Select all" indeterminate />
    //
    // Accessibility:
    //   - Role: checkbox (implicit from input[type="checkbox"])
    //   - Keyboard: Space to toggle
    //   - ARIA: aria-checked, aria-required, aria-describedby

    let {
        checked = $bindable(false),
        indeterminate = false,
        label,
        disabled = false,
        required = false,
        name = undefined,
        id = undefined,
        value = undefined,
        describedby = undefined,
        ...restProps
    }: {
        checked?: boolean;
        indeterminate?: boolean;
        label: string;
        disabled?: boolean;
        required?: boolean;
        name?: string;
        id?: string;
        value?: string;
        describedby?: string;
        [key: string]: unknown;
    } = $props();
</script>

<label {...restProps}>
    <input
        type="checkbox"
        bind:checked={checked}
        {indeterminate}
        {disabled}
        {required}
        {name}
        {id}
        {value}
        aria-describedby={describedby}
    />
    {label}
</label>
