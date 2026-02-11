<script lang="ts">
    // Component: EmailInput
    //
    // A headless email input with aria-label. Simple wrapper around
    // <input type="email"> with bindable value.
    //
    // Props:
    //   label    — accessible name
    //   value    — bindable email value
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <EmailInput label="Your email" bind:value />

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
    type="email"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
