<script lang="ts">
    // Component: TelInput
    //
    // A headless telephone input using <input type="tel">.
    // Provides accessible labelling via aria-label and
    // browser autofill support via autocomplete="tel".
    //
    // Usage:
    //   <TelInput label="Phone number" bind:value />
    //   <TelInput label="Mobile" bind:value required />
    //
    // Props:
    //   - label: Accessible name for the input (required)
    //   - value: Bindable telephone string (default: "")
    //   - required: Whether the field is required (default: false)
    //   - disabled: Whether the field is disabled (default: false)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - aria-label provides the accessible name
    //   - autocomplete="tel" enables browser autofill
    //   - Supports required and disabled states
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - No hardcoded user-facing strings

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible name for the telephone input */
        label: string;
        /** Bindable telephone number value */
        value?: string;
        /** Whether the input is required */
        required?: boolean;
        /** Whether the input is disabled */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input type="tel" aria-label={label} bind:value autocomplete="tel" {required} {disabled} {...restProps} />
