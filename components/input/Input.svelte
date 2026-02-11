<script lang="ts">
    // Component: Input
    //
    // A headless text input with accessible label.
    //
    // Props:
    //   label    — accessible name (aria-label)
    //   value    — bindable string value
    //   type     — input type (default "text")
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <Input label="Search" bind:value />
    //   <Input label="Name" bind:value type="text" required />

    let {
        label,
        value = $bindable(""),
        type = "text",
        required = false,
        disabled = false,
        ...restProps
    }: {
        label: string;
        value?: string;
        type?: string;
        required?: boolean;
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    {type}
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
