<script lang="ts">
    // Component: Separator
    //
    // A headless <hr> element with role="separator" and optional label.
    // Used to visually and semantically separate sections of content.
    //
    // Props:
    //   label — optional accessible label describing the separation
    //
    // Usage:
    //   <Separator />
    //   <Separator label="Section break" />

    let {
        label = undefined,
        ...restProps
    }: {
        /** Optional accessible label. */
        label?: string;
        [key: string]: unknown;
    } = $props();
</script>

<hr
    role="separator"
    aria-label={label}
    {...restProps}
/>
