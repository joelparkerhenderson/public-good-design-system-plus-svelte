<script lang="ts">
    // Component: Textarea
    //
    // A headless <textarea> element with aria-label and bindable value.
    // Used for multi-line text input.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable text value
    //   rows     — number of visible text rows
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <Textarea label="Comments" bind:value rows={5} />

    let {
        label,
        value = $bindable(""),
        rows = undefined,
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current value. Bindable. */
        value?: string;
        /** Number of visible rows. */
        rows?: number;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<textarea
    aria-label={label}
    bind:value
    {rows}
    {required}
    {disabled}
    {...restProps}
></textarea>
