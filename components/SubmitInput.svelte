<script lang="ts">
    // Component: SubmitInput
    //
    // A headless <input type="submit"> button for form submission.
    //
    // Props:
    //   value    — the button text (default "Submit")
    //   disabled — whether the button is disabled
    //
    // Usage:
    //   <SubmitInput />
    //   <SubmitInput value="Send" />

    let {
        value = "Submit",
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
    type="submit"
    {value}
    {disabled}
    {...restProps}
/>
