<script lang="ts">
    // TelLink component
    //
    // Displays a phone number as a clickable tel: link.
    //
    // Usage:
    //   <TelLink phone="+1-555-0100" />

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

<a
    href="tel:{phone}"
    aria-label={label}
    {...restProps}>{phone}</a
>
