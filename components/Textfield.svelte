<script lang="ts">
    // Component: Textfield
    //
    // A headless <input type="text"> with aria-label. Functions as an
    // alias-like alternative to TextInput for naming convention flexibility.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable text value
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <Textfield label="Username" bind:value />

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current value. Bindable. */
        value?: string;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="text"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
