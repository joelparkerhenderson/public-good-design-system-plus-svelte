<script lang="ts">
    // Component: ThemeView
    //
    // A headless display of the current theme name.
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — the current theme name to display
    //
    // Usage:
    //   <ThemeView label="Current theme" value="dark" />

    let {
        label,
        value,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Theme value to display. */
        value: string;
        [key: string]: unknown;
    } = $props();
</script>

<span aria-label={label} {...restProps}>{value}</span>
