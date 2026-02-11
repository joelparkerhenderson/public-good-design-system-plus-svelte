<script lang="ts">
    // Component: PostalCodeInput
    //
    // A headless text input for postal/zip codes with appropriate
    // autocomplete and ARIA attributes.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable postal code string
    //   required — whether the field is required
    //   disabled — whether the field is disabled
    //
    // Usage:
    //   <PostalCodeInput label="Postal code" bind:value />

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
    autocomplete="postal-code"
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
