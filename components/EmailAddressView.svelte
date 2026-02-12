<script lang="ts">
    // EmailAddressView component
    //
    // Displays an email address as a clickable mailto link. When clicked, it opens
    // the user's default email client with the address pre-filled. This is the
    // read-only companion to EmailAddressInput, used for displaying email addresses
    // in profiles, contact lists, or user cards.
    //
    // Props:
    //   email — string, required. The email address to display and link to.
    //   label — string, default undefined. Optional accessible label override via aria-label.
    //   ...restProps — additional HTML attributes spread onto the <a> element.
    //
    // Syntax:
    //   <EmailAddressView email="alice@example.com" />
    //
    // Examples:
    //   <!-- Basic email display -->
    //   <EmailAddressView email="alice@example.com" />
    //
    //   <!-- With accessible label override for additional context -->
    //   <EmailAddressView email="support@example.com" label="Contact support team" />
    //
    // Keyboard:
    //   - None custom — Tab to focus, Enter to activate (native <a> link behavior)
    //
    // Accessibility:
    //   - aria-label optionally overrides the accessible name when email text alone is insufficient
    //   - Native <a> element provides built-in link semantics
    //
    // Internationalization:
    //   - The label prop accepts any string; consumers provide localized text
    //   - Email address display is inherently locale-independent
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Read-only companion to EmailAddressInput (Input/View pattern)
    //
    // References:
    //   - MDN mailto links: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#linking_to_an_email_address

    let {
        email,
        label = undefined,
        ...restProps
    }: {
        /** Email address to display. */
        email: string;
        /** Optional accessible label override. */
        label?: string;
        [key: string]: unknown;
    } = $props();
</script>

<a
    href="mailto:{email}"
    aria-label={label}
    {...restProps}
>
    {email}
</a>
