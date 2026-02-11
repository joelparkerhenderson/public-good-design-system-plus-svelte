<script lang="ts">
    // Component: FileInput
    //
    // A headless file input. Wraps <input type="file"> with aria-label.
    //
    // Props:
    //   label    — accessible name
    //   accept   — accepted file types (e.g. "image/*,.pdf")
    //   multiple — allow multiple file selection
    //   required — whether required
    //   disabled — whether disabled
    //
    // Usage:
    //   <FileInput label="Upload photo" accept="image/*" />

    let {
        label,
        accept = undefined,
        multiple = false,
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Accepted file types. */
        accept?: string;
        /** Allow multiple files. */
        multiple?: boolean;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="file"
    aria-label={label}
    {accept}
    {multiple}
    {required}
    {disabled}
    {...restProps}
/>
