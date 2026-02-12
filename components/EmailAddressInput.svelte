<script lang="ts">
    // EmailAddressInput component
    //
    // An email address input wrapping a native <input type="email"> with accessible
    // labeling and browser autofill support via autocomplete="email". Provides
    // built-in browser validation for email format. Used for collecting email
    // addresses in registration forms, contact forms, and newsletter signups.
    //
    // Props:
    //   label — string, required. Accessible name via aria-label.
    //   value — string, default "". Current email value; bindable.
    //   placeholder — string, default undefined. Placeholder text shown when empty.
    //   required — boolean, default false. Whether the field is required.
    //   disabled — boolean, default false. Whether the field is disabled.
    //   ...restProps — additional HTML attributes spread onto the <input>.
    //
    // Syntax:
    //   <EmailAddressInput label="Email" bind:value />
    //
    // Examples:
    //   <!-- Basic email input -->
    //   <EmailAddressInput label="Email" bind:value />
    //
    //   <!-- With placeholder and required -->
    //   <EmailAddressInput label="Work email" bind:value placeholder="you@company.com" required />
    //
    // Keyboard:
    //   - None custom — keyboard behavior provided by the browser-native email input
    //
    // Accessibility:
    //   - aria-label provides the accessible name since no visible <label> is included
    //   - autocomplete="email" enables browser autofill
    //   - Native <input type="email"> provides built-in validation
    //
    // Internationalization:
    //   - The label and placeholder props accept any string; consumers provide localized text
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Sets autocomplete="email" for autofill support
    //   - Uses $bindable() on value for two-way binding
    //
    // References:
    //   - MDN input type="email": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email

    let {
        label,
        value = $bindable(""),
        placeholder = undefined,
        required = false,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current email value. Bindable. */
        value?: string;
        /** Placeholder text. */
        placeholder?: string;
        /** Whether the input is required. */
        required?: boolean;
        /** Whether the input is disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<input
    type="email"
    aria-label={label}
    bind:value
    {placeholder}
    {required}
    {disabled}
    autocomplete="email"
    {...restProps}
/>
