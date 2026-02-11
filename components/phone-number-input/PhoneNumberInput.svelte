<script lang="ts">
    // Component: PhoneNumberInput
    //
    // A headless telephone input using <input type="tel">.
    //
    // Usage:
    //   <PhoneNumberInput label="Phone" bind:value />

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

<input type="tel" aria-label={label} bind:value {required} {disabled} autocomplete="tel" {...restProps} />
