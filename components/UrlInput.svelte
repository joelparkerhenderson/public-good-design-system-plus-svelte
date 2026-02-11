<script lang="ts">
    // Component: UrlInput
    //
    // A headless <input type="url"> with aria-label and bindable value.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable URL string
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <UrlInput label="Website URL" bind:value />

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
    type="url"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
