<script lang="ts">
    // Component: ResetInput
    //
    // A headless <input type="reset"> button for resetting form fields.
    //
    // Props:
    //   value    — the button text (default "Reset")
    //   disabled — whether the button is disabled
    //
    // Usage:
    //   <ResetInput />
    //   <ResetInput value="Clear form" />

    let {
        value = "Reset",
        disabled = false,
        ...restProps
    }: {
        /** Button text. */
        value?: string;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="reset"
    {value}
    {disabled}
    {...restProps}
/>
