<script lang="ts">
    // Component: EmailAddressInput
    //
    // A headless email input. Wraps <input type="email"> with accessible label.
    //
    // Props:
    //   label       — accessible name (aria-label)
    //   value       — bindable email string
    //   placeholder — placeholder text
    //   required    — whether the field is required
    //   disabled    — whether the field is disabled
    //
    // Usage:
    //   <EmailAddressInput label="Email" bind:value />

    let {
        label,
        value = $bindable(""),
        placeholder = undefined,
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current email value. Bindable. */
        value?: string;
        /** Placeholder text. */
        placeholder?: string;
        /** Whether the input is required. */
        required?: boolean;
        /** Whether the input is disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="email"
    aria-label={label}
    bind:value
    {placeholder}
    {required}
    {disabled}
    autocomplete="email"
    {...restProps}
/>
