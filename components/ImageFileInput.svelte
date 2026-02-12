<script lang="ts">
    // ImageFileInput component
    //
    // File input accepting images only.
    let {
        label,
        accept = "image/*",
        required = false,
        disabled = false,
        ...restProps
    }: {
        label: string;
        accept?: string;
        required?: boolean;
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<!-- ImageFileInput component: TODO -->
<input
    type="file"
    aria-label={label}
    {accept}
    {required}
    {disabled}
    {...restProps}
/>
