<script lang="ts">
    // Component: PhoneNumberView
    //
    // Displays a phone number as a clickable tel: link.
    //
    // Usage:
    //   <PhoneNumberView phone="+1-555-0100" />

    let {
        phone,
        label = undefined,
        ...restProps
    }: {
        phone: string;
        label?: string;
        [key: string]: unknown;
    } = $props();
</script>

<a href="tel:{phone}" aria-label={label} {...restProps}>{phone}</a>
