<script lang="ts">
    // PhoneNumberInput component
    //
    // A headless telephone input that wraps a native <input type="tel"> element with
    // accessible labelling and autocomplete="tel" for browser autofill support. It
    // provides a bindable value for telephone number entry. The type="tel" attribute
    // triggers an appropriate telephone keypad on mobile devices. Commonly used in
    // contact forms, registration flows, and account settings.
    //
    // Props:
    //   label — string, required. Accessible name for the input via aria-label.
    //   value — string, default "". Current phone number value; bindable with bind:value.
    //   required — boolean, default false. Whether the input is required.
    //   disabled — boolean, default false. Whether the input is disabled.
    //   ...restProps — additional HTML attributes spread onto the <input>.
    //
    // Syntax:
    //   <PhoneNumberInput label="Phone" bind:value />
    //
    // Examples:
    //   <!-- Basic phone number input -->
    //   <PhoneNumberInput label="Phone" bind:value />
    //
    //   <!-- Required phone input with placeholder -->
    //   <PhoneNumberInput label="Mobile number" bind:value required placeholder="+1 (555) 123-4567" />
    //
    // Keyboard:
    //   None at the component level — keyboard behavior is handled natively
    //   by the browser's telephone input implementation.
    //
    // Accessibility:
    //   - aria-label provides an accessible name describing the input purpose
    //   - autocomplete="tel" enables browser autofill of stored phone numbers
    //   - type="tel" triggers appropriate mobile keyboard
    //
    // Internationalization:
    //   - The label prop is the only user-facing text; no hardcoded strings
    //   - Consumer can pass pattern and placeholder via restProps for locale-specific formats
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Do not wrap in a <div> — renders a bare <input> element
    //   - Do not add phone number formatting — consumer handles validation and formatting
    //
    // References:
    //   - HTML tel input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel

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

<input
    type="tel"
    aria-label={label}
    bind:value
    {required}
    {disabled}
    autocomplete="tel"
    {...restProps}
/>
