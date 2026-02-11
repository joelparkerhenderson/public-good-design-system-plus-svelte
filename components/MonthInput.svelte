<script lang="ts">
    // Component: MonthInput
    //
    // A headless month input using <input type="month">.
    //
    // Usage:
    //   <MonthInput label="Start month" bind:value />

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        label: string;
        value?: string;
        required?: boolean;
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input type="month" aria-label={label} bind:value {required} {disabled} {...restProps} />
