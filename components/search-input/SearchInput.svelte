<script lang="ts">
    // Component: SearchInput
    //
    // A headless <input type="search"> with aria-label.
    // Provides semantic search input with bindable value.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable search string
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <SearchInput label="Search" bind:value />

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
    type="search"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
/>
