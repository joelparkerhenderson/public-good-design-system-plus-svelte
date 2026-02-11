<script lang="ts">
    // Component: EmailAddressView
    //
    // Displays an email address as a mailto link.
    //
    // Props:
    //   email — the email address to display and link to
    //   label — optional aria-label override
    //
    // Usage:
    //   <EmailAddressView email="alice@example.com" />

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

<a href="mailto:{email}" aria-label={label} {...restProps}>
    {email}
</a>
