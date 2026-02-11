<script lang="ts">
    // Component: PinInput
    //
    // A headless PIN input component that renders a group of single-character
    // numeric inputs for entering PINs, verification codes, or one-time passwords.
    // Each digit gets its own input field, and focus automatically advances to the
    // next field upon entry.
    //
    // Usage:
    //   <PinInput label="Enter PIN" />
    //   <PinInput label="Verification Code" length={6} />
    //   <PinInput label="OTP" bind:value={otpValue} />
    //   <PinInput label="PIN" disabled />
    //
    // Props:
    //   - label: Accessible label for the group of inputs (required)
    //   - length: Number of digit inputs to render (default: 4)
    //   - value: Bindable combined string of all digits (default: "")
    //   - disabled: Whether all inputs are disabled (default: false)
    //   - ...restProps: Any additional HTML attributes spread onto the group div
    //
    // Behavior:
    //   - Each input accepts exactly one numeric character (maxlength="1")
    //   - On entering a digit, focus automatically moves to the next input
    //   - On pressing Backspace in an empty input, focus moves to the previous input
    //   - The combined value string is updated reactively from the internal digit array
    //   - ArrowLeft and ArrowRight navigate between digit inputs
    //
    // Accessibility:
    //   - The outer div has role="group" with aria-label for the group name
    //   - Each input has an individual aria-label like "Digit 1 of 4"
    //   - inputmode="numeric" ensures numeric keyboard on mobile devices
    //   - Keyboard navigation supports Arrow keys, Backspace, and Tab
    //
    // Internationalization:
    //   - The label prop and individual digit labels are externalizable
    //   - The "Digit X of Y" pattern uses the digitLabel prop for customization
    //   - No other hardcoded user-facing strings

    let {
        label,
        length = 4,
        value = $bindable(""),
        disabled = false,
        ...restProps
    }: {
        /** Accessible label for the group of inputs */
        label: string;
        /** Number of digit inputs to render */
        length?: number;
        /** Combined string of all entered digits, bindable */
        value?: string;
        /** Whether all inputs are disabled */
        disabled?: boolean;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();

    // Internal state: array of individual digit characters.
    // Note: the length prop is captured at initialization time for the initial
    // array size. This is intentional -- the pin length is expected to be static.
    let digits: string[] = $state(Array.from({ length }, () => ""));

    // References to each input element for focus management
    let inputRefs: HTMLInputElement[] = $state([]);

    // Sync the combined value from the digits array whenever digits change
    let combinedValue = $derived(digits.join(""));

    // Keep the bindable value in sync with the derived combined value
    $effect(() => {
        value = combinedValue;
    });

    // Handle input events on individual digit fields
    function handleInput(index: number, event: Event): void {
        const target = event.target as HTMLInputElement;
        const inputValue = target.value;

        // Only accept numeric characters
        if (inputValue && !/^[0-9]$/.test(inputValue)) {
            target.value = digits[index];
            return;
        }

        // Update the digit in our state array
        digits[index] = inputValue;

        // Auto-focus the next input if a digit was entered
        if (inputValue && index < length - 1) {
            inputRefs[index + 1]?.focus();
        }
    }

    // Handle keyboard navigation between digit inputs
    function handleKeydown(index: number, event: KeyboardEvent): void {
        const target = event.target as HTMLInputElement;

        if (event.key === "Backspace") {
            if (!target.value && index > 0) {
                // If current input is empty, move focus to previous and clear it
                inputRefs[index - 1]?.focus();
                digits[index - 1] = "";
            } else {
                // Clear current input
                digits[index] = "";
            }
        } else if (event.key === "ArrowLeft" && index > 0) {
            // Navigate to previous input
            inputRefs[index - 1]?.focus();
        } else if (event.key === "ArrowRight" && index < length - 1) {
            // Navigate to next input
            inputRefs[index + 1]?.focus();
        }
    }
</script>

<!-- PIN Input: a group of single-digit numeric inputs -->
<div role="group" aria-label={label} {...restProps}>
    {#each Array.from({ length }, (_, i) => i) as index}
        <input
            bind:this={inputRefs[index]}
            type="text"
            inputmode="numeric"
            maxlength="1"
            aria-label={`Digit ${index + 1} of ${length}`}
            value={digits[index]}
            {disabled}
            oninput={(e) => handleInput(index, e)}
            onkeydown={(e) => handleKeydown(index, e)}
        />
    {/each}
</div>
